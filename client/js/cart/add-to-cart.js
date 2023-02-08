import { getNode, getNodes, insertLast } from "../index.js";

export const setProductDataToLocalStorage = (pageIdNode, itemNode, buttonNode, url, localStorageKey, manageStock) => {

  let localStorageValue = [];
  const setProductDataToLocalStorageHandler = (e, res) => { 
    let productId = e.target.closest(itemNode).dataset.productId;
    let addItem;

    res.data.forEach((element) => {
      if (productId === element.id && !(JSON.parse(localStorage.getItem(localStorageKey))?.find(e => e.id === productId))) {
        localStorageValue.push(element);
        localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
      } else if (productId === element.id && JSON.parse(localStorage.getItem(localStorageKey))?.find(e => e.id === productId) && manageStock) {
        localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
        addItem = JSON.parse(localStorage.getItem(localStorageKey)).find(e => e.id === productId);
        addItem.stock += 1;
        localStorageValue = localStorageValue.filter(e => e.id !== productId);
        localStorageValue.push(addItem);
        localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
      }
    })
  }

  const getProductData = async (url) => {
    let response = await fetch(url);

    if (response.ok) { 
      response.data = await response.json();
      return response;
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  if(getNode(pageIdNode)) {
    try {
      setTimeout(async () => {
          if(getNodes(buttonNode).length === 0) {
            throw new Error("buttonNode를 잘못 설정하였거나, 네트워크 문제일 수 있습니다. 네트워크 문제일 경우, 속도 문제일 가능성이 큽니다. 500ms 안에 itemNode가 불러져야 buttonNode를 가져올 수 있습니다.");
          }
        
          let res = await getProductData(url);
          
          getNodes(buttonNode).forEach(element => {
            element.addEventListener('click', (e) => setProductDataToLocalStorageHandler(e, res));
          });
      }, 500);
    } catch (error) {
    console.log(error);
    }
  } 
}

export const insertProductDataToCartPage = () => {
  const generateUID = () => {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  }

  const createCartProduct = ({
    id,
    name = '제품 이름',
    alt = '이미지 설명',
    price = 0,
    image = null,
    stock,
  }) => {
    let uuid1 = generateUID();
    let uuid2 = generateUID();
    let uuid3 = generateUID();
    let uuid4 = generateUID();
    let totalPrice = price * stock;
    totalPrice = totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    let imageThumbnail = image.thumbnail;
    return `
    <div class="item" aria-labelledby="item-title-${uuid1}" tabindex="0" data-product-id=${id}>
      <label for="item-checkbox-${uuid2}" class="a11y-hidden">상품 선택 체크박스</label>
      <input type="checkbox" id="item-checkbox-${uuid2}" class="item-checkbox" checked/>
      
      <a href="/" class="item-image" aria-label="상품 세부정보 페이지.">
        <img src="./assets/${imageThumbnail}" alt=${alt} />
      </a>
      
      <a href="/" id="item-title-${uuid1}" class="item-title" tabindex="-1">${name}</a>

      <div class="item-amount" aria-labelledby="item-amount-label-${uuid3} item-amount-label-${uuid4}" tabindex="0">
        <button type="button" class="item-amount__substract" aria-label="상품 수량 빼기"></button>
        <span id="item-amount-label-${uuid3}" class="a11y-hidden">상품수량</span>
        <span id="item-amount-label-${uuid4}">${stock}</span>
        <button type="button" class="item-amount__add" aria-label="상품 수량 더하기"></button>
      </div>

      <div class="item-price-wrapper" tabindex="0">
        <span class="a11y-hidden">상품합산가격</span>
        <span class="item-price">${totalPrice}원</span>
      </div>
      
      <button type="button" class="item-remove" aria-label="상품 삭제. 현재 상품을 목록에서 삭제합니다."></button>
    </div>
    `;
  }
  const refreshInfoForAddToCart = (targetNode) => {
    if(getNode(targetNode)) {
      let allProduct = JSON.parse(localStorage.getItem('cart'));

      let productsPrice = 0;
      let productsDiscountPrice = 0;
      allProduct.forEach(element => {
        productsPrice += element.price * element.stock;
        productsDiscountPrice += element.price * (element?.saleRatio ?? 0);
      })
      let totalPrice = productsPrice - productsDiscountPrice + 3000;
      productsPrice = productsPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      productsDiscountPrice = productsDiscountPrice === 0 ? 0 : '-' + productsDiscountPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      totalPrice = totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

      getNode(targetNode).children[1].children[0].children[0].children[0].children[1].children[0].textContent = productsPrice;
      getNode(targetNode).children[1].children[0].children[1].children[0].children[1].children[0].textContent = productsDiscountPrice;
      getNode(targetNode).children[1].children[1].children[0].children[0].children[1].children[0].children[0].textContent = totalPrice;
      if(!getNode('.main-cart .item')) {
        getNode(targetNode).children[1].children[0].children[2].children[0].children[1].children[0].textContent = 0;
        getNode(targetNode).children[1].children[1].children[0].children[0].children[1].children[0].children[0].textContent = '0';
      }
    }
  }

  const renderProduct = () => {
    let localStorageData = JSON.parse(localStorage.getItem('cart'));


    localStorageData?.forEach(element => {
      if(element.storageType === 'refrigerated') {
        if(getNode('.main-cart .refrigerated-food')) {
          insertLast('.main-cart .refrigerated-food', createCartProduct(element));
        }
      } else if (element.storageType === 'frozen') {
        if(getNode('.main-cart .frozen-food')) {
          insertLast('.main-cart .frozen-food', createCartProduct(element));
        }
      } else if (element.storageType === 'room-temperature') {
        if(getNode('.main-cart .room-temperature-food')) {
          insertLast('.main-cart .room-temperature-food', createCartProduct(element));
        }
      }
    });
    refreshInfoForAddToCart('.main-cart-container .order-detail');
  }

  renderProduct();
}
