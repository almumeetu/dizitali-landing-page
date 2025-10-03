var swiper = new Swiper(".testimonial-ladies", {
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 2,
        }
    }
});