'use strict'

async function sendForm(form) {
    let response = await fetch('php/reg_obr.php', {
        method: 'POST',
        body: new FormData(form)
    });
    let result = await response.text();
    if (result == 'ok') {
        alert('Регистрация прошла успешно!');
    } else {
        let info = document.getElementById('info');
        info.innerHTML = 'Пользователь с таким email уже существует!';
    }
}