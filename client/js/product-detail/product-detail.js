import { getNode } from "../../lib/index.js";

export const increaseClick = (node) => {
  const plusButton = getNode(node);
  const increaseQuantity = () => {
  let quantity = parseInt(document.getElementById('result').value, 10);
  quantity++;
  document.getElementById('result').value = quantity;
  calculateTotal();
};
  plusButton?.addEventListener('click',increaseQuantity);
}


export const decreaseClick = (node) => {
  const minusButton = getNode(node);
  const decreaseQuantity = () => {
    let quantity = parseInt(document.getElementById('result').value, 10);
    quantity < 1 ? quantity = 1 : '';
    quantity--;
    document.getElementById('result').value = quantity;
    calculateTotal();
  };
  minusButton?.addEventListener('click',decreaseQuantity);
}

export const calculateTotal = () => {
  const result = parseInt(document.getElementById('result').value, 10);
  const contentsTotal = parseInt(document.querySelector('.contents-total').textContent.replace(/,/g, ''), 10)
  document.getElementById('total').innerText = `${result * contentsTotal}원`;
};


export const addLike =(node) =>{
  const likeButton =getNode(node);
  const notifyButton= () => {
    alert('로그인하셔야 본 서비스를 이용하실 수 있습니다');
  };
likeButton?.addEventListener('click',notifyButton)
};


export const addAlarm =(node) =>{
  const alarmButton =getNode(node);
  const notifyButton= () => {
    alert('로그인하셔야 본 서비스를 이용하실 수 있습니다');
  };
alarmButton?.addEventListener('click',notifyButton)
};
