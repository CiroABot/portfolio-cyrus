# Ciro Araujo — Portfolio (Next.js)

A bilingual (PT/EN) filmmaker portfolio. Built with **Next.js (App Router)**,
TypeScript and Tailwind CSS.

## Running it

```bash
npm install     # once
npm run dev     # local preview at http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # code health check (optional)
```

## Publishing (Vercel)

Push the branch to GitHub and import the repo on [vercel.com](https://vercel.com) —
Next.js is auto-detected, no configuration needed. Every `git push` then
deploys automatically. The site is fully static (no database, no env vars,
no secrets), with security headers configured in `next.config.mjs`.

## ✏️ How to edit content

**All your content lives in `src/content/`.** You never need to touch the
design files (`src/components/`) to change text, films, or links. Every text
shown to visitors is written in both languages, side by side:

```ts
title: { pt: 'OUÇO UMA CIDADE', en: 'I HEAR A CITY' }
```

| I want to… | Edit this file |
|---|---|
| Add / edit a **film** | `src/content/films.ts` |
| Edit the **projects** section (videos, credits, support) | `src/content/projects.ts` |
| Change **menus, buttons, labels, section intros** | `src/content/ui.ts` |
| Change **photo, social links, CV/portfolio links, email, SEO** | `src/content/site.ts` |
| Add / reorder **zine pages** | `src/content/zines.ts` |

### Adding a film (the common case)

1. Put the images in **`public/assets/`** (e.g. `MYFILM_Still01.jpg`).
2. Open `src/content/films.ts`, **copy an existing `{ … }` block**, paste it at
   the position you want (top = shown first), and edit the fields.
3. Reference the images by path, e.g. `cover: '/assets/MYFILM_Still01.jpg'`.

That's it. Your editor will underline anything you forgot (e.g. a missing `en`
translation) before the site ever breaks. Field-by-field explanations live in
`src/content/types.ts`.

> Tip: images go in `public/assets` and are referenced as `/assets/FILENAME` —
> no `import` lines needed anymore.
