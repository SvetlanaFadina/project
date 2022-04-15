const slider = $('.slider__list').bxSlider({
	pager: false,
	controls: false,
});


$('.slider__arrow--prev').on('click', e => {
	e.preventDefault();
	slider.goToPrevSlide();
})
$('.slider__arrow--next').on('click', e => {
	e.preventDefault();
	slider.goToNextSlide();
})