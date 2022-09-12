'use strict'

async function sendForm(form) {
    let response = await fetch('php/data.php', {
        method: 'POST',
        body: new FormData(form)
    });
    if (response.ok) {
        let result = await response.text();
        alert('Спасибо, ваше сообщение отправлено мне на почту!')
    }
}