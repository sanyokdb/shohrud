// Бургер
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  document.body.classList.toggle("no-scroll");
});

// SideNav
$("#sidebar-nav-btn").click(function () {
  $(this).toggleClass("is-active");
  $("#sidebar-nav").toggleClass("is-open");
});

// Hero Slider
const HeroSwiper = new Swiper(".hero-slider", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

Fancybox.bind('[data-fancybox]', {
  dragToClose: false,
});

// Sidebar Nav
$('.sidebar-nav__list li.dropdown > a').on('click', function(){
  // $(this).removeAttr('href');
  var element = $(this).parent('li');
  if (element.hasClass('is-open')) {
      element.removeClass('is-open');
      element.find('li').removeClass('is-open');
      element.find('ul').slideUp();
  } else {
      element.addClass('is-open');
      element.children('ul').slideDown();
      element.siblings('li').children('ul').slideUp();
      element.siblings('li').removeClass('is-open');
      element.siblings('li').find('li').removeClass('is-open');
      element.siblings('li').find('ul').slideUp();
  }
});


// scrollUp
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#scrollUp").fadeIn();
  } else {
    $("#scrollUp").fadeOut();
  }
});
$("#scrollUp").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});