function slove(fruit,grams,priceKg){
    let kg = grams / 1000;

    console.log(`I need $${(kg*priceKg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

slove('apple', 1563, 2.35)