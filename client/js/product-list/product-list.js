import { getNode, insertLast, tiger, createProduct } from '../index.js';




/* -------------------------------------------------------------------------- */
/*                                 제품 리스트 페이지                                 */
/* -------------------------------------------------------------------------- */


/* 제품 리스트 ajax 통신 및 DOM에 뿌리기(s) */

const renderProductItem = (target, data) => {
  insertLast(target,createProduct(data));
}

export const rendingProductItem = async(node) => {

  try{
    const productListContainer = getNode(node);
    let response = await tiger.get('http://localhost:3000/products');
    let productData = response.data;
    if(productListContainer){
      productData.forEach((data)=>{
        renderProductItem(productListContainer, data);
      });
    }

  } catch(err){
    console.log('제품 리스트 렌더링에 실패했습니다.');
  }

}

/* 제품 리스트 ajax 통신 및 DOM에 뿌리기(e) */

