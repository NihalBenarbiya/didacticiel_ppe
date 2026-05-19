/**
 * activities-data.js — Didacticiel
 * Données des activités LearningApps par niveau et unité.
 *
 * ── Identifiants des grilles disponibles ──────────────────────────
 *
 *  1APIC
 *  "grid-1-U1-C0"    → U1 · Système informatique           (4 h)
 *  "grid-1-U1-C31"   → U1 · Système d'exploitation         (4 h)
 *  "grid-1-U2-C11a"  → U2 · Utilitaires et fichiers        (2 h)
 *  "grid-1-U2-C11b"  → U2 · Traitement de textes          (14 h)
 *  "grid-1-U3-C21"   → U3 · Recherches documentaires       (6 h)
 *
 *  2APIC
 *  "grid-2-U1-C0"    → U1 · Environnement matériel          (4 h)
 *  "grid-2-U1-C31"   → U1 · SE et réseau local             (2 h)
 *  "grid-2-U2-C32"   → U2 · Échange d'informations         (2 h)
 *  "grid-2-U3-C12"   → U3 · Tableurs                      (12 h)
 *  "grid-2-U4-C13"   → U4 · Programmation Logo            (10 h)
 *
 *  3APIC
 *  "grid-3-U1-C0"    → U1 · Topologie réseau               (2 h)
 *  "grid-3-U2-C11"   → U2 · Présentation PAO              (10 h)
 *  "grid-3-U3-C13"   → U3 · Programmation Logo avancée     (8 h)
 *  "grid-3-U4-C23"   → U4 · Recherches Web                 (6 h)
 *  "grid-3-U5-C33"   → U5 · Messagerie électronique        (4 h)
 *
 * Pour ajouter une activité, copiez un bloc et renseignez :
 *   gridId → identifiant ci-dessus
 *   title  → nom affiché sur la carte
 *   id     → code LearningApps  OU  URL complète
 *   icon   → numéro icône LearningApps (ex: 83)
 *   color  → couleur de fond de la carte (ex: "#dbeafe")
 *   level  → "1APIC", "2APIC" ou "3APIC"
 *   dot    → couleur du point niveau : "#3b6ff0" / "#059669" / "#d97706"
 */

const ACTIVITIES = [

  // ── 1APIC · U1 · Système informatique (C0) ───────────────────
  {
    gridId: "grid-1-U1-C0",
    title:  "Composants de l'ordinateur",
    id:     "pk0j4yef526",
    icon:   83,
    color:  "#dbeafe",
    level:  "1APIC",
    dot:    "#3b6ff0"
  },

  // ── 1APIC · U1 · Système d'exploitation (C31) ────────────────
  {
    gridId: "grid-1-U1-C31",
    title:  "Manipulation des fenêtres",
    id:     "peje7efs326",
    icon:   93,
    color:  "#dcfce7",
    level:  "1APIC",
    dot:    "#3b6ff0"
  },

  // ── 1APIC · U2 · Traitement de textes (C11) ──────────────────
  {
    gridId: "grid-1-U2-C11b",
    title:  "Association",
    id:     "p1qwnccuc26",
    icon:   71,
    color:  "#fce7f3",
    level:  "1APIC",
    dot:    "#3b6ff0"
  },

  // ── Ajoutez vos activités 2APIC ici ──────────────────────────
  {
    gridId: "grid-2-U3-C12",
    title:  "tableur",
    id:     "p873b7s8a26",
    icon:   83,
    color:  "#d1fae5",
    level:  "2APIC",
    dot:    "#059669"
  },

  // ── Ajoutez vos activités 3APIC ici ──────────────────────────
  // {
  //   gridId: "grid-3-U4-C23",
  //   title:  "Nom de l'activité",
  //   id:     "CODE_LEARNINGAPPS",
  //   icon:   86,
  //   color:  "#fef3c7",
  //   level:  "3APIC",
  //   dot:    "#d97706"
  // },

];
