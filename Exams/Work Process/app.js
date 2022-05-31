function solve() {
    //TODO
    function addWorker(e) {
        e.preventDefault();

        if (firstNameElement.value != '' && lastNameElement.value != '' && emailElement.value != '' && bithDateElement.value != ''
            && positionElement.value != '' && salaryElement.value != '') {

            let trContentElement = document.createElement('tr');

            let tdFNameElement = document.createElement('td');
            tdFNameElement.textContent = firstNameElement.value;
            trContentElement.appendChild(tdFNameElement);

            let tdLNameElement = document.createElement('td');
            tdLNameElement.textContent = lastNameElement.value;
            trContentElement.appendChild(tdLNameElement);

            let tdEmailElement = document.createElement('td');
            tdEmailElement.textContent = emailElement.value;
            trContentElement.appendChild(tdEmailElement);

            let tdBirthDateElement = document.createElement('td');
            tdBirthDateElement.textContent = bithDateElement.value;
            trContentElement.appendChild(tdBirthDateElement);

            let tdPositionElement = document.createElement('td');
            tdPositionElement.textContent = positionElement.value;
            trContentElement.appendChild(tdPositionElement);

            let tdSalaryElement = document.createElement('td');
            tdSalaryElement.textContent = salaryElement.value;
            trContentElement.appendChild(tdSalaryElement);

            let tdButtonsElement = document.createElement('td');

            let buttonFired = document.createElement('button');
            buttonFired.classList.add('fired');
            buttonFired.textContent = 'Fired';
            tdButtonsElement.appendChild(buttonFired);

            let buttonEdit = document.createElement('button');
            buttonEdit.classList.add('edit');
            buttonEdit.textContent = 'Edit';
            tdButtonsElement.appendChild(buttonEdit);

            trContentElement.appendChild(tdButtonsElement);
            tBodyElement.appendChild(trContentElement);

            totalSum += Number(tdSalaryElement.textContent)
            sumElement.textContent = `${totalSum.toFixed(2)}`

            firstNameElement.value = '';
            lastNameElement.value = '';
            emailElement.value = '';
            bithDateElement.value = '';
            positionElement.value = '';
            salaryElement.value = '';

            buttonEdit.addEventListener('click', (e) => {
                firstNameElement.value = tdFNameElement.textContent;
                lastNameElement.value = tdLNameElement.textContent;
                emailElement.value = tdEmailElement.textContent;
                bithDateElement.value = tdBirthDateElement.textContent;
                positionElement.value = tdPositionElement.textContent;
                salaryElement.value = tdSalaryElement.textContent;

                totalSum -= Number(salaryElement.value);
                sumElement.textContent = `${totalSum.toFixed(2)}`;

                e.target.parentNode.parentNode.remove();
            })

            buttonFired.addEventListener('click',(e)=>{
                totalSum -= Number(tdSalaryElement.textContent);
                sumElement.textContent = `${totalSum.toFixed(2)}`;
                e.target.parentNode.parentNode.remove();
            })
        }


    }
    
    let totalSum = 0;

    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let bithDateElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');

    let buttonAddWorkerElement = document.getElementById('add-worker');
    let sumElement = document.getElementById('sum');

    let tBodyElement = document.getElementById('tbody');

    buttonAddWorkerElement.addEventListener('click', addWorker);



}
solve()