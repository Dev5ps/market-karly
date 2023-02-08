import { getNode, css, attr, tiger } from "../../lib/index.js";

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
      
      if(id === data.id){
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
      }
    })
  }

  productWrapper?.addEventListener('click', handler);
}



