



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
