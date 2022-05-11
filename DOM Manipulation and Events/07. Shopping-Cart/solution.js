function solve() {
   let buttonsElements = document.getElementsByClassName('add-product');
   Array.from(buttonsElements).forEach(button => {
      button.addEventListener('click',(e)=>{
         let mainDivElement = e.target.parentNode.parentNode;
         let divProductDetailsElement = Array.from(mainDivElement.children).find(x=>x.className == 'product-details');
         let titile = Array.from(divProductDetailsElement.children).find(x => x.className == 'product-title').textContent;
         console.log(titile)
      })
   })
}