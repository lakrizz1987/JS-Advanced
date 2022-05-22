function validate() {
    // TODO
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g

    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', (e) => {
        if (pattern.test(e.target.value) == false) {
            e.target.classList.add("error")
        }else{
            e.target.classList.remove("error")
        }
    })
}