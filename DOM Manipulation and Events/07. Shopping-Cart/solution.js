function solve() {
   let buttonsElements = document.getElementsByClassName('add-product');
   let buttonChekoutElement = document.querySelector('.checkout');
   let textAreaElement = document.querySelector('textarea');

   let totalSum = 0;
   let allProducts = new Set;
   

   Array.from(buttonsElements).forEach(button => {
      button.addEventListener('click', (e) => {
         //let divProductDetailsElement = Array.from(mainDivElement.children).find(x=>x.className == 'product-details');
         //let titile = Array.from(divProductDetailsElement.children).find(x => x.className == 'product-title').textContent;

         let curentProductMainDivElement = e.target.parentNode.parentNode;
         let product = curentProductMainDivElement.querySelector('div.product-title').textContent;
         let price = Number(curentProductMainDivElement.querySelector('div.product-line-price').textContent);
         totalSum += price;
         allProducts.add(product);

         textAreaElement.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
      });
   });

   buttonChekoutElement.addEventListener('click', (e) => {

      textAreaElement.textContent += `You bought ${Array.from(allProducts).join(', ')} for ${totalSum.toFixed(2)}.`

      Array.from(buttonsElements).forEach(button => {
         button.disabled = true;
      });
      
      buttonChekoutElement.disabled = true;
   });
}