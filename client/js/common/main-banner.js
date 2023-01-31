


const data = [
    {
      "id": 1,
      "src": "banner05.png",
      "alt": "이주의 특가 상품"
    },
    {
      "id": 2,
      "src": "banner05.png",
      "alt": "크리스마스 특별전"
    },
    {
      "id": 3,
      "src": "banner05.png",
      "alt": "명절 후 식단 관리"
    },

  ]
  
  
 export const swiper = new Swiper('.swiper-1',{
    autoplay:true,
    loop:true,
    speed: 2000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    pagination:{
      el:'.pagination',
      clickable:true,
      bulletClass:'bullet',
      bulletActiveClass:'is-active',
      renderBullet: function (index,className){
        return /* html */ `
          <span class="${className}">
            <img src="${data[index].src}" alt="${data[index].alt}" />
          </span>
        `
      }
    }
  
  })


