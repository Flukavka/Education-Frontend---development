'use strict'

/* Напишите программу, которая принимает с клавиатуры два числа, образующих
        ответ на вопрос «который час ?» (первое – часы, второе минуты, например, 15 и 42)
        и выводит на экран следующие значения(каждое – в отдельной строке): сколько
        секунд прошло с полуночи да «данного момента» и сколько минут прошло за это же
        время, а также сколько минут осталось до полуночи. */
/* let userHours = +prompt('Который сейчас час(24-часовой формат)?');
let userMinuts = +prompt('Сколько сейчас минут?');
let minutsSinceMidnight = (userHours * 60) + userMinuts;
let secondsSinceMidnight = minutsSinceMidnight * 60;
const dayInMinuts = 24 * 60;
let minutsToMidnight = dayInMinuts - minutsSinceMidnight;
alert('С полуночи прошло: ' + secondsSinceMidnight + ' секунд\nС полуночи прошло: ' + minutsSinceMidnight + ' минут\nДо полуночи осталось: ' + minutsToMidnight + ' минут'); */


/* Напишите код, который сначала заносит в переменную строковое значение
Привет, а затем принимает с клавиатуры ваше имя. Программа должна вывести
на экран в одной строке сообщение, составленное из строкового значения
Привет,  знака "запятая" и вашего имени. */
/* let variable = "Привет";
const hello = variable;
variable = prompt('Как тебя зовут?');
alert(hello + ', ' + variable) */

/* Выведите столбец чисел от 1 до 50 в консоль. */
/* for (let i = 1; i < 51; ++i) {
    console.log(i)
}; */


/* Даны переменные a и b (вводит пользователь). Проверьте, что a делится
без остатка на b. Если это так - выведите 'Делится' и результат деления,
иначе выведите 'Делится с остатком' и остаток от деления. */
/* let a = +((prompt('Введите первое число')).replace(',', '.'));
if (isNaN(a) == true || a == false) {
    alert('Введено неверное значение или вы ввели 0,\nлибо вы ничего не ввели.');
} else {
    let b = +((prompt('Введите второе число')).replace(',', '.'));
    if (isNaN(b) == true || b == false) {
        alert('Введено неверное значение или вы ввели 0,\nлибо вы ничего не ввели.');
    } else if (a % b == 0) {
        alert('Делится: ' + a % b);
    } else {
        alert('Делится с остатком: ' + (String(a % b)).replace('.', ','));
    }
}; */


/* Дан массив с числами. Запишите в новый массив только те числа, которые больше
нуля и меньше 10. Выведите новый массив в консоль. */
/* const arr1 = [15, 0, -1, 4, 13, 10, 8, 5];
let arr2 = [];
for (let item of arr1) {
    if (item > 0 && item < 10) {
        arr2.push(item);
    }
};
console.log(arr2); */


/* Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
Если есть - выведите 'да', а если нет - выведите 'нет'. */

/* const arr1 = [15, 0, -1, 9, 13, 13, 10, 15, 5];
for (let item of arr1) {
    if (item == arr1.indexOf()) {
        console.log('yes')
    }
}; */
//доделать





