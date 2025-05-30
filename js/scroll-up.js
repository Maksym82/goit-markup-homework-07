'use strict';

// Scroll up

const scrollToTopButton = document.getElementById("scrollToTop");

scrollToTopButton.addEventListener("click", () => {
  anime({
    targets: document.documentElement,
    scrollTop: 0,
    duration: 200,
    easing: "easeInOutQuad",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});