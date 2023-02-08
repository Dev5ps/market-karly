import { getNode, getNodes } from "../index.js";

export const addQuantity = (pageIdNode, itemNode, buttonNode, localStorageKey) => {

  const refreshInfo = (productId, targetNode) => {
    let currentProductData = JSON.parse(localStorage.getItem(localStorageKey))?.find(e => e.id === productId)
    let allProduct = JSON.parse(localStorage.getItem(localStorageKey))

    let thisProductsPrice = currentProductData.price * currentProductData.stock;

    let productsPrice = 0;
    let productsDiscountPrice = 0;
    allProduct.forEach(element => {
      productsPrice += element.price * element.stock
      productsDiscountPrice += element.price * (element?.saleRatio ?? 0)
    })
    let totalPrice = productsPrice - productsDiscountPrice + 3000;
    thisProductsPrice = thisProductsPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + '원';
    productsPrice = productsPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    productsDiscountPrice = productsDiscountPrice === 0 ? 0 : '-' + productsDiscountPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    totalPrice = totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    
    targetNode.previousElementSibling.textContent = currentProductData.stock;
    targetNode.parentNode.nextElementSibling.childNodes[3].textContent = thisProductsPrice;
    
    targetNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[0].children[0].children[0].children[1].children[0].textContent = productsPrice;
    targetNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[0].children[1].children[0].children[1].children[0].textContent = productsDiscountPrice;
    targetNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[1].children[0].children[0].children[1].children[0].children[0].textContent = totalPrice;
  }

  let localStorageValue = [];
  const setProductDataToLocalStorageHandler = (e) => { 
    let productId = e.target.closest(itemNode).dataset.productId;
    let addItem;

    if (JSON.parse(localStorage.getItem(localStorageKey))?.find(e => e.id === productId)) {
      localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
      addItem = JSON.parse(localStorage.getItem(localStorageKey)).find(e => e.id === productId);
      addItem.stock += 1;
      localStorageValue = localStorageValue.filter(e => e.id !== productId);
      localStorageValue.push(addItem);
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
    }
    refreshInfo(productId, e.target);
  }

  if (getNode(pageIdNode) && getNode(buttonNode)) {
    try {
      setTimeout(async () => {
          if(getNodes(buttonNode).length === 0) {
            throw new Error("buttonNode를 잘못 설정하였거나, 네트워크 문제일 수 있습니다. 네트워크 문제일 경우, 속도 문제일 가능성이 큽니다. 500ms 안에 itemNode가 불러져야 buttonNode를 가져올 수 있습니다.");
          }

          getNodes(buttonNode).forEach(element => {
            element.addEventListener('click', (e) => setProductDataToLocalStorageHandler(e));
          });
      }, 500);
    } catch (error) {
    console.log(error);
    }
  }
}
