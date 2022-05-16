function solution(num) {
    let number = num;

    return function add(a) {
        return number + a;
    }

}



let add5 = solution(7);

console.log(add5(2));

console.log(add5(3));