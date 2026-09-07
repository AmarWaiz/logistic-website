import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import CmsUnavailable from '../components/CmsUnavailable'
import { PageHeroSkeleton } from '../components/PageSkeleton'
import { useCmsData } from '../hooks/useCmsData'
import { useSeo } from '../hooks/useSeo'
import { useGlobal } from '../lib/cms/GlobalContext'
import { getContactPage } from '../lib/cms'

export default function Contact() {
  const { data: global } = useGlobal()
  const { data: contact, loading } = useCmsData(getContactPage, [])

  useSeo(contact?.seo, global?.defaultSeo, global?.siteName)

  if (!contact) return loading ? <PageHeroSkeleton variant="contact" /> : <CmsUnavailable />

  return (
    <>
      <ContactHero {...contact.hero} />
      <ContactForm
        eyebrow={contact.formEyebrow ?? ''}
        title={contact.formTitle ?? ''}
        infoEyebrow={contact.infoEyebrow ?? ''}
        infoTitle={contact.infoTitle ?? ''}
        assistanceHours={contact.assistanceHours ?? ''}
        phone={global?.contactPhone}
        email={global?.contactEmail}
        socialLinks={global?.socialLinks ?? []}
      />
    </>
  )
}
