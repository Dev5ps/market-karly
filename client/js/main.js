import { toggleClassAction, swiper } from "./common/index.js";
import { listNavigationToggle, rendingProductItem } from "./product-list/index.js";
export * from './common/index.js';

toggleClassAction('.category', '.navigation .dropdown', 'is-active');

rendingProductItem('.product-list .list-contents .list');
listNavigationToggle('.product-list .list-navigation');