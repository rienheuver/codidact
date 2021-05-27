import "./scss/app.scss";

window.prevSlide = () => {
  let current = document.querySelector(".slide-active");
  let prev = document.querySelector(".slide-active").previousElementSibling;
  if (prev !== null) {
    current.className = "slide slide-next";
    prev.className = "slide slide-active";
  }
}

window.nextSlide = () => {
  let current = document.querySelector(".slide-active");
  let next = document.querySelector(".slide-active").nextElementSibling;
  if (next !== null) {
    current.className = "slide slide-prev";
    next.className = "slide slide-active";
  }
}