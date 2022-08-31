'use strict'

let moneyEl = document.getElementById('money');
let displayEl = document.querySelector('.display');
let coin = null;
const progressBarEl = document.querySelector('.progressBar');
let bills = document.querySelectorAll("img[src$='rub.jpg']");
let billAccEl = document.querySelector('.billAcc');


/**
 * Функция удаляет линию прогресса в прогресс-баре
 */
function removeProgressLine() {
    const progressBarLineEl = document.getElementById('progressLine');
    progressBarLineEl.remove();
    /*     turnOnBtn(); */
};


/**
 * Функция определяет, хватает ли у пользователя денег на продукт,
 * отдает продукт, запускает прогресс-бар, высчитывает остаток денег после
 * покупки, вызывает функцию удаления линии прогресса
 * @param {number} price стоимость продукта
 * @param {string} name наименование продукта
 */
function getCoffee(price, name) {
    /* disabledBtn(); */
    if (moneyEl.value >= price) {
        progressBarEl.insertAdjacentHTML('afterbegin', '<div id="progressLine" class="progressBarLine" style="max-width: 100%;"></div>');
        moneyEl.value = moneyEl.value - price;
        setTimeout((displayEl.innerHTML = 'Ваш ' + name + ' готов!'), 4500);
        setTimeout(() => removeProgressLine(), 3500);
    } else {
        displayEl.innerHTML = 'На ' + name + ' недостаточно денег!';
    }
};


/**
 * Функция выводит в консоль значение суммы в монетах номиналом: 10, 5, 2, 1
 * рублей
 * @param {number} num принимает значение, переданное при вызове функции
 */
function getChange(num) {
    for (coin = 10; num >= 10;) {
        num -= coin;
        console.log(coin);
    }
    for (coin = 5; num >= 5;) {
        num -= coin;
        console.log(coin)
    }
    for (coin = 2; num >= 2;) {
        num -= coin;
        console.log(coin)
    }
    for (coin = 1; num >= 1;) {
        console.log(num);
        num -= 1
    }
};
/* getChange(); */



/**
 * Функция отключает встроенный drag and drop для изображений
 * @returns boolean false
 */
/* rubFiftyEl.ondragstart = function () {
    return false;
}; */



/**
 * Функция осуществляет drag and drop для изображения 50 руб. купюры
 */
/* rubFiftyEl.onmousedown = function () {
    document.addEventListener('mousemove', moveElement);
    document.onmouseup = function () {
        document.removeEventListener('mousemove', moveElement);
    };

    function moveElement(event) {
        let x = event.clientX - 148;
        let y = event.clientY - 62;
        rubFiftyEl.style.top = y + 'px';
        rubFiftyEl.style.left = x + 'px';
    };
}; */



for (let bill of bills) {
    bill.onmousedown = function () {
        bill.style.position = 'absolute';
        bill.style.zIndex = 100;
        bill.style.transform = 'rotate(90deg)';

        document.addEventListener('mousemove', moveElement);

        bill.onmouseup = function () {
            bill.style.zIndex = 1; //не факт, что это логично
            document.removeEventListener('mousemove', moveElement);

            //координаты купюр
            let billTop = bill.getBoundingClientRect().top;
            let billLeft = bill.getBoundingClientRect().left;
            let billRight = bill.getBoundingClientRect().right;

            //координаты купюроприемника
            let billAccTop = billAccEl.getBoundingClientRect().top;
            let billAccLeft = billAccEl.getBoundingClientRect().left;
            let billAccRight = billAccEl.getBoundingClientRect().right;
            let billAccBottom = billAccEl.getBoundingClientRect().bottom -
                (billAccEl.getBoundingClientRect().height / 3) * 2;

            if (billTop > billAccTop &&
                billLeft > billAccLeft &&
                billRight < billAccRight &&
                billTop < billAccBottom) {
                bill.hidden = true;
                moneyEl.value = +moneyEl.value + +bill.dataset.billValue; //NaN????
            }
        };

        function moveElement(event) {
            let x = event.clientX - 148;
            let y = event.clientY - 62;
            bill.style.top = y + 'px';
            bill.style.left = x + 'px';
        }
    };

    bill.ondragstart = function () {
        return false;
    }
};








/* for (i = 0; i < bills.length; i++) {
    bills[i].onmousedown = function () {
        console.log('click');
    }
} */    //dont work

/* bills.forEach(function (num) {
    num.onmousedown = function () {
        console.log('click');
    }
}); */




//затык
// идея повесить обработчик событий на все итембоксы сразу, после чего пройтись
//по массиву с кнопками и отключить их, после чего включить!!!!
/* let arrItemBox = [document.querySelectorAll('.main-block-content-items-item-btn')];
console.log(arrItemBox);

function disabledBtn() {
    let itemBox = document.querySelector('.main-block-content-items-item');
    itemBox.addEventListener('click', event => {
        if (event.target.classList.contains('main-block-content-items-item-btn')) {
            arrItemBox.forEach(function (item, i, arrItemBox) {
                item.disable = true;
            })
        }
    })
} */

/* const itemBox = document.querySelector('.main-block-content-items-item');

function disabledBtn() {
    itemBox.addEventListener('click', e => {
        if (e.target.classList.contains('main-block-content-items-item-btn')) {
            e.target.disabled = true;
        }
    })
};

function turnOnBtn() {
    itemBox.addEventListener('click', e => {
        if (e.target.classList.contains('main-block-content-items-item-btn')) {
            e.target.disabled = false;
        }
    })
}; */