function handleFooter() {
    $('.footer-social-icon').wrapAll('<div class="footer-social" />');
    $('.footer-logo').insertBefore('.footer-social');
}

function handleLandingControls() {
    // handle posted in
    $('.HLLandingControl ul li').each(function () {
        var self = $(this),
            postedIn = $(self).find('div[id*="FoundIn"]');

        $(postedIn).appendTo(self);
    });

    // handle most active members
    $('.home .HLEngagement ul li').each(function () {
        var self = $(this),
            link = $(self).find('.col-md-9 > a'),
            href = $(link).attr('href');

        $(link).wrapInner('<h3 />');
        $(link).contents().unwrap();
        $(self).wrapInner('<a href="' + href + '" />');
    });

    // handle blog images

    $('.home .HLRecentBlogs ul li, .featured-blog .HLRecentBlogs ul li').each(function () {
        var self = $(this);

        handleAjaxCall(self);

    });

    // handle blog link

    $('.blog-slider .HLRecentBlogs ul li, .featured-blog .HLRecentBlogs ul li').each(function () {
        var self = $(this),
            link = $(self).find('h3 a'),
            href = $(link).attr('href');

        $(self).find('.text-container').append('<span class="link-text">Read More</span>');
        $(self).wrapInner('<a href="' + href + '" />');
        $(link).contents().unwrap();
    });

    // handle event date blocks 
    $('.HLLandingControl.HLEventList ul li').each(function () {
        var self = $(this),
            month = $(self).find('.date-block .calendar-month span').text();

        month = month.substring(0, 3);
        $(self).find('.date-block .calendar-month').text(month);
    });
}

function handleSearchBox() {
    $('.SearchInputs .form-control').attr('placeholder', 'Search...');
}

function handlePageTitles() {
    $('#PageTitleH1').wrapInner('<span class="title-text" />');
}

$(function () {
    handleFooter();
    handleLandingControls();
    handleSearchBox();
    handlePageTitles();
});