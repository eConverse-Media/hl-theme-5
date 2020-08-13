$(function () {
    $('.main-slide').wrapAll('<div class="slider slick-dotted" />');
    $('.slider').slick({
        arrows: true,
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fal fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fal fa-arrow-right"></i></button>'
    });
});