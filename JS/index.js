// Enlever le soulignage de la page actuelle dans le header quand on passe en hover sur une autre page
const header__nav__ul__element__1 = document.querySelector('.header--nav--ul--element--1 a');
const header__nav__ul__element__2 = document.querySelector('.header--nav--ul--element--2 a');
const header__nav__ul__element__3 = document.querySelector('.header--nav--ul--element--3 a');
const header__nav__ul__actual = document.querySelector('.header--nav--actual');

header__nav__ul__element__1.addEventListener('mouseover', function() {
    header__nav__ul__actual.classList.add('remove_after');
});

header__nav__ul__element__2.addEventListener('mouseover', function() {
    header__nav__ul__actual.classList.add('remove_after');
});

header__nav__ul__element__3.addEventListener('mouseover', function() {
    header__nav__ul__actual.classList.add('remove_after');
});

header__nav__ul__element__1.addEventListener('mouseout', function() {
    header__nav__ul__actual.classList.remove('remove_after');
});

header__nav__ul__element__2.addEventListener('mouseout', function() {
    header__nav__ul__actual.classList.remove('remove_after');
});

header__nav__ul__element__3.addEventListener('mouseout', function() {
    header__nav__ul__actual.classList.remove('remove_after');
});
// Enlever le soulignage de la page actuelle dans le header quand on passe en hover sur une autre page

// On vérifie le formulaire avant d'appeller le PHP

function formVerif(event) {
    event.preventDefault();
    var name = document.getElementById("form_name").value;
    var email = document.getElementById("form_email").value;
    var message = document.getElementById("form_message").value;
    if (name === "") {
        alert("Veuillez saisir un nom.");
        return;
    }
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email) == false) {
        alert("Veuillez saisir une adresse e-mail valide!")
        return;
    }

    if (message === "") {
        alert("Veuillez saisir un message.");
        return;
    }

    event.target.submit();
}

// On vérifie le formulaire avant d'appeller le PHP