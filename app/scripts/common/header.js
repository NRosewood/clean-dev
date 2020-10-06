/* eslint-disable */

import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

export default () => {
  const h = $('html');
  const header = document.querySelector('.header');
  const nav = document.querySelector('.navigation');
  const btn = document.querySelector('.burger');
  const swithesArr = [nav, btn];

  if (!header) return;

  $(window).scroll(function(){
    if ($(window).scrollTop() > 30) {
        $(header).addClass('is-scrolled');
    }
    else {
        $('.header').removeClass('is-scrolled')
    }
});

if (!btn) return;

  btn.onclick = () => {
    h.css('position') === 'fixed'?unfreeze():freeze();

    [].forEach.call(swithesArr, (switchItem) => {
      switchItem.classList.toggle('is-active');
    })
  };
};
