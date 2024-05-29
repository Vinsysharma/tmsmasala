document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    var s6 = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3
            }
          },
        slideToClickedSlide: true,
         centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    // Get all swiper slides
    const swiperSlides = document.querySelectorAll('.swiper-slide');

    // Listen for slide change event
    s6.on('slideChange', function() {
        // Hide all links
        swiperSlides.forEach(function(slide) {
            const linkElem = slide.querySelector('a');
            if (linkElem) {
                linkElem.style.display = 'none';
            }
        });

        // Show link of current slide
        const currentSlide = swiperSlides[s6.realIndex];
        const linkElemCurrentSlide = currentSlide.querySelector('a');
        if (linkElemCurrentSlide) {
            linkElemCurrentSlide.style.display = 'block';
        }
    });

    // Prevent default action for links inside swiper slides
    document.querySelectorAll('.swiper-slide a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
        link.addEventListener('touchstart', function(e) {
            e.preventDefault();
        });
    });
});
