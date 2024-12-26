const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
    first.classList.toggle('rotate-left');
    second.classList.toggle('hide');
    third.classList.toggle('rotate-right');
})