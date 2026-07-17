/**
 * Derive a 2-letter initials placeholder from a member's full name.
 * Uses the first letter of the first word and the first letter of the
 * last whitespace-separated word, so "Md Mahedi Hasan Refat" yields
 * "MR" (not "MM"). Handles diacritics and empty input safely.
 */
export function memberInitials(name) {
  if (!name || typeof name !== 'string') return ''
  const words = name.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return ''
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

/**
 * Renova Trade — team member data.
 *
 * NOTE: Replace placeholder values with real data before launch.
 * Add real LinkedIn/Twitter URLs and a professional headshot.
 */
export const teamMembers = [
  {
    name: "Md Mahedi Hasan Refat",
    role: "Founder & Managing Director",
    email: "mahedi.refat@renovatrade.fi",
    phone: "+358 41 317 1469",
    image: "/assets/images/team/team-2-1.jpg",
    bio: "Mahedi founded Renova Trade to bridge European suppliers with South Asian industrial buyers. As Managing Director, he oversees the company's commercial strategy, supplier relationships, and end-to-end trade execution across the Europe–South Asia corridor.",
  },
  {
    name: "Fahad Al Mamun",
    role: "Head of Sourcing & Supplier Relations",
    email: "fahad.mamun@renovatrade.fi",
    phone: "+358 41 475 5166",
    // Photo not yet available — Team.js / team page render initials when null.
    image: null,
    bio: "Fahad leads European supplier identification, qualification, and ongoing relationship management — shortlisting manufacturers, recyclers, and dealers that match each buyer's specification, volume, and commercial terms.",
  },
  {
    name: "Matias Järvinen",
    role: "Trade & Logistics Manager",
    email: "matias.jarvinen@renovatrade.fi",
    phone: "+358 46 595 6184",
    image: null,
    bio: "Matias manages the operational side of every shipment — export documentation, Incoterms, freight booking, marine cargo insurance (CIF), and coordinating delivery through South Asian ports of discharge.",
  },
]
