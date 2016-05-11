// слайдер покрытий на index
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


        //открытие слайда
        slider.open = function($item) {
            slider.list.find('.active').removeClass('active');
            $item.addClass('active');

            var img = '.' + $item.attr('data-name');
            slider.images.css('display', 'none');
            $(img).css('display', 'block');
        };
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

                                                    /*Прокрутка ленты*/

            slider.list.find('.active').removeClass('active');
            i++;
            $(slider.slides[i]).addClass('active');

            if (i>slider.slides.length-1) {
                i = 0;
                slider.list.find('.active').removeClass('active');
                $(slider.slides[i]).addClass('active');
            }

                                            /*Синхронизация верхнего слайдера*/

            var img = '.' + $(slider.slides[i]).attr('data-name');
            slider.images.css('display', 'none');
            $(img).css('display', 'block');

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

                                                    /*Прокрутка ленты*/

            i--;
            slider.list.find('.active').removeClass('active');
            $(slider.slides[i]).addClass('active');


            if (i<0) {
                slider.list.find('.active').removeClass('active');
                i = slider.slides.length-1;
                $(slider.slides[i]).addClass('active');
            }

                                                /*Синхронизация верхнего слайдера*/

            var img = '.' + $(slider.slides[i]).attr('data-name');
            slider.images.css('display', 'none');
            $(img).css('display', 'block');

                                                         /*Анимация*/

            $(".carusel_list").animate({
                right: -$('.carusel_item').width()
            }, 200, function() {
                $('.carusel_item').last().prependTo('.carusel_list');
                $(".carusel_list").css('right', '');
            });
        });

        /*------------------------------------------------------------------------------*/

        slider.items.click(function() {
            slider.open($(this));
        });

        slider.open(slider.obj.find('.active'));
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

