import { getNode, insertLast, tiger, createMainProduct } from '../index.js';

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
/*                                 메인 제품 리스트 페이지                                 */
/* -------------------------------------------------------------------------- */


/* 제품 리스트 ajax 통신 및 DOM에 뿌리기(s) */

const renderMainProductItem = (target, data) => {
  insertLast(target,createMainProduct(data));
}

export const rendingMainProductItem = async(node) => {

  try{
    const mainProductListContainer = getNode(node);
    let response = await tiger.get('http://localhost:3000/products');
    let productData = response.data;
    if(mainProductListContainer){
      productData.forEach((data)=>{
        renderMainProductItem(mainProductListContainer, data);
      });
    }

  } catch(err){
    console.log('제품 리스트 렌더링에 실패했습니다.');
  }

}

/* 제품 리스트 ajax 통신 및 DOM에 뿌리기(e) */

