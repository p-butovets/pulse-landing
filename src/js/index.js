$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="slider/chevron-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="slider/chevron-right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
            }
        }]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

        });
    });

    $('.catalog-item__back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

        });
    });

    //Modals
    $('.modal__close, .overlay').on('click', function () {
        $('.overlay, #modal-callback, #modal-order, #modal-thankyou').fadeOut();
    });

    $('[data-modal=modal-callback]').on('click', function () {
        $('.overlay, #modal-callback').fadeIn();
    });

    $('.button__catalog-item').each(function (i) {
        $(this).on('click', function () {
            $('#modal-order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
            $('.overlay, #modal-order').fadeIn();
        });
    });
});