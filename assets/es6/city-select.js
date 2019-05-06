(function ($) {
    function selectCityNow() {
        let selectVal = $('#cities select').val();
        let cityName = $('#' + selectVal).text();
        $('.city__selected').text(cityName);

        setTimeout(function () {
            $('[id^="city_"]').removeClass('hidden');
            $('#' + selectVal).addClass('hidden');
        }, 200)
    }

    function toggleBlock() {
        $('.city__wrapper').slideToggle();

        setTimeout(function () {
            $('.city__item').toggleClass('show');
        }, 200)
    }

    $(function () {
        selectCityNow();

        $('#cities select').on('change', function () {
            selectCityNow();
        });

        $('.city__selected').on('click', function () {
            $('#cities').toggleClass('active');
            toggleBlock();
        });

        $('.city__item').on('click', function () {
            let selectCityId = $(this).attr('id');
            $('#cities select').val(selectCityId);
            $('#cities').toggleClass('active');
            selectCityNow();
            toggleBlock();
        });
    });
})(jQuery);