# Plan: Remove Shop Details + Checkout + Delivery Modal + Logo Swap

## Requirements

1. Remove Shop Details + Product Details - strip shop-details.html links, delete file
2. Remove Checkout - strip checkout.html links, delete file
3. Replace Order Now btn with delivery modal (Grab/foodpanda, logos, animations)
4. Replace logo-3.png with logo-4.png at natural dimensions everywhere

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Cart Proceed-to-Checkout | Triggers delivery modal | Checkout removed |
| Banner Order Now | Stays shop.html link | Let users browse first |
| Platform logos | Inline SVG | Works offline, no external deps |
| Modal animations | CSS-only staggered entrance + hover lift | No extra libs |
| Click behavior | Opens platform in new tab | Direct ordering |

## Files

Delete: shop-details.html, checkout.html
Edit (10): index.html, about.html, shop.html, cart.html, gallery.html, testimonials.html, faq.html, contact.html, login.html, register.html

### Nav Changes (every page)

Shop submenu - remove:
- <li><a href="shop-details.html">Product Details</a></li>
- <li><a href="checkout.html">Checkout</a></li>
Keep: Shop, Cart only

### Logo Replacement (every page)

assets/img/logo-3.png -> assets/img/logo-4.png in all img src tags
Remove max-height constraints from logo CSS rules

### Order Button -> Modal (every page)

Header <a href="shop.html">Order Now</a> -> <button class="okr-order-btn">Order Now</button>

### Cart Page

Proceed to Checkout link -> okr-order-btn button (same modal)

### Shop Page Product Cards

Remove <a href="shop-details.html"> wrappers -> cards use Add to Cart directly

### index.html Product Links

Product Order links from shop-details.html -> modal trigger

## Modal Spec

HTML: Overlay -> modal card -> 2 option cards (Grab, foodpanda) with inline SVG logos
CSS: Fade-in overlay, staggered entrance from edges, hover lift, pulse, leaf decor
JS: Show/hide overlay, option click -> open platform URL in new tab
URLs: Grab -> https://food.grab.com/ph/en/, foodpanda -> https://www.foodpanda.ph/

## Implementation Order

1. Delete shop-details.html, checkout.html
2. Edit all 10 pages (parallel):
   a. logo-3.png -> logo-4.png
   b. Remove logo max-height CSS
   c. Fix Shop nav (remove 2 links)
   d. Order Now a -> button
   e. Add modal HTML + CSS + JS
   f. Cart: fix Proceed-to-Checkout
   g. Shop: fix product card wrappers
   h. index: fix product Order links

## Verification

- shop-details.html, checkout.html return 404
- Nav Shop submenu: only Shop and Cart
- Sidebar nav mobile: same
- logo-4.png at natural size (no max-height constraint)
- Order Now header btn -> modal with Grab + foodpanda
- Staggered entrance animations play
- Click option -> opens platform in new tab
- Close/overlay click -> modal hides
- Cart Proceed-to-Checkout -> triggers modal
- All pages load with no console errors