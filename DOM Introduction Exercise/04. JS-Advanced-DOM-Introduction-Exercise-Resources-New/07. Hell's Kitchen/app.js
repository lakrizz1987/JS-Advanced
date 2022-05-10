function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   //`Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`

   //`Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`
   function onClick() {
      //   TODO:
      let inputElement = document.querySelector('#inputs textarea');
      let input = JSON.parse(inputElement.value);
      //['PizzaHut - Peter 500, George 300, Mark 800', 'TheLake - Bob 1300, Joe 780, Jane 660']
      let obj = {};
      let averageSalary = 0;
      let bestSalary = 0;
      let bestNameRestourant = '';

      for (let line of input) {
         let arr = line.split(' - ');
         let curentName = arr.shift();
         let arrWorkers_Salary = arr[0].split(', ');
         let tempObj = {};

         arrWorkers_Salary.forEach(element => {
            let tempArrWorkerSalary = element.split(' ');

            let [name, salary1] = tempArrWorkerSalary;

            salary1 = Number(salary1);

            tempObj[name] = salary1;

            if(!obj.hasOwnProperty(curentName)){
               obj[curentName] = tempObj;
            }else{
               obj[curentName][name] = salary1;
            };
         });
      };

      for (let key of Object.keys(obj)) {
         let objWorkers = obj[key];
         let sortedSalaries = Object.values(objWorkers).sort((a, b) => b - a);

         let allSalaries = sortedSalaries.reduce((a, b) => a + b);
         let curentAverageSalary = allSalaries / sortedSalaries.length;

         if (curentAverageSalary > averageSalary) {
            averageSalary = curentAverageSalary;
            bestNameRestourant = key;
            bestSalary = sortedSalaries[0];
         };
      };

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestNameRestourant} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      let sortedWorkersWithSalaiesArr = Object.entries(obj[bestNameRestourant]).sort((a, b) => b[1] - a[1]);
      let print = [];
      sortedWorkersWithSalaiesArr.forEach(arr => {
         let text = print.push(`Name: ${arr[0]} With Salary: ${arr[1]}`);
      });

      document.querySelector('#workers p').textContent = print.join(' ');
   }
}