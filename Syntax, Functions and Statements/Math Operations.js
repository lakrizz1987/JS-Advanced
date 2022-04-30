function solve(num1,num2,operator){
    let sum =0;

    if(operator == '+'){
        sum = num1+num2;
    }else if(operator == '-'){
        sum = num1-num2;
    }else if(operator == '/'){
        sum = num1/num2;
    }else if (operator == '*'){
        sum = num1*num2;
    }else if (operator == '%'){
        sum = num1%num2;
    }else if (operator == '**'){
        sum = num1**num2;
    }

    console.log(sum)
}

solve(5, 6, '+')