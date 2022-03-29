const vmenu = document.querySelector('#horizontalMenu');
const items = document.querySelectorAll('.vmenu__item');

const getItemWidth = (item) => {
    let resultWidth = 524;

    return resultWidth;
}

const openMenuItem = (item) => {
    const itemContent = item.nextElementSiblings;
    const itemText = item.firstElementChild;
    const itemParent = item.parentElement;

    const width = getItemWidth(item);
    itemContent.style = `${width}px`;
    itemText.style = `${width}px`;
}

vmenu.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const isActive = target.classList.contains('.vmenu__button--active');

    if (target.classList.contains('.vmenu__button') && isActive) {
        
    }
    if (target.classList.contains('.vmenu__button') && !isActive) {
        openMenuItem(target);

    }

    console.log('click')
})