export interface BlogPost {
  slug: string
  title: string
  seoTitle: string
  excerpt: string
  content: string[]
  category: string
  date: string
  readTime: string
  author: string
  image: string
  keywords: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "louer-bateau-sans-permis-golfe-morbihan",
    title: "Comment louer un bateau sans permis dans le Golfe du Morbihan ?",
    seoTitle: "Location Bateau Sans Permis Golfe du Morbihan : Guide & Conseils",
    excerpt: "Découvrez toutes les astuces, règles de sécurité et zones de navigation accessibles sans permis hauturier ou côcier dans le Golfe du Morbihan.",
    category: "Guide Débutant",
    date: "15 Juin 2025",
    readTime: "5 min",
    author: "Loïc · Morbihan Nautic",
    image: "/dest-vannes.jfif",
    keywords: ["location bateau sans permis morbihan", "louer bateau sans permis vannes", "bateau electrique golfe morbihan"],
    content: [
      "Vous rêvez d'explorer le Golfe du Morbihan au fil de l'eau mais vous ne possédez pas de permis hauturier ni côcier ? C'est tout à fait possible ! De nombreux loueurs professionnels partenaires proposent des embarcations légères de moins de 6 chevaux (4,5 kW) spécialement aménagées pour la navigation familiale sans permis.",
      "### Quels bateaux peut-on louer sans permis ?",
      "Les bateaux accessibles sans permis dans le Golfe du Morbihan sont principalement :",
      "• **Les bateaux à moteur hors-bord légers (6 cv)** : Idéaux pour 4 à 6 personnes, équipés de banquettes confortables, tauds de soleil et coffres de rangement.",
      "• **Les vedettes électriques ou solaires** : Silencieuses, parfaites pour naviguer entre Vannes, Conleau et les rives de Séné sans aucune nuisance.",
      "### Où naviguer sans permis dans le Golfe ?",
      "Sans permis, la zone de navigation est délimitée pour votre sécurité. Vous pouvez facilement effectuer le tour de l'Île-aux-Moines, faire escale sur l'Île d'Arz ou remonter la paisible rivière d'Auray jusqu'au port du Bono.",
      "⚠️ **Attention au courant de la Jument** : Les bateaux de 6 cv manquent de puissance pour franchir les courants violents. Nos loueurs vous indiqueront les zones abritées à privilégier !",
      "### Conseils pour une sortie sans permis réussie",
      "1. **Réservez à l'avance** : En haute saison (juillet-août), la demande est forte sur les 6 ports de départ.",
      "2. **Écoutez le briefing sécurité** : Prise en main de la barre, fonctionnement des gilets et règles d'amarrage vous seront expliqués avant le départ.",
      "3. **Respectez la vitesse** : La vitesse dans la bande des 300 mètres et dans les chenaux est limitée à 5 nœuds."
    ]
  },
  {
    slug: "passer-courant-de-la-jument",
    title: "Franchir le courant de la Jument en sécurité : conseils & horaires",
    seoTitle: "Courant de la Jument Golfe du Morbihan : Navigation & Sécurité",
    excerpt: "Deuxième courant le plus fort d'Europe, le courant de la Jument atteint 9 nœuds. Voici comment le franchir en toute sérénité lors de votre location de bateau.",
    category: "Technique & Sécurité",
    date: "28 Juin 2025",
    readTime: "7 min",
    author: "Loïc · Morbihan Nautic",
    image: "/hero-bg.jpeg",
    keywords: ["courant de la jument vitesse", "franchir la jument morbihan", "navigation courant jument"],
    content: [
      "Situé entre la pointe de la Jument (Île-aux-Moines) et la pointe de Berder (Larmor-Baden), le courant de la Jument est le 2ème courant de marée le plus puissant d'Europe. Il peut atteindre jusqu'à **9 nœuds (environ 17 km/h)** lors des grandes marées !",
      "### Pourquoi ce courant est-il si impressionnant ?",
      "Le Golfe du Morbihan se comporte comme un véritable réservoir de marée. À chaque changement de marée, des millions de mètres cubes d'eau s'engouffrent ou s'échappent par un goulot d'étranglement de moins de 1 km de large.",
      "### Les 4 règles d'or pour franchir la Jument",
      "1. **Anticipez la marée (L'Heure d'Étale)** : Traverser l'étale de haute ou basse mer vous garantit une eau calme et sans remous.",
      "2. **Conservez de la vitesse à la barre** : En bateau à moteur ou semi-rigide (150cv+), gardez du gaz pour conserver l'écoutille et la gouverne face au courant.",
      "3. **Attention au clapot par vent contre courant** : Si le vent de Sud-Ouest souffle contre un courant de descendant (jusant), des vagues courtes et abruptes se forment.",
      "4. **Ne pas mouiller dans le chenal** : Le fond dégringole à plus de 35 mètres avec des failles rocheuses où les ancres peuvent se coincer définitivement.",
      "Nos loueurs partenaires basés à Larmor-Baden, Arradon et Port-Blanc vous fournissent la carte des courants du jour et l'annuaire des marées lors de votre briefing !"
    ]
  },
  {
    slug: "les-plus-belles-escales-iles-golfe-morbihan",
    title: "Les 5 plus belles îles à visiter absolument en bateau dans le Golfe",
    seoTitle: "Top 5 des Îles du Golfe du Morbihan en Bateau | Guide Escale",
    excerpt: "De l'Île-aux-Moines aux plages sauvages de Houat et Hoëdic, découvrez notre classement des meilleures escales accessibles en bateau.",
    category: "Itinéraires & Découverte",
    date: "10 Juillet 2025",
    readTime: "6 min",
    author: "Loïc · Morbihan Nautic",
    image: "/dest-port-navalo.jfif",
    keywords: ["iles du golfe du morbihan bateau", "escale ile aux moines location bateau", "houat en bateau"],
    content: [
      "Avec ses 42 îles et îlots essaimés sur une mer intérieure abritée, le Golfe du Morbihan est l'un des plus magnifiques bassins de navigation au monde. Voici notre Top 5 des escales inoubliables :",
      "### 1. L'Île-aux-Moines : La perle du Golfe",
      "La plus grande île du Golfe offre un charme enchanteur avec ses ruelles fleuries de mimosas et ses maisons de capitaines. Accostez au ponton du Port du Lézard et louez un vélo pour faire le tour de la pointe du Trec'h.",
      "### 2. L'Île d'Arz : L'île des capitaines",
      "Plus sauvage et paisible, l'Île d'Arz possède des plages de sable fin aux eaux calmes. Le mouillage devant la pointe de Berno est idéal pour pique-niquer en famille.",
      "### 3. Houat : Le paradis aux eaux turquoises",
      "En sortant du Golfe par Port-Navalo ou Le Crouesty, naviguez 40 minutes vers le large pour atteindre l'île de Houat. Sa plage de Treac'h er Goured offre un sable blanc extra-fin et une eau transparente digne des Caraïbes !",
      "### 4. Er Lannic & Ses Mégalithes Immergés",
      "Accessible uniquement en bateau à marée basse, cette petite île abrite une double enceinte de cromlechs néolithiques à demi immergés dans la mer.",
      "### 5. L'Île de Gavrinis & Son Cairn Mystique",
      "Située face à Larmor-Baden, Gavrinis abrite le plus beau monument mégalithique sculpté d'Europe. Un mouillage sur coffre au nord de l'île permet d'y accoster facilement."
    ]
  },
  {
    slug: "peche-en-mer-golfe-du-morbihan-spots-conseils",
    title: "Guide de la pêche au bar dans le Golfe du Morbihan : spots et leurres",
    seoTitle: "Pêche au Bar Golfe du Morbihan : Spots, Matériel & Conseils",
    excerpt: "Où et comment pêcher le bar au leurre dans les courants du Golfe ? Découvrez les meilleurs spots, marées et types de bateaux adaptés.",
    category: "Pêche Sportive",
    date: "02 Août 2025",
    readTime: "6 min",
    author: "Loïc · Morbihan Nautic",
    image: "/dest-trinite.jfif",
    keywords: ["peche bar golfe morbihan", "spot peche bateau morbihan", "location bateau peche vannes"],
    content: [
      "Le Golfe du Morbihan est réputé dans la France entière comme un eldorado pour la pêche sportive du bar (Dicentrarchus labrax). Les marées puissantes et l'abondance de lançons et sardines attirent les prédateurs dans les veines d'eau.",
      "### Les 3 meilleurs spots de pêche du Golfe",
      "• **Le chenal de la Jument & Pointe de Lochrist** : Pêche de dérive au leurre souple (Black Minnow 120-140) dans 15 à 25 mètres d'eau.",
      "• **Le mouton de la pointe d'Arradon** : Idéal au leurre de surface (Super Spook, Asturie) aux premières lueurs de l'aube.",
      "• **Le goulet de Port-Navalo** : Chasses spectaculaires en fin de journée quand la marée rentre dans le Golfe.",
      "### Quel bateau louer pour la pêche ?",
      "Privilégiez un **bateau Open ou Semi-rigide équipé d'un moteur de 115 à 150 cv**, doté d'un **sondeur GPS de pêche** et d'un pont dégagé à 360° pour lancer sans encombre. Nos loueurs partenaires préparent les embarcations à la demande !"
    ]
  },
  {
    slug: "reglementation-mouillage-reserve-naturelle-morbihan",
    title: "Mouillages et réglementation écologique dans le Golfe du Morbihan",
    seoTitle: "Mouillage Golfe du Morbihan : Réglementation & Zones Protegées",
    excerpt: "Tout savoir sur les zones de mouillage autorisées, les coffres écologiques et les règles Natura 2000 pour préserver le milieu marin.",
    category: "Environnement & Règles",
    date: "18 Août 2025",
    readTime: "5 min",
    author: "Loïc · Morbihan Nautic",
    image: "/hero-bg.jpeg",
    keywords: ["mouillage golfe morbihan", "reglementation bateau morbihan", "mouillage ecologique ile aux moines"],
    content: [
      "Le Golfe du Morbihan est classé **Parc Naturel Régional** et zone protégée Natura 2000. Pour préserver les herbiers de Zostère et la faune marine, la navigation et l'amarrage obéissent à des règles simples mais indispensables.",
      "### Les zones de mouillage organisées (ZMEL)",
      "Dans de nombreuses baies (Arradon, Île-aux-Moines, Port-Blanc), le mouillage sur ancre classique est interdit pour éviter d'arracher les fonds marins. Des bouées écologiques (coffres) sont mises à disposition des plaisanciers.",
      "### Vitesse et distances de sécurité",
      "• **300 mètres des côtes** : Vitesse limitée strictement à 5 nœuds.",
      "• **Chenaux balisés** : Priorité absolue aux navires à passagers (vedettes de l'Île-aux-Moines).",
      "• **Réserve ornithologique des îles du Sud** : Interdiction de s'approcher à moins de 100 mètres des îles de Logoden et Brannec au printemps pour préserver la nidification des oiseaux."
    ]
  }
]
