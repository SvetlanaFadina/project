const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector('#fullscreenMenu');

hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
})
