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
});