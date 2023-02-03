
import { getNode } from '../../lib/dom/getNode.js';
import { insertLast } from '../../lib/dom/insert.js';
import { tiger } from '../../lib/utils/tiger.js';
import { toggleClass } from '../../lib/dom/css.js';
import { attr } from '../../lib/dom/attr.js';
import { createProduct } from './product-list-item.js';

/* 메인 리스트 스와이프 */

export const mainProductList = new Swiper(".swiper-2", {
  spaceBetween: 18,    // 슬라이드 사이 여백
  slidesPerView : 4, // 한 슬라이드에 보여줄 갯수
  slidesPerGroup : 4,
  centeredSlides: false,    //센터모드
  loop : false,   // 슬라이드 반복 여부
  navigation: {   // 버튼
    prevEl: ".swiper-2-button-prev",
    nextEl: ".swiper-2-button-next",
  },
});

export const mainProductList2 = new Swiper(".swiper-3", {
  spaceBetween: 18,    // 슬라이드 사이 여백
  slidesPerView : 4, // 한 슬라이드에 보여줄 갯수
  slidesPerGroup : 4,
  centeredSlides: false,    //센터모드
  loop : false,   // 슬라이드 반복 여부
  navigation: {   // 버튼
    prevEl: ".swiper-3-button-prev",
    nextEl: ".swiper-3-button-next",
  },
});





/* -------------------------------------------------------------------------- */
/*                                 제품 리스트 페이지                                 */
/* -------------------------------------------------------------------------- */


/* 제품 리스트 ajax 통신 및 DOM에 뿌리기(s) */

const renderProductItem = (target, data) => {
  insertLast(target,createProduct(data));
}

export const rendingProductItem = async(node) => {

  try{
    const productListContainer = getNode(node);
    let response = await tiger.get('http://localhost:3000/products');
    let productData = response.data;
    if(productListContainer){
      productData.forEach((data)=>{
        renderProductItem(productListContainer, data);
      });
    }

  } catch(err){
    console.log('제품 리스트 렌더링에 실패했습니다.');
  }

}

/* 제품 리스트 ajax 통신 및 DOM에 뿌리기(e) */

