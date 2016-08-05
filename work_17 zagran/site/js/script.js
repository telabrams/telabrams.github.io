/**
 * Created by SEO on 02.08.2016.
 */
jQuery(document).ready(function() {

    /*Открытие read-more*/


    var cheker = jQuery('div').is('.numbers');

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

        if (scroll >= 920) {
            sticky.addClass('fixed');
            sticky_menu.addClass('fixed_menu');
        }
        else {
            sticky.removeClass('fixed');
            sticky_menu.removeClass('fixed_menu');
        }
    });

                                                                /*send_form*/

    jQuery(".elips_image").on("click", function () {

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

});
                                                        /*video*/
        (function(jQuery) {
            jQuery(document).ready(function() {
                jQuery(".player").mb_YTPlayer();
            });
        })(jQuery);







