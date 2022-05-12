function create(words) {
   let array = words;
   let mainContainerElement = document.getElementById('content');

   while (array.length != 0) {
      let text = array.shift();

      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = text;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);
      mainContainerElement.appendChild(divElement);

      divElement.addEventListener('click', (e) => e.target.children[0].style.display = 'block');
   }
}