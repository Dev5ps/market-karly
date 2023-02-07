import { getNodes } from "../index.js";

export const selectAll = (checkItemNode, checkAllNode, allCheckboxNode) => {
  const checkAllHandler = (index) => {
    getNodes(checkAllNode)[index].checked === true ? 
    getNodes(allCheckboxNode).forEach((item)=>{item.checked = true;}) : 
    getNodes(allCheckboxNode).forEach((item)=>{item.checked = false;}); 
  }

  const checkItemHandler = () => {
    getNodes(checkItemNode).forEach((item)=> {itemCheckboxStatus.push(item.checked)});
    itemCheckboxStatus.includes(false) ? 
    getNodes(checkAllNode).forEach((item)=>{item.checked = false}) :
    getNodes(checkAllNode).forEach((item)=>{item.checked = true});
    itemCheckboxStatus = [];
  }

  getNodes(checkAllNode).forEach((item, index) => {item.addEventListener('click', () => checkAllHandler(index))});

  let itemCheckboxStatus = [];
  getNodes(checkItemNode).forEach((item) => {item.addEventListener('click', () => checkItemHandler())});
}