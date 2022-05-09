function solve() {
  //TODO
  let textElement = document.querySelector('#exercise textarea');
  let text = textElement.value;
  let divOutputElement = document.getElementById('output');
  let textArray = text.split('.').filter(x => x != '');

  while(textArray.length != 0){
    let tempText = textArray.splice(0,3);
    let p = document.createElement('p');
    p.textContent = tempText.join('.') + '.';
    divOutputElement.appendChild(p);
  }

}