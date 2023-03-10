/* 렌더링 될 제품 리스트 아이템 */
export const createProduct = ({
  id,
  name = '제품 이름',
  description = '제품 설명',
  alt = '이미지 설명',
  price = 0,
  saleRatio = null,
  salePrice = null,
  image = null
}) => {
  price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  salePrice = salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let imageThumbnail = image.thumbnail;
  if(saleRatio === 0){
    return `
    <div class="item" data-product-id="${id}">
      <a href="./${id}.html" target="_blank">
        <img src="./assets/${imageThumbnail}" alt="${alt}" />
        <div class="item-info">
          <span class="item-info__delivery">샛별배송</span>
          <h3 class="item-info__title">${name}</h3>
          <span class="item-info__price"><span class="a11y-hidden">현재 가격</span>${price} 원</span>
          <p class="item-info__desc">${description}</p>
        </div>
      </a>
      <button class="item__cart-button"><img src="./assets/icons/Icon/Cart.svg" alt="제품 카트 담기 버튼 아이콘" /></button>
    </div>
    `
  } else {
    return `
    <div class="item" data-product-id="${id}">
      <a href="./${id}.html" target="_blank">
        <img src="./assets/${imageThumbnail}" alt="${alt}" />
        <div class="item-info">
          <span class="item-info__delivery">샛별배송</span>
          <h3 class="item-info__title">${name}</h3>
          <span class="item-info__discount-rate"><span class="a11y-hidden">할인율</span>${saleRatio*100}%</span>
          <span class="item-info__discount-price"><span class="a11y-hidden">할인전 가격</span>${price} 원</span>
          <span class="item-info__price"><span class="a11y-hidden">현재 가격</span>${salePrice} 원</span>
          <p class="item-info__desc">${description}</p>
          <div class="tag">
            <span class="tag__item tag__karly-only">Karly Only</span>
            <span class="tag__item">한정수량</span>
          </div>
        </div>
      </a>
      <button class="item__cart-button"><img src="./assets/icons/Icon/Cart.svg" alt="제품 카트 담기 버튼 아이콘" /></button>
    </div>
    `
  }
  
}