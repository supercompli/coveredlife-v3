import { Policy, NavItem } from './types';

export const WHATSAPP_NUMBER = '27835756352';
export const WHATSAPP_NUMBER_FORMATTED = '+27 83 575 6352';
const WHATSAPP_MESSAGE = "Hi CoveredLife, I'd like to get a quote.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Life Insurance",
    groups: [
      {
        title: "Life Insurance",
        options: [
          { title: "Life Insurance", href: "/get-life-insurance" },
          { title: "Compare Life Insurance", href: "/compare-life-insurance" },
          { title: "Life Insurance Quotes", href: "/life-insurance-quotes" },
          { title: "Life Insurance Cost", href: "/life-insurance-cost" },
          { title: "Income Protection", href: "/get-income-protection" }
        ]
      },
      {
        title: "Cover Options",
        options: [
          { title: "Individual Life Cover", href: "/individual-life-cover" },
          { title: "Family Life Cover", href: "/family-life-cover" },
          { title: "Over 50s", href: "/over-50s-life-insurance" },
          { title: "Over 60s", href: "/over-60s-life-insurance" },
          { title: "Pre-existing Conditions", href: "/pre-existing-conditions-life-insurance" },
          { title: "Previously Declined", href: "/previously-declined-life-insurance" }
        ]
      }
    ]
  },
  {
    label: "Health Conditions",
    options: [
      { title: "Diabetes", href: "/diabetes-life-insurance" },
      { title: "HIV", href: "/hiv-life-insurance" },
      { title: "Hypertension", href: "/hypertension-life-insurance" },
      { title: "Cancer", href: "/cancer-life-insurance" },
      { title: "Heart Conditions", href: "/heart-conditions-life-insurance" },
      { title: "High BMI/Obesity", href: "/high-bmi-obesity-life-insurance" },
      { title: "Other Chronic Conditions", href: "/other-chronic-conditions-life-insurance" }
    ]
  },
  {
    label: "Business Cover",
    options: [
      { title: "Key Person Insurance", href: "/get-key-person-insurance" },
      { title: "Shareholder Protection", href: "/shareholder-protection-insurance" },
      { title: "Business Life Insurance", href: "/business-life-insurance" }
    ]
  },
  {
    label: "Learn",
    options: [
      { title: "Guides", href: "/guides" },
      { title: "FAQs", href: "/faqs" },
      { title: "Claims", href: "/claims" },
      { title: "Underwriting Explained", href: "/underwriting-explained" }
    ]
  },
  {
    label: "About",
    options: [
      { title: "About Covered Life", href: "/about" },
      { title: "How It Works", href: "/how-it-works" },
      { title: "Contact", href: "/contact" }
    ]
  }
];

export const POLICIES: Policy[] = [
  {
    category: 'Director',
    title: 'Relevant Life Insurance for Directors',
    description: 'This type of policy can provide a complete tax-free solution to life insurance for company directors where both the premiums and the lump-sum payment are tax-free.',
    detailedDescription: [
      'Relevant Life Insurance is a way of providing death-in-service benefits on an individual basis.',
      'Premiums are not classed as a benefit-in-kind.',
      'Payouts are typically free of inheritance tax when written in trust.'
    ],
    href: '#'
  },
  {
    category: 'Director',
    title: 'Executive Income Protection',
    description: 'Pays out a regular monthly benefit should a company director become too ill or injured to work. Popular with contractors and directors.',
    detailedDescription: [
      'Covers up to 80% of income (wages or dividends).',
      'Tax-efficient way for small business owners in South Africa to protect earnings.',
      'Premiums are typically paid by the company.'
    ],
    href: '/get-executive-income-protection'
  },
  {
    category: 'Group',
    title: 'Business Health Insurance',
    description: 'Ensures directors and employees can seek expert medical attention promptly, helping them return to work as soon as possible.',
    detailedDescription: [
      'Access to 24-hour GP services.',
      'Faster access to specialists and treatments than the public health system.',
      'Excellent employee retention and recruitment tool.'
    ],
    href: '#'
  },
  {
    category: 'Personal',
    title: 'Life Insurance',
    description: 'Provides a one-off tax-free lump-sum payment in the event of your death during the fixed term of the policy.',
    detailedDescription: [
      'Protects families from financial hardship.',
      'Can be used to pay off mortgages and debts.',
      'Peace of mind for your loved ones.'
    ],
    href: '/get-life-insurance'
  }
];

export const HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
    title: 'Business Protection'
  },
  {
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
    title: 'Family Security'
  },
  {
    url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80',
    title: 'Future Planning'
  }
];
