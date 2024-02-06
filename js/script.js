document.addEventListener('DOMContentLoaded', () => {
    const  navigation = require('./modules/navigation'),
           headerMobile = require('./modules/headerMobile'),
           propertiesSlider = require('./modules/propertiesSlider'),
           featuresSlider = require('./modules/featuresSlider');

    navigation();
    headerMobile();
    propertiesSlider();
    featuresSlider();
});






