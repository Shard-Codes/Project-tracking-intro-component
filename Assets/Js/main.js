// Navigation
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");
const menuToggler = document.querySelector(".menu__toggler");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("open-nav");
  menuToggler.setAttribute("aria-expanded", true);
  menuToggler.setAttribute("aria-pressed", true);
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("open-nav");
  menuToggler.setAttribute("aria-expanded", false);
  menuToggler.setAttribute("aria-pressed", false);
});

console.log("hello, world");
