/**
 * glossary-data.js — Didacticiel
 * Données du glossaire informatique (collège Maroc).
 *
 * Chaque entrée :
 *   term      – nom du terme (FR)
 *   icon      – emoji représentatif
 *   color     – couleur de fond de l'icône
 *   ar        – traduction/explication courte en arabe
 *   def       – définition simple en français (max 2 phrases)
 *   example   – exemple concret pour un élève de 12 ans
 *   activity  – (optionnel) { id: "CODE_LA", title: "Nom activité" }
 *               id = code LearningApps OU URL complète
 *
 * Pour ajouter un terme : copiez un bloc existant et renseignez les champs.
 */

const GLOSSARY = [

  // ── A ──
  {
    term: "Adresse IP",
    icon: "🌐", color: "#dbeafe",
    ar: "عنوان IP — رقم فريد يُعطى لكل جهاز متصل بالإنترنت.",
    def: "Numéro unique attribué à chaque ordinateur sur un réseau. C'est comme l'adresse postale de ton ordinateur sur Internet.",
    example: "Quand tu te connectes à un site, ton ordinateur utilise son adresse IP pour envoyer et recevoir les données. Exemple : 192.168.1.1",
    activity: { id: "p41irw7ik26", title: "Composants réseau" }
  },
  {
    term: "Adresse URL",
    icon: "🔗", color: "#e0f2fe",
    ar: "عنوان URL — الرابط الفريد لصفحة ويب على الإنترنت.",
    def: "Adresse unique d'une page web sur Internet. Elle s'écrit dans la barre d'adresse du navigateur.",
    example: "https://www.google.com est une adresse URL. Elle commence toujours par http:// ou https://",
    activity: null
  },
  {
    term: "ADSL",
    icon: "📡", color: "#f0fdf4",
    ar: "ADSL — تقنية توصيل بالإنترنت عبر خط الهاتف بسرعة عالية.",
    def: "Technologie de connexion Internet haut débit via la ligne téléphonique. Le débit descendant (téléchargement) est plus rapide que le débit montant.",
    example: "Grâce à l'ADSL, tu peux regarder des vidéos en ligne sans trop d'interruptions depuis chez toi.",
    activity: null
  },
  {
    term: "Antivirus",
    icon: "🛡️", color: "#fef9c3",
    ar: "مضاد الفيروسات — برنامج يحمي الحاسوب من الفيروسات والبرامج الضارة.",
    def: "Logiciel qui surveille et protège ton ordinateur contre les virus et programmes malveillants. Il doit être mis à jour régulièrement.",
    example: "Avant d'ouvrir une clé USB inconnue, ton antivirus la scanne automatiquement pour détecter les virus.",
    activity: null
  },
  {
    term: "Application",
    icon: "📱", color: "#f3e8ff",
    ar: "تطبيق — برنامج يُشغَّل لتنفيذ مهمة محددة على الحاسوب.",
    def: "Programme informatique conçu pour réaliser une tâche précise. On dit aussi logiciel ou programme.",
    example: "Word est une application pour écrire des textes, Paint est une application pour dessiner.",
    activity: { id: "peje7efs326", title: "Types d'applications" }
  },
  {
    term: "Arborescence",
    icon: "🌳", color: "#dcfce7",
    ar: "شجرة الملفات — التنظيم الهرمي للمجلدات والملفات على القرص الصلب.",
    def: "Organisation hiérarchique des dossiers et fichiers sur un ordinateur, comme un arbre avec des branches.",
    example: "Sur ton ordinateur : Disque C → Mes Documents → Collège → Informatique → Cours1.docx",
    activity: null
  },

  // ── B ──
  {
    term: "Backup",
    icon: "💾", color: "#fef3c7",
    ar: "نسخة احتياطية — نسخ الملفات على دعامة خارجية حفاظًا عليها.",
    def: "Copie de sauvegarde de tes fichiers sur un support externe (clé USB, CD, disque dur externe) pour ne pas les perdre.",
    example: "Avant de formater un ordinateur, on fait un backup de tous ses fichiers importants sur une clé USB.",
    activity: null
  },
  {
    term: "Bande passante",
    icon: "📶", color: "#e0f2fe",
    ar: "عرض النطاق الترددي — سرعة نقل البيانات عبر الشبكة.",
    def: "Vitesse à laquelle des données peuvent être transférées sur un réseau. Elle se mesure en Kbits/s ou Mbits/s.",
    example: "Si ta bande passante est de 20 Mbits/s, tu peux télécharger un film de 1 Go en environ 7 minutes.",
    activity: null
  },
  {
    term: "Bug",
    icon: "🐛", color: "#fee2e2",
    ar: "خطأ برمجي — عطل في البرنامج ناتج عن خطأ في الكود.",
    def: "Erreur de programmation qui provoque un mauvais fonctionnement d'un logiciel. L'utilisateur ne peut pas le corriger lui-même.",
    example: "Quand ton jeu plante sans raison, c'est souvent à cause d'un bug. La société publie un correctif pour le réparer.",
    activity: null
  },
  {
    term: "Bureau",
    icon: "🖥️", color: "#f0fdf4",
    ar: "سطح المكتب — الشاشة الرئيسية التي تظهر عند تشغيل الحاسوب.",
    def: "Écran principal qui s'affiche au démarrage de l'ordinateur, avec les icônes et l'arrière-plan.",
    example: "Sur le bureau de ton ordinateur, tu trouves les icônes de tes logiciels et un raccourci vers la corbeille.",
    activity: null
  },
  {
    term: "Bureautique",
    icon: "📄", color: "#e8eefe",
    ar: "البرمجيات المكتبية — مجموعة التطبيقات المستخدمة في الأعمال الإدارية.",
    def: "Ensemble des logiciels utilisés pour les travaux de bureau : traitement de texte, tableur, base de données.",
    example: "Microsoft Office (Word, Excel, PowerPoint) est une suite bureautique très répandue.",
    activity: null
  },

  // ── C ──
  {
    term: "Carte mère",
    icon: "🔌", color: "#fef3c7",
    ar: "اللوحة الأم — الجزء المركزي في الحاسوب الذي يربط كل المكونات.",
    def: "Pièce centrale de l'ordinateur qui relie tous les composants entre eux : processeur, RAM, cartes graphique et son.",
    example: "La carte mère est comme le squelette de l'ordinateur : tout y est branché et elle fait circuler les informations.",
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" }
  },
  {
    term: "Clavier",
    icon: "⌨️", color: "#f0f4ff",
    ar: "لوحة المفاتيح — أداة إدخال تُستخدم لكتابة البيانات في الحاسوب.",
    def: "Périphérique d'entrée qui permet de saisir des textes, chiffres et commandes dans l'ordinateur.",
    example: "Pour écrire un document dans Word, on utilise le clavier. La touche Entrée va à la ligne, Suppr efface.",
    activity: { id: "peje7efs326", title: "Manipulation du clavier" }
  },
  {
    term: "Clé USB",
    icon: "🔑", color: "#dcfce7",
    ar: "مفتاح USB — دعامة تخزين صغيرة تُوصَّل بمنفذ USB لنقل الملفات.",
    def: "Petit dispositif de stockage portable qui se branche sur un port USB. Permet de stocker et transporter des fichiers facilement.",
    example: "Tu enregistres ta présentation PowerPoint sur une clé USB pour la montrer sur l'ordinateur de ta classe.",
    activity: null
  },
  {
    term: "CPU",
    icon: "⚡", color: "#fef9c3",
    ar: "المعالج — دماغ الحاسوب الذي يُنفِّذ جميع العمليات الحسابية.",
    def: "Le processeur est le cerveau de l'ordinateur. Il exécute les calculs et traite les instructions des programmes.",
    example: "Un processeur à 3 GHz peut traiter 3 milliards d'opérations par seconde — c'est pour ça que ton ordi est rapide !",
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" }
  },

  // ── D ──
  {
    term: "Disque dur",
    icon: "💿", color: "#e0f2fe",
    ar: "القرص الصلب — وحدة التخزين الدائمة للملفات والبرامج في الحاسوب.",
    def: "Support de stockage permanent intégré à l'ordinateur. Il conserve tous tes fichiers et programmes même quand l'ordinateur est éteint.",
    example: "Ton disque dur de 500 Go peut stocker des milliers de photos, de musiques et de documents.",
    activity: null
  },
  {
    term: "Dossier",
    icon: "📁", color: "#fef3c7",
    ar: "المجلد — حاوية افتراضية لتنظيم الملفات على الحاسوب.",
    def: "Répertoire permettant d'organiser et ranger des fichiers. Un dossier peut contenir d'autres dossiers (sous-dossiers).",
    example: "Tu crées un dossier 'Collège' dans lequel tu mets un sous-dossier 'Informatique' pour ranger tes cours.",
    activity: null
  },
  {
    term: "Double-clic",
    icon: "🖱️", color: "#f3e8ff",
    ar: "النقر المزدوج — الضغط المتتالي على زر الفأرة مرتين بسرعة لفتح ملف أو برنامج.",
    def: "Action de cliquer deux fois rapidement sur le bouton gauche de la souris pour ouvrir un fichier ou un logiciel.",
    example: "Pour ouvrir un document Word, tu double-cliques sur son icône. Un seul clic ne fait que le sélectionner.",
    activity: null
  },

  // ── E ──
  {
    term: "E-mail",
    icon: "📧", color: "#dcfce7",
    ar: "البريد الإلكتروني — رسائل تُرسَل وتُستقبَل عبر الإنترنت.",
    def: "Message électronique envoyé et reçu via Internet. Aussi appelé courriel, mail ou courrier électronique.",
    example: "Tu envoies ton devoir à ton professeur par e-mail à l'adresse : prof.info@college.ma",
    activity: null
  },

  // ── F ──
  {
    term: "FAI",
    icon: "🌍", color: "#e0f2fe",
    ar: "مزوِّد خدمة الإنترنت — الشركة التي تمنحك الوصول إلى الإنترنت مقابل اشتراك.",
    def: "Fournisseur d'Accès Internet : entreprise qui te permet de te connecter à Internet via un abonnement.",
    example: "Maroc Telecom, Orange Maroc et Inwi sont des FAI au Maroc. Ils te fournissent la box et la connexion.",
    activity: null
  },
  {
    term: "Fichier",
    icon: "📄", color: "#f5f7ff",
    ar: "الملف — مجموعة بيانات مُحفوظة على الحاسوب بامتداد يحدد نوعها.",
    def: "Ensemble de données enregistrées sur le disque dur, identifiées par un nom et une extension (.docx, .jpg, .mp3…).",
    example: "Photo_vacances.jpg est un fichier image. Devoir_francais.docx est un fichier de traitement de texte.",
    activity: null
  },
  {
    term: "Firewall",
    icon: "🔥", color: "#fee2e2",
    ar: "جدار الحماية — برنامج يمنع التهديدات الخارجية من الوصول إلى حاسوبك.",
    def: "Logiciel ou matériel qui protège ton ordinateur des intrusions venant d'Internet. Il filtre les connexions entrantes et sortantes.",
    example: "Le firewall de Windows bloque les connexions suspectes automatiquement quand tu navigues sur Internet.",
    activity: null
  },

  // ── G ──
  {
    term: "Gravure",
    icon: "💿", color: "#fef9c3",
    ar: "الحرق — نسخ الملفات على أقراص CD أو DVD بواسطة جهاز حارق.",
    def: "Action d'enregistrer des fichiers sur un CD ou un DVD à l'aide d'un graveur.",
    example: "Pour conserver ton exposé sur CD, tu graves les fichiers avec un logiciel comme Windows Media Player ou Nero.",
    activity: null
  },

  // ── H ──
  {
    term: "Hardware",
    icon: "🖥️", color: "#f0f4ff",
    ar: "العتاد — الجزء المادي الملموس من الحاسوب (لوحة مفاتيح، شاشة، معالج…).",
    def: "Partie matérielle et physique de l'ordinateur : écran, clavier, souris, processeur, RAM, etc. S'oppose au software.",
    example: "Quand ton écran tombe en panne, c'est un problème hardware. Quand un logiciel plante, c'est software.",
    activity: { id: "p41irw7ik26", title: "Hardware vs Software" }
  },
  {
    term: "HTML",
    icon: "🌐", color: "#e0f2fe",
    ar: "HTML — لغة ترميز لإنشاء صفحات الويب على الإنترنت.",
    def: "Langage de programmation utilisé pour créer des pages web. Il structure le contenu grâce à des balises comme <titre> ou <paragraphe>.",
    example: "Le code <b>Bonjour</b> affiche le mot « Bonjour » en gras sur une page web.",
    activity: null
  },

  // ── I ──
  {
    term: "Icône",
    icon: "🖼️", color: "#f3e8ff",
    ar: "الأيقونة — صورة صغيرة تُمثِّل برنامجًا أو ملفًا أو دليلًا.",
    def: "Petit symbole graphique qui représente un fichier, dossier ou logiciel. Un clic ou double-clic dessus l'ouvre.",
    example: "L'icône bleue avec un W représente Microsoft Word. L'icône de la corbeille est une poubelle.",
    activity: null
  },
  {
    term: "Internet",
    icon: "🌍", color: "#dcfce7",
    ar: "الإنترنت — الشبكة العالمية التي تربط ملايين الحواسيب في جميع أنحاء العالم.",
    def: "Réseau mondial qui connecte des millions d'ordinateurs entre eux. Permet de consulter des sites, envoyer des e-mails, chatter…",
    example: "Tu utilises Internet pour chercher des informations sur Google, regarder des vidéos sur YouTube ou envoyer des messages.",
    activity: null
  },

  // ── L ──
  {
    term: "Logiciel",
    icon: "💻", color: "#e8eefe",
    ar: "البرنامج — مجموعة أوامر تُخبر الحاسوب بما يجب فعله.",
    def: "Programme informatique qui permet d'effectuer des tâches précises. Aussi appelé software ou application.",
    example: "Word est un logiciel de traitement de texte, Paint est un logiciel de dessin, Chrome est un logiciel navigateur.",
    activity: { id: "p1qwnccuc26", title: "Types de logiciels" }
  },

  // ── M ──
  {
    term: "Mémoire RAM",
    icon: "🧠", color: "#fef9c3",
    ar: "ذاكرة الوصول العشوائي — ذاكرة مؤقتة تُستخدَم أثناء تشغيل البرامج وتُمسح عند إغلاق الحاسوب.",
    def: "Mémoire vive qui stocke temporairement les données des programmes en cours d'utilisation. Elle se vide à l'extinction de l'ordinateur.",
    example: "Si ton ordinateur est lent quand tu ouvres beaucoup de programmes à la fois, c'est que la RAM est saturée.",
    activity: null
  },
  {
    term: "Modem",
    icon: "📶", color: "#f0fdf4",
    ar: "المودم — جهاز يحول الإشارات لتوصيل الحاسوب بالإنترنت.",
    def: "Appareil qui convertit le signal de ta ligne téléphonique ou câble en signal numérique pour connecter ton ordinateur à Internet.",
    example: "La box de ton FAI est en réalité un modem+routeur. Sans lui, tu ne peux pas te connecter à Internet.",
    activity: null
  },
  {
    term: "Mot de passe",
    icon: "🔐", color: "#fee2e2",
    ar: "كلمة المرور — رمز سري يحمي الوصول إلى حسابك أو حاسوبك.",
    def: "Suite de caractères secrète pour protéger l'accès à un compte ou un ordinateur. Il doit rester secret.",
    example: "Un bon mot de passe mélange lettres, chiffres et symboles : P@ss2024 est plus sûr que 12345.",
    activity: null
  },
  {
    term: "Moteur de recherche",
    icon: "🔍", color: "#e8eefe",
    ar: "محرك البحث — أداة تُساعدك على إيجاد المعلومات على الإنترنت.",
    def: "Outil en ligne qui permet de trouver des informations sur Internet en tapant des mots-clés.",
    example: "Tu tapes 'capital du Maroc' dans Google et il affiche des milliers de pages répondant à ta question.",
    activity: null
  },

  // ── N ──
  {
    term: "Navigateur",
    icon: "🧭", color: "#e0f2fe",
    ar: "متصفح الويب — برنامج يُستخدم لتصفح صفحات الإنترنت.",
    def: "Logiciel qui permet de visiter et afficher des pages web. Les plus connus sont Chrome, Firefox, Edge et Safari.",
    example: "Tu ouvres Firefox, tu tapes www.youtube.com dans la barre d'adresse et le navigateur affiche la page.",
    activity: null
  },

  // ── O ──
  {
    term: "Octet",
    icon: "🔢", color: "#f3e8ff",
    ar: "البايت — وحدة قياس حجم البيانات الرقمية تساوي 8 بِتّات.",
    def: "Unité de mesure de la taille d'un fichier. 1 octet = 8 bits. On compte en Ko (kilo-octet), Mo (méga), Go (giga).",
    example: "Une photo vaut environ 3 Mo (3 millions d'octets). Une chanson MP3 environ 4 Mo. Un film environ 1,5 Go.",
    activity: null
  },
  {
    term: "Ordinateur",
    icon: "🖥️", color: "#f0f4ff",
    ar: "الحاسوب — جهاز إلكتروني يعالج البيانات وينفذ المهام وفق برامج مُبرمجة.",
    def: "Machine électronique qui traite des informations selon des instructions (programmes). Il peut calculer, stocker, afficher et communiquer.",
    example: "Il existe des ordinateurs de bureau (UC + écran + clavier), des ordinateurs portables et des tablettes.",
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" }
  },
  {
    term: "OS",
    icon: "⚙️", color: "#fef3c7",
    ar: "نظام التشغيل — البرنامج الأساسي الذي يُشغِّل الحاسوب ويتحكم في كل مكوناته.",
    def: "Système d'exploitation : premier logiciel de l'ordinateur, il gère le matériel et fait fonctionner tous les autres programmes.",
    example: "Windows, macOS et Linux sont des systèmes d'exploitation. Sans eux, l'ordinateur ne peut rien faire.",
    activity: { id: "peje7efs326", title: "Systèmes d'exploitation" }
  },

  // ── P ──
  {
    term: "Périphérique",
    icon: "🖨️", color: "#f0fdf4",
    ar: "الطرفية — أي جهاز يُوصَّل بالحاسوب من الخارج (طابعة، ماسح، فأرة…).",
    def: "Matériel externe connecté à l'unité centrale. Il peut être d'entrée (clavier, souris) ou de sortie (écran, imprimante).",
    example: "La souris est un périphérique d'entrée. L'imprimante et les haut-parleurs sont des périphériques de sortie.",
    activity: null
  },
  {
    term: "Pixel",
    icon: "🔲", color: "#f3e8ff",
    ar: "البِكسل — أصغر نقطة ملونة تتكون منها الصورة الرقمية على الشاشة.",
    def: "Plus petit élément d'une image numérique. Un écran est composé de millions de pixels formant l'image.",
    example: "Un écran Full HD (1920×1080) contient plus de 2 millions de pixels. Plus il y en a, plus l'image est nette.",
    activity: null
  },
  {
    term: "Processeur",
    icon: "⚡", color: "#fef9c3",
    ar: "المعالج — الدماغ الإلكتروني للحاسوب الذي ينفذ التعليمات البرمجية.",
    def: "Cerveau de l'ordinateur qui exécute les calculs. Sa vitesse se mesure en GHz (gigahertz).",
    example: "Un processeur Intel Core i5 à 2,5 GHz peut effectuer 2,5 milliards de cycles de calcul par seconde.",
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" }
  },

  // ── R ──
  {
    term: "RAM",
    icon: "🧠", color: "#fef9c3",
    ar: "ذاكرة الوصول العشوائي — انظر 'مémoire RAM'.",
    def: "Voir Mémoire RAM. Random Access Memory : mémoire vive temporaire de l'ordinateur.",
    example: "Un ordinateur avec 8 Go de RAM peut faire tourner plusieurs programmes simultanément sans ralentir.",
    activity: null
  },
  {
    term: "Réseau",
    icon: "🕸️", color: "#e0f2fe",
    ar: "الشبكة — مجموعة حواسيب مترابطة لتبادل الملفات والمعلومات.",
    def: "Ensemble d'ordinateurs reliés entre eux pour partager des ressources (fichiers, imprimantes, connexion Internet).",
    example: "Dans un collège, tous les ordinateurs de la salle informatique sont reliés en réseau pour partager Internet.",
    activity: null
  },

  // ── S ──
  {
    term: "Scanner",
    icon: "📠", color: "#f0fdf4",
    ar: "الماسح الضوئي — جهاز يحول الوثائق الورقية إلى صور رقمية.",
    def: "Périphérique d'entrée qui numérise un document papier pour en créer une image numérique.",
    example: "Tu scannérises ton dessin pour ensuite le modifier avec un logiciel de traitement d'image sur l'ordinateur.",
    activity: null
  },
  {
    term: "Serveur",
    icon: "🖧", color: "#e8eefe",
    ar: "الخادم — حاسوب قوي يُخزِّن المعلومات ويُقدِّم الخدمات للأجهزة الأخرى في الشبكة.",
    def: "Ordinateur puissant qui stocke des données et répond aux demandes d'autres ordinateurs (clients) sur un réseau.",
    example: "Quand tu visites YouTube, ton navigateur demande des vidéos à un serveur de Google qui te les envoie.",
    activity: null
  },
  {
    term: "Software",
    icon: "💾", color: "#e8eefe",
    ar: "البرمجيات — الجانب غير المادي من الحاسوب المتمثل في البرامج والأنظمة.",
    def: "Partie logicielle de l'ordinateur : systèmes d'exploitation, applications, jeux… S'oppose au hardware.",
    example: "Windows, Word et Fortnite sont des software. L'écran, la souris et la RAM sont du hardware.",
    activity: null
  },
  {
    term: "Spam",
    icon: "📩", color: "#fee2e2",
    ar: "البريد المزعج — رسائل إلكترونية غير مرغوب فيها تُرسَل بكميات كبيرة.",
    def: "Courrier électronique non sollicité, envoyé en masse, à visée publicitaire ou malveillante.",
    example: "Si tu reçois des centaines de mails de publicité sans les avoir demandés, c'est du spam. Utilise un anti-spam.",
    activity: null
  },

  // ── T ──
  {
    term: "Tableur",
    icon: "📊", color: "#dcfce7",
    ar: "جدول البيانات — برنامج لإنشاء جداول وإجراء الحسابات ورسم المخططات.",
    def: "Logiciel permettant de créer des tableaux avec des calculs automatiques et des graphiques. Ex : Microsoft Excel.",
    example: "Tu utilises Excel pour calculer automatiquement la moyenne de tes notes en entrant une formule =MOYENNE(…)",
    activity: null
  },
  {
    term: "Télécharger",
    icon: "⬇️", color: "#f0fdf4",
    ar: "التنزيل — نقل ملف من الإنترنت أو جهاز بعيد إلى حاسوبك.",
    def: "Action de copier un fichier depuis un ordinateur distant (Internet) vers son propre ordinateur.",
    example: "Tu télécharges un jeu depuis le site officiel : le fichier .exe s'enregistre sur ton disque dur.",
    activity: null
  },
  {
    term: "Traitement de texte",
    icon: "📝", color: "#e8eefe",
    ar: "معالج النصوص — برنامج لكتابة الوثائق وتنسيقها (مثل Microsoft Word).",
    def: "Logiciel permettant de rédiger, corriger et mettre en forme des documents textuels.",
    example: "Tu utilises Word pour taper ton exposé, changer la police, mettre du gras, ajouter des images et imprimer.",
    activity: { id: "p1qwnccuc26", title: "Traitement de texte" }
  },

  // ── U ──
  {
    term: "USB",
    icon: "🔌", color: "#fef3c7",
    ar: "USB — منفذ قياسي لتوصيل الأجهزة الطرفية بالحاسوب.",
    def: "Port standard pour connecter des périphériques à l'ordinateur : clé USB, souris, imprimante, disque dur externe…",
    example: "Tu branches ta clé USB dans le port USB de l'ordinateur et elle est reconnue automatiquement (plug-and-play).",
    activity: null
  },

  // ── V ──
  {
    term: "Virus",
    icon: "🦠", color: "#fee2e2",
    ar: "الفيروس — برنامج خبيث يُلحق الأضرار بالحاسوب ويتكاثر تلقائيًا.",
    def: "Programme malveillant qui s'installe à ton insu et peut détruire tes fichiers ou voler tes données.",
    example: "Si tu ouvres une pièce jointe suspecte, un virus peut chiffrer tous tes fichiers. Un antivirus l'aurait bloqué.",
    activity: null
  },

  // ── W ──
  {
    term: "WiFi",
    icon: "📡", color: "#f0fdf4",
    ar: "واي فاي — تقنية اتصال لاسلكي تُتيح الوصول إلى الإنترنت عبر موجات الراديو.",
    def: "Technologie de connexion sans fil à Internet ou à un réseau local, via des ondes radio.",
    example: "Ton téléphone se connecte au WiFi de la maison pour accéder à Internet sans câble.",
    activity: null
  },
  {
    term: "Windows",
    icon: "🪟", color: "#e0f2fe",
    ar: "ويندوز — نظام تشغيل تطوَّر بواسطة شركة مايكروسوفت وهو الأكثر انتشارًا عالميًا.",
    def: "Système d'exploitation développé par Microsoft. C'est le plus répandu dans le monde sur les ordinateurs personnels.",
    example: "Ton ordinateur utilise probablement Windows 10 ou Windows 11. On reconnaît le logo : 4 carrés colorés.",
    activity: { id: "peje7efs326", title: "Interface Windows" }
  },
  {
    term: "WWW",
    icon: "🌐", color: "#f3e8ff",
    ar: "الشبكة العنكبوتية — مجموعة الصفحات والمواقع المنشورة على الإنترنت.",
    def: "World Wide Web : ensemble des pages et sites accessibles sur Internet via un navigateur.",
    example: "Quand tu tapes www.google.com, le www indique que tu accèdes au Web via le protocole HTTP.",
    activity: null
  },

];
