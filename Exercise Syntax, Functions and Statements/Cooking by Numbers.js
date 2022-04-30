function solve(number, param1, param2, param3, param4, param5) {
    function chop(num) {
        return num / 2;
    }

    function dice(num) {
        return Math.sqrt(num);
    }

    function spice(num) {
        return num + 1;
    }

    function bake(num) {
        return num * 3;
    }

    function fillet(num) {
        let result = num - (num * 0.2);
        return result;
    }

    number = Number(number);
    let array = [param1,param2,param3,param4,param5]

    for (let i = 1; i <= 5; i++) {
        let command = array.shift();
        
        if(command == 'chop'){
            number = chop(number);
        }else if (command == 'dice'){
            number = dice(number);
        }else if (command == 'spice'){
            number = spice(number);
        }else if (command == 'bake'){
            number = bake(number);
        }else if (command == 'fillet'){
            number = fillet(number);
        }

        console.log(number);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')