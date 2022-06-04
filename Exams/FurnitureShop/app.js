window.addEventListener('load', solve);

function solve() {
    //TO DO
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');

    let addBtn = document.getElementById('add');
    let tbody = document.getElementById('furniture-list');
    let totalPrice = document.querySelector('td.total-price');

    addBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        if(model.value != '' && year.value != '' && description.value != '' && price.value != ''){
            if( year.value > 0  && price.value > 0){
                let tr = create('tr');
                tr.classList.add('info');
                let tdProduct = create('td',model.value,tr);
                let tdPrice = create('td',price.value,tr);
                let tdBtns = create('td');
                let btnInfo = create('button','More Info',tdBtns);
                btnInfo.classList.add('moreBtn');
                let btnBuy = create('button','Buy it',tdBtns);
                btnBuy.classList.add('buyBtn');
                tr.appendChild(tdBtns);
                tbody.appendChild(tr);

                let trHide = create('tr');
                trHide.classList.add('hide');
                let tdYear = create('td',`Year: ${year.value}`,trHide);
                let tdDescr = create('td',`Description: ${description.value}`,trHide);
                tdDescr.colspan = 3;
                tbody.appendChild(trHide);
            }
        }
    })

    function create(type, content, parent) {
        let element = document.createElement(type);

        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }

    function clear() {
        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }
}
