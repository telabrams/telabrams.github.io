/**
 * Created by SEO on 02.09.2016.
 */

var next = jQuery('.arrow_background_next');
var prev = jQuery('.arrow_background_prev');

jQuery(document).ready(function(){

    var img = jQuery('.slide_img');
    var slider = jQuery('.slider');
    var slideContent = jQuery('.slide_content');
    var imgHeight = img.height();
    var slideContentWidth = slideContent.width();
    var slideContentHeight = slideContent.height();
    var slide = slider.children('.slide').find('.slide_wrapper');
    var slideLength = slide.length;
    var counter = 0;

    /*slider_content animation*/

    var model = jQuery('.model');
    var modelName = jQuery('.model_name');
    var modelDescription = jQuery('.model_description');

    function animateNext() {
        jQuery(slide[counter]).find('.slide_img').addClass('scale_slide');
        slideContent.removeClass('opacity');
        slideContent.removeClass('display_b');
        jQuery(slide[counter]).prev(slideContent).addClass('display_b');
        jQuery(slide[counter]).prev(slideContent).addClass('opacity');
        modelName.removeClass('animated_fadeInLeft fadeInLeft');
        jQuery(slide[counter]).prev().find(modelName).addClass('animated_fadeInLeft fadeInLeft');
        model.removeClass('animated_fadeInLeft fadeInDown');
        jQuery(slide[counter]).prev().find(model).addClass('animated_fadeInLeft fadeInDown');
        modelDescription.removeClass('animated_fadeInLeft fadeInUp');
        jQuery(slide[counter]).prev().find(modelDescription).addClass('animated_fadeInLeft fadeInUp');
    }


                                                        /*slider_content center position*/

    slider.css('height', imgHeight + 'px');
    slideContent.css('margin-left', -slideContentWidth/2 + 'px');
    slideContent.css('margin-top', -slideContentHeight/2 + 'px');

                                                                    //menu hide

    jQuery('.burger').on('click', function(){
        jQuery('.mobile_nav').removeClass('display_n').toggleClass('card_slide_left card_slide_right');
        jQuery('.mobile_shadow').fadeIn(300);

        jQuery(document).mouseup(function (e) {
            var popup_card = jQuery(".mobile_nav");
            if (!popup_card.is(e.target) && popup_card.has(e.target).length == 0) {
                popup_card.removeClass('card_slide_right').addClass('card_slide_left');
                jQuery('.mobile_shadow').fadeOut(300);
            }
        });
    });

    //function menuHide() {
    //    if (windowWidth <= 1120) {
    //        jQuery('header .left_header').css('display', 'none');
    //    }
    //    else {
    //        jQuery('header .left_header').css('display', 'inline-block');
    //    }
    //}
    //
    //menuHide();

    var windowWidth = jQuery(window).width();

                                                                /*resize function*/

jQuery(window).resize(function(){
    slideContentHeight = slideContent.height();
    windowWidth = jQuery(window).width();
    img.css('width', windowWidth + 'px');
    imgHeight = img.height();
    slider.css('height', imgHeight + 'px');
    //menuHide();
    //navigationPosition();
});

function backgroundChange() {
    var backgroundNext;

    if (counter == slideLength-1){
        backgroundNext = jQuery(slide[0]).find('.slide_img').attr('src');
        next.css('background', 'url('+ backgroundNext +') no-repeat center center');
        next.css('background-size', 'cover');
    }

    else {
        backgroundNext = jQuery(slide[counter+1]).find('.slide_img').attr('src');
        next.css('background', 'url('+ backgroundNext +') no-repeat center center');
        next.css('background-size', 'cover');
    }

    if (counter == 0){
        backgroundNext = jQuery(slide[slideLength-1]).find('.slide_img').attr('src');
        prev.css('background', 'url('+ backgroundNext +') no-repeat center center');
        prev.css('background-size', 'cover');
    }

    else {
        backgroundNext = jQuery(slide[counter-1]).find('.slide_img').attr('src');
        prev.css('background', 'url('+ backgroundNext +') no-repeat center center');
        prev.css('background-size', 'cover');
    }

}

backgroundChange();

                                                    //search

    var firstLine = jQuery('.first_line');
    var secondLine = jQuery('.second_line');
    var smallFirstLine = jQuery('.first_line_small');
    var smallSecondLine = jQuery('.second_line_small');

    jQuery('.search').on('click', function(){

        jQuery('.search .fa-search').toggleClass('display_ib');
        jQuery('.small').toggleClass('display_ib');
        smallFirstLine.removeClass('search_hover_first_over').addClass('search_hover_first');
        smallSecondLine.removeClass('search_hover_second_over').addClass('search_hover_second');
        jQuery('.search_block').toggleClass('display_n fadeInUp fadeOutDown');
        jQuery('.sale_wrapper').toggleClass('display_n');
        jQuery('body').toggleClass('overflow_h');
    });

    jQuery('.close_search').click(function(){

        jQuery('.search .fa-search').toggleClass('display_ib');
        jQuery('.small').toggleClass('display_ib');
        smallFirstLine.removeClass('search_hover_first').addClass('search_hover_first_over');
        smallSecondLine.removeClass('search_hover_second').addClass('search_hover_second_over');
        jQuery('.search_block').toggleClass('display_n fadeInUp fadeOutDown');
        jQuery('.sale_wrapper').removeClass('display_n');
        jQuery('body').removeClass('overflow_h');
    });

    jQuery('.close_search, .top_wrapper, .close_popup, .quick_view_close, .close_popup_add,' +
        ' .zoom_img_close').hover(function(){

        jQuery(this).find(firstLine).removeClass('search_hover_first_over').addClass('search_hover_first');
        jQuery(this).find(secondLine).removeClass('search_hover_second_over').addClass('search_hover_second');

    },function(){

        jQuery(this).find(firstLine).removeClass('search_hover_first').addClass('search_hover_first_over');
        jQuery(this).find(secondLine).removeClass('search_hover_second').addClass('search_hover_second_over');
    });

                                                                        /*delay*/

    function delay(){
        jQuery('.popup_login').addClass('display_n');
        jQuery('.popup_register_left, .popup_register_right, .popup_lost_password').css('display', 'none');
        jQuery('.popup_login_left, .popup_login_right').css('display', 'block');
    }

    function delay_quick_view(){
        jQuery('.popup_quick_view').addClass('display_n');
    }

    function delay_add(){
        jQuery('.popup_add').addClass('display_n');
    }

    function delay_subscription(){
        jQuery('.popup_subscription').addClass('display_n');
    }

                                                                /*popup_login*/

    jQuery('.login_register').click(function(){
        jQuery('.popup_login').removeClass('display_n');
        jQuery('.popup_login').toggleClass('popup_slide_up popup_slide_down');
        jQuery('.login_shadow').fadeIn(300);

        jQuery(document).mouseup(function (e) {
            var popup_card = jQuery(".popup_login");
            if (!jQuery('.login_register').is(e.target) && !popup_card.is(e.target) && popup_card.has(e.target).length == 0) {
                popup_card.removeClass('popup_slide_up').addClass('popup_slide_down');
                jQuery('.login_shadow').fadeOut(300);
                setTimeout(delay,300);
            }
        });
    });

                                                                    /*popup exit*/

    jQuery('.close_popup').click(function(){
        jQuery('.popup_login').toggleClass('popup_slide_up popup_slide_down');
        jQuery('.login_shadow').fadeOut(300);
        setTimeout(delay,300);

    });

    jQuery('.quick_view_close').click(function() {
        jQuery('.popup_quick_view').toggleClass('popup_slide_up popup_slide_down');
        jQuery('.quick_view_shadow').fadeOut(300);
        setTimeout(delay_quick_view,300);
    });

    jQuery('.close_popup_add, .popup_add_close').click(function() {
        jQuery('.popup_add').toggleClass('popup_slide_up popup_slide_down');
        jQuery('.add_shadow').fadeOut(300);
        setTimeout(delay_add,300);
    });

                                                                        /*password switch*/

    jQuery('.button_input_reset').click(function(){
        reset_val = 0;
        checkout_reset_val = 0;

        var reset_val = jQuery('.popup_lost_password .default .login_input').val();
        var checkout_reset_val = jQuery('.popup_lost_password .default .checkout_reset').val();
        console.log(reset_val);

        if (reset_val != 0) {
            jQuery('.popup_login .error').css('display', 'none');
            jQuery('.popup_login .default').css('display', 'none');
            jQuery('.popup_login .success_send').fadeIn(300);
        }

        else {
            jQuery('.popup_login .error').fadeIn();
        }

        if (checkout_reset_val != 0) {
            jQuery('.question_container .error').css('display', 'none');
            jQuery('.question_container .default').css('display', 'none');
            jQuery('.question_container .success_send').fadeIn(300);
        }

        else {
            jQuery('.question_container .error').fadeIn();
        }
    });

                                                                            //blog scale image

    jQuery('.img_container').hover(function(){
        console.log('1111');
        jQuery('.baka', this).css('transform', 'scale(1.2)');
        jQuery('.img_container_shadow', this).css('opacity', '1');
    },
        function() {
            jQuery('.baka', this).css('transform', 'scale(1)');
            jQuery('.img_container_shadow', this).css('opacity', '0');
        });

                                                                            //radio_button

    jQuery('.forminpast label').click(function(){
        jQuery('.forminpast label').removeClass('active_label');
        jQuery(this).toggleClass('active_label');
    });


                                                                        /*login-register switch*/

    jQuery('.login_button').click(function(){
        jQuery('.popup_login_left, .popup_login_right').css('display', 'none');
        jQuery('.popup_register_left, .popup_register_right').fadeIn(300);
    });

    jQuery('.register_button').click(function(){
        jQuery('.popup_register_left, .popup_register_right').css('display', 'none');
        jQuery('.popup_login_left, .popup_login_right').fadeIn(300);
    });

    jQuery('.butter_right').click(function(){
        jQuery('.popup_login_left, .popup_login_right, .popup_register_left, .popup_register_right, .success_send, .error').css('display', 'none');
        jQuery('.popup_lost_password .default').fadeIn(300);
        jQuery('.popup_lost_password').fadeIn(300);
    });

                                                                        /*card*/

    jQuery('.top_wrapper').click(function(){
        jQuery('.active_part').removeClass('card_slide_left').addClass('card_slide_right');
        jQuery('.card_block').fadeOut(300);
    });

    jQuery('.basket').on('click', function(){
        jQuery('.active_part').removeClass('card_slide_right').addClass('card_slide_left');
        jQuery('.card_block').fadeIn(300);

        jQuery(document).mouseup(function (e) {
            var popup_card = jQuery(".active_part");
            if (!popup_card.is(e.target) && popup_card.has(e.target).length == 0) {
                popup_card.removeClass('card_slide_left').addClass('card_slide_right');
                jQuery('.card_block').fadeOut(300);
            }
        });
    });
                                                                    /*close card item*/

    jQuery('.close_card_item').click(function(){
        jQuery(this).parent().fadeOut();
    });

                                                                    /*sale */

    //function saleShow() {
    //    jQuery('.sale').fadeIn();
    //}
    //
    //setTimeout(saleShow,10000);

    jQuery('.sale').on('click', function(){
        jQuery('.sale_wrapper').toggleClass('card_slide_left_sale card_slide_right_sale');
        //jQuery('.sale_container').toggleClass('card_slide_right card_slide_left');

        jQuery(document).mouseup(function (e) {
            var popup_sale_container = jQuery(".sale_wrapper");
            var popup_sale = jQuery(".sale");
            if (!popup_sale.is(e.target) && !popup_sale_container.is(e.target) && popup_sale_container.has(e.target).length == 0) {
                popup_sale_container.removeClass('card_slide_left').addClass('card_slide_right');
                //popup_sale.removeClass('sale_slide_left').addClass('sale_slide_right');
            }
        });
    });

                                                                    /*popup_subscription*/

    jQuery('.right_banner_block .button_submit').on('click', function() {

        var subs_val = jQuery('.banner_block input').val();

        if (subs_val != 0 ) {
            jQuery('.popup_subscription').removeClass('display_n');
            jQuery('.popup_subscription').toggleClass('popup_slide_up popup_slide_down');
            jQuery('.add_shadow').fadeIn(300);

            jQuery(document).mouseup(function (e) {
                var popup_subs = jQuery(".popup_subscription");
                if (!jQuery('.right_banner_block .button_submit').is(e.target) &&
                    !popup_subs.is(e.target) && popup_subs.has(e.target).length == 0) {
                    popup_subs.removeClass('popup_slide_up').addClass('popup_slide_down');
                    jQuery('.add_shadow').fadeOut(300);
                    setTimeout(delay_subscription,300);
                }
            });

        }
    });


                                                                    /*popup_add*/

    jQuery('.hidden_price').on('click', function() {
        jQuery('.popup_add').removeClass('display_n');
        jQuery('.popup_add').toggleClass('popup_slide_up popup_slide_down');
        jQuery('.add_shadow').fadeIn(300);

        jQuery(document).mouseup(function (e) {
            var popup_add = jQuery(".popup_add");
            if (!jQuery('.buy_enjoy').is(e.target) &&
                !jQuery('.hidden_price').is(e.target) &&
                !jQuery('.fa-shopping-cart').is(e.target) &&
                !popup_add.is(e.target) && popup_add.has(e.target).length == 0) {
                popup_add.removeClass('popup_slide_up').addClass('popup_slide_down');
                jQuery('.add_shadow').fadeOut(300);
                setTimeout(delay_add,300);
            }
        });
    });

                                                                    /*popup_quick_view*/

    jQuery('.hidden_hover .fa-search-plus').on('click', function() {
        jQuery('.popup_quick_view').removeClass('display_n');
        jQuery('.popup_quick_view').toggleClass('popup_slide_up popup_slide_down');
        jQuery('.quick_view_shadow').fadeIn(300);

        jQuery(document).mouseup(function (e) {
            var popup_quick = jQuery(".popup_quick_view");
            if (!jQuery('.hidden_hover .fa-search-plus').is(e.target) && !popup_quick.is(e.target) && popup_quick.has(e.target).length == 0) {
                popup_quick.removeClass('popup_slide_up').addClass('popup_slide_down');
                jQuery('.quick_view_shadow').fadeOut(300);
                setTimeout(delay_quick_view,300);
            }
        });
    });

                                                                    /*quick_view_popup slider*/

    var popupSliderItems = jQuery('.popup_quick_view_left ul').children('li');
    var popupSliderItemsLength = popupSliderItems.length;
    var popupSliderItemsCounter = 0;

    jQuery('.popup_quick_view .fa-angle-right').click(function(){
        popupSliderItems.removeClass('display_b');

        if (popupSliderItemsCounter > popupSliderItemsLength-2) {
            popupSliderItemsCounter = -1;
        }

        jQuery(popupSliderItems[++popupSliderItemsCounter]).addClass('display_b');
    });

    jQuery('.popup_quick_view .fa-angle-left').click(function(){
        popupSliderItems.removeClass('display_b');

        if (popupSliderItemsCounter < 1) {
            popupSliderItemsCounter = popupSliderItemsLength;
        }

        jQuery(popupSliderItems[--popupSliderItemsCounter]).addClass('display_b');


    });

                                                                    /*next-prev slider*/
    next.click(function(){
        counter++;
        if (counter == slideLength){
            counter = 0;
            jQuery(slide[slideLength-1]).animate({'opacity': 0}, 1000);
        }

        animateNext();

        if (counter == 0){
            jQuery(slide[slideLength-2]).find('.slide_img').removeClass('scale_slide');
        }

        if (counter == 1){
            jQuery(slide[slideLength-1]).find('.slide_img').removeClass('scale_slide');
        }
        jQuery(slide[counter-2]).find('.slide_img').removeClass('scale_slide');
        jQuery(slide[counter-1]).animate({'opacity': 0}, 1000);
        jQuery(slide[counter]).animate({'opacity': 1}, 800);
        backgroundChange();
    });

    prev.click(function(){
        counter--;
        if (counter < 0){
            counter = slideLength-1;
            jQuery(slide[0]).animate({'opacity': 0}, 1000);
        }

        animateNext();

        if (counter == slideLength-1){
            jQuery(slide[1]).find('.slide_img').removeClass('scale_slide');
        }

        if (counter == slideLength-2){
            jQuery(slide[0]).find('.slide_img').removeClass('scale_slide');
        }
        jQuery(slide[counter+2]).find('.slide_img').removeClass('scale_slide');
        jQuery(slide[counter+1]).animate({'opacity': 0}, 1000);
        jQuery(slide[counter]).animate({'opacity': 1}, 800);
        backgroundChange();
    });


                                                                        /*carousel*/

    $(".carousel_video_product").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        cssEase: 'ease-out',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    infinite: true
                }
            }
        ]
    });

    $(".item_slider").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        cssEase: 'ease-out',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    infinite: true
                }
            }
        ]
    });

    $(".model_photo_carousel").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        cssEase: 'ease-out',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    infinite: true
                }
            }
        ]
    });

    //add to card
    function delayCloseAttention() {
        jQuery('.attention').fadeOut(200);
    }

    //link delay
    function delayHref() {
        jQuery('.wishlist_hover').attr('href', 'wishlist.html');
        jQuery('.wishlist_hover').css('color', '#D4364C');
        jQuery('.like .fa-heart').css('color', '#D4364C');
        jQuery('.like .fa-heart').css('opacity', '1');
    }

    //in model cart
    jQuery('.photo_model_cart_content .button_input_login').click(function(){
        jQuery('.attention').fadeIn(300);
        setTimeout(delayCloseAttention, 10000);
    });

    //in wishlist
    jQuery('.button_td .button').click(function(){
        jQuery('.attention').fadeIn(300);
        setTimeout(delayCloseAttention, 10000);
    });

    //checkout
    jQuery('.question>span').click(function(){
       jQuery(this).parent().next().slideToggle();
    });
    //in checkout
    jQuery('.remember_bottom a').click(function(){
        jQuery(this).parent().parent().next().slideToggle();
        return false;
    });

    //var list = jQuery('.item_slider').find('.item_slider_list');
    //var items = jQuery(".item_slider_list").find('.carusel_item');
    //var slides = jQuery('.item_slider_list').children('.carusel_item');
    //var slide_width = items.outerWidth()+20;
    //var carusel_width = slide_width;
    //
    //items.each(function () {
    //    carusel_width += jQuery(this).outerWidth();
    //});
    //
    //jQuery('.item_slider_list').css('width', carusel_width + 'px');
    //
    //var pixelsOffset = slide_width;
    //var currentLeftValue = 0;
    //var elementsCount = jQuery('.item_slider_list').find('.carusel_item').length;
    //var minimumOffset = -((elementsCount - 3) * pixelsOffset);
    //var maximumOffset = 0;
    //
    //jQuery(".arrow_prev_carousel").click(function () {
    //    if (currentLeftValue != maximumOffset) {
    //        currentLeftValue += slide_width;
    //        jQuery('.item_slider_list').animate({left: currentLeftValue + "px"}, 300);
    //    }
    //});
    //
    //jQuery(".arrow_next_carousel").click(function () {
    //    if (currentLeftValue != minimumOffset) {
    //        currentLeftValue -= slide_width;
    //        jQuery('.item_slider_list').animate({left: currentLeftValue + "px"}, 300);
    //    }
    //});

                                                            //image source replace

    var mainImageSrc = jQuery('.video_main .slick-track .carousel_picture:nth-child(4) img').attr('src');
    var pictureArrayForReplace = [];
    var pictureArrayForAssociation = jQuery('.carousel_video_product .carousel_picture img').get();
    var imgCounter = 0;
    var index = 3;

    jQuery('.video_carousel_img img').attr('src', mainImageSrc);

    jQuery(pictureArrayForAssociation).click(function(){
        var imageSrc = jQuery(this).attr('src');
        index = jQuery(pictureArrayForAssociation).index(this);
        jQuery('.video_carousel_img img').attr('src', imageSrc);
    });

                                                            //images zoom

    //for video cart

    jQuery('.carousel_video_product .carousel_picture img').each(function(){
        pictureArrayForReplace[imgCounter] = jQuery(this);
        var cloneImgSrc = pictureArrayForReplace[imgCounter].attr('src');
        jQuery('.zoom_img_big').append('<div><img src=' +cloneImgSrc+ ' alt=""></div>');
        imgCounter++;
    });

    jQuery('.photo_model_cart_content .new_container .left_side .video_carousel_img>img').click(function(){

        var lastArrayForVideo = jQuery('.zoom_img_big').children('div');

        var i = index;
        var next = jQuery('.zoom_img_big .next');
        var prev = jQuery('.zoom_img_big .prev');

        jQuery(lastArrayForVideo).removeClass('display_b');
        jQuery(lastArrayForVideo[i]).addClass('display_b');
        jQuery('.image_zoom_shadow').fadeIn(300);
        jQuery('.wrapper_zoom_img_big').css('display', 'block');

        jQuery('.zoom_img_big .next').click(function(){
            jQuery(lastArrayForVideo).removeClass('display_b');

            if (i>lastArrayForVideo.length-2) {
                i = -1;
            }
                jQuery(lastArrayForVideo[++i]).addClass('display_b');
            console.log(jQuery(lastArrayForVideo[i]));

        });

        jQuery('.zoom_img_big .prev').click(function(){
            i--;
            jQuery(lastArrayForVideo).removeClass('display_b');

            if (i<1) {
                i = lastArrayForVideo.length;
            }
                jQuery(lastArrayForVideo[--i]).addClass('display_b');
                console.log(jQuery(lastArrayForVideo[i]));

        });

        //$(".zoom_img_big").slick({
        //    dots: false,
        //    infinite: true,
        //    centerMode: false,
        //    cssEase: 'ease-out',
        //    initialSlide: index,
        //    slidesToShow: 1,
        //    slidesToScroll: 1
        //});

        jQuery(document).mouseup(function (e) {
            var popup_zoom = jQuery(".wrapper_zoom_img_big");
            if (!popup_zoom.is(e.target) && popup_zoom.has(e.target).length == 0) {
                popup_zoom.fadeOut(300);
                jQuery('.image_zoom_shadow').fadeOut(300);
            }
        });
    });

    //for photo_cart

    jQuery('.photo_model_cart_content .new_container .left_side>img').click(function(){
        var bigImg = jQuery(this).attr('src');
        jQuery('main').append('<div class="zoom_img_big_picture"><img src='+bigImg+' alt=""></div>');
        jQuery('.image_zoom_shadow').fadeIn(300);
        jQuery('.zoom_img_big_picture').fadeIn(300);

        jQuery(document).mouseup(function (e) {
            var popup_zoom = jQuery(".zoom_img_big_picture");
            if (!jQuery('.zoom_img_close').is(e.target) && !popup_zoom.is(e.target) && popup_zoom.has(e.target).length == 0) {
                popup_zoom.fadeOut(300);
                jQuery('.image_zoom_shadow').fadeOut(300);
                jQuery('.zoom_img_big_picture').remove();
            }
        });
    });

                                                            //hover menu_list

    jQuery('.left_header .menu > li:nth-child(3)').hover( function() {

        jQuery('.menu_list').fadeIn(300);
        jQuery('.menu_list').addClass('active_menu');
    }, function() {
        jQuery('.menu_list').css('display', 'none');
        jQuery('.menu_list').removeClass('active_menu');
    });

    jQuery('.footer_menu .menu > li:nth-child(3)').hover( function() {

        jQuery('.footer_menu_position').fadeIn(300);
        jQuery('.footer_menu_position').addClass('active_menu_footer');
    }, function() {
        jQuery('.footer_menu_position').css('display', 'none');
        jQuery('.footer_menu_position').removeClass('active_menu_footer');
    });

                                                                    //tabs

    var tabsButton = jQuery('.nav_tabs ul').children('li');
    var tabsBlock = jQuery('.nav_blocks ul').children('li');

    jQuery('.nav_tabs ul li').click(function(){
        var i = jQuery(this).index();
        jQuery(tabsButton).removeClass('active_tab');
        jQuery(this).addClass('active_tab');
        jQuery(tabsBlock).removeClass('display_b animated_fadeInLeft fadeInLeft');
        jQuery(tabsBlock[i]).addClass('display_b animated_fadeInLeft fadeInLeft')
    });

                                                                    //lift

    jQuery('#scrollup').click(function(){
        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);
    });

    jQuery(window).scroll(function(){
        if (jQuery(document).scrollTop()>600) {
            jQuery('#scrollup').fadeIn('500');
        }else{
            jQuery('#scrollup').fadeOut('500');
        }
    });

                                                            /*pagination*/

    jQuery('.pagination ul li').click(function(){
        jQuery('.pagination ul li').removeClass('active_page');
       jQuery(this).addClass('active_page');
    });

                                                            //hover menu image
    var imageSrcMenu;
    var defaultSrcImage = jQuery('.hidden_menu_picture').attr('src');

    jQuery('.menu_item').hover( function() {
        imageSrcMenu = jQuery(this).find('.hidden_picture').attr('src');
        jQuery(this).addClass('active');
        jQuery('.hidden_menu_picture').attr('src', imageSrcMenu);
    }, function() {
        jQuery(this).removeClass('active');
        //jQuery('.hidden_menu_picture').attr('src', defaultSrcImage);
    });

                                                            //filter

    jQuery('.filter').click(function(){
        jQuery(this).toggleClass('filter_open');
        jQuery(this).parent().parent().next().slideToggle();
    });

                                                            //blog animation

    var figureArray = jQuery('.figure_block').children('figure');
    var figureShowBlock = 6;
    var figureCounter = 0;

    for (figureCounter;figureCounter<figureShowBlock;figureCounter++) {
        jQuery(figureArray[figureCounter]).addClass('display_b animated_fadeInLeft zoomIn');
    }

    jQuery('.figure_button').click(function(){
        figureShowBlock+=6;
        console.log(figureShowBlock);
        console.log(figureCounter);
        for (figureCounter;figureCounter<figureShowBlock;figureCounter++) {
            jQuery(figureArray[figureCounter]).addClass('display_b animated_fadeInLeft zoomIn');
        }
    });

                                                                //fixed menu

    var scroll = jQuery(window).scrollTop();
    if (scroll > 0) {
        jQuery('.header_static').css('display', 'block');
        jQuery('header').addClass('fixed');
        jQuery('.search_block').css('top', '80px');
    }

    jQuery(window).scroll(function(){
        scroll = jQuery(window).scrollTop();
        if (scroll > 0) {
            jQuery('.header_static').css('display', 'block');
            jQuery('header').addClass('fixed');
            jQuery('.search_block').css('top', '80px');
        }
        else {
            jQuery('.header_static').css('display', 'none');
            jQuery('header').removeClass('fixed');
            jQuery('.search_block').css('top', '99px');
        }

    });

                                                                /*read_more*/

    //var checker = jQuery('div').is('.blog_text');
    //var text = jQuery('.blog_text');
    //var more = jQuery(".read_more");
    //var less = jQuery(".read_less");
    //
    //if (checker == true) {
    //
    //    var height_auto = [];
    //    var i = 0;
    //
    //    var lineheight = text.css('line-height').replace("px", "");
    //    var five_lines = lineheight*4;
    //
    //    text.each(function(){
    //        height_auto[i] = jQuery(this).height();
    //        console.log(height_auto[i]+"___");
    //        console.log(text.height()+'+++');
    //
    //        if (height_auto[i] == five_lines) {
    //            console.log('uraa');
    //            jQuery(this).next().css('display', 'none');
    //        }
    //
    //        i++;
    //    });
    //
    //    text.css('height', five_lines);
    //
    //    more.click(function () {
    //        var i = jQuery(this).prev(text).index('.blog_text');
    //        jQuery(this).prev(text).animate({height: height_auto[i]}, 400);
    //        jQuery(this).css('display', 'none');
    //        jQuery(this).next(less).css('display', 'inline-block');
    //    });
    //
    //    less.click(function () {
    //        jQuery(this).prev(more).prev(text).animate({height: five_lines}, 300);
    //        jQuery(this).prev(more).css('display', 'inline-block');
    //        jQuery(this).css('display', 'none');
    //
    //    });
    //}

                                                                //follow_slider

    var followSlide = jQuery('.follow_left').children('.pointer_slide');

    followSlide.each(function(){
        if (this == followSlide[0] ){
            jQuery('.navigation').append('<div class="dot active_dot"></div>');
        }
        else {
            jQuery('.navigation').append('<div class="dot"></div>');
        }
    });
    var dot = jQuery('.navigation').children('.dot');
    var navigationWidth = jQuery('.navigation').width();
    jQuery('.navigation').css('margin-left', -navigationWidth/2 + 'px');

                                                                //follow_slider navigation position

    //function navigationPosition() {
    //    var pointerSlideHeight = jQuery('.follow_left .display_b').height();
    //    console.log(pointerSlideHeight);
    //    jQuery('.navigation').css('top', 20+pointerSlideHeight + 'px');
    //}
    //
    //navigationPosition();

                                                                //follow_slider dots

    jQuery('.dot').on('click', function(){
        dot.removeClass('active_dot');
        followSlide.removeClass('animated_fadeInLeft display_b fadeInLeft');
        jQuery(this).addClass('active_dot');
        var dotCounter = jQuery(this).index();
        jQuery(followSlide[dotCounter]).addClass('animated_fadeInLeft display_b fadeInLeft');
        //navigationPosition();
    });

                                                                /*mobile_menu*/

    //var mobileList = jQuery('.menu_mobile_list');
    //
    //var mobileListHeight = mobileList.height();

    jQuery('.icon-sub-menu').click(function(){
        jQuery(this).toggleClass('mobile_up mobile_down mobile_up_reverse mobile_down_reverse');
        jQuery(this).next().slideToggle('fast');
        jQuery('.menu_mobile>li:nth-child(2)>a').toggleClass('current-menu-item');
    });

    jQuery('.menu_mobile>li:nth-child(2)>a').click(function(){
        jQuery(this).next().toggleClass('mobile_up mobile_down mobile_up_reverse mobile_down_reverse');
        jQuery(this).next().next().slideToggle('fast');
        jQuery(this).toggleClass('current-menu-item');
        return false;
    });

                                                                //link none-default

    jQuery('.menu>li:nth-child(3)>a').click(function(){
        return false;
    });

                                                                //whishlist click

    jQuery('.wishlist_hover').click(function(){
        jQuery('.point_text',this).text('Browse Wishlist');
        setTimeout(delayHref,500);
    });

                                                                //picture hover

    jQuery('.carousel_picture .hidden_hover i').hover(function(){
        jQuery(this).prev().addClass('opacity');
    }, function(){
        jQuery(this).prev().removeClass('opacity');
    });

    jQuery('.models .hidden_hover i, .video_container .hidden_hover i').hover(function(){
        jQuery(this).prev().addClass('opacity');
    }, function(){
        jQuery(this).prev().removeClass('opacity');
    });

                                                                //close item wishlist

    jQuery('.wishlist_block .close .close_animation_card').click(function(){
        jQuery(this).parent().parent().fadeOut();
    });

                                                                //close item cart

    jQuery('.content_cart .wishlist_block .close_animation_card').click(function(){
        jQuery(this).parent().parent().addClass('mark');
        jQuery(this).parent().parent().fadeOut();
        jQuery('.attention').fadeIn(300);
        //setTimeout(delayCloseAttention, 10000);
    });

    jQuery('.undo').click(function(){
        jQuery('.mark').fadeIn();
    });

                                                                    //checkout

    jQuery('.checkout_table .close_animation_card, .wishlist_item .close_animation_card').hover(function(){

        jQuery(this).find('.first_line').removeClass('search_hover_first').addClass('search_hover_first_over');
        jQuery(this).find('.second_line').removeClass('search_hover_second').addClass('search_hover_second_over');

    },function(){

        jQuery(this).find('.first_line').removeClass('search_hover_first_over').addClass('search_hover_first');
        jQuery(this).find('.second_line').removeClass('search_hover_second_over').addClass('search_hover_second');
    });

    jQuery('.checkout_table .close_animation_card').click(function(){
        jQuery(this).parent().parent().fadeOut();
    });

                                                                //account

    jQuery('.left_account ul li').click(function(){
        jQuery('.left_account ul li').removeClass('active_account');
        jQuery(this).addClass('active_account');
    });

                                                                //load_more_page

    //var figureBlock = jQuery('.news').children('.figure_block');
    //var figureCounter = 0;
    ////var BlockCounter = 0;
    //var figureNumber = 1;
    //
    //jQuery('figure').each(function() {
    //
    //    if (figureCounter >= figureNumber) {
    //        jQuery(figureBlock[figureCounter]).css('display', 'none');
    //    }
    //    else {
    //        jQuery(figureBlock[figureCounter]).css('display', 'block');
    //    }
    //
    //    figureCounter++;
    //});
    //
    //figureCounter = 1;
    //
    //jQuery('.figure_button').click(function(){
    //    jQuery(figureBlock[figureCounter++]).addClass('display_b animated_fadeInLeft fadeInRight');
    //});

});                                                        /*timer for slider*/

var run = setInterval('rotate()', 10000);

jQuery('.slider').hover(
    function() {
        clearInterval(run);
    },
    function() {
        run = setInterval('rotate()', 10000);
    }
);

                                                            /*timer run*/

function rotate() {
    next.click();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgU0VPIG9uIDAyLjA5LjIwMTYuXHJcbiAqL1xyXG5cclxudmFyIG5leHQgPSBqUXVlcnkoJy5hcnJvd19iYWNrZ3JvdW5kX25leHQnKTtcclxudmFyIHByZXYgPSBqUXVlcnkoJy5hcnJvd19iYWNrZ3JvdW5kX3ByZXYnKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaW1nID0galF1ZXJ5KCcuc2xpZGVfaW1nJyk7XHJcbiAgICB2YXIgc2xpZGVyID0galF1ZXJ5KCcuc2xpZGVyJyk7XHJcbiAgICB2YXIgc2xpZGVDb250ZW50ID0galF1ZXJ5KCcuc2xpZGVfY29udGVudCcpO1xyXG4gICAgdmFyIGltZ0hlaWdodCA9IGltZy5oZWlnaHQoKTtcclxuICAgIHZhciBzbGlkZUNvbnRlbnRXaWR0aCA9IHNsaWRlQ29udGVudC53aWR0aCgpO1xyXG4gICAgdmFyIHNsaWRlQ29udGVudEhlaWdodCA9IHNsaWRlQ29udGVudC5oZWlnaHQoKTtcclxuICAgIHZhciBzbGlkZSA9IHNsaWRlci5jaGlsZHJlbignLnNsaWRlJykuZmluZCgnLnNsaWRlX3dyYXBwZXInKTtcclxuICAgIHZhciBzbGlkZUxlbmd0aCA9IHNsaWRlLmxlbmd0aDtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAvKnNsaWRlcl9jb250ZW50IGFuaW1hdGlvbiovXHJcblxyXG4gICAgdmFyIG1vZGVsID0galF1ZXJ5KCcubW9kZWwnKTtcclxuICAgIHZhciBtb2RlbE5hbWUgPSBqUXVlcnkoJy5tb2RlbF9uYW1lJyk7XHJcbiAgICB2YXIgbW9kZWxEZXNjcmlwdGlvbiA9IGpRdWVyeSgnLm1vZGVsX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU5leHQoKSB7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5maW5kKCcuc2xpZGVfaW1nJykuYWRkQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgc2xpZGVDb250ZW50LnJlbW92ZUNsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICAgICAgc2xpZGVDb250ZW50LnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlcl0pLnByZXYoc2xpZGVDb250ZW50KS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5wcmV2KHNsaWRlQ29udGVudCkuYWRkQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgICAgICBtb2RlbE5hbWUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluTGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkucHJldigpLmZpbmQobW9kZWxOYW1lKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5MZWZ0Jyk7XHJcbiAgICAgICAgbW9kZWwucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluRG93bicpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkucHJldigpLmZpbmQobW9kZWwpLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJbkRvd24nKTtcclxuICAgICAgICBtb2RlbERlc2NyaXB0aW9uLnJlbW92ZUNsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJblVwJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5wcmV2KCkuZmluZChtb2RlbERlc2NyaXB0aW9uKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5VcCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypzbGlkZXJfY29udGVudCBjZW50ZXIgcG9zaXRpb24qL1xyXG5cclxuICAgIHNsaWRlci5jc3MoJ2hlaWdodCcsIGltZ0hlaWdodCArICdweCcpO1xyXG4gICAgc2xpZGVDb250ZW50LmNzcygnbWFyZ2luLWxlZnQnLCAtc2xpZGVDb250ZW50V2lkdGgvMiArICdweCcpO1xyXG4gICAgc2xpZGVDb250ZW50LmNzcygnbWFyZ2luLXRvcCcsIC1zbGlkZUNvbnRlbnRIZWlnaHQvMiArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21lbnUgaGlkZVxyXG5cclxuICAgIGpRdWVyeSgnLmJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX25hdicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5X24nKS50b2dnbGVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0IGNhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfc2hhZG93JykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfY2FyZCA9IGpRdWVyeShcIi5tb2JpbGVfbmF2XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwX2NhcmQuaXMoZS50YXJnZXQpICYmIHBvcHVwX2NhcmQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfY2FyZC5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9yaWdodCcpLmFkZENsYXNzKCdjYXJkX3NsaWRlX2xlZnQnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vZnVuY3Rpb24gbWVudUhpZGUoKSB7XHJcbiAgICAvLyAgICBpZiAod2luZG93V2lkdGggPD0gMTEyMCkge1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSgnaGVhZGVyIC5sZWZ0X2hlYWRlcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICBqUXVlcnkoJ2hlYWRlciAubGVmdF9oZWFkZXInKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL31cclxuICAgIC8vXHJcbiAgICAvL21lbnVIaWRlKCk7XHJcblxyXG4gICAgdmFyIHdpbmRvd1dpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnJlc2l6ZSBmdW5jdGlvbiovXHJcblxyXG5qUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgIHNsaWRlQ29udGVudEhlaWdodCA9IHNsaWRlQ29udGVudC5oZWlnaHQoKTtcclxuICAgIHdpbmRvd1dpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKTtcclxuICAgIGltZy5jc3MoJ3dpZHRoJywgd2luZG93V2lkdGggKyAncHgnKTtcclxuICAgIGltZ0hlaWdodCA9IGltZy5oZWlnaHQoKTtcclxuICAgIHNsaWRlci5jc3MoJ2hlaWdodCcsIGltZ0hlaWdodCArICdweCcpO1xyXG4gICAgLy9tZW51SGlkZSgpO1xyXG4gICAgLy9uYXZpZ2F0aW9uUG9zaXRpb24oKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBiYWNrZ3JvdW5kQ2hhbmdlKCkge1xyXG4gICAgdmFyIGJhY2tncm91bmROZXh0O1xyXG5cclxuICAgIGlmIChjb3VudGVyID09IHNsaWRlTGVuZ3RoLTEpe1xyXG4gICAgICAgIGJhY2tncm91bmROZXh0ID0galF1ZXJ5KHNsaWRlWzBdKS5maW5kKCcuc2xpZGVfaW1nJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgbmV4dC5jc3MoJ2JhY2tncm91bmQnLCAndXJsKCcrIGJhY2tncm91bmROZXh0ICsnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcicpO1xyXG4gICAgICAgIG5leHQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kTmV4dCA9IGpRdWVyeShzbGlkZVtjb3VudGVyKzFdKS5maW5kKCcuc2xpZGVfaW1nJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgbmV4dC5jc3MoJ2JhY2tncm91bmQnLCAndXJsKCcrIGJhY2tncm91bmROZXh0ICsnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcicpO1xyXG4gICAgICAgIG5leHQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY291bnRlciA9PSAwKXtcclxuICAgICAgICBiYWNrZ3JvdW5kTmV4dCA9IGpRdWVyeShzbGlkZVtzbGlkZUxlbmd0aC0xXSkuZmluZCgnLnNsaWRlX2ltZycpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIHByZXYuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybCgnKyBiYWNrZ3JvdW5kTmV4dCArJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInKTtcclxuICAgICAgICBwcmV2LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZE5leHQgPSBqUXVlcnkoc2xpZGVbY291bnRlci0xXSkuZmluZCgnLnNsaWRlX2ltZycpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIHByZXYuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybCgnKyBiYWNrZ3JvdW5kTmV4dCArJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInKTtcclxuICAgICAgICBwcmV2LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5iYWNrZ3JvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWFyY2hcclxuXHJcbiAgICB2YXIgZmlyc3RMaW5lID0galF1ZXJ5KCcuZmlyc3RfbGluZScpO1xyXG4gICAgdmFyIHNlY29uZExpbmUgPSBqUXVlcnkoJy5zZWNvbmRfbGluZScpO1xyXG4gICAgdmFyIHNtYWxsRmlyc3RMaW5lID0galF1ZXJ5KCcuZmlyc3RfbGluZV9zbWFsbCcpO1xyXG4gICAgdmFyIHNtYWxsU2Vjb25kTGluZSA9IGpRdWVyeSgnLnNlY29uZF9saW5lX3NtYWxsJyk7XHJcblxyXG4gICAgalF1ZXJ5KCcuc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcuc2VhcmNoIC5mYS1zZWFyY2gnKS50b2dnbGVDbGFzcygnZGlzcGxheV9pYicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNtYWxsJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfaWInKTtcclxuICAgICAgICBzbWFsbEZpcnN0TGluZS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0X292ZXInKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0Jyk7XHJcbiAgICAgICAgc21hbGxTZWNvbmRMaW5lLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kX292ZXInKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNlYXJjaF9ibG9jaycpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X24gZmFkZUluVXAgZmFkZU91dERvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5zYWxlX3dyYXBwZXInKS50b2dnbGVDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5JykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93X2gnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmNsb3NlX3NlYXJjaCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnNlYXJjaCAuZmEtc2VhcmNoJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfaWInKTtcclxuICAgICAgICBqUXVlcnkoJy5zbWFsbCcpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X2liJyk7XHJcbiAgICAgICAgc21hbGxGaXJzdExpbmUucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpO1xyXG4gICAgICAgIHNtYWxsU2Vjb25kTGluZS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZCcpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kX292ZXInKTtcclxuICAgICAgICBqUXVlcnkoJy5zZWFyY2hfYmxvY2snKS50b2dnbGVDbGFzcygnZGlzcGxheV9uIGZhZGVJblVwIGZhZGVPdXREb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2FsZV93cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnYm9keScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvd19oJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5jbG9zZV9zZWFyY2gsIC50b3Bfd3JhcHBlciwgLmNsb3NlX3BvcHVwLCAucXVpY2tfdmlld19jbG9zZSwgLmNsb3NlX3BvcHVwX2FkZCwnICtcclxuICAgICAgICAnIC56b29tX2ltZ19jbG9zZScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKGZpcnN0TGluZSkucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKHNlY29uZExpbmUpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kX292ZXInKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZCcpO1xyXG5cclxuICAgIH0sZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoZmlyc3RMaW5lKS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0JykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdF9vdmVyJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoc2Vjb25kTGluZSkucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qZGVsYXkqL1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGF5KCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW4nKS5hZGRDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfcmVnaXN0ZXJfbGVmdCwgLnBvcHVwX3JlZ2lzdGVyX3JpZ2h0LCAucG9wdXBfbG9zdF9wYXNzd29yZCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW5fbGVmdCwgLnBvcHVwX2xvZ2luX3JpZ2h0JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsYXlfcXVpY2tfdmlldygpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXcnKS5hZGRDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsYXlfYWRkKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfYWRkJykuYWRkQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGF5X3N1YnNjcmlwdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3N1YnNjcmlwdGlvbicpLmFkZENsYXNzKCdkaXNwbGF5X24nKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBvcHVwX2xvZ2luKi9cclxuXHJcbiAgICBqUXVlcnkoJy5sb2dpbl9yZWdpc3RlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW4nKS5yZW1vdmVDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW4nKS50b2dnbGVDbGFzcygncG9wdXBfc2xpZGVfdXAgcG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmxvZ2luX3NoYWRvdycpLmZhZGVJbigzMDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX2NhcmQgPSBqUXVlcnkoXCIucG9wdXBfbG9naW5cIik7XHJcbiAgICAgICAgICAgIGlmICghalF1ZXJ5KCcubG9naW5fcmVnaXN0ZXInKS5pcyhlLnRhcmdldCkgJiYgIXBvcHVwX2NhcmQuaXMoZS50YXJnZXQpICYmIHBvcHVwX2NhcmQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfY2FyZC5yZW1vdmVDbGFzcygncG9wdXBfc2xpZGVfdXAnKS5hZGRDbGFzcygncG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubG9naW5fc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkZWxheSwzMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwb3B1cCBleGl0Ki9cclxuXHJcbiAgICBqUXVlcnkoJy5jbG9zZV9wb3B1cCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW4nKS50b2dnbGVDbGFzcygncG9wdXBfc2xpZGVfdXAgcG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmxvZ2luX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5LDMwMCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcucXVpY2tfdmlld19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXcnKS50b2dnbGVDbGFzcygncG9wdXBfc2xpZGVfdXAgcG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnF1aWNrX3ZpZXdfc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZGVsYXlfcXVpY2tfdmlldywzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2VfcG9wdXBfYWRkLCAucG9wdXBfYWRkX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfYWRkJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5hZGRfc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZGVsYXlfYWRkLDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFzc3dvcmQgc3dpdGNoKi9cclxuXHJcbiAgICBqUXVlcnkoJy5idXR0b25faW5wdXRfcmVzZXQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHJlc2V0X3ZhbCA9IDA7XHJcbiAgICAgICAgY2hlY2tvdXRfcmVzZXRfdmFsID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHJlc2V0X3ZhbCA9IGpRdWVyeSgnLnBvcHVwX2xvc3RfcGFzc3dvcmQgLmRlZmF1bHQgLmxvZ2luX2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgdmFyIGNoZWNrb3V0X3Jlc2V0X3ZhbCA9IGpRdWVyeSgnLnBvcHVwX2xvc3RfcGFzc3dvcmQgLmRlZmF1bHQgLmNoZWNrb3V0X3Jlc2V0JykudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzZXRfdmFsKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc2V0X3ZhbCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luIC5lcnJvcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luIC5kZWZhdWx0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW4gLnN1Y2Nlc3Nfc2VuZCcpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luIC5lcnJvcicpLmZhZGVJbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrb3V0X3Jlc2V0X3ZhbCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnF1ZXN0aW9uX2NvbnRhaW5lciAuZXJyb3InKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5xdWVzdGlvbl9jb250YWluZXIgLmRlZmF1bHQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5xdWVzdGlvbl9jb250YWluZXIgLnN1Y2Nlc3Nfc2VuZCcpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnF1ZXN0aW9uX2NvbnRhaW5lciAuZXJyb3InKS5mYWRlSW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Jsb2cgc2NhbGUgaW1hZ2VcclxuXHJcbiAgICBqUXVlcnkoJy5pbWdfY29udGFpbmVyJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnMTExMScpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJha2EnLCB0aGlzKS5jc3MoJ3RyYW5zZm9ybScsICdzY2FsZSgxLjIpJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuaW1nX2NvbnRhaW5lcl9zaGFkb3cnLCB0aGlzKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgfSxcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuYmFrYScsIHRoaXMpLmNzcygndHJhbnNmb3JtJywgJ3NjYWxlKDEpJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmltZ19jb250YWluZXJfc2hhZG93JywgdGhpcykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JhZGlvX2J1dHRvblxyXG5cclxuICAgIGpRdWVyeSgnLmZvcm1pbnBhc3QgbGFiZWwnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmZvcm1pbnBhc3QgbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlX2xhYmVsJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmVfbGFiZWwnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qbG9naW4tcmVnaXN0ZXIgc3dpdGNoKi9cclxuXHJcbiAgICBqUXVlcnkoJy5sb2dpbl9idXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luX2xlZnQsIC5wb3B1cF9sb2dpbl9yaWdodCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfcmVnaXN0ZXJfbGVmdCwgLnBvcHVwX3JlZ2lzdGVyX3JpZ2h0JykuZmFkZUluKDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5yZWdpc3Rlcl9idXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3JlZ2lzdGVyX2xlZnQsIC5wb3B1cF9yZWdpc3Rlcl9yaWdodCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW5fbGVmdCwgLnBvcHVwX2xvZ2luX3JpZ2h0JykuZmFkZUluKDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5idXR0ZXJfcmlnaHQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luX2xlZnQsIC5wb3B1cF9sb2dpbl9yaWdodCwgLnBvcHVwX3JlZ2lzdGVyX2xlZnQsIC5wb3B1cF9yZWdpc3Rlcl9yaWdodCwgLnN1Y2Nlc3Nfc2VuZCwgLmVycm9yJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb3N0X3Bhc3N3b3JkIC5kZWZhdWx0JykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9zdF9wYXNzd29yZCcpLmZhZGVJbigzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmNhcmQqL1xyXG5cclxuICAgIGpRdWVyeSgnLnRvcF93cmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5hY3RpdmVfcGFydCcpLnJlbW92ZUNsYXNzKCdjYXJkX3NsaWRlX2xlZnQnKS5hZGRDbGFzcygnY2FyZF9zbGlkZV9yaWdodCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmNhcmRfYmxvY2snKS5mYWRlT3V0KDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5iYXNrZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmFjdGl2ZV9wYXJ0JykucmVtb3ZlQ2xhc3MoJ2NhcmRfc2xpZGVfcmlnaHQnKS5hZGRDbGFzcygnY2FyZF9zbGlkZV9sZWZ0Jyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuY2FyZF9ibG9jaycpLmZhZGVJbigzMDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX2NhcmQgPSBqUXVlcnkoXCIuYWN0aXZlX3BhcnRcIik7XHJcbiAgICAgICAgICAgIGlmICghcG9wdXBfY2FyZC5pcyhlLnRhcmdldCkgJiYgcG9wdXBfY2FyZC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cF9jYXJkLnJlbW92ZUNsYXNzKCdjYXJkX3NsaWRlX2xlZnQnKS5hZGRDbGFzcygnY2FyZF9zbGlkZV9yaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuY2FyZF9ibG9jaycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypjbG9zZSBjYXJkIGl0ZW0qL1xyXG5cclxuICAgIGpRdWVyeSgnLmNsb3NlX2NhcmRfaXRlbScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnNhbGUgKi9cclxuXHJcbiAgICAvL2Z1bmN0aW9uIHNhbGVTaG93KCkge1xyXG4gICAgLy8gICAgalF1ZXJ5KCcuc2FsZScpLmZhZGVJbigpO1xyXG4gICAgLy99XHJcbiAgICAvL1xyXG4gICAgLy9zZXRUaW1lb3V0KHNhbGVTaG93LDEwMDAwKTtcclxuXHJcbiAgICBqUXVlcnkoJy5zYWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5zYWxlX3dyYXBwZXInKS50b2dnbGVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0X3NhbGUgY2FyZF9zbGlkZV9yaWdodF9zYWxlJyk7XHJcbiAgICAgICAgLy9qUXVlcnkoJy5zYWxlX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjYXJkX3NsaWRlX3JpZ2h0IGNhcmRfc2xpZGVfbGVmdCcpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX3NhbGVfY29udGFpbmVyID0galF1ZXJ5KFwiLnNhbGVfd3JhcHBlclwiKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX3NhbGUgPSBqUXVlcnkoXCIuc2FsZVwiKTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cF9zYWxlLmlzKGUudGFyZ2V0KSAmJiAhcG9wdXBfc2FsZV9jb250YWluZXIuaXMoZS50YXJnZXQpICYmIHBvcHVwX3NhbGVfY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3NhbGVfY29udGFpbmVyLnJlbW92ZUNsYXNzKCdjYXJkX3NsaWRlX2xlZnQnKS5hZGRDbGFzcygnY2FyZF9zbGlkZV9yaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgLy9wb3B1cF9zYWxlLnJlbW92ZUNsYXNzKCdzYWxlX3NsaWRlX2xlZnQnKS5hZGRDbGFzcygnc2FsZV9zbGlkZV9yaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwb3B1cF9zdWJzY3JpcHRpb24qL1xyXG5cclxuICAgIGpRdWVyeSgnLnJpZ2h0X2Jhbm5lcl9ibG9jayAuYnV0dG9uX3N1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgc3Vic192YWwgPSBqUXVlcnkoJy5iYW5uZXJfYmxvY2sgaW5wdXQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHN1YnNfdmFsICE9IDAgKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX3N1YnNjcmlwdGlvbicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5X24nKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfc3Vic2NyaXB0aW9uJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVJbigzMDApO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBfc3VicyA9IGpRdWVyeShcIi5wb3B1cF9zdWJzY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWpRdWVyeSgnLnJpZ2h0X2Jhbm5lcl9ibG9jayAuYnV0dG9uX3N1Ym1pdCcpLmlzKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFwb3B1cF9zdWJzLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9zdWJzLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cF9zdWJzLnJlbW92ZUNsYXNzKCdwb3B1cF9zbGlkZV91cCcpLmFkZENsYXNzKCdwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X3N1YnNjcmlwdGlvbiwzMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBvcHVwX2FkZCovXHJcblxyXG4gICAgalF1ZXJ5KCcuaGlkZGVuX3ByaWNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfYWRkJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2FkZCcpLnRvZ2dsZUNsYXNzKCdwb3B1cF9zbGlkZV91cCBwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVJbigzMDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX2FkZCA9IGpRdWVyeShcIi5wb3B1cF9hZGRcIik7XHJcbiAgICAgICAgICAgIGlmICghalF1ZXJ5KCcuYnV5X2Vuam95JykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAgICAgICAhalF1ZXJ5KCcuaGlkZGVuX3ByaWNlJykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAgICAgICAhalF1ZXJ5KCcuZmEtc2hvcHBpbmctY2FydCcpLmlzKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgIXBvcHVwX2FkZC5pcyhlLnRhcmdldCkgJiYgcG9wdXBfYWRkLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX2FkZC5yZW1vdmVDbGFzcygncG9wdXBfc2xpZGVfdXAnKS5hZGRDbGFzcygncG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsYXlfYWRkLDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBvcHVwX3F1aWNrX3ZpZXcqL1xyXG5cclxuICAgIGpRdWVyeSgnLmhpZGRlbl9ob3ZlciAuZmEtc2VhcmNoLXBsdXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXcnKS50b2dnbGVDbGFzcygncG9wdXBfc2xpZGVfdXAgcG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnF1aWNrX3ZpZXdfc2hhZG93JykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfcXVpY2sgPSBqUXVlcnkoXCIucG9wdXBfcXVpY2tfdmlld1wiKTtcclxuICAgICAgICAgICAgaWYgKCFqUXVlcnkoJy5oaWRkZW5faG92ZXIgLmZhLXNlYXJjaC1wbHVzJykuaXMoZS50YXJnZXQpICYmICFwb3B1cF9xdWljay5pcyhlLnRhcmdldCkgJiYgcG9wdXBfcXVpY2suaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfcXVpY2sucmVtb3ZlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwJykuYWRkQ2xhc3MoJ3BvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnF1aWNrX3ZpZXdfc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkZWxheV9xdWlja192aWV3LDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnF1aWNrX3ZpZXdfcG9wdXAgc2xpZGVyKi9cclxuXHJcbiAgICB2YXIgcG9wdXBTbGlkZXJJdGVtcyA9IGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXdfbGVmdCB1bCcpLmNoaWxkcmVuKCdsaScpO1xyXG4gICAgdmFyIHBvcHVwU2xpZGVySXRlbXNMZW5ndGggPSBwb3B1cFNsaWRlckl0ZW1zLmxlbmd0aDtcclxuICAgIHZhciBwb3B1cFNsaWRlckl0ZW1zQ291bnRlciA9IDA7XHJcblxyXG4gICAgalF1ZXJ5KCcucG9wdXBfcXVpY2tfdmlldyAuZmEtYW5nbGUtcmlnaHQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHBvcHVwU2xpZGVySXRlbXMucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuICAgICAgICBpZiAocG9wdXBTbGlkZXJJdGVtc0NvdW50ZXIgPiBwb3B1cFNsaWRlckl0ZW1zTGVuZ3RoLTIpIHtcclxuICAgICAgICAgICAgcG9wdXBTbGlkZXJJdGVtc0NvdW50ZXIgPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeShwb3B1cFNsaWRlckl0ZW1zWysrcG9wdXBTbGlkZXJJdGVtc0NvdW50ZXJdKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3IC5mYS1hbmdsZS1sZWZ0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBwb3B1cFNsaWRlckl0ZW1zLnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuXHJcbiAgICAgICAgaWYgKHBvcHVwU2xpZGVySXRlbXNDb3VudGVyIDwgMSkge1xyXG4gICAgICAgICAgICBwb3B1cFNsaWRlckl0ZW1zQ291bnRlciA9IHBvcHVwU2xpZGVySXRlbXNMZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqUXVlcnkocG9wdXBTbGlkZXJJdGVtc1stLXBvcHVwU2xpZGVySXRlbXNDb3VudGVyXSkuYWRkQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypuZXh0LXByZXYgc2xpZGVyKi9cclxuICAgIG5leHQuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gc2xpZGVMZW5ndGgpe1xyXG4gICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlW3NsaWRlTGVuZ3RoLTFdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFuaW1hdGVOZXh0KCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID09IDApe1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbc2xpZGVMZW5ndGgtMl0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID09IDEpe1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbc2xpZGVMZW5ndGgtMV0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXItMl0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlci0xXSkuYW5pbWF0ZSh7J29wYWNpdHknOiAwfSwgMTAwMCk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDF9LCA4MDApO1xyXG4gICAgICAgIGJhY2tncm91bmRDaGFuZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByZXYuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBjb3VudGVyLS07XHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPCAwKXtcclxuICAgICAgICAgICAgY291bnRlciA9IHNsaWRlTGVuZ3RoLTE7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZVswXSkuYW5pbWF0ZSh7J29wYWNpdHknOiAwfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhbmltYXRlTmV4dCgpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRlciA9PSBzbGlkZUxlbmd0aC0xKXtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlWzFdKS5maW5kKCcuc2xpZGVfaW1nJykucmVtb3ZlQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA9PSBzbGlkZUxlbmd0aC0yKXtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlWzBdKS5maW5kKCcuc2xpZGVfaW1nJykucmVtb3ZlQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyKzJdKS5maW5kKCcuc2xpZGVfaW1nJykucmVtb3ZlQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXIrMV0pLmFuaW1hdGUoeydvcGFjaXR5JzogMH0sIDEwMDApO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkuYW5pbWF0ZSh7J29wYWNpdHknOiAxfSwgODAwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kQ2hhbmdlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmNhcm91c2VsKi9cclxuXHJcbiAgICAkKFwiLmNhcm91c2VsX3ZpZGVvX3Byb2R1Y3RcIikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTEyMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLml0ZW1fc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExMjAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5tb2RlbF9waG90b19jYXJvdXNlbFwiKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTIwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vYWRkIHRvIGNhcmRcclxuICAgIGZ1bmN0aW9uIGRlbGF5Q2xvc2VBdHRlbnRpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuYXR0ZW50aW9uJykuZmFkZU91dCgyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGluayBkZWxheVxyXG4gICAgZnVuY3Rpb24gZGVsYXlIcmVmKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLndpc2hsaXN0X2hvdmVyJykuYXR0cignaHJlZicsICd3aXNobGlzdC5odG1sJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcud2lzaGxpc3RfaG92ZXInKS5jc3MoJ2NvbG9yJywgJyNENDM2NEMnKTtcclxuICAgICAgICBqUXVlcnkoJy5saWtlIC5mYS1oZWFydCcpLmNzcygnY29sb3InLCAnI0Q0MzY0QycpO1xyXG4gICAgICAgIGpRdWVyeSgnLmxpa2UgLmZhLWhlYXJ0JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2luIG1vZGVsIGNhcnRcclxuICAgIGpRdWVyeSgnLnBob3RvX21vZGVsX2NhcnRfY29udGVudCAuYnV0dG9uX2lucHV0X2xvZ2luJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5hdHRlbnRpb24nKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5Q2xvc2VBdHRlbnRpb24sIDEwMDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vaW4gd2lzaGxpc3RcclxuICAgIGpRdWVyeSgnLmJ1dHRvbl90ZCAuYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5hdHRlbnRpb24nKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5Q2xvc2VBdHRlbnRpb24sIDEwMDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2hlY2tvdXRcclxuICAgIGpRdWVyeSgnLnF1ZXN0aW9uPnNwYW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgICAvL2luIGNoZWNrb3V0XHJcbiAgICBqUXVlcnkoJy5yZW1lbWJlcl9ib3R0b20gYScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vdmFyIGxpc3QgPSBqUXVlcnkoJy5pdGVtX3NsaWRlcicpLmZpbmQoJy5pdGVtX3NsaWRlcl9saXN0Jyk7XHJcbiAgICAvL3ZhciBpdGVtcyA9IGpRdWVyeShcIi5pdGVtX3NsaWRlcl9saXN0XCIpLmZpbmQoJy5jYXJ1c2VsX2l0ZW0nKTtcclxuICAgIC8vdmFyIHNsaWRlcyA9IGpRdWVyeSgnLml0ZW1fc2xpZGVyX2xpc3QnKS5jaGlsZHJlbignLmNhcnVzZWxfaXRlbScpO1xyXG4gICAgLy92YXIgc2xpZGVfd2lkdGggPSBpdGVtcy5vdXRlcldpZHRoKCkrMjA7XHJcbiAgICAvL3ZhciBjYXJ1c2VsX3dpZHRoID0gc2xpZGVfd2lkdGg7XHJcbiAgICAvL1xyXG4gICAgLy9pdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgIGNhcnVzZWxfd2lkdGggKz0galF1ZXJ5KHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgIC8vfSk7XHJcbiAgICAvL1xyXG4gICAgLy9qUXVlcnkoJy5pdGVtX3NsaWRlcl9saXN0JykuY3NzKCd3aWR0aCcsIGNhcnVzZWxfd2lkdGggKyAncHgnKTtcclxuICAgIC8vXHJcbiAgICAvL3ZhciBwaXhlbHNPZmZzZXQgPSBzbGlkZV93aWR0aDtcclxuICAgIC8vdmFyIGN1cnJlbnRMZWZ0VmFsdWUgPSAwO1xyXG4gICAgLy92YXIgZWxlbWVudHNDb3VudCA9IGpRdWVyeSgnLml0ZW1fc2xpZGVyX2xpc3QnKS5maW5kKCcuY2FydXNlbF9pdGVtJykubGVuZ3RoO1xyXG4gICAgLy92YXIgbWluaW11bU9mZnNldCA9IC0oKGVsZW1lbnRzQ291bnQgLSAzKSAqIHBpeGVsc09mZnNldCk7XHJcbiAgICAvL3ZhciBtYXhpbXVtT2Zmc2V0ID0gMDtcclxuICAgIC8vXHJcbiAgICAvL2pRdWVyeShcIi5hcnJvd19wcmV2X2Nhcm91c2VsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgIGlmIChjdXJyZW50TGVmdFZhbHVlICE9IG1heGltdW1PZmZzZXQpIHtcclxuICAgIC8vICAgICAgICBjdXJyZW50TGVmdFZhbHVlICs9IHNsaWRlX3dpZHRoO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSgnLml0ZW1fc2xpZGVyX2xpc3QnKS5hbmltYXRlKHtsZWZ0OiBjdXJyZW50TGVmdFZhbHVlICsgXCJweFwifSwgMzAwKTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vfSk7XHJcbiAgICAvL1xyXG4gICAgLy9qUXVlcnkoXCIuYXJyb3dfbmV4dF9jYXJvdXNlbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICBpZiAoY3VycmVudExlZnRWYWx1ZSAhPSBtaW5pbXVtT2Zmc2V0KSB7XHJcbiAgICAvLyAgICAgICAgY3VycmVudExlZnRWYWx1ZSAtPSBzbGlkZV93aWR0aDtcclxuICAgIC8vICAgICAgICBqUXVlcnkoJy5pdGVtX3NsaWRlcl9saXN0JykuYW5pbWF0ZSh7bGVmdDogY3VycmVudExlZnRWYWx1ZSArIFwicHhcIn0sIDMwMCk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbWFnZSBzb3VyY2UgcmVwbGFjZVxyXG5cclxuICAgIHZhciBtYWluSW1hZ2VTcmMgPSBqUXVlcnkoJy52aWRlb19tYWluIC5zbGljay10cmFjayAuY2Fyb3VzZWxfcGljdHVyZTpudGgtY2hpbGQoNCkgaW1nJykuYXR0cignc3JjJyk7XHJcbiAgICB2YXIgcGljdHVyZUFycmF5Rm9yUmVwbGFjZSA9IFtdO1xyXG4gICAgdmFyIHBpY3R1cmVBcnJheUZvckFzc29jaWF0aW9uID0galF1ZXJ5KCcuY2Fyb3VzZWxfdmlkZW9fcHJvZHVjdCAuY2Fyb3VzZWxfcGljdHVyZSBpbWcnKS5nZXQoKTtcclxuICAgIHZhciBpbWdDb3VudGVyID0gMDtcclxuICAgIHZhciBpbmRleCA9IDM7XHJcblxyXG4gICAgalF1ZXJ5KCcudmlkZW9fY2Fyb3VzZWxfaW1nIGltZycpLmF0dHIoJ3NyYycsIG1haW5JbWFnZVNyYyk7XHJcblxyXG4gICAgalF1ZXJ5KHBpY3R1cmVBcnJheUZvckFzc29jaWF0aW9uKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBpbWFnZVNyYyA9IGpRdWVyeSh0aGlzKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBpbmRleCA9IGpRdWVyeShwaWN0dXJlQXJyYXlGb3JBc3NvY2lhdGlvbikuaW5kZXgodGhpcyk7XHJcbiAgICAgICAgalF1ZXJ5KCcudmlkZW9fY2Fyb3VzZWxfaW1nIGltZycpLmF0dHIoJ3NyYycsIGltYWdlU3JjKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbWFnZXMgem9vbVxyXG5cclxuICAgIC8vZm9yIHZpZGVvIGNhcnRcclxuXHJcbiAgICBqUXVlcnkoJy5jYXJvdXNlbF92aWRlb19wcm9kdWN0IC5jYXJvdXNlbF9waWN0dXJlIGltZycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBwaWN0dXJlQXJyYXlGb3JSZXBsYWNlW2ltZ0NvdW50ZXJdID0galF1ZXJ5KHRoaXMpO1xyXG4gICAgICAgIHZhciBjbG9uZUltZ1NyYyA9IHBpY3R1cmVBcnJheUZvclJlcGxhY2VbaW1nQ291bnRlcl0uYXR0cignc3JjJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuem9vbV9pbWdfYmlnJykuYXBwZW5kKCc8ZGl2PjxpbWcgc3JjPScgK2Nsb25lSW1nU3JjKyAnIGFsdD1cIlwiPjwvZGl2PicpO1xyXG4gICAgICAgIGltZ0NvdW50ZXIrKztcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnBob3RvX21vZGVsX2NhcnRfY29udGVudCAubmV3X2NvbnRhaW5lciAubGVmdF9zaWRlIC52aWRlb19jYXJvdXNlbF9pbWc+aW1nJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIGxhc3RBcnJheUZvclZpZGVvID0galF1ZXJ5KCcuem9vbV9pbWdfYmlnJykuY2hpbGRyZW4oJ2RpdicpO1xyXG5cclxuICAgICAgICB2YXIgaSA9IGluZGV4O1xyXG4gICAgICAgIHZhciBuZXh0ID0galF1ZXJ5KCcuem9vbV9pbWdfYmlnIC5uZXh0Jyk7XHJcbiAgICAgICAgdmFyIHByZXYgPSBqUXVlcnkoJy56b29tX2ltZ19iaWcgLnByZXYnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvKS5yZW1vdmVDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvW2ldKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuaW1hZ2Vfem9vbV9zaGFkb3cnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBqUXVlcnkoJy53cmFwcGVyX3pvb21faW1nX2JpZycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgICAgICBqUXVlcnkoJy56b29tX2ltZ19iaWcgLm5leHQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW8pLnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpPmxhc3RBcnJheUZvclZpZGVvLmxlbmd0aC0yKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlb1srK2ldKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlb1tpXSkpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcuem9vbV9pbWdfYmlnIC5wcmV2JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICBqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW8pLnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpPDEpIHtcclxuICAgICAgICAgICAgICAgIGkgPSBsYXN0QXJyYXlGb3JWaWRlby5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlb1stLWldKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW9baV0pKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vJChcIi56b29tX2ltZ19iaWdcIikuc2xpY2soe1xyXG4gICAgICAgIC8vICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgLy8gICAgaW5pdGlhbFNsaWRlOiBpbmRleCxcclxuICAgICAgICAvLyAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgLy8gICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX3pvb20gPSBqUXVlcnkoXCIud3JhcHBlcl96b29tX2ltZ19iaWdcIik7XHJcbiAgICAgICAgICAgIGlmICghcG9wdXBfem9vbS5pcyhlLnRhcmdldCkgJiYgcG9wdXBfem9vbS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cF96b29tLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmltYWdlX3pvb21fc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2ZvciBwaG90b19jYXJ0XHJcblxyXG4gICAgalF1ZXJ5KCcucGhvdG9fbW9kZWxfY2FydF9jb250ZW50IC5uZXdfY29udGFpbmVyIC5sZWZ0X3NpZGU+aW1nJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgYmlnSW1nID0galF1ZXJ5KHRoaXMpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIGpRdWVyeSgnbWFpbicpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInpvb21faW1nX2JpZ19waWN0dXJlXCI+PGltZyBzcmM9JytiaWdJbWcrJyBhbHQ9XCJcIj48L2Rpdj4nKTtcclxuICAgICAgICBqUXVlcnkoJy5pbWFnZV96b29tX3NoYWRvdycpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLnpvb21faW1nX2JpZ19waWN0dXJlJykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfem9vbSA9IGpRdWVyeShcIi56b29tX2ltZ19iaWdfcGljdHVyZVwiKTtcclxuICAgICAgICAgICAgaWYgKCFqUXVlcnkoJy56b29tX2ltZ19jbG9zZScpLmlzKGUudGFyZ2V0KSAmJiAhcG9wdXBfem9vbS5pcyhlLnRhcmdldCkgJiYgcG9wdXBfem9vbS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cF96b29tLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmltYWdlX3pvb21fc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuem9vbV9pbWdfYmlnX3BpY3R1cmUnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hvdmVyIG1lbnVfbGlzdFxyXG5cclxuICAgIGpRdWVyeSgnLmxlZnRfaGVhZGVyIC5tZW51ID4gbGk6bnRoLWNoaWxkKDMpJykuaG92ZXIoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBqUXVlcnkoJy5tZW51X2xpc3QnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBqUXVlcnkoJy5tZW51X2xpc3QnKS5hZGRDbGFzcygnYWN0aXZlX21lbnUnKTtcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLm1lbnVfbGlzdCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcubWVudV9saXN0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9tZW51Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5mb290ZXJfbWVudSAubWVudSA+IGxpOm50aC1jaGlsZCgzKScpLmhvdmVyKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcuZm9vdGVyX21lbnVfcG9zaXRpb24nKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBqUXVlcnkoJy5mb290ZXJfbWVudV9wb3NpdGlvbicpLmFkZENsYXNzKCdhY3RpdmVfbWVudV9mb290ZXInKTtcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLmZvb3Rlcl9tZW51X3Bvc2l0aW9uJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICBqUXVlcnkoJy5mb290ZXJfbWVudV9wb3NpdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmVfbWVudV9mb290ZXInKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RhYnNcclxuXHJcbiAgICB2YXIgdGFic0J1dHRvbiA9IGpRdWVyeSgnLm5hdl90YWJzIHVsJykuY2hpbGRyZW4oJ2xpJyk7XHJcbiAgICB2YXIgdGFic0Jsb2NrID0galF1ZXJ5KCcubmF2X2Jsb2NrcyB1bCcpLmNoaWxkcmVuKCdsaScpO1xyXG5cclxuICAgIGpRdWVyeSgnLm5hdl90YWJzIHVsIGxpJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgaSA9IGpRdWVyeSh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgIGpRdWVyeSh0YWJzQnV0dG9uKS5yZW1vdmVDbGFzcygnYWN0aXZlX3RhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX3RhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0YWJzQmxvY2spLnJlbW92ZUNsYXNzKCdkaXNwbGF5X2IgYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5MZWZ0Jyk7XHJcbiAgICAgICAgalF1ZXJ5KHRhYnNCbG9ja1tpXSkuYWRkQ2xhc3MoJ2Rpc3BsYXlfYiBhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJbkxlZnQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbGlmdFxyXG5cclxuICAgIGpRdWVyeSgnI3Njcm9sbHVwJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk+NjAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3Njcm9sbHVwJykuZmFkZUluKCc1MDAnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjc2Nyb2xsdXAnKS5mYWRlT3V0KCc1MDAnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFnaW5hdGlvbiovXHJcblxyXG4gICAgalF1ZXJ5KCcucGFnaW5hdGlvbiB1bCBsaScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucGFnaW5hdGlvbiB1bCBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmVfcGFnZScpO1xyXG4gICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfcGFnZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hvdmVyIG1lbnUgaW1hZ2VcclxuICAgIHZhciBpbWFnZVNyY01lbnU7XHJcbiAgICB2YXIgZGVmYXVsdFNyY0ltYWdlID0galF1ZXJ5KCcuaGlkZGVuX21lbnVfcGljdHVyZScpLmF0dHIoJ3NyYycpO1xyXG5cclxuICAgIGpRdWVyeSgnLm1lbnVfaXRlbScpLmhvdmVyKCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbWFnZVNyY01lbnUgPSBqUXVlcnkodGhpcykuZmluZCgnLmhpZGRlbl9waWN0dXJlJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBqUXVlcnkoJy5oaWRkZW5fbWVudV9waWN0dXJlJykuYXR0cignc3JjJywgaW1hZ2VTcmNNZW51KTtcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgLy9qUXVlcnkoJy5oaWRkZW5fbWVudV9waWN0dXJlJykuYXR0cignc3JjJywgZGVmYXVsdFNyY0ltYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9maWx0ZXJcclxuXHJcbiAgICBqUXVlcnkoJy5maWx0ZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnZmlsdGVyX29wZW4nKTtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYmxvZyBhbmltYXRpb25cclxuXHJcbiAgICB2YXIgZmlndXJlQXJyYXkgPSBqUXVlcnkoJy5maWd1cmVfYmxvY2snKS5jaGlsZHJlbignZmlndXJlJyk7XHJcbiAgICB2YXIgZmlndXJlU2hvd0Jsb2NrID0gNjtcclxuICAgIHZhciBmaWd1cmVDb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKGZpZ3VyZUNvdW50ZXI7ZmlndXJlQ291bnRlcjxmaWd1cmVTaG93QmxvY2s7ZmlndXJlQ291bnRlcisrKSB7XHJcbiAgICAgICAgalF1ZXJ5KGZpZ3VyZUFycmF5W2ZpZ3VyZUNvdW50ZXJdKS5hZGRDbGFzcygnZGlzcGxheV9iIGFuaW1hdGVkX2ZhZGVJbkxlZnQgem9vbUluJyk7XHJcbiAgICB9XHJcblxyXG4gICAgalF1ZXJ5KCcuZmlndXJlX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZmlndXJlU2hvd0Jsb2NrKz02O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpZ3VyZVNob3dCbG9jayk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlndXJlQ291bnRlcik7XHJcbiAgICAgICAgZm9yIChmaWd1cmVDb3VudGVyO2ZpZ3VyZUNvdW50ZXI8ZmlndXJlU2hvd0Jsb2NrO2ZpZ3VyZUNvdW50ZXIrKykge1xyXG4gICAgICAgICAgICBqUXVlcnkoZmlndXJlQXJyYXlbZmlndXJlQ291bnRlcl0pLmFkZENsYXNzKCdkaXNwbGF5X2IgYW5pbWF0ZWRfZmFkZUluTGVmdCB6b29tSW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZpeGVkIG1lbnVcclxuXHJcbiAgICB2YXIgc2Nyb2xsID0galF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICBpZiAoc2Nyb2xsID4gMCkge1xyXG4gICAgICAgIGpRdWVyeSgnLmhlYWRlcl9zdGF0aWMnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNlYXJjaF9ibG9jaycpLmNzcygndG9wJywgJzgwcHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICBzY3JvbGwgPSBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZiAoc2Nyb2xsID4gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5oZWFkZXJfc3RhdGljJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnaGVhZGVyJykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNlYXJjaF9ibG9jaycpLmNzcygndG9wJywgJzgwcHgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmhlYWRlcl9zdGF0aWMnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zZWFyY2hfYmxvY2snKS5jc3MoJ3RvcCcsICc5OXB4Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcmVhZF9tb3JlKi9cclxuXHJcbiAgICAvL3ZhciBjaGVja2VyID0galF1ZXJ5KCdkaXYnKS5pcygnLmJsb2dfdGV4dCcpO1xyXG4gICAgLy92YXIgdGV4dCA9IGpRdWVyeSgnLmJsb2dfdGV4dCcpO1xyXG4gICAgLy92YXIgbW9yZSA9IGpRdWVyeShcIi5yZWFkX21vcmVcIik7XHJcbiAgICAvL3ZhciBsZXNzID0galF1ZXJ5KFwiLnJlYWRfbGVzc1wiKTtcclxuICAgIC8vXHJcbiAgICAvL2lmIChjaGVja2VyID09IHRydWUpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICB2YXIgaGVpZ2h0X2F1dG8gPSBbXTtcclxuICAgIC8vICAgIHZhciBpID0gMDtcclxuICAgIC8vXHJcbiAgICAvLyAgICB2YXIgbGluZWhlaWdodCA9IHRleHQuY3NzKCdsaW5lLWhlaWdodCcpLnJlcGxhY2UoXCJweFwiLCBcIlwiKTtcclxuICAgIC8vICAgIHZhciBmaXZlX2xpbmVzID0gbGluZWhlaWdodCo0O1xyXG4gICAgLy9cclxuICAgIC8vICAgIHRleHQuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICAgIGhlaWdodF9hdXRvW2ldID0galF1ZXJ5KHRoaXMpLmhlaWdodCgpO1xyXG4gICAgLy8gICAgICAgIGNvbnNvbGUubG9nKGhlaWdodF9hdXRvW2ldK1wiX19fXCIpO1xyXG4gICAgLy8gICAgICAgIGNvbnNvbGUubG9nKHRleHQuaGVpZ2h0KCkrJysrKycpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICBpZiAoaGVpZ2h0X2F1dG9baV0gPT0gZml2ZV9saW5lcykge1xyXG4gICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZygndXJhYScpO1xyXG4gICAgLy8gICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICBpKys7XHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICB0ZXh0LmNzcygnaGVpZ2h0JywgZml2ZV9saW5lcyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgbW9yZS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgdmFyIGkgPSBqUXVlcnkodGhpcykucHJldih0ZXh0KS5pbmRleCgnLmJsb2dfdGV4dCcpO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KHRleHQpLmFuaW1hdGUoe2hlaWdodDogaGVpZ2h0X2F1dG9baV19LCA0MDApO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KGxlc3MpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgIGxlc3MuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KG1vcmUpLnByZXYodGV4dCkuYW5pbWF0ZSh7aGVpZ2h0OiBmaXZlX2xpbmVzfSwgMzAwKTtcclxuICAgIC8vICAgICAgICBqUXVlcnkodGhpcykucHJldihtb3JlKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZvbGxvd19zbGlkZXJcclxuXHJcbiAgICB2YXIgZm9sbG93U2xpZGUgPSBqUXVlcnkoJy5mb2xsb3dfbGVmdCcpLmNoaWxkcmVuKCcucG9pbnRlcl9zbGlkZScpO1xyXG5cclxuICAgIGZvbGxvd1NsaWRlLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcyA9PSBmb2xsb3dTbGlkZVswXSApe1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5uYXZpZ2F0aW9uJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZG90IGFjdGl2ZV9kb3RcIj48L2Rpdj4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLm5hdmlnYXRpb24nKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciBkb3QgPSBqUXVlcnkoJy5uYXZpZ2F0aW9uJykuY2hpbGRyZW4oJy5kb3QnKTtcclxuICAgIHZhciBuYXZpZ2F0aW9uV2lkdGggPSBqUXVlcnkoJy5uYXZpZ2F0aW9uJykud2lkdGgoKTtcclxuICAgIGpRdWVyeSgnLm5hdmlnYXRpb24nKS5jc3MoJ21hcmdpbi1sZWZ0JywgLW5hdmlnYXRpb25XaWR0aC8yICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb2xsb3dfc2xpZGVyIG5hdmlnYXRpb24gcG9zaXRpb25cclxuXHJcbiAgICAvL2Z1bmN0aW9uIG5hdmlnYXRpb25Qb3NpdGlvbigpIHtcclxuICAgIC8vICAgIHZhciBwb2ludGVyU2xpZGVIZWlnaHQgPSBqUXVlcnkoJy5mb2xsb3dfbGVmdCAuZGlzcGxheV9iJykuaGVpZ2h0KCk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhwb2ludGVyU2xpZGVIZWlnaHQpO1xyXG4gICAgLy8gICAgalF1ZXJ5KCcubmF2aWdhdGlvbicpLmNzcygndG9wJywgMjArcG9pbnRlclNsaWRlSGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAvL31cclxuICAgIC8vXHJcbiAgICAvL25hdmlnYXRpb25Qb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9sbG93X3NsaWRlciBkb3RzXHJcblxyXG4gICAgalF1ZXJ5KCcuZG90Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBkb3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kb3QnKTtcclxuICAgICAgICBmb2xsb3dTbGlkZS5yZW1vdmVDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBkaXNwbGF5X2IgZmFkZUluTGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RvdCcpO1xyXG4gICAgICAgIHZhciBkb3RDb3VudGVyID0galF1ZXJ5KHRoaXMpLmluZGV4KCk7XHJcbiAgICAgICAgalF1ZXJ5KGZvbGxvd1NsaWRlW2RvdENvdW50ZXJdKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBkaXNwbGF5X2IgZmFkZUluTGVmdCcpO1xyXG4gICAgICAgIC8vbmF2aWdhdGlvblBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKm1vYmlsZV9tZW51Ki9cclxuXHJcbiAgICAvL3ZhciBtb2JpbGVMaXN0ID0galF1ZXJ5KCcubWVudV9tb2JpbGVfbGlzdCcpO1xyXG4gICAgLy9cclxuICAgIC8vdmFyIG1vYmlsZUxpc3RIZWlnaHQgPSBtb2JpbGVMaXN0LmhlaWdodCgpO1xyXG5cclxuICAgIGpRdWVyeSgnLmljb24tc3ViLW1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnbW9iaWxlX3VwIG1vYmlsZV9kb3duIG1vYmlsZV91cF9yZXZlcnNlIG1vYmlsZV9kb3duX3JldmVyc2UnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcbiAgICAgICAgalF1ZXJ5KCcubWVudV9tb2JpbGU+bGk6bnRoLWNoaWxkKDIpPmEnKS50b2dnbGVDbGFzcygnY3VycmVudC1tZW51LWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLm1lbnVfbW9iaWxlPmxpOm50aC1jaGlsZCgyKT5hJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdtb2JpbGVfdXAgbW9iaWxlX2Rvd24gbW9iaWxlX3VwX3JldmVyc2UgbW9iaWxlX2Rvd25fcmV2ZXJzZScpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdjdXJyZW50LW1lbnUtaXRlbScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbGluayBub25lLWRlZmF1bHRcclxuXHJcbiAgICBqUXVlcnkoJy5tZW51PmxpOm50aC1jaGlsZCgzKT5hJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3doaXNobGlzdCBjbGlja1xyXG5cclxuICAgIGpRdWVyeSgnLndpc2hsaXN0X2hvdmVyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb2ludF90ZXh0Jyx0aGlzKS50ZXh0KCdCcm93c2UgV2lzaGxpc3QnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5SHJlZiw1MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9waWN0dXJlIGhvdmVyXHJcblxyXG4gICAgalF1ZXJ5KCcuY2Fyb3VzZWxfcGljdHVyZSAuaGlkZGVuX2hvdmVyIGknKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuYWRkQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS5yZW1vdmVDbGFzcygnb3BhY2l0eScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcubW9kZWxzIC5oaWRkZW5faG92ZXIgaSwgLnZpZGVvX2NvbnRhaW5lciAuaGlkZGVuX2hvdmVyIGknKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuYWRkQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS5yZW1vdmVDbGFzcygnb3BhY2l0eScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbG9zZSBpdGVtIHdpc2hsaXN0XHJcblxyXG4gICAgalF1ZXJ5KCcud2lzaGxpc3RfYmxvY2sgLmNsb3NlIC5jbG9zZV9hbmltYXRpb25fY2FyZCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xvc2UgaXRlbSBjYXJ0XHJcblxyXG4gICAgalF1ZXJ5KCcuY29udGVudF9jYXJ0IC53aXNobGlzdF9ibG9jayAuY2xvc2VfYW5pbWF0aW9uX2NhcmQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcygnbWFyaycpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYXR0ZW50aW9uJykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgLy9zZXRUaW1lb3V0KGRlbGF5Q2xvc2VBdHRlbnRpb24sIDEwMDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnVuZG8nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLm1hcmsnKS5mYWRlSW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrb3V0XHJcblxyXG4gICAgalF1ZXJ5KCcuY2hlY2tvdXRfdGFibGUgLmNsb3NlX2FuaW1hdGlvbl9jYXJkLCAud2lzaGxpc3RfaXRlbSAuY2xvc2VfYW5pbWF0aW9uX2NhcmQnKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnLmZpcnN0X2xpbmUnKS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0JykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdF9vdmVyJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5zZWNvbmRfbGluZScpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmRfb3ZlcicpO1xyXG5cclxuICAgIH0sZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5maXJzdF9saW5lJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuc2Vjb25kX2xpbmUnKS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmNoZWNrb3V0X3RhYmxlIC5jbG9zZV9hbmltYXRpb25fY2FyZCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWNjb3VudFxyXG5cclxuICAgIGpRdWVyeSgnLmxlZnRfYWNjb3VudCB1bCBsaScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubGVmdF9hY2NvdW50IHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9hY2NvdW50Jyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfYWNjb3VudCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9sb2FkX21vcmVfcGFnZVxyXG5cclxuICAgIC8vdmFyIGZpZ3VyZUJsb2NrID0galF1ZXJ5KCcubmV3cycpLmNoaWxkcmVuKCcuZmlndXJlX2Jsb2NrJyk7XHJcbiAgICAvL3ZhciBmaWd1cmVDb3VudGVyID0gMDtcclxuICAgIC8vLy92YXIgQmxvY2tDb3VudGVyID0gMDtcclxuICAgIC8vdmFyIGZpZ3VyZU51bWJlciA9IDE7XHJcbiAgICAvL1xyXG4gICAgLy9qUXVlcnkoJ2ZpZ3VyZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgaWYgKGZpZ3VyZUNvdW50ZXIgPj0gZmlndXJlTnVtYmVyKSB7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KGZpZ3VyZUJsb2NrW2ZpZ3VyZUNvdW50ZXJdKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy8gICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KGZpZ3VyZUJsb2NrW2ZpZ3VyZUNvdW50ZXJdKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICBmaWd1cmVDb3VudGVyKys7XHJcbiAgICAvL30pO1xyXG4gICAgLy9cclxuICAgIC8vZmlndXJlQ291bnRlciA9IDE7XHJcbiAgICAvL1xyXG4gICAgLy9qUXVlcnkoJy5maWd1cmVfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIC8vICAgIGpRdWVyeShmaWd1cmVCbG9ja1tmaWd1cmVDb3VudGVyKytdKS5hZGRDbGFzcygnZGlzcGxheV9iIGFuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluUmlnaHQnKTtcclxuICAgIC8vfSk7XHJcblxyXG59KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qdGltZXIgZm9yIHNsaWRlciovXHJcblxyXG52YXIgcnVuID0gc2V0SW50ZXJ2YWwoJ3JvdGF0ZSgpJywgMTAwMDApO1xyXG5cclxualF1ZXJ5KCcuc2xpZGVyJykuaG92ZXIoXHJcbiAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHJ1bik7XHJcbiAgICB9LFxyXG4gICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcnVuID0gc2V0SW50ZXJ2YWwoJ3JvdGF0ZSgpJywgMTAwMDApO1xyXG4gICAgfVxyXG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp0aW1lciBydW4qL1xyXG5cclxuZnVuY3Rpb24gcm90YXRlKCkge1xyXG4gICAgbmV4dC5jbGljaygpO1xyXG59Il0sImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
