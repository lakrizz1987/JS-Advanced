function rectangle(width, height, color) {
    let colorUpper = color.split('').reduce((a, x, i) => {
        if (i == 0) {
            x = x.toUpperCase();
        }
        return a + x;
    }, '');

    let obj = {
        width,
        height,
        color: colorUpper,
        calcArea: () => obj.width * obj.height
    }

    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
