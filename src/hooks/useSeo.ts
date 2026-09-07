import { useEffect } from 'react'
import { mediaUrl } from '../lib/cms'
import type { Seo } from '../lib/cms'

function setMeta(attr: 'name' | 'property', key: string, content: string | null | undefined) {
  const selector = `meta[${attr}="${key}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!content) {
    tag?.remove()
    return
  }
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(url: string | null | undefined) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!url) {
    link?.remove()
    return
  }
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

/**
 * Applies a page's SEO fields to `document.title` and the relevant
 * `<meta>`/`<link>` tags. Falls back to the site-wide defaults from
 * Global Settings whenever a page hasn't set its own value.
 */
export function useSeo(seo: Seo | null | undefined, fallback?: Seo | null, siteName?: string) {
  useEffect(() => {
    const title = seo?.metaTitle || fallback?.metaTitle || siteName || 'ardle'
    const description = seo?.metaDescription ?? fallback?.metaDescription ?? null
    const ogImage = seo?.ogImage ?? fallback?.ogImage ?? null
    const noIndex = seo?.noIndex ?? fallback?.noIndex ?? false

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', ogImage ? mediaUrl(ogImage.url) : null)
    setCanonical(seo?.canonicalURL ?? null)
    setMeta('name', 'robots', noIndex ? 'noindex' : null)
  }, [seo, fallback, siteName])
}
