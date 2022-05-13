function addItem() {
    let menuElement = document.getElementById('menu');

    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.textContent = textInputElement.value;
    optionElement.value = valueInputElement.value;

    if(optionElement.textContent != ''){
        menuElement.appendChild(optionElement);
    }
    
    textInputElement.value = '';
    valueInputElement.value = '';

}