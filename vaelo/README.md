# Vaelo — static site

A static shop front inspired by your screenshots: full-bleed hero, a shop-now
banner section, a product grid, and individual product pages. Pure HTML/CSS/JS
— no build step, deploys to Vercel as-is.

## Editing everything (images, prices, videos, text)

Open **`js/products.js`** — that is the only file you need to touch for content.
It's heavily commented. In short:

- **Hero picture/video** → `SITE.hero.image` (or `SITE.hero.video`)
- **Two banner images below the hero** → `SITE.banners[0]` and `SITE.banners[1]`
- **Each product's picture, extra gallery photos, video, name, price, sizes,
  description** → one block inside `SITE.products`

To add a new product, copy one whole `{ ... }` block inside `SITE.products`,
paste it above the closing `]`, and give it a unique `id` (e.g. `"p5"`).
That `id` is what links its picture on the homepage to its own page at
`product.html?id=p5` — you don't need to create a new HTML file per product.

## Adding your own photos and videos

1. Drop image files into `assets/images/products/` (product photos) or
   `assets/images/hero/` (hero/banner photos).
2. Drop video files into `assets/videos/`.
3. In `js/products.js`, change the relevant `image:` / `video:` line to your
   file's name, e.g. `image: "assets/images/products/my-shirt.jpg"`.
4. A full web URL also works instead of a local file, e.g.
   `image: "https://your-cdn.com/photo.jpg"`.

Right now every image is a plain placeholder (labelled "REPLACE: ...") just
so the layout previews correctly — swap them out for real photos.

## Video notes

- If a product or the hero has a `video` set (not `""`), the video plays
  instead of the picture, muted and looping.
- Leave `video: ""` for anything that should just show a photo.

## How the links work

- The **"Shop now"** buttons on the hero/banners scroll down to the product
  grid (they don't need to "do" anything, as requested).
- Clicking any **product photo or card** takes you to that product's own
  page (`product.html?id=...`), which reuses the same header/footer/style.
- The header's menu, search, account, and bag icons are visual only (no
  functionality), matching the brief.

## Colors used

| Token | Hex | Used for |
|---|---|---|
| Black | `#000000` | text, icons, buttons |
| Tan | `#E0BBA6` | accent, "Add to bag" button |
| Mist | `#D6DBDF` | grid lines, section backgrounds |
| Grey | `#7C7D7F` | secondary/muted text |
| White | `#FFFFFF` | main background |

## Deploying to Vercel (via GitHub, so edits auto-update)

1. Create a new repo on GitHub and upload this **whole folder's contents**
   directly into the root of the repo — `index.html` must sit at the top
   level of the repo, NOT inside a subfolder like `repo/vaelo/index.html`.
   (This is the #1 cause of the 404 you saw — see troubleshooting below.)
2. In Vercel: **Add New → Project → Import Git Repository**, pick this repo.
3. Framework preset: **Other**. Leave Build Command and Output Directory
   blank. Click **Deploy**.
4. From now on, any edit you push to the GitHub repo's `main` branch
   redeploys automatically within a minute or two.

## Fixing "site not found / 404" after a GitHub edit

This almost always means Vercel is looking in the wrong folder for
`index.html`. Two ways to check:

**A) Check your repo's file layout.** Open your repo on GitHub.com — you
should see `index.html`, `product.html`, `css/`, `js/`, `assets/` listed
directly on the repo's main page. If instead you see a single folder (like
`vaelo` or `ethereal`) and have to click into it to find `index.html`,
that's the problem — Vercel by default looks at the repo root.
  - **Fix option 1:** Move all the files up one level in GitHub so
    `index.html` is at the repo root, then wait for Vercel to redeploy.
  - **Fix option 2:** In Vercel, go to your Project → **Settings → General
    → Root Directory**, click Edit, and set it to that subfolder name
    (e.g. `vaelo`). Save, then go to **Deployments** and redeploy.

**B) Check you're editing the right project.** If you first deployed by
dragging the folder into Vercel (no GitHub) and *later* connected GitHub
separately, you may have two different Vercel projects — pushing to GitHub
updates one, but you're viewing the URL of the other. In your Vercel
dashboard, open the project connected to your GitHub repo (it'll show a
GitHub icon and the branch name) and use *that* project's URL.

## How to upload/replace photos on GitHub (no coding required)

1. Open your repo on GitHub.com in a browser.
2. Click into the folder you want to add photos to — for product photos
   that's `assets/images/products`, for hero/banner photos it's
   `assets/images/hero`, for videos it's `assets/videos`.
3. Click the **Add file** button (top right of the file list) → **Upload
   files**.
4. Drag your photo(s) in, or click "choose your files" to browse.
   - To **replace** an existing placeholder image, upload a new file with
     the exact same file name (e.g. `hero-legacy.jpg`) — GitHub will ask
     you to confirm you're replacing it.
   - To add a **new** image, just give it a new file name, then update
     `js/products.js` to point to it (see above).
5. Scroll down, add a short commit message (e.g. "add hero photo"), click
   **Commit changes**.
6. Vercel will detect the push and redeploy automatically — refresh your
   live site in ~30–60 seconds.

## File structure

```
index.html              → homepage
product.html             → product detail page (reads ?id= from the URL)
css/style.css             → all styling
js/products.js            → ⭐ EDIT THIS for content (images, prices, videos, text)
js/common.js               → shared header/footer (no need to edit)
js/home.js                  → homepage logic (no need to edit)
js/product.js                → product page logic (no need to edit)
assets/images/hero/            → hero + banner photos go here
assets/images/products/         → product photos go here
assets/videos/                   → any videos go here
```
