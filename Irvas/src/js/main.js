import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

modals();
tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tabs('.decoration_slider', '.decoration_item > div', '.decoration_content > div > div', 'after_click');