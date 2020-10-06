import { freeze, unfreeze } from '../../blocks/js-functions/freeze';
/* eslint-disable */
export default () => {
  const getDuration = (target) => {
    const currentTop = $(window).scrollTop();
    const rate = 0.5;
    const distance = Math.abs(currentTop - target);

    return distance * rate;
  };

  $('.js-scroll').on('click', function () {
    event.preventDefault();
    const el = $(this);
    const href = el.attr('href');

    $('.header nav').removeClass('is-active');
    unfreeze();

    $('body, html').stop().animate({
      scrollTop: $(href).offset().top - 30,
    }, getDuration($(href).offset().top - 30), 'swing');
  });
};
/* eslint-enable */
