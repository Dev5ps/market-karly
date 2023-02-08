import { getNode, insertLast, tiger, createMainBanner } from "../index.js";

setTimeout(() => {
  const swiper = new Swiper('.swiper-1',{
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    loop:true,
    loopedSlides: 1,
    speed: 2000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  }) 
}, 1000);




const renderMainBanner = (target, data) => {
  insertLast(target,createMainBanner(data));
}

export const rendingMainBanner = async(node) => {

  try{
    const mainBannerContainer = getNode(node);
    let response = await tiger.get('http://localhost:3000/banner');
    let mainBannerData = response.data;
    if(mainBannerContainer){
      mainBannerData.forEach((data)=>{
        renderMainBanner(mainBannerContainer, data);

      });
    }

  } catch(err){
    console.log('메인 베너 렌더링에 실패했습니다.');
  }

}
  



