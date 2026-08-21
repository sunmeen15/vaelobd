/* =========================================================================
 
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
logo: "assets/images/hero/va.jfif",
 

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
    image: "",
    // Optional: put a hero VIDEO here instead of a picture. Leave "" for none.
    video: "assets/images/hero/f92a8468-89af-4d60-b290-9d9e99643816 (1).mp4",
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
        video: "assets/images/hero/asmr.mp4",
        poster: "",
        caption: "Shop now",
        link: "shop"
      },
      {
        // Once you add your file, change this to: "assets/videos/video-2.mp4"
        video: "assets/images/hero/vbb.mp4",
        poster: "",
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
      name: "Good girl",
      price: 850.00,
      currency: "TK",
      // Main image shown on the homepage grid + first image on product page
      image: "assets/images/products/goodgirl.jfif",
      // Extra gallery images for the product page (optional, can be empty [])
      gallery: [
        "assets/images/products/goodgirl.jfif",
        "assets/images/products/goodgirl.jfif"
      ],
      // Optional product video. Leave "" for none.
      video: "",
      description: "",
      sizes: ["6ml", "15ml", "30ml", "50ml"]
    },
    {
      id: "p2",
      name: "Dunhill icon",
      price: 1299.00,
      currency: "TK",
      image: "assets/images/products/dunhillicon.jfif",
      gallery: [
        "assets/images/products/dunhillicon.jfif"
      ],
      video: "",
      description: "",
      sizes: ["6ml", "15ml", "30ml", "50ml"]
    },
    {
      id: "p3",
      name: "Dior Sauvage",
      price: 1450.00,
      currency: "TK",
      image: "assets/images/products/diorsauvage.jfif",
      gallery: [],
      // Example of a product with a VIDEO instead of just a photo.
      video: "",
      description: "",
      sizes: ["6ml", "15ml", "30ml", "50ml"]
    },
    {
      id: "p4",
      name: "Blue de channel",
      price: 1450.00,
      currency: "TK",
      image: "assets/images/products/bleu.jfif",
      gallery: [],
      video: "",
      description: "",
      sizes: ["6ml", "15ml", "30ml", "50ml"]
    }
  ]
};
