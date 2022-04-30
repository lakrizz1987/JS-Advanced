function solve(input) {
   let obj = {
       Monday:1,
       Tuesday:2,
       Wednesday:3,
       Thursday:4,
       Friday:5,
       Saturday:6,
       Sunday:7
   }

   if(!obj[input]){
       console.log('error')
   }else {
       console.log(obj[input])
   }
}

solve('Frida')

