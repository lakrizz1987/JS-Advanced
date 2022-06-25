window.addEventListener("load", solve);
//55 min
function solve() {
  //TODO ....
  let sum = 0;

  let makeElement = document.getElementById('make');
  let modelElement = document.getElementById('model');
  let yearElement = document.getElementById('year');
  let fuelElement = document.getElementById('fuel');
  let originalPriceElement = document.getElementById('original-cost');
  let sellingPriceElement = document.getElementById('selling-price');

  let submitBtnElement = document.getElementById('publish');

  let tbodyElement = document.getElementById('table-body');

  let ulSellCarsElement = document.getElementById('cars-list');
  let profitElement = document.getElementById('profit');

  function create(type, content, parent) {
    let element = document.createElement(type);

    if (content) {
      element.textContent = content;
    }

    if (parent) {
      parent.appendChild(element)
    }

    return element;
  }

  function clearInputs() {
     makeElement.value = ''; 
     modelElement.value = ''; 
     yearElement.value = ''; 
     fuelElement.value = ''; 
     originalPriceElement.value = ''; 
     sellingPriceElement.value = ''; 
  }

  submitBtnElement.addEventListener('click', (e) => {
    e.preventDefault();
   
    if (makeElement.value != '' && modelElement.value != '' && yearElement.value != '' && fuelElement.value != '' && originalPriceElement.value != '' && sellingPriceElement.value != '') {
      if (Number(originalPriceElement.value) <= Number(sellingPriceElement.value)) {
        let trBodyElement = create('tr', '', tbodyElement);
        trBodyElement.className = 'row';

        let tdMakeElement = create('td', makeElement.value, trBodyElement);
        let tdModelElement = create('td', modelElement.value, trBodyElement);
        let tdYearElement = create('td', yearElement.value, trBodyElement);
        let tdFuelElement = create('td', fuelElement.value, trBodyElement);
        let tdOriginalPriceElement = create('td', originalPriceElement.value, trBodyElement);
        let tdSellingPriceElement = create('td', sellingPriceElement.value, trBodyElement);

        let tdButtonsElement = create('td', '', trBodyElement);

        let editBtnElement = create('button', 'Edit', tdButtonsElement);
        editBtnElement.className = 'action-btn edit';
        let sellBtnElement = create('button', 'Sell', tdButtonsElement);
        sellBtnElement.className = 'action-btn sell';

        clearInputs();

        editBtnElement.addEventListener('click',(e)=>{
          let parent = e.target.parentNode.parentNode;
          makeElement.value = parent.querySelector('td:nth-of-type(1)').textContent;
          modelElement.value = parent.querySelector('td:nth-of-type(2)').textContent;
          yearElement.value = parent.querySelector('td:nth-of-type(3)').textContent;
          fuelElement.value = parent.querySelector('td:nth-of-type(4)').textContent;
          originalPriceElement.value = parent.querySelector('td:nth-of-type(5)').textContent;
          sellingPriceElement.value = parent.querySelector('td:nth-of-type(6)').textContent;

          parent.remove();
        })

        sellBtnElement.addEventListener('click',(e)=>{
          let parent = e.target.parentNode.parentNode;

          let make = parent.querySelector('td:nth-of-type(1)').textContent;
          let model = parent.querySelector('td:nth-of-type(2)').textContent
          let year = parent.querySelector('td:nth-of-type(3)').textContent;
          let originalPrice = Number(parent.querySelector('td:nth-of-type(5)').textContent);
          let sellPrice = Number(parent.querySelector('td:nth-of-type(6)').textContent);

          let profitSum = sellPrice - originalPrice;

          let liElemet = create('li','',ulSellCarsElement);
          liElemet.className = 'each-list';

          let spanMakeModel = create('span',`${make} ${model}`,liElemet);
          let spanYear = create('span',year,liElemet);
          let spanProfit = create('span',profitSum,liElemet);

          parent.remove();

          sum += profitSum;
          profitElement.textContent = sum.toFixed(2);
        })
      }
    }
  })
}
