function solve(year,month,date){
    let dateInput = new Date(`${year}-${month}-${date}`);
    dateInput.setDate(dateInput.getDate()-1);
    console.log(`${dateInput.getFullYear()}-${dateInput.getMonth()+1}-${dateInput.getDate()}`)
}

solve(2016, 10, 1)