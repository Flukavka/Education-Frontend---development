'use strict'

let birdImg = document.getElementById('bird');
let eggImg = document.getElementById('egg');

let step = 0;
let flag = true;

function animation() {
    if (window.innerWidth - 440 > step && flag) {
        step += 1;
        birdImg.style.transform = 'scaleX(-1)';
    } else {
        birdImg.style.transform = 'scaleX(1)';
        step -= 1;
        flag = step === 0 ? true : false;
    }
    if (Math.round(window.innerWidth / 2) == step + 440) {
        console.log('center');
        setInterval(animationEgg, 1);
    }
    birdImg.style.left = step + 'px';
};
setInterval(animation, 5);

let stepEgg = 440

function animationEgg() {
    eggImg.classList.remove('eggClass')
    eggImg.style.left = (window.innerWidth / 2) - 220 + 'px';
    if (window.innerHeight - 100 > stepEgg && flag) {
        stepEgg += 1;
        eggImg.style.transform = 'translateY(1)';
    }
    eggImg.style.top = stepEgg + 'px';
};
