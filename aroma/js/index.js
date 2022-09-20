
let pathname = location.pathname.split("/"[2]);

if (pathname == "profile") {
    $('#v-pills-profile').tab('show');
} else if (pathname == "messages") {
    $('#v-pills-messages').tab('show');
} else if (pathname == "settings") {
    $('#v-pills-settings').tab('show');

} else {
    location.href = location.protocol + "//" + location.host;
}

document.getElementById(pathname + "Tab").classList.add("active");
let navLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        let page = navLinks[i].getAttribute('aria-controls').split("v-pills-")[1];
        history.pushState('', '', page);
    })
}