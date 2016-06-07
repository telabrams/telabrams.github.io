/**
 * Created by SEO on 20.05.2016.
 */

                                                                    /*Map*/

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.4112958, lng: 30.6157115},
        zoom: 16
    });
}



                                                                    /*popup*/

jQuery(document).ready(function(){
    jQuery(".item_button_s").click(function(){
        jQuery(".popup_wrapper").fadeIn(500);
        jQuery(".popup").fadeIn(500);
    });

    jQuery(".popup_wrapper,.exit").click(function(){
        jQuery(".popup_wrapper").fadeOut(200);
        jQuery(".popup").fadeOut(200);
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


    /*форма липучка*/

    var height = jQuery('.comments').height();
    var form_height = jQuery('.right_comments').height();



    jQuery(window).on('load resize',windowSize);
        function windowSize() {
            if (jQuery(window).width() <= '1060') {

                jQuery(window).scroll(function () {

                    if (jQuery(document).scrollTop() > 0) {
                        jQuery('.scroller').css('position', 'relative').css('top', '620px');
                        /*jQuery('.comment_textarea ').css('position', 'relative').css('top', '610px');
                        jQuery('.new_blue ').css('position', 'relative').css('top', '610px');*/
                    }
                    else {
                        jQuery('.scroller').css('position', 'fixed').css('top', '330px');
                        /*jQuery('.comment_textarea').css('position', 'fixed').css('top', '300px');
                        jQuery('.new_blue').css('position', 'fixed').css('top', '300px');*/
                    }

                });
            }

            jQuery(window).scroll(function () {

                if (jQuery(window).width() <= '971') {
                    /*jQuery('.scroller').css('position', 'relative').css('top', '610px');*/
                    /*jQuery('.comment_textarea ').css('position', 'relative').css('top', '610px');
                     jQuery('.new_blue ').css('position', 'relative').css('top', '610px');*/
                }

            });

            else {

                jQuery(window).scroll(function () {

                    if (jQuery(document).scrollTop() > 450) {
                        jQuery('.scroller').css('position', 'relative').css('top', height - form_height);
                        /*jQuery('.comment_textarea ').css('position', 'relative').css('top', height - form_height);
                        jQuery('.new_blue ').css('position', 'relative').css('top', height - form_height);*/
                    }
                    else {
                        jQuery('.scroller').css('position', 'fixed').css('top', '215px');
                        /*jQuery('.comment_textarea').css('position', 'fixed').css('top', '300px');
                        jQuery('.new_blue').css('position', 'fixed').css('top', '640px;');*/
                    }

                });
            }
        }


    /*jQuery(function(){

         var field = new Array("name", "mail", "number");//поля обязательные

         jQuery(".popup_form").submit(function() {// обрабатываем отправку формы
             var error=0; // индекс ошибки
             jQuery("form").find(":input").each(function() {// проверяем каждое поле в форме
                 for(var i=0;i<field.length;i++){ // если поле присутствует в списке обязательных
                     if(jQuery(this).attr("name")==field[i]){ //проверяем поле формы на пустоту

                         if(!jQuery(this).val()){// если в поле пустое
                             jQuery(this).css('border', 'red 1px solid');// устанавливаем рамку красного цвета
                             error=1;// определяем индекс ошибки

                         }
                         else{
                             jQuery(this).css('border', '#999999 1px solid');// устанавливаем рамку обычного цвета
                         }

                     }
                 }
             });

             if(error==0){ // если ошибок нет то отправляем данные
                 return true;
             }
             else{
                 if(error==1) var err_text = "Не все обязательные поля заполнены!";
                 return false; //если в форме встретились ошибки , не  позволяем отослать данные на сервер.
             }
         });
     });*/
});


jQuery(document).ready(function(){

                                        /*Закрытие товаров в корзине*/

    jQuery(".bucket_page_close").click(function () {
        jQuery(this).parent().css('display', 'none');
    });

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
        jQuery(".bucket_olya").removeClass("dispBlock");
            jQuery(".popup_phone").toggleClass('display animated fadeInRight');

        jQuery(document).mouseup(function (e) {
            var popup = jQuery(".popup_phone");
            if (!jQuery('.phone').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
                jQuery(".popup_phone").removeClass('display animated fadeInRight');
            }
        });

    });

        jQuery(".bucket").on("click", function(){
            jQuery(".popup_phone").removeClass("display animated fadeInRight");
            jQuery(".bucket_olya").toggleClass('dispBlock');

            jQuery(document).mouseup(function (e) {
                var popup_bucket = jQuery(".bucket_olya");
                if (!jQuery('.bucket').is(e.target) && !popup_bucket.is(e.target) && popup_bucket.has(e.target).length == 0) {
                    jQuery(".bucket_olya").removeClass('dispBlock');
                }
            });

    });

                                                            /*закрытие по дополнительной кнопке при адаптиве*/

    jQuery(".show").click(function(){
        jQuery(".popup_phone").removeClass('display animated fadeInRight');
        jQuery(".bucket_olya").removeClass('dispBlock');
    });

                                                        /*открытие доп адаптивного меню*/

    jQuery(".hamburger").on("click", function(){
        jQuery(".menu_list_adaptive li").toggleClass('display animated fadeInRight');

    });

                                                                /*переключение меню*/

    jQuery(".nav").mouseenter(function(){
        jQuery(".nav").removeClass('active');
        /*jQuery(".menu_list li").css('padding-bottom', '0');*/
        jQuery(this).toggleClass('active');

        jQuery(".nav").mouseleave(function(){
            jQuery(".nav").removeClass('active');
            /*jQuery(".menu_list li").css('padding-bottom', '20px');*/
        });

    });


    /*jQuery(".nav").on("click", function(){
        jQuery(".nav").removeClass('active_a');
        /*jQuery(".menu_list li").css('padding-bottom', '0');*/
        /*jQuery(this).toggleClass('active_a');
    });*/

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

                                                                        /*Хлебные крошки*/

jQuery(document).ready(function() {
    jQuery(".nav_list_item").click(function () {
        jQuery(".nav_list_item").removeClass('active_nav');
        jQuery(this).toggleClass('active_nav');
    });
});

                                                                    /*Переключение страниц*/

jQuery(document).ready(function() {
    jQuery(".item_page").click(function () {
        jQuery(".item_page ").removeClass('active_page');
        jQuery(this).toggleClass('active_page');
    });
});


                                                                        /*Корзина попап*/

/*jQuery(document).ready(function() {
    jQuery(".bucket", this).click(function() {
        jQuery(".popup_phone").removeClass('display animated fadeInRight');
        jQuery(".bucket_olya").toggleClass("dispBlock");
    });
});*/

jQuery(document).ready(function() {
    jQuery('.bucket_close'). click(function() {
        jQuery(this).parent('.bucket_item').css('display', 'none');
    });


                                                                        /*Открытие read-more*/


    /*var div_arrow = jQuery('.object_block').children('.object_text');
    var div_number = jQuery(div_arrow).length;
    var i = 0;
    var divheight = [];
    jQuery('.object_text').each(function(){
        divheight[i] = jQuery(this).height();
        i++;
    });*/
    var lineheight = jQuery(".object_text").css('line-height').replace("px","");
    var five_lines = lineheight * 5;

    jQuery(".object_text").css('height', five_lines);


        jQuery(".object_read_more").click(function () {
            jQuery(this).prev(".object_text").css('height', 'auto');
            jQuery(this).css('display', 'none');
            jQuery(this).next(".object_read_less").css('display', 'block');
        });

        jQuery(".object_read_less").click(function () {
            jQuery(this).prev(".object_read_more").prev(".object_text").css('height', five_lines);
            jQuery(this).prev(".object_read_more").css('display', 'block');
            jQuery(this).css('display', 'none');

        });



});













