/**
 * Created by SEO on 02.08.2016.
 */

                                                            /*Map*/

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.4112958, lng: 30.6157115},
        zoom: 16
    });
}


jQuery(document).ready(function() {

                                            /*Открытие read-more*/


    var cheker = jQuery('div').is('.numbers');
    var cheker_news = jQuery('div').is('.news_item_text');

    if (cheker == true) {

        var height_auto = jQuery('.numbers_row').height();
        var lineheight = jQuery(".numbers_row").css('line-height').replace("px", "");
        var five_lines = lineheight;

        jQuery(".numbers_row").css('height', five_lines);

        jQuery(".object_read_more").click(function () {
            jQuery(this).prev(".numbers_row").animate({height: height_auto}, 400);
            jQuery(this).css('display', 'none');
            jQuery(this).next(".object_read_less").css('display', 'inline-block');
        });

        jQuery(".object_read_less").click(function () {
            jQuery(this).prev(".object_read_more").prev(".numbers_row").animate({height: five_lines}, 300);
            jQuery(this).prev(".object_read_more").css('display', 'inline-block');
            jQuery(this).css('display', 'none');

        });
    }

    if (cheker_news == true) {

        var height_auto_news = jQuery('.news_item_text').height();
        var lineheight_news = jQuery(".news_item_text").css('line-height').replace("px","");
        var five_lines_news = lineheight_news * 2;

        jQuery(".news_item_text").css('height', five_lines_news);


        jQuery(".news_read_more").click(function () {
            jQuery(this).prev(".news_item_text").animate({height: height_auto_news}, 400);
            jQuery(this).css('display', 'none');
            jQuery(this).next(".news_read_less").css('display', 'block');
        });

        jQuery(".news_read_less").click(function () {
            jQuery(this).prev(".news_read_more").prev(".news_item_text").animate({height: five_lines_news}, 300);
            jQuery(this).prev(".news_read_more").css('display', 'block');
            jQuery(this).css('display', 'none');

        });
    }

                                                    /*Открытие поиска*/

        jQuery(".search_block").on("click", function () {

                jQuery('.menu_list').toggleClass('display animated zoomIn');
                jQuery('.search_input').toggleClass('display animated zoomIn');

        });


                                                    /*Elips анимация*/

        jQuery(".elips").hover(function () {
            jQuery('.elips_text').toggleClass('animated display tada');
        });

                                                            /*hover_building*/

    jQuery(".field_price_item, .field_price_item_center").hover(function () {
        jQuery('.field_text', this).toggleClass('animated display_block fadeInDown');
        jQuery('.field_price_small', this).toggleClass('animated display_block fadeInDown');
    });

                                                                /*fixed menu*/



    jQuery(window).scroll(function() {
        var sticky = jQuery('.bottom_description'),
            sticky_menu = jQuery('.menu_container'),
            scroll = jQuery(window).scrollTop();

        if (scroll > 0) {
            console.log('1111');
            sticky_menu.addClass('fixed_menu');
        }
        else {
            sticky_menu.removeClass('fixed_menu');
        }
         if (scroll >= 920) {
            sticky.addClass('fixed');
        }
        else {
            sticky.removeClass('fixed');
        }
    });

                                                                /*send_form*/

    jQuery(".elips_image").on("click", function() {

        jQuery('.elips_form').toggleClass('display animated zoomIn');
        jQuery('.elips_container').removeClass('display');

    jQuery(document).mouseup(function (e) {
        var popup = jQuery(".elips_form");
        if (!jQuery('.elips_image').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
            jQuery(".elips_form").removeClass('display animated zoomIn');
            jQuery('.elips_container').addClass('display');
        }
    });
    });

                                                        /*lift*/

    jQuery('#scrollup').click(function(){
        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);
    });

    jQuery(window).scroll(function(){
        if (jQuery(document).scrollTop()>0) {
            jQuery('#scrollup').fadeIn('slow');
        }else{
            jQuery('#scrollup').fadeOut('slow');
        }
    });

                                                        /*show_more_item*/

    var counter = 3;

    jQuery(document).find('.field_price_searchpage:lt('+counter+')').addClass('image_display');

    jQuery('.search_page_button').on('click', function(){
        counter+=3;
        console.log('puuuk');
        jQuery(document).find('.field_price_searchpage:lt('+counter+')').addClass('image_display animated fadeInRight');
    });

                                                        /*show_more*/

    jQuery('.question_show,.question_less').on('click', function(){
        var parent = jQuery(this).parent();
        jQuery(parent).next().toggleClass('display_block animated fadeIn');
        jQuery(this).toggleClass('display');
        jQuery(this).prev().toggleClass('display');
        jQuery(this).next().toggleClass('display');
    });

                                                        /*slider*/

    var slider_number = 0;
    var slider_arrow = [];
    //var slider_background = [];
    jQuery(".slider_film_item").each(function() {
        //slider_arrow[slider_number] = $(this).attr('id', 'arrow_'+slider_number);
        slider_arrow[slider_number] = $(this).css("background-image");
        //console.log(slider_background[slider_number]);
        slider_number++;
    });

    var click_counter;
    var counter_slider = 0;

    jQuery('.arrow_next').on('click', function() {
        if (counter_slider>slider_arrow.length-2) {
            counter_slider = -1;
        }
        jQuery('.slider_screen').css('background-image', slider_arrow[++counter_slider]);
        //jQuery('.slider_screen').addClass('animated fadeIn');
        //jQuery('.slider_screen').removeClass('animated fadeIn');
        //counter_slider++;
        //jQuery('.slider_screen').css('background-size', 'cover');
    });

    jQuery('.arrow_prev').on('click', function() {
        if (counter_slider<1) {
            counter_slider = slider_arrow.length;
        }
        jQuery('.slider_screen').css('background-image', slider_arrow[--counter_slider]);
        //counter_slider--;
        //jQuery('.slider_screen').css('background-size', 'cover');
    });

    var blabla = 0;

    jQuery('.slider_film_item', this).on('click', function() {
       var click_background = jQuery(this).css('background-image');
        jQuery('.slider_screen').css('background-image', click_background);
        for (var i = 0; i<=slider_arrow.length;i++){
            if (click_background == (slider_arrow[i])) {
                counter_slider = i;
            }
        }

    });

                                                    /*carousel*/


    var list = jQuery('.item_slider').find('.item_slider_list');                /*список слайдов*/
    var items = jQuery(".item_slider_list").find('.carusel_item');              /*один слайд*/
    var slides = jQuery('.item_slider_list').children('.carusel_item');         /*количество слайдов*/
    var slide_width = items.outerWidth();                                  /*длина одного слайда*/
    var carusel_width = slide_width;

    items.each(function() {
        carusel_width += jQuery(this).outerWidth();
    });

    jQuery('.item_slider_list').css('width', carusel_width+'px');

    var pixelsOffset = slide_width;
    var currentLeftValue = 0;
    var elementsCount = jQuery('.item_slider_list').find('.carusel_item').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;

    jQuery(".arrow_prev_carousel").click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += slide_width;
            jQuery('.item_slider_list').animate({ left : currentLeftValue + "px"}, 300);
        }
    });

    jQuery(".arrow_next_carousel").click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= slide_width;
            jQuery('.item_slider_list').animate({ left : currentLeftValue + "px"}, 300);
        }
    });

                                                        /*carousel_first*/


    var list_first = jQuery('.item_slider').find('.item_slider_list_first');                /*список слайдов*/
    var items_first = jQuery(".item_slider_list_first").find('.carusel_item');              /*один слайд*/
    var slides_first = jQuery('.item_slider_list_first').children('.carusel_item');         /*количество слайдов*/
    var slide_width_first = items_first.outerWidth();                                  /*длина одного слайда*/
    var carusel_width_first = slide_width_first;

    items_first.each(function() {
        carusel_width_first += jQuery(this).outerWidth();
    });

    jQuery('.item_slider_list_first').css('width', carusel_width_first+'px');

    var pixelsOffset_first = slide_width_first;
    var currentLeftValue_first = 0;
    var elementsCount_first = jQuery('.item_slider_list_first').find('.carusel_item').length;
    var minimumOffset_first = - ((elementsCount_first - 3) * pixelsOffset_first);
    var maximumOffset_first = 0;

    jQuery(".arrow_prev_carousel_first").click(function() {
        if (currentLeftValue_first != maximumOffset_first) {
            currentLeftValue_first += slide_width_first;
            jQuery('.item_slider_list_first').animate({ left : currentLeftValue_first + "px"}, 300);
        }
    });

    jQuery(".arrow_next_carousel_first").click(function() {
        if (currentLeftValue_first != minimumOffset_first) {
            currentLeftValue_first -= slide_width_first;
            jQuery('.item_slider_list_first').animate({ left : currentLeftValue_first + "px"}, 300);
        }
    });

                                                    /*carousel_mini*/


    var list_mini = jQuery('.slider_film').find('.slider_film_list');                /*список слайдов*/
    var items_mini = jQuery(".slider_film_list").find('.slider_film_item');              /*один слайд*/
    var slides_mini = jQuery('.slider_film_list').children('.slider_film_item');         /*количество слайдов*/
    var slide_width_mini = items_mini.outerWidth()+40;                                  /*длина одного слайда*/
    var carusel_width_mini = slide_width_mini;

    items_mini.each(function() {
        carusel_width_mini += jQuery(this).outerWidth()+40;
    });

    jQuery('.slider_film_list').css('width', carusel_width_mini+'px');

    var pixelsOffset_mini = slide_width_mini;
    var currentLeftValue_mini = 0;
    var elementsCount_mini = jQuery('.slider_film_list').find('.slider_film_item').length;
    var minimumOffset_mini = - ((elementsCount_mini - 4) * pixelsOffset_mini);
    var maximumOffset_mini = 0;

    jQuery(".arrow_prev_carousel_mini").click(function() {
        if (currentLeftValue_mini != maximumOffset_mini) {
            currentLeftValue_mini += slide_width_mini;
            jQuery('.slider_film_list').animate({ left : currentLeftValue_mini + "px"}, 300);
        }
    });

    jQuery(".arrow_next_carousel_mini").click(function() {
        if (currentLeftValue_mini != minimumOffset_mini) {
            currentLeftValue_mini -= slide_width_mini;
            jQuery('.slider_film_list').animate({ left : currentLeftValue_mini + "px"}, 300);
        }
    });


});
                                                        /*video*/
        (function(jQuery) {
            jQuery(document).ready(function() {
                jQuery(".player").mb_YTPlayer();
            });
        })(jQuery);







