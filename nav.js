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

  /**
   * On pages that already have a .sidebar (index.html), inject page links at
   * the top of it — visible on mobile only.
   * On other pages, create a minimal mobile-only sidebar + hamburger.
   */
  function injectMobileNav() {
    const active = currentKey();
    const existingSidebar = document.querySelector('.sidebar');

    if (existingSidebar) {
      /* ── index.html: sidebar exists — add page links at top (mobile only) ── */
      const sidebarNav = existingSidebar.querySelector('.sidebar-nav') || existingSidebar;

      const section = document.createElement('div');
      section.className = 'nav-section';
      section.textContent = 'Pages';

      const linksWrap = document.createElement('div');

      LINKS.forEach(l => {
        const a = document.createElement('a');
        a.href = l.href;
        a.className = 'nav-item' + (active === l.key ? ' active' : '');
        a.innerHTML = `<span class="ni-icon">${l.icon}</span><span class="ni-label">${l.label}</span>`;
        linksWrap.appendChild(a);
      });

      sidebarNav.insertBefore(linksWrap, sidebarNav.firstChild);
      sidebarNav.insertBefore(section, sidebarNav.firstChild);

      function toggle() {
        const mobile = window.innerWidth <= 768;
        section.style.display   = mobile ? '' : 'none';
        linksWrap.style.display = mobile ? '' : 'none';
      }
      toggle();
      window.addEventListener('resize', toggle);

    } else {
      /* ── Other pages: inject a minimal mobile sidebar + hamburger ── */
      const style = document.createElement('style');
      style.textContent = `
        .nav-hamburger {
          display: none;
          position: fixed; top: 14px; left: 14px; z-index: 200;
          background: #ffffff; border: 1px solid #e2e8f0;
          border-radius: 8px; padding: 8px; cursor: pointer;
          flex-direction: column; gap: 4px;
        }
        .nav-hamburger span {
          width: 18px; height: 2px; background: #1e293b;
          border-radius: 2px; display: block;
        }
        .nav-mobile-sidebar {
          display: none;
          width: 260px;
          background: #ffffff;
          border-right: 1px solid #e2e8f0;
          position: fixed;
          top: 60px; left: 0; bottom: 0;
          z-index: 100;
          overflow-y: auto;
          transform: translateX(-100%);
          transition: transform .25s;
          padding: 16px 0 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        .nav-mobile-sidebar.open { transform: translateX(0); }
        .nav-mobile-overlay {
          display: none;
          position: fixed; inset: 0; z-index: 99;
          background: rgba(0,0,0,0.18);
        }
        .nav-mobile-overlay.open { display: block; }
        .nav-mobile-sidebar .nm-section {
          padding: 14px 12px 6px;
          font-size: 10px; font-weight: 700; color: #64748b;
          text-transform: uppercase; letter-spacing: .1em;
        }
        .nav-mobile-sidebar .nm-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 14px; margin: 2px 8px; border-radius: 10px;
          font-size: 13px; font-weight: 600; color: #64748b;
          cursor: pointer; transition: background .15s, color .15s;
          text-decoration: none;
        }
        .nav-mobile-sidebar .nm-item .nm-icon {
          font-size: 16px; width: 22px; text-align: center; flex-shrink: 0;
        }
        .nav-mobile-sidebar .nm-item:hover,
        .nav-mobile-sidebar .nm-item.active {
          background: #eef2ff; color: #3b6ff0;
        }
        .nav-mobile-sidebar .nm-item.active .nm-label { font-weight: 700; }
        @media (max-width: 768px) {
          .nav-hamburger { display: flex; }
          .nav-mobile-sidebar { display: block; }
        }
      `;
      document.head.appendChild(style);

      /* Hamburger */
      const hamburger = document.createElement('div');
      hamburger.className = 'nav-hamburger';
      hamburger.setAttribute('aria-label', 'Menu');
      hamburger.innerHTML = '<span></span><span></span><span></span>';
      document.body.appendChild(hamburger);

      /* Overlay */
      const overlay = document.createElement('div');
      overlay.className = 'nav-mobile-overlay';
      document.body.appendChild(overlay);

      /* Sidebar */
      const sidebar = document.createElement('aside');
      sidebar.className = 'nav-mobile-sidebar';

      const sectionLabel = document.createElement('div');
      sectionLabel.className = 'nm-section';
      sectionLabel.textContent = 'Pages';
      sidebar.appendChild(sectionLabel);

      LINKS.forEach(l => {
        const a = document.createElement('a');
        a.href = l.href;
        a.className = 'nm-item' + (active === l.key ? ' active' : '');
        a.innerHTML = `<span class="nm-icon">${l.icon}</span><span class="nm-label">${l.label}</span>`;
        sidebar.appendChild(a);
      });

      document.body.appendChild(sidebar);

      /* Toggle logic */
      function open()  { sidebar.classList.add('open');    overlay.classList.add('open');    }
      function close() { sidebar.classList.remove('open'); overlay.classList.remove('open'); }
      hamburger.addEventListener('click', () => sidebar.classList.contains('open') ? close() : open());
      overlay.addEventListener('click', close);
    }
  }

  /* ── Boot ─────────────────────────────────────────── */
  document.body.insertAdjacentHTML("afterbegin", buildNav());

  const main = document.querySelector("main");
  if (main) {
    main.insertAdjacentHTML("afterend", buildFooter());
  } else {
    document.body.insertAdjacentHTML("beforeend", buildFooter());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectMobileNav);
  } else {
    injectMobileNav();
  }
})();