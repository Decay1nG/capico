function propertiesSlider() {
    function propertiesSlider(slideScrollNumber) {
        const scrollField = document.querySelector('.properties__slider'),
            slides = document.querySelectorAll('.properties__card--item'),
            propertiesButtons = document.querySelectorAll('.properties__button'),
            propertiesScrollBar = document.querySelector('.properties__slider--scrollbar'),
            propertiesScrollBarStick = document.querySelector('.properties__slider--stick');

        let slide = slides[0].offsetWidth;
        let scrollSliderResidue = scrollField.scrollWidth - scrollField.clientWidth;

        propertiesScrollBarStick.addEventListener('mousedown', (event) => {
            let startX = event.clientX;
            let stickPosition = propertiesScrollBarStick.offsetLeft;

            function stickMoving(event) {
                let deltaX = event.clientX - startX;
                let newStickPosition = stickPosition + deltaX;

                let maxStickPosition = propertiesScrollBar.getBoundingClientRect().width - propertiesScrollBarStick.clientWidth;
                let stickPositionArea = Math.max(0, Math.min(newStickPosition, maxStickPosition));

                let slidesMove = (stickPositionArea / maxStickPosition) * scrollSliderResidue;

                propertiesScrollBarStick.style.left = `${stickPositionArea}px`;
                scrollField.scrollLeft = slidesMove;
            }

            const stickNoMoving = () => {
                document.removeEventListener('mousemove', stickMoving);
                document.removeEventListener('mouseup', stickMoving);
            }

            document.addEventListener('mousemove', stickMoving);
            document.addEventListener('mouseup', stickNoMoving);
        });

        propertiesButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                let scrollSliderResidue = scrollField.scrollWidth - scrollField.clientWidth;
                let scrollCoordinate = scrollField.scrollLeft;

                if (event.target.classList.contains('properties__button--next')) {
                    scrollField.scrollBy({left: slide * slideScrollNumber, behavior: "smooth"});

                    if (scrollSliderResidue <= scrollCoordinate) {
                        scrollField.scrollTo({left: 0, behavior: 'smooth'})
                    }
                }

                if (event.target.classList.contains('properties__button--prev')) {
                    scrollField.scrollBy({left: -slide * slideScrollNumber, behavior: "smooth"});

                    if (0 >= scrollCoordinate) {
                        scrollField.scrollTo({left: scrollSliderResidue, behavior: 'smooth'})
                    }
                }
            });
        });

        scrollField.addEventListener('scroll', () => {
            let stickPosition = (scrollField.scrollLeft / scrollSliderResidue) * (propertiesScrollBar.clientWidth - propertiesScrollBarStick.offsetWidth);
            propertiesScrollBarStick.style.left = `${stickPosition}px`
        });
    }

    propertiesSlider(3);
}

module.exports = propertiesSlider;