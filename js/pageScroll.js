const sections = $(".section");
const display = $(".maincontent");
let inscroll = false;

const switchActiveClassSideMenu = (menuItemIndex) => {
    $(".fixed-menu__item")
        .eq(menuItemIndex)
        .addClass("active")
        .siblings()
        .removeClass("active");
};

const performTransition = (sectoinEq) => {
    if (pageScroll.isBlocked()) {
        return;
    }
    if (inscroll) return;

    inscroll = true;

    const position = `${sectoinEq * -100}%`;

    sections.eq(sectoinEq).addClass("active").siblings().removeClass("active");

    display.css({
        transform: `translateY(${position})`,
    });

    setTimeout(() => {
        switchActiveClassSideMenu(sectoinEq);
        inscroll = false; 
     }, 1000 + 300);
}



