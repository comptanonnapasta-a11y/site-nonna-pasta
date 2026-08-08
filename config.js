/* ============================================================================
   NONNA PASTA — FICHIER DE CONTENU À METTRE À JOUR VOUS-MÊME
   ----------------------------------------------------------------------------
   C'est le SEUL fichier à modifier au quotidien.
   Changez uniquement le texte situé ENTRE LES GUILLEMETS "  ".
   Ne supprimez pas les virgules, guillemets, crochets [ ] ou accolades { }.
   Après modification : enregistrez, puis rechargez la page (touche F5).
   ============================================================================ */

window.NONNA = {

  /* ==========================================================================
     1) LA SAUCE DE LA SEMAINE  (à changer chaque semaine)
     Écrivez simplement le nom de la sauce du moment entre les guillemets.
     ========================================================================== */
  sauceDeLaSemaine: "Crème de truffe & parmesan",

  /* Les petits boutons "nos sauces" affichés sous le texte.
     Vous pouvez en ajouter / retirer / renommer.
     Séparez chaque sauce par une virgule, chacune entre guillemets. */
  sauces: [
    "Crème de truffe",
    "Bolognaise mijotée",
    "Pesto di casa",
    "Quatre fromages",
    "Arrabbiata"
  ],

  /* ==========================================================================
     3) CLICK & COLLECT  (commande en ligne + retrait en boutique)
     ----------------------------------------------------------------------------
     La commande, le paiement et le ticket cuisine sont gérés par votre système
     de caisse (L'Addition). Ici, on relie simplement le site à votre page de
     commande en ligne.

     >>> QUAND C'EST PRÊT (L'Addition vous a donné votre lien de commande) :
         1. Collez ce lien dans "url" ci-dessous, entre les guillemets.
         2. Passez "actif" de  false  à  true .
         3. Enregistrez et rechargez : les boutons Click & Collect deviennent
            actifs partout sur le site.
     >>> TANT QUE "actif" est  false  : le site affiche joliment
         « Bientôt disponible » (aucun bouton ne mène dans le vide).
     ========================================================================== */
  clickAndCollect: {
    actif: false,
    url: "",
    texteBouton: "Commander & retirer",
    messageActif: "Commandez en ligne et retirez votre commande en boutique, sans attente.",
    messageBientot: "Bientôt disponible : commandez en ligne et retirez en boutique."
  },

  /* ==========================================================================
     2) LE MENU  (à changer à la rentrée ou quand vous voulez)
     ----------------------------------------------------------------------------
     Chaque plat est un bloc { ... } contenant :
       categorie   : "pates" | "salades" | "pizza" | "desserts" | "boissons"
       image       : le nom du fichier photo, dans le dossier assets/images/
       badge       : petite étiquette (ex "Signature"). Mettez "" si aucune.
       nom         : le nom du plat
       description : la description

     >>> POUR CHANGER UNE PHOTO :
         - Solution la plus simple : remplacez le fichier dans assets/images/
           par votre nouvelle photo EN GARDANT LE MÊME NOM (ex "pizza.jpg").
         - Ou : déposez une nouvelle photo dans assets/images/ et écrivez son
           nom ici dans "image" (ex image: "nouvelle-pizza.jpg").
     >>> POUR AJOUTER UN PLAT : copiez un bloc { ... } entier, collez-le, et
         modifiez son contenu. N'oubliez pas la virgule entre chaque bloc.
     >>> POUR RETIRER UN PLAT : supprimez son bloc { ... } (et sa virgule).
     ========================================================================== */
  menu: [
    {
      categorie: "pates",
      image: "tortellini.jpg",
      badge: "Signature",
      nom: "Tortellini crème de truffe",
      description: "Tortellini fondants, sauce crémeuse à la truffe, roquette et copeaux de parmesan."
    },
    {
      categorie: "pates",
      image: "pates-semaine.jpg",
      badge: "Cuisson minute",
      nom: "Pâtes, sauce de la semaine",
      description: "Penne ou fusilli cuits à la minute, nappés de la sauce crémeuse du moment."
    },
    {
      categorie: "pates",
      image: "lasagne.jpg",
      badge: "",
      nom: "Lasagnes de la Nonna",
      description: "Généreuses, gratinées au parmesan, servies avec une salade de roquette."
    },
    {
      categorie: "salades",
      image: "salade-cesar.jpg",
      badge: "",
      nom: "Salade César & avocat",
      description: "Poulet rôti, avocat, croûtons dorés, tomates cerises et parmesan."
    },
    {
      categorie: "salades",
      image: "salade-prosciutto.jpg",
      badge: "",
      nom: "Prosciutto & melon",
      description: "Jambon cru, melon, billes de mozzarella au pesto et jeunes pousses."
    },
    {
      categorie: "salades",
      image: "caprese-pesto.jpg",
      badge: "",
      nom: "Mozzarella al pesto",
      description: "Billes de mozzarella nappées de pesto, salade croquante et tomates du marché."
    },
    {
      categorie: "pizza",
      image: "pizza.jpg",
      badge: "",
      nom: "Pizza dinde & champignons",
      description: "Pâte fine, mozzarella, dinde, champignons frais et roquette."
    },
    {
      categorie: "pizza",
      image: "panini.jpg",
      badge: "",
      nom: "Panini italiano",
      description: "Pain grillé, charcuterie italienne, mozzarella fondante et pesto."
    },
    {
      categorie: "desserts",
      image: "dessert-choco.jpg",
      badge: "Dolci",
      nom: "Feuilleté au chocolat",
      description: "Pâte feuilletée croustillante et cœur généreux au chocolat."
    },
    {
      categorie: "desserts",
      image: "dessert-framboise.jpg",
      badge: "",
      nom: "Verrine framboise",
      description: "Crème onctueuse et miroir de framboise, tout en fraîcheur."
    },
    {
      categorie: "desserts",
      image: "salade-fruits.jpg",
      badge: "",
      nom: "Salade de fruits frais",
      description: "Fruits de saison taillés à la main et pointe de menthe."
    },
    {
      categorie: "boissons",
      image: "boisson-bona.jpg",
      badge: "Sicilia",
      nom: "Bona Mandarinata",
      description: "Le soda sicilien à la mandarine, recette originale depuis 1947."
    },
    {
      categorie: "boissons",
      image: "boisson-zuegg.jpg",
      badge: "",
      nom: "Zuegg Fragola",
      description: "Nectar de fraise méditerranéenne, doux et fruité."
    },
    {
      categorie: "boissons",
      image: "boisson-lipton.jpg",
      badge: "",
      nom: "Ice Tea framboise",
      description: "Thé glacé rafraîchissant, saveur framboise."
    }
  ]

};
