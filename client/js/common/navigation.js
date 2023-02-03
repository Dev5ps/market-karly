import { getNode, toggleClass, typeError } from "../../lib/index.js";

/**  */
export const dropdownToggle = (buttonNode, dropdownNode, token ) => {
  if(typeof buttonNode !== 'string' || typeof dropdownNode !== 'string' || typeof token !== 'string') {

    typeError('인수는 문자 타입이어야 합니다.')

  } else {

    const dropdownToggleHandler = () => {
      toggleClass(dropdownNode, token);
    }

    getNode(buttonNode)?.addEventListener('click', dropdownToggleHandler);
  }
}