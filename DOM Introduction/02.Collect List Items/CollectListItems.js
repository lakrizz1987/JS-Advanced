function extractText() {
    let ulElement = document.querySelectorAll('ul li');
    let textElement = document.getElementById('result');
    let output = ''
    ulElementArr = Array.from(ulElement).forEach(element => {
        output += `${element.textContent}\n`
    })
    textElement.textContent = output;

}