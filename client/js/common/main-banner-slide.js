export const createMainBanner = ({
  id,
  name = '제품 이름',
  src = '이미지 경로',
  alt = '이미지 설명',
  

}) => {
  return /*html*/ ` 

  <div class="swiper-slide main-banner__banner" data-main-banner="${id}"><a href="https://github.com/Dev5ps"><img src="./assets/main-banner/banner05.png" alt="${alt}" /></a>
  <div class="main-banner__page--number" ${name}>${id}/3</div>
  </div>

 
  `
}
export const createBannerSlide=() =>{
 return  /*html*/ ` 
 <div class="swiper-wrapper">
 </div>
 `
}