/*function focused() {
    let divElement = document.querySelector('body div');
    divElement.addEventListener('focus', (e) => {
        e.target.parentNode.className = "focused";
    }, true);
    divElement.addEventListener('blur', (e) => {
        e.target.parentNode.classList.remove("focused");
    }, true);

}
*/

function focused() {
    let inputElements = document.querySelectorAll('div input');
    Array.from(inputElements).forEach(input =>{
        input.addEventListener('focus', (e) => {
            e.target.parentNode.className = "focused";
        });
        input.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove("focused");
        });
    })
}