// Бургер
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  document.body.classList.toggle("no-scroll");
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

// Yandex Maps 39.771848, 64.445303
let center = [39.771848,64.445303];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});

  let placemark = new ymaps.Placemark(center, {
		// balloonContentHeader: 'Хедер балуна',
		// balloonContentBody: 'Боди балуна',
		// balloonContentFooter: 'Подвал',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn-icons-png.flaticon.com/512/6063/6063856.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-20, -40]
	});

  let placemark1 = new ymaps.Placemark(center, {
		balloonContent: `
			<div class="balloon">
				<div class="balloon__address">г. Париж</div>
				<div class="balloon__contacts">
					<a href="tel:+7999999999">+7999999999</a>
				</div>
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn-icons-png.flaticon.com/512/6063/6063856.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-20, -40]
	});

	
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  // map.geoObjects.add(placemark);
  map.geoObjects.add(placemark);

  placemark1.balloon.open();

}

ymaps.ready(init);


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