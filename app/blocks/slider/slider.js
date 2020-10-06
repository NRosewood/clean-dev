/* eslint-disable */
import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

Number.isNaN = Number.isNaN || function(value) {
  return typeof value === 'number' && isNaN(value);
};

/* I'm here! */

// example of use
export default () => {
  const personalSlider = new Swiper('.js-personal-slider', {
    speed: 700,
    // slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      prevEl: '.personal-prev',
      nextEl: '.personal-next',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
  });

  const reviewslSlider = new Swiper('.js-reviews-slider', {
    speed: 700,
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      prevEl: '.reviews-prev',
      nextEl: '.reviews-next',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
};
/* eslint-enable */
