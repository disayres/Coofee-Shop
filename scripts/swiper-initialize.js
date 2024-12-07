const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 14,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next--custom",
        prevEl: ".swiper-button-prev--custom",
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 14,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});