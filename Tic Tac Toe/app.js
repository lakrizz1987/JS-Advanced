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

let score = 0;









let audio = document.getElementById('audio');
let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    audio.play()
    btn.textContent = 'Reset Game';
   

})
