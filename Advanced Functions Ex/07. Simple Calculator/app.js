function calculator() {
    // TODO:
    let num1Element ;
    let num2Element;
    let resultElement;

    function init(selector1,selector2,selector3){
        num1Element = document.querySelector(selector1);
        num2Element = document.querySelector(selector2);
        resultElement = document.querySelector(selector3);
    }

    function add(){
        resultElement.value = Number(num1Element.value) + Number(num2Element.value);
    }

    function subtract(){
        resultElement.value = Number(num1Element.value) - Number(num2Element.value);
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




