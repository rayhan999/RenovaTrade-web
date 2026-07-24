import { Recycle, Forklift, Globe2 } from "lucide-react"

export const services = [
  {
    title: "Metal Scrap Trading",
    text: "Ferrous and non-ferrous scrap including HMS, shredded scrap, copper, aluminum, stainless steel, and brass.",
    image: "/assets/real_Images/real-port-cranes-yards-01.jpg",
    link: "/services/metal-scrap-trading",
    icon: Recycle,
    highlights: ["HMS 1 & 2", "Shredded", "Copper", "Aluminium"],
  },
  {
    title: "Heavy Equipment & Industrial Machinery",
    text: "Equipment for ports, logistics, construction, infrastructure, manufacturing, recycling, and industrial operations.",
    image: "/assets/real_Images/real-shredder-line-01.jpg",
    link: "/services/heavy-equipment",
    icon: Forklift,
    highlights: ["Reach stackers", "Forklifts", "Cranes", "Port equipment"],
  },
  {
    title: "International Sourcing & Procurement",
    text: "End-to-end sourcing and procurement support from requirement review to supplier identification, negotiation, and delivery.",
    image: "/assets/real_Images/real-container-scrap-01.jpg",
    link: "/services/international-sourcing",
    icon: Globe2,
    highlights: ["Supplier vetting", "Negotiation", "Export docs", "Logistics"],
  },
]
