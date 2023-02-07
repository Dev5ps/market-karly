import { getNodes } from "../index.js";

export const removeSelectedProduct = (checkerNode, buttonNode, localStorageKey) => {
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
  }

  getNodes(buttonNode)?.forEach(element => {
    element.addEventListener('click', removeSelectedProductHandler)
  });
}

export const removeProduct = (buttonNode, localStorageKey) => {
  let localStorageValue = [];
  const removeProductHandler = (element) => {
    let productId;

    productId = element.parentNode.dataset.productId;
    element.parentNode.remove();
    localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    localStorageValue = localStorageValue.filter(e => e.id !== productId);
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
  }

  getNodes(buttonNode)?.forEach(element => {
    element.addEventListener('click', () => removeProductHandler(element))
  });
}