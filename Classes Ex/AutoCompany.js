function register(arr){

   let result = arr.reduce((acc,line)=>{
        let [car,model,qty] = line.split(' | ');
        qty = Number(qty);

        if(!acc.hasOwnProperty(car)){
            acc[car] = {[model]:qty}
        }else{
            if(!acc[car].hasOwnProperty(model)){
                acc[car][model]= qty;
            }else{
                acc[car][model]+= qty;
            }
        }
        return acc;
    },{})

    Object.keys(result).forEach(car =>{
        console.log(car);
        Object.keys(result[car]).forEach(model=>{
            console.log(`###${model} -> ${result[car][model]}`)
        })
    })

}
register(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10'])