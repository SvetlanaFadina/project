const commentAvatars = document.querySelector('#commentAvatars');

const findReview = (id) => {
    const activeReview = document.querySelector('.reviews__display-inner.active');
    activeReview.classList.remove('.active');
    let currentItem = document.querySelector(`.reviews__display-inner[data-item="${id}"]`);
    currentItem.classList.add('.active');
};

commentAvatars.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;


    if (target.classList.contains('interactive-avatar__img')) {
        const activeItemList = document.querySelector('.interactive-avatar--active');
        if (activeItemList) {
            activeItemList.classList.remove('interactive-avatar--active');
        }
        const button = target.parentElement;
        const listElement = button.parentElement;
        const id = button.getAttribute('data-open');
        listElement.classList.add('interactive-avatar--active');
        findReview(id);
    }
});