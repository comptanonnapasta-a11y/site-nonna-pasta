/* ===================================================================
   NONNA PASTA — interactions
   (le contenu modifiable se trouve dans config.js)
   =================================================================== */
(function () {
  "use strict";

  var NONNA = window.NONNA || {};

  /* ---- Année dans le footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Header : ajoute .scrolled après un peu de défilement ---- */
  var header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  function closeNav() {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  /* ---- Observateur de révélation au défilement ---- */
  var io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
  }
  function reveal(el) {
    if (io) io.observe(el);
    else el.classList.add("in");
  }
  document.querySelectorAll(".reveal").forEach(reveal);

  /* ---- Petit utilitaire pour éviter les injections dans le texte ---- */
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ===================================================================
     GÉNÉRATION DU MENU depuis config.js
     =================================================================== */
  var grid = document.getElementById("menuGrid");
  if (grid && Array.isArray(NONNA.menu)) {
    var html = "";
    NONNA.menu.forEach(function (d) {
      var badge = d.badge ? '<span class="dish-tag">' + esc(d.badge) + "</span>" : "";
      html +=
        '<article class="dish reveal" data-cat="' + esc(d.categorie) + '">' +
          '<div class="dish-img"><img src="assets/images/' + esc(d.image) + '" alt="' + esc(d.nom) + '" loading="lazy" /></div>' +
          '<div class="dish-body">' + badge +
            "<h3>" + esc(d.nom) + "</h3>" +
            "<p>" + esc(d.description) + "</p>" +
          "</div>" +
        "</article>";
    });
    grid.innerHTML = html;
    grid.querySelectorAll(".reveal").forEach(reveal);
  }

  /* ---- Filtres du menu ---- */
  var filters = document.querySelectorAll("#menuFilters .filter");
  var dishes = grid ? grid.querySelectorAll(".dish") : [];
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var cat = btn.getAttribute("data-cat");
      dishes.forEach(function (d) {
        var show = cat === "all" || d.getAttribute("data-cat") === cat;
        d.classList.toggle("hide", !show);
        if (show) {
          d.classList.remove("in");
          void d.offsetWidth; // relance l'animation d'apparition
          d.classList.add("in");
        }
      });
    });
  });

  /* ===================================================================
     SAUCE DE LA SEMAINE depuis config.js
     =================================================================== */
  var sauceName = document.getElementById("sauceName");
  if (sauceName && NONNA.sauceDeLaSemaine) {
    sauceName.textContent = NONNA.sauceDeLaSemaine;
  }

  /* ===================================================================
     CLICK & COLLECT depuis config.js
     =================================================================== */
  (function initClickCollect() {
    var cc = NONNA.clickAndCollect || {};
    var card = document.getElementById("ccCard");
    var text = document.getElementById("ccText");
    var go = document.getElementById("ccGo");
    var badge = document.getElementById("ccBadge");
    var floatBtn = document.getElementById("ccFloat");
    var actif = cc.actif === true && cc.url && String(cc.url).trim() !== "";

    if (actif) {
      var url = String(cc.url).trim();
      if (card) {
        card.setAttribute("href", url);
        card.setAttribute("target", "_blank");
        card.setAttribute("rel", "noopener");
        card.classList.remove("is-soon");
      }
      if (text) text.textContent = cc.messageActif || "Commandez en ligne et retirez en boutique.";
      if (go) go.innerHTML = (cc.texteBouton || "Commander &amp; retirer") + " &rarr;";
      if (badge) badge.hidden = true;
      if (floatBtn) {
        floatBtn.setAttribute("href", url);
        floatBtn.hidden = false;
        floatBtn.style.display = "inline-flex";
      }
    } else {
      // Fonction pas encore active : encart informatif, non cliquable
      if (card) {
        card.classList.add("is-soon");
        card.setAttribute("href", "#commander");
        card.addEventListener("click", function (e) { e.preventDefault(); });
      }
      if (text) text.textContent = cc.messageBientot || "Bientôt disponible : commandez en ligne et retirez en boutique.";
      if (badge) { badge.hidden = false; badge.textContent = "Bientôt"; }
      if (floatBtn) { floatBtn.hidden = true; floatBtn.style.display = "none"; }
    }
  })();

  var chipsWrap = document.getElementById("sauceChips");
  if (chipsWrap && Array.isArray(NONNA.sauces)) {
    var chtml = "";
    var current = NONNA.sauceDeLaSemaine || "";
    NONNA.sauces.forEach(function (s) {
      // marque comme active la sauce qui correspond à celle de la semaine
      var active = current.toLowerCase().indexOf(String(s).toLowerCase()) !== -1;
      chtml += '<button class="chip' + (active ? " is-active" : "") + '">' + esc(s) + "</button>";
    });
    chipsWrap.innerHTML = chtml;

    var chips = chipsWrap.querySelectorAll(".chip");
    // si aucune ne correspond, active la première
    if (!chipsWrap.querySelector(".chip.is-active") && chips[0]) {
      chips[0].classList.add("is-active");
    }
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        if (sauceName) sauceName.textContent = chip.textContent.trim();
      });
    });
  }
})();
