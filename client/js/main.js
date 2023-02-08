import { toggleClassAction, listNavigationToggle, rendingProductItem, decreaseClick, increaseClick, addLike, addAlarm,selectAll,rendingMainProductItem,
   localProductSet, scrollRecentlyPopup, rendingRecentlyProduct, loginProgress, registerProgress, setProductDataToLocalStorage, insertProductDataToCartPage,
    removeSelectedProduct, removeProduct, addQuantity, substractQuantity } from "./index.js";


localStorage.setItem('123', 123);

/* 네비게이션 카테고리 드롭다운 토글 기능 */
toggleClassAction('.category', '.navigation .dropdown', 'is-active');
/* -------------------------------------------------------------------------- */

/* 제품 리스트 렌더 */
rendingProductItem('.product-list .list-contents .list');
listNavigationToggle('.product-list .list-navigation');
rendingMainProductItem('.main-product-list-first .swiper-wrapper');
rendingMainProductItem('.main-product-list-second .swiper-wrapper');
/* -------------------------------------------------------------------------- */

// 회원가입, 로그인
registerProgress();
loginProgress();
/* -------------------------------------------------------------------------- */

// 상품 상세페이지
decreaseClick('.minus-button');
increaseClick('.plus-button');
addLike('.product-detail__cart--like');
addAlarm('.product-detail__cart--notification');
/* -------------------------------------------------------------------------- */

/* 최근본상품 스크롤 기능 */
scrollRecentlyPopup('.popup-recently');
/* -------------------------------------------------------------------------- */

/* 메인 리스트 클릭시 recently localStorage로 올리고 DOM에 뿌리기 */
localProductSet('.main-product-list-first');
localProductSet('.main-product-list-second');
localProductSet('.product-list .list-contents .list');
rendingRecentlyProduct('.popup-recently .swiper-4 .swiper-wrapper');
/* -------------------------------------------------------------------------- */

/* 장바구니 상품 로컬스토리지에 올리고 페이지에 넣어주는 기능 */
setProductDataToLocalStorage('section.main-product-list', '.main-product-list .item', '.main-product-list .item__cart-button',  'http://localhost:3000/products', 'cart', true);
setProductDataToLocalStorage('section.product-list', '.product-list .list .item', '.product-list .list .item__cart-button', 'http://localhost:3000/products', 'cart', true);
insertProductDataToCartPage();
/* -------------------------------------------------------------------------- */

/* 장바구니 상품 수량 수정 기능 */
addQuantity('section.main-cart', '.main-cart .item', '.main-cart .item-amount__add', 'cart')
substractQuantity('section.main-cart', '.main-cart .item', '.main-cart .item-amount__substract', 'cart')
/* -------------------------------------------------------------------------- */

/* 장바구니 상품 삭제 기능 */
removeSelectedProduct('.main-cart .item-checkbox', '.main-cart .select__delete', 'cart');
removeProduct('.main-cart .item-remove', 'cart');
/* -------------------------------------------------------------------------- */

/* 장바구니 페이지 상품 탭 토글 기능 */
toggleClassAction('.refrigerated-food-container', '.refrigerated-food .item', 'is-active');
toggleClassAction('.frozen-food-container', '.frozen-food .item', 'is-active');
toggleClassAction('.room-temperature-food-container', '.room-temperature-food .item', 'is-active');
/* -------------------------------------------------------------------------- */

/* 장바구니 페이지 상품 전체 선택 기능 */
selectAll('.main-cart .item-checkbox', '.main-cart .select__checkbox', '.main-cart .item-checkbox, .main-cart .select__checkbox');
/* -------------------------------------------------------------------------- */