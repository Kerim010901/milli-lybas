# Ýüp & Kümüş

Local implementation of https://yup-we-gumus.kgijow.chatgpt.site/.

Run with Node.js 20 or newer:

```sh
npm start
```

Open http://localhost:3000. No dependency installation or build is required. Run `npm run check` for JavaScript syntax verification.

The reference layout, Turkmen and English text, archive records, images, filters, garment markers, embroidery zoom, and occasion stories are retained. The studio builds a design sheet from explicit archive selections, with browser-local saves and real PDF/text exports. It has no AI backend, fabricated results, seeded saved designs, or demo data. Preferences and saved sheets are stored only in the current browser.

Image source and license links remain visible on the page and in archive details. See catalog.js for per-image attribution. Several images are CC BY-SA 4.0; others carry public-domain or source-specific terms. Preserve their credits and review applicable rights before redistribution. The reference page's injected Cloudflare challenge script was removed. PDF libraries and the Unicode font are vendored from the reference site.

This project is local only; no hosted site has been changed or published.

Browser verification: run `npm run check:browser` with Google Chrome installed (or set `CHROME_PATH`). This checks real interactions, image loading, both languages, saved-design persistence, real PDF/text downloads, and horizontal overflow at 320-1440px. Screenshots and exported verification files are written to the ignored `.qa/` directory. The check starts and stops its own local server and headless browser.
