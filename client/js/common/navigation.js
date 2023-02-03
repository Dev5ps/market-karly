import { getNode, toggleClass, typeError } from "../../lib/index.js";

/**  */
export const dropdownToggle = (buttonNode, dropdownNode, token ) => {
  if(typeof buttonNode !== 'string' || typeof dropdownNode !== 'string' || typeof token !== 'string') {

    typeError('인수는 문자 타입이어야 합니다.')

  } else {

    const dropdownToggleClickHandler = () => {
      toggleClass(dropdownNode, token);
    }

    const dropdownToggleKeyHandler = (e) => {
      if(e.keyCode === 13) {
        toggleClass(dropdownNode, token);
      }
    }

    getNode(buttonNode).addEventListener('click', dropdownToggleClickHandler);
    getNode(buttonNode).addEventListener('keyup', dropdownToggleKeyHandler);
  }
}