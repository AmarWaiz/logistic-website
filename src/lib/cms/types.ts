export interface Media {
  id: number
  url: string
  alternativeText: string | null
  width: number | null
  height: number | null
}

export interface Seo {
  metaTitle?: string | null
  metaDescription?: string | null
  ogImage?: Media | null
  canonicalURL?: string | null
  noIndex?: boolean | null
}

export interface CtaBanner {
  title: string
  subtitle?: string | null
  buttonText: string
  buttonLink: string
}

export interface FaqItem {
  id: number
  question: string
  answer: string
}

export interface FaqBlock {
  title: string
  subtitle?: string | null
  items: FaqItem[]
}

export interface Stat {
  id: number
  value: string
  label: string
  tone?: 'gold' | 'white' | 'teal' | null
}

export interface NumberedFeature {
  id: number
  number: string
  title: string
  text: string
}

export interface SocialLink {
  id: number
  platform: 'facebook' | 'instagram' | 'x' | 'youtube' | 'tiktok' | 'linkedin'
  url: string
}

export interface NavLink {
  id: number
  label: string
  href: string
}

export interface TransportMode {
  id: number
  label: string
  image: Media
  alt: string
}

export interface LogoItem {
  id: number
  name: string
  image: Media
}

export interface ImageCard {
  id: number
  title: string
  text: string
  image: Media
  alt: string
  link?: string | null
}

export interface ImageTile {
  id: number
  image: Media
  alt: string
  large: boolean
}

export interface TitleText {
  id: number
  title: string
  text: string
}

export interface ProcessStep {
  id: number
  number: string
  title: string
  description: string
  accent: boolean
}

export interface IconFeature {
  id: number
  title: string
  description: string
}

export interface HowItWorksStep {
  id: number
  number: string
  title: string
  text: string
  image: Media
  alt: string
}

export interface Tag {
  id: number
  label: string
}

export interface PageHero {
  title: string
  text: string
  ctaText: string
  ctaLink: string
}

export interface DistributionCard {
  id: number
  title: string
  text: string
  link?: string | null
}

export interface ServiceDetail {
  id: number
  number: string
  title: string
  body: string
  image: Media
}

export interface Global {
  siteName: string
  logo: Media | null
  footerWatermark: Media | null
  footerTagline: string | null
  navigation: NavLink[]
  headerContactLabel: string | null
  headerContactHref: string | null
  footerNavigation: NavLink[]
  contactPhone: string | null
  contactEmail: string | null
  address: string | null
  socialLinks: SocialLink[]
  copyrightText: string | null
  transportModes: TransportMode[]
  defaultSeo: Seo | null
}

export interface HomePage {
  heroHeadline: string
  heroSubtitle: string | null
  heroCtaPrimaryText: string | null
  heroCtaPrimaryLink: string | null
  heroCtaSecondaryText: string | null
  heroCtaSecondaryLink: string | null
  heroBgImage: Media | null
  heroWordmarkImage: Media | null
  heroPlaneImage: Media | null
  heroTruckImage: Media | null

  processTitle: string | null
  processSubtitle: string | null
  processSteps: ProcessStep[]

  systemsTitle: string | null
  systemsSubtitle: string | null

  growthTitle: string | null
  growthImage: Media | null
  growthImageAlt: string | null
  growthCtaText: string | null
  growthCtaLink: string | null
  growthFeatures: IconFeature[]

  assuranceTitle: string | null
  assuranceSubtitle: string | null
  assuranceImage: Media | null
  assuranceImageAlt: string | null
  assuranceCards: TitleText[]

  networkCta: CtaBanner | null

  servicesTitle: string | null
  servicesSubtitle: string | null
  servicesItems: ServiceDetail[]

  reviewsTitle: string | null
  reviewsSubtitle: string | null

  blogSectionTitle: string | null
  blogSectionSubtitle: string | null

  faq: FaqBlock | null

  promoTitle: string | null
  promoText: string | null
  promoCtaText: string | null
  promoCtaLink: string | null

  seo: Seo | null
}

export interface AboutPage {
  hero: PageHero
  brandLogos: LogoItem[]

  seamlessTitle: string | null
  seamlessText: string | null
  seamlessCtaText: string | null
  seamlessCtaLink: string | null
  seamlessTiles: ImageTile[]

  roadBannerImage: Media | null
  roadBannerAlt: string | null

  platformTitle: string | null
  platformSubtitle: string | null
  platformImage: Media | null
  platformImageAlt: string | null
  platformHeading: string | null
  platformText: string | null
  platformFeatures: FaqItem[]

  whyChooseTitle: string | null
  whyChooseSubtitle: string | null
  whyChooseCards: ImageCard[]

  capabilitiesTitle: string | null
  capabilitiesSubtitle: string | null
  capabilitiesCards: NumberedFeature[]

  impactTitle: string | null
  impactText: string | null
  impactImage: Media | null
  impactImageAlt: string | null
  impactCtaText: string | null
  impactCtaLink: string | null
  impactStats: Stat[]

  faq: FaqBlock | null
  networkCta: CtaBanner | null

  seo: Seo | null
}

export interface ContactPage {
  hero: PageHero
  formEyebrow: string | null
  formTitle: string | null
  infoEyebrow: string | null
  infoTitle: string | null
  assistanceHours: string | null
  seo: Seo | null
}

export interface ServicesPage {
  hero: PageHero
  systemsTitle: string | null
  systemsSubtitle: string | null
  distributionTitle: string | null
  distributionSubtitle: string | null
  distributionCards: DistributionCard[]
  networkGridTitle: string | null
  networkGridSubtitle: string | null
  networkGridCards: ImageCard[]
  faq: FaqBlock | null
  cta: CtaBanner | null
  seo: Seo | null
}

export interface WarehousingPage {
  hero: PageHero
  capabilitiesTitle: string | null
  capabilitiesCards: NumberedFeature[]
  howItWorksTitle: string | null
  howItWorksSteps: HowItWorksStep[]
  industryFitTitle: string | null
  industryFitText: string | null
  industryFitImage: Media | null
  industryFitImageAlt: string | null
  industryFitStats: Stat[]
  faq: FaqBlock | null
  cta: CtaBanner | null
  seo: Seo | null
}

export interface BlogPage {
  hero: PageHero
  gridTitle: string | null
  gridSubtitle: string | null
  faq: FaqBlock | null
  cta: CtaBanner | null
  seo: Seo | null
}

export interface Author {
  id: number
  name: string
  avatar: Media | null
  bio: string | null
}

export interface BlogPost {
  id: number
  documentId: string
  title: string
  slug: string
  image: Media
  alt: string
  category: string
  author: Author | null
  date: string
  readTime: string | null
  excerpt: string
  tags: Tag[]
  body: string
  seo: Seo | null
}

export interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  avatar: Media | null
  rating: number
  order: number
}
