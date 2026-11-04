export const QUOTE_PRODUCTS = [
  'Life Cover',
  'Critical Illness',
  'Disability Cover',
  'Bond Protection',
  'Key Person',
  'Business Assurance',
] as const;
export const QUOTE_GENDERS = ['Man', 'Woman'] as const;
export const QUOTE_EDUCATION_LEVELS = ['Matric', 'No matric', '3-year diploma', '3-year degree', '4-year+ degree'] as const;

export interface QuoteRequest {
  products: (typeof QUOTE_PRODUCTS)[number][];
  age: number;
  gender: (typeof QUOTE_GENDERS)[number];
  smoker: boolean;
  married: boolean;
  monthlyIncome: number;
  education: (typeof QUOTE_EDUCATION_LEVELS)[number];
  fullName: string;
  phone: string;
  email: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function oneOf<T extends string>(options: readonly T[], value: unknown): T | null {
  return options.find((option) => option === value) ?? null;
}

// Returns null when the body isn't a complete, well-formed quote request.
export function parseQuoteRequest(body: unknown): QuoteRequest | null {
  if (!body || typeof body !== 'object') return null;
  const input = body as Record<string, unknown>;

  const selected = Array.isArray(input.products) ? input.products : [];
  const products = QUOTE_PRODUCTS.filter((product) => selected.includes(product));
  const gender = oneOf(QUOTE_GENDERS, input.gender);
  const education = oneOf(QUOTE_EDUCATION_LEVELS, input.education);
  const age = Number(input.age);
  const monthlyIncome = Number(input.monthlyIncome);
  const fullName = String(input.fullName ?? '').trim().slice(0, 200);
  const phone = String(input.phone ?? '').trim().slice(0, 50);
  const email = String(input.email ?? '').trim().slice(0, 200);

  if (
    products.length === 0 ||
    !gender ||
    !education ||
    typeof input.smoker !== 'boolean' ||
    typeof input.married !== 'boolean' ||
    !Number.isInteger(age) ||
    age < 1 ||
    age > 120 ||
    !Number.isFinite(monthlyIncome) ||
    monthlyIncome < 0 ||
    monthlyIncome > 100_000_000 ||
    !fullName ||
    !phone ||
    !EMAIL_RE.test(email)
  ) {
    return null;
  }

  return {
    products,
    age,
    gender,
    smoker: input.smoker,
    married: input.married,
    monthlyIncome,
    education,
    fullName,
    phone,
    email,
  };
}
