// Server-only HubSpot CRM client for quote submissions. Never import this from a client component.
//
// Authenticates with the HUBSPOT_SERVICE_KEY env var (a HubSpot service key, sent as a Bearer token).
//
// Keep this file free of runtime imports and of TypeScript syntax that Node can't strip (enums,
// parameter properties) so scripts/test-hubspot.mjs can load it directly with Node's type stripping.
import type { QuoteRequest } from './quote';

const API_BASE = 'https://api.hubapi.com';
const REQUEST_TIMEOUT_MS = 10_000;
const PROPERTY_CACHE_TTL_MS = 10 * 60 * 1000;

export const INSURANCE_PRODUCT_PROPERTY = 'insurance_product';
export const LEAD_SOURCE_PROPERTY = 'coveredlife_lead_source';

// Label (or internal value) of the option in the HubSpot "coveredlife_lead_source" dropdown that marks
// leads from this form. Run `node scripts/test-hubspot.mjs --inspect` to list the options HubSpot has.
export const QUOTE_LEAD_SOURCE = 'Website Quote Form';

// Errors carry only our own message plus HubSpot's status, category and correlation id. HubSpot's
// response text is deliberately left out because it can echo submitted values (emails, phone numbers).
export class HubSpotError extends Error {
  status: number; // HTTP status; 0 when no response was received or the problem is local.
  category: string | undefined;
  correlationId: string | undefined;

  constructor(message: string, details: { status?: number; category?: string; correlationId?: string } = {}) {
    super(message);
    this.name = 'HubSpotError';
    this.status = details.status ?? 0;
    this.category = details.category;
    this.correlationId = details.correlationId;
  }
}

export interface HubSpotPropertyOption {
  label: string;
  value: string;
  hidden: boolean;
}

export interface HubSpotProperty {
  name: string;
  label: string;
  type: string;
  fieldType: string;
  options: HubSpotPropertyOption[];
}

type Json = Record<string, unknown>;

export function isHubSpotConfigured(): boolean {
  return Boolean(process.env.HUBSPOT_SERVICE_KEY);
}

async function hubspotRequest(
  method: 'GET' | 'POST',
  path: string,
  operation: string,
  body?: unknown,
): Promise<{ status: number; data: Json | null }> {
  const key = process.env.HUBSPOT_SERVICE_KEY;
  if (!key) throw new HubSpotError('HUBSPOT_SERVICE_KEY is not set');

  let response: Response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      method,
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    throw new HubSpotError(`HubSpot ${operation}: no response received`);
  }

  const parsed: unknown = await response.json().catch(() => null);
  const data = parsed && typeof parsed === 'object' ? (parsed as Json) : null;
  return { status: response.status, data };
}

function failure(operation: string, status: number, data: Json | null): HubSpotError {
  return new HubSpotError(`HubSpot ${operation} failed with status ${status}`, {
    status,
    category: typeof data?.category === 'string' ? data.category : undefined,
    correlationId: typeof data?.correlationId === 'string' ? data.correlationId : undefined,
  });
}

const propertyCache = new Map<string, { at: number; property: HubSpotProperty }>();

// Reads a contact property definition (including dropdown options) from HubSpot, cached briefly.
export async function getContactProperty(name: string): Promise<HubSpotProperty> {
  const cached = propertyCache.get(name);
  if (cached && Date.now() - cached.at < PROPERTY_CACHE_TTL_MS) return cached.property;

  const { status, data } = await hubspotRequest(
    'GET',
    `/crm/v3/properties/contacts/${encodeURIComponent(name)}`,
    `read property ${name}`,
  );
  if (status !== 200 || !data) throw failure(`read property ${name}`, status, data);

  const rawOptions = Array.isArray(data.options) ? (data.options as Json[]) : [];
  const property: HubSpotProperty = {
    name: String(data.name ?? name),
    label: String(data.label ?? name),
    type: String(data.type ?? ''),
    fieldType: String(data.fieldType ?? ''),
    options: rawOptions.map((option) => ({
      label: String(option.label ?? ''),
      value: String(option.value ?? ''),
      hidden: option.hidden === true,
    })),
  };
  propertyCache.set(name, { at: Date.now(), property });
  return property;
}

function normalise(text: string): string {
  return text.trim().toLowerCase();
}

// Maps a human label (or an already-internal value) to the option's internal value. Throws if HubSpot
// has no such visible option, so we never submit a value HubSpot would reject or silently drop.
export function resolveOptionValue(property: HubSpotProperty, wanted: string): string {
  const visible = property.options.filter((option) => !option.hidden);
  const match =
    visible.find((option) => normalise(option.label) === normalise(wanted)) ??
    visible.find((option) => normalise(option.value) === normalise(wanted));
  if (!match) throw new HubSpotError(`Property "${property.name}" has no option matching "${wanted}"`);
  return match.value;
}

// Encodes the selected products for the insurance_product property, whatever type it was set up as.
export function encodeInsuranceProducts(property: HubSpotProperty, products: readonly string[]): string {
  if (property.type !== 'enumeration') return products.join('; ');

  const values = products.map((product) => resolveOptionValue(property, product));
  if (property.fieldType === 'checkbox') return values.join(';'); // HubSpot multi-select separator
  if (values.length > 1) {
    throw new HubSpotError(
      `Property "${property.name}" is single-select (${property.fieldType}) but ${values.length} products were selected`,
    );
  }
  return values[0];
}

export function splitFullName(fullName: string): { firstname: string; lastname: string } {
  const parts = fullName.trim().split(/\s+/);
  const firstname = parts.shift() ?? '';
  return { firstname, lastname: parts.join(' ') };
}

// Builds the HubSpot contact properties for a quote, after checking the dropdown values against HubSpot.
export async function buildContactProperties(quote: QuoteRequest): Promise<Record<string, string>> {
  const [productProperty, leadSourceProperty] = await Promise.all([
    getContactProperty(INSURANCE_PRODUCT_PROPERTY),
    getContactProperty(LEAD_SOURCE_PROPERTY),
  ]);

  const { firstname, lastname } = splitFullName(quote.fullName);
  const properties: Record<string, string> = {
    firstname,
    email: quote.email.trim().toLowerCase(),
    phone: quote.phone,
    [INSURANCE_PRODUCT_PROPERTY]: encodeInsuranceProducts(productProperty, quote.products),
    [LEAD_SOURCE_PROPERTY]:
      leadSourceProperty.type === 'enumeration'
        ? resolveOptionValue(leadSourceProperty, QUOTE_LEAD_SOURCE)
        : QUOTE_LEAD_SOURCE,
  };
  // Omitted when empty so a single-word name can't blank an existing contact's last name.
  if (lastname) properties.lastname = lastname;
  return properties;
}

// Creates the contact, or updates it if one with this email already exists.
export async function upsertContact(
  properties: Record<string, string>,
): Promise<{ status: number; id: string; created: boolean }> {
  const { status, data } = await hubspotRequest(
    'POST',
    '/crm/v3/objects/contacts/batch/upsert',
    'upsert contact',
    { inputs: [{ idProperty: 'email', id: properties.email, properties }] },
  );
  if (status < 200 || status >= 300 || !data) throw failure('upsert contact', status, data);

  const results = Array.isArray(data.results) ? (data.results as Json[]) : [];
  const errors = Array.isArray(data.errors) ? data.errors : [];
  const result = results[0];
  if (errors.length > 0 || results.length !== 1 || !result || typeof result.id !== 'string') {
    throw new HubSpotError('HubSpot did not confirm the contact upsert', { status });
  }
  return { status, id: result.id, created: result.new === true };
}

// Looks a contact up by email. Returns null when there is none.
export async function getContactByEmail(
  email: string,
  propertyNames: string[],
): Promise<{ id: string; properties: Record<string, string | null> } | null> {
  const query = new URLSearchParams({ idProperty: 'email', properties: propertyNames.join(',') });
  const { status, data } = await hubspotRequest(
    'GET',
    `/crm/v3/objects/contacts/${encodeURIComponent(email.trim().toLowerCase())}?${query}`,
    'read contact',
  );
  if (status === 404) return null;
  if (status !== 200 || !data || typeof data.id !== 'string') throw failure('read contact', status, data);

  const properties = (data.properties && typeof data.properties === 'object' ? data.properties : {}) as Record<
    string,
    string | null
  >;
  return { id: data.id, properties };
}

// Saves a quote request to HubSpot. Resolves only once HubSpot has confirmed the create or update.
export async function syncQuoteToHubSpot(quote: QuoteRequest): Promise<{ status: number; id: string; created: boolean }> {
  return upsertContact(await buildContactProperties(quote));
}
