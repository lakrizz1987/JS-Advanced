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
    let totalSum = 0;
    addBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (model.value != '' && year.value != '' && description.value != '' && price.value != '') {
            if (year.value > 0 && price.value > 0) {
                let tr = create('tr');
                tr.classList.add('info');
                let tdProduct = create('td', model.value, tr);
                let tdPrice = create('td', Number(price.value).toFixed(2), tr);
                let tdBtns = create('td');
                let btnInfo = create('button', 'More Info', tdBtns);
                btnInfo.classList.add('moreBtn');
                let btnBuy = create('button', 'Buy it', tdBtns);
                btnBuy.classList.add('buyBtn');
                tr.appendChild(tdBtns);
                tbody.appendChild(tr);

                let trHide = create('tr');
                trHide.classList.add('hide');
                let tdYear = create('td', `Year: ${year.value}`, trHide);
                let tdDescr = create('td', `Description: ${description.value}`, trHide);

                tbody.appendChild(trHide);

                clear();

                btnInfo.addEventListener('click', () => {
                    if (btnInfo.textContent == 'More Info') {
                        btnInfo.textContent = 'Less Info';
                        trHide.style.display = 'contents';
                        tdDescr.colSpan = 3;
                    } else {
                        btnInfo.textContent = 'More Info';
                        trHide.style.display = 'none';
                    }

                });

                btnBuy.addEventListener('click', (e) => {
                    let parent = e.target.parentNode.parentNode;
                    let price = parent.querySelector('tr.info td:nth-of-type(2)');
                    totalSum += Number(price.textContent);
                    totalPrice.textContent = totalSum.toFixed(2);
                    parent.remove();

                })
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
