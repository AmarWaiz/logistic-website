import { mediaUrl } from '../lib/cms'
import type { BlogPost } from '../lib/cms'
import blogFallback from '../assets/images/aboutbg.webp'

interface BlogGridProps {
  title: string
  subtitle: string
  posts: BlogPost[]
}

export default function BlogGrid({ title, subtitle, posts }: BlogGridProps) {
  const postList = posts ?? []

  return (
    <section className="blog" id="blog-grid">
      <div className="blog__inner">
        <h2 className="blog__title">{title}</h2>
        <p className="blog__subtitle">{subtitle}</p>

        <ul className="blog__grid">
          {postList.map((post) => (
            <li className="blog__card" key={post.id}>
              <img
                className="blog__img"
                src={post.image?.url ? mediaUrl(post.image.url) : blogFallback}
                alt={post.alt || post.title}
                loading="lazy"
              />

              <a
                className="blog__link"
                href={`#/blog/${post.slug}`}
                aria-label={`Read: ${post.title}`}
              >
                Read post
              </a>

              <h3 className="blog__card-title">{post.title}</h3>
              <p className="blog__excerpt">{post.excerpt}</p>

              <p className="blog__meta">
                By {post.author?.name ?? 'ardle'} <span aria-hidden="true">·</span> {post.readTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
