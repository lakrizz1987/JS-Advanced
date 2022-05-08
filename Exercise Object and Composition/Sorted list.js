function createSortedList() {

    const list = [];

    let obj = {

        add(element) {
            if(typeof(element) === 'number'){
                list.push(element);
                list.sort((a, b) => a - b);
            }
        },
        remove(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
            }
        },
        get(index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            }

        },
        get size() {
            return list.length
        }

    }
    
    return obj;
}

let list = createSortedList();
list.add(5);


