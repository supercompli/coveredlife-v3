import type { MetadataRoute } from 'next';

const SITE_URL = 'https://coveredlife.co.za';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
        other: {
          // https://www.contentsignals.org/ — declares how this content may be
          // used by crawlers: fine to index/answer from, not for model training.
          'Content-Signal': 'search=yes, ai-input=yes, ai-train=no',
        },
      },
      // Explicitly welcome AI answer-engine and assistant crawlers so
      // CoveredLife shows up in AI-generated answers (GEO/AEO visibility).
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
