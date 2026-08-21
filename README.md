# Trendy Wedding Invitation Website

A mobile-first, static wedding website using only HTML, CSS and JavaScript. No paid backend is required.

## 1. Personalize the invitation

Edit `index.html` and replace:

- Nilmi & Nilan
- 10 · 12 · 2026
- Colombo / venue names
- Ceremony and reception times
- RSVP deadline
- Story text
- Dress code, if different
- Google Maps links

Then open `script.js` and edit the `WEDDING` object at the top:

```js
const WEDDING = {
  couple: "Your Name & Partner Name",
  date: "2026-12-10T08:00:00+05:30",
  calendarDate: "20261210",
  calendarTitle: "Nilmi & Nilan's Wedding",
  ceremonyLocation: "Holy Cross Church, Gampaha, Sri Lanka",
  receptionLocation: "Pabavee Regency, Balummahara, Sri Lanka",
  whatsappNumber: "94771234567"
};
```

For WhatsApp, use digits only: country code + phone number. Do not include `+`, spaces or dashes.

## 2. Add your black-and-white photos

The starter uses SVG placeholders so the layout works immediately.

Recommended final filenames:

- `images/hero.webp` — wide hero portrait, ideally 1800–2400 px wide
- `images/portrait-1.webp`
- `images/portrait-2.webp`
- `images/gallery-1.webp`
- `images/gallery-2.webp`
- `images/gallery-3.webp`
- `images/closing.webp`

For easiest replacement, either rename your files to match the existing names in `index.html`, or change the `src` paths there. The CSS automatically applies a grayscale treatment; already-black-and-white photos will work perfectly.

## 3. Test locally

Double-click `index.html`, or run a simple local web server in this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## 4. Publish for free

### Option A — Cloudflare Pages

Upload/deploy this folder as a static HTML site. You can use the free `*.pages.dev` address. A custom domain is optional and is the only part that may cost money if you decide to buy one.

### Option B — GitHub Pages

Create a public GitHub repository, upload these files, and enable Pages in the repository settings. GitHub will give you a free `github.io` address.

## Features included

- Luxury black / white / champagne palette
- Responsive mobile-first layout
- Editorial typography
- Slow scroll reveal animation
- Subtle hero image movement
- Black-and-white gallery treatment
- Wedding countdown
- Event details and map links
- Add-to-calendar `.ics` download
- WhatsApp RSVP with a pre-filled message
- No database and no form subscription
- Reduced-motion accessibility support
- Open Graph metadata for link previews

## Optional next upgrades

- Add your own custom domain
- Add a short muted background video to the hero
- Add a Spotify/Apple Music link instead of autoplay music
- Add hotel/travel information for guests
- Add an FAQ section
- Add a gift registry link
- Add personalized guest URLs if you later want invite-by-name behavior


## Nilmi & Nilan logo

`images/nilmi-nilan-logo.svg` contains the **Nilmi & Nilan** lettering converted to vector outlines from the supplied **Hello Paris Script** font. The site keeps the same logo appearance on iPhone, Android, tablets and desktop browsers without needing the original font file.

## Mobile support

The invitation includes responsive hero sizing, phone safe-area support, a 2 × 2 countdown on small screens, a single-column mobile gallery, touch-friendly RSVP controls, and a floating RSVP shortcut on phones.

## Replacing the photos — easiest method

The website already references seven photo slots inside the `images` folder. The simplest workflow is:

1. Prepare your chosen photos as WebP files.
2. Rename them exactly as listed below.
3. Copy them into the `images` folder and replace the existing files.
4. Do not change `index.html` if the filenames stay the same.

Photo slots:

- `hero.webp` — main full-screen opening photo
- `portrait-1.webp` — large portrait after the invitation text
- `portrait-2.webp` — Our Story portrait
- `gallery-1.webp` — large gallery photo
- `gallery-2.webp` — gallery detail photo
- `gallery-3.webp` — gallery couple photo
- `closing.webp` — final full-screen photo

Recommended image sizes:

- Hero and closing: about 1600–2400 px on the long edge
- Portrait/gallery images: about 1200–1800 px on the long edge
- Aim for roughly 200–500 KB per image for fast mobile loading

If your photos are JPG or PNG and you do not want to convert them, place them in the `images` folder and change the matching `src="images/..."` entry in `index.html` to the new filename, for example:

```html
<img src="images/hero.jpg" alt="" />
```

The website automatically displays photos in black and white through CSS, so color originals are also fine.
