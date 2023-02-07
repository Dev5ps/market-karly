import { toggleClassAction, listNavigationToggle, rendingProductItem, decreaseClick, increaseClick, addLike, addAlarm } from "./index.js";




toggleClassAction('.category', '.navigation .dropdown', 'is-active');

rendingProductItem('.product-list .list-contents .list');
listNavigationToggle('.product-list .list-navigation');


decreaseClick('.minus-button');
increaseClick('.plus-button');
addLike('.product-detail__cart--like');
addAlarm('.product-detail__cart--notification');