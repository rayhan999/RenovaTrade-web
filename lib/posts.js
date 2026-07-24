/**
 * ⚠️ PLACEHOLDER ARTICLES — sample content for the News & Market Insights hub.
 * Structure (categories, tags, hrefs) is production-ready for SEO; replace
 * each entry with a real article (own slug + page) before launch and remove
 * the `sample: true` flags / SampleTag badges.
 *
 * Each post now references a DISTINCT real-images/ asset — none of these
 * images are shared with the /services-and-solutions catalog, the homepage
 * Products / Service sections, the homepage hero, the /about hero, or the
 * individual service detail heroes. The six images were chosen for topic
 * relevance:
 *   1. Market Trends         → real-operations-overview-banner-01
 *   2. HMS grading           → real-shredder-bales-01
 *   3. Reach stackers        → real-heavy-equipment-yards-01
 *   4. EU Waste Shipment     → real-cargo-ship-01
 *   5. Letter of Credit      → real-coils-stock-01
 *   6. Container Handlers    → real-bulk-cargo-01
 */
export const categories = ["All", "Market Trends", "Sourcing Tips", "Equipment & Deliveries", "Compliance"]

export const posts = [
  {
    title: "Global Metal Scrap Market Trends: What Buyers Should Watch This Quarter",
    excerpt: "Ferrous and non-ferrous price direction, European collection volumes, and freight costs — the three variables shaping landed cost for South Asian buyers.",
    category: "Market Trends",
    date: "15 Jun 2026",
    readTime: "6 min read",
    image: "/assets/real-images/real-operations-overview-banner-01.jpg",
    href: "/blog-details",
    featured: true,
    sample: true,
  },
  {
    title: "HMS 1 vs HMS 2 vs Shredded: Choosing the Right Grade for Your Mill",
    excerpt: "A practical grading guide — density, contamination tolerance, melt yield, and when paying more per tonne actually lowers your cost per finished tonne.",
    category: "Sourcing Tips",
    date: "28 May 2026",
    readTime: "8 min read",
    image: "/assets/real-images/real-shredder-bales-01.jpg",
    href: "/blog-details",
    sample: true,
  },
  {
    title: "Buying Used Reach Stackers from Europe: An Inspection Checklist",
    excerpt: "Operating hours, boom wear, spreader condition, and service history — what our inspectors check before we let a client commit to a machine.",
    category: "Equipment & Deliveries",
    date: "12 May 2026",
    readTime: "7 min read",
    image: "/assets/real-images/real-heavy-equipment-yards-01.jpg",
    href: "/blog-details",
    sample: true,
  },
  {
    title: "Understanding the EU Waste Shipment Regulation as a Scrap Importer",
    excerpt: "What the EU rules mean for notifications, documentation, and timing when you import European scrap into South Asia.",
    category: "Compliance",
    date: "30 Apr 2026",
    readTime: "5 min read",
    image: "/assets/real-images/real-cargo-ship-01.jpg",
    href: "/blog-details",
    sample: true,
  },
  {
    title: "Letter of Credit vs T/T: Structuring Payment for First-Time Imports",
    excerpt: "How to balance security and cost when paying a new European counterparty — and the L/C clauses that cause the most discrepancies.",
    category: "Sourcing Tips",
    date: "18 Apr 2026",
    readTime: "6 min read",
    image: "/assets/real-images/real-coils-stock-01.jpg",
    href: "/blog-details",
    sample: true,
  },
  {
    title: "Delivery Report: Container Handlers from the Baltics to South Asia",
    excerpt: "A recent shipment walkthrough — sourcing, inspection, RoRo booking, documentation, and arrival, with the real timeline at each step.",
    category: "Equipment & Deliveries",
    date: "02 Apr 2026",
    readTime: "4 min read",
    image: "/assets/real-images/real-bulk-cargo-01.jpg",
    href: "/blog-details",
    sample: true,
  },
]
