import BlogHero from '../components/BlogHero'
import BlogGrid from '../components/BlogGrid'
import BlogFaq from '../components/BlogFaq'
import BlogCta from '../components/BlogCta'
import CmsUnavailable from '../components/CmsUnavailable'
import { PageHeroSkeleton } from '../components/PageSkeleton'
import { useCmsData } from '../hooks/useCmsData'
import { useSeo } from '../hooks/useSeo'
import { useGlobal } from '../lib/cms/GlobalContext'
import { getBlogPage, getBlogPosts } from '../lib/cms'

export default function BlogList() {
  const { data: global } = useGlobal()
  const { data: blogPage, loading } = useCmsData(getBlogPage, [])
  const { data: posts } = useCmsData(getBlogPosts, [])

  useSeo(blogPage?.seo, global?.defaultSeo, global?.siteName)

  if (!blogPage) return loading ? <PageHeroSkeleton /> : <CmsUnavailable />

  return (
    <>
      <BlogHero {...blogPage.hero} />
      <BlogGrid
        title={blogPage.gridTitle ?? ''}
        subtitle={blogPage.gridSubtitle ?? ''}
        posts={posts ?? []}
      />
      {blogPage.faq && <BlogFaq {...blogPage.faq} />}
      {blogPage.cta && <BlogCta {...blogPage.cta} />}
    </>
  )
}
