function validate() {
    let inputElement = document.getElementById('email')
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/
    inputElement.addEventListener('change',(e)=>{
        if(inputElement.value.match(regex) == null){
            inputElement.className = 'error'
        }else{
            inputElement.classList.remove("error");
        }
    });
}