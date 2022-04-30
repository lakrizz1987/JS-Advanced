function area(input) {
    let type = typeof(input);

    if(type == 'number'){
        let circleArea = Math.pow(input, 2) * Math.PI;
        console.log(circleArea.toFixed(2));
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
    
}

area('')