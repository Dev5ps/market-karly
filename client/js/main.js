import { toggleClassAction, listNavigationToggle, rendingProductItem, rendingMainProductItem } from "./index.js";

toggleClassAction('.category', '.navigation .dropdown', 'is-active');

rendingProductItem('.product-list .list-contents .list');
listNavigationToggle('.product-list .list-navigation');


rendingMainProductItem('.main-product-list-first .swiper-wrapper');
rendingMainProductItem('.main-product-list-second .swiper-wrapper');