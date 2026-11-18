/* Choix du syndic — copropriété du 7 rue Marceau
   Données tirées des projets de contrat transmis par chaque cabinet. */
(function () {
  "use strict";

  /* =================== DONNÉES =================== */

  var CABINETS = [
    {
      id: "acgp",
      nom: "ACGP",
      long: "ACGP — Agence Conseil Gestion Patrimoine",
      prix: 2160,
      prixTxt: "2 160 € TTC",
      adr: "62 rue André Joineau, 93310 Le Pré-Saint-Gervais — SARL, RCS Bobigny " +
           "521 933 697. Contrat de janvier 2025, douze mois. 1 800 € HT.",
      plus: [
        "Les taux horaires les plus bas, et de loin : 66 € TTC de l'heure avec " +
        "déplacement, 36 € TTC sans déplacement, contre 108 € TTC chez CPI Gestion et " +
        "SLP Copro.",
        "Interventions d'urgence hors heures ouvrables facturées sans aucune majoration, " +
        "là où CPI Gestion applique +50 % et SLP Copro +40 %. Sur un sinistre, c'est la " +
        "différence entre 66 € et 162 € de l'heure.",
        "Les sommes versées par l'assureur au syndic au titre d'un sinistre viennent en " +
        "déduction de sa rémunération : il ne peut pas être payé deux fois. Aucun autre " +
        "contrat ne le prévoit.",
        "Quatre visites périodiques par an, le nombre le plus élevé des quatre.",
        "Assemblée générale supplémentaire au forfait : 450 € TTC pour deux heures, " +
        "contre 432 à 720 € TTC chez CPI Gestion et 834 € TTC chez SLP Copro.",
        "Mise en demeure d'un tiers 36 € TTC ; constitution d'un dossier avocat ou " +
        "huissier 150 € TTC.",
        "Garantie financière de 1 000 000 €, responsabilité civile professionnelle " +
        "auprès des Lloyd's.",
        "Cabinet installé au Pré-Saint-Gervais, à quelques rues de l'immeuble.",
        "Le cabinet indique être joignable par téléphone de 9 h à 17 h du lundi au " +
        "vendredi, soit environ quarante heures par semaine, très au-delà de ce que " +
        "prévoit son contrat."
      ],
      moins: [
        "Le contrat ne prévoit qu'un accueil téléphonique le lundi et le mardi de 14 h " +
        "à 17 h, soit six heures par semaine, et aucun engagement de délai de réponse. " +
        "La disponibilité de 9 h à 17 h du lundi au vendredi annoncée par le cabinet " +
        "n'y figure pas : tant qu'elle n'est pas écrite, elle n'engage à rien.",
        "Visites de 30 minutes minimum, sans rapport écrit et hors la présence du " +
        "président du conseil syndical — avec la réserve « sauf demande du conseil " +
        "syndical », qui reste à faire acter.",
        "Les deux réunions de conseil syndical figurent parmi les prestations que le " +
        "forfait « pourra » inclure : sans accord exprès, elles n'y sont pas.",
        "Pénalités de retard du syndic laissées à « (montant fixé par décret) », donc " +
        "inapplicables en pratique.",
        "Envoi d'un document déjà présent sur l'intranet facturé 12 € TTC.",
        "État daté 380 € TTC, soit le plafond légal ; opposition sur mutation 150 € TTC.",
        "Reprise de la comptabilité des exercices non approuvés en vacation horaire, " +
        "66 € TTC de l'heure, sans plafond.",
        "SARL au capital de 7 000 €, structure de petite taille."
      ]
    },
    {
      id: "matcoop",
      nom: "Matera coopératif",
      long: "MATERA — formule coopérative",
      prix: 2480,
      prixTxt: "2 480 € TTC",
      adr: "10 rue Treilhard, 75008 Paris — plus 200 € TTC de frais de mise en place la " +
           "première année.",
      plus: [
        "Le syndic est un copropriétaire ; Matera fournit la plateforme comptable, la " +
        "veille juridique, les convocations et l'assistance.",
        "Honoraires de mutation (état daté, pré-état daté, certificat article 20-II), " +
        "suivi de travaux et immatriculation au registre national : 0 €.",
        "Assurance responsabilité civile des membres du conseil syndical incluse " +
        "(AXA, 9 M€), frais bancaires inclus.",
        "Référent dédié, support par courriel sous six heures ouvrées en moyenne.",
        "Plateforme et application mobile accessibles à tous les copropriétaires."
      ],
      moins: [
        "Suppose qu'un copropriétaire accepte d'exercer la fonction de syndic et la " +
        "responsabilité qui l'accompagne.",
        "L'adoption de cette formule requiert un vote de l'assemblée à la majorité de " +
        "l'article 25.",
        "Plusieurs prestations sont en option payante : assistance travaux 300 € TTC, " +
        "recouvrement des impayés 300 € TTC, dégât des eaux à partir de 400 € TTC, " +
        "préparation et tenue de l'assemblée à partir de 400 € TTC.",
        "Révision tarifaire annuelle possible, plafonnée à 5 % par an."
      ]
    },
    {
      id: "cpi",
      nom: "CPI Gestion",
      long: "CPI GESTION",
      prix: 3180,
      prixTxt: "3 180 € TTC",
      adr: "8 rue de l'Isly, 75008 Paris — 2 650 € HT.",
      plus: [
        "Visites d'une heure minimum, en présence du président du conseil syndical, " +
        "contre 30 minutes sans témoin chez ACGP.",
        "Deux réunions de conseil syndical de deux heures incluses au forfait.",
        "Pénalités de retard chiffrées : 1 € par jour, déduites de sa rémunération.",
        "Clause « Concurrence – Éthique » : engagement à ne percevoir aucune commission, " +
        "à déclarer ses filiales et à mettre les fournisseurs en concurrence avec le " +
        "conseil syndical. Aucun autre contrat ne la comporte.",
        "Assemblée supplémentaire tenable jusqu'à 22 h ; 432 € TTC pour quatre heures en " +
        "journée.",
        "Deux réductions automatiques du forfait : 60 € TTC et 96 € TTC si l'assemblée " +
        "retire certaines prestations.",
        "Accueil du lundi au vendredi, 9 h-13 h et 14 h-17 h."
      ],
      moins: [
        "Taux horaire de 108 € TTC en heures ouvrables, 180 € TTC en dehors, majoré de " +
        "50 % en cas d'urgence, soit 162 € TTC de l'heure sur un sinistre un dimanche.",
        "Assemblée supplémentaire en soirée : 720 € TTC.",
        "Plage de l'assemblée annuelle limitée à 9 h-17 h.",
        "État daté 380 € TTC ; opposition sur mutation 180 € TTC ; certificat " +
        "article 20-II 150 € TTC.",
        "Reprise de la comptabilité des exercices non approuvés : 108 € TTC de l'heure, " +
        "sans plafond.",
        "Aucun gestionnaire dédié nommé, aucun engagement de délai de réponse.",
        "Société récente, carte professionnelle de 2024 : demander l'attestation de " +
        "garantie financière en cours de validité et des références comparables.",
        "Le préambule vise les articles 1184 du code civil au lieu des articles 1984 " +
        "relatifs au mandat."
      ]
    },
    {
      id: "slp",
      nom: "SLP Copro",
      long: "SLP COPRO",
      prix: 4200,
      prixTxt: "4 200 € TTC",
      adr: "123 avenue de Rosny, 93250 Villemomble — siège à Arnouville (95). 3 500 € HT.",
      plus: [
        "Pénalités de retard les plus dissuasives : 15 € par jour sur la fiche " +
        "synthétique et sur la transmission des pièces au conseil syndical.",
        "Plage de l'assemblée de 9 h 30 à 20 h : une assemblée en soirée reste au forfait.",
        "État daté 300 € TTC et opposition sur mutation 90 € TTC, les moins chers des quatre.",
        "Garantie financière GALIAN de 920 000 €.",
        "Le contrat mentionne le numéro d'immatriculation de la copropriété et le nombre " +
        "exact de lots : le dossier a été étudié."
      ],
      moins: [
        "Deux visites d'une heure, mais les mentions « avec ou sans rapport » et « en " +
        "présence ou non du président du conseil syndical » sont laissées en blanc.",
        "Taux horaire de 108 € TTC, majoré de 40 % en urgence, soit 151,20 € TTC de " +
        "l'heure.",
        "Assemblée générale demandée par un copropriétaire : 834 € TTC, le tarif le plus " +
        "élevé des quatre.",
        "Reprise de la comptabilité des exercices non approuvés : 108 € TTC de l'heure " +
        "(article 7.2.1), sans plafond.",
        "Accueil téléphonique le matin uniquement, de 9 h 30 à 12 h 30, fermé le samedi.",
        "La date de la carte professionnelle diffère entre le contrat (2023) et la fiche " +
        "d'information (2026)."
      ]
    }
  ];

  /* Grille : douze critères notés de la même façon pour tous.
     Ordre des notes : acgp, matcoop, cpi, slp, matpro */
  var NOTE_MAX = 5;

  var CRITERES = [
    { t: "Honoraires annuels",
      d: "Montant du forfait de gestion courante, de 2 160 € à 4 300 € TTC.",
      n: { acgp: 5, matcoop: 4, cpi: 3, slp: 1, matpro: 1 },
      j: {
        acgp: "1 800 € HT, soit 2 160 € TTC par an : le forfait le moins cher des quatre.",
        matcoop: "2 480 € TTC par an, plus 200 € TTC de frais de mise en place la première année.",
        cpi: "2 650 € HT, soit 3 180 € TTC par an : au milieu des quatre propositions.",
        slp: "3 500 € HT, soit 4 200 € TTC par an.",
        matpro: "4 300 € TTC par an : le forfait le plus cher des quatre."
      } },
    { t: "Coût horaire des interventions hors forfait",
      d: "Tarif appliqué au temps passé : 66 € chez ACGP, 108 € chez CPI et SLP, " +
         "forfaits à l'acte chez Matera.",
      n: { acgp: 5, matcoop: 3, cpi: 2, slp: 2, matpro: 3 },
      j: {
        acgp: "66 € TTC de l'heure avec déplacement, 36 € TTC sans déplacement : le tarif le plus bas, et de loin.",
        matcoop: "Pas de tarif horaire, mais des forfaits à l'acte de 300 à 400 € TTC : prévisible, mais cher pour une intervention courte.",
        cpi: "108 € TTC de l'heure en heures ouvrables, 180 € TTC en dehors.",
        slp: "108 € TTC de l'heure, même tarif que CPI Gestion.",
        matpro: "Mêmes forfaits à l'acte que la formule coopérative."
      } },
    { t: "Urgences et sinistres",
      d: "Majoration appliquée hors heures ouvrables : aucune chez ACGP, +50 % chez CPI, " +
         "+40 % chez SLP.",
      n: { acgp: 5, matcoop: 2, cpi: 1, slp: 2, matpro: 2 },
      j: {
        acgp: "Aucune majoration hors heures ouvrables, et les sommes versées par l'assureur viennent en déduction de sa rémunération. Unique parmi les quatre.",
        matcoop: "La gestion d'un dégât des eaux est une option facturée à partir de 400 € TTC.",
        cpi: "Tarif horaire majoré de 50 % en urgence, soit 162 € TTC de l'heure.",
        slp: "Tarif horaire majoré de 40 % en urgence, soit 151,20 € TTC de l'heure.",
        matpro: "Même option payante que la formule coopérative."
      } },
    { t: "Joignabilité et délai de réponse",
      d: "Amplitude de l'accueil et engagement écrit sur les délais.",
      n: { acgp: 4, matcoop: 5, cpi: 3, slp: 2, matpro: 5 },
      j: {
        acgp: "Le cabinet indique être joignable par téléphone de 9 h à 17 h du lundi au vendredi, soit environ quarante heures par semaine — l'amplitude la plus large après Matera. Le contrat, lui, ne prévoit que le lundi et le mardi de 14 h à 17 h, et aucun délai de réponse : cette disponibilité reste un engagement verbal, à faire inscrire au contrat.",
        matcoop: "Référent dédié et réponse par courriel sous six heures ouvrées en moyenne.",
        cpi: "Accueil du lundi au vendredi, 9 h-13 h et 14 h-17 h, mais aucun délai de réponse inscrit au contrat.",
        slp: "Accueil téléphonique le matin uniquement, de 9 h 30 à 12 h 30, fermé le samedi.",
        matpro: "Même référent dédié que la formule coopérative."
      } },
    { t: "Moyens de contrôle du conseil syndical",
      d: "Durée des visites, rapport écrit, présence du président, réunions incluses.",
      n: { acgp: 2, matcoop: 5, cpi: 5, slp: 3, matpro: 3 },
      j: {
        acgp: "Quatre visites de 30 minutes, sans rapport écrit ni présence du président du conseil syndical ; les deux réunions du conseil ne sont qu'optionnelles.",
        matcoop: "Le conseil syndical conduit lui-même la gestion : le contrôle est par construction maximal.",
        cpi: "Visites d'une heure en présence du président, et deux réunions de deux heures incluses au forfait.",
        slp: "Deux visites d'une heure, mais les mentions sur le rapport écrit et la présence du président sont laissées en blanc.",
        matpro: "Plateforme ouverte à tous les copropriétaires, mais aucun engagement de visite sur site documenté."
      } },
    { t: "Pénalités de retard dues par le syndic",
      d: "Montant chiffré au contrat et donc réellement applicable.",
      n: { acgp: 1, matcoop: 2, cpi: 3, slp: 5, matpro: 2 },
      j: {
        acgp: "« (montant fixé par décret) € par jour de retard » : la mention n'est pas renseignée, la pénalité est inapplicable en pratique.",
        matcoop: "Aucune pénalité chiffrée. La question se pose différemment, le syndic étant un copropriétaire.",
        cpi: "1 € par jour de retard, déduit de sa rémunération : chiffré, donc applicable, mais peu dissuasif.",
        slp: "15 € par jour de retard : le montant le plus dissuasif des quatre.",
        matpro: "Aucune pénalité chiffrée dans les éléments transmis."
      } },
    { t: "Frais de mutation imputés aux copropriétaires",
      d: "État daté, opposition sur mutation, certificat article 20-II.",
      n: { acgp: 2, matcoop: 5, cpi: 1, slp: 4, matpro: 5 },
      j: {
        acgp: "État daté 380 € TTC, soit le plafond légal ; opposition sur mutation 150 € TTC.",
        matcoop: "État daté, pré-état daté et certificat de l'article 20-II à 0 €.",
        cpi: "État daté 380 € TTC, opposition sur mutation 180 € TTC, certificat article 20-II 150 € TTC : le plus cher des quatre.",
        slp: "État daté 300 € TTC et opposition sur mutation 90 € TTC : les moins chers hors Matera.",
        matpro: "Mêmes honoraires de mutation à 0 € que la formule coopérative."
      } },
    { t: "Coût d'une assemblée générale supplémentaire",
      d: "Forfait ou temps passé pour une assemblée hors assemblée annuelle.",
      n: { acgp: 5, matcoop: 4, cpi: 3, slp: 1, matpro: 3 },
      j: {
        acgp: "Forfait de 450 € TTC pour deux heures, dépassement facturé 132 € TTC de l'heure.",
        matcoop: "Préparation et tenue de l'assemblée en option, à partir de 400 € TTC.",
        cpi: "432 € TTC pour quatre heures en journée, mais 720 € TTC si l'assemblée se tient en soirée.",
        slp: "834 € TTC pour une assemblée demandée par un copropriétaire : le tarif le plus élevé des quatre.",
        matpro: "Non documenté dans les éléments transmis."
      } },
    { t: "Coût de reprise du dossier",
      d: "Reprise de la comptabilité des exercices non approuvés, dossier Bridou compris. " +
         "Aucun cabinet ne la plafonne.",
      n: { acgp: 4, matcoop: 3, cpi: 2, slp: 2, matpro: 3 },
      j: {
        acgp: "Vacation horaire de 66 € TTC, sans plafond : le moins cher, mais le nombre d'heures reste inconnu.",
        matcoop: "Non documenté dans les éléments transmis.",
        cpi: "108 € TTC de l'heure, sans plafond.",
        slp: "108 € TTC de l'heure par renvoi à l'article 7.2.1, sans plafond.",
        matpro: "Non documenté dans les éléments transmis."
      } },
    { t: "Transparence et engagements éthiques",
      d: "Absence de commissions, déclaration des filiales, frais inclus.",
      n: { acgp: 3, matcoop: 4, cpi: 5, slp: 3, matpro: 4 },
      j: {
        acgp: "Le contrat ne comporte aucun engagement particulier sur les commissions ou les sociétés liées.",
        matcoop: "Frais bancaires et assurance du conseil syndical inclus ; tarifs des options publiés.",
        cpi: "Clause « Concurrence – Éthique » : aucune commission, filiales déclarées, fournisseurs mis en concurrence avec le conseil syndical. Unique parmi les quatre.",
        slp: "Aucun engagement particulier sur ce point.",
        matpro: "Mêmes engagements que la formule coopérative."
      } },
    { t: "Solidité de la structure",
      d: "Ancienneté, garantie financière, cohérence des pièces fournies.",
      n: { acgp: 3, matcoop: 5, cpi: 2, slp: 3, matpro: 5 },
      j: {
        acgp: "SARL au capital de 7 000 €, garantie financière de 1 000 000 €, carte professionnelle de 2023.",
        matcoop: "Structure nationale ; assurance responsabilité civile des membres du conseil syndical de 9 M€ incluse.",
        cpi: "Société récente, carte professionnelle de 2024 : l'attestation de garantie financière en cours de validité reste à produire.",
        slp: "Garantie financière GALIAN de 920 000 €, mais la date de la carte professionnelle diffère entre le contrat et la fiche d'information.",
        matpro: "Même structure que la formule coopérative."
      } },
    { t: "Simplicité de mise en œuvre",
      d: "Ce qu'il faut voter et mobiliser pour que la formule fonctionne.",
      n: { acgp: 5, matcoop: 1, cpi: 4, slp: 4, matpro: 4 },
      j: {
        acgp: "Un seul vote de désignation, et un cabinet installé à quelques rues de l'immeuble.",
        matcoop: "Il faut d'abord voter la forme coopérative à la majorité de l'article 25, puis qu'un copropriétaire accepte d'exercer la fonction de syndic.",
        cpi: "Un seul vote de désignation ; cabinet parisien.",
        slp: "Un seul vote de désignation ; cabinet de Villemomble.",
        matpro: "Un seul vote de désignation, sans copropriétaire à mobiliser."
      } },
    { t: "Rapport entre le prix et les prestations incluses",
      d: "Ce que le forfait couvre réellement au regard de son montant.",
      n: { acgp: 5, matcoop: 5, cpi: 4, slp: 2, matpro: 1 },
      j: {
        acgp: "2 160 € TTC pour quatre visites par an et les tarifs d'intervention les plus bas des quatre.",
        matcoop: "2 480 € TTC avec les mutations, le suivi de travaux et l'immatriculation à 0 €.",
        cpi: "3 180 € TTC, mais avec des visites d'une heure, deux réunions de conseil syndical et la clause éthique.",
        slp: "4 200 € TTC pour deux visites et un accueil réduit à la matinée.",
        matpro: "4 300 € TTC pour les mêmes outils que la formule coopérative à 2 480 € : 1 820 € d'écart annuel."
      } }
  ];

  var NON_DOC = "Non documenté dans les éléments transmis — c'est précisément l'objet " +
                "de la question.";

  var QUESTIONS = [
  { g: "A. Disponibilité et suivi au quotidien",
    q: "Êtes-vous joignable par messagerie écrite, type WhatsApp, sans passer par un " +
       "appel ? Si oui, quels jours et de quelle heure à quelle heure ? Accepteriez-vous " +
       "de faire figurer cette disponibilité au contrat, avec un délai de réponse, et de " +
       "confirmer qu'elle relève du forfait sans facturation horaire ?",
    c: {
      acgp: "Le contrat prévoit un accueil téléphonique le lundi et le mardi de 14 h à " +
            "17 h, soit six heures par semaine, et un accueil physique quatre " +
            "demi-journées. Aucune mention d'une messagerie écrite, aucun délai de " +
            "réponse. <b>Le cabinet a indiqué oralement être joignable de 9 h à 17 h du " +
            "lundi au vendredi : à faire inscrire au contrat.</b>",
      cpi: "Accueil du lundi au vendredi, 9 h-13 h et 14 h-17 h. Aucune mention d'une " +
           "messagerie écrite, aucun délai de réponse au contrat.",
      slp: "Accueil téléphonique le matin uniquement, de 9 h 30 à 12 h 30, fermé le " +
           "samedi. Rien sur une messagerie écrite ni sur un délai de réponse.",
      matcoop: "Support par courriel annoncé sous six heures ouvrées en moyenne. " +
               "<b>Une moyenne annoncée n'est pas un engagement contractuel</b>, et rien " +
               "ne porte sur une messagerie instantanée.",
      matpro: "Support par courriel annoncé sous six heures ouvrées en moyenne. " +
              "<b>Une moyenne annoncée n'est pas un engagement contractuel</b>, et rien " +
              "ne porte sur une messagerie instantanée."
    } },
  { q: "Aurions-nous un gestionnaire dédié et identifié ? Sur quel délai de réponse à un " +
       "courriel vous engagez-vous, et acceptez-vous de l'inscrire au contrat ?",
    c: {
      acgp: "Aucun gestionnaire n'est nommé et aucun délai n'est prévu. Le cabinet est " +
            "représenté par M. Elric Bourguignon, gérant.",
      cpi: "Aucun gestionnaire n'est nommé et aucun délai de réponse n'est prévu.",
      slp: "Aucun gestionnaire n'est nommé et aucun délai de réponse n'est prévu.",
      matcoop: "Un référent dédié est annoncé, mais il n'est ni nommé ni assorti d'un " +
               "délai inscrit au contrat.",
      matpro: "Un référent dédié est annoncé, mais il n'est ni nommé ni assorti d'un " +
              "délai inscrit au contrat."
    } },
  { q: "Combien de copropriétés le gestionnaire qui suivra notre immeuble gère-t-il par " +
       "ailleurs ? Qui le remplace pendant ses congés ou en cas de départ, et comment en " +
       "sommes-nous informés ?",
    c: { def: "Aucun des quatre contrats ne traite ce point. La charge réelle d'un " +
              "gestionnaire détermine pourtant sa réactivité bien plus sûrement que les " +
              "horaires d'accueil affichés." } },

  { g: "B. Tarifs et frais hors forfait",
    q: "Quels frais supplémentaires devons-nous prévoir, notamment pour le suivi des " +
       "travaux, les dossiers particuliers et les prestations hors forfait ?",
    c: {
      acgp: "Vacation horaire de 66 € TTC avec déplacement, 36 € TTC sans déplacement, " +
            "132 € TTC hors heures ouvrées, <b>sans majoration d'urgence</b>. Mise en " +
            "demeure d'un tiers 36 € TTC ; dossier avocat ou huissier 150 € TTC ; carnet " +
            "d'entretien 180 € TTC. Sur un sinistre, la déclaration est au forfait mais " +
            "ni le suivi du dossier ni les visites d'expertise.",
      cpi: "108 € TTC de l'heure en heures ouvrables, 180 € TTC en dehors, <b>majorés de " +
           "50 % en urgence</b>. Sinistres facturés 108 € TTC de l'heure (déplacement, " +
           "mesures conservatoires, assistance à expertise, suivi de l'assureur). " +
           "Dossier avocat 180 € TTC ; immatriculation 180 € TTC.",
      slp: "108 € TTC de l'heure, <b>majorés de 40 % en urgence</b>, soit 151,20 € TTC.",
      matcoop: "Pas de tarif horaire mais des forfaits à l'acte : assistance travaux " +
               "300 € TTC, recouvrement des impayés 300 € TTC, dégât des eaux à partir " +
               "de 400 € TTC, préparation et tenue de l'assemblée à partir de 400 € TTC.",
      matpro: "Les mêmes prestations sont annoncées en option payante, mais leur tarif " +
              "n'est pas détaillé dans les éléments transmis."
    } },
  { q: "Quel pourcentage d'honoraires appliquez-vous sur les travaux, et à partir de " +
       "quels montants décroît-il ?",
    c: {
      def: "Le contrat renvoie à un pourcentage dégressif du montant hors taxes, voté à " +
           "la même assemblée que les travaux. <b>Aucun barème n'y figure</b>, la loi " +
           "interdisant de le fixer par avance, même à titre indicatif.",
      matcoop: "Le suivi de travaux est annoncé à 0 €, mais « l'assistance travaux » est " +
               "une option à 300 € TTC. <b>La limite entre les deux reste à préciser.</b>",
      matpro: "Le suivi de travaux est annoncé à 0 €, mais « l'assistance travaux » est " +
              "une option payante. <b>La limite entre les deux reste à préciser.</b>"
    } },
  { q: "Quel est le coût total TTC d'une assemblée générale extraordinaire, et sous quel " +
       "délai pouvez-vous l'organiser ?",
    c: {
      acgp: "Forfait de 450 € TTC pour deux heures, plage de 10 h à 18 h, dépassement " +
            "132 € TTC de l'heure. <b>Aucun délai d'organisation n'est prévu.</b>",
      cpi: "Quatre heures dans une plage allant jusqu'à 22 h : 108 € TTC de l'heure en " +
           "journée, 180 € TTC en soirée, soit 432 € ou 720 € TTC, plus 0,32 € par " +
           "photocopie. <b>Aucun délai d'organisation n'est prévu.</b>",
      slp: "834 € TTC pour une assemblée demandée par un copropriétaire, soit 450 € HT " +
           "plus 35 € HT par lot principal. <b>Aucun délai d'organisation n'est prévu.</b>",
      matcoop: "Préparation et tenue en option, à partir de 400 € TTC. Aucun délai prévu.",
      matpro: NON_DOC
    } },
  { q: "Facturez-vous l'envoi d'un document déjà disponible en ligne sur votre " +
       "plateforme ? Si oui, acceptez-vous d'y renoncer ?",
    c: {
      acgp: "Article 7.2.1 : « L'envoi d'éléments dématérialisés présents sur l'intranet " +
            "feront l'objet d'une facturation de 12,00 € TTC (10,00 € HT). »",
      cpi: "Le contrat prévoit seulement le remboursement des frais d'affranchissement " +
           "réellement engagés.",
      slp: "Le point n'est pas traité dans les éléments transmis.",
      matcoop: NON_DOC,
      matpro: NON_DOC
    } },
  { q: "La révision annuelle de vos honoraires est-elle plafonnée, et sur quel indice " +
       "est-elle calculée ?",
    c: {
      acgp: "Forfait « payable d'avance au début de chaque trimestre » et « révisable " +
            "chaque année à la date anniversaire ». <b>Ni plafond ni indice ne sont " +
            "précisés.</b>",
      cpi: "Rémunération « révisée chaque année à la date anniversaire et selon les " +
           "modalités prévues en assemblée générale ». <b>Ni plafond ni indice.</b>",
      slp: "Le point n'est pas précisé dans les éléments transmis.",
      matcoop: "Révision annuelle plafonnée à 5 % par an : le seul des quatre à poser une " +
               "limite écrite.",
      matpro: "Révision annuelle plafonnée à 5 % par an."
    } },

  { g: "C. Moyens de contrôle du conseil syndical",
    q: "Combien de réunions avec le conseil syndical sont incluses au forfait, de quelle " +
       "durée, et sur quelle plage horaire ?",
    c: {
      acgp: "Article 7.1.3 : le forfait « pourra expressément inclure » deux réunions " +
            "d'une heure, de 10 h à 16 h. <b>Sans accord exprès, elles ne sont pas " +
            "comprises</b> et relèvent de la vacation horaire.",
      cpi: "Deux réunions de deux heures sont incluses au forfait, en heures ouvrables " +
           "ou non. Toute réunion supplémentaire est facturée 108 ou 180 € TTC de l'heure.",
      slp: "Le contrat laisse le nombre et la durée à compléter : à faire renseigner " +
           "avant toute signature.",
      matcoop: NON_DOC,
      matpro: NON_DOC
    } },
  { q: "Quelle est la durée de vos visites périodiques, donnent-elles lieu à un " +
       "compte-rendu écrit, et se font-elles en présence du président du conseil " +
       "syndical ?",
    c: {
      acgp: "Article 7.1.1 : quatre visites par an, « d'une durée minimum de 30 mn, sans " +
            "rédaction d'un rapport et hors la présence du président du conseil " +
            "syndical, <b>sauf demande du conseil syndical</b> ». La réserve existe, " +
            "mais reste à faire acter par écrit.",
      cpi: "Deux visites d'une durée minimum d'une heure, <b>en présence du président du " +
           "conseil syndical</b>. Le compte-rendu reste à confirmer.",
      slp: "Deux visites d'une heure, mais les mentions « avec ou sans rapport » et « en " +
           "présence ou non du président » sont <b>laissées en blanc</b> : à faire " +
           "compléter avant signature.",
      matcoop: "Aucun engagement de visite sur site n'est documenté : le suivi matériel " +
               "repose sur le conseil syndical lui-même.",
      matpro: "Aucun engagement de visite sur site n'est documenté dans les éléments " +
              "transmis."
    } },
  { q: "Acceptez-vous de chiffrer au contrat les pénalités de retard dues par le syndic ?",
    c: {
      acgp: "« (montant fixé par décret) € par jour de retard », déduit de la " +
            "rémunération. <b>La mention n'est pas renseignée, la pénalité est " +
            "inapplicable.</b>",
      cpi: "1 € par jour de retard, déduit de la rémunération : chiffré, donc " +
           "applicable, mais peu dissuasif.",
      slp: "15 € par jour de retard : le montant le plus dissuasif des quatre.",
      matcoop: "Aucune pénalité chiffrée dans les éléments transmis.",
      matpro: "Aucune pénalité chiffrée dans les éléments transmis."
    } },
  { q: "Que voient exactement les copropriétaires et le conseil syndical sur votre " +
       "espace en ligne ? Les écritures comptables y sont-elles consultables en temps " +
       "réel, et les pièces justificatives y figurent-elles ?",
    c: {
      acgp: "Un intranet existe, puisque l'envoi d'un document qui s'y trouve est " +
            "facturé 12 € TTC. <b>Son contenu n'est pas décrit.</b>",
      cpi: "Un accès en ligne sécurisé aux documents dématérialisés est prévu ; " +
           "l'assemblée peut en dispenser le syndic contre une réduction de 96 € TTC. " +
           "Le contenu n'est pas décrit.",
      slp: "Un accès en ligne est prévu et l'assemblée peut en dispenser le syndic. " +
           "Le contenu n'est pas décrit.",
      matcoop: "Plateforme et application mobile accessibles à tous les copropriétaires. " +
               "Le détail de ce qui y est visible reste à vérifier en démonstration.",
      matpro: "Plateforme et application mobile accessibles à tous les copropriétaires. " +
              "Le détail de ce qui y est visible reste à vérifier en démonstration."
    } },
  { q: "Percevez-vous des commissions, remises ou rémunérations de la part des " +
       "fournisseurs, prestataires ou assureurs de la copropriété ? Avez-vous des " +
       "sociétés liées susceptibles d'intervenir sur l'immeuble ? Acceptez-vous de vous " +
       "y engager par écrit au contrat ?",
    c: {
      acgp: "<b>Le contrat ne comporte aucun engagement sur ce point.</b>",
      cpi: "Clause « Concurrence – Éthique » : engagement à ne percevoir aucune " +
           "commission, à déclarer ses filiales et à mettre les fournisseurs en " +
           "concurrence avec le conseil syndical. <b>Unique parmi les quatre.</b>",
      slp: "<b>Le contrat ne comporte aucun engagement sur ce point.</b>",
      matcoop: NON_DOC,
      matpro: NON_DOC
    } },

  { g: "D. Reprise du dossier et conditions d'entrée",
    q: "Comment comptez-vous obtenir les archives, les documents et les fonds que le " +
       "précédent syndic refuse de transmettre ? Dans quel délai, et à quel coût pour la " +
       "copropriété ?",
    c: { def: "<b>Aucun des contrats ne prévoit quoi que ce soit sur ce point.</b> " +
              "L'article 18-2 de la loi du 10 juillet 1965 impose cette remise sous " +
              "quinze jours, un mois puis deux mois ; à défaut, le syndic nouvellement " +
              "désigné ou le président du conseil syndical peut saisir le juge des " +
              "référés pour l'obtenir sous astreinte." } },
  { q: "Quels honoraires prévoyez-vous pour la reprise du dossier en l'état et de la " +
       "comptabilité des exercices non approuvés ? Pouvez-vous en donner une estimation " +
       "en heures, et accepteriez-vous un forfait plafonné inscrit au contrat plutôt " +
       "qu'une facturation au temps passé ?",
    c: {
      acgp: "« Vacation horaire », soit 66 € TTC de l'heure avec déplacement et 36 € TTC " +
            "sans, <b>sans plafond</b>. Les comptes 2025 ne sont pas approuvés et les " +
            "archives ne sont pas transmises : le volume d'heures est inconnu.",
      cpi: "108 € TTC de l'heure, <b>sans plafond</b>. Vingt heures de reprise " +
           "représenteraient 2 160 € TTC.",
      slp: "108 € TTC de l'heure par renvoi à l'article 7.2.1, <b>sans plafond</b>.",
      matcoop: NON_DOC,
      matpro: NON_DOC
    } },
  { q: "Pouvez-vous nous communiquer votre attestation de garantie financière en cours " +
       "de validité, votre attestation de responsabilité civile professionnelle, et deux " +
       "références de copropriétés de taille comparable que nous puissions contacter ?",
    c: {
      acgp: "Garantie financière de 1 000 000 € auprès de la SEGAP, responsabilité " +
            "civile auprès des Lloyd's souscrite le 01/01/2025, carte professionnelle " +
            "délivrée le 24/09/2023. <b>Aucune référence n'est fournie.</b>",
      cpi: "Société récente, carte professionnelle de 2024. <b>L'attestation de garantie " +
           "financière en cours de validité n'est pas jointe</b>, et aucune référence " +
           "n'est fournie.",
      slp: "Garantie financière GALIAN de 920 000 €, responsabilité civile GALIAN-MMA " +
           "police n° 120 137 405. <b>La date de la carte professionnelle diffère entre " +
           "le contrat et la fiche d'information</b> : à faire corriger.",
      matcoop: "Assurance responsabilité civile des membres du conseil syndical de 9 M€ " +
               "incluse (AXA). Les attestations propres à Matera restent à produire.",
      matpro: "Les attestations restent à produire."
    } },
  { q: "Confirmez-vous le montant annuel de vos honoraires, et quelles dates de prise " +
       "d'effet et de fin proposez-vous ?",
    c: {
      acgp: "1 800,00 € HT, soit 2 160,00 € TTC, payables d'avance au début de chaque " +
            "trimestre. Durée de douze mois. <b>Le contrat porte la mention « 2025 » et " +
            "laisse les dates en blanc.</b>",
      cpi: "2 650,00 € HT, soit 3 180,00 € TTC, payables d'avance au début de chaque " +
           "trimestre. <b>Les dates sont laissées en blanc.</b>",
      slp: "3 500,00 € HT, soit 4 200,00 € TTC. <b>Les dates sont à renseigner.</b>",
      matcoop: "2 480 € TTC par an, plus 200 € TTC de frais de mise en place la première " +
               "année.",
      matpro: "4 300 € TTC par an."
    } }
  ];

  /* =================== OUTILS =================== */

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (t, cls, txt) {
    var e = document.createElement(t);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  };
  var store = {
    get: function (k, d) {
      try { var v = localStorage.getItem("syndic." + k); return v == null ? d : JSON.parse(v); }
      catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem("syndic." + k, JSON.stringify(v)); } catch (e) {}
    },
    del: function (k) { try { localStorage.removeItem("syndic." + k); } catch (e) {} }
  };
  var stripTags = function (s) { return s.replace(/<[^>]+>/g, ""); };

  /* =================== ONGLETS =================== */

  var TABS = ["comparatif", "questions"];
  function showTab(name) {
    if (TABS.indexOf(name) < 0) name = "comparatif";
    TABS.forEach(function (t) {
      $("#t-" + t).setAttribute("aria-selected", String(t === name));
      $("#p-" + t).hidden = (t !== name);
    });
  }
  TABS.forEach(function (t) {
    $("#t-" + t).addEventListener("click", function () {
      location.hash = t;
      showTab(t);
    });
  });
  window.addEventListener("hashchange", function () {
    showTab(location.hash.replace("#", ""));
  });
  showTab(location.hash.replace("#", ""));

  /* =================== TABLEAU DES PRIX =================== */

  var tb = $("#tprix");
  CABINETS.slice().sort(function (a, b) { return a.prix - b.prix; }).forEach(function (c) {
    var tr = el("tr");
    tr.appendChild(el("td", null, c.long));
    tr.appendChild(el("td", null, c.prixTxt));
    tb.appendChild(tr);
  });

  /* =================== FICHES =================== */

  var picker = $("#picker"), ficheBox = $("#fiche"), current = CABINETS[0].id;

  function drawFiche() {
    var c = CABINETS.filter(function (x) { return x.id === current; })[0];
    ficheBox.innerHTML = "";

    var f = el("div", "fiche");
    var top = el("div", "top");
    var h = el("h3", null, c.long);
    var p = el("span", "p", c.prixTxt + " / an");
    top.appendChild(h); top.appendChild(p);
    f.appendChild(top);

    var body = el("div", "body");
    body.appendChild(el("p", "adr", c.adr));

    body.appendChild(el("p", "sect p", "Points favorables"));
    var ul = el("ul", "pts");
    c.plus.forEach(function (x) {
      var li = el("li", "p");
      li.appendChild(el("span", "mk", "+"));
      li.appendChild(el("span", null, x));
      ul.appendChild(li);
    });
    body.appendChild(ul);

    body.appendChild(el("p", "sect n", "Points de vigilance"));
    var ul2 = el("ul", "pts");
    c.moins.forEach(function (x) {
      var li = el("li", "n");
      li.appendChild(el("span", "mk", "−"));
      li.appendChild(el("span", null, x));
      ul2.appendChild(li);
    });
    body.appendChild(ul2);

    f.appendChild(body);
    ficheBox.appendChild(f);

    Array.prototype.forEach.call(picker.children, function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.id === current));
    });
  }

  CABINETS.forEach(function (c) {
    var b = el("button", null, c.nom);
    b.dataset.id = c.id;
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () { current = c.id; drawFiche(); });
    picker.appendChild(b);
  });
  drawFiche();

  /* =================== GRILLE DE NOTATION =================== */

  var actifs = store.get("criteres", null);
  if (!actifs || actifs.length !== CRITERES.length) {
    actifs = CRITERES.map(function () { return true; });
  }

  var gh = $("#gh"), gb = $("#gb"), gf = $("#gf");

  var thc = el("th", "crit", "Critère");
  thc.scope = "col";
  gh.appendChild(thc);
  CABINETS.forEach(function (c) {
    var th = el("th", null, c.nom);
    th.scope = "col";
    gh.appendChild(th);
  });

  CRITERES.forEach(function (cr, i) {
    var tr = el("tr");
    tr.dataset.i = String(i);

    var th = el("th", "crit");
    th.scope = "row";
    var lab = el("label", "crit");
    var cb = el("input");
    cb.type = "checkbox";
    cb.checked = actifs[i];
    cb.setAttribute("aria-label", "Prendre en compte : " + cr.t);
    cb.addEventListener("change", function () {
      actifs[i] = cb.checked;
      store.set("criteres", actifs);
      recompute();
    });
    var txt = el("span");
    txt.appendChild(el("b", null, cr.t));
    txt.appendChild(document.createElement("br"));
    var small = el("span", null, cr.d);
    small.style.cssText = "font-size:.8rem;color:var(--muted)";
    txt.appendChild(small);
    lab.appendChild(cb); lab.appendChild(txt);
    th.appendChild(lab);
    tr.appendChild(th);

    CABINETS.forEach(function (c) {
      var v = cr.n[c.id];
      var td = el("td");
      var sp = el("button", "cell n" + v, String(v));
      sp.type = "button";
      sp.setAttribute("aria-label", cr.t + " — " + c.nom + " : " + v + " sur " + NOTE_MAX);
      sp.addEventListener("click", function () { expliquer(cr, c, v, sp); });
      td.appendChild(sp);
      tr.appendChild(td);
    });
    gb.appendChild(tr);
  });

  var thf = el("th", "crit", "Total");
  thf.scope = "row";
  gf.appendChild(thf);
  CABINETS.forEach(function (c) {
    var td = el("td", "tot");
    td.dataset.id = c.id;
    gf.appendChild(td);
  });

  var rank = $("#rank"), ncrit = $("#ncrit");
  var selCell = null, bulle = null;

  function fermerBulle() {
    if (bulle) { bulle.remove(); bulle = null; }
    if (selCell) { selCell.classList.remove("sel"); selCell = null; }
  }

  function placerBulle() {
    if (!bulle || !selCell) return;
    var r = selCell.getBoundingClientRect();
    var bw = bulle.offsetWidth, bh = bulle.offsetHeight, m = 10;

    var left = r.left + r.width / 2 - bw / 2;
    left = Math.max(m, Math.min(left, window.innerWidth - bw - m));

    var dessous = true;
    var top = r.bottom + 10;
    if (top + bh > window.innerHeight - m) {
      if (r.top - bh - 10 > m) { top = r.top - bh - 10; dessous = false; }
      else { top = Math.max(m, window.innerHeight - bh - m); }
    }
    bulle.style.left = left + "px";
    bulle.style.top = top + "px";

    var fx = Math.max(16, Math.min(r.left + r.width / 2 - left, bw - 16));
    bulle.style.setProperty("--fx", fx + "px");
    bulle.classList.toggle("haut", !dessous);
  }

  function expliquer(cr, c, v, btn) {
    var memeCase = (selCell === btn);
    fermerBulle();
    if (memeCase) return;

    selCell = btn;
    btn.classList.add("sel");

    bulle = el("div", "bulle");
    bulle.setAttribute("role", "dialog");
    bulle.setAttribute("aria-label", "Justification de la note");

    var head = el("div", "bh");
    head.appendChild(el("span", "cell n" + v, String(v)));
    var t = el("div", "bt");
    t.appendChild(el("b", null, c.long));
    t.appendChild(el("span", "bsub", cr.t));
    head.appendChild(t);
    var x = el("button", "bx", "\u00d7");
    x.type = "button";
    x.setAttribute("aria-label", "Fermer");
    x.addEventListener("click", function (e) { e.stopPropagation(); fermerBulle(); });
    head.appendChild(x);

    bulle.appendChild(head);
    bulle.appendChild(el("p", "bp", cr.j[c.id]));
    bulle.addEventListener("click", function (e) { e.stopPropagation(); });

    document.body.appendChild(bulle);
    placerBulle();
  }

  document.addEventListener("click", function (e) {
    if (!bulle) return;
    if (e.target.closest && e.target.closest(".cell")) return;
    fermerBulle();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") fermerBulle();
  });
  window.addEventListener("scroll", placerBulle, true);
  window.addEventListener("resize", placerBulle);

  function scores() {
    var s = {};
    CABINETS.forEach(function (c) { s[c.id] = 0; });
    CRITERES.forEach(function (cr, i) {
      if (!actifs[i]) return;
      CABINETS.forEach(function (c) { s[c.id] += cr.n[c.id]; });
    });
    return s;
  }

  function recompute() {
    var s = scores();
    var n = actifs.filter(Boolean).length;
    var max = n * NOTE_MAX;
    ncrit.textContent = n + " critère" + (n > 1 ? "s" : "") + " sur " +
                        CRITERES.length + " pris en compte — total possible " +
                        max + " points";

    Array.prototype.forEach.call(gb.children, function (tr) {
      tr.classList.toggle("off", !actifs[Number(tr.dataset.i)]);
    });
    Array.prototype.forEach.call(gf.children, function (td) {
      if (!td.dataset.id) return;
      td.textContent = max ? s[td.dataset.id] + " / " + max : "—";
    });

    var tri = CABINETS.slice().sort(function (a, b) {
      return s[b.id] - s[a.id] || a.prix - b.prix;
    });
    rank.innerHTML = "";
    tri.forEach(function (c) {
      var v = s[c.id];
      var pct = max ? Math.round(v / max * 100) : 0;
      var row = el("div", "rk");
      row.appendChild(el("div", "nm", c.nom));
      var tr = el("div", "tr");
      var i2 = el("i", pct >= 70 ? "hi" : pct >= 50 ? "mid" : "lo");
      i2.style.width = pct + "%";
      tr.appendChild(i2);
      row.appendChild(tr);
      row.appendChild(el("div", "sc", max ? v + " / " + max : "—"));
      rank.appendChild(row);
    });
  }

  $("#allon").addEventListener("click", function () {
    actifs = CRITERES.map(function () { return true; });
    store.set("criteres", actifs);
    Array.prototype.forEach.call(gb.querySelectorAll("input"), function (c) { c.checked = true; });
    recompute();
  });
  $("#alloff").addEventListener("click", function () {
    actifs = CRITERES.map(function () { return false; });
    store.set("criteres", actifs);
    Array.prototype.forEach.call(gb.querySelectorAll("input"), function (c) { c.checked = false; });
    recompute();
  });
  recompute();

  /* =================== QUESTIONS =================== */

  var host = $("#questions");
  var cabSel = $("#cab"), cabAutre = $("#cabautre");
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recog = null, recIndex = -1;

  CABINETS.forEach(function (c) {
    var o = document.createElement("option");
    o.value = c.id;
    o.textContent = c.long;
    cabSel.appendChild(o);
  });
  var oAutre = document.createElement("option");
  oAutre.value = "autre";
  oAutre.textContent = "Autre cabinet…";
  cabSel.appendChild(oAutre);

  var cabId = store.get("cabinet", "acgp");
  if (!CABINETS.some(function (c) { return c.id === cabId; }) && cabId !== "autre") {
    cabId = "acgp";
  }
  cabSel.value = cabId;
  cabAutre.value = store.get("cabinetAutre", "");
  cabAutre.hidden = (cabId !== "autre");

  function cabCourant() {
    return CABINETS.filter(function (c) { return c.id === cabId; })[0] || null;
  }
  function nomCabinet() {
    var c = cabCourant();
    return c ? c.long : (cabAutre.value.trim() || "Cabinet non précisé");
  }

  /* réponses rangées par cabinet : { acgp: {0: "...", …}, cpi: {…} } */
  var toutes = store.get("reponses", {});
  var valides = store.get("valides", {});
  if (Object.keys(toutes).some(function (k) { return /^\d+$/.test(k); })) {
    toutes = { acgp: toutes };          // reprise de l'ancien format
    store.set("reponses", toutes);
  }
  function rep() {
    if (!toutes[cabId]) toutes[cabId] = {};
    return toutes[cabId];
  }
  function val() {
    if (!valides[cabId]) valides[cabId] = {};
    return valides[cabId];
  }

  function texteContrat(q) {
    if (typeof q.c === "string") return q.c;
    return q.c[cabId] || q.c.def || NON_DOC;
  }

  function renderQuestions() {
    if (recog) { try { recog.stop(); } catch (e) {} }
    host.innerHTML = "";
    var reponses = rep();

    QUESTIONS.forEach(function (q, i) {
      if (q.g) {
        var h2 = el("h2", null, q.g);
        h2.style.cssText = "font-size:1.1rem;margin-top:2rem";
        host.appendChild(h2);
      }

      var card = el("div", "q");
      var qh = el("div", "qh");
      qh.appendChild(el("div", "n", String(i + 1)));
      qh.appendChild(el("div", "qt", q.q));
      card.appendChild(qh);

      var ctr = el("div", "ctr");
      ctr.appendChild(el("span", "lbl", "Ce que dit le contrat — " + nomCabinet()));
      var cs = el("span");
      cs.innerHTML = texteContrat(q);
      ctr.appendChild(cs);
      card.appendChild(ctr);

      var ans = el("div", "ans");
      var ta = document.createElement("textarea");
      ta.id = "a" + i;
      ta.placeholder = "Réponse donnée en entretien…";
      ta.value = reponses[i] || "";
      ta.addEventListener("input", function () {
        reponses[i] = ta.value;
        store.set("reponses", toutes);
        refreshProgress();
      });
      ans.appendChild(ta);

      var row = el("div", "arow");
      if (SR) {
        var mic = el("button", "btn mic");
        mic.type = "button";
        mic.innerHTML = "&#127908; Dicter";
        mic.addEventListener("click", function () { toggleDictee(i, mic, ta); });
        row.appendChild(mic);
      }

      var vb = el("button");
      vb.type = "button";
      function peindre() {
        var fait = !!val()[i];
        card.classList.toggle("done", fait);
        vb.className = "btn" + (fait ? " ok" : "");
        vb.textContent = fait ? "\u2713 Validée" : "Valider la réponse";
      }
      vb.addEventListener("click", function () {
        val()[i] = !val()[i];
        store.set("valides", valides);
        peindre();
      });
      peindre();
      row.appendChild(vb);

      ans.appendChild(row);
      card.appendChild(ans);
      host.appendChild(card);
    });

    refreshProgress();
  }

  cabSel.addEventListener("change", function () {
    cabId = cabSel.value;
    store.set("cabinet", cabId);
    cabAutre.hidden = (cabId !== "autre");
    renderQuestions();
  });
  cabAutre.addEventListener("input", function () {
    store.set("cabinetAutre", cabAutre.value);
    Array.prototype.forEach.call(host.querySelectorAll(".ctr .lbl"), function (l) {
      l.textContent = "Ce que dit le contrat — " + nomCabinet();
    });
  });

  function toggleDictee(i, btn, ta) {
    if (recog && recIndex === i) { recog.stop(); return; }
    if (recog) { try { recog.stop(); } catch (e) {} }

    recog = new SR();
    recog.lang = "fr-FR";
    recog.continuous = true;
    recog.interimResults = true;
    recIndex = i;

    var base = ta.value ? ta.value.replace(/\s+$/, "") + " " : "";
    btn.classList.add("rec");
    btn.innerHTML = "&#9632; Arrêter";

    recog.onresult = function (e) {
      var fin = "", tmp = "";
      for (var k = 0; k < e.results.length; k++) {
        if (e.results[k].isFinal) fin += e.results[k][0].transcript;
        else tmp += e.results[k][0].transcript;
      }
      ta.value = base + fin + tmp;
      rep()[i] = ta.value;
      store.set("reponses", toutes);
      refreshProgress();
    };
    recog.onerror = function () { stopDictee(btn); };
    recog.onend = function () { stopDictee(btn); };
    try { recog.start(); } catch (e) { stopDictee(btn); }
  }

  function stopDictee(btn) {
    btn.classList.remove("rec");
    btn.innerHTML = "&#127908; Dicter";
    recog = null;
    recIndex = -1;
  }

  var qfill = $("#qfill"), qcount = $("#qcount");
  function refreshProgress() {
    var r = rep(), n = 0;
    QUESTIONS.forEach(function (q, i) { if ((r[i] || "").trim()) n++; });
    qcount.textContent = n + " / " + QUESTIONS.length;
    qfill.style.width = (n / QUESTIONS.length * 100) + "%";
  }

  var dt = $("#dte"), par = $("#par");
  var now = new Date();
  dt.value = store.get("date", now.getFullYear() + "-" +
             String(now.getMonth() + 1).padStart(2, "0") + "-" +
             String(now.getDate()).padStart(2, "0"));
  dt.addEventListener("change", function () { store.set("date", dt.value); });
  par.value = store.get("par", "");
  par.addEventListener("input", function () { store.set("par", par.value); });

  $("#wipe").addEventListener("click", function () {
    if (!window.confirm("Effacer les réponses saisies pour " + nomCabinet() + " ?")) return;
    toutes[cabId] = {};
    valides[cabId] = {};
    store.set("reponses", toutes);
    store.set("valides", valides);
    renderQuestions();
  });

  renderQuestions();

  /* =================== PDF =================== */

  function frDate(v) {
    if (!v) return "";
    var p = v.split("-");
    return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : v;
  }

  var qmsg = $("#qmsg");
  function say(kind, txt) {
    qmsg.className = "msg " + kind;
    qmsg.textContent = txt;
    qmsg.hidden = false;
  }

  $("#dl").addEventListener("click", function () {
    if (!window.jspdf) { say("err", "Le générateur de PDF n'a pas pu être chargé. Vérifiez votre connexion et rechargez la page."); return; }

    var reponses = rep();
    var manq = 0;
    QUESTIONS.forEach(function (q, i) { if (!(reponses[i] || "").trim()) manq++; });

    var doc = new window.jspdf.jsPDF({ unit: "mm", format: "a4" });
    var L = 18, R = 192, W = R - L, y = 22;

    function ensure(h) { if (y + h > 275) { doc.addPage(); y = 20; } }
    function put(str, size, style, col, indent) {
      doc.setFont("helvetica", style || "normal");
      doc.setFontSize(size);
      doc.setTextColor.apply(doc, col || [40]);
      var x = L + (indent || 0);
      doc.splitTextToSize(str, W - (indent || 0)).forEach(function (ln) {
        ensure(size * 0.45 + 1.5);
        doc.text(ln, x, y);
        y += size * 0.42 + 1.5;
      });
    }

    doc.setFont("helvetica", "bold"); doc.setFontSize(8); doc.setTextColor(142, 47, 60);
    doc.text("COPROPRIETE DU 7 RUE MARCEAU - 93310 LE PRE-SAINT-GERVAIS", L, y);
    y += 7;
    put("Entretien avec un candidat a la fonction de syndic", 16, "bold", [31, 59, 92]);
    y += 1;
    doc.setDrawColor(31, 59, 92); doc.setLineWidth(0.7);
    doc.line(L, y, R, y); y += 6;

    put("Cabinet rencontre : " + nomCabinet(), 10, "normal", [60]);
    put("Date de l'entretien : " + (frDate(dt.value) || "—") +
        (par.value ? "     Entretien mene par : " + par.value : ""), 10, "normal", [60]);
    y += 4;

    QUESTIONS.forEach(function (q, i) {
      if (q.g) {
        ensure(14);
        y += 2;
        doc.setFillColor(31, 59, 92);
        doc.rect(L, y - 4, W, 7, "F");
        doc.setFont("helvetica", "bold"); doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.text(q.g, L + 2, y);
        y += 8;
      }

      ensure(20);
      put(String(i + 1) + ". " + q.q, 10, "bold", [31, 59, 92]);
      y += 0.5;
      put("Au contrat : " + stripTags(texteContrat(q)), 8, "italic", [120], 3);
      y += 1.5;

      var rep = (reponses[i] || "").trim();
      doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
      doc.setTextColor(47, 107, 79);
      ensure(6);
      doc.text("Reponse", L + 3, y);
      y += 4;
      if (rep) {
        put(rep, 9.5, "normal", [30], 3);
      } else {
        put("(sans reponse)", 9, "italic", [150], 3);
      }
      y += 4;
    });

    var n = doc.internal.getNumberOfPages();
    for (var i2 = 1; i2 <= n; i2++) {
      doc.setPage(i2);
      doc.setFont("helvetica", "normal"); doc.setFontSize(7.5); doc.setTextColor(150);
      doc.text("Entretien syndic - 7 rue Marceau - page " + i2 + " / " + n,
               105, 287, { align: "center" });
    }

    var slug = nomCabinet().replace(/[^A-Za-z0-9 ]/g, "").trim()
               .replace(/\s+/g, "-") || "syndic";
    doc.save("Entretien-" + slug + "-" + (dt.value || "") + ".pdf");

    if (manq) {
      say("err", "PDF telecharge, mais " + manq + " question" + (manq > 1 ? "s sont" : " est") +
                 " encore sans reponse.");
    } else {
      say("good", "PDF telecharge : les " + QUESTIONS.length +
                  " questions sont renseignees.");
    }
  });
})();
