/**
 * Created by ������ on 28.03.2016.
 */

$(document).ready(function(){

                                                    /*������������ �������*/

   

    var list = $('.slider_list').children('.slider_item');
    var description_list = $('.client_description').children('.client_description_wrapper');
    var flex_list = $('.content').children('.flex_container');
    var i = 0;
    var window_checker = false;

    $('.slider_item').hide();
    $('.client_description_wrapper').hide();
    $('.flex_container').hide();

    $(list[0]).fadeIn();
    $(description_list[0]).fadeIn();
    $(flex_list[0]).fadeIn();

    /*Arrow flex_item----------------------------------------------------------------*/
    var flex_container_number = 0;
    var flex_container_arrow = [];
    $('.flex_container').each(function() {
        flex_container_arrow[flex_container_number] = $(this).attr('id', 'arrow_'+flex_container_number);
        flex_container_number++;
    });

    /*------------------------------------------------------------------------------*/

    $(".next").click(function() {

        i++;
        $('.active').fadeOut().removeClass('active');
        $('.flex_container').hide().removeClass('visible animated fadeInLeftBig').css('position', 'absolute');
        $(list[i]).fadeIn(300).addClass('active');
        $(description_list[i]).fadeIn().addClass('active');
        $(flex_list[i]).css('position', 'relative').fadeIn().addClass('visible animated fadeInLeftBig');

        if (i == list.length) {
            i = 0;
            $('.active').fadeOut().removeClass('active');
            $('.flex_container').hide().removeClass('visible animated fadeInLeftBig').css('position', 'absolute');
            $(list[i]).fadeIn(300).addClass('active');
            $(description_list[i]).fadeIn().addClass('active');
            $(flex_list[i]).css('position', 'relative').fadeIn().addClass('visible animated fadeInLeftBig');
        }

        $(".client_header").addClass("hidden").addClass("visible animated fadeInLeft");
        $(".icon_list").addClass("hidden").addClass("visible animated fadeInUpBig");
    });

    $(".prev").click(function(){

        i--;
        $('.active').fadeOut().removeClass('active');
        $('.flex_container').hide().css('position', 'absolute').removeClass('visible animated fadeInLeftBig');
        $(list[i]).fadeIn(300).addClass('active');
        $(description_list[i]).fadeIn().addClass('active');
        $(flex_list[i]).css('position', 'relative').fadeIn().addClass('visible animated fadeInLeftBig');

        if (i < 0) {
            i = list.length-1;
            $('.active').fadeOut().css('position', 'absolute').removeClass('active');
            $('.flex_container').hide().removeClass('visible animated fadeInLeftBig');
            $(list[i]).fadeIn(300).addClass('active');
            $(description_list[i]).fadeIn().addClass('active');
            $(flex_list[i]).css('position', 'relative').fadeIn().addClass('visible animated fadeInLeftBig');
        }

    });

                                                        /*��������� �������*/

    var parentWidth = $(".arrow").parent().width();

    $(".header").mouseenter(function(){

        $(".next").css('display', 'block');
        $(".next").hide().fadeIn(200).animate({right:parentWidth-(parentWidth/1.075)}, 200);

        $(".prev").css('display', 'block');
        $(".prev").hide().fadeIn(200).animate({left:parentWidth-(parentWidth/1.075)}, 200);
    });

    $(".header").mouseleave(function(){
        $(".next").animate({right: "5px"}, 200);
        $(".next").fadeOut(100);

        $(".prev").animate({left: "5px"}, 200);
        $(".prev").fadeOut(100);
        });
    });

jQuery(document).ready(function() {

    jQuery('.logo, .header_text, .subheader_text, .footer_list, .client_header, .icon_list, .contacts_number').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200
    });
                                                                                    /*scroll onclick*/



});
                                                                            /*carusel_slider*/

(function($) {

    function StarqSlider(element, options) {

        this.obj = element;

        this.init();

        $(window).resize(this.init);
    }

    StarqSlider.prototype.init = function() {

        var slider = this;
        var swipe = {
            start: 0,
            stop: 0,
            move: function() {
                return swipe.start - swipe.stop;
            }
        };

        slider.position = 0;
        slider.focus = false;
        slider.list = slider.obj.find('.carusel_list');
        slider.items = slider.obj.find('.carusel_item');
        /*Добавлено*/
        /*------------------------------------------------------------------------------*/
        slider.slides = $('.carusel_list').children('.carusel_item');
        /*------------------------------------------------------------------------------*/
        slider.images = slider.obj.find('.carusel_img');
        slider.arrows = slider.obj.find('.arrow');

        /*Arrow carusel----------------------------------------------------------------*/
        var carusel_number = 0;
        var carusel_arrow = [];
        slider.items.each(function() {
            carusel_arrow[carusel_number] = $(this).attr('id', 'arrow_'+carusel_number);
            carusel_number++;
        });

        /*------------------------------------------------------------------------------*/


        //открытие слайда

        slider.width = slider.items.width();
        var max = 0;
        slider.items.each(function() {
            max += $(this).outerWidth();
        });

        max -= slider.list.width();
        var min = 0;

        /*Добавлено*/
        /*------------------------------------------------------------------------------*/
        var i = 0;

        /*Движжение при нажатии на кнопку arrow-right*/

        $(".arrow_bottom_slider_right").click(function() {

            /*Анимация*/

            $(".carusel_list").animate({
                left: -$('.carusel_item').width()
            }, 200, function() {
                $('.carusel_item').first().appendTo('.carusel_list');
                $(".carusel_list").css('left', '');
            });
        });

        /*Движение при нажатии на кнопку arrow-left*/

        $(".arrow_bottom_slider_left").click(function() {

            /*Анимация*/

            $(".carusel_list").animate({
                right: -$('.carusel_item').width()
            }, 200, function() {
                $('.carusel_item').last().prependTo('.carusel_list');
                $(".carusel_list").css('right', '');
            });
        });

        /*-------------------------------------Открытие lex_container по клику-----------------------------------------*/

        slider.items.click(function() {
            $('.active').fadeOut().removeClass('active');
            $('.flex_container').hide().removeClass('visible animated fadeInLeftBig').css('position', 'absolute');
            var blatest = $(this).attr("id");
            $(".content").find('#'+blatest).css('position', 'relative').fadeIn().addClass('visible animated fadeInLeftBig');
        });

        /*-------------------------------------------------------------------------------*/

    }


    $.fn.starqSlider = function(options) {
        this.each(function() {
            new StarqSlider($(this), options);
        });

        return this;
    }



})(jQuery);



//  форма обратной связи
(function($) {

    function Popup(element, trigger) {
        var popup = this;

        popup.close = element.find('.popup_close');

        popup.close.click(function() {
            element.css('display', 'none');
        });

        trigger.click(function() {
            element.css('display', 'block');
        });

    }


    $.fn.popup = function(selector) {
        this.each(function() {
            new Popup($(this), $(selector));
        });

        return this;
    }

})(jQuery);

(function($) {

    function Slider(element) {

        var slider = this;
        slider.obj = element;

        slider.list = slider.obj.find('.slider_list');
        slider.slides = slider.obj.find('.slider_item');
        slider.slides.width = slider.slides.outerWidth();
        slider.arrow = {
            left: slider.obj.find('.arrow-left'),
            right: slider.obj.find('.arrow-right')
        };

        /*slider.next = function() {
         slider.list.animate({
         left: -slider.slides.width
         }, 200, function() {
         slider.obj.find('.slider_item').first().appendTo(slider.obj.find('.slider_list'));
         slider.list.css('left', '');
         });
         };

         slider.prev = function() {
         slider.list.animate({
         left: slider.slides.width
         }, 200,
         function() {
         slider.obj.find('.slider_item').last().prependTo(slider.obj.find('.slider_list'));
         slider.list.css('left', '');
         });
         };

         slider.init();

         slider.arrow.right.click(slider.next);
         slider.arrow.left.click(slider.prev);*/

        /*Добавлено*/
        /*------------------------------------------------------------------------------*/
        /*Счетчик*/

        /*jQuery.fn.timer =function(){

         slider.list.animate({
         left: -slider.slides.width
         }, 200, function() {
         slider.obj.find('.slider_item').first().appendTo(slider.obj.find('.slider_list'));
         slider.list.css('left', '');
         });
         };


         window.setInterval(function () {

         $().timer();

         }, 3000);*/

        /*НОВЫЙ ТАЙМЕР*/

        setInterval(function(){ myTimer() }, 3000);

        function myTimer() {
            slider.list.animate({
                left: -slider.slides.width
            }, 200, function() {
                slider.obj.find('.slider_item').first().appendTo(slider.obj.find('.slider_list'));
                slider.list.css('left', '');
            });
        }

    }









    /*------------------------------------------------------------------------------*/

    Slider.prototype.init = function() {
        var slider = this;
        var sliderUlWidth = slider.slides.width * slider.slides.length;

        slider.list.css({
            width: sliderUlWidth,
            marginLeft: -slider.slides.width
        });

    }

    $.fn.quartzSlider = function() {
        this.each(function() {
            new Slider($(this));
        });

        return this;
    }

})(jQuery);

$(document).ready(function() {
    $(".starq-slider").starqSlider();
    $("#callback-popup").popup('.callback');
    $('.quartz-slider').quartzSlider();
});