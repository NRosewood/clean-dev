export default () => {
  /* TYPE CLANING */

  const typeCleaning = document.querySelectorAll('input[name="type-cleaning"]');
  const typeResult = document.querySelector('[data-type]');
  const price = document.querySelector('#price');

  [].forEach.call(typeCleaning, item => {
    item.onclick = () => {
      typeResult.innerHTML = item.getAttribute('value');
      price.innerHTML = item.getAttribute('data-price');
    };
  });

  /* COUNTER */

  const counterResult = document.querySelector('.counter-result');
  const countMinus = document.querySelector('.calc-btn--minus');
  const countPlus = document.querySelector('.calc-btn--plus');
  const roomsCount = document.querySelector('[data-count]');

  countMinus.onclick = () => {
    if (+counterResult.innerHTML <= 1) return;
    counterResult.innerHTML = +counterResult.innerHTML - 1;
    roomsCount.innerHTML = counterResult.innerHTML + ' ' + 'ком.';
  };

  countPlus.onclick = () => {
    if (+counterResult.innerHTML >= 9) return;
    counterResult.innerHTML = +counterResult.innerHTML + 1;
    roomsCount.innerHTML = counterResult.innerHTML + ' ' + 'ком.';
  };
};
