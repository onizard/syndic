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
        "Le cabinet est déjà syndic de la copropriété voisine du 5 rue Marceau. Les deux " +
        "immeubles sont mitoyens et partagent une interface de toiture : en avril 2024, " +
        "le syndicat du 7 a réglé une recherche d'infiltration provenant d'un solin " +
        "accessible par notre couverture, pour le compte du voisin. Un syndic commun aux " +
        "deux copropriétés permettrait de traiter ensemble les interventions qui les " +
        "concernent toutes les deux et d'en partager les frais — un échafaudage par exemple.",
        "Joignable par téléphone de 9 h à 17 h du lundi au vendredi, soit environ " +
        "quarante heures par semaine."
      ],
      moins: [
        "Aucun engagement de délai de réponse inscrit au contrat.",
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
      d: "Montant du forfait de gestion courante, de 2 160 € à 4 200 € TTC.",
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
        acgp: "Joignable par téléphone de 9 h à 17 h du lundi au vendredi, soit environ quarante heures par semaine — l'amplitude la plus large après Matera. Aucun délai de réponse n'est en revanche inscrit au contrat.",
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
    bulle.appendChild(el("p", "bd", cr.d));
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

})();
