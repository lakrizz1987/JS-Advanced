function validate() {
    // TODO

    let buttonElement = document.getElementById('submit');
    let chekBoxElement = document.getElementById('company');

    const regExUserName = /^[a-zA-Z0-9]{3,20}$/g
    const regExEmail = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/g
    const regExPassword = /^[a-zA-Z0-9_]{5,15}$/g

    let isValid = true;

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault()
        let userNameInputElement = document.getElementById('username');
        let userEmailInputElement = document.getElementById('email');
        let userPasswordInputElement = document.getElementById('password');
        let userConfirmPasswordInputElement = document.getElementById('confirm-password');
        let companyNumElement = document.getElementById('companyNumber');

        if (regExUserName.test(userNameInputElement.value) == false) {
            userNameInputElement.style.borderColor = 'red';
            isValid = false;
        } else {
            userNameInputElement.style.borderColor = 'none';
        }

        if (regExEmail.test(userEmailInputElement.value) == false) {
            userEmailInputElement.style.borderColor = 'red';
            isValid = false;
        } else {
            userEmailInputElement.style.borderColor = 'none';
        }

        if (regExPassword.test(userPasswordInputElement.value) == false) {
            userPasswordInputElement.style.borderColor = 'red';
            isValid = false;
        } else {
            userPasswordInputElement.style.borderColor = 'none';
        }

        if (userConfirmPasswordInputElement.value != userPasswordInputElement.value) {
            userConfirmPasswordInputElement.style.borderColor = 'red';
            userPasswordInputElement.style.borderColor = 'red';
            isValid = false;
        } else {
            userConfirmPasswordInputElement.style.borderColor = 'none';
        }

        if(chekBoxElement.checked){
            if (Number(companyNumElement.value) < 1000 || Number(companyNumElement.value) > 9999) {
                companyNumElement.style.borderColor = 'red';
                isValid = false;
            }else{
                companyNumElement.style.borderColor = 'none';
            }
        }
       

        if(isValid){
            document.getElementById('valid').style.display = 'block';
        }else{
            document.getElementById('valid').style.display = 'none';
        }

        e.stopPropagation();
    },true)

    

    chekBoxElement.addEventListener('change', (e) => {

        if (e.target.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none'
        }

    })

}
