/**
 * glossary-data.js — Didacticiel
 * Données du glossaire informatique (collège Maroc).
 *
 * Chaque entrée :
 * term      – nom du terme (FR)
 * img       – (optionnel) URL de l'image ou requête de recherche
 * icon      – emoji représentatif
 * color     – couleur de fond de l'icône
 * ar        – traduction/explication courte en arabe
 * def       – définition simple en français (max 2 phrases)
 * example   – exemple concret pour un élève de 12 ans
 * activity  – (optionnel) { id: "CODE_LA", title: "Nom activité" }
 * id = code LearningApps OU URL complète
 * svg       – (optionnel) Chaîne de caractères SVG inline pour illustration didactique
 *
 * Pour ajouter un terme : copiez un bloc existant et renseignez les champs.
 */

const GLOSSARY = [

  // ── A ──
  {
    term: "Adresse IP",
    img: "wp:IP address",
    icon: "🌐", 
    ar: "عنوان IP — رقم فريد يُعطى لكل جهاز متصل بالإنترنت.",
    def: "Numéro unique attribué à chaque ordinateur sur un réseau. C'est comme l'adresse postale de ton ordinateur sur Internet.",
    example: "Quand tu te connectes à un site, ton ordinateur utilise son adresse IP pour envoyer et recevoir les données. Exemple : 192.168.1.1",
    activity: { id: "p41irw7ik26", title: "Composants réseau" },
    svg: `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #2563eb; width: 100%; height: 100%;">
      <rect x="70" y="45" width="60" height="40" rx="6" fill="#eff6ff" />
      <path d="M70 51 l30 20 l30 -20" />
      <rect x="15" y="50" width="30" height="22" rx="3" fill="#ffffff" />
      <path d="M25 72 l-5 10 h20 l-5 -10" />
      <text x="30" y="95" font-size="8" font-family="monospace" text-anchor="middle" fill="#64748b" stroke="none">192.168.1.5</text>
      <rect x="155" y="50" width="30" height="22" rx="3" fill="#ffffff" />
      <path d="M165 72 l-5 10 h20 l-5 -10" />
      <text x="170" y="95" font-size="8" font-family="monospace" text-anchor="middle" fill="#2563eb" stroke="none">192.168.1.1</text>
      <path d="M50 61 h15" stroke-dasharray="3 3" />
      <path d="M135 61 h15" stroke-dasharray="3 3" />
    </svg>`
  },
  {
    term: "Adresse URL",
    img: "wp:URL",
    icon: "🔗", color: "#e0f2fe",
    ar: "عنوان URL — الرابط الفريد لصفحة ويب على الإنترنت.",
    def: "Adresse unique d'une page web sur Internet. Elle s'écrit dans la barre d'adresse du navigateur.",
    example: "https://www.google.com est une adresse URL. Elle commence toujours par http:// ou https://",
    activity: null,
    svg: `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #0284c7; width: 100%; height: 100%;">
      <rect x="20" y="45" width="160" height="32" rx="6" fill="#f0f9ff" />
      <circle cx="34" cy="61" r="3" fill="#ef4444" stroke="none" />
      <circle cx="44" cy="61" r="3" fill="#eab308" stroke="none" />
      <circle cx="54" cy="61" r="3" fill="#22c55e" stroke="none" />
      <rect x="68" y="51" width="102" height="20" rx="4" fill="#ffffff" />
      <text x="74" y="65" font-size="9" font-family="monospace" fill="#0284c7" stroke="none">https://site.ma/cours</text>
    </svg>`
  },
  {
    term: "ADSL",
    img: "wp:DSL modem",
    icon: "📡", color: "#f0fdf4",
    ar: "ADSL — تقنية توصيل بالإنترنت عبر خط الهاتف بسرعة عالية.",
    def: "Technologie de connexion Internet haut débit via la ligne téléphonique. Le débit descendant (téléchargement) est plus rapide que le débit montant.",
    example: "Grâce à l'ADSL, tu peux regarder des vidéos en ligne sans trop d'interruptions depuis chez toi.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- House -->
      <polygon points="30,85 30,125 80,125 80,85 55,60" fill="#fef9c3" stroke="#d97706" stroke-width="2"/>
      <rect x="42" y="98" width="16" height="27" rx="2" fill="#d97706"/>
      <rect x="56" y="85" width="16" height="14" rx="2" fill="#bae6fd"/>
      <!-- Phone jack on house -->
      <rect x="72" y="105" width="10" height="7" rx="1" fill="#475569"/>
      <!-- Cable going right -->
      <path d="M82 108 Q110 108 110 90 Q110 72 138 72" stroke="#64748b" stroke-width="3" fill="none"/>
      <!-- Modem box -->
      <rect x="138" y="62" width="34" height="22" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <circle cx="148" cy="73" r="3" fill="#22c55e"/>
      <circle cx="158" cy="73" r="3" fill="#22c55e"/>
      <circle cx="168" cy="73" r="3" fill="#eab308"/>
      <text x="155" y="96" font-size="8" text-anchor="middle" fill="#0284c7" font-family="sans-serif" font-weight="bold">Modem</text>
      <!-- Internet cloud -->
      <ellipse cx="195" cy="55" rx="18" ry="13" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <ellipse cx="183" cy="61" rx="10" ry="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <ellipse cx="207" cy="62" rx="10" ry="7" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="195" y="60" font-size="9" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Web</text>
      <path d="M172 69 l8 -7" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3 2"/>
      <!-- Speed labels -->
      <text x="110" y="85" font-size="7.5" text-anchor="middle" fill="#16a34a" font-family="sans-serif">⬇ 20 Mb/s</text>
      <text x="110" y="96" font-size="7.5" text-anchor="middle" fill="#dc2626" font-family="sans-serif">⬆ 1 Mb/s</text>
      <text x="55" y="140" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Ta maison</text>
    </svg>`
  },
  {
    term: "Antivirus",
    img: "wp:Malware",
    icon: "🛡️", color: "#fef9c3",
    ar: "مضاد الفيروسات — برنامج يحمي الحاسوب من الفيروسات والبرامج الضارة.",
    def: "Logiciel qui surveille et protège ton ordinateur contre les virus et programmes malveillants. Il doit être mis à jour régulièrement.",
    example: "Avant d'ouvrir une clé USB inconnue, ton antivirus la scanne automatiquement pour détecter les virus.",
    activity: null,
    svg: `<svg viewBox="0 0 680 330" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <defs>
        <marker id="av-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#E24B4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>
      <rect x="30" y="60" width="120" height="130" rx="12" fill="#FCEBEB" stroke="#A32D2D" stroke-width="1"/>
      <text x="90" y="86" text-anchor="middle" font-size="14" font-weight="500" fill="#791F1F" font-family="sans-serif">Virus</text>
      <text x="90" y="103" text-anchor="middle" font-size="12" fill="#A32D2D" font-family="sans-serif">programme nuisible</text>
      <circle cx="90" cy="150" r="28" fill="#E24B4A" opacity="0.25"/>
      <circle cx="90" cy="150" r="18" fill="#E24B4A" opacity="0.5"/>
      <line x1="90" y1="118" x2="90" y2="108" stroke="#A32D2D" stroke-width="2" stroke-linecap="round"/>
      <line x1="90" y1="182" x2="90" y2="192" stroke="#A32D2D" stroke-width="2" stroke-linecap="round"/>
      <line x1="58" y1="150" x2="48" y2="150" stroke="#A32D2D" stroke-width="2" stroke-linecap="round"/>
      <line x1="122" y1="150" x2="132" y2="150" stroke="#A32D2D" stroke-width="2" stroke-linecap="round"/>
      <line x1="70" y1="128" x2="63" y2="120" stroke="#A32D2D" stroke-width="2" stroke-linecap="round"/>
      <line x1="110" y1="128" x2="117" y2="120" stroke="#A32D2D" stroke-width="2" stroke-linecap="round"/>
      <line x1="70" y1="172" x2="63" y2="180" stroke="#A32D2D" stroke-width="2" stroke-linecap="round"/>
      <line x1="110" y1="172" x2="117" y2="180" stroke="#A32D2D" stroke-width="2" stroke-linecap="round"/>
      <circle cx="83" cy="146" r="3.5" fill="#791F1F"/>
      <circle cx="97" cy="146" r="3.5" fill="#791F1F"/>
      <path d="M83 157 Q90 163 97 157" stroke="#791F1F" stroke-width="2" fill="none" stroke-linecap="round"/>
      <text x="90" y="215" text-anchor="middle" font-size="12" fill="#5F5E5A" font-family="sans-serif">Vient de :</text>
      <text x="58" y="232" text-anchor="middle" font-size="12" fill="#5F5E5A" font-family="sans-serif">📧 email</text>
      <text x="122" y="232" text-anchor="middle" font-size="12" fill="#5F5E5A" font-family="sans-serif">💾 USB</text>
      <path d="M154 150 L220 150" stroke="#E24B4A" stroke-width="2.5" fill="none" marker-end="url(#av-arrow)" stroke-dasharray="6 3"/>
      <text x="187" y="140" text-anchor="middle" font-size="12" fill="#A32D2D" font-family="sans-serif">attaque</text>
      <rect x="230" y="40" width="200" height="240" rx="14" fill="#E1F5EE" stroke="#0F6E56" stroke-width="1"/>
      <text x="330" y="70" text-anchor="middle" font-size="14" font-weight="500" fill="#085041" font-family="sans-serif">Antivirus</text>
      <text x="330" y="88" text-anchor="middle" font-size="12" fill="#0F6E56" font-family="sans-serif">logiciel de protection</text>
      <path d="M330 108 C360 108, 378 116, 378 148 C378 182, 354 204, 330 212 C306 204, 282 182, 282 148 C282 116, 300 108, 330 108 Z" fill="#E1F5EE" stroke="#0F6E56" stroke-width="2.5"/>
      <circle cx="318" cy="152" r="20" fill="none" stroke="#085041" stroke-width="2.5"/>
      <line x1="332" y1="166" x2="344" y2="178" stroke="#085041" stroke-width="3" stroke-linecap="round"/>
      <path d="M308 152 l8 8 l14 -14" stroke="#0F6E56" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="330" y="240" text-anchor="middle" font-size="12" fill="#085041" font-family="sans-serif">1. Surveille en permanence</text>
      <text x="330" y="258" text-anchor="middle" font-size="12" fill="#085041" font-family="sans-serif">2. Détecte le virus</text>
      <text x="330" y="276" text-anchor="middle" font-size="12" fill="#085041" font-family="sans-serif">3. Bloque et supprime</text>
      <path d="M434 150 L500 150" stroke="#E24B4A" stroke-width="2" fill="none" stroke-dasharray="5 3"/>
      <circle cx="467" cy="150" r="14" fill="#FCEBEB" stroke="#E24B4A" stroke-width="2"/>
      <line x1="458" y1="141" x2="476" y2="159" stroke="#A32D2D" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="476" y1="141" x2="458" y2="159" stroke="#A32D2D" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="510" y="60" width="150" height="130" rx="12" fill="#EAF3DE" stroke="#3B6D11" stroke-width="1"/>
      <text x="585" y="86" text-anchor="middle" font-size="14" font-weight="500" fill="#173404" font-family="sans-serif">Ordinateur</text>
      <text x="585" y="103" text-anchor="middle" font-size="12" fill="#3B6D11" font-family="sans-serif">protégé ✓</text>
      <rect x="530" y="115" width="110" height="62" rx="6" fill="#1e293b"/>
      <rect x="540" y="124" width="40" height="20" rx="3" fill="#5DCAA5" opacity="0.6"/>
      <rect x="588" y="124" width="40" height="20" rx="3" fill="#9FE1CB" opacity="0.6"/>
      <rect x="540" y="150" width="88" height="20" rx="3" fill="#5DCAA5" opacity="0.4"/>
      <path d="M600 118 C605 118, 609 120, 609 126 C609 132, 604 136, 600 138 C596 136, 591 132, 591 126 C591 120, 595 118, 600 118 Z" fill="#1D9E75"/>
      <path d="M596 127 l3 3 l6 -6" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="585" y="215" text-anchor="middle" font-size="12" fill="#27500A" font-family="sans-serif">Aucune infection !</text>
      <text x="585" y="232" text-anchor="middle" font-size="12" fill="#27500A" font-family="sans-serif">Fichiers sains</text>
      <rect x="30" y="290" width="620" height="30" rx="8" fill="none" stroke="#B4B2A9" stroke-width="0.5"/>
      <text x="340" y="310" text-anchor="middle" font-size="11" fill="#5F5E5A" font-family="sans-serif">L'antivirus doit être mis à jour régulièrement pour reconnaître les nouveaux virus.</text>
    </svg>`
  },
  {
    term: "Application",
    img: "wp:Mobile app",
    icon: "📱", color: "#f3e8ff",
    ar: "تطبيق — برنامج يُشغَّل لتنفيذ مهمة محددة على الحاسوب.",
    def: "Programme informatique conçu pour réaliser une tâche précise. On dit aussi logiciel ou programme.",
    example: "Word est une application pour écrire des textes, Paint est une application pour dessin.",
    activity: { id: "peje7efs326", title: "Types d'applications" }
  },
  {
    term: "Arborescence",
    img: "computer folders hierarchy",
    icon: "🌳", color: "#dcfce7",
    ar: "شجرة الملفات — التنظيم الهرمي للمجلدات والملفات على القرص الصلب.",
    def: "Organisation hiérarchique des dossiers et fichiers sur un ordinateur, comme un arbre avec des branches.",
    example: "Sur ton ordinateur : Disque C → Mes Documents → Collège → Informatique → Cours1.docx",
    activity: null,
    svg: `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #475569; width: 100%; height: 100%;">
      <rect x="15" y="55" width="30" height="20" rx="3" fill="#fef3c7" stroke="#d97706" />
      <path d="M15 60 h10 l3 -4 h12" stroke="#d97706" />
      <text x="30" y="90" font-size="8" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#475569" stroke="none">Disque C</text>
      <path d="M45 65 h18 v-30 h15 M63 65 h15 M63 65 v35 h15" stroke-width="1.5" />
      <rect x="78" y="25" width="26" height="18" rx="3" fill="#fef3c7" stroke="#d97706" />
      <text x="112" y="37" font-size="8" font-family="sans-serif" fill="#475569" stroke="none">Docs</text>
      <rect x="78" y="55" width="26" height="18" rx="3" fill="#fef3c7" stroke="#d97706" />
      <text x="112" y="67" font-size="8" font-family="sans-serif" fill="#475569" stroke="none">Images</text>
      <rect x="78" y="85" width="26" height="18" rx="3" fill="#fef3c7" stroke="#d97706" />
      <text x="112" y="97" font-size="8" font-family="sans-serif" fill="#475569" stroke="none">Devoirs</text>
    </svg>`
  },

  // ── B ──
  {
    term: "Backup",
    img: "wp:USB flash drive",
    icon: "💾", color: "#fef3c7",
    ar: "نسخة احتياطية — نسخ الملفات على دعامة خارجية حفاظًا عليها.",
    def: "Copie de sauvegarde de tes fichiers sur un support externe (clé USB, CD, disque dur externe) pour ne pas les perdre.",
    example: "Avant de formater un ordinateur, on fait un backup de tous ses fichiers importants sur une clé USB.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Computer screen -->
      <rect x="10" y="30" width="80" height="60" rx="5" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <rect x="15" y="35" width="70" height="48" rx="2" fill="#1e293b"/>
      <path d="M30 95 l-5 12 h50 l-5 -12" fill="#94a3b8" stroke="none"/>
      <rect x="20" y="107" width="40" height="4" rx="2" fill="#94a3b8"/>
      <!-- Files on screen -->
      <rect x="22" y="42" width="16" height="20" rx="2" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
      <text x="30" y="56" font-size="9" text-anchor="middle" fill="#0369a1">📄</text>
      <rect x="44" y="42" width="16" height="20" rx="2" fill="#bbf7d0" stroke="#16a34a" stroke-width="1"/>
      <text x="52" y="56" font-size="9" text-anchor="middle" fill="#15803d">🖼</text>
      <rect x="66" y="42" width="16" height="20" rx="2" fill="#fef9c3" stroke="#d97706" stroke-width="1"/>
      <text x="74" y="56" font-size="9" text-anchor="middle" fill="#b45309">🎵</text>
      <!-- Arrow -->
      <path d="M95 65 l25 0" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#bkarr)"/>
      <defs>
        <marker id="bkarr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#7c3aed"/>
        </marker>
      </defs>
      <text x="108" y="58" font-size="8" text-anchor="middle" fill="#7c3aed" font-family="sans-serif">Copier</text>
      <!-- USB key -->
      <rect x="123" y="50" width="50" height="28" rx="5" fill="#e9d5ff" stroke="#7c3aed" stroke-width="2"/>
      <rect x="170" y="58" width="12" height="12" rx="2" fill="#7c3aed"/>
      <rect x="132" y="57" width="10" height="14" rx="1" fill="#c4b5fd"/>
      <rect x="146" y="57" width="10" height="14" rx="1" fill="#c4b5fd"/>
      <rect x="160" y="57" width="8" height="14" rx="1" fill="#c4b5fd"/>
      <text x="148" y="92" font-size="8.5" text-anchor="middle" fill="#7c3aed" font-family="sans-serif" font-weight="bold">Clé USB</text>
      <text x="110" y="130" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Sauvegarde = copie de sécurité</text>
    </svg>`
  },
  {
    term: "Bande passante",
    img: "wp:Data-rate units",
    icon: "📶", color: "#e0f2fe",
    ar: "عرض النطاق الترددي — سرعة نقل البيانات عبر الشبكة.",
    def: "Vitesse à laquelle des données peuvent être transférées sur un réseau. Elle se mesure en Kbits/s ou Mbits/s.",
    example: "Si ta bande passante est de 20 Mbits/s, tu peux télécharger un film de 1 Go en environ 7 minutes.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Label slow -->
      <text x="28" y="18" font-size="9" font-family="sans-serif" fill="#dc2626" font-weight="bold">Bande passante étroite</text>
      <!-- Thin pipe -->
      <rect x="15" y="22" width="120" height="12" rx="6" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
      <!-- Slow water trickle -->
      <rect x="18" y="24" width="25" height="8" rx="4" fill="#f87171"/>
      <text x="148" y="32" font-size="10" fill="#dc2626">🐢 lent</text>
      <!-- Label fast -->
      <text x="28" y="62" font-size="9" font-family="sans-serif" fill="#16a34a" font-weight="bold">Bande passante large</text>
      <!-- Wide pipe -->
      <rect x="15" y="68" width="120" height="28" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <!-- Fast water flow -->
      <rect x="18" y="71" width="110" height="22" rx="8" fill="#86efac"/>
      <!-- Flow arrows -->
      <path d="M25 82 l18 0 M55 82 l18 0 M85 82 l18 0" stroke="#15803d" stroke-width="2" marker-end="url(#bparr)"/>
      <defs>
        <marker id="bparr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="#15803d"/>
        </marker>
      </defs>
      <text x="148" y="86" font-size="10" fill="#16a34a">🚀 rapide</text>
      <!-- Measurement bar -->
      <text x="110" y="118" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Mesurée en Mbit/s (mégabits par seconde)</text>
      <rect x="15" y="122" width="30" height="10" rx="3" fill="#fecaca"/>
      <text x="30" y="130" font-size="7" text-anchor="middle" fill="#dc2626">2 Mb/s</text>
      <rect x="55" y="122" width="60" height="10" rx="3" fill="#bae6fd"/>
      <text x="85" y="130" font-size="7" text-anchor="middle" fill="#0369a1">20 Mb/s</text>
      <rect x="125" y="122" width="80" height="10" rx="3" fill="#dcfce7"/>
      <text x="165" y="130" font-size="7" text-anchor="middle" fill="#16a34a">100 Mb/s</text>
    </svg>`
  },
  {
    term: "Bug",
    img: "wp:Software bug",
    icon: "🐛", color: "#fee2e2",
    ar: "خطأ برمجي — عطل في البرنامج ناتج عن خطأ في الكود.",
    def: "Erreur de programmation qui provoque un mauvais fonctionnement d'un logiciel. L'utilisateur ne peut pas le corrigé lui-même.",
    example: "Quand ton jeu plante sans raison, c'est souvent à cause d'un bug. La société publie un correctif pour le réparer.",
    activity: null,
    svg: `<svg viewBox="0 0 680 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <defs>
        <marker id="bug-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#E24B4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
        <marker id="bug-arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#E24B4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>
      <!-- ÉTAPE 1 : Programme qui fonctionne -->
      <rect x="40" y="40" width="160" height="200" rx="12" fill="#E1F5EE" stroke="#0F6E56" stroke-width="1"/>
      <text x="120" y="68" text-anchor="middle" font-size="14" font-weight="500" fill="#085041" font-family="sans-serif">Programme</text>
      <text x="120" y="88" text-anchor="middle" font-size="12" fill="#0F6E56" font-family="sans-serif">qui fonctionne</text>
      <rect x="60" y="102" width="120" height="112" rx="6" fill="#1e293b"/>
      <rect x="70" y="114" width="60" height="6" rx="3" fill="#5DCAA5" opacity="0.8"/>
      <rect x="70" y="126" width="80" height="6" rx="3" fill="#5DCAA5" opacity="0.6"/>
      <rect x="70" y="138" width="50" height="6" rx="3" fill="#5DCAA5" opacity="0.7"/>
      <rect x="70" y="150" width="70" height="6" rx="3" fill="#5DCAA5" opacity="0.5"/>
      <rect x="70" y="162" width="45" height="6" rx="3" fill="#5DCAA5" opacity="0.8"/>
      <rect x="70" y="174" width="65" height="6" rx="3" fill="#5DCAA5" opacity="0.6"/>
      <rect x="70" y="186" width="55" height="6" rx="3" fill="#5DCAA5" opacity="0.7"/>
      <circle cx="120" cy="256" r="16" fill="#1D9E75" opacity="0.2"/>
      <path d="M112 256 l6 6 l10 -10" stroke="#0F6E56" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Flèche bug -->
      <path d="M210 140 L270 140" stroke="#E24B4A" stroke-width="2" fill="none" marker-end="url(#bug-arrow)"/>
      <text x="240" y="130" text-anchor="middle" font-size="12" fill="#A32D2D" font-family="sans-serif">Un bug !</text>
      <!-- ÉTAPE 2 : Code avec le bug -->
      <rect x="280" y="40" width="160" height="200" rx="12" fill="#FCEBEB" stroke="#A32D2D" stroke-width="1"/>
      <text x="360" y="68" text-anchor="middle" font-size="14" font-weight="500" fill="#791F1F" font-family="sans-serif">Le code</text>
      <text x="360" y="88" text-anchor="middle" font-size="12" fill="#A32D2D" font-family="sans-serif">avec une erreur</text>
      <rect x="300" y="102" width="120" height="112" rx="6" fill="#1e293b"/>
      <rect x="310" y="114" width="60" height="6" rx="3" fill="#5DCAA5" opacity="0.6"/>
      <rect x="310" y="126" width="80" height="6" rx="3" fill="#5DCAA5" opacity="0.6"/>
      <rect x="308" y="137" width="96" height="10" rx="3" fill="#E24B4A" opacity="0.35"/>
      <rect x="310" y="139" width="70" height="6" rx="3" fill="#F09595"/>
      <text x="395" y="147" font-size="10" fill="#E24B4A" font-family="monospace">← !</text>
      <rect x="310" y="155" width="50" height="6" rx="3" fill="#5DCAA5" opacity="0.5"/>
      <rect x="310" y="167" width="65" height="6" rx="3" fill="#5DCAA5" opacity="0.5"/>
      <rect x="310" y="179" width="45" height="6" rx="3" fill="#5DCAA5" opacity="0.5"/>
      <rect x="310" y="191" width="65" height="6" rx="3" fill="#5DCAA5" opacity="0.5"/>
      <circle cx="360" cy="256" r="16" fill="#E24B4A" opacity="0.2"/>
      <path d="M352 248 l16 16 M368 248 l-16 16" stroke="#A32D2D" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Flèche résultat -->
      <path d="M450 140 L510 140" stroke="#E24B4A" stroke-width="2" fill="none" marker-end="url(#bug-arrow2)"/>
      <text x="480" y="130" text-anchor="middle" font-size="12" fill="#A32D2D" font-family="sans-serif">Résultat</text>
      <!-- ÉTAPE 3 : Programme planté -->
      <rect x="520" y="40" width="140" height="200" rx="12" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="1"/>
      <text x="590" y="68" text-anchor="middle" font-size="14" font-weight="500" fill="#2C2C2A" font-family="sans-serif">Programme</text>
      <text x="590" y="88" text-anchor="middle" font-size="12" fill="#5F5E5A" font-family="sans-serif">planté !</text>
      <rect x="538" y="102" width="104" height="112" rx="6" fill="#1e293b"/>
      <rect x="545" y="112" width="90" height="92" rx="4" fill="#500d0d"/>
      <text x="590" y="153" font-size="30" text-anchor="middle" fill="#F09595">✗</text>
      <text x="590" y="173" font-size="9" text-anchor="middle" fill="#F09595" font-family="monospace">ERROR</text>
      <text x="590" y="186" font-size="8" text-anchor="middle" fill="#F09595" font-family="monospace">0x0000B4D</text>
      <!-- Légendes -->
      <text x="120" y="292" text-anchor="middle" font-size="12" fill="#085041" font-family="sans-serif">Tout va bien</text>
      <text x="360" y="292" text-anchor="middle" font-size="12" fill="#791F1F" font-family="sans-serif">Erreur dans le code</text>
      <text x="590" y="292" text-anchor="middle" font-size="12" fill="#444441" font-family="sans-serif">Le jeu plante</text>
      <text x="340" y="315" text-anchor="middle" font-size="11" fill="#5F5E5A" font-family="sans-serif">Un bug = une erreur écrite par le programmeur. L'utilisateur ne peut pas le corriger lui-même.</text>
    </svg>`
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
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" },
    svg: `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #ea580c; width: 100%; height: 100%;">
      <rect x="60" y="30" width="80" height="80" rx="6" fill="#fff7ed" />
      <rect x="78" y="48" width="44" height="44" rx="2" fill="#ffedd5" />
      <path d="M72 30 v-12 M90 30 v-12 M108 30 v-12 M126 30 v-12" />
      <path d="M72 110 v12 M90 110 v12 M108 110 v12 M126 110 v12" />
      <path d="M60 42 h-12 M60 60 h-12 M60 78 h-12 M60 96 h-12" />
      <path d="M140 42 h12 M140 60 h12 M140 78 h12 M140 96 h12" />
      <path d="M104 56 l-12 16 h14 l-10 18" stroke-width="2" stroke="#ea580c" fill="none" />
    </svg>`
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
    icon: "📧", color: "#e0f2fe",
    ar: "البريد الإلكتروني — رسالة رقمية تُرسَل عبر الإنترنت.",
    def: "Courrier électronique envoyé et reçu via Internet. Il permet d'envoyer des messages et des fichiers à travers le monde.",
    example: "Tu envoies un e-mail à ton professeur avec ton devoir en pièce jointe. Il le reçoit en quelques secondes.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Sender computer -->
      <rect x="8" y="50" width="52" height="36" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <rect x="12" y="54" width="44" height="26" rx="2" fill="#fff"/>
      <rect x="17" y="58" width="34" height="18" rx="2" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M17 60 l17 10 l17 -10" stroke="#0284c7" stroke-width="1.2" fill="none"/>
      <path d="M22 86 l-4 10 h44 l-4 -10" fill="#94a3b8" stroke="none"/>
      <text x="34" y="104" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Toi</text>
      <!-- Flying envelope center -->
      <rect x="82" y="50" width="56" height="36" rx="4" fill="#fef9c3" stroke="#0284c7" stroke-width="2"/>
      <path d="M82 54 l28 18 l28 -18" stroke="#0284c7" stroke-width="1.8" fill="none"/>
      <path d="M82 86 l22 -14 M138 86 l-22 -14" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M70 65 h8" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M142 65 h8" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 2"/>
      <text x="110" y="103" font-size="8" text-anchor="middle" fill="#0284c7" font-family="sans-serif" font-weight="bold">@ Internet</text>
      <!-- Receiver computer -->
      <rect x="160" y="50" width="52" height="36" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
      <rect x="164" y="54" width="44" height="26" rx="2" fill="#fff"/>
      <rect x="169" y="58" width="34" height="18" rx="2" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.2"/>
      <path d="M169 60 l17 10 l17 -10" stroke="#16a34a" stroke-width="1.2" fill="none"/>
      <text x="181" y="75" font-size="13" fill="#16a34a">✓</text>
      <path d="M174 86 l-4 10 h44 l-4 -10" fill="#94a3b8" stroke="none"/>
      <text x="186" y="104" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Prof</text>
    </svg>`
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
    activity: null,
    svg: `<svg viewBox="0 0 240 155" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Left: Internet (danger zone) -->
      <text x="38" y="22" font-size="9" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="bold">INTERNET</text>
      <!-- Danger computer -->
      <rect x="10" y="30" width="56" height="38" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
      <rect x="14" y="34" width="48" height="28" rx="2" fill="#fff"/>
      <text x="38" y="53" font-size="16" text-anchor="middle">☠️</text>
      <path d="M24 68 l-4 11 h36 l-4 -11" fill="#fca5a5" stroke="none"/>
      <!-- Blocked arrows -->
      <path d="M68 49 l16 0" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#blocked)"/>
      <defs>
        <marker id="blocked" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/>
        </marker>
        <marker id="allowed" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a"/>
        </marker>
      </defs>
      <!-- FIREWALL wall -->
      <rect x="87" y="18" width="22" height="110" rx="4" fill="#dc2626"/>
      <rect x="90" y="22" width="16" height="14" rx="2" fill="#fca5a5"/>
      <rect x="90" y="40" width="16" height="14" rx="2" fill="#fca5a5"/>
      <rect x="90" y="58" width="16" height="14" rx="2" fill="#fca5a5"/>
      <rect x="90" y="76" width="16" height="14" rx="2" fill="#fca5a5"/>
      <rect x="90" y="94" width="16" height="14" rx="2" fill="#fca5a5"/>
      <text x="98" y="140" font-size="7.5" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="bold">FIREWALL</text>
      <!-- X mark on wall = blocked -->
      <path d="M78 44 l6 0" stroke="#dc2626" stroke-width="2.5"/>
      <path d="M82 40 l0 8" stroke="#dc2626" stroke-width="2.5"/>
      <circle cx="82" cy="44" r="7" stroke="#dc2626" stroke-width="2" fill="none"/>
      <path d="M78 41 l8 6 M86 41 l-8 6" stroke="#dc2626" stroke-width="1.5"/>
      <!-- Right: Safe zone -->
      <text x="178" y="22" font-size="9" text-anchor="middle" fill="#16a34a" font-family="sans-serif" font-weight="bold">MON RÉSEAU</text>
      <!-- Safe computer -->
      <rect x="148" y="30" width="60" height="38" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
      <rect x="152" y="34" width="52" height="28" rx="2" fill="#fff"/>
      <text x="178" y="53" font-size="16" text-anchor="middle">🛡️</text>
      <path d="M162 68 l-4 11 h40 l-4 -11" fill="#86efac" stroke="none"/>
      <!-- Allowed arrow going right through firewall -->
      <path d="M112 80 l32 0" stroke="#16a34a" stroke-width="2" marker-end="url(#allowed)"/>
      <text x="128" y="76" font-size="7" text-anchor="middle" fill="#16a34a" font-family="sans-serif">OK ✓</text>
    </svg>`
  },

  // ── G ──
  {
    term: "Gigaoctet",
    img: "wp:Gigabyte",
    icon: "💾", color: "#dcfce7",
    ar: "غيغابايت — وحدة قياس سعة التخزين تعادل مليار بايت.",
    def: "Unité de mesure de la capacité de stockage. 1 Go = 1 000 Mo. Un film HD occupe environ 4 Go.",
    example: "Ta clé USB de 8 Go peut contenir environ 2 000 photos de 4 mégapixels.",
    activity: null,
    svg: `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #16a34a; width: 100%; height: 100%;">
      <rect x="30" y="30" width="140" height="80" rx="8" fill="#f0fdf4" />
      <line x1="30" y1="55" x2="170" y2="55" stroke-width="1.5" />
      <circle cx="50" cy="42" r="4" fill="#16a34a" stroke="none" />
      <circle cx="65" cy="42" r="4" fill="#16a34a" stroke="none" />
      <text x="100" y="88" font-size="20" font-family="monospace" font-weight="bold" text-anchor="middle" fill="#16a34a" stroke="none">1 Go</text>
    </svg>`
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
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Globe -->
      <circle cx="110" cy="75" r="45" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <!-- Latitude lines -->
      <ellipse cx="110" cy="75" rx="45" ry="15" fill="none" stroke="#93c5fd" stroke-width="1"/>
      <ellipse cx="110" cy="75" rx="45" ry="30" fill="none" stroke="#93c5fd" stroke-width="1"/>
      <!-- Longitude lines -->
      <ellipse cx="110" cy="75" rx="20" ry="45" fill="none" stroke="#93c5fd" stroke-width="1"/>
      <line x1="110" y1="30" x2="110" y2="120" stroke="#93c5fd" stroke-width="1"/>
      <!-- Continents hint -->
      <ellipse cx="95" cy="68" rx="12" ry="10" fill="#86efac" stroke="none" opacity="0.8"/>
      <ellipse cx="125" cy="72" rx="10" ry="8" fill="#86efac" stroke="none" opacity="0.8"/>
      <!-- Devices around globe -->
      <!-- Phone (top-left) -->
      <rect x="22" y="18" width="18" height="28" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="25" y="22" width="12" height="18" fill="#bae6fd"/>
      <circle cx="31" cy="43" r="2" fill="#0284c7"/>
      <path d="M31 22 l45 30" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
      <!-- Laptop (top-right) -->
      <rect x="172" y="22" width="28" height="18" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="175" y="25" width="22" height="12" fill="#bae6fd"/>
      <rect x="168" y="40" width="36" height="4" rx="2" fill="#94a3b8"/>
      <path d="M172 32 l-30 28" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
      <!-- Tablet (bottom-left) -->
      <rect x="18" y="110" width="22" height="28" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="21" y="114" width="16" height="18" fill="#bae6fd"/>
      <path d="M29 110 l52 -20" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
      <!-- PC (bottom-right) -->
      <rect x="178" y="108" width="22" height="16" rx="2" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="181" y="111" width="16" height="10" fill="#bae6fd"/>
      <path d="M178 116 l-32 -20" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="110" y="142" font-size="8.5" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Des milliards d'appareils reliés</text>
    </svg>`
  },
  {
    term: "Logiciel",
    img: "wp:Software",
    icon: "💻", color: "#f3e8ff",
    ar: "البرنامج — مجموعة تعليمات مبرمجة تُنفَّذ sur l'ordinateur pour d'effectuer des tâches spécifiques.",
    def: "Programme informatique qui permet à l'ordinateur d'effectuer des tâches précises. Synonyme de software ou application.",
    example: "VLC est un logiciel pour lire des vidéos. Firefox est un logiciel pour naviguer sur Internet.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Computer (hardware) -->
      <rect x="10" y="55" width="70" height="50" rx="5" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <rect x="15" y="60" width="60" height="38" rx="2" fill="#1e293b"/>
      <path d="M30 105 l-5 12 h50 l-5 -12" fill="#94a3b8" stroke="none"/>
      <text x="45" y="120" font-size="8" text-anchor="middle" fill="#64748b" font-family="sans-serif">Matériel</text>
      <!-- App icons on screen -->
      <rect x="20" y="65" width="14" height="14" rx="3" fill="#3b82f6"/>
      <text x="27" y="75" font-size="8" text-anchor="middle" fill="white">W</text>
      <rect x="38" y="65" width="14" height="14" rx="3" fill="#16a34a"/>
      <text x="45" y="75" font-size="8" text-anchor="middle" fill="white">▶</text>
      <rect x="56" y="65" width="14" height="14" rx="3" fill="#f97316"/>
      <text x="63" y="75" font-size="8" text-anchor="middle" fill="white">🌐</text>
      <!-- Arrow -->
      <path d="M83 80 l18 0" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#lgarr)"/>
      <defs><marker id="lgarr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#7c3aed"/></marker></defs>
      <!-- Recipe scroll = logiciel concept -->
      <rect x="103" y="35" width="105" height="85" rx="5" fill="#fef9c3" stroke="#d97706" stroke-width="2"/>
      <path d="M103 50 h105" stroke="#d97706" stroke-width="1"/>
      <text x="155" y="47" font-size="9" text-anchor="middle" fill="#92400e" font-family="sans-serif" font-weight="bold">Instructions (code)</text>
      <text x="115" y="63" font-size="8" fill="#475569" font-family="monospace">1. Ouvre fichier</text>
      <text x="115" y="75" font-size="8" fill="#475569" font-family="monospace">2. Affiche image</text>
      <text x="115" y="87" font-size="8" fill="#475569" font-family="monospace">3. Si clic → zoom</text>
      <text x="115" y="99" font-size="8" fill="#475569" font-family="monospace">4. Enregistre</text>
      <text x="155" y="128" font-size="8" text-anchor="middle" fill="#b45309" font-family="sans-serif">= Logiciel (Software)</text>
    </svg>`
  },

  // ── M ──
  {
    term: "Mémoire RAM",
    img: "wp:Random-access memory",
    icon: "🧠", color: "#fef9c3",
    ar: "ذاكرة الوصول العشوائي — ذاكرة مؤقتة تُخزِّن البيانات أثناء عمل الحاسوب.",
    def: "Mémoire temporaire de l'ordinateur qui stocke les données des programmes en cours d'utilisation. Elle s'efface à l'extinction.",
    example: "Avec 4 Go de RAM, tu peux ouvrir Word, un navigateur et de la musique en même temps sans trop ralentir.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Desk surface = RAM -->
      <rect x="10" y="65" width="140" height="55" rx="6" fill="#fef9c3" stroke="#d97706" stroke-width="2"/>
      <text x="80" y="60" font-size="9" text-anchor="middle" fill="#b45309" font-family="sans-serif" font-weight="bold">Bureau de travail = RAM</text>
      <!-- Open apps on desk -->
      <rect x="18" y="73" width="30" height="22" rx="3" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
      <text x="33" y="88" font-size="9" text-anchor="middle" fill="#0369a1">Word</text>
      <rect x="55" y="73" width="30" height="22" rx="3" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.2"/>
      <text x="70" y="88" font-size="8.5" text-anchor="middle" fill="#15803d">Firefox</text>
      <rect x="92" y="73" width="30" height="22" rx="3" fill="#e9d5ff" stroke="#7c3aed" stroke-width="1.2"/>
      <text x="107" y="88" font-size="8.5" text-anchor="middle" fill="#6d28d9">Musique</text>
      <!-- Drawer = Disk -->
      <rect x="165" y="65" width="45" height="55" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <text x="187" y="85" font-size="8" text-anchor="middle" fill="#64748b" font-family="sans-serif">Disque</text>
      <text x="187" y="96" font-size="8" text-anchor="middle" fill="#64748b" font-family="sans-serif">dur</text>
      <text x="187" y="107" font-size="9" text-anchor="middle">🗄️</text>
      <!-- Arrow from drawer to desk -->
      <path d="M165 92 l-25 0" stroke="#d97706" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#ramarr)"/>
      <defs><marker id="ramarr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#d97706"/></marker></defs>
      <!-- Power off label -->
      <text x="80" y="133" font-size="8" text-anchor="middle" fill="#dc2626" font-family="sans-serif">⚠ S'efface quand l'ordi s'éteint !</text>
    </svg>`
  },
  {
    term: "Mot de passe",
    img: "wp:Password",
    icon: "🔐", color: "#fef3c7",
    ar: "كلمة المرور — رمز سري يُستخدم للتحقق من هوية المستخدم.",
    def: "Code secret permettant de protéger l'accès à un compte ou un appareil. Il doit être long et complexe.",
    example: "Un bon mot de passe mélange lettres, chiffres et symboles : 'T@blette2024!' est bien meilleur que '1234'.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Bad password -->
      <rect x="10" y="25" width="90" height="55" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="55" y="42" font-size="9" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="bold">❌ Mauvais</text>
      <rect x="20" y="48" width="70" height="20" rx="4" fill="#fff" stroke="#dc2626" stroke-width="1.2"/>
      <text x="55" y="62" font-size="11" text-anchor="middle" fill="#dc2626" font-family="monospace">1234</text>
      <!-- Open lock (bad) -->
      <path d="M42 88 a10 10 0 0 1 20 0" stroke="#dc2626" stroke-width="2.5" fill="none"/>
      <rect x="36" y="88" width="32" height="22" rx="4" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
      <circle cx="52" cy="99" r="4" fill="#dc2626"/>
      <!-- Good password -->
      <rect x="120" y="25" width="90" height="55" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="165" y="42" font-size="9" text-anchor="middle" fill="#16a34a" font-family="sans-serif" font-weight="bold">✅ Fort</text>
      <rect x="130" y="48" width="70" height="20" rx="4" fill="#fff" stroke="#16a34a" stroke-width="1.2"/>
      <text x="165" y="62" font-size="10" text-anchor="middle" fill="#15803d" font-family="monospace">T@blet2024!</text>
      <!-- Closed lock (good) -->
      <path d="M152 88 a10 10 0 0 1 20 0 v0 h-20" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <rect x="146" y="88" width="32" height="22" rx="4" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
      <circle cx="162" cy="97" r="4" fill="#16a34a"/>
      <rect x="161" y="97" width="2" height="7" rx="1" fill="#16a34a"/>
      <!-- Rule labels -->
      <text x="110" y="130" font-size="7.5" text-anchor="middle" fill="#475569" font-family="sans-serif">Majuscules + chiffres + symboles = mot de passe fort</text>
    </svg>`
  },
  {
    term: "Multimédia",
    img: "wp:Multimedia",
    icon: "🎬", color: "#f3e8ff",
    ar: "الوسائط المتعددة — مزيج من النصوص والصور والصوت والفيديو في محتوى رقمي.",
    def: "Combinaison de plusieurs types de médias (texte, image, son, vidéo, animation) dans un même support numérique.",
    example: "Un exposé multimédia contient du texte, des photos, une vidéo et peut-être de la musique de fond.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Central label -->
      <circle cx="110" cy="78" r="22" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2.5"/>
      <text x="110" y="74" font-size="8.5" text-anchor="middle" fill="#6d28d9" font-family="sans-serif" font-weight="bold">Multi</text>
      <text x="110" y="85" font-size="8.5" text-anchor="middle" fill="#6d28d9" font-family="sans-serif" font-weight="bold">média</text>
      <!-- Text box (top-left) -->
      <rect x="15" y="18" width="50" height="35" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="40" y="32" font-size="9" text-anchor="middle" fill="#1d4ed8">📝 Texte</text>
      <line x1="20" y1="38" x2="60" y2="38" stroke="#93c5fd" stroke-width="1"/>
      <line x1="20" y1="44" x2="50" y2="44" stroke="#93c5fd" stroke-width="1"/>
      <path d="M55 43 l42 25" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3 2"/>
      <!-- Image box (top-right) -->
      <rect x="155" y="18" width="50" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="180" y="32" font-size="9" text-anchor="middle" fill="#15803d">🖼 Image</text>
      <path d="M165 44 l15 -10 l10 12 l8 -6 l10 10" stroke="#86efac" stroke-width="1.5" fill="none"/>
      <path d="M165 44 l-30 22" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3 2"/>
      <!-- Audio box (bottom-left) -->
      <rect x="15" y="100" width="50" height="35" rx="4" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
      <text x="40" y="115" font-size="9" text-anchor="middle" fill="#92400e">🎵 Son</text>
      <path d="M22 124 l5 -8 l5 8 l5 -6 l5 6 l5 -10 l5 10" stroke="#fbbf24" stroke-width="1.5" fill="none"/>
      <path d="M55 108 l42 -15" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3 2"/>
      <!-- Video box (bottom-right) -->
      <rect x="155" y="100" width="50" height="35" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="180" y="115" font-size="9" text-anchor="middle" fill="#b91c1c">🎬 Vidéo</text>
      <polygon points="170,122 170,132 182,127" fill="#f87171"/>
      <path d="M165 116 l-30 -15" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3 2"/>
    </svg>`
  },

  // ── N ──
  {
    term: "Navigateur",
    img: "wp:Firefox",
    icon: "🧭", color: "#e0f2fe",
    ar: "متصفح الإنترنت — برنامج للتنقل بين صفحات الويب.",
    def: "Logiciel permettant d'accéder aux sites web et de naviguer sur Internet. Ex : Chrome, Firefox, Edge.",
    example: "Tu ouvres Chrome (navigateur), tu tapes www.wikipedia.org dans la barre d'adresse et la page s'affiche.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Browser window -->
      <rect x="10" y="15" width="200" height="120" rx="7" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <!-- Title bar -->
      <rect x="10" y="15" width="200" height="22" rx="7" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <circle cx="26" cy="26" r="4" fill="#ef4444"/>
      <circle cx="40" cy="26" r="4" fill="#eab308"/>
      <circle cx="54" cy="26" r="4" fill="#22c55e"/>
      <!-- Address bar -->
      <rect x="65" y="19" width="120" height="14" rx="5" fill="#fff" stroke="#94a3b8" stroke-width="1"/>
      <text x="75" y="29" font-size="8" fill="#0284c7" font-family="monospace">https://www.wikipedia.org</text>
      <!-- Tabs -->
      <rect x="10" y="37" width="60" height="14" rx="3" fill="#fff" stroke="#94a3b8" stroke-width="1"/>
      <text x="40" y="47" font-size="7.5" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">Wikipedia</text>
      <rect x="72" y="37" width="50" height="14" rx="3" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
      <text x="97" y="47" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">YouTube</text>
      <!-- Page content -->
      <rect x="18" y="56" width="50" height="38" rx="3" fill="#dbeafe"/>
      <text x="43" y="79" font-size="18" text-anchor="middle">🌍</text>
      <line x1="76" y1="62" x2="185" y2="62" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="76" y1="72" x2="185" y2="72" stroke="#e2e8f0" stroke-width="1.5"/>
      <line x1="76" y1="80" x2="165" y2="80" stroke="#e2e8f0" stroke-width="1.5"/>
      <line x1="76" y1="88" x2="175" y2="88" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Browser names -->
      <text x="110" y="112" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Chrome   Firefox   Edge   Safari</text>
      <text x="110" y="127" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">Ce sont des navigateurs web</text>
    </svg>`
  },
  {
    term: "Numérique",
    img: "wp:Binary number",
    icon: "🔢", color: "#dbeafe",
    ar: "الرقمي — كل ما يُمثَّل بأرقام ثنائية (0 و1) في الأنظمة الإلكترونية.",
    def: "Qui utilise des données représentées par des chiffres binaires (0 et 1). S'oppose à analogique.",
    example: "Une photo numérique est stockée en 0 et 1 sur ton téléphone, contrairement à une photo argentique.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Analog side (left) -->
      <rect x="8" y="20" width="90" height="110" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="53" y="38" font-size="9" text-anchor="middle" fill="#92400e" font-family="sans-serif" font-weight="bold">📷 Analogique</text>
      <!-- Continuous wave -->
      <path d="M18 80 Q30 55 42 80 Q54 105 66 80 Q78 55 90 80" stroke="#d97706" stroke-width="2.5" fill="none"/>
      <text x="53" y="108" font-size="8" text-anchor="middle" fill="#b45309" font-family="sans-serif">Signal continu</text>
      <text x="53" y="118" font-size="8" text-anchor="middle" fill="#b45309" font-family="sans-serif">(infini de valeurs)</text>
      <!-- VS -->
      <text x="110" y="80" font-size="12" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-weight="bold">→</text>
      <!-- Digital side (right) -->
      <rect x="122" y="20" width="90" height="110" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="167" y="38" font-size="9" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">💻 Numérique</text>
      <!-- Square wave (digital) -->
      <path d="M132 90 l0 -30 l14 0 l0 30 l14 0 l0 -30 l14 0 l0 30 l14 0 l0 -30 l14 0 l0 30" stroke="#2563eb" stroke-width="2.5" fill="none"/>
      <!-- 0 and 1 labels -->
      <text x="139" y="105" font-size="10" text-anchor="middle" fill="#1d4ed8" font-family="monospace" font-weight="bold">0</text>
      <text x="153" y="72" font-size="10" text-anchor="middle" fill="#1d4ed8" font-family="monospace" font-weight="bold">1</text>
      <text x="167" y="105" font-size="10" text-anchor="middle" fill="#1d4ed8" font-family="monospace" font-weight="bold">0</text>
      <text x="181" y="72" font-size="10" text-anchor="middle" fill="#1d4ed8" font-family="monospace" font-weight="bold">1</text>
      <text x="167" y="118" font-size="8" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">Seulement 0 et 1</text>
    </svg>`
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
    activity: { id: "peje7efs326", title: "Systèmes d'exploitation" },
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Hardware layer (bottom) -->
      <rect x="10" y="112" width="200" height="28" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="110" y="130" font-size="9" text-anchor="middle" fill="#92400e" font-family="sans-serif" font-weight="bold">⚙️ Matériel (CPU, RAM, Disque…)</text>
      <!-- OS layer (middle) -->
      <rect x="20" y="75" width="180" height="32" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
      <text x="110" y="88" font-size="9" text-anchor="middle" fill="#15803d" font-family="sans-serif" font-weight="bold">🧑‍✈️ Système d'exploitation (OS)</text>
      <text x="110" y="100" font-size="8" text-anchor="middle" fill="#166534" font-family="sans-serif">Windows / macOS / Linux</text>
      <!-- Apps layer (top) -->
      <rect x="10" y="18" width="46" height="50" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="33" y="40" font-size="16" text-anchor="middle">📝</text>
      <text x="33" y="56" font-size="8" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">Word</text>
      <rect x="64" y="18" width="46" height="50" rx="5" fill="#e9d5ff" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="87" y="40" font-size="16" text-anchor="middle">🎮</text>
      <text x="87" y="56" font-size="8" text-anchor="middle" fill="#6d28d9" font-family="sans-serif">Jeu</text>
      <rect x="118" y="18" width="46" height="50" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="141" y="40" font-size="16" text-anchor="middle">🎵</text>
      <text x="141" y="56" font-size="8" text-anchor="middle" fill="#b91c1c" font-family="sans-serif">Musique</text>
      <rect x="172" y="18" width="38" height="50" rx="5" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
      <text x="191" y="40" font-size="16" text-anchor="middle">🌐</text>
      <text x="191" y="56" font-size="7.5" text-anchor="middle" fill="#92400e" font-family="sans-serif">Nav.</text>
      <!-- label apps -->
      <text x="110" y="14" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Applications</text>
    </svg>`
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
    icon: "𔔲", color: "#f3e8ff",
    ar: "البِكسل — أصغر نقطة ملونة تتكون منها الصورة الرقمية على الشاشة.",
    def: "Plus petit élément d'une image numérique. Un écran est composé de millions de pixels formant l'image.",
    example: "Un écran Full HD (1920×1080) contient plus de 2 millions de pixels. Plus il y en a, plus l'image est nette.",
    activity: null,
    svg: `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: #64748b; width: 100%; height: 100%;">
      <rect x="25" y="25" width="80" height="80" stroke-dasharray="2 2" />
      <line x1="25" y1="45" x2="105" y2="45" stroke-dasharray="2 2" />
      <line x1="25" y1="65" x2="105" y2="65" stroke-dasharray="2 2" />
      <line x1="25" y1="85" x2="105" y2="85" stroke-dasharray="2 2" />
      <line x1="45" y1="25" x2="45" y2="105" stroke-dasharray="2 2" />
      <line x1="65" y1="25" x2="65" y2="105" stroke-dasharray="2 2" />
      <line x1="85" y1="25" x2="85" y2="105" stroke-dasharray="2 2" />
      <rect x="65" y="45" width="20" height="20" fill="#a855f7" stroke="#7e22ce" stroke-width="2" />
      <path d="M120 40 l25-10 M120 90 l35 15" stroke="#7e22ce" stroke-width="1" stroke-dasharray="3 3" />
      <text x="140" y="75" font-size="11" font-family="sans-serif" font-weight="bold" fill="#7e22ce" stroke="none">1 Pixel</text>
    </svg>`
  },
  {
    term: "Processeur",
    img: "wp:Microprocessor",
    icon: "⚡", color: "#fef9c3",
    ar: "المعالج — الدماغ الإلكتروني للحاسوب الذي ينفذ التعليمات البرمجية.",
    def: "Cerveau de l'ordinateur qui exécute les calculs. Sa vitesse se mesure en GHz (gigahertz).",
    example: "Un processeur Intel Core i5 à 2,5 GHz peut effectuer 2,5 milliards de cycles de calcul par seconde.",
    activity: { id: "p41irw7ik26", title: "Composants de l'ordinateur" },
    svg: `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #ea580c; width: 100%; height: 100%;">
      <rect x="60" y="30" width="80" height="80" rx="6" fill="#fff7ed" />
      <rect x="78" y="48" width="44" height="44" rx="2" fill="#ffedd5" />
      <path d="M72 30 v-12 M90 30 v-12 M108 30 v-12 M126 30 v-12" />
      <path d="M72 110 v12 M90 110 v12 M108 110 v12 M126 110 v12" />
      <path d="M60 42 h-12 M60 60 h-12 M60 78 h-12 M60 96 h-12" />
      <path d="M140 42 h12 M140 60 h12 M140 78 h12 M140 96 h12" />
      <path d="M104 56 l-12 16 h14 l-10 18" stroke-width="2" stroke="#ea580c" fill="none" />
    </svg>`
  },

  // ── R ──
  {
    term: "RAM",
    img: "wp:Random-access memory",
    icon: "🧠", color: "#fef9c3",
    ar: "ذاكرة الوصول العشوائي — انظر 'Mémoire RAM'.",
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
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Switch/hub in center -->
      <rect x="85" y="65" width="50" height="22" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <circle cx="100" cy="76" r="3" fill="#22c55e"/>
      <circle cx="110" cy="76" r="3" fill="#22c55e"/>
      <circle cx="120" cy="76" r="3" fill="#22c55e"/>
      <text x="110" y="100" font-size="8" text-anchor="middle" fill="#0369a1" font-family="sans-serif">Switch</text>
      <!-- Computer 1 (top-left) -->
      <rect x="15" y="18" width="40" height="30" rx="3" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
      <rect x="19" y="22" width="32" height="20" rx="1" fill="#1e293b"/>
      <text x="35" y="35" font-size="11" text-anchor="middle">🧑‍💻</text>
      <path d="M48 35 l37 35" stroke="#64748b" stroke-width="1.5"/>
      <!-- Computer 2 (top-right) -->
      <rect x="165" y="18" width="40" height="30" rx="3" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
      <rect x="169" y="22" width="32" height="20" rx="1" fill="#1e293b"/>
      <text x="185" y="35" font-size="11" text-anchor="middle">🧑‍💻</text>
      <path d="M172 35 l-37 35" stroke="#64748b" stroke-width="1.5"/>
      <!-- Printer (bottom-left) -->
      <rect x="15" y="108" width="42" height="30" rx="3" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
      <text x="36" y="128" font-size="11" text-anchor="middle">🖨️</text>
      <text x="36" y="144" font-size="7.5" text-anchor="middle" fill="#92400e" font-family="sans-serif">Imprimante</text>
      <path d="M48 115 l37 -28" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3 2"/>
      <!-- Server (bottom-right) -->
      <rect x="163" y="108" width="42" height="30" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="184" y="128" font-size="11" text-anchor="middle">🗄️</text>
      <text x="184" y="144" font-size="7.5" text-anchor="middle" fill="#15803d" font-family="sans-serif">Fichiers partagés</text>
      <path d="M172 115 l-37 -28" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3 2"/>
    </svg>`
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
    ar: "الخادم — حاسوب قوي يُخزِّن المعلومات ويُقدِّm الخدمات للأجهزة الأخرى في الشبكة.",
    def: "Ordinateur puissant qui stocke des données et répond aux demandes d'autres ordinateurs (clients) sur un réseau.",
    example: "Quand tu visites YouTube, ton navigateur demande des vidéos à un serveur de Google qui te les envoie.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Server (right) - tall rack -->
      <rect x="148" y="25" width="55" height="95" rx="5" fill="#e8eefe" stroke="#4338ca" stroke-width="2"/>
      <rect x="155" y="33" width="41" height="10" rx="2" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/>
      <circle cx="190" cy="38" r="3" fill="#22c55e"/>
      <rect x="155" y="48" width="41" height="10" rx="2" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/>
      <circle cx="190" cy="53" r="3" fill="#22c55e"/>
      <rect x="155" y="63" width="41" height="10" rx="2" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/>
      <circle cx="190" cy="68" r="3" fill="#eab308"/>
      <rect x="155" y="78" width="41" height="10" rx="2" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/>
      <circle cx="190" cy="83" r="3" fill="#22c55e"/>
      <text x="175" y="130" font-size="9" text-anchor="middle" fill="#3730a3" font-family="sans-serif" font-weight="bold">Serveur</text>
      <!-- Client computer (left) -->
      <rect x="18" y="50" width="60" height="45" rx="5" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <rect x="23" y="55" width="50" height="32" rx="2" fill="#1e293b"/>
      <text x="48" y="75" font-size="18" text-anchor="middle">🧑‍💻</text>
      <path d="M33 95 l-5 12 h40 l-5 -12" fill="#94a3b8" stroke="none"/>
      <text x="48" y="118" font-size="8.5" text-anchor="middle" fill="#475569" font-family="sans-serif">Client (toi)</text>
      <!-- Request arrow -->
      <path d="M80 70 l60 -12" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#srvarr1)"/>
      <text x="110" y="62" font-size="8" text-anchor="middle" fill="#2563eb" font-family="sans-serif">① Demande</text>
      <!-- Response arrow -->
      <path d="M148 80 l-60 12" stroke="#16a34a" stroke-width="2" marker-end="url(#srvarr2)"/>
      <text x="110" y="105" font-size="8" text-anchor="middle" fill="#16a34a" font-family="sans-serif">② Réponse</text>
      <defs>
        <marker id="srvarr1" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb"/></marker>
        <marker id="srvarr2" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#16a34a"/></marker>
      </defs>
    </svg>`
  },
  {
    term: "Software",
    img: "wp:Software",
    icon: "💾", color: "#e8eefe",
    ar: "البرمجيات — الجانب غير المادي من الحاسوب المتمثل في البرامج والأنظمة.",
    def: "Partie logicielle de l'ordinateur : systèmes d'exploitation, applications, jeux… S'oppose au hardware.",
    example: "Windows, Word et Fortnite sont des software. L'écran, la souris et la RAM sont du hardware.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Hardware side -->
      <rect x="8" y="20" width="95" height="115" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="55" y="38" font-size="10" text-anchor="middle" fill="#92400e" font-family="sans-serif" font-weight="bold">🔧 Hardware</text>
      <text x="55" y="50" font-size="8" text-anchor="middle" fill="#b45309" font-family="sans-serif">On peut toucher</text>
      <text x="25" y="68" font-size="13">🖥️</text><text x="42" y="68" font-size="8" fill="#78350f">Écran</text>
      <text x="25" y="84" font-size="13">⌨️</text><text x="42" y="84" font-size="8" fill="#78350f">Clavier</text>
      <text x="25" y="100" font-size="13">🖱️</text><text x="42" y="100" font-size="8" fill="#78350f">Souris</text>
      <text x="25" y="116" font-size="13">💿</text><text x="42" y="116" font-size="8" fill="#78350f">Disque</text>
      <!-- VS label -->
      <text x="110" y="80" font-size="12" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-weight="bold">VS</text>
      <!-- Software side -->
      <rect x="118" y="20" width="95" height="115" rx="7" fill="#e8eefe" stroke="#4338ca" stroke-width="2"/>
      <text x="165" y="38" font-size="10" text-anchor="middle" fill="#3730a3" font-family="sans-serif" font-weight="bold">💾 Software</text>
      <text x="165" y="50" font-size="8" text-anchor="middle" fill="#4338ca" font-family="sans-serif">On ne peut pas toucher</text>
      <text x="135" y="68" font-size="13">🪟</text><text x="152" y="68" font-size="8" fill="#3730a3">Windows</text>
      <text x="135" y="84" font-size="13">📝</text><text x="152" y="84" font-size="8" fill="#3730a3">Word</text>
      <text x="135" y="100" font-size="13">🎮</text><text x="152" y="100" font-size="8" fill="#3730a3">Jeux</text>
      <text x="135" y="116" font-size="13">🌐</text><text x="152" y="116" font-size="8" fill="#3730a3">Firefox</text>
    </svg>`
  },
  {
    term: "Spam",
    img: "wp:Email spam",
    icon: "📩", color: "#fee2e2",
    ar: "البريد المزعج — رسائل إلكترونية غير مرغوب فيها تُرسَل بكميات كبيرة.",
    def: "Courrier électronique non sollicité, envoyé en masse, à visée publicitaire ou malveillante.",
    example: "Si tu reçois des centaines de mails de publicité sans les avoir demandés, c'est du spam. Utilise un anti-spam.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Inbox on left (overflowing) -->
      <rect x="10" y="60" width="70" height="50" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="45" y="52" font-size="9" text-anchor="middle" fill="#dc2626" font-family="sans-serif" font-weight="bold">📥 Boîte mail</text>
      <!-- Spam emails stacking up -->
      <rect x="18" y="68" width="54" height="12" rx="2" fill="#fca5a5" stroke="#ef4444" stroke-width="1"/>
      <text x="45" y="77" font-size="7.5" text-anchor="middle" fill="#7f1d1d">💰 GAGNEZ 1000€ !!</text>
      <rect x="18" y="82" width="54" height="12" rx="2" fill="#fca5a5" stroke="#ef4444" stroke-width="1"/>
      <text x="45" y="91" font-size="7.5" text-anchor="middle" fill="#7f1d1d">🎁 Cadeau GRATUIT !!</text>
      <rect x="18" y="96" width="54" height="12" rx="2" fill="#fca5a5" stroke="#ef4444" stroke-width="1"/>
      <text x="45" y="105" font-size="7.5" text-anchor="middle" fill="#7f1d1d">⚠️ Cliquez vite !!</text>
      <!-- Arrows from robot sender -->
      <rect x="140" y="40" width="40" height="35" rx="5" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
      <text x="160" y="62" font-size="18" text-anchor="middle">🤖</text>
      <text x="160" y="88" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Robot</text>
      <text x="160" y="98" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">expéditeur</text>
      <path d="M138 55 l-50 20" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#sparr)"/>
      <path d="M138 60 l-50 25" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#sparr)"/>
      <path d="M138 65 l-50 30" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#sparr)"/>
      <defs><marker id="sparr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#dc2626"/></marker></defs>
      <!-- Filter solution -->
      <rect x="95" y="105" width="115" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="152" y="118" font-size="8.5" text-anchor="middle" fill="#166534" font-family="sans-serif">✅ Filtre anti-spam :</text>
      <text x="152" y="128" font-size="8" text-anchor="middle" fill="#166534" font-family="sans-serif">envoie les spams à la corbeille</text>
    </svg>`
  },

  // ── T ──
  {
    term: "Tableur",
    img: "wp:Spreadsheet",
    icon: "📊", color: "#dcfce7",
    ar: "جدول البيانات — برنامج لإنشاء جداول وإجراء الحسابات ورسم المخططات.",
    def: "Logiciel permettant de créer des tableaux avec des calculs automatiques et des graphiques. Ex : Microsoft Excel.",
    example: "Tu utilises Excel pour calculer automatiquement la moyenne de tes notes en entrant une formule =MOYENNE(…)",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Spreadsheet grid -->
      <rect x="8" y="15" width="130" height="125" rx="5" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <!-- Header row -->
      <rect x="8" y="15" width="130" height="18" rx="5" fill="#16a34a"/>
      <text x="14" y="27" font-size="8" fill="white" font-family="sans-serif" font-weight="bold">  A</text>
      <text x="50" y="27" font-size="8" fill="white" font-family="sans-serif" font-weight="bold">Matière</text>
      <text x="98" y="27" font-size="8" fill="white" font-family="sans-serif" font-weight="bold">Note</text>
      <!-- Col dividers -->
      <line x1="42" y1="33" x2="42" y2="140" stroke="#86efac" stroke-width="1"/>
      <line x1="90" y1="33" x2="90" y2="140" stroke="#86efac" stroke-width="1"/>
      <!-- Row 1 -->
      <line x1="8" y1="45" x2="138" y2="45" stroke="#86efac" stroke-width="1"/>
      <text x="14" y="42" font-size="8" fill="#475569" font-family="monospace">1</text>
      <text x="48" y="42" font-size="8" fill="#1e293b" font-family="sans-serif">Maths</text>
      <text x="96" y="42" font-size="8" fill="#1e293b" font-family="monospace">14</text>
      <!-- Row 2 -->
      <line x1="8" y1="57" x2="138" y2="57" stroke="#86efac" stroke-width="1"/>
      <text x="14" y="54" font-size="8" fill="#475569" font-family="monospace">2</text>
      <text x="48" y="54" font-size="8" fill="#1e293b" font-family="sans-serif">Français</text>
      <text x="96" y="54" font-size="8" fill="#1e293b" font-family="monospace">16</text>
      <!-- Row 3 -->
      <line x1="8" y1="69" x2="138" y2="69" stroke="#86efac" stroke-width="1"/>
      <text x="14" y="66" font-size="8" fill="#475569" font-family="monospace">3</text>
      <text x="48" y="66" font-size="8" fill="#1e293b" font-family="sans-serif">Sciences</text>
      <text x="96" y="66" font-size="8" fill="#1e293b" font-family="monospace">12</text>
      <!-- Row 4 : formula -->
      <line x1="8" y1="81" x2="138" y2="81" stroke="#86efac" stroke-width="1"/>
      <text x="14" y="78" font-size="8" fill="#475569" font-family="monospace">4</text>
      <text x="48" y="78" font-size="8" fill="#15803d" font-family="sans-serif" font-weight="bold">Moyenne</text>
      <rect x="90" y="70" width="40" height="13" rx="2" fill="#bbf7d0" stroke="#16a34a" stroke-width="1"/>
      <text x="96" y="79" font-size="7.5" fill="#15803d" font-family="monospace">=MOY()</text>
      <!-- Result -->
      <text x="48" y="95" font-size="8" fill="#16a34a" font-family="sans-serif">→ Résultat :</text>
      <text x="98" y="95" font-size="11" fill="#16a34a" font-family="monospace" font-weight="bold">14</text>
      <!-- Mini bar chart (right side) -->
      <text x="155" y="27" font-size="8" text-anchor="middle" fill="#15803d" font-family="sans-serif" font-weight="bold">📊</text>
      <!-- Bars -->
      <rect x="148" y="65" width="10" height="35" rx="2" fill="#4ade80"/>
      <rect x="162" y="52" width="10" height="48" rx="2" fill="#22c55e"/>
      <rect x="176" y="72" width="10" height="28" rx="2" fill="#86efac"/>
      <!-- x-axis -->
      <line x1="145" y1="100" x2="192" y2="100" stroke="#475569" stroke-width="1.5"/>
      <text x="153" y="110" font-size="7" text-anchor="middle" fill="#475569">M</text>
      <text x="167" y="110" font-size="7" text-anchor="middle" fill="#475569">Fr</text>
      <text x="181" y="110" font-size="7" text-anchor="middle" fill="#475569">Sc</text>
      <text x="165" y="128" font-size="7.5" text-anchor="middle" fill="#15803d" font-family="sans-serif">Graphique auto</text>
    </svg>`
  },
  {
    term: "Télécharger",
    img: "wp:Download",
    icon: "⬇️", color: "#f0fdf4",
    ar: "التنزيل — نقل ملف من الإنترنت أو جهاز بعيد إلى حاسوبك.",
    def: "Action de copier un fichier depuis un ordinateur distant (Internet) vers son propre ordinateur.",
    example: "Tu télécharges un jeu depuis le site officiel : le fichier .exe s'enregistre sur ton disque dur.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Internet cloud / server (top) -->
      <ellipse cx="110" cy="32" rx="32" ry="20" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <ellipse cx="90" cy="40" rx="16" ry="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <ellipse cx="130" cy="40" rx="16" ry="11" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="110" y="36" font-size="9" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Internet</text>
      <!-- File on cloud -->
      <rect x="100" y="24" width="16" height="18" rx="2" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M110 24 l6 0 l0 6 l-6 0" fill="#7dd3fc" stroke="none"/>
      <text x="108" y="36" font-size="6" text-anchor="middle" fill="#0369a1">.exe</text>
      <!-- Downward arrow with motion lines -->
      <line x1="110" y1="52" x2="110" y2="85" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
      <path d="M100 78 l10 12 l10 -12" fill="#16a34a" stroke="none"/>
      <line x1="100" y1="62" x2="95" y2="62" stroke="#86efac" stroke-width="1.5" stroke-dasharray="2 2"/>
      <line x1="120" y1="67" x2="125" y2="67" stroke="#86efac" stroke-width="1.5" stroke-dasharray="2 2"/>
      <line x1="100" y1="72" x2="94" y2="72" stroke="#86efac" stroke-width="1.5" stroke-dasharray="2 2"/>
      <!-- Progress bar -->
      <rect x="45" y="93" width="130" height="14" rx="7" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
      <rect x="45" y="93" width="91" height="14" rx="7" fill="#22c55e"/>
      <text x="110" y="103" font-size="8" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold">70 %</text>
      <!-- Computer / disk (bottom) -->
      <rect x="72" y="115" width="76" height="25" rx="5" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <text x="110" y="131" font-size="9" text-anchor="middle" fill="#475569" font-family="sans-serif">💾 Disque dur</text>
      <!-- Speed label -->
      <text x="185" y="103" font-size="8" fill="#0369a1" font-family="sans-serif">5 Mo/s</text>
    </svg>`
  },
  {
    term: "Traitement de texte",
    img: "wp:LibreOffice Writer",
    icon: "📝", color: "#e8eefe",
    ar: "معالج النصوص — برنامج لكتابة الوثائق وتنسيقها (مثل Microsoft Word).",
    def: "Logiciel permettant de rédiger, corriger et mettre en forme des documents textuels.",
    example: "Tu utilises Word pour taper ton exposé, changer la police, mettre du gras, ajouter des images et imprimer.",
    activity: { id: "p1qwnccuc26", title: "Traitement de texte" },
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Document page -->
      <rect x="55" y="10" width="110" height="130" rx="4" fill="white" stroke="#c7d2fe" stroke-width="2"/>
      <!-- Toolbar strip -->
      <rect x="55" y="10" width="110" height="20" rx="4" fill="#4338ca"/>
      <!-- Toolbar buttons -->
      <rect x="62" y="14" width="14" height="12" rx="2" fill="#6366f1"/>
      <text x="69" y="23" font-size="8" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold">B</text>
      <rect x="80" y="14" width="14" height="12" rx="2" fill="#6366f1"/>
      <text x="87" y="23" font-size="8" text-anchor="middle" fill="white" font-family="sans-serif" font-style="italic">I</text>
      <rect x="98" y="14" width="14" height="12" rx="2" fill="#6366f1"/>
      <text x="105" y="23" font-size="8" text-anchor="middle" fill="white" font-family="sans-serif" text-decoration="underline">S</text>
      <rect x="116" y="14" width="14" height="12" rx="2" fill="#6366f1"/>
      <text x="123" y="23" font-size="8" text-anchor="middle" fill="white" font-family="sans-serif">12</text>
      <rect x="134" y="14" width="24" height="12" rx="2" fill="#6366f1"/>
      <text x="146" y="23" font-size="7" text-anchor="middle" fill="white" font-family="sans-serif">Arial ▾</text>
      <!-- Title line (bold) -->
      <text x="110" y="46" font-size="10" text-anchor="middle" fill="#1e293b" font-family="sans-serif" font-weight="bold">Mon Exposé</text>
      <!-- Text lines -->
      <line x1="66" y1="56" x2="154" y2="56" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="66" y1="64" x2="154" y2="64" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="66" y1="72" x2="140" y2="72" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Image placeholder -->
      <rect x="66" y="80" width="38" height="28" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
      <text x="85" y="98" font-size="14" text-anchor="middle">🖼️</text>
      <!-- More text lines -->
      <line x1="110" y1="84" x2="154" y2="84" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="110" y1="92" x2="154" y2="92" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="110" y1="100" x2="148" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Cursor blink -->
      <line x1="140" y1="108" x2="140" y2="118" stroke="#4338ca" stroke-width="2"/>
      <line x1="66" y1="112" x2="138" y2="112" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Print button hint -->
      <rect x="10" y="90" width="38" height="30" rx="5" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
      <text x="29" y="108" font-size="16" text-anchor="middle">🖨️</text>
      <path d="M48 105 l7 0" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#tttarr)"/>
      <defs><marker id="tttarr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#d97706"/></marker></defs>
      <text x="29" y="128" font-size="7" text-anchor="middle" fill="#b45309" font-family="sans-serif">Imprimer</text>
    </svg>`
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
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Email with virus (entry point) -->
      <rect x="10" y="20" width="48" height="35" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <path d="M10 24 l24 15 l24 -15" stroke="#dc2626" stroke-width="1.5" fill="none"/>
      <text x="34" y="46" font-size="10" text-anchor="middle">☠️</text>
      <text x="34" y="65" font-size="8" text-anchor="middle" fill="#dc2626" font-family="sans-serif">Email piégé</text>
      <!-- Arrow: email opens -->
      <path d="M58 37 l20 10" stroke="#dc2626" stroke-width="2" marker-end="url(#varr)"/>
      <defs><marker id="varr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#dc2626"/></marker></defs>
      <!-- Infected computer -->
      <rect x="78" y="28" width="55" height="42" rx="4" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
      <rect x="82" y="32" width="47" height="30" rx="2" fill="#1e293b"/>
      <text x="105" y="52" font-size="14" text-anchor="middle">🦠</text>
      <path d="M95 70 l-5 12 h30 l-5 -12" fill="#94a3b8" stroke="none"/>
      <!-- Virus spreads to other files -->
      <path d="M133 45 l20 -12" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#varr)"/>
      <path d="M133 48 l20 5" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#varr)"/>
      <path d="M133 55 l20 20" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#varr)"/>
      <!-- Infected files -->
      <rect x="156" y="20" width="30" height="22" rx="3" fill="#fecaca" stroke="#ef4444" stroke-width="1.2"/>
      <text x="171" y="35" font-size="8.5" text-anchor="middle" fill="#7f1d1d">📄🦠</text>
      <rect x="158" y="48" width="30" height="22" rx="3" fill="#fecaca" stroke="#ef4444" stroke-width="1.2"/>
      <text x="173" y="63" font-size="8.5" text-anchor="middle" fill="#7f1d1d">🖼🦠</text>
      <rect x="156" y="78" width="30" height="22" rx="3" fill="#fecaca" stroke="#ef4444" stroke-width="1.2"/>
      <text x="171" y="93" font-size="8.5" text-anchor="middle" fill="#7f1d1d">🎵🦠</text>
      <!-- Solution -->
      <rect x="10" y="105" width="130" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="75" y="118" font-size="8.5" text-anchor="middle" fill="#166534" font-family="sans-serif" font-weight="bold">🛡️ Solution : Antivirus</text>
      <text x="75" y="129" font-size="8" text-anchor="middle" fill="#166534" font-family="sans-serif">Ne jamais ouvrir les pièces jointes suspectes !</text>
    </svg>`
  },

  // ── W ──
  {
    term: "WiFi",
    img: "wp:Wi-Fi",
    icon: "📡", color: "#f0fdf4",
    ar: "واي فاي — تقنية اتصال لاسلكي تُتيح الوصول إلى الإنترنت عبر موجات الراديو.",
    def: "Technologie de connexion sans fil à Internet ou à un réseau local, via des ondes radio.",
    example: "Ton téléphone se connecte au WiFi de la maison pour accéder à Internet sans câble.",
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Router -->
      <rect x="82" y="80" width="56" height="28" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <circle cx="97" cy="94" r="3" fill="#22c55e"/>
      <circle cx="110" cy="94" r="3" fill="#22c55e"/>
      <circle cx="123" cy="94" r="3" fill="#eab308"/>
      <rect x="96" y="68" width="4" height="14" rx="2" fill="#0284c7"/>
      <rect x="120" y="65" width="4" height="17" rx="2" fill="#0284c7"/>
      <text x="110" y="122" font-size="9" text-anchor="middle" fill="#0369a1" font-family="sans-serif" font-weight="bold">Box / Routeur WiFi</text>
      <!-- WiFi signal arcs -->
      <path d="M65 70 a50 50 0 0 1 90 0" stroke="#0284c7" stroke-width="2" fill="none" opacity="0.3"/>
      <path d="M75 62 a40 40 0 0 1 70 0" stroke="#0284c7" stroke-width="2" fill="none" opacity="0.5"/>
      <path d="M85 54 a30 30 0 0 1 50 0" stroke="#0284c7" stroke-width="2.5" fill="none" opacity="0.7"/>
      <path d="M95 46 a20 20 0 0 1 30 0" stroke="#0284c7" stroke-width="3" fill="none"/>
      <!-- Connected devices -->
      <!-- Phone (left) -->
      <rect x="18" y="68" width="22" height="36" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <rect x="21" y="72" width="16" height="24" fill="#bbf7d0"/>
      <circle cx="29" cy="100" r="2.5" fill="#16a34a"/>
      <path d="M29 68 l72 18" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="29" y="116" font-size="8" text-anchor="middle" fill="#15803d" font-family="sans-serif">📱</text>
      <!-- Laptop (right) -->
      <rect x="168" y="72" width="34" height="22" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <rect x="171" y="75" width="28" height="16" fill="#bbf7d0"/>
      <rect x="162" y="94" width="46" height="4" rx="2" fill="#94a3b8"/>
      <path d="M168 82 l-50 12" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="185" y="108" font-size="8" text-anchor="middle" fill="#15803d" font-family="sans-serif">💻</text>
      <!-- No cable label -->
      <text x="110" y="140" font-size="8" text-anchor="middle" fill="#0369a1" font-family="sans-serif">Connexion sans fil via ondes radio</text>
    </svg>`
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
    activity: null,
    svg: `<svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Central web page -->
      <rect x="80" y="50" width="60" height="45" rx="4" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/>
      <text x="110" y="67" font-size="8" text-anchor="middle" fill="#6d28d9" font-family="sans-serif" font-weight="bold">google.com</text>
      <line x1="88" y1="74" x2="130" y2="74" stroke="#c4b5fd" stroke-width="1"/>
      <line x1="88" y1="81" x2="122" y2="81" stroke="#c4b5fd" stroke-width="1"/>
      <!-- Link arrows to other pages -->
      <!-- Top -->
      <rect x="80" y="10" width="60" height="30" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="110" y="29" font-size="8" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">wikipedia.org</text>
      <path d="M110 50 l0 -10" stroke="#7c3aed" stroke-width="1.8" marker-end="url(#wwwarr)"/>
      <!-- Left -->
      <rect x="10" y="55" width="60" height="30" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="40" y="73" font-size="8" text-anchor="middle" fill="#15803d" font-family="sans-serif">youtube.com</text>
      <path d="M80 72 l-10 0" stroke="#7c3aed" stroke-width="1.8" marker-end="url(#wwwarr)"/>
      <!-- Right -->
      <rect x="150" y="55" width="60" height="30" rx="3" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
      <text x="180" y="73" font-size="8" text-anchor="middle" fill="#92400e" font-family="sans-serif">amazon.com</text>
      <path d="M140 72 l10 0" stroke="#7c3aed" stroke-width="1.8" marker-end="url(#wwwarr)"/>
      <!-- Bottom -->
      <rect x="80" y="108" width="60" height="30" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="110" y="127" font-size="8" text-anchor="middle" fill="#b91c1c" font-family="sans-serif">taalim.ma</text>
      <path d="M110 95 l0 13" stroke="#7c3aed" stroke-width="1.8" marker-end="url(#wwwarr)"/>
      <defs><marker id="wwwarr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#7c3aed"/></marker></defs>
      <!-- Hyper link label -->
      <text x="110" y="146" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Des millions de pages reliées par des liens</text>
    </svg>`
  }
];