/**
 * ============================================================
 *  FICHIER DE DONNÉES — VERBES DES CONSIGNES
 *  Modifiable par l'enseignant(e) sans toucher au code HTML.
 *
 *  Structure de chaque verbe :
 *  {
 *    id        : identifiant unique (string, pas d'espaces)
 *    verbe     : le mot tel qu'il apparaît dans les consignes
 *    emoji     : icône associée
 *    couleur   : couleur principale (hex ou css)
 *    definition: courte définition en français
 *    traduction: traduction en arabe
 *    exemple   : exemple de phrase de consigne utilisant ce verbe
 *    exercice  : {
 *      type      : "qcm" | "relier" | "cloze" | "trier"
 *      question  : énoncé de l'exercice
 *      ...       : champs spécifiques au type (voir exemples)
 *    }
 *  }
 * ============================================================
 */

window.VERBES_DATA = [
  {
    id: "completer",
    verbe: "Compléter",
    emoji: "✏️",
    couleur: "#3b6ff0",
    definition: "Remplir les parties manquantes d'un texte, d'un tableau ou d'un schéma.",
    traduction: "أَكْمِل",
    exemple: "Complète le tableau avec les noms des périphériques d'entrée et de sortie.",
    exercice: {
      type: "cloze",
      question: "Complète la phrase avec le bon mot :",
      phrase: "Un clavier est un périphérique d'___.",
      trous: ["entrée"],          // réponses attendues dans l'ordre
      choix: ["entrée", "sortie", "stockage", "traitement"]
    }
  },
  {
    id: "relier",
    verbe: "Relier",
    emoji: "🔗",
    couleur: "#e06b2e",
    definition: "Tracer un lien entre deux éléments qui correspondent.",
    traduction: "صِل / اربِط",
    exemple: "Relie chaque type de fichier à son extension correspondante.",
    exercice: {
      type: "relier",
      question: "Relie chaque appareil à sa catégorie :",
      gauche: ["Souris", "Imprimante", "Disque dur"],
      droite: ["Stockage", "Entrée", "Sortie"],
      paires: [[0,1],[1,2],[2,0]]   // indices : gauche[i] ↔ droite[j]
    }
  },
  {
    id: "cocher",
    verbe: "Cocher",
    emoji: "☑️",
    couleur: "#27ae60",
    definition: "Mettre une croix ou un crochet dans la case qui correspond à la bonne réponse.",
    traduction: "ضَع عَلامة / حَدِّد",
    exemple: "Coche les cases qui correspondent à des logiciels libres.",
    exercice: {
      type: "qcm",
      question: "Coche les périphériques de sortie :",
      choix: [
        { texte: "Écran",      correct: true  },
        { texte: "Clavier",    correct: false },
        { texte: "Imprimante", correct: true  },
        { texte: "Souris",     correct: false },
        { texte: "Haut-parleur", correct: true }
      ],
      multiple: true
    }
  },
  {
    id: "selectionner",
    verbe: "Sélectionner",
    emoji: "🖱️",
    couleur: "#8e44ad",
    definition: "Choisir un ou plusieurs éléments parmi une liste proposée.",
    traduction: "اخْتَر / حَدِّد",
    exemple: "Sélectionne la bonne réponse parmi les propositions suivantes.",
    exercice: {
      type: "qcm",
      question: "Sélectionne la bonne définition d'un système d'exploitation :",
      choix: [
        { texte: "Un logiciel qui gère le matériel et les applications.",         correct: true  },
        { texte: "Un périphérique de stockage externe.",                           correct: false },
        { texte: "Un câble qui relie deux ordinateurs.",                           correct: false },
        { texte: "Un programme qui dessine des images.",                           correct: false }
      ],
      multiple: false
    }
  },
  {
    id: "identifier",
    verbe: "Identifier",
    emoji: "🔍",
    couleur: "#c0392b",
    definition: "Reconnaître et nommer un élément précis parmi d'autres.",
    traduction: "حَدِّد / تَعَرَّف عَلى",
    exemple: "Identifie les différentes parties de l'interface du logiciel.",
    exercice: {
      type: "qcm",
      question: "Identifie l'élément qui N'est PAS un composant interne d'un ordinateur :",
      choix: [
        { texte: "Processeur (CPU)",   correct: false },
        { texte: "Carte mère",         correct: false },
        { texte: "Webcam",             correct: true  },
        { texte: "Mémoire vive (RAM)", correct: false }
      ],
      multiple: false
    }
  },
  {
    id: "classer",
    verbe: "Classer",
    emoji: "🗂️",
    couleur: "#16a085",
    definition: "Ranger des éléments dans des catégories selon un critère donné.",
    traduction: "صَنِّف / رَتِّب",
    exemple: "Classe les logiciels suivants en deux catégories : logiciels système et logiciels applicatifs.",
    exercice: {
      type: "trier",
      question: "Classe chaque logiciel dans la bonne catégorie :",
      items: ["Windows", "LibreOffice", "Linux", "Photoshop", "BIOS", "VLC"],
      categories: ["Logiciel système", "Logiciel applicatif"],
      reponses: [0, 1, 0, 1, 0, 1]   // index de la catégorie pour chaque item
    }
  },
  {
    id: "comparer",
    verbe: "Comparer",
    emoji: "⚖️",
    couleur: "#d4a017",
    definition: "Trouver les points communs et les différences entre deux éléments.",
    traduction: "قَارِن / وَازِن",
    exemple: "Compare un logiciel libre et un logiciel propriétaire en complétant le tableau.",
    exercice: {
      type: "qcm",
      question: "En comparant un disque dur (HDD) et une clé USB, lequel est le plus rapide en lecture ?",
      choix: [
        { texte: "Disque dur (HDD)",    correct: false },
        { texte: "Clé USB (standard)",  correct: false },
        { texte: "SSD",                 correct: true  },   // bonus : correction expliquée
        { texte: "Ils sont identiques", correct: false }
      ],
      multiple: false,
      // Message affiché après correction
      explication: "Un SSD est beaucoup plus rapide qu'un HDD ou une clé USB standard car il n'a pas de pièces mécaniques."
    }
  }
];
