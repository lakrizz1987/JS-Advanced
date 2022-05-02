function solve(arr){
    let i = 1;
    arr.sort((a,b)=>a.localeCompare(b)).forEach(element => {
        console.log(`${i}.${element}`)
        i++
    });
}

solve(["John", "Bob", "Christina", "Ema"])