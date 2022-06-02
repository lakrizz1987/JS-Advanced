window.addEventListener('load', solve);

function solve() {
    //TODO
    let typeOfProductElement = document.getElementById('type-product');
    let descrElement = document.getElementById('description');
    let clientNameElement = document.getElementById('client-name');
    let clientPhoneElement = document.getElementById('client-phone');
    let submitButtonElement = document.querySelector('#right form button');

    let recivedOrderElement = document.getElementById('received-orders');
    let completedOrdersElement = document.getElementById('completed-orders');
    let clearBtn = document.querySelector('button.clear-btn');

    submitButtonElement.addEventListener('click', register);
    clearBtn.addEventListener('click', clear);

    function clear(e) {
        let parent = e.target.parentNode;
        let divElements = parent.querySelectorAll('div.container');
        Array.from(divElements).map(x => x.remove());
    }

    function register(e) {
        e.preventDefault();
        if (descrElement.value != '' && clientNameElement.value != '' && clientPhoneElement != '') {
            let divEl = create('div');
            divEl.classList.add('container');
            let h2El = create('h2', `Product type for repair: ${typeOfProductElement.value}`, divEl);
            let h3El = create('h3', `Client information: ${clientNameElement.value}, ${clientPhoneElement.value}`, divEl);
            let h4El = create('h4', `Description of the problem: ${descrElement.value}`, divEl);
            let btnStartRepair = create('button', `Start repair`, divEl);
            btnStartRepair.classList.add('start-btn');
            let btnFinishRepair = create('button', `Finish repair`, divEl);
            btnFinishRepair.classList.add('finish-btn');
            btnFinishRepair.disabled = true;

            recivedOrderElement.appendChild(divEl);
            descrElement.value = '';
            clientNameElement.value = '';
            clientPhoneElement.value = '';

            btnStartRepair.addEventListener('click', () => {
                btnFinishRepair.disabled = false;
                btnStartRepair.disabled = true;
            });

            btnFinishRepair.addEventListener('click', (e) => {
                let divElFinish = create('div');
                divElFinish.classList.add('container');
                let h2ElFinish = create('h2', h2El.textContent, divElFinish);
                let h3ElFinish = create('h3', h3El.textContent, divElFinish);
                let h4ElFinish = create('h4', h4El.textContent, divElFinish);
                completedOrdersElement.appendChild(divElFinish);
                e.target.parentNode.remove();
            })
        }
    }

    function create(type, content, parent) {
        let el = document.createElement(type);
        el.textContent = content;

        if (parent) {
            parent.appendChild(el);
        }

        return el;
    }
}