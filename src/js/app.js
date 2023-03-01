import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

$(document).ready(() => {
    $('.nav-opener').on('click', function () {
        if ($('.header').hasClass('active')) {
            $('.header').removeClass('active');
        } else {
            $('.header').addClass('active');
        }
    });
});
