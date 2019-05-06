(function ($) {
    $(function () {
        // Mobile menu
        $('.mobile-menu').on('click', function () {
            $(this).toggleClass('active');
            $('header nav').slideToggle();
        });
    });
})(jQuery);