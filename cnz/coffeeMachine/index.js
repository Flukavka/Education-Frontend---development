'use strict'

let moneyEl = document.getElementById('money');
let displayInfoEl = document.querySelector('.displayInfo');
let coin = null;
let bills = document.querySelectorAll("img[src$='rub.jpg']");
let billAccEl = document.querySelector('.billAcc');
let changeBoxEl = document.querySelector('.changeBox');
let progressBar = document.querySelector('.progress-bar');
let balanceEl = document.querySelector('.balance')


/**
 * Функция определяет, хватает ли у пользователя денег на продукт,
 * отдает продукт, запускает прогресс-бар, высчитывает остаток денег после
 * покупки, вызывает функцию удаления линии прогресса
 * @param {number} price стоимость продукта
 * @param {string} name наименование продукта
 */
function getCoffee(price, name) {
    if (moneyEl.value >= price) {
        moneyEl.value = moneyEl.value - price;
        displayInfoEl.innerHTML = `Баланс: ${moneyEl.value} руб`;
        startProgressBar(name)
    } else {
        displayInfoEl.innerHTML = 'На ' + name + ' недостаточно денег!';
    }
};

function startProgressBar(coffeeName) {
    let i = 0;
    displayInfoEl.innerHTML = `<i class="bi bi-hourglass"></i> ${coffeeName} готовится...`;
    function progress() {
        progressBar.parentElement.hidden = false;
        i++;
        progressBar.style.width = i + '%';

        if (i == 100) {
            progressBar.parentElement.hidden = true;
            displayInfoEl.innerHTML = `<i class="bi bi-hourglass-bottom"></i> Ваш ${coffeeName} готов! <br> Баланс: ${moneyEl.value} руб`;
            clearInterval(timerId)
        } else if (i == 45) {
            displayInfoEl.innerHTML = `<i class="bi bi-hourglass-split"></i> ${coffeeName} почти готов`;
        }
    };
    let timerId = setInterval(progress, 100);
};

/**
 * Функция выводит в консоль значение суммы в монетах номиналом: 10, 5, 2, 1
 * рублей
 * @param {number} num принимает значение, переданное при вызове функции
 */
function getChange(num) {
    while (num != 0) {
        let top = getRandom(50, changeBoxEl.getBoundingClientRect().height - 75);
        let left = getRandom(50, changeBoxEl.getBoundingClientRect().width - 75);
        if (num >= 10) {
            coin = 10;
            num -= coin;
            changeBoxEl.innerHTML += `<img src="image/10rub.png" style="top: ${top}px;
            left: ${left}px;" />`;
        } else if (num >= 5) {
            coin = 5;
            num -= coin;
            changeBoxEl.innerHTML += `<img src="image/5rub.png" style="top: ${top}px;
            left: ${left}px;" />`;
        } else if (num >= 2) {
            coin = 2;
            num -= coin;
            changeBoxEl.innerHTML += `<img src="image/2rub.png" style="top: ${top}px;
            left: ${left}px;" />`;
        } else {
            coin = 1;
            num -= 1;
            changeBoxEl.innerHTML += `<img src="image/1rub.png" style="top: ${top}px;
            left: ${left}px;" />`;
        }
    };
    moneyEl.value = 0;
    displayInfoEl.innerHTML = `Баланс: ${moneyEl.value} руб`; //dont work
};


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
                bill.classList.add('hideBill')
                setTimeout(function () {
                    bill.hidden = true;
                }, 245);

                moneyEl.value = +moneyEl.value + +bill.dataset.billValue;
                displayInfoEl.innerHTML = `Баланс: ${moneyEl.value} руб`;
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


/**
 * Функция генерирует рандомное число в переданном диапазоне
 * @param {number} min минимальная граница диапазона
 * @param {number} max максимальная граница диапазона
 * @returns возвращает рандомное число
 */
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}



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