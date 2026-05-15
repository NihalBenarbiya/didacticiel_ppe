/**
 * nav.js — Didacticiel
 * Injecte la barre de navigation et le footer dans chaque page.
 * 
 * Usage : <script src="nav.js"></script>
 * La page courante est détectée automatiquement via window.location.pathname.
 * Pour forcer la page active, définir window.NAV_ACTIVE = "quiz" avant d'inclure ce script.
 */

(function () {
  const LINKS = [
    { href: "index.html",     icon: "🔍", label: "Décodeur",  key: "index"     },
    { href: "glossaire.html", icon: "📖", label: "Glossaire", key: "glossaire" },
    { href: "activity.html",  icon: "🎮", label: "Activités", key: "activity"  },
    { href: "quiz.html",      icon: "❓",  label: "Quiz",      key: "quiz"      },
  ];

  /** Detect current page from URL or NAV_ACTIVE override */
  function currentKey() {
    if (window.NAV_ACTIVE) return window.NAV_ACTIVE;
    const path = window.location.pathname;
    if (path.includes("glossaire")) return "glossaire";
    if (path.includes("activity"))  return "activity";
    if (path.includes("quiz"))      return "quiz";
    return "index";
  }

  function buildNav() {
    const active = currentKey();
    const linksHTML = LINKS.map(l =>
      `<a href="${l.href}"${active === l.key ? ' class="active"' : ''}>` +
      (l.icon ? `${l.icon} ` : "") + l.label +
      `</a>`
    ).join("\n      ");

    return `<nav>
  <a class="nav-brand" href="index.html">didac<span>tiel</span></a>
  <div class="nav-links">
    ${linksHTML}
  </div>
</nav>`;
  }

  function buildFooter() {
    return `<footer>Didacticiel · Informatique Collège · Maroc</footer>`;
  }

  /** Inject page links into sidebar for mobile (under a "Pages" section) */
  function buildSidebarLinks() {
    const active = currentKey();
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;

    const section = document.createElement('div');
    section.className = 'nav-section nav-pages-section';
    section.textContent = 'Pages';
    section.style.cssText = 'display: none;';

    const linksWrap = document.createElement('div');
    linksWrap.className = 'nav-pages-links';
    linksWrap.style.cssText = 'display: none;';

    LINKS.forEach(l => {
      const btn = document.createElement('a');
      btn.href = l.href;
      btn.className = 'nav-item' + (active === l.key ? ' active' : '');
      btn.innerHTML = `<span class="ni-icon">${l.icon}</span><span class="ni-label">${l.label}</span>`;
      linksWrap.appendChild(btn);
    });

    sidebarNav.insertBefore(linksWrap, sidebarNav.firstChild);
    sidebarNav.insertBefore(section, sidebarNav.firstChild);

    // Show only on mobile
    function toggleMobileLinks() {
      const isMobile = window.innerWidth <= 768;
      section.style.display = isMobile ? '' : 'none';
      linksWrap.style.display = isMobile ? '' : 'none';
    }

    toggleMobileLinks();
    window.addEventListener('resize', toggleMobileLinks);
  }

  /* Insert nav as first child of body */
  document.body.insertAdjacentHTML("afterbegin", buildNav());

  /* Append footer if a <main> exists */
  const main = document.querySelector("main");
  if (main) {
    main.insertAdjacentHTML("afterend", buildFooter());
  } else {
    document.body.insertAdjacentHTML("beforeend", buildFooter());
  }

  /* Inject sidebar page links after DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSidebarLinks);
  } else {
    buildSidebarLinks();
  }
})();