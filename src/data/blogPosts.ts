import warehouse from '../assets/images/LogisticsDoes.webp'
import containers from '../assets/images/service1.jpg'
import trucks from '../assets/images/service2.jpg'
import ship from '../assets/images/ship.jpg'
import port from '../assets/images/aboutbg.webp'
import road from '../assets/images/herobg.webp'
import avatar from '../assets/images/Avatar.png'

export type BlogPost = {
  slug: string
  title: string
  image: string
  alt: string
  category: string
  author: string
  authorAvatar: string
  authorBio: string
  date: string
  readTime: string
  excerpt: string
  tags: string[]
  body: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'choosing-the-right-warehouse-node',
    title: 'Choosing the Right Warehouse Node for Your Business',
    image: warehouse,
    alt: 'Forklift loading pallets at a port warehouse at sunset',
    category: 'Warehousing',
    author: 'Anna Smith',
    authorAvatar: avatar,
    authorBio:
      'Anna covers warehousing and distribution strategy for the ardle blog, writing from a decade spent running fulfillment operations.',
    date: 'August 12, 2026',
    readTime: '6 min read',
    excerpt:
      "Picking a warehouse location isn't just about square footage — here's how shipping volume and customer geography should drive the decision.",
    tags: ['Warehousing', 'Network Design'],
    body: [
      "Picking a warehouse location isn't just about square footage — it's about matching your storage footprint to where your customers actually are. The node closest to the largest concentration of orders will always outperform the cheapest one on a map.",
      'Start with your shipping data. Pull the last two quarters of order addresses and plot them by density. In most cases, a handful of metro areas account for the majority of volume, and that cluster should anchor your primary node.',
      'From there, layer in transit-time targets. A two-day ground promise reshapes the map differently than a five-day one, and each additional node adds carrying cost that has to be justified by faster delivery or lower freight spend.',
      "Finally, revisit the decision every two quarters. Customer geography shifts as marketing channels and product lines change, and a network that made sense last year can quietly become the wrong shape for this one.",
    ],
  },
  {
    slug: 'container-loading-best-practices',
    title: 'Container Loading Best Practices That Cut Damage Claims',
    image: containers,
    alt: 'Stacked shipping containers beside gantry cranes at a port',
    category: 'Ocean Freight',
    author: 'Anna Smith',
    authorAvatar: avatar,
    authorBio:
      'Anna covers warehousing and distribution strategy for the ardle blog, writing from a decade spent running fulfillment operations.',
    date: 'July 28, 2026',
    readTime: '5 min read',
    excerpt:
      'Most transit damage traces back to how a container was packed, not how it was shipped. A few loading habits fix most of it.',
    tags: ['Ocean Freight', 'Best Practices'],
    body: [
      'Most transit damage traces back to how a container was packed, not how it was shipped. Weight distribution, block-and-brace technique, and void-fill all matter more than the carrier or the route.',
      'Heavy items belong low and centered, distributed evenly across the floor rather than stacked in one corner. An unevenly loaded container shifts under normal ocean motion, and that shift is where most breakage happens.',
      'Void spaces are the second biggest culprit. Any gap larger than a few centimeters gives cargo room to move — dunnage bags, airbags, or bracing should close that gap before the doors shut.',
      'Photograph the load at each stage: empty, mid-load, and fully packed. It costs nothing and turns a disputed damage claim into a five-minute resolution.',
    ],
  },
  {
    slug: 'last-mile-delivery-costs',
    title: 'Why Last-Mile Delivery Eats More of Your Budget Than You Think',
    image: trucks,
    alt: 'Freight trucks parked in front of stacked containers',
    category: 'Distribution',
    author: 'Anna Smith',
    authorAvatar: avatar,
    authorBio:
      'Anna covers warehousing and distribution strategy for the ardle blog, writing from a decade spent running fulfillment operations.',
    date: 'July 9, 2026',
    readTime: '7 min read',
    excerpt:
      'Last-mile routinely accounts for over half of total shipping cost. Here is where that spend actually goes and how to trim it.',
    tags: ['Distribution', 'Cost Optimization'],
    body: [
      'Last-mile delivery routinely accounts for more than half of total shipping cost, even though it covers the shortest leg of the journey. Stop density, failed deliveries, and address accuracy all compound quickly at this stage.',
      'Failed first attempts are the single biggest lever. Every redelivery roughly doubles the cost of that stop, so investing in address validation and delivery-window confirmation pays for itself within weeks.',
      'Route density matters more than raw distance. A tightly clustered delivery zone with fifteen stops per hour will always beat a scattered one with five, regardless of how efficient the driver is.',
      'Where volume allows, shifting a portion of last-mile to a regional carrier or a local courier network — rather than a single national provider — often closes the cost gap without sacrificing delivery speed.',
    ],
  },
  {
    slug: 'ocean-vs-air-freight',
    title: 'Ocean vs. Air Freight: A Practical Cost-Speed Framework',
    image: ship,
    alt: 'Container ship under way at sea',
    category: 'Ocean Freight',
    author: 'Marcus Lee',
    authorAvatar: avatar,
    authorBio:
      'Marcus writes on freight and port operations for the ardle blog, drawing on years spent working logistics for global carriers.',
    date: 'June 22, 2026',
    readTime: '6 min read',
    excerpt:
      'The ocean-vs-air decision is rarely close on cost, but the real question is what a week of transit time is actually worth to your business.',
    tags: ['Ocean Freight', 'Air Freight', 'Strategy'],
    body: [
      "The ocean-versus-air decision is rarely close on cost — ocean freight typically runs a fraction of the price per kilogram. But cost alone misses the point; the real question is what a week of transit time is worth to your business.",
      'For low-margin, high-volume goods with predictable demand, ocean freight almost always wins. The savings compound across every unit, and stable demand means you can plan inventory weeks in advance.',
      'Air freight earns its premium when a stockout costs more than the freight bill — new product launches, seasonal spikes, or replenishing a fast-moving SKU that ran out early.',
      'A useful rule of thumb: if a two-week delay would meaningfully change your revenue for that shipment, air freight is worth pricing out. If it would not, ocean freight is almost always the better default.',
    ],
  },
  {
    slug: 'reducing-dwell-time-at-port',
    title: 'Five Ways to Reduce Dwell Time at the Port',
    image: port,
    alt: 'Freight trucks at a loading dock at sunset',
    category: 'Port Operations',
    author: 'Marcus Lee',
    authorAvatar: avatar,
    authorBio:
      'Marcus writes on freight and port operations for the ardle blog, drawing on years spent working logistics for global carriers.',
    date: 'June 3, 2026',
    readTime: '5 min read',
    excerpt:
      'Every extra day a container sits at port adds demurrage cost and delays everything downstream. These five changes shrink dwell time fastest.',
    tags: ['Port Operations', 'Ocean Freight'],
    body: [
      'Every extra day a container sits at port adds demurrage cost and delays everything downstream — production schedules, retail shelves, and customer promises all slip in lockstep with it.',
      'Pre-clearing customs documentation before the vessel arrives is the single highest-leverage fix. Containers held for paperwork, not cargo, are the most preventable delay in the whole chain.',
      'Booking drayage capacity in advance, rather than reactively once a container is available, consistently shaves a day or more off pickup time during peak season.',
      'Finally, track demurrage-free windows by terminal, not by carrier — the free-time clock varies more by port than most shippers expect, and missing it by a day is pure waste.',
    ],
  },
  {
    slug: 'building-a-resilient-supply-chain',
    title: 'Building a Supply Chain That Survives the Next Disruption',
    image: road,
    alt: 'Freight truck on the road at dusk',
    category: 'Strategy',
    author: 'Anna Smith',
    authorAvatar: avatar,
    authorBio:
      'Anna covers warehousing and distribution strategy for the ardle blog, writing from a decade spent running fulfillment operations.',
    date: 'May 18, 2026',
    readTime: '8 min read',
    excerpt:
      'Resilience is not the same as redundancy. Here is how to build a network that bends under pressure instead of breaking.',
    tags: ['Strategy', 'Risk Management'],
    body: [
      'Resilience is not the same as redundancy. Simply duplicating every supplier and route drives up cost without necessarily making the network any more able to absorb a real disruption.',
      'The more durable approach is visibility first: knowing exactly where every shipment and every supplier commitment stands at any given moment, so a problem is caught in hours instead of weeks.',
      'From there, build flexibility into the parts of the network that fail most often — a secondary carrier on your highest-volume lane, a backup node in a different region, a buffer stock on your slowest-replenishing SKUs.',
      'Test the plan before you need it. A contingency route that has never actually moved a shipment is a guess, not a plan — run it at small volume periodically so it is proven when it matters.',
    ],
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function getRelatedPosts(slug: string, count = 3) {
  const current = getPostBySlug(slug)
  const rest = BLOG_POSTS.filter((post) => post.slug !== slug)
  if (!current) return rest.slice(0, count)

  const sameCategory = rest.filter((post) => post.category === current.category)
  const others = rest.filter((post) => post.category !== current.category)
  return [...sameCategory, ...others].slice(0, count)
}
