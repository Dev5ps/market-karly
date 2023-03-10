import { getNode, getNodes, toggleClass, typeError } from "../index.js";

/** 
 * buttonNode에 마우스 왼쪽클릭 또는 엔터키 입력 시, 원하는 기능을 담은 클래스 token이 actionNode에 추가/삭제되는 토글 기능을 추가한다. 
 * @param {string} buttonNode 마우스 왼쪽클릭 또는 엔터키를 입력할 노드
 * @param {string} actionNode 토글 기능을 추가할 노드
 * @param {string} token 원하는 기능을 담은 클래스의 토큰
 */
export const toggleClassAction = (buttonNode, actionNode, token ) => {
  if(typeof buttonNode !== 'string' || typeof actionNode !== 'string' || typeof token !== 'string') {

    typeError('인수는 문자 타입이어야 합니다.')

  } else {

    const toggleClassActionClickHandler = () => {
      if(getNodes(actionNode).length !== 0) {
        getNodes(actionNode).forEach(element => {
          toggleClass(element, token);
        });
      }
    }

    const toggleClassActionKeyHandler = (e) => {
      if(e.keyCode === 13) {
        if(getNodes(actionNode).length !== 0) {
          getNodes(actionNode).forEach(element => {
            toggleClass(element, token);
          });
        }
      }
    }

    getNode(buttonNode)?.addEventListener('click', toggleClassActionClickHandler);
    getNode(buttonNode)?.addEventListener('keyup', toggleClassActionKeyHandler);
  }
}