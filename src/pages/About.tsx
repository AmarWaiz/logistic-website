import AboutHero from '../components/AboutHero'
import Brands from '../components/Brands'
import Seamless from '../components/Seamless'
import Impact from '../components/Impact'
import RoadBanner from '../components/RoadBanner'
import Platform from '../components/Platform'
import WhyChoose from '../components/WhyChoose'
import Capabilities from '../components/Capabilities'
import Faq from '../components/Faq'
import Network from '../components/Network'
import CmsUnavailable from '../components/CmsUnavailable'
import { PageHeroSkeleton } from '../components/PageSkeleton'
import { useCmsData } from '../hooks/useCmsData'
import { useSeo } from '../hooks/useSeo'
import { useGlobal } from '../lib/cms/GlobalContext'
import { getAboutPage, mediaUrl } from '../lib/cms'

export default function About() {
  const { data: global } = useGlobal()
  const { data: about, loading } = useCmsData(getAboutPage, [])

  useSeo(about?.seo, global?.defaultSeo, global?.siteName)

  if (!about) return loading ? <PageHeroSkeleton /> : <CmsUnavailable />

  return (
    <>
      <AboutHero {...about.hero} />
      <Brands logos={about.brandLogos} />
      <Seamless
        title={about.seamlessTitle ?? ''}
        text={about.seamlessText ?? ''}
        ctaText={about.seamlessCtaText ?? 'Get in touch'}
        ctaLink={about.seamlessCtaLink ?? '#/contact'}
        tiles={about.seamlessTiles}
      />
      <RoadBanner
        image={about.roadBannerImage ? mediaUrl(about.roadBannerImage.url) : undefined}
        alt={about.roadBannerAlt ?? ''}
      />
      <Platform
        title={about.platformTitle ?? ''}
        subtitle={about.platformSubtitle ?? ''}
        image={about.platformImage ? mediaUrl(about.platformImage.url) : undefined}
        imageAlt={about.platformImageAlt ?? ''}
        heading={about.platformHeading ?? ''}
        text={about.platformText ?? ''}
        features={about.platformFeatures}
      />
      <WhyChoose
        title={about.whyChooseTitle ?? ''}
        subtitle={about.whyChooseSubtitle ?? ''}
        cards={about.whyChooseCards}
      />
      <Capabilities
        title={about.capabilitiesTitle ?? ''}
        subtitle={about.capabilitiesSubtitle ?? ''}
        cards={about.capabilitiesCards}
      />
      <Impact
        title={about.impactTitle ?? ''}
        text={about.impactText ?? ''}
        image={about.impactImage ? mediaUrl(about.impactImage.url) : undefined}
        imageAlt={about.impactImageAlt ?? ''}
        ctaText={about.impactCtaText ?? 'Contact Us'}
        ctaLink={about.impactCtaLink ?? '#/contact'}
        stats={about.impactStats}
      />
      {about.faq && <Faq {...about.faq} />}
      {about.networkCta && <Network {...about.networkCta} />}
    </>
  )
}
