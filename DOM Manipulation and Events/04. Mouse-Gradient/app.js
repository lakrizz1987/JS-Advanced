function attachGradientEvents() {
    let divGradientElement = document.getElementById('gradient');
    let resultDivElement = document.getElementById('result');

    let mouseInHandler = function (e) {
        resultDivElement.textContent = `${Math.floor(e.offsetX / 299 * 100)}%`
    }

    let mouseOutHandler = function (e) {
        resultDivElement.textContent = '';
    }

    divGradientElement.addEventListener('mousemove', mouseInHandler);
    divGradientElement.addEventListener('mouseout', mouseOutHandler);

    // divGradientElement.addEventListener('mousemove', (e)  => {

    //     resultDivElement.textContent = `${Math.floor(e.offsetX / 300 * 100)}%`
    // });
}