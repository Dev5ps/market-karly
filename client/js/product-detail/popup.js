
import { getNode, removeClass, toggleClassAction } from '../index.js';


const textArea = getNode('#review-text-input');
const popup = getNode('.popup');
const popupBg = getNode('.popup-background');


//placeholder click시 textarea focus 
export function focusPlaceholder() {
  const placeHolder = getNode('.content-placeholder');
  placeHolder?.addEventListener("click", (e) => {
  placeHolder.hidden = true;
  textArea.focus();
  })
}



//text length counter
export function textCounter() {
  textArea?.addEventListener("keyup", (e) => {
  const count = textArea.value;
  const content = getNode('.content-counter__writing');
  content.innerHTML = + count.length + '/5000';
  })
}



//close button 누르면 popup 창 사라지게
export function closeButton() {
  const closeBtn = getNode('.close');
  closeBtn?.addEventListener("click", (e) => {
  popup.style.display = 'none';
  popupBg.style.display = 'none';
  })
}


//취소, 등록 버튼 클릭시 color change, 창 닫기
export function buttonColor() {
  const reviewBtn = getNode('.review-btn-wrapper');
  reviewBtn?.addEventListener("click", (e) => {
    let target = e.target;
    let button = target.closest('button');
    if(!button || !reviewBtn) return;
    button.style.backgroundColor = '#e1e1e1';
      setTimeout((e) => {
        removeClass(popup,'is-active')
        removeClass(popupBg,'is-active')
        button.style.backgroundColor = '#ffffff';
    }, 200);
  })
}

//버튼 누르면 팝업창 열리게
export function popupBtn() {
  toggleClassAction('.pop-up-button', '.popup', 'is-active')
  toggleClassAction('.pop-up-button', '.popup-background', 'is-active')
  // const testBtn = getNode('.pop-up-button');
  // testBtn.addEventListener("click", (e) => {
  // window.open('product-review.html', 'popup')
  // })
}





