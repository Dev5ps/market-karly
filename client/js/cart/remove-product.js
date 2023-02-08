import { getNode, getNodes } from "../index.js";

export const removeSelectedProduct = (checkerNode, buttonNode, localStorageKey) => {
  const refreshInfoForRemoveFromCart = (targetNode) => {
    let allProduct = JSON.parse(localStorage.getItem('cart'))

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

  let localStorageValue = [];
  const removeSelectedProductHandler = () => {
    let productId;
    getNodes(checkerNode)?.forEach(element => {
      if(element.checked) {
        productId = element.parentNode.dataset.productId;
        element.parentNode.remove();
        localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
        localStorageValue = localStorageValue.filter(e => e.id !== productId);
        localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
      }
    });
    refreshInfoForRemoveFromCart('.main-cart-container .order-detail')
  }

  getNodes(buttonNode)?.forEach(element => {
    element.addEventListener('click', removeSelectedProductHandler)
  });
}

export const removeProduct = (buttonNode, localStorageKey) => {
  const refreshInfoForRemoveFromCart = (targetNode) => {
    let allProduct = JSON.parse(localStorage.getItem('cart'))

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

  let localStorageValue = [];
  const removeProductHandler = (element) => {
    let productId;

    productId = element.parentNode.dataset.productId;
    element.parentNode.remove();
    localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    localStorageValue = localStorageValue.filter(e => e.id !== productId);
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
    refreshInfoForRemoveFromCart('.main-cart-container .order-detail')
  }

  getNodes(buttonNode)?.forEach(element => {
    element.addEventListener('click', () => removeProductHandler(element))
  });
}