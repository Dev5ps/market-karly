import { insertLast } from '../../lib/dom/insert.js';
import { getNode } from '../../lib/dom/getNode.js';
import { localProductSet } from './recently-viewed.js';

let recentlyData = JSON.parse(localStorage.getItem('recently'));
console.log(recentlyData)
// let thumbnail = a[1].id;

const createRecentlyProduct = ({
  thumbnail,
  alt,
}) => {
  if(recentlyData === null) {
    return ``
  }else{
    return `
    <div class="swiper-slide recently-item">
      <a href="#"><img src="./assets/${thumbnail}" alt="${alt}" /></a>
    </div>
    `
  }
}



const renderRecentlyProduct = (target, data) => {
  insertLast(target,createRecentlyProduct(data));
}

export const rendingRecentlyProduct = (node) => {

  try{
    const recentlyContainer = getNode(node);
    if(recentlyContainer){
      recentlyData.forEach((data)=>{
        renderRecentlyProduct(recentlyContainer, data);
      });
    }

  } catch(err){
    console.log('제품 리스트 렌더링에 실패했습니다.');
  }

}
