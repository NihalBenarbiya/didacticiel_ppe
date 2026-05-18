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
  },
  {
      "id": "definir",
      "verbe": "Définir",
      "emoji": "📘",
      "couleur": "#1E90FF",
      "definition": "Donner la signification précise d'un terme ou concept.",
      "traduction": "حدد",
      "exemple": "Définis ce qu'est un système d'exploitation.",
      "exercice": {
          "type": "qcm",
          "question": "Que signifie 'définir' dans une consigne informatique ?",
          "choix": [
              {
                  "texte": "Expliquer un concept",
                  "correct": false
              },
              {
                  "texte": "Donner la signification précise d'un terme",
                  "correct": true
              },
              {
                  "texte": "Lister des éléments",
                  "correct": false
              },
              {
                  "texte": "Calculer une valeur",
                  "correct": false
              }
          ],
          "multiple": false
      }
  },
  {
      "id": "citer",
      "verbe": "Citer",
      "emoji": "📝",
      "couleur": "#32CD32",
      "definition": "Nommer un ou plusieurs exemples ou éléments.",
      "traduction": "اذكر",
      "exemple": "Cite trois périphériques d'entrée d'un ordinateur.",
      "exercice": {
          "type": "cloze",
          "question": "Complétez la phrase en citant un périphérique d'entrée : Un périphérique d'entrée est un appareil comme le ____.",
          "phrase": "Un périphérique d'entrée est un appareil comme le ____.",
          "trous": [
              "clavier"
          ],
          "choix": [
              "clavier",
              "écran",
              "imprimante",
              "souris"
          ]
      }
  },
  {
      "id": "nommer",
      "verbe": "Nommer",
      "emoji": "🔤",
      "couleur": "#FF8C00",
      "definition": "Donner le nom précis d'une chose ou d'une partie.",
      "traduction": "سمِّ",
      "exemple": "Nomme les différentes parties d'une unité centrale.",
      "exercice": {
          "type": "relier",
          "question": "Reliez le nom de la partie de l'ordinateur à sa description.",
          "gauche": [
              "Écran",
              "Clavier",
              "Souris",
              "Unité centrale"
          ],
          "droite": [
              "Affiche les images",
              "Permet la saisie de texte",
              "Permet de pointer et cliquer",
              "Contient le processeur et la mémoire"
          ],
          "paires": [
              [
                  0,
                  0
              ],
              [
                  1,
                  1
              ],
              [
                  2,
                  2
              ],
              [
                  3,
                  3
              ]
          ]
      }
  },
  {
      "id": "calculer",
      "verbe": "Calculer",
      "emoji": "➗",
      "couleur": "#FF4500",
      "definition": "Effectuer une opération mathématique pour obtenir un résultat.",
      "traduction": "احسب",
      "exemple": "Calcule le nombre total de fichiers dans ce dossier.",
      "exercice": {
          "type": "qcm",
          "question": "Quel est le résultat du calcul suivant : 8 + 12 ?",
          "choix": [
              {
                  "texte": "20",
                  "correct": true
              },
              {
                  "texte": "18",
                  "correct": false
              },
              {
                  "texte": "21",
                  "correct": false
              },
              {
                  "texte": "15",
                  "correct": false
              }
          ],
          "multiple": false
      }
  },
  {
      "id": "convertir",
      "verbe": "Convertir",
      "emoji": "🔄",
      "couleur": "#9370DB",
      "definition": "Changer une donnée d'un format ou unité vers un autre.",
      "traduction": "حوّل",
      "exemple": "Convertis 1024 kilo-octets en méga-octets.",
      "exercice": {
          "type": "cloze",
          "question": "Convertis 1 000 méga-octets en giga-octets : ____ Go.",
          "phrase": "Convertis 1 000 méga-octets en giga-octets : ____ Go.",
          "trous": [
              "1"
          ],
          "choix": [
              "0,1",
              "1",
              "10",
              "100"
          ]
      }
  },
  {
      "id": "distinguer",
      "verbe": "Distinguer",
      "emoji": "🔍",
      "couleur": "#20B2AA",
      "definition": "Reconnaître et différencier des éléments entre eux.",
      "traduction": "ميز",
      "exemple": "Distingue un logiciel libre d'un logiciel propriétaire.",
      "exercice": {
          "type": "relier",
          "question": "Associez chaque type de logiciel à sa caractéristique.",
          "gauche": [
              "Logiciel libre",
              "Logiciel propriétaire"
          ],
          "droite": [
              "Peut être modifié et redistribué librement",
              "Licence restreinte, non modifiable"
          ],
          "paires": [
              [
                  0,
                  0
              ],
              [
                  1,
                  1
              ]
          ]
      }
  },
  {
      "id": "expliquer",
      "verbe": "Expliquer",
      "emoji": "💡",
      "couleur": "#FFD700",
      "definition": "Rendre clair un phénomène ou un concept par des détails.",
      "traduction": "شرح",
      "exemple": "Explique comment fonctionne un routeur dans un réseau.",
      "exercice": {
          "type": "cloze",
          "question": "Explique pourquoi l’antivirus est important : Il protège l’ordinateur contre les ____.",
          "phrase": "Il protège l’ordinateur contre les ____.",
          "trous": [
              "virus"
          ],
          "choix": [
              "virus",
              "documents",
              "applications",
              "réseaux"
          ]
      }
  },
  {
      "id": "justifier",
      "verbe": "Justifier",
      "emoji": "📏",
      "couleur": "#FF1493",
      "definition": "Donner une raison ou un argument pour soutenir une réponse ou un choix.",
      "traduction": "برر",
      "exemple": "Justifie le choix de l’ordinateur portable pour une présentation.",
      "exercice": {
          "type": "qcm",
          "question": "Pourquoi choisir un ordinateur portable pour une présentation ?",
          "choix": [
              {
                  "texte": "Pour sa mobilité et facilité de transport",
                  "correct": true
              },
              {
                  "texte": "Parce qu’il est plus lent",
                  "correct": false
              },
              {
                  "texte": "Parce qu’il ne possède pas de batterie",
                  "correct": false
              },
              {
                  "texte": "Parce qu’il est plus grand que le bureau",
                  "correct": false
              }
          ],
          "multiple": false
      }
  },
  {
      "id": "saisir",
      "verbe": "Saisir",
      "emoji": "⌨️",
      "couleur": "#00CED1",
      "definition": "Entrer des données ou du texte dans un système informatique.",
      "traduction": "أدخل",
      "exemple": "Saisis ton prénom dans le formulaire en ligne.",
      "exercice": {
          "type": "cloze",
          "question": "Pour compléter le formulaire, il faut saisir son ____.",
          "phrase": "Pour compléter le formulaire, il faut saisir son ____.",
          "trous": [
              "nom"
          ],
          "choix": [
              "nom",
              "papier",
              "ordinateur",
              "cahier"
          ]
      }
  },
  {
      "id": "enregistrer",
      "verbe": "Enregistrer",
      "emoji": "💾",
      "couleur": "#008000",
      "definition": "Sauvegarder des données sur un support de stockage.",
      "traduction": "احفظ",
      "exemple": "Enregistre ton document avant de fermer le logiciel.",
      "exercice": {
          "type": "qcm",
          "question": "Pourquoi est-il important d'enregistrer son travail régulièrement ?",
          "choix": [
              {
                  "texte": "Pour ne pas perdre les modifications",
                  "correct": true
              },
              {
                  "texte": "Pour fermer le logiciel plus vite",
                  "correct": false
              },
              {
                  "texte": "Pour ralentir l'ordinateur",
                  "correct": false
              },
              {
                  "texte": "Pour augmenter la taille du fichier",
                  "correct": false
              }
          ],
          "multiple": false
      }
  }
];