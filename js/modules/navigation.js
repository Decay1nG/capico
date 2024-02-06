function navigation() {

    const navigationPanel = document.querySelector('.navigation__panel');

    function selectorsReset(element, selector) {
        document.querySelectorAll(`.${element}`).forEach(item => {
            item.classList.remove(`${selector}`);
        });
    }

    navigationPanel.addEventListener('click', (event) => {
        event.preventDefault();

        if (event.target.matches('.language__button') || event.target.matches('.svg__lang--btn')) {
            const langButtonParent = event.target.closest('.language__button--wrap');

            langButtonParent.querySelector('.language__card').classList.toggle('language__card--active');
            langButtonParent.querySelector('.language__button').classList.toggle('language__button--active');
        }

        if (event.target.matches('.mackcombo') || event.target.matches('.hamburger-menu')) {

            selectorsReset('language__card', 'language__card--active');
            selectorsReset('language__button', 'language__button--active');

            navigationPanel.querySelector('.hamburger-menu').classList.toggle('animate');
            navigationPanel.querySelector('.header__menu').classList.toggle('menu__active');

            document.querySelector('body').classList.toggle('modal__active');
        }
    });
}

module.exports = navigation;