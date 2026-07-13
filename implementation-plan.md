# Renova Trade Website Implementation Plan

## Goal
Rebuild the Renova Trade website content based on the revised content document, aligning the site with the company’s actual business: international sourcing, procurement, metal scrap trading, and export solutions connecting European suppliers with South Asian markets.

---

## Phase 1: Cleanup & Preparation

### Step 1.1: Create a backup branch
```bash
git checkout -b feature/renova-content-update
```

### Step 1.2: Remove unused pages
Delete the following folders under `app/`:
- `app-development/`
- `digital-marketing/`
- `ui-ux-designing/`
- `graphic-designing/`
- `website-development/`
- `seo-content-writting/`
- `farming-products/`
- `pricing/`
- `team/`
- `team-details/`
- `projects/`
- `project-details/`
- `testimonials/`
- `faq/` (optional — can repurpose later)
- `index-2/`
- `index-3/`

### Step 1.3: Remove unused component folders
Delete the following folders under `components/sections/`:
- `home2/`
- `home3/`

### Step 1.4: Update navigation
Edit the following files:
- `components/layout/Menu.js`
- `components/layout/MobileMenu.js`
- `components/layout/footer/Footer1.js`

Replace old links with:
- Home
- About Us
- Services (dropdown)
  - Metal Scrap Trading
  - Heavy Equipment & Industrial Machinery
  - International Sourcing & Procurement
- Products
- Blog / News & Insights
- Contact

---

## Phase 2: Update Existing Pages

### Step 2.1: Update Home page (`app/page.js`)
Use components from `components/sections/home1/` where possible.

Sections to include:
1. **Banner**
   - Headline: “Connecting European Industry with South Asian Markets”
   - Subheading: Finland-based international sourcing, procurement, trading, and export company.
   - CTAs: “Request a Quote”, “Become a Supply Partner”, “Contact Us”
2. **Core Services**
   - Metal Scrap Trading
   - Heavy Equipment & Industrial Machinery
   - International Product Sourcing
   - Procurement & Supply Chain Support
   - Export Coordination
   - Trade Consultancy
3. **About snippet**
   - Short intro from About Us content.
   - Link to `/about`.
4. **How We Work**
   - 7-step process.
5. **Industries We Serve**
   - Grid of industries.
6. **CTA**
   - “Request a Quote” / “Contact Us”.

### Step 2.2: Update About page (`app/about/page.js`)
- Replace current scrap-metal-merchant text with revised About Us content.
- Emphasize transparency, professionalism, responsiveness, and long-term relationships.
- Keep the existing layout and image if suitable.

### Step 2.3: Update Services page (`app/services/page.js`)
- Replace current service listing with the three main service divisions:
  1. Metal Scrap Trading
  2. Heavy Equipment & Industrial Machinery
  3. International Sourcing & Procurement
- Each service card should link to its detail page.
- Add a short intro and CTA.

### Step 2.4: Update Contact page (`app/contact/page.js`)
- Keep the contact form.
- Update contact details if needed.
- Add the brand message at the bottom.

### Step 2.5: Update Blog page (`app/blog/page.js`)
- Replace fake blog posts with a message about upcoming news and market insights.
- Keep the layout ready for real posts.

---

## Phase 3: Create New Pages

### Step 3.1: Create `/services/metal-scrap-trading`
Create `app/services/metal-scrap-trading/page.js`.

Content:
- Title: Metal Scrap Trading
- Introduction
- Products list:
  - HMS 1 & HMS 2
  - Shredded Scrap
  - Copper Scrap
  - Aluminium Scrap
  - Stainless Steel Scrap
  - Brass Scrap
  - Electric Motor Scrap
  - Railway Scrap
  - Structural Steel Scrap
- Services list:
  - Supplier identification
  - Quality-focused sourcing
  - Commercial negotiation
  - Export documentation
  - Logistics coordination
  - Long-term supply support

### Step 3.2: Create `/services/heavy-equipment`
Create `app/services/heavy-equipment/page.js`.

Content:
- Title: Heavy Equipment & Industrial Machinery
- Introduction
- Examples grid:
  - Reach Stackers
  - Forklifts
  - Container Handlers
  - Mobile Cranes
  - Construction Equipment
  - Port Equipment
  - Warehouse Equipment
  - Industrial Machinery
  - Material Handling Equipment

### Step 3.3: Create `/services/international-sourcing`
Create `app/services/international-sourcing/page.js`.

Content:
- Title: International Sourcing & Procurement
- Introduction
- 7-step process:
  1. Requirement review
  2. Supplier identification
  3. Quotation collection
  4. Technical comparison
  5. Commercial negotiation
  6. Supplier coordination
  7. Export planning
  8. Delivery support

### Step 3.4: Create `/products`
Create `app/products/page.js`.

Content:
- Title: Products
- Product categories:
  - Metal Scrap
  - Heavy Equipment
  - Industrial Machinery
  - Material Handling Equipment
  - Engineering Products
  - Industrial Components
  - Custom Sourcing Projects

### Step 3.5: Create `/how-we-work` (optional)
Create `app/how-we-work/page.js` or add as a section on the home page.

Content:
1. Understand your requirements
2. Identify qualified suppliers
3. Collect quotations
4. Compare technical and commercial offers
5. Finalize procurement
6. Coordinate export and logistics
7. Deliver reliable sourcing solutions

---

## Phase 4: SEO & Metadata

### Step 4.1: Add metadata to each page
Update or add `metadata` export in each `page.js`:
- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/services/metal-scrap-trading` — Metal Scrap Trading
- `/services/heavy-equipment` — Heavy Equipment & Industrial Machinery
- `/services/international-sourcing` — International Sourcing & Procurement
- `/products` — Products
- `/blog` — News & Market Insights
- `/contact` — Contact

### Step 4.2: Update Open Graph and Twitter metadata
Ensure each page has:
- `title`
- `description`
- `openGraph`
- `twitter`

---

## Phase 5: Images & Assets

### Step 5.1: Identify required images
- Hero banner image
- Metal scrap category images
- Heavy equipment images
- European port/logistics images
- Team/company images
- Blog thumbnails

### Step 5.2: Add images to `public/assets/images/`
- Create folders if needed (e.g., `services/`, `products/`, `blog/`).
- Use descriptive file names.

### Step 5.3: Replace generic template images
Update image paths in components and pages to use new Renova Trade images.

---

## Phase 6: Components & Reusability

### Step 6.1: Create reusable components
Consider creating:
- `ServiceCard.js` — for service listings
- `ProductCard.js` — for product listings
- `ProcessStep.js` — for the 7-step process
- `IndustryCard.js` — for industries grid
- `SectionTitle.js` — consistent section headings

### Step 6.2: Refactor existing components
- Move repeated CTA sections into a reusable `Cta.js` component.
- Clean up commented-out code in `app/page.js` and `app/about/page.js`.

---

## Phase 7: Validation & Testing

### Step 7.1: Run development server
```bash
npm run dev
```

### Step 7.2: Build the project
```bash
npm run build
```

### Step 7.3: Check for broken links
Visit each page and verify all links work.

### Step 7.4: Check console for errors
Open browser DevTools and fix any JavaScript errors.

### Step 7.5: Run lint
```bash
npm run lint
```

### Step 7.6: Responsive testing
Test on mobile, tablet, and desktop.

---

## Phase 8: Final Review

### Step 8.1: Code review
Review all changed files for:
- Consistency
- Correct imports
- No leftover template content
- Proper metadata

### Step 8.2: Content review
Verify all content matches the revised document.

### Step 8.3: Commit changes
```bash
git add .
git commit -m "Update website content and structure based on revised brand document"
```

---

## Suggested URL Structure

```
/
/about
/services
/services/metal-scrap-trading
/services/heavy-equipment
/services/international-sourcing
/products
/blog
/contact
```

---

## Notes

- Keep the existing Zefxa CSS classes for styling consistency.
- Use `Layout` component with `headerStyle={1}` and `footerStyle={1}` on all pages.
- Use Next.js `<Image />` where possible for better performance.
- Ensure all images have meaningful `alt` text.
