'use strict'

/**
 * Функция выводит в консоль значение суммы в монетах номиналом: 10, 5, 2, 1 рублей
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

getChange();


/**
 * Рекурсивная функция, выводит в консоль значение суммы в монетах номиналом: 10, 5, 2, 1 рублей
 * @param {number} num принимает значение, переданное при вызове функции
 */
function getChangeTwo(num) {
    if (num >= 10) coin = 10;
    else if (num >= 5) coin = 5;
    else if (num >= 2) coin = 2;
    else if (num >= 1) coin = 1;
    console.log(coin);
    if (num - coin !== 0) {
        getChangeTwo(num - coin)
    }
};

getChangeTwo();