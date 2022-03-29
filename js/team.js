const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();
   
    

    container.addClass("active");
    contentBlock.height(reqHeight);
    button.hasClass('.triangle__down');

}

const closeEveryItem = container => {
    const items = container.find('.team__content');
    const itemContainer = container.find(".team__item");
    const button = container.find('.triangle');
    

    itemContainer.removeClass("active");
    items.height(0);
    button.hasClass('.triangle__up');
}


$('.team__title').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const elemContainer = $this.closest(".team__item");
    const button = container.find('.triangle');
   
    
    

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
        
    } else {
        closeEveryItem(container);
        openItem($this);
    }

   
});