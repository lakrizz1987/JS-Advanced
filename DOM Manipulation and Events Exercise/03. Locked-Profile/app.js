function lockedProfile() {

    let buttonsElements = document.querySelectorAll('button');
    Array.from(buttonsElements).forEach(button => {
        button.addEventListener('click', showText)
    });

    function showText(e) {
        let checkElement = e.target.parentNode.querySelector('input[value="lock"]');

        if (!checkElement.checked) {
            let hiddenElement = e.target.parentNode.querySelector('div');
            if (e.target.textContent == 'Show more') {
                hiddenElement.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                hiddenElement.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}