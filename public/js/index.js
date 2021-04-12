var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.slider-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider-arrow-wrapper_right',
        prevEl: '.slider-arrow-wrapper_left',
    },
})