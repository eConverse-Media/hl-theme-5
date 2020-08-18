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

    $('.blog-slider .HLRecentBlogs ul').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});