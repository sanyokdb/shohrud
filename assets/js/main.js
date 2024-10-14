// Бургер
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function(){
  nav.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  document.body.classList.toggle("no-scroll");
});


// Swiper
const HeroSwiper = new Swiper('.hero-slider', {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});