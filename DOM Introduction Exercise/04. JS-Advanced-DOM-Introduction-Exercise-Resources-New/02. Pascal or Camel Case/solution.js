function solve() {
  //TODO...
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  let textToLower = '';
  let output = [];

  for (let char of text) {
    textToLower += char.toLowerCase();
  }

  textToLower = textToLower.split(' ');

  if (convention == 'Camel Case') {

    for (let i = 0; i < textToLower.length; i++) {
      let word = textToLower[i];
      if (i == 0) {
        output.push(word);
      } else {
        let temp = '';
        for (let j = 0; j < word.length; j++) {
          if (j == 0) {
            temp += word[j].toUpperCase();
          } else {
            temp += word[j];
          }
        }
        output.push(temp);
      }
    }

  } else if (convention == 'Pascal Case') {

    for (const word of textToLower) {
      let temp = '';
      for (let y = 0; y < word.length; y++) {
        if (y == 0) {
          temp += word[y].toUpperCase();
        } else {
          temp += word[y];
        }
      }
      output.push(temp);
    }
    
  } else {
    output.push('Error!')
  }

  resultElement.textContent = output.join('');
}