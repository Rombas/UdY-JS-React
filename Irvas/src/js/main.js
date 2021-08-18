import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calculator from './modules/calculator';
import store from './modules/store';
import timer from './modules/timer';
import imageViewerModal from './modules/imageViewerModal';

const state = {};

store(state);
modals();
tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tabs('.decoration_slider', '.decoration_item > div', '.decoration_content > div > div', 'after_click');
tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
forms('.form', state);
calculator();
timer('2021-08-30T16:05', '.timer1');
imageViewerModal();