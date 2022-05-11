function addItem() {
    //TODO...
    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    
    let aElement = document.createElement('a');
    aElement.setAttribute('href','#');
    aElement.textContent = '[Delete]';

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);

    inputElement.value = '';

    aElement.addEventListener('click',(e)=>{
        e.currentTarget.parentNode.remove();
    });
}