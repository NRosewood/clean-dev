/* eslint-disable */
export default () => {
  /* TYPE CLANING */

  const typeCleaning = document.querySelectorAll('input[name="type-cleaning"]');
  const typeResult = document.querySelector('[data-type]');
  const price = document.querySelector('#price');
  let costDefault = 2500;
  let costOther = 0;

  [].forEach.call(typeCleaning, item => {
    item.onclick = () => {
      typeResult.innerHTML = item.getAttribute('value');

      costDefault = item.getAttribute('data-price');
      price.innerHTML = 'от' + ' ' + (+costDefault + +costOther) + ' ' + 'руб.';
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

  /* LOGIC STEPS */

  const step = document.querySelectorAll('.step');
  const formBnt = document.querySelectorAll('.form-btn');
  const nextStep = document.querySelector('#nextStep');

  nextStep.onclick = () => {
    [].forEach.call(step, elem => {
      elem.classList.toggle('is-active');
    });

    [].forEach.call(formBnt, elem => {
      elem.classList.toggle('is-active');
    });
  };

  /* OTHER SERVICES */
  const otherServices = document.querySelectorAll('.calculater input[type="checkbox"]');
  const resulList = document.querySelector('#resultList');

  [].forEach.call(otherServices, servicesPoint => {
    servicesPoint.onclick = () => {
      if (servicesPoint.checked) {
        costOther = +costOther + +servicesPoint.getAttribute('data-price');
        price.innerHTML = 'от' + ' ' + (+costDefault + +costOther) + ' ' + 'руб.';
      }

      if (!servicesPoint.checked) {
        costOther = +costOther - +servicesPoint.getAttribute('data-price');
        price.innerHTML = 'от' + ' ' + (+costDefault + +costOther) + ' ' + 'руб.';
      }
    };
  });
};
/* eslint-enable */
