// [data-open] вешается на кнопку, которая открывает модальное окно
// [data-popup] вешается на popup который должен быть открыт
// значение data должно быть одинокавым для одной группы

import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

export default () => {
  const close = document.querySelectorAll('.popup .close');
  const closeButton = document.querySelector('#close');
  const openBtns = document.querySelectorAll('[data-open]');
  const popupsWrap = document.querySelector('.popups');
  const popups = document.querySelectorAll('[data-popup]');
  const closeTargetArr = [closeButton, popupsWrap];

  [].forEach.call(close, item => closeTargetArr.push(item));

  if (!popups.length || !openBtns.length) return;

  [].forEach.call(openBtns, btn => {
    btn.onclick = () => {
      [].forEach.call(popups, popup => {
        if (
          popup.getAttribute('data-popup') === btn.getAttribute('data-open')
        ) {
          freeze();
          popupsWrap.classList.add('is-active');
          popup.classList.add('is-active');
        }
      });
    };
  });

  [].forEach.call(closeTargetArr, trg => {
    trg.onclick = e => {
      if (e.target == trg) {
        unfreeze();
        popupsWrap.classList.remove('is-active');

        [].forEach.call(popups, popup => {
          popup.classList.remove('is-active');
        });
      }

      return;
    };
  });
};
