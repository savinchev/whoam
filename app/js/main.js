$(function(){

    $('.studentresults__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrowleft.png" alt=""></button> ',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrowright.png" alt=""></button> ',
    });

    $('.businesscard__diploms').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrowleft.png" alt=""></button> ',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrowright.png" alt=""></button> ',
    });

    
});