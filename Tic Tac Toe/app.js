let a1Element = document.getElementById('a1');
let a2Element = document.getElementById('a2');
let a3Element = document.getElementById('a3');
let b1Element = document.getElementById('b1');
let b2Element = document.getElementById('b2');
let b3Element = document.getElementById('b3');
let c1Element = document.getElementById('c1');
let c2Element = document.getElementById('c2');
let c3Element = document.getElementById('c3');

let winBoxElement = document.getElementById('xScore');
winBoxElement.style.display = 'none';
let isOn = false;
let startScreen = document.getElementById('chooseBox');
let btnChoose = document.querySelectorAll('article .btnCh');

btnChoose.forEach(x => x.addEventListener('click', (e) => {
    mark = e.target.textContent;
    startScreen.style.display = 'none';
}))



let mark = '';



function win(e) {
    if (e.target.textContent === '') {
        e.target.textContent = mark;
        if (a1Element.textContent == a2Element.textContent && a1Element.textContent == a3Element.textContent) {

            mark == 'X' ? winBoxElement.textContent = `X Wins !!!` : winBoxElement.textContent = `O Wins !!!`;
            winBoxElement.style.display = 'flex';
            document.querySelectorAll('.small-boxes').forEach(x => {
                x.removeEventListener('click', win)
            })
        }
    
        if (mark == 'X') {
            mark = 'O';
        } else {
            mark = 'X';
        }
    }

}


let audio = document.getElementById('audio');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    
    if (!isOn) {
        audio.play()
        btn.textContent = 'Reset Game';
        startScreen.style.display = 'flex';
        isOn = true;
        a1Element.addEventListener('click', win)
        a2Element.addEventListener('click', win)
        a3Element.addEventListener('click', win)
        b1Element.addEventListener('click', win)
        b2Element.addEventListener('click', win)
        b3Element.addEventListener('click', win)
        c1Element.addEventListener('click', win)
        c2Element.addEventListener('click', win)
        c3Element.addEventListener('click', win)

    } else {
        btn.textContent = 'Play Game';
        document.querySelectorAll('.small-boxes').forEach(x => {
            x.textContent = '';
            winBoxElement.style.display = 'none'
        })
        isOn = false;
    }

})
