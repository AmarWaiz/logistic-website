import { fetchMany, fetchOne, postJson } from './client'
import type {
  AboutPage,
  BlogPage,
  BlogPost,
  ContactPage,
  Global,
  HomePage,
  ServicesPage,
  Testimonial,
  WarehousingPage,
} from './types'

const SEO_POPULATE = { seo: { populate: { ogImage: true } } }

export const getGlobal = () =>
  fetchOne<Global>('global', {
    logo: true,
    footerWatermark: true,
    navigation: true,
    footerNavigation: true,
    socialLinks: true,
    transportModes: { populate: { image: true } },
    defaultSeo: { populate: { ogImage: true } },
  })

export const getHomePage = () =>
  fetchOne<HomePage>('home-page', {
    heroBgImage: true,
    heroWordmarkImage: true,
    heroPlaneImage: true,
    heroTruckImage: true,
    processSteps: true,
    growthImage: true,
    growthFeatures: true,
    assuranceImage: true,
    assuranceCards: true,
    networkCta: true,
    servicesItems: { populate: { image: true } },
    faq: { populate: { items: true } },
    ...SEO_POPULATE,
  })

const PAGE_HERO_POPULATE = { hero: { populate: { backgroundImage: true } } }

export const getAboutPage = () =>
  fetchOne<AboutPage>('about-page', {
    ...PAGE_HERO_POPULATE,
    brandLogos: { populate: { image: true } },
    seamlessTiles: { populate: { image: true } },
    roadBannerImage: true,
    platformImage: true,
    platformFeatures: true,
    whyChooseCards: { populate: { image: true } },
    capabilitiesCards: true,
    impactImage: true,
    impactStats: true,
    faq: { populate: { items: true } },
    networkCta: true,
    ...SEO_POPULATE,
  })

export const getContactPage = () =>
  fetchOne<ContactPage>('contact-page', {
    ...PAGE_HERO_POPULATE,
    ...SEO_POPULATE,
  })

export const getServicesPage = () =>
  fetchOne<ServicesPage>('services-page', {
    ...PAGE_HERO_POPULATE,
    distributionCards: true,
    networkGridCards: { populate: { image: true } },
    faq: { populate: { items: true } },
    cta: true,
    ...SEO_POPULATE,
  })

export const getWarehousingPage = () =>
  fetchOne<WarehousingPage>('warehousing-page', {
    ...PAGE_HERO_POPULATE,
    capabilitiesCards: true,
    howItWorksSteps: { populate: { image: true } },
    industryFitImage: true,
    industryFitStats: true,
    faq: { populate: { items: true } },
    cta: true,
    ...SEO_POPULATE,
  })

export const getBlogPage = () =>
  fetchOne<BlogPage>('blog-page', {
    ...PAGE_HERO_POPULATE,
    faq: { populate: { items: true } },
    cta: true,
    ...SEO_POPULATE,
  })

const BLOG_POST_POPULATE = {
  image: true,
  author: { populate: { avatar: true } },
  tags: true,
  ...SEO_POPULATE,
}

export const getBlogPosts = () =>
  fetchMany<BlogPost>('blog-posts', BLOG_POST_POPULATE, 'sort=date:desc&pagination[pageSize]=100')

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const params = new URLSearchParams()
  params.set('filters[slug][$eq]', slug)
  const posts = await fetchMany<BlogPost>(
    'blog-posts',
    BLOG_POST_POPULATE,
    params.toString()
  )
  return posts[0] ?? null
}

export const getTestimonials = () =>
  fetchMany<Testimonial>('testimonials', { avatar: true }, 'sort=order:asc&pagination[pageSize]=50')

export interface ContactSubmissionInput {
  name: string
  email: string
  phone?: string
  message: string
}

export const submitContactForm = (data: ContactSubmissionInput) =>
  postJson('contact-submissions', { data })
