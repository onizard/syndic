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
        "Quatre visites périodiques par an, le nombre le plus élevé des cinq.",
        "Assemblée générale supplémentaire au forfait : 450 € TTC pour deux heures, " +
        "contre 432 à 720 € TTC chez CPI Gestion et 834 € TTC chez SLP Copro.",
        "Mise en demeure d'un tiers 36 € TTC ; constitution d'un dossier avocat ou " +
        "huissier 150 € TTC.",
        "Garantie financière de 1 000 000 €, responsabilité civile professionnelle " +
        "auprès des Lloyd's.",
        "Cabinet installé au Pré-Saint-Gervais, à quelques rues de l'immeuble."
      ],
      moins: [
        "Accueil téléphonique le lundi et le mardi de 14 h à 17 h seulement, soit six " +
        "heures par semaine. Accueil physique sur quatre demi-journées. Aucun engagement " +
        "de délai de réponse.",
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
        "État daté 300 € TTC et opposition sur mutation 90 € TTC, les moins chers des cinq.",
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
        "élevé des cinq.",
        "Reprise de la comptabilité des exercices non approuvés : 108 € TTC de l'heure " +
        "(article 7.2.1), sans plafond.",
        "Accueil téléphonique le matin uniquement, de 9 h 30 à 12 h 30, fermé le samedi.",
        "La date de la carte professionnelle diffère entre le contrat (2023) et la fiche " +
        "d'information (2026)."
      ]
    },
    {
      id: "matpro",
      nom: "Matera professionnel",
      long: "MATERA — formule professionnelle",
      prix: 4300,
      prixTxt: "4 300 € TTC",
      adr: "10 rue Treilhard, 75008 Paris.",
      plus: [
        "Mêmes outils que la formule coopérative : plateforme, référent dédié, " +
        "comptabilité et suivi juridique.",
        "Honoraires de mutation, suivi de travaux et immatriculation : 0 €.",
        "Aucun copropriétaire n'a à exercer la fonction de syndic."
      ],
      moins: [
        "Coût supérieur de 1 820 € par an à la formule coopérative, pour des outils " +
        "identiques.",
        "Les mêmes prestations restent en option payante : travaux, impayés, dégâts des " +
        "eaux, tenue de l'assemblée."
      ]
    }
  ];

  /* Grille : douze critères notés de la même façon pour tous.
     Ordre des notes : acgp, matcoop, cpi, slp, matpro */
  var CRITERES = [
    { t: "Honoraires annuels", d: "Montant du forfait de gestion courante.",
      n: { acgp: 1, matcoop: 1, cpi: 0, slp: -1, matpro: -1 } },
    { t: "Coût horaire des interventions hors forfait",
      d: "Tarif appliqué au temps passé en heures ouvrables.",
      n: { acgp: 1, matcoop: 0, cpi: -1, slp: -1, matpro: 0 } },
    { t: "Urgences et sinistres",
      d: "Majoration appliquée à une intervention urgente hors heures ouvrables.",
      n: { acgp: 1, matcoop: 0, cpi: -1, slp: -1, matpro: 0 } },
    { t: "Joignabilité et délai de réponse",
      d: "Amplitude de l'accueil et engagement écrit sur les délais.",
      n: { acgp: -1, matcoop: 1, cpi: 0, slp: -1, matpro: 1 } },
    { t: "Moyens de contrôle du conseil syndical",
      d: "Durée des visites, rapport écrit, présence du président, réunions incluses.",
      n: { acgp: -1, matcoop: 1, cpi: 1, slp: 0, matpro: 0 } },
    { t: "Pénalités de retard dues par le syndic",
      d: "Montant chiffré au contrat et donc réellement applicable.",
      n: { acgp: -1, matcoop: 0, cpi: 0, slp: 1, matpro: 0 } },
    { t: "Frais de mutation imputés aux copropriétaires",
      d: "État daté, opposition sur mutation, certificat article 20-II.",
      n: { acgp: 0, matcoop: 1, cpi: -1, slp: 1, matpro: 1 } },
    { t: "Coût d'une assemblée générale supplémentaire",
      d: "Forfait ou temps passé pour une assemblée hors assemblée annuelle.",
      n: { acgp: 1, matcoop: -1, cpi: 0, slp: -1, matpro: 0 } },
    { t: "Coût de reprise du dossier",
      d: "Reprise de la comptabilité des exercices non approuvés, dossier Bridou compris.",
      n: { acgp: 1, matcoop: 0, cpi: -1, slp: -1, matpro: 0 } },
    { t: "Transparence et engagements éthiques",
      d: "Absence de commissions, déclaration des filiales, frais inclus.",
      n: { acgp: 0, matcoop: 1, cpi: 1, slp: 0, matpro: 1 } },
    { t: "Solidité de la structure",
      d: "Ancienneté, garantie financière, cohérence des pièces fournies.",
      n: { acgp: 0, matcoop: 1, cpi: -1, slp: 0, matpro: 1 } },
    { t: "Simplicité de mise en œuvre",
      d: "Ce qu'il faut voter et mobiliser pour que la formule fonctionne.",
      n: { acgp: 1, matcoop: -1, cpi: 1, slp: 1, matpro: 1 } },
    { t: "Rapport entre le prix et les prestations incluses",
      d: "Ce que le forfait couvre réellement au regard de son montant.",
      n: { acgp: 1, matcoop: 1, cpi: 0, slp: -1, matpro: -1 } }
  ];

  var QUESTIONS = [
    { g: "A. Disponibilité et suivi au quotidien",
      q: "Êtes-vous joignable par messagerie écrite, type WhatsApp, sans passer par un " +
         "appel ? Si oui, quels jours et de quelle heure à quelle heure ? Accepteriez-" +
         "vous de faire figurer cette disponibilité au contrat, avec un délai de " +
         "réponse, et de confirmer qu'elle relève du forfait sans facturation horaire ?",
      c: "Accueil téléphonique le lundi et le mardi de 14 h à 17 h, soit six heures par " +
         "semaine. Accueil physique le lundi et le mardi de 14 h à 17 h, le jeudi et le " +
         "vendredi de 9 h à 12 h 30. Aucune mention d'une messagerie écrite, et aucun " +
         "délai de réponse." },
    { q: "Aurions-nous un gestionnaire dédié et identifié ? Sur quel délai de réponse à " +
         "un courriel vous engagez-vous, et acceptez-vous de l'inscrire au contrat ?",
      c: "Aucun gestionnaire n'est nommé et aucun délai de réponse n'est prévu. Le " +
         "cabinet est représenté par M. Elric Bourguignon, gérant." },

    { g: "B. Tarifs et frais hors forfait",
      q: "Quels frais supplémentaires devons-nous prévoir, notamment pour le suivi des " +
         "travaux, les dossiers particuliers et les prestations hors forfait ?",
      c: "Vacation horaire de 66 € TTC avec déplacement, 36 € TTC sans déplacement, " +
         "132 € TTC hors heures ouvrées. Les interventions d'urgence hors heures " +
         "ouvrables sont facturées <b>sans majoration</b>. Mise en demeure d'un tiers " +
         "36 € TTC ; dossier avocat ou huissier 150 € TTC ; carnet d'entretien " +
         "180 € TTC. En matière de sinistre, la déclaration est au forfait, mais ni le " +
         "suivi du dossier ni les visites demandées par les copropriétaires ou dans le " +
         "cadre d'une expertise." },
    { q: "Quel pourcentage d'honoraires appliquez-vous sur les travaux, et à partir de " +
         "quels montants décroît-il ?",
      c: "Le contrat renvoie à un pourcentage dégressif du montant hors taxes, voté à la " +
         "même assemblée que les travaux. <b>Aucun barème n'y figure</b>, la loi " +
         "interdisant de le fixer par avance, même à titre indicatif. La question reste " +
         "donc entière." },
    { q: "Quel est le coût total TTC d'une assemblée générale extraordinaire, et sous " +
         "quel délai pouvez-vous l'organiser ?",
      c: "Forfait de 450 € TTC pour une assemblée de deux heures, dans une plage allant " +
         "de 10 h à 18 h ; dépassement facturé 132 € TTC de l'heure. <b>Aucun délai " +
         "d'organisation n'est prévu.</b>" },
    { q: "Acceptez-vous de supprimer la facturation de 12 € TTC appliquée à l'envoi d'un " +
         "document déjà présent sur l'intranet ?",
      c: "Article 7.2.1 : « L'envoi d'éléments dématérialisés présents sur l'intranet " +
         "feront l'objet d'une facturation de 12,00 € TTC (10,00 € HT). »" },
    { q: "La révision annuelle de vos honoraires est-elle plafonnée, et sur quel indice " +
         "est-elle calculée ?",
      c: "Le forfait est « payable d'avance au début de chaque trimestre » et " +
         "« révisable chaque année à la date anniversaire ». <b>Ni plafond ni indice ne " +
         "sont précisés.</b> Matera plafonne sa révision à 5 % par an." },

    { g: "C. Moyens de contrôle du conseil syndical",
      q: "Acceptez-vous d'inclure au forfait les deux réunions annuelles avec le conseil " +
         "syndical ?",
      c: "Article 7.1.3 : le forfait « pourra expressément inclure » deux réunions avec " +
         "le conseil syndical d'une heure, dans une plage de 10 h à 16 h. <b>Sans accord " +
         "exprès, elles ne sont pas comprises</b> et relèvent de la vacation horaire." },
    { q: "Acceptez-vous de porter les visites périodiques à une heure, avec compte-rendu " +
         "écrit et en présence du président du conseil syndical ?",
      c: "Article 7.1.1 : quatre visites par an, « d'une durée minimum de 30 mn, sans " +
         "rédaction d'un rapport et hors la présence du président du conseil syndical, " +
         "<b>sauf demande du conseil syndical</b> ». La réserve existe, mais reste à " +
         "faire acter par écrit." },
    { q: "Acceptez-vous de chiffrer au contrat les pénalités de retard dues par le " +
         "syndic ?",
      c: "Articles 6 et 7 : « (montant fixé par décret) € par jour de retard », déduit " +
         "de la rémunération annuelle. <b>La mention n'est pas renseignée, la pénalité " +
         "est donc inapplicable en pratique.</b> CPI Gestion retient 1 € par jour, " +
         "SLP Copro 15 €." },

    { g: "D. Reprise du dossier et conditions d'entrée",
      q: "Comment comptez-vous obtenir les archives, les documents et les fonds que le " +
         "précédent syndic refuse de transmettre ? Dans quel délai, et à quel coût pour " +
         "la copropriété ?",
      c: "<b>Le contrat ne prévoit rien sur ce point.</b> L'article 18-2 de la loi du " +
         "10 juillet 1965 impose cette remise sous quinze jours, un mois puis deux " +
         "mois ; à défaut, le syndic nouvellement désigné ou le président du conseil " +
         "syndical peut saisir le juge des référés pour l'obtenir sous astreinte." },
    { q: "Quels honoraires prévoyez-vous pour la reprise du dossier en l'état et de la " +
         "comptabilité des exercices non approuvés ? Pouvez-vous en donner une " +
         "estimation en heures, et accepteriez-vous un forfait plafonné inscrit au " +
         "contrat plutôt qu'une facturation au temps passé ?",
      c: "« Vacation horaire », soit 66 € TTC de l'heure avec déplacement et 36 € TTC " +
         "sans déplacement, <b>sans plafond</b>. Les comptes 2025 ne sont pas approuvés " +
         "et les archives ne sont pas transmises : le volume d'heures est aujourd'hui " +
         "inconnu. CPI Gestion et SLP Copro facturent cette reprise 108 € TTC de " +
         "l'heure, également sans plafond." },
    { q: "Confirmez-vous le montant de 2 160 € TTC par an, et quelles dates de prise " +
         "d'effet et de fin proposez-vous pour les douze mois du contrat ?",
      c: "1 800,00 € hors taxes, soit 2 160,00 € toutes taxes comprises, payables " +
         "d'avance au début de chaque trimestre. Durée de douze mois. <b>Le contrat " +
         "porte la mention « 2025 » et laisse les dates en blanc.</b>" }
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
      var sp = el("span", "cell " + (v > 0 ? "p" : v < 0 ? "n" : "z"),
                  v > 0 ? "+1" : v < 0 ? "−1" : "0");
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
    ncrit.textContent = n + " critère" + (n > 1 ? "s" : "") + " sur " +
                        CRITERES.length + " pris en compte";

    Array.prototype.forEach.call(gb.children, function (tr) {
      tr.classList.toggle("off", !actifs[Number(tr.dataset.i)]);
    });
    Array.prototype.forEach.call(gf.children, function (td) {
      if (!td.dataset.id) return;
      var v = s[td.dataset.id];
      td.textContent = (v > 0 ? "+" : "") + v;
      td.style.color = v > 0 ? "var(--ok)" : v < 0 ? "var(--seal)" : "var(--muted)";
    });

    var max = Math.max(1, n);
    var tri = CABINETS.slice().sort(function (a, b) {
      return s[b.id] - s[a.id] || a.prix - b.prix;
    });
    rank.innerHTML = "";
    tri.forEach(function (c) {
      var v = s[c.id];
      var row = el("div", "rk");
      row.appendChild(el("div", "nm", c.nom));
      var tr = el("div", "tr");
      var i2 = el("i", v >= 0 ? "p" : "n");
      var half = 50;
      var w = Math.abs(v) / max * 50;
      i2.style.width = w + "%";
      i2.style.left = v >= 0 ? half + "%" : (half - w) + "%";
      tr.appendChild(i2);
      row.appendChild(tr);
      row.appendChild(el("div", "sc", (v > 0 ? "+" : "") + v));
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
  var reponses = store.get("reponses", {});
  var valides = store.get("valides", {});
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recog = null, recIndex = -1;

  QUESTIONS.forEach(function (q, i) {
    if (q.g) {
      var h2 = el("h2", null, q.g);
      h2.style.cssText = "font-size:1.1rem;margin-top:2rem";
      host.appendChild(h2);
    }

    var card = el("div", "q");
    card.dataset.i = String(i);

    var qh = el("div", "qh");
    qh.appendChild(el("div", "n", String(i + 1)));
    qh.appendChild(el("div", "qt", q.q));
    card.appendChild(qh);

    var ctr = el("div", "ctr");
    ctr.appendChild(el("span", "lbl", "Ce que dit le contrat"));
    var cs = el("span");
    cs.innerHTML = q.c;
    ctr.appendChild(cs);
    card.appendChild(ctr);

    var ans = el("div", "ans");
    var ta = document.createElement("textarea");
    ta.id = "a" + i;
    ta.placeholder = "Réponse donnée en entretien…";
    ta.value = reponses[i] || "";
    ta.addEventListener("input", function () {
      reponses[i] = ta.value;
      store.set("reponses", reponses);
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

    var vb = el("button", "btn");
    vb.type = "button";
    vb.addEventListener("click", function () {
      valides[i] = !valides[i];
      store.set("valides", valides);
      paint();
      refreshProgress();
    });
    row.appendChild(vb);

    var st = el("span", "state");
    row.appendChild(st);
    ans.appendChild(row);
    card.appendChild(ans);
    host.appendChild(card);

    function paint() {
      var done = !!valides[i];
      card.classList.toggle("done", done);
      vb.className = "btn" + (done ? " ok" : "");
      vb.textContent = done ? "✓ Validée" : "Valider la réponse";
      st.textContent = done ? "" : "";
    }
    paint();
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
      reponses[i] = ta.value;
      store.set("reponses", reponses);
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
    var n = 0;
    QUESTIONS.forEach(function (q, i) {
      if ((reponses[i] || "").trim()) n++;
    });
    qcount.textContent = n + " / " + QUESTIONS.length;
    qfill.style.width = (n / QUESTIONS.length * 100) + "%";
  }

  var dt = $("#dte");
  var now = new Date();
  dt.value = store.get("date", now.getFullYear() + "-" +
             String(now.getMonth() + 1).padStart(2, "0") + "-" +
             String(now.getDate()).padStart(2, "0"));
  dt.addEventListener("change", function () { store.set("date", dt.value); });

  var cab = $("#cab"), par = $("#par");
  cab.value = store.get("cabinet", cab.value);
  par.value = store.get("par", "");
  cab.addEventListener("input", function () { store.set("cabinet", cab.value); });
  par.addEventListener("input", function () { store.set("par", par.value); });

  $("#wipe").addEventListener("click", function () {
    if (!window.confirm("Effacer toutes les réponses saisies ?")) return;
    reponses = {}; valides = {};
    store.del("reponses"); store.del("valides");
    QUESTIONS.forEach(function (q, i) {
      var ta = document.getElementById("a" + i);
      if (ta) ta.value = "";
    });
    Array.prototype.forEach.call(host.querySelectorAll(".q"), function (c) {
      c.classList.remove("done");
      var b = c.querySelectorAll("button");
      var vb = b[b.length - 1];
      vb.className = "btn";
      vb.textContent = "Valider la réponse";
    });
    refreshProgress();
  });

  refreshProgress();

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

    put("Cabinet rencontre : " + (cab.value || "—"), 10, "normal", [60]);
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
      put("Au contrat : " + stripTags(q.c), 8, "italic", [120], 3);
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

    var slug = (cab.value || "syndic").replace(/[^A-Za-z0-9 ]/g, "").trim()
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
