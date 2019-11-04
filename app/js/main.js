$(function(){

    // слайдер students
    $('.studentresults__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrowleft.png" alt=""></button> ',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrowright.png" alt=""></button> ',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                  arrows: false,
                }
            },
        ]
    });

    // слайдер diploms
    $('.businesscard__diploms').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrowleft.png" alt=""></button> ',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrowright.png" alt=""></button> ',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                  arrows: false,
                  variableWidth: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
    });

    // Всплывающее меню
    $('.header__menu-btn').on('click',function(){
        $('.menu__list').slideToggle();
    });

    // Кнопка возврата вверх страницы
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
    }); 
    
    // Плавный скролл к элементам меню
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    
});