'use strict'

function editName(element) {
    let value = element.previousElementSibling.innerText;
    element.previousElementSibling.innerHTML =
        `<input type="text" value="${value}" />`;

}