import WarehousingHero from '../components/WarehousingHero'
import WarehousingCapabilities from '../components/WarehousingCapabilities'
import HowItWorks from '../components/HowItWorks'
import IndustryFit from '../components/IndustryFit'
import WarehousingFaq from '../components/WarehousingFaq'
import WarehousingCta from '../components/WarehousingCta'
import CmsUnavailable from '../components/CmsUnavailable'
import { useCmsData } from '../hooks/useCmsData'
import { useSeo } from '../hooks/useSeo'
import { useGlobal } from '../lib/cms/GlobalContext'
import { getWarehousingPage, mediaUrl } from '../lib/cms'

export default function Warehousing() {
  const { data: global } = useGlobal()
  const { data: warehousing, loading } = useCmsData(getWarehousingPage, [])

  useSeo(warehousing?.seo, global?.defaultSeo, global?.siteName)

  if (!warehousing) return loading ? null : <CmsUnavailable />

  return (
    <>
      <WarehousingHero {...warehousing.hero} />
      <WarehousingCapabilities
        title={warehousing.capabilitiesTitle ?? ''}
        cards={warehousing.capabilitiesCards}
      />
      <HowItWorks title={warehousing.howItWorksTitle ?? ''} steps={warehousing.howItWorksSteps} />
      <IndustryFit
        title={warehousing.industryFitTitle ?? ''}
        text={warehousing.industryFitText ?? ''}
        image={warehousing.industryFitImage ? mediaUrl(warehousing.industryFitImage.url) : undefined}
        imageAlt={warehousing.industryFitImageAlt ?? ''}
        stats={warehousing.industryFitStats}
      />
      {warehousing.faq && <WarehousingFaq {...warehousing.faq} />}
      {warehousing.cta && <WarehousingCta {...warehousing.cta} />}
    </>
  )
}
