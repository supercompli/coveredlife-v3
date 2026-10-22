import type { MetadataRoute } from 'next';
import { NAV_ITEMS } from '@/lib/data';

const SITE_URL = 'https://coveredlife.co.za';

// Pages that exist but aren't linked from the main nav.
const EXTRA_PATHS = [
  '/quote',
  '/get-critical-illness-cover',
  '/get-executive-income-protection',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
];

function navPaths(): string[] {
  const paths = new Set<string>();
  for (const item of NAV_ITEMS) {
    for (const option of item.options ?? []) paths.add(option.href);
    for (const group of item.groups ?? []) {
      for (const option of group.options) paths.add(option.href);
    }
  }
  return Array.from(paths);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
  ];

  for (const path of [...navPaths(), ...EXTRA_PATHS]) {
    entries.push({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  return entries;
}
