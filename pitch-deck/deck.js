(function () {
  "use strict";

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var total = slides.length;
  var current = 0;

  var prevBtn = document.getElementById("prev");
  var nextBtn = document.getElementById("next");
  var counter = document.getElementById("counter");
  var progress = document.getElementById("progress");
  var notesPanel = document.getElementById("notes-panel");
  var notesText = document.getElementById("notes-text");
  var notesOpen = false;

  function updateSlide(index) {
    if (index < 0 || index >= total) return;
    current = index;

    slides.forEach(function (slide, i) {
      slide.classList.remove("is-active", "is-prev");
      if (i === current) {
        slide.classList.add("is-active");
      } else if (i < current) {
        slide.classList.add("is-prev");
      }
    });

    counter.textContent = String(current + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
    progress.style.width = ((current + 1) / total * 100) + "%";

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;

    var note = slides[current].getAttribute("data-note");
    if (note) {
      notesText.textContent = note;
    }

    history.replaceState(null, "", "#slide-" + (current + 1));
  }

  function goNext() {
    if (current < total - 1) updateSlide(current + 1);
  }

  function goPrev() {
    if (current > 0) updateSlide(current - 1);
  }

  function toggleNotes() {
    notesOpen = !notesOpen;
    notesPanel.classList.toggle("is-open", notesOpen);
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "Home") {
      e.preventDefault();
      updateSlide(0);
    } else if (e.key === "End") {
      e.preventDefault();
      updateSlide(total - 1);
    } else if (e.key === "n" || e.key === "N") {
      toggleNotes();
    } else if (e.key === "f" || e.key === "F") {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen().catch(function () {});
      }
    }
  });

  // Touch swipe
  var touchStartX = 0;
  var deck = document.querySelector(".deck__viewport");

  deck.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  deck.addEventListener("touchend", function (e) {
    var diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) goNext();
      else goPrev();
    }
  }, { passive: true });

  // Hash navigation
  var hash = window.location.hash;
  if (hash && hash.indexOf("#slide-") === 0) {
    var num = parseInt(hash.replace("#slide-", ""), 10);
    if (num >= 1 && num <= total) {
      current = num - 1;
    }
  }

  updateSlide(current);
})();
