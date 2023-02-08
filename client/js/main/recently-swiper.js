import { getNode, css } from "../../lib/index.js";

export const recentlyProductList = new Swiper(".swiper-4", {
  direction: "vertical",
  spaceBetween: 4,    // 슬라이드 사이 여백
  slidesPerView : 2.5, // 한 슬라이드에 보여줄 갯수
  slidesPerGroup : 1,
  centeredSlides: false,    //센터모드
  loop : false,   // 슬라이드 반복 여부
  navigation: {   // 버튼
    prevEl: ".swiper-4-button-prev",
    nextEl: ".swiper-4-button-next",
  },
});

let recentlyNode = getNode('.popup-recently');

export const scrollRecentlyPopup = (node) => {
  const scrollHandler = () => {
    let scroll = window.scrollY;
    css(node, 'top', `${scroll + 400}px`);
  }
  if(recentlyNode){

    window.addEventListener('scroll', scrollHandler);
  }
}