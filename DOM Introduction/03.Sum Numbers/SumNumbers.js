function calc() {
    let num1Element = document.getElementById('num1');
    let num2Element = document.getElementById('num2');

    let sum = Number(num1Element.value) + Number(num2Element.value);

    let sumElement = document.getElementById('sum');
    sumElement.value = sum;
}
