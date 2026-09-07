import { fetchMany, fetchOne, postJson } from './client'
import {
  FALLBACK_ABOUT_PAGE,
  FALLBACK_BLOG_PAGE,
  FALLBACK_BLOG_POSTS,
  FALLBACK_CONTACT_PAGE,
  FALLBACK_GLOBAL,
  FALLBACK_HOME_PAGE,
  FALLBACK_SERVICES_PAGE,
  FALLBACK_TESTIMONIALS,
  FALLBACK_WAREHOUSING_PAGE,
} from './fallbacks'
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

export const getGlobal = async (): Promise<Global> => {
  const data = await fetchOne<Global>('global', {
    logo: true,
    footerWatermark: true,
    navigation: true,
    footerNavigation: true,
    socialLinks: true,
    transportModes: { populate: { image: true } },
    defaultSeo: { populate: { ogImage: true } },
  })
  return data ?? FALLBACK_GLOBAL
}

export const getHomePage = async (): Promise<HomePage> => {
  const data = await fetchOne<HomePage>('home-page', {
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
  return data ?? FALLBACK_HOME_PAGE
}

const PAGE_HERO_POPULATE = { hero: { populate: { backgroundImage: true } } }

export const getAboutPage = async (): Promise<AboutPage> => {
  const data = await fetchOne<AboutPage>('about-page', {
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
  return data ?? FALLBACK_ABOUT_PAGE
}

export const getContactPage = async (): Promise<ContactPage> => {
  const data = await fetchOne<ContactPage>('contact-page', {
    ...PAGE_HERO_POPULATE,
    ...SEO_POPULATE,
  })
  return data ?? FALLBACK_CONTACT_PAGE
}

export const getServicesPage = async (): Promise<ServicesPage> => {
  const data = await fetchOne<ServicesPage>('services-page', {
    ...PAGE_HERO_POPULATE,
    distributionCards: true,
    networkGridCards: { populate: { image: true } },
    faq: { populate: { items: true } },
    cta: true,
    ...SEO_POPULATE,
  })
  return data ?? FALLBACK_SERVICES_PAGE
}

export const getWarehousingPage = async (): Promise<WarehousingPage> => {
  const data = await fetchOne<WarehousingPage>('warehousing-page', {
    ...PAGE_HERO_POPULATE,
    capabilitiesCards: true,
    howItWorksSteps: { populate: { image: true } },
    industryFitImage: true,
    industryFitStats: true,
    faq: { populate: { items: true } },
    cta: true,
    ...SEO_POPULATE,
  })
  return data ?? FALLBACK_WAREHOUSING_PAGE
}

export const getBlogPage = async (): Promise<BlogPage> => {
  const data = await fetchOne<BlogPage>('blog-page', {
    ...PAGE_HERO_POPULATE,
    faq: { populate: { items: true } },
    cta: true,
    ...SEO_POPULATE,
  })
  return data ?? FALLBACK_BLOG_PAGE
}

const BLOG_POST_POPULATE = {
  image: true,
  author: { populate: { avatar: true } },
  tags: true,
  ...SEO_POPULATE,
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await fetchMany<BlogPost>(
    'blog-posts',
    BLOG_POST_POPULATE,
    'sort=date:desc&pagination[pageSize]=100'
  )
  return posts.length > 0 ? posts : FALLBACK_BLOG_POSTS
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const params = new URLSearchParams()
  params.set('filters[slug][$eq]', slug)
  const posts = await fetchMany<BlogPost>(
    'blog-posts',
    BLOG_POST_POPULATE,
    params.toString()
  )
  if (posts[0]) return posts[0]
  return FALLBACK_BLOG_POSTS.find((p) => p.slug === slug) ?? null
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const items = await fetchMany<Testimonial>(
    'testimonials',
    { avatar: true },
    'sort=order:asc&pagination[pageSize]=50'
  )
  return items.length > 0 ? items : FALLBACK_TESTIMONIALS
}

export interface ContactSubmissionInput {
  name: string
  email: string
  phone?: string
  message: string
}

export const submitContactForm = (data: ContactSubmissionInput) =>
  postJson('contact-submissions', { data })
