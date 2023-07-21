// Enlever le soulignage de la page actuelle dans le header quand on passe en hover sur une autre page
const header__nav__ul__element__1 = document.querySelector('.header--nav--ul--element--1 a');
const header__nav__ul__element__2 = document.querySelector('.header--nav--ul--element--2 a');
const header__nav__ul__element__3 = document.querySelector('.header--nav--ul--element--3 a');
const header__nav__ul__actual = document.querySelector('.header--nav--actual');

if (header__nav__ul__actual) {
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
}
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

// On mets le inside_burger en display: block quand le burger est cliqué
const burger = document.querySelector('.header--burger');
const inside_burger = document.querySelector('.header--inside_burger');
const burger_bar_1 = document.querySelector('.header--burger div:nth-of-type(1)');
const burger_bar_2 = document.querySelector('.header--burger div:nth-of-type(3)');

burger.addEventListener('click', function() {
    if (inside_burger.classList.contains('header--inside_burger--active')) {
        inside_burger.classList.remove('header--inside_burger--active');
        burger_bar_1.classList.remove('pos-absolute')
        burger_bar_2.classList.remove('pos-absolute')
        burger.classList.remove('header--cross');
    } else {
        inside_burger.classList.add('header--inside_burger--active');
        burger.classList.add('header--cross');
        setTimeout(function() {
            burger_bar_1.classList.add('pos-absolute');
            burger_bar_2.classList.add('pos-absolute');
        }, 200);
    }
});
// On mets le inside_burger en display: block quand le burger est cliqué