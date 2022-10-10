import Swiper, { Navigation, A11y } from "swiper";

function initSwiper() {
  new Swiper(".main-review__wrapper", {
    direction: "horizontal",
    spaceBetween: 300,
    grabCursor: true,
    loop: true,
    modules: [Navigation, A11y],
    navigation: {
      nextEl: ".main-review__next",
      prevEl: ".main-review__prev",
    },
  });

  new Swiper(".main-coaches__wrapper", {
    direction: "horizontal",
    spaceBetween: 300,
    grabCursor: true,
    modules: [Navigation, A11y],
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".main-coaches__next",
      prevEl: ".main-coaches__prev",
    },
  });
}

export { initSwiper };
