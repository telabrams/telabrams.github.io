/**
 * Created by SEO on 07.06.2016.
 */

jQuery(document).ready(function(){

                                                            /*Открытие read-more*/

    /*var div_arrow = jQuery('.object_block').children('.object_text');
     var div_number = jQuery(div_arrow).length;
     var i = 0;
     var divheight = [];
     jQuery('.object_text').each(function(){
     divheight[i] = jQuery(this).height();
     i++;
     });*/

    var cheker = jQuery('div').is('.house_container');
    var five_lines = jQuery('.realised_object_image img').height() * 2;

    if (cheker == true) {
        /*var lineheight = jQuery(".house_container").css('line-height').replace("px","");*/

        jQuery(".house_container").css('height', five_lines);


        jQuery(".object_read_more").click(function () {
            jQuery(this).prev(".house_container").css('height', 'auto');
            jQuery(this).css('display', 'none');
            jQuery(this).next(".object_read_less").css('display', 'block');
        });

        jQuery(".object_read_less").click(function () {
            jQuery(this).prev(".object_read_more").prev(".house_container").css('height', five_lines);
            jQuery(this).prev(".object_read_more").css('display', 'block');
            jQuery(this).css('display', 'none');

        });

    }

                                                        /*построение ассоциации*/

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

    var house_number = 0;
    var house_arrow = [];
    jQuery(".paint_house").each(function() {
        house_arrow[house_number] = $(this).attr('id', 'arrow_'+house_number);
        house_number++;
    });

    var box_number = 0;
    var box_arrow = [];
    jQuery(".color_box").each(function() {
        box_arrow[box_number] = $(this).attr('id', 'arrow_'+box_number);
        box_number++;
    });



                                                    /*переключение верхнего слайдера*/



    jQuery(".dot").on("click", function(){
        jQuery(".dot").removeClass('active_dot');
        jQuery(this).toggleClass('active_dot');
        jQuery('.display').fadeOut().removeClass('display');
        jQuery('.top_slider_with_dot_list').hide().removeClass('display animated fadeInDown');
        var blatest = jQuery(this).attr("id");
        jQuery(".top_slider_with_dot").find('#'+blatest).fadeIn().addClass('display animated fadeInDown');
    });

    var g = 0;
    setTimeout(function time() {
        g++;
        if (g == carusel_arrow.length ){
            g = 0;
        }
        jQuery(".dot").find('.active_dot');
        jQuery('.active_dot').removeClass('active_dot');
        jQuery(dot_arrow[g]).toggleClass('active_dot');
        jQuery('.top_slider_with_dot_list').hide().removeClass('display animated fadeInDown');
        var blatest = jQuery(carusel_arrow[g]).attr("id");
        jQuery(".top_slider_with_dot").find('#'+blatest).fadeIn().addClass('display animated fadeInDown');

        setTimeout(time, 7000);
    }, 7000);








                                                            /*Переключение товаров*/


    var list = jQuery('.item_slider').find('.item_slider_list');                /*список слайдов*/
    var items = jQuery(".item_slider_list").find('.carusel_item');              /*один слайд*/
    var slides = jQuery('.item_slider_list').children('.carusel_item');         /*количество слайдов*/
    var slide_width = items.outerWidth() + 30;                                      /*длина одного слайда*/
    var carusel_width = slide_width + 30;

    items.each(function() {
        carusel_width += jQuery(this).outerWidth();
    });

    jQuery('.item_slider_list').css('width', carusel_width+'px');

    var pixelsOffset = slide_width;
    var currentLeftValue = 0;
    var elementsCount = jQuery('.item_slider_list').find('.carusel_item').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;

    jQuery(".arrow_left").click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += slide_width;
            jQuery('.item_slider_list').animate({ left : currentLeftValue + "px"}, 300);
        }
    });

    jQuery(".arrow_right").click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= slide_width;
            jQuery('.item_slider_list').animate({ left : currentLeftValue + "px"}, 300);
        }
    });



                                                                /*выбор цвета домиков*/

    jQuery(".color_box").on("click", function(){
        jQuery(".color_box").removeClass('active_box');
        jQuery(this).toggleClass('active_box');
        $('.display_house').fadeOut().removeClass('display_house');
        $('.paint_house').hide().removeClass('display_house animated fadeIn');
        var blatest = $(this).attr("id");
        $(".paint_house_wrapper").find('#'+blatest).fadeIn().addClass('display_house animated fadeIn');
    });


   

});




//anchor 
jQuery(document).ready(function() {
 jQuery(".nav_first").click(function() {
    jQuery('html, body').animate({
        scrollTop: $(".item_slider").offset().top
    }, 1000);
});
 jQuery(".nav_second").click(function() {
    jQuery('html, body').animate({
        scrollTop: $(".garden").offset().top
    }, 1000);
});
 jQuery(".nav_third").click(function() {
    jQuery('html, body').animate({
        scrollTop: $(".realised_object").offset().top
    }, 1000);
});
  jQuery(".nav_fourth").click(function() {
    jQuery('html, body').animate({
        scrollTop: $(".house_color_block").offset().top
    }, 1000);
});
  jQuery(".nav_fifth").click(function() {
    jQuery('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 1000);
});
});

//fixed on scroll
$(document).ready(function() {
    jQuery(window).scroll(function(){
  var sticky = jQuery('.menu'),
      scroll = jQuery(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

                                                                            /*лифт*/


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




});



$(document).ready(function() {
    // if ($('.nocufon', this).hasClass('active')) {
    //     $('.nocufon').removeClass('active');
    // };
     $('.nav', this).click(function() {
        $('.nav').removeClass('active_bg');
        $(this).addClass('active_bg').siblings().removeClass('active_bg');
    });
});


/*olya_slider*/

/*jQuery(function() {

    var SliderModule = (function() {
        var pb = {};
        pb.el = jQuery('#slider');
        pb.items = {
            panels: pb.el.find('.slider-wrapper > li'),
        }

        // Interval del Slider
        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        // Constructor del Slider
        pb.init = function(settings) {
            this.settings = settings || {duration: 8000};
            var items = this.items,
                lengthPanels = items.panels.length,
                output = '';

            // Insertamos nuestros botones
            for(var i = 0; i < lengthPanels; i++) {
                if(i == 0) {
                    output += '<li class="active"></li>';
                } else {
                    output += '<li></li>';
                }
            }

            jQuery('#control-buttons').html(output);

            // Activamos nuestro Slider
            activateSlider();
            // Eventos para los controles
            jQuery('#control-buttons').on('click', 'li', function(e) {
                var $this = jQuery(this);
                if(!(currentSlider === $this.index())) {
                    changePanel($this.index());
                }
            });

        }

        // Funcion para activar el Slider
        var activateSlider = function() {
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        // Funcion para la Animacion
        pb.startSlider = function() {
            var items = pb.items,
                controls = jQuery('#control-buttons li');
            // Comprobamos si es el ultimo panel para reiniciar el conteo
            if(nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider-1;
            }

            controls.removeClass('active').eq(nextSlider).addClass('active');
            items.panels.eq(currentSlider).fadeOut('slow');
            items.panels.eq(nextSlider).fadeIn('slow');

            // Actualizamos los datos del slider
            currentSlider = nextSlider;
            nextSlider += 1;
        }

        // Funcion para Cambiar de Panel con Los Controles
        var changePanel = function(id) {
            clearInterval(SliderInterval);
            var items = pb.items,
                controls = jQuery('#control-buttons li');
            // Comprobamos si el ID esta disponible entre los paneles
            if(id >= lengthSlider) {
                id = 0;
            } else if(id < 0) {
                id = lengthSlider-1;
            }

            controls.removeClass('active').eq(id).addClass('active');
            items.panels.eq(currentSlider).fadeOut('slow');
            items.panels.eq(id).fadeIn('slow');;

            // Volvemos a actualizar los datos del slider
            currentSlider = id;
            nextSlider = id+1;
            // Reactivamos nuestro slider
            activateSlider();
        }

        return pb;
    }());

    SliderModule.init({duration: 5000});

});*/