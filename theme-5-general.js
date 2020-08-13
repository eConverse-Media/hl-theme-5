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
}

$(function () {
    handleFooter();
    handleLandingControls();
});