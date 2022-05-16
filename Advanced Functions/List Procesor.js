function solve(input) {
    let lines = input;
    let arr = [];

    let obj = {
        add(text) {
            return arr.push(text);
        },
        remove(text) {
            return arr = arr.filter(x => x != text);
        },
        print(){
            console.log(arr.join(','));
        }
    }

    lines.forEach(line => {
        let [key,value] = line.split(' ');
        obj[key](value);
    });
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])