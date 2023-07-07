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