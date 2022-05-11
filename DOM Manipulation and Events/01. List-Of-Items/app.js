function addItem() {
    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;
    
    ulElement.appendChild(newLiElement);
    inputElement.value = '';
}