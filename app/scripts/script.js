import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import accordion from '../blocks/accordion/accordion';
import selectBlock from '../blocks/select-block/select-block';
import slider from '../blocks/slider/slider';
import header from './common/header';
import tabs from '../blocks/tabs/tabs';
import scroll from './common/scroll';
import calck from './common/calck';
// import popup from './common/popup';

$(() => {
  svg4everybody();
  objectFitImages();
  accordion();
  selectBlock();
  slider();
  header();
  tabs();
  scroll();
  calck();
  // popup();
});
