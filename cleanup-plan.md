# Renova Trade Website Cleanup Plan

## Goal
Remove unused pages, components, and dead code to reduce maintenance burden, improve build performance, and eliminate confusing template leftovers.

---

## 1. Identify unused / low-value pages

The following pages are either alternate homepages, template pages, or not aligned with the Renova Trade brand:

| Page | Reason to remove / keep |
|------|-------------------------|
| `/index-2` | Alternate homepage using `home2` sections. Not linked from main nav. |
| `/index-3` | Alternate homepage using `home3` sections. Not linked from main nav. |
| `/digital-marketing` | Generic template service page (digital agency content). |
| `/ui-ux-designing` | Generic template service page. |
| `/app-development` | Generic template service page. |
| `/graphic-designing` | Generic template service page. |
| `/website-development` | Generic template service page. |
| `/seo-content-writting` | Generic template service page. |
| `/farming-products` | Unrelated agriculture template page. |
| `/team` | Uses fake placeholder team members. |
| `/team-details` | Single team detail page with fake content. |
| `/project-details` | Uses fake project content. |
| `/projects` | Uses fake portfolio content. |
| `/blog` | Uses fake blog posts. |
| `/blog-details` | Uses fake blog content. |
| `/testimonials` | Uses fake testimonials. |
| `/pricing` | Uses generic pricing plans unrelated to scrap trading. |
| `/faq` | Uses generic FAQ content unrelated to scrap trading. |

### Action
1. Decide which pages to keep, rewrite, or delete.
2. For pages to delete, remove the entire folder under `app/<page-name>/`.
3. Update `components/layout/Menu.js` and `MobileMenu.js` to remove links to deleted pages.
4. Update any internal `<Link href="...">` references that point to deleted pages.

---

## 2. Identify unused section components

### `components/sections/home2/`
Only used by `app/index-2/page.js` and one commented-out import in `app/page.js`.

Files:
- `Banner.js`
- `Blog.js`
- `Brand.js`
- `Team.js`
- `Testimonial.js`
- `Feature.js`
- `Pricing.js`
- `About.js`
- `Project.js`
- `Company.js`
- `Cta.js`
- `video.js`

### Action
- If `index-2` is deleted, delete the entire `components/sections/home2/` folder.

### `components/sections/home3/`
Only used by `app/index-3/page.js` and one commented-out import in `app/page.js`.

Files:
- `Banner.js`
- `Blog.js`
- `Service.js`
- `About.js`
- `Faq.js`
- `Service2.js`
- `Team.js`
- `Testimonial.js`
- `Business.js`
- `Contact.js`
- `Cta.js`
- `Slidingtext.js`

### Action
- If `index-3` is deleted, delete the entire `components/sections/home3/` folder.

### `components/sections/home1/`
Used by the main homepage (`app/page.js`) and other pages. Keep, but review individual files:
- `ServicePageClient.js` — used on `/services`.
- `ContactPageForm.js` — used on `/contact`.
- `Blog.js`, `Team.js`, `Testimonial.js`, `Why.js` — imported but currently commented out in `app/page.js`. Decide whether to use or remove.

---

## 3. Identify unused reusable components

### `components/elements/`
Currently found in use:
- `Preloader.js` — used in `app/loading.js`.
- `CounterUp.js` — used in `components/sections/home2/About.js`.

Potentially unused (verify before deleting):
- `Counter.js`
- `DataBg.js`
- `PortfolioFilter1.js` to `PortfolioFilter5.js`
- `QuantityInput.js`
- `ThemeSwitch.js`
- `VideoPopup.js`
- `BackToTop.js`

### Action
- Search the codebase for each element before deleting.
- Remove any element that has zero imports.

### `components/slider/`
The slider components appear to be unused in the current pages. Verify each file under `components/slider/` and remove if not imported anywhere.

### `components/layout/`
- `Sidebar.js` — may be unused; verify.
- `SearchPopup.js` — verify if used by header.
- `Breadcrumb.js` — used by `Layout.js`.

---

## 4. Remove dead code inside remaining files

### `app/page.js`
- Remove commented-out imports and commented-out component usage.
- Decide final homepage sections.

### `app/about/page.js`
- Remove large blocks of commented-out HTML.

### `app/contact/page.js`
- Clean up commented-out sections if any.

### Service detail pages
- If kept, replace Lorem Ipsum and template content.
- If deleted, remove the entire folder.

---

## 5. Update navigation

After deleting pages, update:
- `components/layout/Menu.js`
- `components/layout/MobileMenu.js`
- Footer links in `components/layout/footer/Footer1.js`
- Any hard-coded `<Link href="...">` in remaining pages.

---

## 6. Validation steps

1. Run the development server:
   ```bash
   npm run dev
   ```
2. Check for build errors:
   ```bash
   npm run build
   ```
3. Verify no broken links by visiting each remaining page.
4. Check browser console for missing module errors.
5. Run lint if available:
   ```bash
   npm run lint
   ```

---

## 7. Suggested deletion order

1. Delete alternate homepages and their section folders:
   - `app/index-2/`
   - `app/index-3/`
   - `components/sections/home2/`
   - `components/sections/home3/`

2. Delete clearly unrelated template pages:
   - `app/farming-products/`

3. Delete or rewrite service detail pages:
   - `app/digital-marketing/`
   - `app/ui-ux-designing/`
   - `app/app-development/`
   - `app/graphic-designing/`
   - `app/website-development/`
   - `app/seo-content-writting/`

4. Delete placeholder content pages:
   - `app/team/`
   - `app/team-details/`
   - `app/project-details/`
   - `app/projects/`
   - `app/blog/`
   - `app/blog-details/`
   - `app/testimonials/`
   - `app/pricing/`
   - `app/faq/`

5. Remove unused reusable components after verifying imports.

6. Clean up dead code and comments in remaining files.

7. Update navigation and footer links.

8. Run build and test.

---

## 8. Backup / rollback

- Before deleting anything, commit the current working tree:
  ```bash
  git add .
  git commit -m "Before cleanup: backup current state"
  ```
- Alternatively, create a branch for the cleanup:
  ```bash
  git checkout -b cleanup/unused-components
  ```
- If anything breaks, revert with:
  ```bash
  git checkout -- .
  ```

---

## 9. Expected outcome

- Smaller, cleaner codebase.
- Faster builds.
- Easier to maintain and update content.
- No broken links or missing module errors.
- A website focused on Renova Trade’s actual business.
