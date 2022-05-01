function solve(arr, pie1, pie2) {
    let startIndex = arr.indexOf(pie1);
    let endIndex = arr.indexOf(pie2);

    let result = arr.slice(startIndex,endIndex+1);
    
    return result;
}

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'

)