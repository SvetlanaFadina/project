const vmenu = document.querySelector('#horizontalMenu');
const items = document.querySelectorAll('.vmenu__item');

const getItemWidth = (item) => {
    let resultWidth = 524;

    const windowWidth = window.innerWidth;
    const itemWidth = item.offsetWidth;

    const isTablet = window.matchMedia("(max-width: 768px)").matches;
    const isMobile = window.matchMedia("(max-width: 480px)").matches;

    if (isTablet) {
        resultWidth = windowWidth - itemWidth * items.length;
    }
    if (isMobile) {
        resultWidth = windowWidth - itemWidth; 
    }

    return resultWidth;
}

const setItemWidth = (item, width) => {
    const itemContent = item.nextElementSibling;
    const itemText = item.firstElementChild;
    itemContent.style.width = `${width}px`;
    itemText.style.width = `${width}px`;
}

const closeItem = (item) => {
    const itemParent = item.parentElement;
    itemParent.classList.remove('vmenu__item--active');
    item.classList.remove('vmenu__button--active');
    setItemWidth(item, 0);
    
}


const openMenuItem = (item) => {
    const itemParent = item.parentElement;
    itemParent.classList.add('vmenu__item--active');
    item.classList.add('vmenu__button--active');
    const width = getItemWidth(item);
    setItemWidth(item, width);
    
}

vmenu.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const isActive = target.classList.contains('vmenu__button--active');
    const activeElement = document.querySelector('.vmenu__button--active');

    if (target.classList.contains('vmenu__button') && isActive) {
        if (activeElement) {
            closeItem(activeElement);
        }
        console.log('close');
    }
    if (target.classList.contains('vmenu__button') && !isActive) {
        if (activeElement) {
            closeItem(activeElement);
        }
        openMenuItem(target);
        console.log('open');
    }
});


window.addEventListener('resize', () => {
    const activeButton = document.querySelector('.vmenu__button--active');
    if (activeButton) {
        closeItem(activeButton);
    }
    
})