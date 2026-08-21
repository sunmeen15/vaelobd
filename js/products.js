/* =========================================================================
   ETHEREAL — SITE CONTENT FILE
   -------------------------------------------------------------------------
   This is the ONLY file you need to touch to change:
     - the ☰ menu links (Home, Shop, For Him, For Her, Combo, etc.)
     - the homepage hero picture/video and its text
     - the 2 videos in the video section (below the products)
     - every product's picture(s), video, name, price and description

   HOW IMAGES/VIDEOS WORK
   -------------------------------------------------------------------------
   1. Put your image files inside:      assets/images/products/
      Put your video files inside:      assets/videos/
      Put hero/banner images inside:    assets/images/hero/

   2. Then just type the file name below, e.g. "assets/images/hero/legacy.jpg"

   3. You can also use a full web URL instead of a local file, e.g.
      "https://images.example.com/photo.jpg" — both work.

   4. "video" fields are optional. Leave them as an empty string ""
      if a product/hero has no video. If a video IS provided, it will
      play instead of the image (muted, looping, autoplay).
   ========================================================================= */

const SITE = {

  brand: "Vaelo",

  /* ---------------- MENU (the panel that opens when you tap the ☰ icon) ----------------
     Add, remove, rename, or reorder links freely. "link" can be:
       - "shop"           → scrolls to the product grid on the homepage
       - a full page name → e.g. "index.html"
       - a product id     → e.g. "product.html?id=p1"
       - a real URL       → e.g. "https://instagram.com/vaelo"
  ------------------------------------------------------------------------------------- */
  nav: [
    { label: "Home", link: "index.html" },
    { label: "Shop", link: "shop" },
    { label: "For Him", link: "shop" },
    { label: "For Her", link: "shop" },
    { label: "Combo", link: "shop" }
  ],

  /* ---------------- HERO (big banner when you first open the site) ---------------- */
  hero: {
    // Put your hero picture here 👇
    image: "assets/images/hero/f92a8468-89af-4d60-b290-9d9e99643816 (1).mp4",
    // Optional: put a hero VIDEO here instead of a picture. Leave "" for none.
    video: "",
    // 👇 This is the big word on the homepage banner ("Legacy" in the demo).
    //    Change the text between the quotes to whatever you want it to say.
    title: "Elegance",
    buttonText: "Shop now",
    // "shop" scrolls to the product grid. Change to a product id (e.g. "p1")
    // to send people straight to one product instead.
    link: "shop"
  },

  /* ---------------- VIDEO SECTION (2 videos, shown below the product grid) ----------------
     Put your video files in assets/videos/ and type the filename in "video" below.
     "poster" is the picture shown for a split second before the video loads (optional).
     If you leave "video" as "" it will just show the poster image instead — handy while
     you don't have the real video yet.
  ------------------------------------------------------------------------------------------ */
  videoSection: {
    heading: "In motion",
    videos: [
      {
        // Once you add your file, change this to: "assets/videos/video-1.mp4"
        video: "",
        poster: "assets/images/hero/banner-1.jpg",
        caption: "Shop now",
        link: "shop"
      },
      {
        // Once you add your file, change this to: "assets/videos/video-2.mp4"
        video: "",
        poster: "assets/images/hero/banner-2.jpg",
        caption: "Shop now",
        link: "shop"
      }
    ]
  },

  /* ---------------- PRODUCTS ----------------
     Add as many products as you like by copying one whole { ... } block
     and pasting it before the closing bracket ]. Give every product a
     UNIQUE id (p1, p2, p3 ...) — that id is what links the picture on the
     homepage to its own product page.

     SIZES: this is a perfume site, so "sizes" holds bottle sizes, e.g.
     ["6ml", "15ml", "30ml", "50ml"]. To edit: add, remove, or rename any
     entry in that list — e.g. change "6ml" to "10ml", or add a 5th size
     like "100ml" by adding another entry separated by a comma. The order
     you type them is the order they appear as buttons on the product page.
  ------------------------------------------------------------------------ */
  products: [
    {
      id: "p1",
      name: "Legacy Tank Top - Black",
      price: 850.00,
      currency: "TK",
      // Main image shown on the homepage grid + first image on product page
      image: "assets/images/products/legacy-tank-black-1.jpg",
      // Extra gallery images for the product page (optional, can be empty [])
      gallery: [
        "assets/images/products/legacy-tank-black-2.jpg",
        "assets/images/products/legacy-tank-black-3.jpg"
      ],
      // Optional product video. Leave "" for none.
      video: "",
      description: "A relaxed, sleeveless tank in heavyweight cotton, finished with the embroidered Legacy signature at the chest.",
      sizes: ["6ml", "15ml", "30ml", "50ml"]
    },
    {
      id: "p2",
      name: "Sun Chaser Tee",
      price: 1299.00,
      currency: "TK",
      image: "assets/images/products/sun-chaser-tee-1.jpg",
      gallery: [
        "assets/images/products/sun-chaser-tee-2.jpg"
      ],
      video: "",
      description: "An oversized-fit tee in soft washed cotton, with the Legacy emblem embroidered at the chest.",
      sizes: ["6ml", "15ml", "30ml", "50ml"]
    },
    {
      id: "p3",
      name: "Legacy Crewneck - Sand",
      price: 1450.00,
      currency: "TK",
      image: "assets/images/products/legacy-crew-sand-1.jpg",
      gallery: [],
      // Example of a product with a VIDEO instead of just a photo.
      video: "",
      description: "A midweight crewneck in a heathered sand tone with dropped shoulders and ribbed trims.",
      sizes: ["6ml", "15ml", "30ml", "50ml"]
    },
    {
      id: "p4",
      name: "Legacy Crewneck - Navy",
      price: 1450.00,
      currency: "TK",
      image: "assets/images/products/legacy-crew-navy-1.jpg",
      gallery: [],
      video: "",
      description: "A midweight crewneck in deep navy with dropped shoulders and ribbed trims.",
      sizes: ["6ml", "15ml", "30ml", "50ml"]
    }
  ]
};
