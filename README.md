# sound/blog

A public notebook for learning audio, DSP, and the music industry.
Built with [Astro](https://astro.build). Content is plain Markdown.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # serve the build
```

## Add a post

Drop a file in `src/content/posts/`, e.g. `003-convolution.md`:

```markdown
---
title: "The thing I'm writing about"
number: 3
date: 2026-04-25
summary: "Optional blurb shown on the index and at the top of the post."
tags: ["dsp", "notes"]
audio: "/audio/demo.wav"   # optional — drop the file in public/audio/
draft: false               # set true to hide from build
---

Write Markdown here. You can embed audio, images, code blocks, blockquotes, lists — all styled.
```

That's it. Rebuild / refresh.

### Audio and images

Put files in `public/` and reference them with root-relative paths:
- `public/audio/mix-01.wav` → `/audio/mix-01.wav`
- `public/img/filter-response.png` → `/img/filter-response.png`

You can also use raw HTML inside Markdown:
```markdown
<audio controls src="/audio/mix-01.wav" preload="none"></audio>
```

## Add a build

Drop a file in `src/content/builds/`:

```markdown
---
title: "Project name"
started: 2026-05-01
status: wip           # wip | paused | shipped
summary: "One-line description for the card."
repo: "https://github.com/you/project"    # optional
demo: "https://..."                       # optional
tags: ["cpp", "juce"]
---
```

## Content structure

```
src/content/
  posts/    journal entries (Markdown)
  builds/   project pages (Markdown)
public/     static assets — images, audio, favicon
src/styles/global.css   the whole design system lives here
```

## Deploy

**Before deploying**, update `site` in `astro.config.mjs` to your real URL (e.g. `https://sound.liamwise.com`). This is what RSS, sitemap, and canonical URLs use.

### Option 1 — Vercel (easiest)

1. Put the repo on GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects as Astro. Accept defaults. Deploy.
4. Every `git push` redeploys.

### Option 2 — Netlify

Same as Vercel — import from GitHub, defaults work.

### Option 3 — GitHub Pages

1. Set `site` and `base` in `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://<username>.github.io',
     base: '/sound-blog',  // if deploying to a project page
     // ...
   });
   ```
2. Add `.github/workflows/deploy.yml` using the official [Astro GitHub Pages action](https://docs.astro.build/en/guides/deploy/github/).
3. In repo settings → Pages, set source to "GitHub Actions".

### Option 4 — Static host (S3, Cloudflare Pages, etc.)

`npm run build` produces `dist/`. Upload it.

## Connecting to GitHub

```bash
git init
git add -A
git commit -m "initial post"
gh repo create sound-blog --public --source=. --push
```

## Notes on the design

- Fonts: Fraunces (display), Newsreader (body), JetBrains Mono (meta/code). Loaded from Google Fonts.
- One accent color (`--accent: #B8391F`) used sparingly.
- Paper grain and subtle radial tints baked into `body::before`.
- Scrolling sine wave in header. "Monitor" button plays a quiet 440Hz tone via Web Audio.
- Reveal-on-load animation respects `prefers-reduced-motion`.

All design tokens live at the top of `src/styles/global.css`. Change the CSS variables there and the whole site shifts.
