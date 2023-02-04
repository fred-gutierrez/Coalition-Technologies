var navEl = document.querySelector(".navbar");
var laBrand = document.querySelector(".la-brand");
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    laBrand.classList.remove("d-none");
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 250) {
    navEl.classList.remove("navbar-scrolled");
    laBrand.classList.add("d-none");
  }
});
