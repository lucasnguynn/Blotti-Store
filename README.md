# Blotti Babywear · Premium Concept Storefront

**Where Thoughtful Fabric Meets Effortless Comfort**

A responsive, visual-rich, **English-language** storefront prototype developed for the Blotti babywear business proposal (BMGT, Group 2). This version is a static demonstration, not a production ecommerce shop.

## Experience

- Playful pastel storefront inspired by the supplied Blotti proposal: lilac, dusty rose, peach, powder blue, butter yellow, and sage green.
- Custom **Dancing Script** Blotti wordmark; Fraunces editorial headlines; DM Sans UI typography.
- Lifestyle image-led hero, editorial collections, animated marquees, scroll transitions, hover effects, and responsive navigation.
- Eight **illustrative** products with unique original SVG garment drawings, color stories, VND example prices, category filters, sorting and text search.
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

## Images and authorship

Editorial photography is remotely loaded from **Unsplash** and is visually illustrative; it is **not** photography of Blotti products, staff or customers. Credits / source pages:
- [Amanda Selby, baby outfit flat lay](https://unsplash.com/photos/baby-clothes-sandals-and-toy-camera-flat-lay-72l_I4s-hss).
- [jackson kondili, babywear and accessories](https://unsplash.com/photos/baby-clothes-and-shoes-neatly-organized-on-shelves-wFHaSqNxHm4).
- [jackson kondili, babywear rack](https://unsplash.com/photos/baby-clothes-hanging-on-a-rack-5juo633uIEc).
- [CARMELA LUSTRE, clean baby clothes](https://unsplash.com/photos/baby-clothes-in-a-woven-basket-AkPas1rErdE).
- [Marius Muresan, delicate dress](https://unsplash.com/photos/a-delicate-white-baby-dress-hangs-in-a-crib-lOXC1aXwSZI).
- [Chiến Phạm, sleeping baby](https://unsplash.com/photos/baby-lying-on-gray-textile-ox82rWJcRno).

All product garment SVGs are generated by `garmentSVG()` in `app.js` for this prototype. No competitor product photo is passed off as Blotti merchandise.

Google Fonts and remote images require internet access. If preparing a fully offline or production edition, substitute with licensed/local photography and approved imagery and follow the relevant asset-license conditions.

## What must be built before actual launch

- Approved SKUs, bill of materials, stock, prices, accurate product images, sizing grades and technical fabric specs.
- Supplier verification, batch QC and real lab results / compliance evidence.
- Ecommerce backend, cart sessions, payment gateway, shipping, tax, returns, security and order emails.
- Consent-driven data collection, personal-data notices / retention controls, authorized age policies, analytics and legitimate newsletter infrastructure.
- Test Fit Finder on actual product measurements and real customer feedback. Track size recommendation errors and abandonment before scale-up.
- Replace editorial placeholder imagery and draft corporate wording with brand-approved assets and copy.

## Repository structure

```
index.html                     Semantic page layout and content
styles.css                     Design tokens, motion, desktop/tablet/mobile styling
app.js                         Products, SVG illustration, demo interactions
.github/workflows/check.yml    Syntax and static smoke tests
README.md                      Design, usage, attribution, limitations
```

This repo aims to be visually polished **without claiming a level of operational or textile validation the underlying project has not yet reached**.
