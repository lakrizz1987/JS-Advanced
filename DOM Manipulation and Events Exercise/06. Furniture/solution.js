
function solve() {
  let [inputTextAreaElement, outputTextAreaElement] = document.querySelectorAll('textarea');
  let [generateBtnElement, buyBtnElement] = document.querySelectorAll('button');
  let tbodyElement = document.querySelector('tbody')
  generateBtnElement.addEventListener('click', generate);

  function generate(e) {
    JSON.parse(inputTextAreaElement.value).forEach(element => {
      let trElement = document.createElement('tr');

      let tdImgElement = document.createElement('td');
      let imgElement = document.createElement('img');
      imgElement.src = element.img;
      tdImgElement.appendChild(imgElement);
      trElement.appendChild(tdImgElement);

      let tdTitleElement = document.createElement('td');
      let pTextElement = document.createElement('p');
      pTextElement.textContent = element.name;
      tdTitleElement.appendChild(pTextElement);
      trElement.appendChild(tdTitleElement);

      let tdPriceElement = document.createElement('td');
      let pPriceElement = document.createElement('p');
      pPriceElement.textContent = element.price;
      tdPriceElement.appendChild(pPriceElement);
      trElement.appendChild(tdPriceElement);

      let tdFactorElement = document.createElement('td');
      let pNumElement = document.createElement('p');
      pNumElement.textContent = element.decFactor;
      tdFactorElement.appendChild(pNumElement);
      trElement.appendChild(tdFactorElement);

      let tdChekElement = document.createElement('td');
      let checkBoxElement = document.createElement('input');
      checkBoxElement.type = 'checkbox';
      tdChekElement.appendChild(checkBoxElement);
      trElement.appendChild(tdChekElement);

      tbodyElement.appendChild(trElement);
    });
  }

  buyBtnElement.addEventListener('click', printTotal);

  function printTotal(e) {
    let totalSum = 0;
    let allProducts = [];
    let factorSum = 0;

    let trElements = document.querySelectorAll('tbody tr');
    Array.from(trElements).forEach(product => {
      let checkbox = product.querySelector('input');
      if (checkbox.checked) {
        let productTitleElement = product.querySelector('td:nth-of-type(2) p');
        allProducts.push(productTitleElement.textContent);

        let priceElement = product.querySelector('td:nth-of-type(3) p');
        totalSum += Number(priceElement.textContent);

        let factorElement = product.querySelector('td:nth-of-type(4) p');
        factorSum += Number(factorElement.textContent);
      }

    })

    outputTextAreaElement.value += `Bought furniture: ${allProducts.join(', ')}\n`;
    outputTextAreaElement.value += `Total price: ${totalSum.toFixed(2)}\n`;
    outputTextAreaElement.value += `Average decoration factor: ${factorSum / allProducts.length}`;
  }

}