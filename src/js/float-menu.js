const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector('#fullscreenMenu');

hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
    pageScroll.toggleBlock();
});

menu.addEventListener('click', function(e) {
    e.preventDefault();
    hamburger.classList.remove('hamburger--active');
    menu.classList.remove('menu--active');
    pageScroll.unblock();
});

