
import { toggleClass } from '../../lib/dom/css.js';
import { getNode } from '../../lib/dom/getNode.js';


/* 제품 리스트 좌측 네비게이션 클릭 이벤트(s) */

export const listNavigationToggle = (node) => {

  const listNavigationContainer = getNode(node);
  
  const listNavigationHandler = (e) => {
    e.preventDefault();
    let target = e.target;
    let button = target.closest('button');
    let dropdownList = button?.nextElementSibling;
  
    if(!listNavigationContainer || !button) return;
  
    toggleClass(button,'is-active');
    toggleClass(dropdownList,'is-active');
  
  }
  
  listNavigationContainer?.addEventListener('click', listNavigationHandler);

}

/* 제품 리스트 좌측 네비게이션 클릭 이벤트(e) */