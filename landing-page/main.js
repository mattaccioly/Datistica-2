(function () {
  "use strict";

  // Scroll-triggered fade-in
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Hero elements reveal immediately on load
  window.addEventListener("DOMContentLoaded", function () {
    var heroReveals = document.querySelectorAll(".hero .reveal");
    heroReveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  });

  // Header border on scroll
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Language toggle (visual only)
  var langToggle = document.querySelector(".lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var opts = langToggle.querySelectorAll(".lang-toggle__opt");
      opts.forEach(function (opt) {
        opt.classList.toggle("lang-toggle__opt--active");
      });
    });
  }
})();
