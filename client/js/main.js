import { toggleClassAction, listNavigationToggle, rendingProductItem, decreaseClick, increaseClick, addLike, addAlarm,selectAll,rendingMainProductItem, localProductSet, scrollRecentlyPopup, rendingRecentlyProduct } from "./index.js";



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


decreaseClick('.minus-button');
increaseClick('.plus-button');
addLike('.product-detail__cart--like');
addAlarm('.product-detail__cart--notification');
rendingMainProductItem('.main-product-list-first .swiper-wrapper');
rendingMainProductItem('.main-product-list-second .swiper-wrapper');

/* 최근본상품 스크롤 기능 */
scrollRecentlyPopup('.popup-recently');

/* 메인 리스트 클릭시 recently localStorage로 올리고 DOM에 뿌리기 */
localProductSet('.main-product-list-first');
localProductSet('.main-product-list-second');
localProductSet('.product-list .list-contents .list');
rendingRecentlyProduct('.popup-recently .swiper-4 .swiper-wrapper')