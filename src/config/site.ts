// Reliable Builders — single source of truth for NAP, nav, and service data.

export const site = {
  name: 'Reliable Builders',
  legalName: 'Reliable Builders',
  tagline: 'San Diego Remodeling & ADU Builder',
  url: 'https://reliablebuilders.net',
  phone: '(619) 666-7556',
  phoneRaw: '+16196667556',
  email: 'info@reliablebuilders.net',
  address: {
    street: '9019 Park Plaza Dr, Unit C',
    city: 'La Mesa',
    state: 'CA',
    zip: '91942',
  },
  hours: 'Mon–Fri 7:00am – 5:00pm',
  license: 'CSLB #1139785',
  yearsExperience: 20,
  areas: [
    'San Carlos', 'Del Cerro', 'Allied Gardens', 'Grantville',
    'La Mesa', 'Mount Helix', 'Fletcher Hills', 'Bonita',
    'El Cajon', 'Santee', 'Lakeside', 'Spring Valley',
  ],
} as const;

export const nav = [
  { label: 'Kitchens', href: '/services/kitchens' },
  { label: 'Bathrooms', href: '/services/bathrooms' },
  { label: 'ADUs', href: '/services/adus' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const services = [
  {
    slug: 'kitchens',
    name: 'Kitchen Remodels',
    short: 'Kitchens',
    tagline: 'A kitchen built for how you actually live.',
    priceRange: '$30K – $60K',
    image: '/images/kitchen-remodel-san-diego.jpg',
    blurb:
      'Custom cabinetry, stone countertops, and layouts that make everyday cooking and hosting effortless — installed by the same crew, start to finish.',
  },
  {
    slug: 'bathrooms',
    name: 'Bathroom Remodels',
    short: 'Bathrooms',
    tagline: 'A calm, modern bathroom that lasts decades.',
    priceRange: '$25K – $50K',
    image: '/images/bathroom-remodel-san-diego.jpg',
    blurb:
      'Walk-in showers, custom tile, and clean finishes — with waterproofing done right so it still looks new in year ten, not just year one.',
  },
  {
    slug: 'adus',
    name: 'ADUs & Garage Conversions',
    short: 'ADUs',
    tagline: 'Room for family, or income — done by the book.',
    priceRange: 'From $150K',
    image: '/images/adu-san-diego.jpg',
    blurb:
      'Detached ADUs and garage conversions for aging parents, adult kids, or rental income — permitted, engineered, and built to San Diego code.',
  },
] as const;
