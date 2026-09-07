import { useCmsData } from '../hooks/useCmsData'
import { useSeo } from '../hooks/useSeo'
import { useGlobal } from '../lib/cms/GlobalContext'
import { getBlogPostBySlug, getBlogPosts, mediaUrl } from '../lib/cms'
import { splitParagraphs } from '../lib/multiline'
import avatarFallback from '../assets/images/Avatar.png'

const SHARE = [
  {
    label: 'Share on Facebook',
    path: (
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.4-.12-2.4 0-4 1.45-4 4.13V9.9H7.6V13h2.7v8h3.2Z" />
    ),
  },
  {
    label: 'Share on X',
    path: (
      <path
        d="M4 4l16 16M20 4 4 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    label: 'Share on LinkedIn',
    path: (
      <>
        <rect x="3" y="9" width="4" height="12" />
        <circle cx="5" cy="4.5" r="2.2" />
        <path d="M10.5 9H14v1.9c.7-1.2 2-2.2 3.8-2.2 3 0 4.2 1.9 4.2 5.1V21h-4v-6.4c0-1.5-.6-2.6-2-2.6-1.1 0-1.7.75-2 1.5-.1.25-.1.6-.1.95V21h-4V9Z" />
      </>
    ),
  },
]

export default function BlogPost({ slug }: { slug: string }) {
  const { data: global } = useGlobal()
  const { data: post, loading } = useCmsData(() => getBlogPostBySlug(slug), [slug])
  const { data: allPosts } = useCmsData(getBlogPosts, [])

  useSeo(post?.seo, global?.defaultSeo, global?.siteName)

  if (loading) return null

  if (!post) {
    return (
      <section className="blog-post">
        <div className="blog-post__hero blog-post__hero--empty">
          <div className="blog-post__hero-overlay" />
          <div className="blog-post__hero-inner">
            <a href="#/blog" className="blog-post__back">
              ← Back to all posts
            </a>
            <p className="blog-post__eyebrow">Blog</p>
            <h1 className="blog-post__title">Post not found</h1>
            <p className="blog-post__meta">
              That article doesn't exist, or may have been moved.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const rest = (allPosts ?? []).filter((p) => p.slug !== slug)
  const sameCategory = rest.filter((p) => p.category === post.category)
  const others = rest.filter((p) => p.category !== post.category)
  const related = [...sameCategory, ...others].slice(0, 3)

  const authorAvatar = post.author?.avatar ? mediaUrl(post.author.avatar.url) : avatarFallback

  return (
    <section className="blog-post">
      <div
        className="blog-post__hero"
        style={{ backgroundImage: `url(${mediaUrl(post.image.url)})` }}
      >
        <div className="blog-post__hero-overlay" />
        <div className="blog-post__hero-inner">
          <a href="#/blog" className="blog-post__back">
            ← Back to all posts
          </a>
          <p className="blog-post__eyebrow">{post.category}</p>
          <h1 className="blog-post__title">{post.title}</h1>

          <div className="blog-post__byline">
            <img
              className="blog-post__byline-avatar"
              src={authorAvatar}
              alt=""
              aria-hidden="true"
            />
            <div>
              <p className="blog-post__byline-name">{post.author?.name ?? 'ardle'}</p>
              <p className="blog-post__meta">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                <span aria-hidden="true">·</span> {post.readTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-post__inner blog-post__inner--layout">
        <div className="blog-post__layout">
          <div className="blog-post__body">
            <p className="blog-post__lead">{post.excerpt}</p>
            {splitParagraphs(post.body).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <ul className="blog-post__tags">
              {post.tags.map((tag) => (
                <li key={tag.id} className="blog-post__tag">
                  {tag.label}
                </li>
              ))}
            </ul>
          </div>

          <aside className="blog-post__sidebar">
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <ul className="blog-post__share-list">
                {SHARE.map((item) => (
                  <li key={item.label}>
                    <a
                      className="blog-post__share-link"
                      href="#"
                      aria-label={item.label}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        {item.path}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {post.author && (
              <div className="blog-post__author-card">
                <img
                  className="blog-post__author-avatar"
                  src={authorAvatar}
                  alt=""
                  aria-hidden="true"
                />
                <p className="blog-post__author-name">{post.author.name}</p>
                <p className="blog-post__author-bio">{post.author.bio}</p>
              </div>
            )}
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <div className="blog-post__related">
          <div className="blog-post__inner">
            <h2 className="blog-post__related-title">More from the blog</h2>
            <ul className="blog__grid blog-post__related-grid">
              {related.map((item) => (
                <li className="blog__card" key={item.slug}>
                  <img
                    className="blog__img"
                    src={mediaUrl(item.image.url)}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <a
                    className="blog__link"
                    href={`#/blog/${item.slug}`}
                    aria-label={`Read: ${item.title}`}
                  >
                    Read post
                  </a>
                  <h3 className="blog__card-title">{item.title}</h3>
                  <p className="blog__excerpt">{item.excerpt}</p>
                  <p className="blog__meta">
                    By {item.author?.name ?? 'ardle'} <span aria-hidden="true">·</span> {item.readTime}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}
