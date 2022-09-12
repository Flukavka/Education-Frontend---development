'use strict'

let smallQuadratEl = document.querySelectorAll('.smallQuadrat');
let bigQuadratEl = document.querySelector('.bigQuadrat');

for (let quadrat of smallQuadratEl) {
    quadrat.onmousedown = function () {
        quadrat.style.position = 'absolute';
        quadrat.style.zIndex = 100;

        document.addEventListener('mousemove', moveElement);

        function moveElement(event) {
            let x = event.clientX - 50;
            let y = event.clientY - 50;
            quadrat.style.top = y + 'px';
            quadrat.style.left = x + 'px';
        };

        quadrat.onmouseup = function () {
            document.removeEventListener('mousemove', moveElement);

            let bigQuadratTop = bigQuadratEl.getBoundingClientRect().top;
            let bigQuadratBottom = bigQuadratEl.getBoundingClientRect().bottom;
            let bigQuadratLeft = bigQuadratEl.getBoundingClientRect().left;
            let bigQuadratRight = bigQuadratEl.getBoundingClientRect().right;

            let smallQuadratTop = quadrat.getBoundingClientRect().top;
            let smallQuadratBottom = quadrat.getBoundingClientRect().bottom;
            let smallQuadratLeft = quadrat.getBoundingClientRect().left;
            let smallQuadratRight = quadrat.getBoundingClientRect().right;

            if (bigQuadratTop < smallQuadratTop &&
                bigQuadratBottom > smallQuadratBottom &&
                bigQuadratLeft < smallQuadratLeft &&
                bigQuadratRight > smallQuadratRight) {
                let computedStyle = getComputedStyle(quadrat);

                bigQuadratEl.style.backgroundColor = computedStyle.backgroundColor;
                quadrat.hidden = true;
            }
        }
    }
};