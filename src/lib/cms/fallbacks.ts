import type {
  AboutPage,
  BlogPage,
  BlogPost,
  ContactPage,
  Global,
  HomePage,
  Media,
  ServicesPage,
  Testimonial,
  WarehousingPage,
} from './types'

import logoImg from '../../assets/images/logo.png'
import footerLogoImg from '../../assets/images/footerlogo.png'
import shippableLogoImg from '../../assets/images/Shippable logo.png'
import avatarImg from '../../assets/images/Avatar.png'
import shipImg from '../../assets/images/ship.jpg'
import service1Img from '../../assets/images/service1.jpg'
import service2Img from '../../assets/images/service2.jpg'
import servicesMainImg from '../../assets/images/servicesmain.jpg'
import logisticsDoesImg from '../../assets/images/LogisticsDoes.webp'
import aboutBgImg from '../../assets/images/aboutbg.webp'
import logic1Img from '../../assets/images/logic1.webp'
import logic2Img from '../../assets/images/logic2.webp'
import logic3Img from '../../assets/images/logic3.webp'
import logic4Img from '../../assets/images/logic4.webp'

const m = (url: string, alt = ''): Media => ({
  id: 1,
  url,
  alternativeText: alt,
  width: null,
  height: null,
})

const STOCK_SUBTITLE =
  'From air freight to last-mile delivery, we power global supply chains with reliable, data-driven logistics solutions.'

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How do you handle freight tracking and real-time visibility?',
    answer:
      'Every shipment is assigned a live GPS tracking link from initial dispatch through delivery. Our platform gives you real-time milestone alerts and temperature/status logs where applicable.',
  },
  {
    id: 2,
    question: 'Can your logistics systems integrate with our existing ERP or WMS?',
    answer:
      'Yes, we support modern REST and EDI integrations with SAP, Oracle, Shopify, NetSuite, and custom inventory management platforms.',
  },
  {
    id: 3,
    question: 'What happens if a shipment is delayed or damaged in transit?',
    answer:
      'All freight is fully covered under standing marine and cargo insurance. Dedicated claims coordinators manage the entire resolution directly with your account manager.',
  },
  {
    id: 4,
    question: 'Do you offer custom warehousing and temperature-controlled storage?',
    answer:
      'Yes, our strategically positioned warehouses offer ambient, climate-controlled, and cold-storage facilities alongside bonded storage options.',
  },
]

export const FALLBACK_GLOBAL: Global = {
  siteName: 'ardle',
  contactPhone: '+1 (800) 555-0199',
  contactEmail: 'contact@ardle.com',
  address: '100 Logistics Way, Suite 400, New York, NY 10001',
  headerContactLabel: 'Contact Us',
  headerContactHref: '#/contact',
  footerTagline: "Let's move your\nbusiness forward",
  copyrightText: '© 2026 ardle Logistics Inc. All rights reserved.',
  logo: m(logoImg, 'ardle logo'),
  footerWatermark: m(footerLogoImg, 'ardle watermark'),
  navigation: [
    { id: 1, label: 'Home', href: '#/' },
    { id: 2, label: 'About Us', href: '#/about' },
    { id: 3, label: 'Services', href: '#/services' },
    { id: 4, label: 'Blogs', href: '#/blog' },
  ],
  footerNavigation: [
    { id: 1, label: 'Service', href: '#/services' },
    { id: 2, label: 'About us', href: '#/about' },
    { id: 3, label: 'Contact', href: '#/contact' },
    { id: 4, label: 'FAQs', href: '#faq' },
  ],
  socialLinks: [
    { id: 1, platform: 'facebook', url: 'https://facebook.com' },
    { id: 2, platform: 'instagram', url: 'https://instagram.com' },
    { id: 3, platform: 'x', url: 'https://twitter.com' },
    { id: 4, platform: 'linkedin', url: 'https://linkedin.com' },
  ],
  transportModes: [
    { id: 1, label: 'Air', image: m(logic1Img, 'Air freight aircraft'), alt: 'Air Cargo' },
    { id: 2, label: 'Road', image: m(logic2Img, 'Road transport truck'), alt: 'Ground Trucking' },
    { id: 3, label: 'Sea', image: m(logic3Img, 'Ocean cargo ship'), alt: 'Ocean Freight' },
    { id: 4, label: 'Logistics', image: m(logic4Img, 'Distribution warehouse'), alt: 'Warehousing' },
  ],
  defaultSeo: {
    metaTitle: 'ardle — Freight, Warehousing & Logistics',
    metaDescription:
      'ardle moves freight by ocean, air, and road, and runs warehousing and distribution across a global network — with real-time tracking at every step.',
    noIndex: false,
  },
}

export const FALLBACK_HOME_PAGE: HomePage = {
  heroHeadline: 'Tailored solutions for your business',
  heroSubtitle: STOCK_SUBTITLE,
  heroCtaPrimaryText: 'View Services',
  heroCtaPrimaryLink: '#/services',
  heroCtaSecondaryText: 'Contact Us',
  heroCtaSecondaryLink: '#/contact',
  heroBgImage: null,
  heroWordmarkImage: null,
  heroPlaneImage: null,
  heroTruckImage: null,

  processTitle: 'How Shipping With Us Works',
  processSubtitle: STOCK_SUBTITLE,
  processSteps: [
    { id: 1, number: '01', title: 'Request a quote', description: 'Tell us your freight or storage needs and get a rate back the same day.', accent: false },
    { id: 2, number: '02', title: 'We build your plan', description: 'Our team maps the right mode, route, and warehouse node for your shipment.', accent: true },
    { id: 3, number: '03', title: 'Ship & track in real time', description: 'Your freight moves under live tracking, with a dedicated contact at every leg.', accent: false },
    { id: 4, number: '04', title: 'Delivered & reconciled', description: 'Goods arrive on schedule, with documentation and reporting ready for you.', accent: false },
  ],

  systemsTitle: 'We Build Logistics Systems,',
  systemsSubtitle: STOCK_SUBTITLE,

  growthTitle: "Warehouses Don't Create Growth. Smart Logistics Does.",
  growthImage: m(logisticsDoesImg),
  growthImageAlt: 'Forklift loading pallets at port warehouse',
  growthCtaText: 'Get Started',
  growthCtaLink: '#/contact',
  growthFeatures: [
    { id: 1, title: 'Smart Warehouse Management', description: 'Real-time inventory visibility with automated slotting and order routing.' },
    { id: 2, title: 'Fast Order Fulfillment', description: 'Same-day picking and packing for direct-to-consumer and retail channels.' },
    { id: 3, title: 'Global Freight Network', description: 'Air, ocean, and road freight capacity booked directly through one account.' },
    { id: 4, title: 'Live Shipment Tracking', description: 'Real-time status alerts and exception notifications at every handoff point.' },
  ],

  assuranceTitle: 'Built on Accountability',
  assuranceSubtitle: STOCK_SUBTITLE,
  assuranceImage: m(shipImg),
  assuranceImageAlt: 'Container ship under way at sea',
  assuranceCards: [
    { id: 1, title: 'Verified at Every Handoff', text: 'Every shipment is checked in and photographed at each transfer point — port, warehouse, and final mile.' },
    { id: 2, title: 'Insured From Pickup to Delivery', text: 'Cargo is covered under standing insurance the moment it leaves your dock, with claims handled directly by your account team.' },
  ],

  networkCta: {
    title: 'A Global Logistics Network',
    subtitle: 'Our extensive network spans over 120 countries, ensuring your goods reach their destination — safely, swiftly, and reliably.',
    buttonText: 'Contact Us',
    buttonLink: '#/contact',
  },

  servicesTitle: 'End-to-End Solutions',
  servicesSubtitle: STOCK_SUBTITLE,
  servicesItems: [
    {
      id: 1,
      number: '01',
      title: 'Ocean & Air Freight',
      body: 'Full container (FCL) and less-than-container (LCL) ocean freight alongside time-critical air charter services.\n\nWe optimize carrier routes dynamically to balance speed and cost efficiency.',
      image: m(service1Img),
    },
    {
      id: 2,
      number: '02',
      title: 'Warehousing & Distribution',
      body: 'Strategically located fulfillment centers equipped with advanced inventory management.\n\nInbound cargo is received, inspected, and ready to pick within 24 to 48 hours.',
      image: m(service2Img),
    },
    {
      id: 3,
      number: '03',
      title: 'Customs Brokerage',
      body: 'In-house compliance specialists handle import/export declarations, duties, and tariff classifications without delays.',
      image: m(servicesMainImg),
    },
    {
      id: 4,
      number: '04',
      title: 'Final Mile Delivery',
      body: 'White-glove delivery, liftgate service, and appointment-based distribution for retail and commercial addresses.',
      image: m(shipImg),
    },
  ],

  reviewsTitle: 'What Our Clients Say',
  reviewsSubtitle: STOCK_SUBTITLE,

  blogSectionTitle: 'Latest Insights',
  blogSectionSubtitle: STOCK_SUBTITLE,

  faq: {
    title: 'Frequently Asked Questions',
    subtitle: STOCK_SUBTITLE,
    items: FAQ_ITEMS,
  },

  promoTitle: 'Ready to modernize your supply chain?',
  promoText: 'Contact our logistics team today for custom quotes and route analysis.',
  promoCtaText: 'Get Started',
  promoCtaLink: '#/contact',
  seo: {
    metaTitle: 'ardle — Freight, Warehousing & Logistics',
    metaDescription: 'Modern freight forwarding, warehousing and global supply chain solutions.',
    noIndex: false,
  },
}

export const FALLBACK_ABOUT_PAGE: AboutPage = {
  hero: {
    title: 'Fulfilment Built for\nEnterprise Scale',
    text: 'From manufacturing hubs to final customer delivery, we orchestrate every leg of your supply chain with speed, visibility, and accuracy.',
    ctaText: 'Contact Us',
    ctaLink: '#/contact',
    backgroundImage: null,
  },
  brandLogos: [
    { id: 1, name: 'Shippable', image: m(shippableLogoImg) },
    { id: 2, name: 'Logistics', image: m(logoImg) },
    { id: 3, name: 'Global', image: m(shippableLogoImg) },
    { id: 4, name: 'Network', image: m(logoImg) },
  ],
  seamlessTitle: 'Seamless air & ocean transport for every cargo size',
  seamlessText:
    'From urgent aerospace components to seasonal retail volume, our multi-modal freight network ensures priority handling and seamless customs clearance.\n\nOur operations run 24/7 with direct carrier allocations across major trade lanes.',
  seamlessCtaText: 'Get in touch',
  seamlessCtaLink: '#/contact',
  seamlessTiles: [
    { id: 1, alt: 'Air transport cargo', large: true, image: m(aboutBgImg) },
    { id: 2, alt: 'Container port handling', large: false, image: m(service1Img) },
    { id: 3, alt: 'Freight fleet transport', large: false, image: m(service2Img) },
  ],
  roadBannerImage: m(aboutBgImg),
  roadBannerAlt: 'Logistics highway fleet',
  platformTitle: 'Why Choose Our Logistics Network',
  platformSubtitle: STOCK_SUBTITLE,
  platformImage: m(logisticsDoesImg),
  platformImageAlt: 'Smart logistics operations',
  platformHeading: 'Proprietary Technology & Real-Time Intelligence',
  platformText:
    'Gain end-to-end visibility across every SKU, transit lane, and warehouse dock. Automated billing, route tracking, and instant proof of delivery.',
  platformFeatures: FAQ_ITEMS.slice(0, 3),
  whyChooseTitle: 'Why Industry Leaders Trust ardle',
  whyChooseSubtitle: STOCK_SUBTITLE,
  whyChooseCards: [
    { id: 1, title: '99.8% On-Time Delivery', text: 'Rigorous SLA guarantees supported by predictive route optimization.', image: m(service1Img), alt: 'On-time delivery' },
    { id: 2, title: 'Global Customs Pre-Clearance', text: 'Documentation processed prior to vessel arrival to eliminate demurrage.', image: m(service2Img), alt: 'Customs clearance' },
    { id: 3, title: 'Scalable Warehousing Nodes', text: 'Flexible pallet storage with zero long-term lease lock-ins.', image: m(aboutBgImg), alt: 'Scalable storage' },
  ],
  capabilitiesTitle: 'Core Logistics Capabilities',
  capabilitiesSubtitle: STOCK_SUBTITLE,
  capabilitiesCards: [
    { id: 1, number: '01', title: 'Multimodal Routing', text: 'Optimized combinations of air, ocean, and ground freight to meet strict deadlines.' },
    { id: 2, number: '02', title: 'Temperature Control', text: 'Validated cold chains and monitored ambient storage for sensitive goods.' },
    { id: 3, number: '03', title: 'Reverse Logistics', text: 'Streamlined returns processing, refurbishing, and restock distribution.' },
  ],
  impactTitle: 'Making a Global Impact',
  impactText: 'Over 5 million shipments managed annually across 120+ countries with sustainable green-lane carrier partners.',
  impactImage: m(shipImg),
  impactImageAlt: 'Global cargo vessel',
  impactCtaText: 'Work With Us',
  impactCtaLink: '#/contact',
  impactStats: [
    { id: 1, value: '120+', label: 'Countries Covered' },
    { id: 2, value: '99.8%', label: 'On-Time Delivery Rate' },
    { id: 3, value: '2.5M+', label: 'Sq Ft Warehouse Space' },
    { id: 4, value: '24/7', label: 'Operations Support' },
  ],
  faq: {
    title: 'About ardle FAQ',
    subtitle: STOCK_SUBTITLE,
    items: FAQ_ITEMS,
  },
  networkCta: {
    title: 'Ready to transform your distribution?',
    subtitle: 'Speak with our solutions engineering team today.',
    buttonText: 'Contact Us',
    buttonLink: '#/contact',
  },
  seo: {
    metaTitle: 'About ardle — Global Logistics & Supply Chain Platform',
    metaDescription: 'Learn about our freight forwarding network, core team, and worldwide logistics technology.',
    noIndex: false,
  },
}

export const FALLBACK_SERVICES_PAGE: ServicesPage = {
  hero: {
    title: 'Comprehensive Freight\n& Supply Chain Services',
    text: 'From single pallet consignments to full-charter aircraft, we deliver customized freight services designed around your schedule and budget.',
    ctaText: 'Get a Quote',
    ctaLink: '#/contact',
    backgroundImage: null,
  },
  systemsTitle: 'Full-Spectrum Transport Modes',
  systemsSubtitle: STOCK_SUBTITLE,
  distributionTitle: 'Global Distribution Hubs',
  distributionSubtitle: STOCK_SUBTITLE,
  distributionCards: [
    { id: 1, title: 'North America Hub', text: 'Strategically positioned near LAX, Chicago O’Hare, and New York JFK with bonded storage.' },
    { id: 2, title: 'European Gateway', text: 'Rotterdam and Frankfurt distribution nodes facilitating seamless intra-EU trade.' },
    { id: 3, title: 'Asia-Pacific Network', text: 'Direct air links and ocean consolidations across Singapore, Shanghai, and Tokyo.' },
  ],
  networkGridTitle: 'Specialized Service Capabilities',
  networkGridSubtitle: STOCK_SUBTITLE,
  networkGridCards: [
    { id: 1, title: 'Cross-Docking & Transloading', text: 'Direct truck-to-truck transfers minimizing dock storage fees and transit delay.', image: m(service1Img), alt: 'Cross docking' },
    { id: 2, title: 'High-Value Cargo Escort', text: 'GPS geo-fenced routes, tamper-evident seals, and dedicated security monitoring.', image: m(service2Img), alt: 'High value cargo' },
    { id: 3, title: 'Hazardous Materials & Hazmat', text: 'Certified dangerous goods handlers ensuring full IMO and IATA compliance.', image: m(shipImg), alt: 'Hazmat handling' },
  ],
  faq: {
    title: 'Services FAQ',
    subtitle: STOCK_SUBTITLE,
    items: FAQ_ITEMS,
  },
  cta: {
    title: 'Need a custom freight solution?',
    subtitle: 'Our logistics architects will engineer a route tailored to your exact transit requirements.',
    buttonText: 'Request Consultation',
    buttonLink: '#/contact',
  },
  seo: {
    metaTitle: 'Logistics Services — Ocean, Air, Road & Customs | ardle',
    metaDescription: 'Explore our full range of transportation and supply chain management services.',
    noIndex: false,
  },
}

export const FALLBACK_WAREHOUSING_PAGE: WarehousingPage = {
  hero: {
    title: 'Strategic Warehousing\n& Precision Distribution',
    text: 'Modern fulfillment centers built for rapid turnarounds, real-time inventory visibility, and scalable pallet capacity.',
    ctaText: 'Explore Facilities',
    ctaLink: '#/contact',
    backgroundImage: null,
  },
  capabilitiesTitle: 'Fulfillment Infrastructure',
  capabilitiesCards: [
    { id: 1, number: '01', title: 'Automated Sorting', text: 'High-speed conveyors and barcoding ensure fast error-free dispatch.' },
    { id: 2, number: '02', title: 'Custom Kitting & Packaging', text: 'Bespoke packing, labeling, and retail compliance pre-packing.' },
    { id: 3, number: '03', title: 'Climate Controlled Zones', text: 'Strict temperature and humidity control for pharma, beauty, and food products.' },
  ],
  howItWorksTitle: 'Inbound to Outbound Lifecycle',
  howItWorksSteps: [
    { id: 1, number: '01', title: 'Inbound Receiving', text: 'Shipments are verified, inspected, and docked with automatic WMS scanning.', image: m(aboutBgImg), alt: 'Inbound dock' },
    { id: 2, number: '02', title: 'Smart Storage Allocation', text: 'Goods are slotted in high-density racking based on order velocity.', image: m(service2Img), alt: 'Storage racking' },
    { id: 3, number: '03', title: 'Batch Pick & Pack', text: 'Digital pick lists optimize travel paths for rapid same-day turnaround.', image: m(service1Img), alt: 'Picking station' },
    { id: 4, number: '04', title: 'Carrier Dispatch', text: 'Parcels and pallets are loaded directly onto scheduled line-haul departures.', image: m(logisticsDoesImg), alt: 'Carrier dispatch' },
  ],
  industryFitTitle: 'Designed for Dynamic Enterprise Needs',
  industryFitText: 'Whether managing retail replenishment, seasonal peaks, or multi-channel eCommerce, our infrastructure flexes with your volume.',
  industryFitImage: m(service2Img),
  industryFitImageAlt: 'Warehouse operations',
  industryFitStats: [
    { id: 1, value: '99.9%', label: 'Inventory Accuracy' },
    { id: 2, value: '24hr', label: 'Dock-to-Stock Guarantee' },
    { id: 3, value: 'Zero', label: 'Long-term Lease Requirements' },
  ],
  faq: {
    title: 'Warehousing FAQ',
    subtitle: STOCK_SUBTITLE,
    items: FAQ_ITEMS,
  },
  cta: {
    title: 'Scale your storage without capital lockup',
    subtitle: 'Speak with our warehousing director to review facility availability.',
    buttonText: 'Get Storage Rates',
    buttonLink: '#/contact',
  },
  seo: {
    metaTitle: 'Warehousing & Fulfillment Centers | ardle',
    metaDescription: 'Modern, high-capacity fulfillment centers and scalable warehouse storage.',
    noIndex: false,
  },
}

export const FALLBACK_CONTACT_PAGE: ContactPage = {
  hero: {
    title: 'Connect With Our\nGlobal Freight Experts',
    text: 'Ready to optimize your supply chain? Contact our team 24/7 for quotes, tracking inquiries, and custom enterprise logistics.',
    ctaText: 'Send a Message',
    ctaLink: '#contact-form',
    backgroundImage: null,
  },
  formEyebrow: 'Get In Touch',
  formTitle: 'Send us a message',
  infoEyebrow: 'Direct Contact',
  infoTitle: 'Always Here To Help',
  assistanceHours: '24/7/365 Operations Desk',
  seo: {
    metaTitle: 'Contact ardle Logistics — 24/7 Operations Desk',
    metaDescription: 'Reach out to our freight and warehousing team for quotes, tracking, and customer support.',
    noIndex: false,
  },
}

export const FALLBACK_BLOG_PAGE: BlogPage = {
  hero: {
    title: 'Logistics Intelligence\n& Supply Chain Insights',
    text: 'Industry analysis, market updates, regulatory changes, and actionable strategies for global trade.',
    ctaText: 'Read Articles',
    ctaLink: '#blog-grid',
    backgroundImage: null,
  },
  gridTitle: 'Featured Articles',
  gridSubtitle: STOCK_SUBTITLE,
  faq: {
    title: 'Blog FAQ',
    subtitle: STOCK_SUBTITLE,
    items: FAQ_ITEMS,
  },
  cta: {
    title: 'Subscribe to Our Weekly Freight Digest',
    subtitle: 'Get tariff updates, ocean freight index analysis, and logistics trends in your inbox.',
    buttonText: 'Contact Us',
    buttonLink: '#/contact',
  },
  seo: {
    metaTitle: 'Logistics Insights & News | ardle',
    metaDescription: 'Latest market news, freight rate trends, and supply chain strategies.',
    noIndex: false,
  },
}

export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    documentId: 'post-1',
    title: 'Navigating Ocean Freight Volatility in 2026',
    slug: 'navigating-ocean-freight-volatility-2026',
    category: 'Ocean Freight',
    date: '2026-08-15',
    readTime: '5 min read',
    excerpt: 'Key strategies for B2B shippers to maintain supply chain resiliency amid changing global maritime routes.',
    body: 'Ocean shipping routes have seen continuous evolution over the past year. Carrier alliances have realigned schedules and port congestion patterns have shifted toward emerging secondary hubs.\n\nTo hedge against fluctuating spot rates, proactive shippers are diversifying carrier contracts and using multi-port entry strategies.\n\nInvesting in real-time container visibility software provides the early warning system necessary to reroute high-priority purchase orders before demurrage accumulates.',
    alt: 'Container vessel at sea',
    image: m(shipImg),
    author: {
      id: 1,
      name: 'Sarah Jenkins',
      bio: 'Head of Maritime Strategy at ardle with 15+ years in international container logistics.',
      avatar: m(avatarImg),
    },
    tags: [
      { id: 1, label: 'Maritime' },
      { id: 2, label: 'Supply Chain' },
      { id: 3, label: 'Freight Rates' },
    ],
    seo: {
      metaTitle: 'Navigating Ocean Freight Volatility in 2026 | ardle',
      metaDescription: 'Expert analysis on maritime routes, rate stability, and carrier management.',
      noIndex: false,
    },
  },
  {
    id: 2,
    documentId: 'post-2',
    title: 'The Rise of Micro-Fulfillment in Urban Distribution',
    slug: 'the-rise-of-micro-fulfillment-in-urban-distribution',
    category: 'Warehousing',
    date: '2026-08-02',
    readTime: '4 min read',
    excerpt: 'How localized micro-warehouses cut final-mile delivery costs and satisfy same-day customer expectations.',
    body: 'Urban consumers now expect same-day and two-hour delivery windows as standard. Fulfilling these timelines from mega-distribution centers located 50 miles outside metro cores is economically unsustainable.\n\nMicro-fulfillment centers placed inside dense city centers bridge this gap. By utilizing automated vertical storage systems, these facilities pack thousands of fast-moving SKUs into compact footprints.',
    alt: 'Warehouse automation picking',
    image: m(service2Img),
    author: {
      id: 2,
      name: 'Marcus Vance',
      bio: 'VP of Fulfillment Technologies at ardle.',
      avatar: m(avatarImg),
    },
    tags: [
      { id: 4, label: 'Fulfillment' },
      { id: 5, label: 'eCommerce' },
    ],
    seo: {
      metaTitle: 'Micro-Fulfillment in Urban Distribution | ardle',
      metaDescription: 'How localized fulfillment nodes are revolutionizing last-mile delivery economics.',
      noIndex: false,
    },
  },
  {
    id: 3,
    documentId: 'post-3',
    title: 'Customs Pre-Clearance: Eliminating Port Bottlenecks',
    slug: 'customs-pre-clearance-eliminating-port-bottlenecks',
    category: 'Customs',
    date: '2026-07-22',
    readTime: '6 min read',
    excerpt: 'A practical guide to electronic documentation and duty classification before vessel docking.',
    body: 'Demurrage and container holding fees represent millions of dollars in avoidable supply chain waste. When cargo arrives at port before paperwork is cleared, costly delays are guaranteed.\n\nOur customs brokerage division leverages electronic data interchange (EDI) to file tariffs and obtain customs release prior to vessel berthing.',
    alt: 'Customs and cargo documentation',
    image: m(service1Img),
    author: {
      id: 3,
      name: 'Elena Rostova',
      bio: 'Director of Global Trade Compliance at ardle.',
      avatar: m(avatarImg),
    },
    tags: [
      { id: 6, label: 'Customs' },
      { id: 7, label: 'Compliance' },
    ],
    seo: {
      metaTitle: 'Customs Pre-Clearance Guide | ardle',
      metaDescription: 'Eliminate port delays and demurrage with advance documentation filing.',
      noIndex: false,
    },
  },
]

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'David Sterling',
    role: 'VP of Supply Chain, Apex Retail',
    order: 1,
    rating: 5,
    quote:
      'ardle transformed our ocean freight logistics. Shipments that previously faced delays now arrive on schedule with pinpoint accuracy.',
    avatar: m(avatarImg),
  },
  {
    id: 2,
    name: 'Amara Chen',
    role: 'Director of Logistics, NovaTech Hardware',
    order: 2,
    rating: 5,
    quote:
      'The real-time visibility platform gives our team complete confidence. We know where every container is at all times.',
    avatar: m(avatarImg),
  },
  {
    id: 3,
    name: 'Jonathan Miller',
    role: 'Chief Operating Officer, Lumina Brands',
    order: 3,
    rating: 5,
    quote:
      'Their warehousing integration cut our dock-to-stock time in half. Flawless communication and exceptional support.',
    avatar: m(avatarImg),
  },
]
