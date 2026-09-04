import { BLOG_POSTS } from '../data/blogPosts'

export default function BlogGrid() {
  return (
    <section className="blog" id="blog-grid">
      <div className="blog__inner">
        <h2 className="blog__title">Latest from the Blog</h2>
        <p className="blog__subtitle">
          Guides and field notes on freight, warehousing, and running a
          leaner supply chain.
        </p>

        <ul className="blog__grid">
          {BLOG_POSTS.map((post) => (
            <li className="blog__card" key={post.slug}>
              <img
                className="blog__img"
                src={post.image}
                alt={post.alt}
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
                By {post.author} <span aria-hidden="true">·</span> {post.readTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
