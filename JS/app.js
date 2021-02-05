const btnHamburguer = document.querySelector("#btnHamburguer");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeElements = document.querySelectorAll(".has-fade");

btnHamburguer.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElements.forEach((el) => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElements.forEach((el) => {
      el.classList.add("fade-in");
      el.classList.remove("fade-out");
    });
  }
});
