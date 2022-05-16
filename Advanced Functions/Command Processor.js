function solution() {
    let text = '';

    let obj = {
        append(str) {
            return text += str;
        },

        print() {
            console.log(text);
        },

        removeStart(n) {
            return text = text.substring(n);

        },

        removeEnd(n) {
            return text = text.substring(0, text.length - n);
        }
    }

    return obj;

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
