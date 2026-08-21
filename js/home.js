/* Renders the homepage from SITE data in js/products.js.
   No need to edit this file — edit js/products.js instead. */

function heroLinkHref(link){
  if(link === "shop") return "#shop";
  return `product.html?id=${link}`;
}

function renderHero(){
  const hero = SITE.hero;
  const media = hero.video
    ? `<video class="hero-media" src="${hero.video}" autoplay muted loop playsinline></video>`
    : `<img class="hero-media" src="${hero.image}" alt="${hero.title}">`;

  return `
    <section class="hero">
      ${media}
      <div class="hero-content">
        <h1 class="hero-title">${hero.title}</h1>
        <a class="btn-shop" href="${heroLinkHref(hero.link)}">${hero.buttonText}</a>
      </div>
    </section>
  `;
}

function renderVideoSection(){
  const section = SITE.videoSection;
  return `
    <section class="video-section">
      <div class="section-heading">
        <h2>${section.heading}</h2>
      </div>
      <div class="video-grid">
        ${section.videos.map(v => {
          const media = v.video
            ? `<video src="${v.video}" poster="${v.poster || ''}" autoplay muted loop playsinline></video>`
            : `<img src="${v.poster}" alt="${v.caption}">`;
          return `
            <a class="video-block" href="${heroLinkHref(v.link)}">
              ${media}
              <span class="video-caption">${v.caption}</span>
            </a>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderProductCard(product){
  const media = product.video
    ? `<video src="${product.video}" autoplay muted loop playsinline></video>`
    : `<img src="${product.image}" alt="${product.name}" loading="lazy">`;

  return `
    <a class="product-card" href="product.html?id=${product.id}">
      <div class="product-card-media">${media}</div>
      <div class="product-card-info">
        <h3>${product.name}</h3>
        <div class="price">${formatPrice(product)}</div>
      </div>
    </a>
  `;
}

function renderGrid(){
  return `
    <div id="shop" class="section-heading">
      <h2>New arrivals</h2>
      <p>Considered pieces, made to last.</p>
    </div>
    <div class="product-grid">
      ${SITE.products.map(renderProductCard).join("")}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  mount("header-root", renderHeader());
  mount("hero-root", renderHero());
  mount("grid-root", renderGrid());
  mount("banners-root", renderVideoSection());
  mount("footer-root", renderFooter());
});
