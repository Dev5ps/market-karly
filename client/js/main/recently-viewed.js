
import { getNode } from '../../lib/dom/getNode.js';
import { attr } from '../../lib/dom/attr.js';
import { tiger } from '../../lib/utils/tiger.js';
import { insertLast } from '../../lib/dom/insert.js';



let allEntries = JSON.parse(localStorage.getItem("allEntries"));
if(allEntries == null) allEntries = [];
export const localProductSet = (node) => {
  const productWrapper = getNode(node);
  

  const handler = async(e) => {
    // e.preventDefault();
    let target = e.target.closest('.item');
    if(!target || !productWrapper) return
    let id = attr(target,'data-product-id');
    let loadProductData = await tiger.get('http://localhost:3000/products');
    
    loadProductData.data.forEach((data)=>{
      
      let arr = [data.id,data.image.thumbnail, data.image.alt];
      
  
      if(id === data.id){
        // localStorage.setItem(i,JSON.stringify(arr));
        let dataId = data.id;
        let dataThumbnail = data.image.thumbnail;
        let dataAlt = data.image.alt;
        let entry = {
            "id": dataId,
            "thumbnail": dataThumbnail,
            "alt": dataAlt
        };
        localStorage.setItem("entry", JSON.stringify(entry));
        allEntries.unshift(entry);
        localStorage.setItem("recently", JSON.stringify(allEntries));
        // i++;
      }
    })
  }

  productWrapper?.addEventListener('click', handler);
}



