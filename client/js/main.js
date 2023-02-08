import { toggleClassAction, listNavigationToggle, rendingProductItem, loginProgress } from "./index.js";
import { registerProgress } from "./register/register.js";

toggleClassAction('.category', '.navigation .dropdown', 'is-active');

rendingProductItem('.product-list .list-contents .list');
listNavigationToggle('.product-list .list-navigation');
registerProgress();
loginProgress();