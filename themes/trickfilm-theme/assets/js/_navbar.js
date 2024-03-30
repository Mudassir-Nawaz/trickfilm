new IntersectionObserver(function (e, o) {
  const navbar = document.querySelector(".navbar");

  if (e[0].intersectionRatio > 0) {
    navbar.classList.remove("scrolled");
    navbar.classList.remove("bg-dark");
    navbar.classList.remove("py-0");
  } else {
    navbar.classList.add("scrolled");
    navbar.classList.add("bg-dark");
    navbar.classList.add("py-0");
  }
}).observe(document.querySelector(".navbar-trigger"));
