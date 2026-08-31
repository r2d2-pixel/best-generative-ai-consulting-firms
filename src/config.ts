// ─── SITE CONFIG ───────────────────────────────────────────────────────────
// To clone this site for a new niche: edit EVERY field in this file,
// swap out src/data/companies.ts, and you're done.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name:          'Best Generative AI Consulting Firms',
  domain:        'best-generative-ai-consulting-firms.com',
  url:           'https://best-generative-ai-consulting-firms.com',
  tagline:       'Independent reviews of the best generative AI consulting firms',
  description:   'Ranked, independently researched reviews of the best generative AI consulting firms for strategy, readiness assessment, and implementation.',
  locale:        'en_US',
  twitterHandle: '',        // e.g. '@yourhandle' — leave empty to omit OG tag
};

export const NICHE = {
  label:          'Generative AI Consulting',
  providerLabel:  'firm',
  providersLabel: 'firms',
  verticalSlug:   'generative-ai-consulting',
};

export const BRANDING = {
  primaryColor: '#e11d48',  // tailwind brand-600; update tailwind.config.mjs too
  logoText:     'Best Generative AI Consulting Firms',
  logoPath:     '/logos/site-logo.svg',   // place file in public/logos/
};

// ─── MONETIZATION ──────────────────────────────────────────────────────────
export const MONETIZATION = {
  enabled: false,
  // When enabled=true, companies with monetized:true get rel="sponsored" on outbound links.
  // Set to false site-wide to strip all sponsored rels (e.g. while testing).
  defaultRel: 'nofollow' as 'sponsored' | 'nofollow' | '',
  disclosurePath: '/affiliate-disclosure',
};

// ─── NAV ───────────────────────────────────────────────────────────────────
export const NAV = [
  { label: 'Home',        href: '/' },
  { label: 'Disclosure',  href: '/affiliate-disclosure/' },
];
