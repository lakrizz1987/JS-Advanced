function generateReport() {
    //TODO
    let output = document.querySelector('#output');
    let boxes = document.querySelectorAll('thead tr th input');
    let info = document.querySelectorAll('tbody tr');
    let result = [];

    for (let i = 0; i < info.length; i++) {
        let obj = {};
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j].checked) {
                obj[boxes[j].name] = info[i].children[j].textContent;
            }
        }
        result.push(obj);
    }
    output.textContent = JSON.stringify(result);
}