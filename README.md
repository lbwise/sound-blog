# sound/blog

A public notebook for learning audio, DSP, and the music industry.
Built with [Astro](https://astro.build) + MDX. Content is plain Markdown.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # serve the build
```

## Deploy

The site is linked to Vercel. To push a new version live:

```bash
git add . && git commit -m "new post" && git push      # commit to GitHub
npx vercel --prod --yes                                 # redeploy to Vercel
```

If auto-deploy gets connected at https://vercel.com/lyrebird/sound-blog/settings/git, the Vercel step will happen on every `git push`.

---

## Sections

- `/` — **Journal**: posts
- `/builds` — **Builds**: project pages
- `/listening` — **Listening**: wall of albums with scores and reviews
- `/about` — short bio

## Add a post

Drop a file in `src/content/posts/`. Use `.md` for plain markdown, or `.mdx` when you want to embed components (GitHub cards, audio players, etc.).

```markdown
---
title: "The thing I'm writing about"
number: 3
date: 2026-04-25
summary: "Shows on the index and top of the post."
tags: ["dsp", "notes"]
draft: false          # set true to hide
---

Regular markdown. Code blocks, lists, quotes, links — all styled.
```

### Rich embeds (MDX)

Rename the file to `.mdx` to unlock components. They're globally available — no imports needed.

```mdx
---
title: "Trying a biquad"
number: 4
date: 2026-05-02
tags: ["dsp", "cpp"]
---

Here's the code, lives on GitHub:

<GitHub url="https://github.com/lbwise/sound-blog" />

An audio clip I generated:

<Audio src="/audio/biquad-sweep.wav" caption="Low-pass sweep from 100Hz to 8kHz" />

A callout for something I got stuck on:

<Note label="Gotcha">
  If you forget to normalise filter coefficients by `a0`, everything sounds terrible.
</Note>

A Jupyter notebook I used:

<Notebook url="https://github.com/user/repo/blob/main/filter-design.ipynb" height={700} />

Or a Colab link:

<Notebook url="https://colab.research.google.com/drive/abc123" />

A gist:

<Gist id="lbwise/abcdef1234567890" />

An Apple Music player:

<AppleMusic url="https://music.apple.com/us/album/foo/12345" />
```

**Components available in any `.mdx` file:**

| Component | Purpose |
|---|---|
| `<GitHub url="..."/>` | Repo card with description + star count (auto-fetched) |
| `<Gist id="user/hash"/>` | Embed a GitHub Gist inline |
| `<Notebook url="..."/>` | Jupyter notebook (github.com/.../x.ipynb → auto-embeds via nbviewer; Colab links → link card) |
| `<Audio src="..." caption="..."/>` | Audio player with caption |
| `<Note label="..." tone="signal">...</Note>` | Callout box. `tone` ∈ `default` \| `signal` \| `aside` |
| `<AppleMusic url="..."/>` | Embedded Apple Music player |

### Assets (images, audio, etc.)

Put files in `public/` and link with root-relative paths:
- `public/audio/clip.wav` → `/audio/clip.wav`
- `public/img/filter.png` → `/img/filter.png`

## Add a build

`src/content/builds/my-thing.md`:

```markdown
---
title: "Project name"
started: 2026-05-01
status: wip           # wip | paused | shipped
summary: "One-liner for the card."
repo: "https://github.com/you/project"   # optional
demo: "https://..."                      # optional
tags: ["cpp", "juce"]
---

Description of the project. Use MDX (.mdx extension) if you want embeds.
```

## Add an album review

`src/content/listens/nine-point-six.md`:

```markdown
---
artist: "Miles Davis"
album: "Kind of Blue"
year: 1959
score: 9.6                                                  # 0-10, one decimal
listened: 2026-04-17
current: true                                                # optional — pins it as "Now Spinning"
appleMusic: "https://music.apple.com/us/album/kind-of-blue/268443092"
spotify: "https://open.spotify.com/album/..."                # optional
tags: ["jazz", "classic"]
cover: "/img/covers/miles.jpg"                               # optional — overrides auto-fetch
---

Short review. A sentence or a paragraph, whatever feels right.
```

The simplest workflow:
1. Find an album on Apple Music (app or web)
2. Tap Share → Copy Link → paste into `appleMusic:`
3. Fill in `artist`, `album`, `score`, and a couple of sentences
4. That's it — **album art is auto-fetched at build time via the public iTunes Search API**, no uploads needed

## Content structure

```
src/content/
  posts/     journal entries (.md or .mdx)
  builds/    project pages (.md or .mdx)
  listens/   album reviews (.md or .mdx)
public/      images, audio, favicon
src/styles/global.css   design system (fonts, colors, layout)
```

## Notes on the design

- Fonts: **Fraunces** (display), **Newsreader** (body), **JetBrains Mono** (meta/code). Loaded from Google Fonts.
- One accent color (`--accent: #B8391F`).
- Scrolling sine wave in the header, 440Hz Web Audio "monitor" toggle for fun.
- Album wall has slight random rotations (polaroids pinned to a cork board).

All design tokens live at the top of `src/styles/global.css`.
