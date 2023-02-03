import { toggleClassAction, listNavigationToggle, rendingProductItem } from "./index.js";

toggleClassAction('.category', '.navigation .dropdown', 'is-active');

rendingProductItem('.product-list .list-contents .list');
listNavigationToggle('.product-list .list-navigation');