import ServicesHero from '../components/ServicesHero'
import Systems from '../components/Systems'
import Distribution from '../components/Distribution'
import NetworkGrid from '../components/NetworkGrid'
import ServicesFaq from '../components/ServicesFaq'
import ServicesCta from '../components/ServicesCta'
import CmsUnavailable from '../components/CmsUnavailable'
import { useCmsData } from '../hooks/useCmsData'
import { useSeo } from '../hooks/useSeo'
import { useGlobal } from '../lib/cms/GlobalContext'
import { getServicesPage } from '../lib/cms'

export default function Services() {
  const { data: global } = useGlobal()
  const { data: services, loading } = useCmsData(getServicesPage, [])

  useSeo(services?.seo, global?.defaultSeo, global?.siteName)

  if (!services) return loading ? null : <CmsUnavailable />

  return (
    <>
      <ServicesHero {...services.hero} />
      <Systems
        title={services.systemsTitle ?? ''}
        subtitle={services.systemsSubtitle ?? ''}
        modes={global?.transportModes ?? []}
      />
      <Distribution
        title={services.distributionTitle ?? ''}
        subtitle={services.distributionSubtitle ?? ''}
        cards={services.distributionCards}
      />
      <NetworkGrid
        title={services.networkGridTitle ?? ''}
        subtitle={services.networkGridSubtitle ?? ''}
        cards={services.networkGridCards}
      />
      {services.faq && <ServicesFaq {...services.faq} />}
      {services.cta && <ServicesCta {...services.cta} />}
    </>
  )
}
