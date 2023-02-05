import { toggleClassAction, listNavigationToggle, rendingProductItem, selectAll } from "./index.js";

/* 네비게이션 카테고리 드롭다운 토글 기능 */
toggleClassAction('.category', '.navigation .dropdown', 'is-active');
/* -------------------------------------------------------------------------- */

/* 장바구니 페이지 상품 탭 토글 기능 */
toggleClassAction('.refrigerated-food-container', '.refrigerated-food .item', 'is-active');
toggleClassAction('.frozen-food-container', '.frozen-food .item', 'is-active');
toggleClassAction('.room-temperature-food-container', '.room-temperature-food .item', 'is-active');
/* -------------------------------------------------------------------------- */

/* 장바구니 페이지 상품 전체 선택 기능 */
selectAll('.main-cart .item-checkbox', '.main-cart .select__checkbox', '.main-cart .item-checkbox, .main-cart .select__checkbox');
/* -------------------------------------------------------------------------- */

rendingProductItem('.product-list .list-contents .list');
listNavigationToggle('.product-list .list-navigation');
