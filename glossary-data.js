/**
 * glossary-data.js — Didacticiel
 * Données du glossaire informatique (collège Maroc).
 *
 * Chaque entrée :
 *   term      – nom du terme (FR)
 *   img       – (optionnel) URL de l'image ou requête de recherche
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
    img: "wp:IP address",
    icon: "🌐", color: "#dbeafe",
    ar: "عنوان IP — رقم فريد يُعطى لكل جهاز متصل بالإنترنت.",
    def: "Numéro unique attribué à chaque ordinateur sur un réseau. C'est comme l'adresse postale de ton ordinateur sur Internet.",
    example: "Quand tu te connectes à un site, ton ordinateur utilise son adresse IP pour envoyer et recevoir les données. Exemple : 192.168.1.1",
    activity: { id: "p41irw7ik26", title: "Composants réseau" }
  },
  {
    term: "Adresse URL",
    img: "wp:URL",
    icon: "🔗", color: "#e0f2fe",
    ar: "عنوان URL — الرابط الفريد لصفحة ويب على الإنترنت.",
    def: "Adresse unique d'une page web sur Internet. Elle s'écrit dans la barre d'adresse du navigateur.",
    example: "https://www.google.com est une adresse URL. Elle commence toujours par http:// ou https://",
    activity: null
  },
  {
    term: "ADSL",
    img: "wp:DSL modem",
    icon: "📡", color: "#f0fdf4",
    ar: "ADSL — تقنية توصيل بالإنترنت عبر خط الهاتف بسرعة عالية.",
    def: "Technologie de connexion Internet haut débit via la ligne téléphonique. Le débit descendant (téléchargement) est plus rapide que le débit montant.",
    example: "Grâce à l'ADSL, tu peux regarder des vidéos en ligne sans trop d'interruptions depuis chez toi.",
    activity: null
  },
  {
    term: "Antivirus",
    img: "wp:Malware",
    icon: "🛡️", color: "#fef9c3",
    ar: "مضاد الفيروسات — برنامج يحمي الحاسوب من الفيروسات والبرامج الضارة.",
    def: "Logiciel qui surveille et protège ton ordinateur contre les virus et programmes malveillants. Il doit être mis à jour régulièrement.",
    example: "Avant d'ouvrir une clé USB inconnue, ton antivirus la scanne automatiquement pour détecter les virus.",
    activity: null
  },
  {
    term: "Application",
    img: "wp:Mobile app",
    icon: "📱", color: "#f3e8ff",
    ar: "تطبيق — برنامج يُشغَّل لتنفيذ مهمة محددة على الحاسوب.",
    def: "Programme informatique conçu pour réaliser une tâche précise. On dit aussi logiciel ou programme.",
    example: "Word est une application pour écrire des textes, Paint est une application pour dessiner.",
    activity: { id: "peje7efs326", title: "Types d'applications" }
  },
  {
    term: "Arborescence",
    img: "computer folders hierarchy",
    icon: "🌳", color: "#dcfce7",
    ar: "شجرة الملفات — التنظيم الهرمي للمجلدات والملفات على القرص الصلب.",
    def: "Organisation hiérarchique des dossiers et fichiers sur un ordinateur, comme un arbre avec des branches.",
    example: "Sur ton ordinateur : Disque C → Mes Documents → Collège → Informatique → Cours1.docx",
    activity: null
  },

  // ── B ──
  {
    term: "Backup",
    img: "wp:USB flash drive",
    icon: "💾", color: "#fef3c7",
    ar: "نسخة احتياطية — نسخ الملفات على دعامة خارجية حفاظًا عليها.",
    def: "Copie de sauvegarde de tes fichiers sur un support externe (clé USB, CD, disque dur externe) pour ne pas les perdre.",
    example: "Avant de formater un ordinateur, on fait un backup de tous ses fichiers importants sur une clé USB.",
    activity: null
  },
  {
    term: "Bande passante",
    img: "wp:Data-rate units",
    icon: "📶", color: "#e0f2fe",
    ar: "عرض النطاق الترددي — سرعة نقل البيانات عبر الشبكة.",
    def: "Vitesse à laquelle des données peuvent être transférées sur un réseau. Elle se mesure en Kbits/s ou Mbits/s.",
    example: "Si ta bande passante est de 20 Mbits/s, tu peux télécharger un film de 1 Go en environ 7 minutes.",
    activity: null
  },
  {
    term: "Bug",
    img: "wp:Software bug",
    icon: "🐛", color: "#fee2e2",
    ar: "خطأ برمجي — عطل في البرنامج ناتج عن خطأ في الكود.",
    def: "Erreur de programmation qui provoque un mauvais fonctionnement d'un logiciel. L'utilisateur ne peut pas le corriger lui-même.",
    example: "Quand ton jeu plante sans raison, c'est souvent à cause d'un bug. La société publie un correctif pour le réparer.",
    activity: null
  },
  {
    term: "Bureau",
    img: "wp:Desktop computer",
    icon: "🖥️", color: "#f0fdf4",
    ar: "سطح المكتب — الشاشة الرئيسية التي تظهر عند تشغيل الحاسوب.",
    def: "Écran principal qui s'affiche au démarrage de l'ordinateur, avec les icônes et l'arrière-plan.",
    example: "Sur le bureau de ton ordinateur, tu trouves les icônes de tes logiciels et un raccourci vers la corbeille.",
    activity: null
  },
  {
    term: "Bureautique",
    img: "wp:LibreOffice",
    icon: "📄", color: "#e8eefe",
    ar: "البرمجيات المكتبية — مجموعة التطبيقات المستخدمة في الأعمال الإدارية.",
    def: "Ensemble des logiciels utilisés pour les travaux de bureau : traitement de texte, tableur, base de données.",
    example: "Microsoft Office (Word, Excel, PowerPoint) est une suite bureautique très répandue.",
    activity: null
  },

  // ── C ──
  {
    term: "Carte mère",
    img: "wp:Motherboard",
    icon: "🔌", color: "#fef3c7",
    ar: "اللوحة الأم — الجزء المركزي في الحاسوب الذي يربط كل المكونات.",
    def: "Pièce centrale de l'ordinateur qui relie tous les composants entre eux : processeur, RAM, cartes graphique et son.",
    example: "La carte mère est comme le squelette de l'ordinateur : tout y est branché et elle fait circuler les informations.",
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" }
  },
  {
    term: "Clavier",
    img: "wp:Computer keyboard",
    icon: "⌨️", color: "#f0f4ff",
    ar: "لوحة المفاتيح — أداة إدخال تُستخدم لكتابة البيانات في الحاسوب.",
    def: "Périphérique d'entrée qui permet de saisir des textes, chiffres et commandes dans l'ordinateur.",
    example: "Pour écrire un document dans Word, on utilise le clavier. La touche Entrée va à la ligne, Suppr efface.",
    activity: { id: "peje7efs326", title: "Manipulation du clavier" }
  },
  {
    term: "Clé USB",
    img: "wp:USB flash drive",
    icon: "🔑", color: "#dcfce7",
    ar: "مفتاح USB — دعامة تخزين صغيرة تُوصَّل بمنفذ USB لنقل الملفات.",
    def: "Petit dispositif de stockage portable qui se branche sur un port USB. Permet de stocker et transporter des fichiers facilement.",
    example: "Tu enregistres ta présentation PowerPoint sur une clé USB pour la montrer sur l'ordinateur de ta classe.",
    activity: null
  },
  {
    term: "CPU",
    img: "wp:Microprocessor",
    icon: "⚡", color: "#fef9c3",
    ar: "المعالج — دماغ الحاسوب الذي يُنفِّذ جميع العمليات الحسابية.",
    def: "Le processeur est le cerveau de l'ordinateur. Il exécute les calculs et traite les instructions des programmes.",
    example: "Un processeur à 3 GHz peut traiter 3 milliards d'opérations par seconde — c'est pour ça que ton ordi est rapide !",
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" }
  },

  // ── D ──
  {
    term: "Disque dur",
    img: "wp:Hard disk drive",
    icon: "💿", color: "#e0f2fe",
    ar: "القرص الصلب — وحدة التخزين الدائمة للملفات والبرامج في الحاسوب.",
    def: "Support de stockage permanent intégré à l'ordinateur. Il conserve tous tes fichiers et programmes même quand l'ordinateur est éteint.",
    example: "Ton disque dur de 500 Go peut stocker des milliers de photos, de musiques et de documents.",
    activity: null
  },
  {
    term: "Dossier",
    img: "wp:Directory (computing)",
    icon: "📁", color: "#fef3c7",
    ar: "المجلد — حاوية افتراضية لتنظيم الملفات على الحاسوب.",
    def: "Répertoire permettant d'organiser et ranger des fichiers. Un dossier peut contenir d'autres dossiers (sous-dossiers).",
    example: "Tu crées un dossier 'Collège' dans lequel tu mets un sous-dossier 'Informatique' pour ranger tes cours.",
    activity: null
  },
  {
    term: "Double-clic",
    img: "wp:Computer mouse",
    icon: "🖱️", color: "#f3e8ff",
    ar: "النقر المزدوج — الضغط المتتالي على زر الفأرة مرتين بسرعة لفتح ملف أو برنامج.",
    def: "Action de cliquer deux fois rapidement sur le bouton gauche de la souris pour ouvrir un fichier ou un logiciel.",
    example: "Pour ouvrir un document Word, tu double-cliques sur son icône. Un seul clic ne fait que le sélectionner.",
    activity: null
  },

  // ── E ──
  {
    term: "Écran",
    img: "wp:Computer monitor",
    icon: "🖥️", color: "#f0f4ff",
    ar: "الشاشة — جهاز إخراج يعرض المعلومات والصور من الحاسوب.",
    def: "Périphérique de sortie qui affiche les informations traitées par l'ordinateur sous forme visuelle.",
    example: "Un écran Full HD affiche 1920×1080 pixels. Plus la résolution est haute, plus l'image est nette.",
    activity: null
  },
  {
    term: "E-mail",
    img: "wp:Email",
    icon: "📧", color: "#e0f2fe",
    ar: "البريد الإلكتروني — رسالة رقمية تُرسَل عبر الإنترنت.",
    def: "Courrier électronique envoyé et reçu via Internet. Il permet d'envoyer des messages et des fichiers à travers le monde.",
    example: "Tu envoies un e-mail à ton professeur avec ton devoir en pièce jointe. Il le reçoit en quelques secondes.",
    activity: null
  },

  // ── F ──
  {
    term: "Fichier",
    img: "wp:Computer file",
    icon: "📄", color: "#fef3c7",
    ar: "الملف — وثيقة رقمية مخزنة على الحاسوب تحمل اسمًا وامتدادًا.",
    def: "Ensemble de données stockées sous un nom sur un support informatique. Chaque fichier a une extension (.docx, .jpg, .mp3…).",
    example: "Photo.jpg est un fichier image, Cours.docx est un fichier Word, Chanson.mp3 est un fichier audio.",
    activity: null
  },
  {
    term: "Firewall",
    img: "wp:Firewall (computing)",
    icon: "🔥", color: "#fee2e2",
    ar: "جدار الحماية — نظام يراقب حركة البيانات ويمنع الوصول غير المصرح به.",
    def: "Logiciel ou matériel qui filtre les connexions réseau pour protéger l'ordinateur des intrusions extérieures.",
    example: "Le firewall de Windows bloque automatiquement les connexions suspectes venant d'Internet.",
    activity: null
  },

  // ── G ──
  {
    term: "Gigaoctet",
    img: "wp:Gigabyte",
    icon: "💾", color: "#dcfce7",
    ar: "غيغابايت — وحدة قياس سعة التخزين تعادل مليار بايت.",
    def: "Unité de mesure de la capacité de stockage. 1 Go = 1 000 Mo. Un film HD occupe environ 4 Go.",
    example: "Ta clé USB de 8 Go peut contenir environ 2 000 photos de 4 mégapixels.",
    activity: null
  },

  // ── H ──
  {
    term: "Hardware",
    img: "wp:Computer hardware",
    icon: "🔧", color: "#fef3c7",
    ar: "العتاد — المكونات المادية الملموسة للحاسوب.",
    def: "Ensemble des composants physiques d'un ordinateur : processeur, RAM, disque dur, écran, clavier… S'oppose au software.",
    example: "L'écran, la souris et la carte graphique sont du hardware. Windows et Word sont du software.",
    activity: null
  },

  // ── I ──
  {
    term: "Icône",
    img: "wp:Icon (computing)",
    icon: "🔷", color: "#e0f2fe",
    ar: "الأيقونة — صورة صغيرة تمثل برنامجًا أو ملفًا على شاشة الحاسوب.",
    def: "Petite image représentant un fichier, un dossier ou un programme. On double-clique dessus pour l'ouvrir.",
    example: "L'icône de la corbeille ressemble à une poubelle. Celle de Word ressemble à un W bleu.",
    activity: null
  },
  {
    term: "Imprimante",
    img: "wp:Printer (computing)",
    icon: "🖨️", color: "#f0fdf4",
    ar: "الطابعة — جهاز طرفي يطبع الوثائق الرقمية على الورق.",
    def: "Périphérique de sortie qui reproduit sur papier les documents créés sur l'ordinateur.",
    example: "Tu imprimes ton exposé en couleur grâce à l'imprimante de la salle informatique.",
    activity: null
  },
  {
    term: "Internet",
    img: "wp:Internet",
    icon: "🌍", color: "#dbeafe",
    ar: "الإنترنت — شبكة عالمية تربط ملايين الحواسيب حول العالم.",
    def: "Réseau mondial d'ordinateurs interconnectés permettant d'échanger des informations à travers le monde entier.",
    example: "Grâce à Internet, tu peux envoyer un e-mail à quelqu'un en Australie en moins d'une seconde.",
    activity: null
  },

  // ── L ──
  {
    term: "Logiciel",
    img: "wp:Software",
    icon: "💻", color: "#f3e8ff",
    ar: "البرنامج — مجموعة تعليمات مبرمجة تُنفَّذ على الحاسوب لأداء مهام محددة.",
    def: "Programme informatique qui permet à l'ordinateur d'effectuer des tâches précises. Synonyme de software ou application.",
    example: "VLC est un logiciel pour lire des vidéos. Firefox est un logiciel pour naviguer sur Internet.",
    activity: null
  },

  // ── M ──
  {
    term: "Mémoire RAM",
    img: "wp:Random-access memory",
    icon: "🧠", color: "#fef9c3",
    ar: "ذاكرة الوصول العشوائي — ذاكرة مؤقتة تُخزِّن البيانات أثناء عمل الحاسوب.",
    def: "Mémoire temporaire de l'ordinateur qui stocke les données des programmes en cours d'utilisation. Elle s'efface à l'extinction.",
    example: "Avec 4 Go de RAM, tu peux ouvrir Word, un navigateur et de la musique en même temps sans trop ralentir.",
    activity: null
  },
  {
    term: "Mot de passe",
    img: "wp:Password",
    icon: "🔐", color: "#fef3c7",
    ar: "كلمة المرور — رمز سري يُستخدم للتحقق من هوية المستخدم.",
    def: "Code secret permettant de protéger l'accès à un compte ou un appareil. Il doit être long et complexe.",
    example: "Un bon mot de passe mélange lettres, chiffres et symboles : 'T@blette2024!' est bien meilleur que '1234'.",
    activity: null
  },
  {
    term: "Multimédia",
    img: "wp:Multimedia",
    icon: "🎬", color: "#f3e8ff",
    ar: "الوسائط المتعددة — مزيج من النصوص والصور والصوت والفيديو في محتوى رقمي.",
    def: "Combinaison de plusieurs types de médias (texte, image, son, vidéo, animation) dans un même support numérique.",
    example: "Un exposé multimédia contient du texte, des photos, une vidéo et peut-être de la musique de fond.",
    activity: null
  },

  // ── N ──
  {
    term: "Navigateur",
    img: "wp:Firefox",
    icon: "🧭", color: "#e0f2fe",
    ar: "متصفح الإنترنت — برنامج للتنقل بين صفحات الويب.",
    def: "Logiciel permettant d'accéder aux sites web et de naviguer sur Internet. Ex : Chrome, Firefox, Edge.",
    example: "Tu ouvres Chrome (navigateur), tu tapes www.wikipedia.org dans la barre d'adresse et la page s'affiche.",
    activity: null
  },
  {
    term: "Numérique",
    img: "wp:Binary number",
    icon: "🔢", color: "#dbeafe",
    ar: "الرقمي — كل ما يُمثَّل بأرقام ثنائية (0 و1) في الأنظمة الإلكترونية.",
    def: "Qui utilise des données représentées par des chiffres binaires (0 et 1). S'oppose à analogique.",
    example: "Une photo numérique est stockée en 0 et 1 sur ton téléphone, contrairement à une photo argentique.",
    activity: null
  },

  // ── O ──
  {
    term: "Ordinateur",
    img: "wp:Desktop computer",
    icon: "🖥️", color: "#f0f4ff",
    ar: "الحاسوب — جهاز إلكتروني يعالج البيانات وينفذ المهام وفق برامج مُبرمجة.",
    def: "Machine électronique qui traite des informations selon des instructions (programmes). Il peut calculer, stocker, afficher et communiquer.",
    example: "Il existe des ordinateurs de bureau (UC + écran + clavier), des ordinateurs portables et des tablettes.",
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" }
  },
  {
    term: "OS",
    img: "wp:Operating system",
    icon: "⚙️", color: "#fef3c7",
    ar: "نظام التشغيل — البرنامج الأساسي الذي يُشغِّل الحاسوب ويتحكم في كل مكوناته.",
    def: "Système d'exploitation : premier logiciel de l'ordinateur, il gère le matériel et fait fonctionner tous les autres programmes.",
    example: "Windows, macOS et Linux sont des systèmes d'exploitation. Sans eux, l'ordinateur ne peut rien faire.",
    activity: { id: "peje7efs326", title: "Systèmes d'exploitation" }
  },

  // ── P ──
  {
    term: "Périphérique",
    img: "wp:Peripheral",
    icon: "🖨️", color: "#f0fdf4",
    ar: "الطرفية — أي جهاز يُوصَّل بالحاسوب من الخارج (طابعة، ماسح، فأرة…).",
    def: "Matériel externe connecté à l'unité centrale. Il peut être d'entrée (clavier, souris) ou de sortie (écran, imprimante).",
    example: "La souris est un périphérique d'entrée. L'imprimante et les haut-parleurs sont des périphériques de sortie.",
    activity: null
  },
  {
    term: "Pixel",
    img: "wp:Pixel",
    icon: "🔲", color: "#f3e8ff",
    ar: "البِكسل — أصغر نقطة ملونة تتكون منها الصورة الرقمية على الشاشة.",
    def: "Plus petit élément d'une image numérique. Un écran est composé de millions de pixels formant l'image.",
    example: "Un écran Full HD (1920×1080) contient plus de 2 millions de pixels. Plus il y en a, plus l'image est nette.",
    activity: null
  },
  {
    term: "Processeur",
    img: "wp:Microprocessor",
    icon: "⚡", color: "#fef9c3",
    ar: "المعالج — الدماغ الإلكتروني للحاسوب الذي ينفذ التعليمات البرمجية.",
    def: "Cerveau de l'ordinateur qui exécute les calculs. Sa vitesse se mesure en GHz (gigahertz).",
    example: "Un processeur Intel Core i5 à 2,5 GHz peut effectuer 2,5 milliards de cycles de calcul par seconde.",
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" }
  },

  // ── R ──
  {
    term: "RAM",
    img: "wp:Random-access memory",
    icon: "🧠", color: "#fef9c3",
    ar: "ذاكرة الوصول العشوائي — انظر 'مémoire RAM'.",
    def: "Voir Mémoire RAM. Random Access Memory : mémoire vive temporaire de l'ordinateur.",
    example: "Un ordinateur avec 8 Go de RAM peut faire tourner plusieurs programmes simultanément sans ralentir.",
    activity: null
  },
  {
    term: "Réseau",
    img: "wp:Computer network",
    icon: "🕸️", color: "#e0f2fe",
    ar: "الشبكة — مجموعة حواسيب مترابطة لتبادل الملفات والمعلومات.",
    def: "Ensemble d'ordinateurs reliés entre eux pour partager des ressources (fichiers, imprimantes, connexion Internet).",
    example: "Dans un collège, tous les ordinateurs de la salle informatique sont reliés en réseau pour partager Internet.",
    activity: null
  },

  // ── S ──
  {
    term: "Scanner",
    img: "wp:Image scanner",
    icon: "📠", color: "#f0fdf4",
    ar: "الماسح الضوئي — جهاز يحول الوثائق الورقية إلى صور رقمية.",
    def: "Périphérique d'entrée qui numérise un document papier pour en créer une image numérique.",
    example: "Tu scannérises ton dessin pour ensuite le modifier avec un logiciel de traitement d'image sur l'ordinateur.",
    activity: null
  },
  {
    term: "Serveur",
    img: "wp:Server (computing)",
    icon: "🖧", color: "#e8eefe",
    ar: "الخادم — حاسوب قوي يُخزِّن المعلومات ويُقدِّم الخدمات للأجهزة الأخرى في الشبكة.",
    def: "Ordinateur puissant qui stocke des données et répond aux demandes d'autres ordinateurs (clients) sur un réseau.",
    example: "Quand tu visites YouTube, ton navigateur demande des vidéos à un serveur de Google qui te les envoie.",
    activity: null
  },
  {
    term: "Software",
    img: "wp:Software",
    icon: "💾", color: "#e8eefe",
    ar: "البرمجيات — الجانب غير المادي من الحاسوب المتمثل في البرامج والأنظمة.",
    def: "Partie logicielle de l'ordinateur : systèmes d'exploitation, applications, jeux… S'oppose au hardware.",
    example: "Windows, Word et Fortnite sont des software. L'écran, la souris et la RAM sont du hardware.",
    activity: null
  },
  {
    term: "Spam",
    img: "wp:Email spam",
    icon: "📩", color: "#fee2e2",
    ar: "البريد المزعج — رسائل إلكترونية غير مرغوب فيها تُرسَل بكميات كبيرة.",
    def: "Courrier électronique non sollicité, envoyé en masse, à visée publicitaire ou malveillante.",
    example: "Si tu reçois des centaines de mails de publicité sans les avoir demandés, c'est du spam. Utilise un anti-spam.",
    activity: null
  },

  // ── T ──
  {
    term: "Tableur",
    img: "wp:Spreadsheet",
    icon: "📊", color: "#dcfce7",
    ar: "جدول البيانات — برنامج لإنشاء جداول وإجراء الحسابات ورسم المخططات.",
    def: "Logiciel permettant de créer des tableaux avec des calculs automatiques et des graphiques. Ex : Microsoft Excel.",
    example: "Tu utilises Excel pour calculer automatiquement la moyenne de tes notes en entrant une formule =MOYENNE(…)",
    activity: null
  },
  {
    term: "Télécharger",
    img: "wp:Download",
    icon: "⬇️", color: "#f0fdf4",
    ar: "التنزيل — نقل ملف من الإنترنت أو جهاز بعيد إلى حاسوبك.",
    def: "Action de copier un fichier depuis un ordinateur distant (Internet) vers son propre ordinateur.",
    example: "Tu télécharges un jeu depuis le site officiel : le fichier .exe s'enregistre sur ton disque dur.",
    activity: null
  },
  {
    term: "Traitement de texte",
    img: "wp:LibreOffice Writer",
    icon: "📝", color: "#e8eefe",
    ar: "معالج النصوص — برنامج لكتابة الوثائق وتنسيقها (مثل Microsoft Word).",
    def: "Logiciel permettant de rédiger, corriger et mettre en forme des documents textuels.",
    example: "Tu utilises Word pour taper ton exposé, changer la police, mettre du gras, ajouter des images et imprimer.",
    activity: { id: "p1qwnccuc26", title: "Traitement de texte" }
  },

  // ── U ──
  {
    term: "USB",
    img: "wp:USB flash drive",
    icon: "🔌", color: "#fef3c7",
    ar: "USB — منفذ قياسي لتوصيل الأجهزة الطرفية بالحاسوب.",
    def: "Port standard pour connecter des périphériques à l'ordinateur : clé USB, souris, imprimante, disque dur externe…",
    example: "Tu branches ta clé USB dans le port USB de l'ordinateur et elle est reconnue automatiquement (plug-and-play).",
    activity: null
  },

  // ── V ──
  {
    term: "Virus",
    img: "wp:Computer virus",
    icon: "🦠", color: "#fee2e2",
    ar: "الفيروس — برنامج خبيث يُلحق الأضرار بالحاسوب ويتكاثر تلقائيًا.",
    def: "Programme malveillant qui s'installe à ton insu et peut détruire tes fichiers ou voler tes données.",
    example: "Si tu ouvres une pièce jointe suspecte, un virus peut chiffrer tous tes fichiers. Un antivirus l'aurait bloqué.",
    activity: null
  },

  // ── W ──
  {
    term: "WiFi",
    img: "wp:Wi-Fi",
    icon: "📡", color: "#f0fdf4",
    ar: "واي فاي — تقنية اتصال لاسلكي تُتيح الوصول إلى الإنترنت عبر موجات الراديو.",
    def: "Technologie de connexion sans fil à Internet ou à un réseau local, via des ondes radio.",
    example: "Ton téléphone se connecte au WiFi de la maison pour accéder à Internet sans câble.",
    activity: null
  },
  {
    term: "Windows",
    img: "wp:Microsoft Windows",
    icon: "🪟", color: "#e0f2fe",
    ar: "ويندوز — نظام تشغيل تطوَّر بواسطة شركة مايكروسوفت وهو الأكثر انتشارًا عالميًا.",
    def: "Système d'exploitation développé par Microsoft. C'est le plus répandu dans le monde sur les ordinateurs personnels.",
    example: "Ton ordinateur utilise probablement Windows 10 ou Windows 11. On reconnaît le logo : 4 carrés colorés.",
    activity: { id: "peje7efs326", title: "Interface Windows" }
  },
  {
    term: "WWW",
    img: "wp:World Wide Web",
    icon: "🌐", color: "#f3e8ff",
    ar: "الشبكة العنكبوتية — مجموعة الصفحات والمواقع المنشورة على الإنترنت.",
    def: "World Wide Web : ensemble des pages et sites accessibles sur Internet via un navigateur.",
    example: "Quand tu tapes www.google.com, le www indique que tu accèdes au Web via le protocole HTTP.",
    activity: null
  },

];