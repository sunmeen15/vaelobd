/* Shared bits: header, footer, currency formatting. No editing needed here —
   go to js/products.js to change content. */

const ICONS = {
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`
};

function formatPrice(product){
  return `${product.currency} ${Number(product.price).toFixed(2)}`;
}

function navLinkHref(link){
  if(link === "shop") return "index.html#shop";
  return link;
}

function renderHeader(){
  return `
    <header class="site-header">
      <div class="header-side left">
        <button class="icon-btn" aria-label="Menu" onclick="openMenu()">${ICONS.menu}</button>
        <button class="icon-btn" aria-label="Search">${ICONS.search}</button>
      </div>
      <a href="index.html" class="brand"><img src="${SITE.logo}" alt="${SITE.brand}"></a>
      <div class="header-side right">
        <button class="icon-btn" aria-label="Account">${ICONS.user}</button>
        <button class="icon-btn" aria-label="Bag">${ICONS.bag}</button>
      </div>
    </header>

    <div class="menu-overlay" id="menuOverlay" onclick="closeMenu(event)">
      <nav class="menu-drawer" role="dialog" aria-label="Site menu">
        <button class="menu-close" aria-label="Close menu" onclick="closeMenu()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
        <ul class="menu-list">
          ${SITE.nav.map(item => `<li><a href="${navLinkHref(item.link)}">${item.label}</a></li>`).join("")}
        </ul>
      </nav>
    </div>
  `;
}

function openMenu(){
  document.getElementById("menuOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMenu(event){
  // Only close on overlay click or the close button, not clicks inside the drawer itself
  if(event && event.target.closest(".menu-drawer") && !event.target.closest(".menu-close")) return;
  document.getElementById("menuOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeMenu();
});

function renderFooter(){
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <div class="footer-brand">${SITE.brand}</div>
          <p class="footer-note">A study in restraint — considered pieces, made to last.</p>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} ${SITE.brand}. All rights reserved.</div>
    </footer>
  `;
}

function mount(id, html){
  document.getElementById(id).innerHTML = html;
}
