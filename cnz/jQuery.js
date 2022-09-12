/* <!-- Работа с селекторами --> */

//$('h1') так выбираем все тэги h1 в документе

//$('#h1') так выбираем элемент по id

//$('.header') так выбираем элемент по классу

//$('.header, #h3') так выбираем несколько селекторов

//console.log($('input[name='input1']')) так выбираем по аттрибуту

//console.log($('input[name^='input']')) так выбираем все или один элемент
//по аттрибуту имя которого начинается на input

//console.log($('input[name$='1']')) так выбираем все или один элемент
//по аттрибуту имя которого заканчивается на 1

//console.log($('input[class~='class1']')) если у нас есть разные
//элементы с одинаковыми классами, то так мы можем выбрать определенный


/* <!-- Добавление аттрибутов --> */

//$('div').attr('style', 'width: 150px; height: 150px; background-color: red;')
//$('input').prop('disabled', true);
/* $('input').each((index, item) => {
    $(item).val(index)
}) */


/* <!-- Работа с событиями --> */
/* $('#btn1').on('click', (event) => {
    console.log(event)
})

//пространство имен, можно использовать когда необходимо вызвать не все события
//элемента, а какое-то одно
$('#btn1').on('click.event1', (event) => {
    console.log('event 1')
});

$('#btn1').on('click.event2', (event) => {
    console.log('event 2')
});

//в данном случае будет срабатывать обработчик события по кнопке
//btn1 click.event1
$('#btn2').on('click', () => {
    $('#btn1').trigger('click.event1')
}) */


/* <!-- Анимация --> */
// скрыть
/* $('#btn1').on('click', (event) => {
    $('p').hide()
});

// показать
$('#btn2').on('click', (event) => {
    $('p').show()
}); */

// растворение
/* $('#btn1').on('click', (event) => {
    $('p').fadeOut('slow')
});

//проявление
$('#btn2').on('click', (event) => {
    $('p').fadeIn('slow')
}); */

//скольжение - опустить
/* $('#btn1').on('click', (event) => {
    $('p').slideUp('slow')
});

//скольжение - поднять
$('#btn2').on('click', (event) => {
    $('p').slideDown('slow')
}); */


//animate
/* $('#btn1').on('click', (event) => {
    $('p').animate(
        {
            //свойства и значения css
            marginTop: '100px',
        }, 1500, 'linear', () => {
            //animate - callback
            console.log('mission complete')
        }
    )
}); */
