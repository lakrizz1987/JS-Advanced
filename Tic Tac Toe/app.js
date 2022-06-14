let a1Element = document.getElementById('a1');
let a2Element = document.getElementById('a2');
let a3Element = document.getElementById('a3');
let b1Element = document.getElementById('b1');
let b2Element = document.getElementById('b2');
let b3Element = document.getElementById('b3');
let c1Element = document.getElementById('c1');
let c2Element = document.getElementById('c2');
let c3Element = document.getElementById('c3');

let winBoxElement = document.getElementById('scoreBox');
winBoxElement.style.display = 'none';

let isOn = false;
let startScreen = document.getElementById('chooseBox');
let btnChoose = document.querySelectorAll('article .btnCh');

btnChoose.forEach(x => x.addEventListener('click', (e) => {
    mark = e.target.textContent;
    startScreen.style.display = 'none';
}))

let count = 0;
let isDraw = false;
let mark = '';
let volumeOn = true;

let audio = document.getElementById('audio');
let btn = document.querySelector('button.playBtn');
let muteBtn = document.querySelector('button.muteBtn');

muteBtn.addEventListener('click',(e)=>{
    if(volumeOn){
        audio.muted = true;
        muteBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
        volumeOn = false;
    }else{
        audio.muted = false;
        muteBtn.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
        volumeOn = true;
    }
})

btn.addEventListener('click', () => {
    if (!isOn) {
        audio.play()
        btn.textContent = 'Reset Game';
        startScreen.style.display = 'flex';
        isOn = true;
        a1Element.addEventListener('click', win);
        a2Element.addEventListener('click', win);
        a3Element.addEventListener('click', win);
        b1Element.addEventListener('click', win);
        b2Element.addEventListener('click', win);
        b3Element.addEventListener('click', win);
        c1Element.addEventListener('click', win);
        c2Element.addEventListener('click', win);
        c3Element.addEventListener('click', win);
        isOn = true;

    } else {
        btn.textContent = 'Play Game';
        document.querySelectorAll('.small-boxes').forEach(x => {
            x.textContent = '';
            winBoxElement.style.display = 'none';
        })
        isOn = false;
    }
})

function checkWin(e) {
    if (isDraw) {
        winBoxElement.textContent = `DRAW !!!`;
        winBoxElement.style.display = 'flex';
        document.querySelectorAll('.small-boxes').forEach(x => {
            x.removeEventListener('click', win);
        })
    } else {
        mark == 'X' ? winBoxElement.textContent = `X Wins !!!` : winBoxElement.textContent = `O Wins !!!`;
        winBoxElement.style.display = 'flex';
        document.querySelectorAll('.small-boxes').forEach(x => {
            x.removeEventListener('click', win);
        })
    }
}

function win(e) {
    if (e.target.textContent === '') {
        e.target.textContent = mark;
        count++;
        if ((a1Element.textContent == a2Element.textContent) && (a1Element.textContent == a3Element.textContent)) {
            if (a1Element.textContent != '' && a2Element.textContent != '' && a3Element.textContent != '') {
                checkWin()
            }
        } else if ((b1Element.textContent == b2Element.textContent) && (b1Element.textContent == b3Element.textContent)) {
            if (b1Element.textContent != '' && b2Element.textContent != '' && b3Element.textContent != '') {
                checkWin()
            }
        } else if ((c1Element.textContent == c2Element.textContent) && (c1Element.textContent == c3Element.textContent)) {
            if (c1Element.textContent != '' && c2Element.textContent != '' && c3Element.textContent != '') {
                checkWin()
            }
        } else if ((a1Element.textContent == b1Element.textContent) && (c1Element.textContent == a1Element.textContent)) {
            if (a1Element.textContent != '' && b1Element.textContent != '' && c1Element.textContent != '') {
                checkWin()
            }
        } else if ((a2Element.textContent == b2Element.textContent) && (c2Element.textContent == a2Element.textContent)) {
            if (a2Element.textContent != '' && b2Element.textContent != '' && c2Element.textContent != '') {
                checkWin()
            }
        } else if ((a3Element.textContent == b3Element.textContent) && (c3Element.textContent == a3Element.textContent)) {
            if (a3Element.textContent != '' && b3Element.textContent != '' && c3Element.textContent != '') {
                checkWin()
            }
        } else if ((a1Element.textContent == b2Element.textContent) && (a1Element.textContent == c3Element.textContent)) {
            if (a1Element.textContent != '' && b2Element.textContent != '' && c3Element.textContent != '') {
                checkWin()
            }
        } else if ((a3Element.textContent == b2Element.textContent) && (a3Element.textContent == c1Element.textContent)) {
            if (a3Element.textContent != '' && b2Element.textContent != '' && c1Element.textContent != '') {
                checkWin()
            }
        } else {
            if (count == 9) {
                isDraw = true;
                checkWin()
            }

        }

        if (mark == 'X') {
            mark = 'O';
        } else {
            mark = 'X';
        }
    }

}
