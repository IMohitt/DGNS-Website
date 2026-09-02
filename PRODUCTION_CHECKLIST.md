# DGNS Advisors Production Checklist

## Before Deployment

- [ ] Obtain approved DGNS logo, favicon/Apple touch icons, and 1200 × 630 OG image.
- [ ] Confirm all company, address, email, phone, package, and legal content with DGNS.
- [ ] Confirm `VITE_SITE_URL=https://dgnsadvisors.ae` in the production environment.
- [ ] Leave Analytics and Meta Pixel IDs blank unless tracking and consent are approved.
- [x] Run `npm install` from the committed lockfile and `npm run build` successfully.
- [ ] Test email (`mailto:`), phone (`tel:`), map, and every contextual WhatsApp link.
- [ ] Submit both contact and travel forms and inspect the complete prefilled messages.
- [x] Test all production routes, browser back/forward, refresh, and the custom 404 page locally.
- [x] Check mobile navigation, filters, forms, footer, and floating WhatsApp at 360–430px locally.
- [ ] Review Privacy Policy, Terms, disclaimers, and package pricing with authorized owners.

## Deployment Files

- [x] `public/sitemap.xml` lists the 22 indexable production routes.
- [x] `public/robots.txt` allows crawling and references the production sitemap.
- [x] `public/_redirects` permanently redirects the known legacy URLs.
- [x] The build generates a metadata-ready HTML shell for every production route and a real `404.html`.
- [x] `netlify.toml` defines build output, baseline security headers, and asset caching.
- [x] `vercel.json` defines compatibility rewrites, baseline security headers, and asset caching.
- [x] `.env.example` contains no live analytics IDs or secrets.

## After Deployment

- [ ] Confirm the custom domain resolves to the intended deployment.
- [ ] Confirm SSL is valid and HTTP redirects to HTTPS.
- [ ] Verify direct loading of every nested route on the production host.
- [ ] Confirm response headers and long-lived cache headers for hashed `/assets/` files.
- [ ] Open `/sitemap.xml` and `/robots.txt`, then submit the sitemap to search tools.
- [ ] Run Lighthouse on representative business, contact, and travel pages.
- [ ] Re-test phone, email, map, forms, and WhatsApp on real iOS and Android devices.
- [ ] Confirm no analytics request or cookie UI appears while tracking IDs are unset.
