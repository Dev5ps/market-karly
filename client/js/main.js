import { dropdownToggle, swiper } from "./common/index.js";
import { listNavigationToggle, rendingProductItem } from "./product-list/index.js";
export * from './common/index.js';

dropdownToggle('.category', '.navigation .dropdown', 'is-active');

rendingProductItem('.product-list .list-contents .list');