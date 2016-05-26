/**
 * Created by SEO on 20.05.2016.
 */

jQuery(document).ready(function(){

                                                /*catalog_slider*/

    var list = jQuery('.item_slider').find('.item_slider_list');                /*список слайдов*/
    var items = jQuery(".item_slider_list").find('.carusel_item');              /*один слайд*/
    var slides = jQuery('.item_slider_list').children('.carusel_item');         /*количество слайдов*/
    var slide_width = items.width();                                            /*длина одного слайда*/
    var carusel_width = 0;

    items.each(function() {
        carusel_width += jQuery(this).outerWidth();
    });

    jQuery('.item_slider_list').css('width', carusel_width+'px');

    var pixelsOffset = 320;
    var currentLeftValue = 0;
    var elementsCount = jQuery('.item_slider_list').find('.carusel_item').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;

    jQuery(".arrow_left").click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 320;
            jQuery('.item_slider_list').animate({ left : currentLeftValue + "px"}, 300);
        }
    });

    jQuery(".arrow_right").click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 320;
            jQuery('.item_slider_list').animate({ left : currentLeftValue + "px"}, 300);
        }
    });

                                                                /*вызов пропап*/


    jQuery(".phone").on("click", function(){
            jQuery(".popup_phone").toggleClass('display animated fadeInRight');

    });

    jQuery(".show").click(function(){
        jQuery(".popup_phone").toggleClass('display animated fadeInRight');
    });

                                                        /*открытие доп адаптивного меню*/

    jQuery(".hamburger").on("click", function(){
        jQuery(".menu_list_adaptive li").toggleClass('display animated fadeInRight');

    });

                                                                /*переключение меню*/

    jQuery(".nav").on("click", function(){
        jQuery(".nav").removeClass('active');
        jQuery(".menu_list li").css('padding-bottom', '0');
        jQuery(this).toggleClass('active');
    });

                                                                /*выборка массива*/

    var dot_number = 0;
    var dot_arrow = [];
    jQuery(".dot").each(function() {
        dot_arrow[dot_number] = $(this).attr('id', 'arrow_'+dot_number);
        dot_number++;
    });

    var carusel_number = 0;
    var carusel_arrow = [];
    jQuery(".top_slider_with_dot_list").each(function() {
        carusel_arrow[carusel_number] = $(this).attr('id', 'arrow_'+carusel_number);
        carusel_number++;
    });

                                                        /*переключение верхнего слайдера*/

    jQuery(".dot").on("click", function(){
        jQuery(".dot").removeClass('active_dot');
        jQuery(this).toggleClass('active_dot');
        $('.display').fadeOut().removeClass('display');
        $('.top_slider_with_dot_list').hide().removeClass('display animated fadeInLeftBig');
        var blatest = $(this).attr("id");
        $(".top_slider_with_dot").find('#'+blatest).fadeIn().addClass('display animated fadeInLeftBig');
    });

                                                            /*пролистование отзывов*/

    var face_list = jQuery('.face').find('.face_slider');                       /*список слайдов*/
    var face_items = jQuery(".face_slider").find('.face_slide');                /*один слайд*/
    var face_slides = jQuery('.face_slider').children('.face_slide');           /*количество слайдов*/
    var face_slide_width = items.width();                                       /*длина одного слайда*/
    var face_carusel_width = 0;

    face_items.each(function() {
        face_carusel_width += jQuery(this).outerWidth();
    });

    jQuery('.face_slider').css('width', face_carusel_width+'px');

    var face_pixelsOffset = 520;
    var face_currentLeftValue = 0;
    var face_elementsCount = jQuery('.face_slider').find('.face_slide').length;
    var face_minimumOffset = - ((face_elementsCount - 2) * face_pixelsOffset);
    var face_maximumOffset = 0;

    jQuery(".arrow_left_face").click(function() {
        if (face_currentLeftValue != face_maximumOffset) {
            face_currentLeftValue += 520;
            jQuery('.face_slider').animate({ left : face_currentLeftValue + "px"}, 300);
        }
    });

    jQuery(".arrow_right_face").click(function() {
        if (face_currentLeftValue != face_minimumOffset) {
            face_currentLeftValue -= 520;
            jQuery('.face_slider').animate({ left : face_currentLeftValue + "px"}, 300);
        }
    });
});