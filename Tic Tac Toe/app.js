let a1Element = document.getElementById('a1');
let a2Element = document.getElementById('a2');
let a3Element = document.getElementById('a3');
let b1Element = document.getElementById('b1');
let b2Element = document.getElementById('b2');
let b3Element = document.getElementById('b3');
let c1Element = document.getElementById('c1');
let c2Element = document.getElementById('c2');
let c3Element = document.getElementById('c3');

let xScoreElement = document.getElementById('xScore');
let yScoreElement = document.getElementById('yScore');
let winBoxElement = document.getElementById('wins');

let score = {
    X: 0,
    Y: 0
}

let mark = 'X';

function win(e) {
    if (e.target.textContent == '') {
        e.target.textContent = mark;
    }

    if (a1Element.textContent == a2Element.textContent && a1Element.textContent == a3Element.textContent) {
        score[mark]++

        winBoxElement.textContent = `${mark} WINS !!!`;
        winBoxElement.hidden = false;

    }

    if (mark == 'X') {
        mark = 'O';
    } else {
        mark = 'X';
    }


}
a1Element.addEventListener('click', win)
a2Element.addEventListener('click', win)
a3Element.addEventListener('click', win)
b1Element.addEventListener('click', win)
b2Element.addEventListener('click', win)
b3Element.addEventListener('click', win)











let audio = document.getElementById('audio');
let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    audio.play()
    btn.textContent = 'Reset Game';


})
