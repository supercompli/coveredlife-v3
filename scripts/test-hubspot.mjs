// Tests the HubSpot lead-capture integration against the real HubSpot API using ONE dedicated,
// synthetic test contact. Run from the repo root (needs Node 22.18+ so it can load lib/hubspot.ts).
//
//   node scripts/test-hubspot.mjs --inspect   List the dropdown options HubSpot has for the mapped properties.
//   node scripts/test-hubspot.mjs             Upsert the test contact, print the HTTP status, verify every mapped field.
//
// Reads HUBSPOT_SERVICE_KEY from .env.local (or the environment). The key is never printed.
import {
  INSURANCE_PRODUCT_PROPERTY,
  LEAD_SOURCE_PROPERTY,
  QUOTE_LEAD_SOURCE,
  buildContactProperties,
  getContactByEmail,
  getContactProperty,
  upsertContact,
} from '../lib/hubspot.ts';

try {
  process.loadEnvFile(new URL('../.env.local', import.meta.url));
} catch {
  // No .env.local: fall back to variables already in the environment.
}

if (!process.env.HUBSPOT_SERVICE_KEY) {
  console.error('HUBSPOT_SERVICE_KEY is not set. Add it to .env.local and run again.');
  process.exit(1);
}

// Synthetic data only. The example.com address can't belong to a real customer.
const TEST_QUOTE = {
  products: ['Life Cover', 'Critical Illness'],
  age: 35,
  gender: 'Woman',
  smoker: false,
  married: true,
  monthlyIncome: 25000,
  education: '3-year degree',
  fullName: 'CoveredLife IntegrationTest',
  phone: '+27 83 000 0000',
  email: 'coveredlife.integration.test@example.com',
};

async function inspect() {
  for (const name of [INSURANCE_PRODUCT_PROPERTY, LEAD_SOURCE_PROPERTY]) {
    const property = await getContactProperty(name);
    console.log(`\n${property.name}  (label "${property.label}", type ${property.type}, fieldType ${property.fieldType})`);
    if (property.options.length === 0) console.log('  no dropdown options (free-form property)');
    for (const option of property.options) {
      console.log(`  "${option.label}"  ->  ${option.value}${option.hidden ? '  [hidden]' : ''}`);
    }
  }
  console.log(`\nLead source the form will send: "${QUOTE_LEAD_SOURCE}"`);
}

const sameValue = (name, expected, actual) => {
  if (name === INSURANCE_PRODUCT_PROPERTY) {
    const toSet = (text) => new Set(String(text ?? '').split(/;\s*/).filter(Boolean));
    const a = toSet(expected);
    const b = toSet(actual);
    return a.size === b.size && [...a].every((value) => b.has(value));
  }
  return String(expected ?? '').trim() === String(actual ?? '').trim();
};

async function run() {
  const properties = await buildContactProperties(TEST_QUOTE);
  console.log('Dropdown values verified against HubSpot. Properties to send:');
  console.log(properties);

  // Never overwrite a real contact: only continue if the email is new or is our own test contact.
  const existing = await getContactByEmail(TEST_QUOTE.email, ['firstname', 'lastname']);
  if (existing && (existing.properties.firstname !== 'CoveredLife' || existing.properties.lastname !== 'IntegrationTest')) {
    console.error(`\nABORTED: ${TEST_QUOTE.email} already exists in HubSpot and is not the test contact (id ${existing.id}).`);
    process.exit(2);
  }

  const result = await upsertContact(properties);
  console.log(`\nHubSpot response status: ${result.status}  (contact id ${result.id}, ${result.created ? 'created' : 'updated'})`);

  const stored = await getContactByEmail(TEST_QUOTE.email, Object.keys(properties));
  if (!stored) {
    console.error('FAIL: contact not found after upsert');
    process.exit(1);
  }

  let failed = 0;
  console.log('\nField check (sent vs stored in HubSpot):');
  for (const [name, expected] of Object.entries(properties)) {
    const actual = stored.properties[name];
    const ok = sameValue(name, expected, actual);
    if (!ok) failed += 1;
    console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name}: sent "${expected}", stored "${actual ?? ''}"`);
  }
  console.log(failed === 0 ? '\nAll mapped fields match.' : `\n${failed} field(s) did not match.`);
  process.exit(failed === 0 ? 0 : 1);
}

try {
  await (process.argv.includes('--inspect') ? inspect() : run());
} catch (error) {
  // HubSpotError messages only contain status/category/correlation id, never submitted values.
  console.error(`\nFAILED: ${error.message}`);
  if (error.status) console.error(`  status: ${error.status}${error.category ? `, category: ${error.category}` : ''}`);
  if (error.correlationId) console.error(`  correlationId: ${error.correlationId}`);
  process.exit(1);
}
