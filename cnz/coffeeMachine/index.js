'use strict'

let moneyEl = document.getElementById('money');
let coin = null;
let bills = document.querySelectorAll("img[src$='rub.jpg']");
let billAccEl = document.querySelector('.billAcc');
let changeBoxEl = document.querySelector('.changeBox');
let progressBar = document.querySelector('.progress-bar');
let balanceEl = document.querySelector('.balance');
let getChangeBtn = document.querySelector('.getChangeButton');
getChangeBtn.disabled = true;


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
        balanceEl.innerHTML = `Баланс: ${moneyEl.value} руб`; //
        startProgressBar(name)
    } else {
        balanceEl.innerHTML = 'На ' + name + ' недостаточно денег!'; //
    }
};

function startProgressBar(coffeeName) {
    let i = 0;
    balanceEl.innerHTML = `<i class="bi bi-hourglass"></i> ${coffeeName} готовится...`; //
    function progress() {
        progressBar.parentElement.hidden = false;
        i++;
        progressBar.style.width = i + '%';

        if (i == 100) {
            progressBar.parentElement.hidden = true;
            balanceEl.innerHTML = `<i class="bi bi-hourglass-bottom"></i> Ваш ${coffeeName} готов! <br> Баланс: ${moneyEl.value} руб`; //
            clearInterval(timerId)
        } else if (i == 45) {
            balanceEl.innerHTML = `<i class="bi bi-hourglass-split"></i> ${coffeeName} почти готов`; //
        }
    };
    let timerId = setInterval(progress, 100);
};

/**
 * Функция выводит в консоль значение суммы в монетах номиналом: 10, 5, 2, 1
 * рублей
 * @param {number} num принимает значение, переданное при вызове функции (money.value)
 */
function getChange(num) {
    if (num) {
        while (num != 0) {
            let top = getRandom(50, changeBoxEl.getBoundingClientRect().height - 75);
            let left = getRandom(50, changeBoxEl.getBoundingClientRect().width - 75);
            if (num >= 10) {
                coin = 10;
                num -= coin;
                changeBoxEl.innerHTML += `<img onclick="getCoin(this.item)" src="image/10rub.png"
            style="top: ${top}px; left: ${left}px;" id="coinImg" class="coinImage" />`;
            } else if (num >= 5) {
                coin = 5;
                num -= coin;
                changeBoxEl.innerHTML += `<img onclick="getCoin(this.item)" src="image/5rub.png"
            style="top: ${top}px; left: ${left}px;" id="coinImg" class="coinImage" />`;
            } else if (num >= 2) {
                coin = 2;
                num -= coin;
                changeBoxEl.innerHTML += `<img onclick="getCoin(this.item)" src="image/2rub.png"
            style="top: ${top}px; left: ${left}px;" id="coinImg" class="coinImage" />`;
            } else {
                coin = 1;
                num -= 1;
                changeBoxEl.innerHTML += `<img onclick="getCoin(this.item)" src="image/1rub.png"
            style="top: ${top}px; left: ${left}px;" id="coinImg" class="coinImage" />`;
            }
        };
        moneyEl.value = 0;
        balanceEl.innerHTML = `Баланс: ${moneyEl.value} руб`;
        getChangeBtn.disabled = true;
    }
};


for (let bill of bills) {
    bill.onmousedown = function () {
        bill.style.position = 'absolute';
        bill.style.zIndex = 100;
        bill.style.transform = 'rotate(90deg)';

        document.addEventListener('mousemove', moveElement);

        bill.onmouseup = function () {
            bill.style.zIndex = 1; //возможно стоит удалить
            document.removeEventListener('mousemove', moveElement);

            let billTop = bill.getBoundingClientRect().top;
            let billLeft = bill.getBoundingClientRect().left;
            let billRight = bill.getBoundingClientRect().right;

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
                balanceEl.innerHTML = `Баланс: ${moneyEl.value} руб`; //
                getChangeBtn.disabled = false;
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
};


/**
 * Функция убирает с экрана монетку, на которую нажал пользователь
 */
function getCoin(item) {
    changeBoxEl.addEventListener('click', function (event) {
        if (event.target.classList.contains('coinImage')) {
            item = event.target;
            item.remove();
        }
    })
};