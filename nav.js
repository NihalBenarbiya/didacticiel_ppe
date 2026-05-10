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
    { href: "quiz.html",      icon: "❓",   label: "Quiz",      key: "quiz"      },
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

  /* Insert nav as first child of body */
  document.body.insertAdjacentHTML("afterbegin", buildNav());

  /* Append footer if a <main> exists */
  const main = document.querySelector("main");
  if (main) {
    main.insertAdjacentHTML("afterend", buildFooter());
  } else {
    document.body.insertAdjacentHTML("beforeend", buildFooter());
  }
})();
