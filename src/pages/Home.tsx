import Hero from '../components/Hero'
import Process from '../components/Process'
import Systems from '../components/Systems'
import Growth from '../components/Growth'
import Assurance from '../components/Assurance'
import Network from '../components/Network'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Blog from '../components/Blog'
import Faq from '../components/Faq'
import Promo from '../components/Promo'
import CmsUnavailable from '../components/CmsUnavailable'
import { HeroSkeleton } from '../components/PageSkeleton'
import { useCmsData } from '../hooks/useCmsData'
import { useSeo } from '../hooks/useSeo'
import { useGlobal } from '../lib/cms/GlobalContext'
import { getBlogPosts, getHomePage, getTestimonials, mediaUrl } from '../lib/cms'

export default function Home() {
  const { data: global } = useGlobal()
  const { data: home, loading } = useCmsData(getHomePage, [])
  const { data: testimonials } = useCmsData(getTestimonials, [])
  const { data: posts } = useCmsData(getBlogPosts, [])

  useSeo(home?.seo, global?.defaultSeo, global?.siteName)

  if (!home) return loading ? <HeroSkeleton /> : <CmsUnavailable />

  return (
    <>
      <Hero
        headline={home.heroHeadline}
        subtitle={home.heroSubtitle ?? ''}
        ctaPrimaryText={home.heroCtaPrimaryText ?? 'View Services'}
        ctaPrimaryLink={home.heroCtaPrimaryLink ?? '#/services'}
        ctaSecondaryText={home.heroCtaSecondaryText ?? 'Contact Us'}
        ctaSecondaryLink={home.heroCtaSecondaryLink ?? '#/contact'}
        bgImage={home.heroBgImage ? mediaUrl(home.heroBgImage.url) : undefined}
        wordmarkImage={home.heroWordmarkImage ? mediaUrl(home.heroWordmarkImage.url) : undefined}
        planeImage={home.heroPlaneImage ? mediaUrl(home.heroPlaneImage.url) : undefined}
        truckImage={home.heroTruckImage ? mediaUrl(home.heroTruckImage.url) : undefined}
      />
      <Process
        title={home.processTitle ?? ''}
        subtitle={home.processSubtitle ?? ''}
        steps={home.processSteps}
      />
      <Systems
        title={home.systemsTitle ?? ''}
        subtitle={home.systemsSubtitle ?? ''}
        modes={global?.transportModes ?? []}
      />
      <Growth
        title={home.growthTitle ?? ''}
        image={home.growthImage ? mediaUrl(home.growthImage.url) : ''}
        imageAlt={home.growthImageAlt ?? ''}
        ctaText={home.growthCtaText ?? 'Get Started'}
        ctaLink={home.growthCtaLink ?? '#/contact'}
        features={home.growthFeatures}
      />
      <Assurance
        title={home.assuranceTitle ?? ''}
        subtitle={home.assuranceSubtitle ?? ''}
        image={home.assuranceImage ? mediaUrl(home.assuranceImage.url) : ''}
        imageAlt={home.assuranceImageAlt ?? ''}
        cards={home.assuranceCards}
      />
      {home.networkCta && <Network {...home.networkCta} />}
      <Services
        title={home.servicesTitle ?? ''}
        subtitle={home.servicesSubtitle ?? ''}
        items={home.servicesItems}
      />
      <Reviews
        title={home.reviewsTitle ?? ''}
        subtitle={home.reviewsSubtitle ?? ''}
        testimonials={testimonials ?? []}
      />
      <Blog
        title={home.blogSectionTitle ?? ''}
        subtitle={home.blogSectionSubtitle ?? ''}
        posts={posts ?? []}
      />
      {home.faq && <Faq {...home.faq} />}
      <Promo
        title={home.promoTitle ?? ''}
        text={home.promoText ?? ''}
        ctaText={home.promoCtaText ?? 'Get started'}
        ctaLink={home.promoCtaLink ?? '#/contact'}
      />
    </>
  )
}
