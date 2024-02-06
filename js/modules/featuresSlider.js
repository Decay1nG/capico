function featuresSlider() {

    const swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        centeredSlides: true,
        direction: 'horizontal',
        slidesPerView: 1.4,
        spaceBetween: 200,
        loop: true,
        speed: 1000,
        // autoplay: {
        //     delay: 3000,
        // },
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            576: {
                slidesPerView: 1.5,
                spaceBetween: 200,

            },

            768: {
                slidesPerView: 1.5,
                spaceBetween: 200,

            },

            1024: {
                effect: 'fade',
                crossFade: false,
                slidesPerView: 1,
                loop: false,
                autoplay: false,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                pagination: {
                    el: '.specifications__categories--list',
                    clickable: true,
                },
            }
        },


    });

    function specificationSliderCustom() {
        const bullet = document.querySelectorAll('.swiper-pagination-bullet');
        const specificationCards = document.querySelectorAll('.specifications__card');
        let specificationCardsValues = [];

        specificationCards.forEach(card => {
            let name = card.querySelector('.specifications__card--title').textContent;

            specificationCardsValues.push(name);
        });

        console.log(specificationCardsValues);

        bullet.forEach((item, i) => {
            item.innerHTML = `${specificationCardsValues[i]}`;
        });
    }

    if (window.innerWidth >= 1024) {
        specificationSliderCustom();
    }

}

module.exports = featuresSlider;