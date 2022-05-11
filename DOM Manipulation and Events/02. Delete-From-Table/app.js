function deleteByEmail() {
    let resultElement = document.getElementById('result')
    let tdElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let inputElement = document.querySelector('input[name="email"]');
    let isFound = false;

    Array.from(tdElements).forEach(td => {
        if(td.textContent == inputElement.value){
            td.parentNode.remove();
            isFound = true;
        }
    });

    inputElement.value = '';

    isFound ? resultElement.textContent = 'Deleted.' : resultElement.textContent = 'Not found.';
}