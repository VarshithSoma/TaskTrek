const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryHeader = document.querySelector(".primary-header");
const primaryNav = document.querySelector(".primary-navigation");
navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobd = document.querySelector(".mobilenavbar");
hamburger.addEventListener("click", () => {
  bar1.classList.toggle("bar1as");
  bar2.classList.toggle("bar2as");
  bar3.classList.toggle("bar3as");
  mobd.classList.toggle("opennavmob");
});
