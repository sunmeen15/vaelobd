/* Renders a single product page based on the ?id= in the URL.
   No need to edit this file — edit js/products.js instead. */

function getProductIdFromUrl(){
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function findProduct(id){
  return SITE.products.find(p => p.id === id);
}

function renderProductGallery(product){
  const allImages = [product.image, ...(product.gallery || [])];

  const mainMedia = product.video
    ? `<video src="${product.video}" autoplay muted loop playsinline controls></video>`
    : `<img id="mainImage" src="${allImages[0]}" alt="${product.name}">`;

  const thumbs = allImages.length > 1
    ? `<div class="product-gallery-thumbs">
        ${allImages.map((src, i) => `
          <img src="${src}" alt="${product.name} view ${i+1}"
               class="${i === 0 ? 'active' : ''}"
               onclick="swapMainImage(this, '${src}')">
        `).join("")}
      </div>`
    : "";

  return `
    <div class="product-gallery">
      <div class="product-gallery-main">${mainMedia}</div>
      ${thumbs}
    </div>
  `;
}

function swapMainImage(el, src){
  const main = document.getElementById("mainImage");
  if(main){ main.src = src; }
  document.querySelectorAll(".product-gallery-thumbs img").forEach(img => img.classList.remove("active"));
  el.classList.add("active");
}

function renderProductInfo(product){
  const sizes = product.sizes && product.sizes.length
    ? `
      <div class="size-label">Size</div>
      <div class="size-options">
        ${product.sizes.map((s, i) => `<button class="${i === 0 ? 'selected' : ''}" onclick="selectSize(this)">${s}</button>`).join("")}
      </div>
    `
    : "";

  return `
    <div class="product-info">
      <div class="breadcrumb"><a href="index.html">${SITE.brand}</a> &nbsp;/&nbsp; ${product.name}</div>
      <h1>${product.name}</h1>
      <div class="price">${formatPrice(product)}</div>
      <p class="description">${product.description}</p>
      ${sizes}
      <button class="btn-primary" type="button">Add to bag</button>
    </div>
  `;
}

function selectSize(el){
  el.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
  el.classList.add("selected");
}

function renderNotFound(){
  return `
    <div class="product-page" style="grid-template-columns:1fr;text-align:center;padding-top:100px;">
      <div>
        <h1 style="font-family:var(--font-display);font-size:28px;margin-bottom:12px;">Product not found</h1>
        <p style="color:var(--c-grey);margin-bottom:24px;">This item may have been removed.</p>
        <a class="btn-primary" style="max-width:200px;margin:0 auto;" href="index.html">Back to shop</a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  mount("header-root", renderHeader());

  const id = getProductIdFromUrl();
  const product = id ? findProduct(id) : null;

  if(!product){
    mount("page-root", renderNotFound());
  } else {
    document.title = `${product.name} — ${SITE.brand}`;
    mount("back-root", `<a class="back-link" href="index.html">&larr; Back to shop</a>`);
    mount("page-root", `
      <div class="product-page">
        ${renderProductGallery(product)}
        ${renderProductInfo(product)}
      </div>
    `);
  }

  mount("footer-root", renderFooter());
});
