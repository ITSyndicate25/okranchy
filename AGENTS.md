# Repository Guidelines

## Project Structure & Module Organization

```
okranchy/
  index.html            # Homepage
  about.html            # About Us page
  shop.html             # Shop listing
  shop-details.html     # Product details
  cart.html             # Shopping cart
  checkout.html         # Checkout page
  gallery.html          # Photo gallery
  testimonials.html     # Customer reviews
  faq.html              # Frequently asked questions
  contact.html          # Contact form
  assets/
    css/style.css       # Compiled styles (5K+ lines)
    scss/               # Source SCSS files (sections/ and pages/)
    js/                 # JavaScript (main.js, tab.js, countdown.js, etc.)
    img/                # Images and graphics
    icon/               # Icon font files
    vendor/             # Third-party libraries (Bootstrap, Swiper, Splide, etc.)
```

All pages share a common header, footer, and stylesheet. Page-specific logic lives in individual JS/SCSS files.

## Build, Test, and Development Commands

This is a static website with no build tool. To develop locally:

- **Open in browser**: Serve the root directory with any static file server (e.g., `npx serve .` or open `index.html` directly).
- **SCSS compilation**: If editing `.scss` files, compile to CSS with `sass assets/scss/style.scss assets/css/style.css`.
- **No unit test framework** is configured.

## Coding Style & Naming Conventions

- **HTML**: 4-space indentation, lowercase class names, BEM-like prefixes (`ul-`, `ul-header-nav`, `ul-btn`).
- **CSS/SCSS**: Custom properties (`--ul-primary`, `--ul-secondary`), organized by section in SCSS partials under `assets/scss/sections/` and `assets/scss/pages/`.
- **JavaScript**: Uses vanilla ES6+, `DOMContentLoaded` wrappers, `querySelector`/`addEventListener` patterns. No framework.
- **File naming**: All lowercase with hyphens (e.g., `shop-details.html`, `countdown-loop.js`).

## Testing Guidelines

No testing framework is currently configured. Manual verification is done by opening pages in a browser and checking console for errors (`F12` > Console). Test across viewports (mobile/desktop) since the site uses Bootstrap grid and Swiper sliders.

## Commit & Pull Request Guidelines

- **Commit messages**: Concise, present tense, capitalised first word (e.g., `First Commit`).
- **Pull requests**: Include a description of changes, link to any related issue, and attach screenshots for UI changes. Ensure no broken links or missing assets before requesting review.
