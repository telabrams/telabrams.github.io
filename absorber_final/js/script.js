//jQuery('document').ready(function(){
//
//    var grid = 1100;
//    var items = jQuery(".slider_film_list").find('.slider_film_item');
//    //var window_width = jQuery(window).width();
//    jQuery('.carusel_hider').css('max-width', grid + 'px');
//    jQuery(items).css('max-width', grid + 'px');
//    var slide_width = items.outerWidth();
//    var carusel_width = slide_width;
//
//    items.each(function () {
//        carusel_width += jQuery(this).outerWidth();
//        jQuery('.dots').append("<div class='dots_item'></div>")
//    });
//
//    var dot_number = 0;
//    var dot_arrow = [];
//    jQuery(".dots_item").each(function() {
//        dot_arrow[dot_number] = jQuery(this).attr('id', 'arrow_'+dot_number);
//        dot_number++;
//    });
//
//    var slide_number = 0;
//    var slide_arrow = [];
//    jQuery(".slider_film_item").each(function() {
//        slide_arrow[slide_number] = jQuery(this).attr('id', 'arrow_'+slide_number);
//        slide_number++;
//    });
//
//    jQuery('.dots_item').on('click', function() {
//        jQuery('.dots_item').removeClass('active');
//        jQuery(this).addClass('active');
//        //$('.display').fadeOut().removeClass('display');
//        //$('.top_slider_with_dot_list').hide().removeClass('display animated fadeInLeftBig');
//        console.log(jQuery(this).attr("id"));
//        var blatest = jQuery(this).attr("id");
//        var checker = jQuery("#arrow_1").attr("id");
//        for (var i=0;i<dot_arrow.length;i++) {
//            if (blatest==checker) {
//                console.log('as');
//                jQuery(checker).animate({right: 1000 + "px"}, 500);
//            }
//        }
//
//        //var blatest = jQuery(this).attr("id");
//        //$(".top_slider_with_dot").find('#'+blatest).fadeIn().addClass('display animated fadeInLeftBig');
//    });
//
//
//
//    jQuery('.dots_item:first-child').addClass('active');
//
//    jQuery('.slider_film_list').css('width', carusel_width + 'px');
//
//    var currentLeftValue = 0;
//    var elementsCount = jQuery('.slider_film_list').find('.slider_film_item').length;
//    var maximumOffset = 0;
//
//    //jQuery(".arrow_prev_carousel_mini").click(function () {
//    //    maximumOffset--;
//    //
//    //
//    //    if (maximumOffset < 0) {
//    //        maximumOffset = elementsCount-1;
//    //        currentLeftValue = slide_width*(elementsCount-1);
//    //        jQuery('.slider_film_list').animate({right: currentLeftValue + "px"}, 500);
//    //    }
//    //
//    //    else {
//    //        currentLeftValue -= slide_width;
//    //        jQuery('.slider_film_list').animate({right: currentLeftValue + "px"}, 500);
//    //
//    //    }
//    //    console.log(maximumOffset);
//    //    console.log(currentLeftValue);
//    //});
//    //
//    jQuery(".arrow_next_carousel_mini").click(function () {
//        maximumOffset++;
//
//
//        if (maximumOffset > elementsCount-1) {
//            maximumOffset = 0;
//            currentLeftValue = maximumOffset;
//            jQuery('.slider_film_list').animate({right: currentLeftValue + "px"}, 500);
//        }
//
//        else {
//            currentLeftValue += slide_width;
//            jQuery('.slider_film_list').animate({right: currentLeftValue + "px"}, 500);
//
//        }
//        console.log(maximumOffset);
//        console.log(currentLeftValue);
//    });
//
//    var run = setInterval('rotate()', 5000);
//
//    jQuery('.slider_film_list').hover(
//
//        function() {
//            clearInterval(run);
//        },
//        function() {
//            run = setInterval('rotate()', 5000);
//        }
//    );
//
//});
//
////function rotate() {
////    jQuery('.arrow_next_carousel_mini').click();
////}


jQuery(document).ready(function() { // Ждём загрузки страницы

    var slide = jQuery(".slides");
    var slides = slide.children(".slide"); // Получаем массив всех слайдов
    var width = slide.width(); // Получаем ширину видимой области
    var i = slides.length; // Получаем количество слайдов
    var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
    var cheki = i-1;

    slide.css('width',offset); // Задаем блоку со слайдами ширину всех слайдов

    for (j=0; j < slides.length; j++) {
        if (j==0) {
            jQuery(".navigation").append("<div class='dot active'></div>");
        }
        else {
            jQuery(".navigation").append("<div class='dot'></div>");
        }
    }

    var dots = jQuery(".navigation").children(".dot");
    offset = 0; // Обнуляем смещение, так как показывается начало 1 слайд
    i = 0; // Обнуляем номер текущего слайда

    jQuery('.dot').click(function(){
        jQuery(".active").removeClass("active");
        jQuery(this).addClass("active");
        console.log(jQuery(this).index());
        i = jQuery(this).index();
        offset = i * width;
        slide.css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
    });


    jQuery(".next").click(function(){	// Событие клика на кнопку "следующий слайд"
        if (offset == width * cheki) {
            offset = -width;
            slide.css("transform","translate3d(-"+offset+"px, 0px, 0px)");
            jQuery(".active").removeClass("active");
            jQuery(dots[0]).addClass("active");
            i = -1;
        }

        if (offset < width * cheki) {	// Проверяем, дошли ли мы до конца
            offset += width; // Увеличиваем смещение до следующего слайда
            slide.css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
            jQuery(".active").removeClass("active");
            jQuery(dots[++i]).addClass("active");
        }
    });


    jQuery(".prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
        if (offset == 0) {
            offset = width * slides.length;
            slide.css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
            jQuery(".active").removeClass("active");
            jQuery(dots[slides.length]).addClass("active");
            i = 4;
        }

        if (offset > 0) { // Проверяем, дошли ли мы до конца
            offset -= width; // Уменьшаем смещение до предыдущегоо слайда
            slide.css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
            jQuery(".active").removeClass("active");
            jQuery(dots[--i]).addClass("active");
        }
    });

                                                                /*Timer*/

    var run = setInterval('rotate()', 5000);

    jQuery('.slider').hover(

        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval('rotate()', 5000);
        }
    );

                                                            /*active_link*/

    jQuery('.product_list_item a').on('click', function() {
       jQuery('.product_list_item a').removeClass('active_link');
        jQuery(this).addClass('active_link');
    });

                                                            /*read_more*/

    var cheker = jQuery('div').is('.text');
    var text = jQuery('.text');
    var more = jQuery(".more");
    var less = jQuery(".less");

    if (cheker == true) {

        var height_auto = text.height();
        var lineheight = text.css('line-height').replace("px", "");
        var five_lines = lineheight*7;

        text.css('height', five_lines);

        more.click(function () {
            jQuery(this).prev(text).animate({height: height_auto}, 400);
            jQuery(this).css('display', 'none');
            jQuery(this).next(less).css('display', 'inline-block');
        });

        less.click(function () {
            jQuery(this).prev(more).prev(text).animate({height: five_lines}, 300);
            jQuery(this).prev(more).css('display', 'inline-block');
            jQuery(this).css('display', 'none');

        });
    }

});

                                                        /*Timer_start*/

function rotate() {
    jQuery('.next').click();
}
