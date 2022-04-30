function solve(month,year) {
    let days = new Date(year,month,0)
    console.log(days.getDate());
}

solve(2, 2021)