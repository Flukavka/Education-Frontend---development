'use strict'

async function checkUser(form) {
    let response = await fetch('php/autorization.php', {
        method: 'POST',
        body: new FormData(form)
    });
    let result = await response.text();
    if (result == 'ok') {
        alert('Авторизация прошла успешно!');
    } else {
        alert('Такой пользователь не зарегистрирован!');
    }
}