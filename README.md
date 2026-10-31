# Blotti Babywear · Premium Concept Storefront

**Where Thoughtful Fabric Meets Effortless Comfort**

A responsive, visual-rich, **English-language** storefront prototype developed for the Blotti babywear business proposal (BMGT, Group 2). This version is a static demonstration, not a production ecommerce shop.

## Experience

- Playful pastel storefront inspired by the supplied Blotti proposal: lilac, dusty rose, peach, powder blue, butter yellow, and sage green.
- Custom **Dancing Script** Blotti wordmark; Fraunces editorial headlines; DM Sans UI typography.
- Original Blotti-supplied brand image-led hero, editorial collections, animated marquees, scroll transitions, hover effects, and responsive navigation.
- Nine **illustrative** products with original Blotti ZIP product renderings and SVG fallbacks, color stories, VND example prices, category filters, sorting and text search.
- Product quick view with selectable sizes and add-to-bag controls.
- Persistent **demo bag** (quantity controls, remove item, subtotal) and **wishlist**, stored in browser localStorage.
- **Learning Fit Finder**, with an easily explainable height-first size mapping, optional relaxed fit, and opt-in, device-local profile storage.
- Signature Fabric explainer, proposed **Mission** and **Vision**, future testing/verification pathway (Proof Lab), editorial reading corner, FAQs, and a simulated newsletter interaction.
- Semantic HTML, keyboard-friendly controls, visible focus states, reduced-motion support, and mobile layout.

## Run locally

There are **no JavaScript dependencies, bundlers, accounts or API keys**.

1. Download or clone this repository.
2. Open `index.html` in a modern browser, or start any static file server:
   ```bash
   python3 -m http.server 8080
   ```
3. Visit `http://localhost:8080`.

The website can be hosted as static files on **GitHub Pages**, Netlify, Cloudflare Pages, or Vercel. For GitHub Pages, enable **Settings → Pages → Deploy from a branch → main → /(root)** after the implementation is merged. No backend setup is needed for a presentation demo.

## Honest prototype boundaries

**No real purchase is possible.** No checkout, order capture, payment processing, shipping calculation, account login, live inventory, customer support inbox, or live marketing subscription is connected. Cart and wishlist data are stored only in each visitor's browser. The newsletter deliberately does **not** transmit or save submitted email addresses.

**Fit guidance is a demonstration, not validated sizing.** It uses height bands:
- 40–55 cm → size 50
- >55–65 cm → size 60
- >65–75 cm → size 70
- >75–85 cm → size 80
- >85–95 cm → size 90
- >95–110 cm → size 100

The “room to grow” option shifts one size larger, capped at 100. The person's entered age and weight are not used to calculate the demo result. Replace these rules with approved product grading, garment measurements and validated fit outcomes before live selling.

**No Blotti product certification is claimed.** The Proof Lab describes *planned* verification and potential standards, not completed tests. Before publishing a live shop, obtain and publish real reports with sample/scope, certificate holder, laboratory, date, results, validity, and verification links. Lab relationships and OEKO-TEX® certification must never be implied without supporting records.

**Concept content:** The supplied proposal established the hero product at **VND 399,000** and the brand pillars Signature Fabric, Learning Fit System and Accessible Premium. Other items, their names, colors, photos, detailed garment illustrations, size charts, lifestyle copy, mission/vision wording and prices are exploratory website concepts, not confirmed SKUs or corporate approvals. The proposed “Mẹ Tròn Con Vuông” postpartum mother-and-baby matching line comes from the proposal.

## Source documents

1. **BUSINESS PROPOSAL - BMGT Group 2 (1) (1).pdf**, provided by the project team. Relevant pages: brand identity (p.1), problem/solution (pp.2–3), D2C/price and mother-baby concept (p.4), competitor position (p.6), purchasing journey and Fit Finder (p.7), roadmap (p.11).
2. **BMGT Framework (final mnf).docx**, provided by the team. Relevant content: Business Model Canvas; strategies to validate willingness to pay, use measurement-based sizing and real feedback; caution that competitive advantages and testing remain unvalidated until proven.

## Industry / regulatory references

Research was used for **experience patterns and standards context**, not to copy layouts, products, marketing text, trademarks or claims:
- [The Simple Folk · Baby](https://thesimplefolk.co/collections/baby), editorial product taxonomy, filtering, story-rich presentation.
- [La Pomme · About](https://lapomme.com.vn/pages/about-us), parent education and quality communication.
- [noûs · About](https://www.nous.vn/pages/about-us), category storytelling and sizing context.
- [OEKO-TEX® STANDARD 100](https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100/), Product Class I for baby articles. **Not a Blotti credential.**
- [Vietnam Ministry of Industry and Trade Circular 37/2026/TT-BCT](https://vanban.chinhphu.vn/?classid=0&docid=218714&pageid=27160), Amendment 01:2026 to QCVN 01:2017/BCT.
- [ISO 6330:2021](https://www.iso.org/standard/75934.html), textile washing and drying procedures.
- [ISO 5077:2007](https://www.iso.org/standard/41877.html), dimensional change in washing and drying.

## Supplied Blotti imagery

The storefront and investor gallery use **19 optimized WebP assets** from the user-provided `blotti.zip` (see `assets/`). The original images include concept bodysuits, DreamySleep, ActivePlay, SplashSafe, gift packaging, fabrics and trim samples. Files have been optimized for web load speed while retaining the original visual designs. They are **project-provided concept artwork, not verified photographs of mass-produced inventory**.

- Hero and brand narratives use `blotti-hero.webp`, `blotti-lookbook.webp`, and `blotti-collection.webp`.
- Catalog cards, cart, favorites and quick view use source-based product art in `assets/`.
- Product design variants are illustrative. The garment spec, certification, actual availability, real-material compositions and official SKU assortment remain unvalidated.
- Additional untouched originals remain in the uploaded ZIP, outside this Git repository.
- SVG garment illustrations remain available as a code-generated fallback.
- Google Fonts are loaded externally for branding. The editorial sections also use remote Unsplash photography; both can be packaged locally with suitable permissions for offline presentations.

## Investor briefing

Open `investors.html` from the site's navigation or at the deployed route `/investors.html`.

The investor hub includes:
- An investment thesis: product proof + fit guidance + customer learning.
- **External market context:** Metric Analytics' Q1/2026 Vietnam online children's fashion GMV (VND 4,770.3B, +65% YoY), TikTok Shop share of tracked platform GMV (57.4%), and the National Statistics Office's 2025 fertility rate of 1.93. These describe broad market dynamics, not Blotti's sales.
- D2C-first strategy, Signature Fabric, Learning Fit and Accessible Premium.
- **MVP targets, not results:** proposed Fit Finder completer-to-purchase conversion of 3.5–5.0%; CAC ceiling VND 145,000; hero price VND 399,000; planning gross margin 64.9%.
- **Management forecasts** from the original proposal: Years 1, 2 and 3 revenue VND 798M / 1,995M / 3,990M; total costs VND 657.2M / 1,759M / 3,169M; projected EBIT VND 140.8M / 235.4M / 820.8M. Derived EBIT margin is approximately 17.6%, 11.8%, 20.6%.
- Interactive chart selection and interactive 2026–2030 roadmap.
- **Illustrative USD 100,000 funding envelope:** 30% production, 20% product/fabric R&D, 20% marketing, 15% technology, 10% operations, 5% contingency. No valuation, investment instrument, dilutive terms or commitments are provided.
- Challenges, proof gates, source links and explicit investor-risk disclosures.
- Original Blotti concept collection image gallery and print-ready investor briefing.

**Model reconciliation:** The internal roadmap names 8,500 units and USD 130.5K for 2026 while the separate Year 1 financial forecast gives VND 798M revenue. At a proposed VND 399K per unit, 8,500 units imply about VND 3.39B, not VND 798M, absent other time/scenario definitions. The investor page flags this instead of merging incompatible numbers. The proposal's SOM $45,563 / SAM $6M is ~0.76%, rather than the captioned 0.61%. Neither figure is published as a verified investor outcome.

**Investor inquiries:** No verified founder email was supplied, so the investor call to action copies a draft inquiry instead of inventing a contact method. The print feature opens the browser print dialog.

**Market / regulatory sources reviewed:**
- [Metric Analytics, Q1/2026](https://metric.vn/insights/quy-1-2026-tiktok-shop-soan-ngoi-shopee-dan-dau-nganh-thoi-trang-tre-em-tren-tmdt-viet-nam/)
- [National Statistics Office, 2025 socio-economic release](https://www.nso.gov.vn/en/data-and-statistics/2026/01/press-release-social-economic-situation-in-the-fourth-quarter-and-2025/)
- [VECOM, E-commerce Business Index Report 2026](https://en.vecom.vn/e-commerce-business-index-report-2026)
- [MOIT Circular 37/2026/TT-BCT](https://chinhphu.vn/?classid=1&docid=218714&orggroupid=4&pageid=27160)
- [OEKO-TEX® STANDARD 100](https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100/)

**Legal boundary:** The briefing is an academic business concept, not a securities offering, independently audited model or promise of a return. No claim of Blotti product certification, realized sales or completed fundraising is made.

## Bank transfer checkout preview

The storefront shopping bag now opens `checkout.html`, a responsive, realistic checkout **preview** with:
- Editable delivery/contact details validated in the browser, an itemized order summary, and the subtotal computed from the exact existing cart items.
- The original `IMG_1784.jpg` VietQR / Napas 24/7 supplied by the user, committed as `assets/blotti-vietqr-transfer.jpg` (image unchanged).
- **Copy amount** (digits only for banking app input) and **Copy transfer reference** (a `BLTYYMMDDXXXXXX` unique-looking reference, stable within the browser tab for an unchanged cart).
- A separate "I have made a transfer" action showing **Awaiting manual verification**, not a fake success screen.
- A copyable checkout summary which the visitor may provide to a **verified** Blotti support contact outside this website. The page does not invent a contact email or accept uploads.
- Mobile layouts optimized for narrow screens; automated WebKit and Chromium checks for cart amount, image load, transfer reference and pending-verification state.

**QR technical detail:** the supplied QR decodes successfully to a static EMV/VietQR payload (point of initiation `11`). It does *not* encode a transaction amount or transfer note, so buyers must manually enter the copied amount and reference and independently **verify the recipient in their banking app** before transferring. The QR image itself must not be modified with a fictitious account or bank name.

**Operational / user privacy limitations:** This remains a static, pre-launch website. The checkout cannot verify a bank transaction, create a server-side order, reserve inventory, send a receipt, calculate an actual shipping fee, or notify the brand. Customer delivery fields stay only in live page memory and are not submitted or saved. The transfer reference is kept in `sessionStorage` so refreshing an unchanged cart preserves the same reference in that session. The cart itself already uses `localStorage`. Shipping is marked *not included* and must be confirmed separately; displayed transfer amount covers items only. These limits are explicitly visible in the checkout UI. Blotti must establish its actual orders/fulfillment process and approved payment recipient before accepting customer money.

## Investor Relations: Meet the Team and Blotti Film

The For Investors page at `investors.html#team` now includes an image-led **Meet Our Team** section with all seven named contributors and exactly the titles documented on **page 8** of `BUSINESS PROPOSAL - BMGT Group 2 (1) (1).pdf`:

| Team member | Proposal role |
|---|---|
| Hồ Quỳnh Như | Marketing & Brand Lead |
| Nguyễn Đặng Quốc Đạt | CEO |
| Nguyễn Ngọc Thảo An | Finance & Investment Lead |
| Lê Hồ Thu Giang | Operations & Supply Chain Lead |
| Vương Hồng Châu | Product & Fabric Lead |
| Lưu Ngọc Phương Khánh | Strategy & Business Development Lead |
| Trịnh Trần Ngọc Thảo Vy | Technology & Data Lead |

**Portraits**: Seven original photographs were extracted from the presentation PDF and optimized to local `assets/team/*.webp`. No faces or biographies were generated or replaced. Team appointments are attributed to the supplied proposal; their current status has not been independently verified.

**Video**: `investors.html#film` embeds the `1026(1).mp4` Google Drive asset from [the supplied Blotti folder](https://drive.google.com/drive/folders/1gfEewFXPtG0waZGINpIhqGBXiFT-LLeD). It loads only when a user clicks the poster, reducing initial page weight and avoiding automatic third-party tracking. The official `1026(1)-Cover.jpg` is optimized and stored locally as `assets/team/blotti-team-film-cover.webp`. The video itself (~121 MB) stays on Google Drive and is **not** committed to GitHub. There is always a direct Google Drive viewing link as a fallback.

Google Drive sharing controls determine whether external visitors can actually view the film. The account metadata checked on October 31, 2026, reported an **anyone** permission with role **writer** on both the video and the cover. This grants more access than a public website embed requires; the owner should change public permissions to **reader/viewer** while preserving the intended audience's ability to view the video. The website does not modify Drive sharing permissions.

**QA**: GitHub Actions checks the exact team names, portrait files and their WebP signatures, film identifier and click-to-load behavior. Playwright runs responsive UI tests in both WebKit and Chromium.

## October 2026 storefront polish and customer care

- Resolved the investor teaser's unexpectedly stacked desktop layout with a defined two-column composition, tighter section spacing, a prominent babywear editorial photo and individually styled topic chips.
- Replaced the three journal emoji blocks with image-led editorial cards. Babywear/wardrobe images are licensed editorial photography and **do not depict Blotti's actual manufactured inventory**.
- Reworked the on-page proof section as a structured, image-led **quality journey**: material specification, care testing plan, construction review and clearer product information. Relevant standards are linked without suggesting Blotti already holds lab certificates.
- Added `policies.html` and `policies.css` with a polished customer care guide covering **delivery, returns/exchanges, size guidance, garment care, quality references and contact readiness**. Every operational commitment is explicitly labelled proposed/pre-launch until Blotti has approved real order fulfillment and customer support processes.
- Removed the fake newsletter subscription and invalid contact form behavior. The editorial call-to-action instead directs customers to real, available content.
- Fixed sticky-header section offsets and added stylesheet/script query versions to reduce outdated cached CSS when the site is re-deployed.
- Changed the footer to expose shipping, returns, size, care and quality information.

### Editorial images

The new journal, quality card, and investor teaser combine provided Blotti assets with three free editorial images from Unsplash, used under the [Unsplash License](https://unsplash.com/license):

- [Baby clothes and shoes neatly organized, jackson kondili](https://unsplash.com/photos/baby-clothes-and-shoes-neatly-organized-on-shelves-wFHaSqNxHm4)
- [Baby clothes hanging on a rack, jackson kondili](https://unsplash.com/photos/baby-clothes-hanging-on-a-rack-5juo633uIEc)
- [Baby clothes in a woven basket, CARMELA LUSTRE](https://unsplash.com/photos/baby-clothes-in-a-woven-basket-AkPas1rErdE)

These are presentation photographs; they are **not evidence of Blotti inventory or production**. They are loaded remotely from Unsplash, while concept product images from the team's ZIP are hosted locally in `assets/`. For a live commerce release, replace all editorial imagery with brand-approved photography and check rights and model releases where applicable.

### Custom domain security

The repository currently uses `CNAME` for `blotti.duckdns.org`. If the browser shows “Not Secure”, the DNS/HTTPS settings need attention. Verify the subdomain CNAME record points to `lucasnguynn.github.io`, then in GitHub **Settings → Pages**, select **Enforce HTTPS** after GitHub has provisioned a certificate. See [GitHub's HTTPS guide](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https). This is a DNS and Pages configuration step, not something static CSS/HTML changes can fix. Avoid asking users to enter sensitive data on the current preview site.

## What must be built before actual launch

- Approved SKUs, bill of materials, stock, prices, accurate product images, sizing grades and technical fabric specs.
- Supplier verification, batch QC and real lab results / compliance evidence.
- Ecommerce backend, cart sessions, payment gateway, shipping, tax, returns, security and order emails.
- Consent-driven data collection, personal-data notices / retention controls, authorized age policies, analytics and legitimate newsletter infrastructure.
- Test Fit Finder on actual product measurements and real customer feedback. Track size recommendation errors and abandonment before scale-up.
- Obtain approval of product renders, photographs, colorways, final SKU assortment and corporate wording before commercial release.

## Repository structure

```text
index.html                      Storefront content
app.js                          Interactive catalog, local cart / wishlist, Fit Finder
styles.css                      Storefront design system and image layouts
investors.html                  Investor relations / funding narrative
investors.js                    Interactive financial chart, roadmap and actions
investors.css                   Investor design, layout and responsive behavior
policies.html                   Customer care / proposed operating policies
policies.css                    Customer care responsive design
checkout.html                   Multi-step bank-transfer checkout preview
checkout.css                    Responsive checkout visual system
checkout.js                     QR payment amount, transfer reference and copy actions
assets/blotti-vietqr-transfer.jpg  Original supplied VietQR image
assets/blotti-*.webp            Optimized Blotti concept images from supplied ZIP
assets/team/*.webp              Original team portraits and branded film cover
.github/workflows/check.yml     JS, model and asset CI validation
README.md                       Source notes, operations and claims guardrails
```

This repo deliberately separates **market facts**, **company targets**, **financial projections**, and **verified outcomes**.
