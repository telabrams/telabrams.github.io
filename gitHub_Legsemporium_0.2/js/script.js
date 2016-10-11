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
        jQuery('body').toggleClass('overflow_h');
    });

    jQuery('.close_search').click(function(){

        jQuery('.search .fa-search').toggleClass('display_ib');
        jQuery('.small').toggleClass('display_ib');
        smallFirstLine.removeClass('search_hover_first').addClass('search_hover_first_over');
        smallSecondLine.removeClass('search_hover_second').addClass('search_hover_second_over');
        jQuery('.search_block').toggleClass('display_n fadeInUp fadeOutDown');
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
        jQuery('.sale').toggleClass('sale_slide_right sale_slide_left');
        jQuery('.sale_container').toggleClass('card_slide_right card_slide_left');

        jQuery(document).mouseup(function (e) {
            var popup_sale_container = jQuery(".sale_container");
            var popup_sale = jQuery(".sale");
            if (!popup_sale.is(e.target) && !popup_sale_container.is(e.target) && popup_sale_container.has(e.target).length == 0) {
                popup_sale_container.removeClass('card_slide_left').addClass('card_slide_right');
                popup_sale.removeClass('sale_slide_left').addClass('sale_slide_right');
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

    jQuery('.menu_item div').hover( function() {
        imageSrcMenu = jQuery(this).next().attr('src');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgU0VPIG9uIDAyLjA5LjIwMTYuXHJcbiAqL1xyXG5cclxudmFyIG5leHQgPSBqUXVlcnkoJy5hcnJvd19iYWNrZ3JvdW5kX25leHQnKTtcclxudmFyIHByZXYgPSBqUXVlcnkoJy5hcnJvd19iYWNrZ3JvdW5kX3ByZXYnKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaW1nID0galF1ZXJ5KCcuc2xpZGVfaW1nJyk7XHJcbiAgICB2YXIgc2xpZGVyID0galF1ZXJ5KCcuc2xpZGVyJyk7XHJcbiAgICB2YXIgc2xpZGVDb250ZW50ID0galF1ZXJ5KCcuc2xpZGVfY29udGVudCcpO1xyXG4gICAgdmFyIGltZ0hlaWdodCA9IGltZy5oZWlnaHQoKTtcclxuICAgIHZhciBzbGlkZUNvbnRlbnRXaWR0aCA9IHNsaWRlQ29udGVudC53aWR0aCgpO1xyXG4gICAgdmFyIHNsaWRlQ29udGVudEhlaWdodCA9IHNsaWRlQ29udGVudC5oZWlnaHQoKTtcclxuICAgIHZhciBzbGlkZSA9IHNsaWRlci5jaGlsZHJlbignLnNsaWRlJykuZmluZCgnLnNsaWRlX3dyYXBwZXInKTtcclxuICAgIHZhciBzbGlkZUxlbmd0aCA9IHNsaWRlLmxlbmd0aDtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAvKnNsaWRlcl9jb250ZW50IGFuaW1hdGlvbiovXHJcblxyXG4gICAgdmFyIG1vZGVsID0galF1ZXJ5KCcubW9kZWwnKTtcclxuICAgIHZhciBtb2RlbE5hbWUgPSBqUXVlcnkoJy5tb2RlbF9uYW1lJyk7XHJcbiAgICB2YXIgbW9kZWxEZXNjcmlwdGlvbiA9IGpRdWVyeSgnLm1vZGVsX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU5leHQoKSB7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5maW5kKCcuc2xpZGVfaW1nJykuYWRkQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgc2xpZGVDb250ZW50LnJlbW92ZUNsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICAgICAgc2xpZGVDb250ZW50LnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlcl0pLnByZXYoc2xpZGVDb250ZW50KS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5wcmV2KHNsaWRlQ29udGVudCkuYWRkQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgICAgICBtb2RlbE5hbWUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluTGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkucHJldigpLmZpbmQobW9kZWxOYW1lKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5MZWZ0Jyk7XHJcbiAgICAgICAgbW9kZWwucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluRG93bicpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkucHJldigpLmZpbmQobW9kZWwpLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJbkRvd24nKTtcclxuICAgICAgICBtb2RlbERlc2NyaXB0aW9uLnJlbW92ZUNsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJblVwJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5wcmV2KCkuZmluZChtb2RlbERlc2NyaXB0aW9uKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5VcCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypzbGlkZXJfY29udGVudCBjZW50ZXIgcG9zaXRpb24qL1xyXG5cclxuICAgIHNsaWRlci5jc3MoJ2hlaWdodCcsIGltZ0hlaWdodCArICdweCcpO1xyXG4gICAgc2xpZGVDb250ZW50LmNzcygnbWFyZ2luLWxlZnQnLCAtc2xpZGVDb250ZW50V2lkdGgvMiArICdweCcpO1xyXG4gICAgc2xpZGVDb250ZW50LmNzcygnbWFyZ2luLXRvcCcsIC1zbGlkZUNvbnRlbnRIZWlnaHQvMiArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21lbnUgaGlkZVxyXG5cclxuICAgIGpRdWVyeSgnLmJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX25hdicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5X24nKS50b2dnbGVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0IGNhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfc2hhZG93JykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfY2FyZCA9IGpRdWVyeShcIi5tb2JpbGVfbmF2XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwX2NhcmQuaXMoZS50YXJnZXQpICYmIHBvcHVwX2NhcmQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfY2FyZC5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9yaWdodCcpLmFkZENsYXNzKCdjYXJkX3NsaWRlX2xlZnQnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vZnVuY3Rpb24gbWVudUhpZGUoKSB7XHJcbiAgICAvLyAgICBpZiAod2luZG93V2lkdGggPD0gMTEyMCkge1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSgnaGVhZGVyIC5sZWZ0X2hlYWRlcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICBqUXVlcnkoJ2hlYWRlciAubGVmdF9oZWFkZXInKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL31cclxuICAgIC8vXHJcbiAgICAvL21lbnVIaWRlKCk7XHJcblxyXG4gICAgdmFyIHdpbmRvd1dpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnJlc2l6ZSBmdW5jdGlvbiovXHJcblxyXG5qUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgIHNsaWRlQ29udGVudEhlaWdodCA9IHNsaWRlQ29udGVudC5oZWlnaHQoKTtcclxuICAgIHdpbmRvd1dpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKTtcclxuICAgIGltZy5jc3MoJ3dpZHRoJywgd2luZG93V2lkdGggKyAncHgnKTtcclxuICAgIGltZ0hlaWdodCA9IGltZy5oZWlnaHQoKTtcclxuICAgIHNsaWRlci5jc3MoJ2hlaWdodCcsIGltZ0hlaWdodCArICdweCcpO1xyXG4gICAgLy9tZW51SGlkZSgpO1xyXG4gICAgLy9uYXZpZ2F0aW9uUG9zaXRpb24oKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBiYWNrZ3JvdW5kQ2hhbmdlKCkge1xyXG4gICAgdmFyIGJhY2tncm91bmROZXh0O1xyXG5cclxuICAgIGlmIChjb3VudGVyID09IHNsaWRlTGVuZ3RoLTEpe1xyXG4gICAgICAgIGJhY2tncm91bmROZXh0ID0galF1ZXJ5KHNsaWRlWzBdKS5maW5kKCcuc2xpZGVfaW1nJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgbmV4dC5jc3MoJ2JhY2tncm91bmQnLCAndXJsKCcrIGJhY2tncm91bmROZXh0ICsnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcicpO1xyXG4gICAgICAgIG5leHQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kTmV4dCA9IGpRdWVyeShzbGlkZVtjb3VudGVyKzFdKS5maW5kKCcuc2xpZGVfaW1nJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgbmV4dC5jc3MoJ2JhY2tncm91bmQnLCAndXJsKCcrIGJhY2tncm91bmROZXh0ICsnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcicpO1xyXG4gICAgICAgIG5leHQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY291bnRlciA9PSAwKXtcclxuICAgICAgICBiYWNrZ3JvdW5kTmV4dCA9IGpRdWVyeShzbGlkZVtzbGlkZUxlbmd0aC0xXSkuZmluZCgnLnNsaWRlX2ltZycpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIHByZXYuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybCgnKyBiYWNrZ3JvdW5kTmV4dCArJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInKTtcclxuICAgICAgICBwcmV2LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZE5leHQgPSBqUXVlcnkoc2xpZGVbY291bnRlci0xXSkuZmluZCgnLnNsaWRlX2ltZycpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIHByZXYuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybCgnKyBiYWNrZ3JvdW5kTmV4dCArJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInKTtcclxuICAgICAgICBwcmV2LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5iYWNrZ3JvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWFyY2hcclxuXHJcbiAgICB2YXIgZmlyc3RMaW5lID0galF1ZXJ5KCcuZmlyc3RfbGluZScpO1xyXG4gICAgdmFyIHNlY29uZExpbmUgPSBqUXVlcnkoJy5zZWNvbmRfbGluZScpO1xyXG4gICAgdmFyIHNtYWxsRmlyc3RMaW5lID0galF1ZXJ5KCcuZmlyc3RfbGluZV9zbWFsbCcpO1xyXG4gICAgdmFyIHNtYWxsU2Vjb25kTGluZSA9IGpRdWVyeSgnLnNlY29uZF9saW5lX3NtYWxsJyk7XHJcblxyXG4gICAgalF1ZXJ5KCcuc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcuc2VhcmNoIC5mYS1zZWFyY2gnKS50b2dnbGVDbGFzcygnZGlzcGxheV9pYicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNtYWxsJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfaWInKTtcclxuICAgICAgICBzbWFsbEZpcnN0TGluZS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0X292ZXInKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0Jyk7XHJcbiAgICAgICAgc21hbGxTZWNvbmRMaW5lLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kX292ZXInKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNlYXJjaF9ibG9jaycpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X24gZmFkZUluVXAgZmFkZU91dERvd24nKTtcclxuICAgICAgICBqUXVlcnkoJ2JvZHknKS50b2dnbGVDbGFzcygnb3ZlcmZsb3dfaCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2Vfc2VhcmNoJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcuc2VhcmNoIC5mYS1zZWFyY2gnKS50b2dnbGVDbGFzcygnZGlzcGxheV9pYicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNtYWxsJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfaWInKTtcclxuICAgICAgICBzbWFsbEZpcnN0TGluZS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0JykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdF9vdmVyJyk7XHJcbiAgICAgICAgc21hbGxTZWNvbmRMaW5lLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmRfb3ZlcicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNlYXJjaF9ibG9jaycpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X24gZmFkZUluVXAgZmFkZU91dERvd24nKTtcclxuICAgICAgICBqUXVlcnkoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3dfaCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2Vfc2VhcmNoLCAudG9wX3dyYXBwZXIsIC5jbG9zZV9wb3B1cCwgLnF1aWNrX3ZpZXdfY2xvc2UsIC5jbG9zZV9wb3B1cF9hZGQsJyArXHJcbiAgICAgICAgJyAuem9vbV9pbWdfY2xvc2UnKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZChmaXJzdExpbmUpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3QnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZChzZWNvbmRMaW5lKS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKTtcclxuXHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKGZpcnN0TGluZSkucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKHNlY29uZExpbmUpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmRfb3ZlcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmRlbGF5Ki9cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxheSgpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykuYWRkQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3JlZ2lzdGVyX2xlZnQsIC5wb3B1cF9yZWdpc3Rlcl9yaWdodCwgLnBvcHVwX2xvc3RfcGFzc3dvcmQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luX2xlZnQsIC5wb3B1cF9sb2dpbl9yaWdodCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGF5X3F1aWNrX3ZpZXcoKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3JykuYWRkQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGF5X2FkZCgpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2FkZCcpLmFkZENsYXNzKCdkaXNwbGF5X24nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxheV9zdWJzY3JpcHRpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9zdWJzY3JpcHRpb24nKS5hZGRDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwb3B1cF9sb2dpbiovXHJcblxyXG4gICAgalF1ZXJ5KCcubG9naW5fcmVnaXN0ZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5sb2dpbl9zaGFkb3cnKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9jYXJkID0galF1ZXJ5KFwiLnBvcHVwX2xvZ2luXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWpRdWVyeSgnLmxvZ2luX3JlZ2lzdGVyJykuaXMoZS50YXJnZXQpICYmICFwb3B1cF9jYXJkLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9jYXJkLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX2NhcmQucmVtb3ZlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwJykuYWRkQ2xhc3MoJ3BvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmxvZ2luX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsYXksMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcG9wdXAgZXhpdCovXHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2VfcG9wdXAnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5sb2dpbl9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChkZWxheSwzMDApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnF1aWNrX3ZpZXdfY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3JykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5xdWlja192aWV3X3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X3F1aWNrX3ZpZXcsMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmNsb3NlX3BvcHVwX2FkZCwgLnBvcHVwX2FkZF9jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2FkZCcpLnRvZ2dsZUNsYXNzKCdwb3B1cF9zbGlkZV91cCBwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X2FkZCwzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBhc3N3b3JkIHN3aXRjaCovXHJcblxyXG4gICAgalF1ZXJ5KCcuYnV0dG9uX2lucHV0X3Jlc2V0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICByZXNldF92YWwgPSAwO1xyXG4gICAgICAgIGNoZWNrb3V0X3Jlc2V0X3ZhbCA9IDA7XHJcblxyXG4gICAgICAgIHZhciByZXNldF92YWwgPSBqUXVlcnkoJy5wb3B1cF9sb3N0X3Bhc3N3b3JkIC5kZWZhdWx0IC5sb2dpbl9pbnB1dCcpLnZhbCgpO1xyXG4gICAgICAgIHZhciBjaGVja291dF9yZXNldF92YWwgPSBqUXVlcnkoJy5wb3B1cF9sb3N0X3Bhc3N3b3JkIC5kZWZhdWx0IC5jaGVja291dF9yZXNldCcpLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc2V0X3ZhbCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNldF92YWwgIT0gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbiAuZXJyb3InKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbiAuZGVmYXVsdCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luIC5zdWNjZXNzX3NlbmQnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbiAuZXJyb3InKS5mYWRlSW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja291dF9yZXNldF92YWwgIT0gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5xdWVzdGlvbl9jb250YWluZXIgLmVycm9yJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucXVlc3Rpb25fY29udGFpbmVyIC5kZWZhdWx0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucXVlc3Rpb25fY29udGFpbmVyIC5zdWNjZXNzX3NlbmQnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5xdWVzdGlvbl9jb250YWluZXIgLmVycm9yJykuZmFkZUluKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ibG9nIHNjYWxlIGltYWdlXHJcblxyXG4gICAgalF1ZXJ5KCcuaW1nX2NvbnRhaW5lcicpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzExMTEnKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWthJywgdGhpcykuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMS4yKScpO1xyXG4gICAgICAgIGpRdWVyeSgnLmltZ19jb250YWluZXJfc2hhZG93JywgdGhpcykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmJha2EnLCB0aGlzKS5jc3MoJ3RyYW5zZm9ybScsICdzY2FsZSgxKScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5pbWdfY29udGFpbmVyX3NoYWRvdycsIHRoaXMpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yYWRpb19idXR0b25cclxuXHJcbiAgICBqUXVlcnkoJy5mb3JtaW5wYXN0IGxhYmVsJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5mb3JtaW5wYXN0IGxhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9sYWJlbCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlX2xhYmVsJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmxvZ2luLXJlZ2lzdGVyIHN3aXRjaCovXHJcblxyXG4gICAgalF1ZXJ5KCcubG9naW5fYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbl9sZWZ0LCAucG9wdXBfbG9naW5fcmlnaHQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3JlZ2lzdGVyX2xlZnQsIC5wb3B1cF9yZWdpc3Rlcl9yaWdodCcpLmZhZGVJbigzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcucmVnaXN0ZXJfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9yZWdpc3Rlcl9sZWZ0LCAucG9wdXBfcmVnaXN0ZXJfcmlnaHQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luX2xlZnQsIC5wb3B1cF9sb2dpbl9yaWdodCcpLmZhZGVJbigzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuYnV0dGVyX3JpZ2h0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbl9sZWZ0LCAucG9wdXBfbG9naW5fcmlnaHQsIC5wb3B1cF9yZWdpc3Rlcl9sZWZ0LCAucG9wdXBfcmVnaXN0ZXJfcmlnaHQsIC5zdWNjZXNzX3NlbmQsIC5lcnJvcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9zdF9wYXNzd29yZCAuZGVmYXVsdCcpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvc3RfcGFzc3dvcmQnKS5mYWRlSW4oMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypjYXJkKi9cclxuXHJcbiAgICBqUXVlcnkoJy50b3Bfd3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWN0aXZlX3BhcnQnKS5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0JykuYWRkQ2xhc3MoJ2NhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICBqUXVlcnkoJy5jYXJkX2Jsb2NrJykuZmFkZU91dCgzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuYmFza2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5hY3RpdmVfcGFydCcpLnJlbW92ZUNsYXNzKCdjYXJkX3NsaWRlX3JpZ2h0JykuYWRkQ2xhc3MoJ2NhcmRfc2xpZGVfbGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmNhcmRfYmxvY2snKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9jYXJkID0galF1ZXJ5KFwiLmFjdGl2ZV9wYXJ0XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwX2NhcmQuaXMoZS50YXJnZXQpICYmIHBvcHVwX2NhcmQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfY2FyZC5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0JykuYWRkQ2xhc3MoJ2NhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmNhcmRfYmxvY2snKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qY2xvc2UgY2FyZCBpdGVtKi9cclxuXHJcbiAgICBqUXVlcnkoJy5jbG9zZV9jYXJkX2l0ZW0nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypzYWxlICovXHJcblxyXG4gICAgLy9mdW5jdGlvbiBzYWxlU2hvdygpIHtcclxuICAgIC8vICAgIGpRdWVyeSgnLnNhbGUnKS5mYWRlSW4oKTtcclxuICAgIC8vfVxyXG4gICAgLy9cclxuICAgIC8vc2V0VGltZW91dChzYWxlU2hvdywxMDAwMCk7XHJcblxyXG4gICAgalF1ZXJ5KCcuc2FsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2FsZScpLnRvZ2dsZUNsYXNzKCdzYWxlX3NsaWRlX3JpZ2h0IHNhbGVfc2xpZGVfbGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNhbGVfY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NhcmRfc2xpZGVfcmlnaHQgY2FyZF9zbGlkZV9sZWZ0Jyk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfc2FsZV9jb250YWluZXIgPSBqUXVlcnkoXCIuc2FsZV9jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9zYWxlID0galF1ZXJ5KFwiLnNhbGVcIik7XHJcbiAgICAgICAgICAgIGlmICghcG9wdXBfc2FsZS5pcyhlLnRhcmdldCkgJiYgIXBvcHVwX3NhbGVfY29udGFpbmVyLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9zYWxlX2NvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cF9zYWxlX2NvbnRhaW5lci5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0JykuYWRkQ2xhc3MoJ2NhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3NhbGUucmVtb3ZlQ2xhc3MoJ3NhbGVfc2xpZGVfbGVmdCcpLmFkZENsYXNzKCdzYWxlX3NsaWRlX3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBvcHVwX3N1YnNjcmlwdGlvbiovXHJcblxyXG4gICAgalF1ZXJ5KCcucmlnaHRfYmFubmVyX2Jsb2NrIC5idXR0b25fc3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBzdWJzX3ZhbCA9IGpRdWVyeSgnLmJhbm5lcl9ibG9jayBpbnB1dCcpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoc3Vic192YWwgIT0gMCApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfc3Vic2NyaXB0aW9uJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF9zdWJzY3JpcHRpb24nKS50b2dnbGVDbGFzcygncG9wdXBfc2xpZGVfdXAgcG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5hZGRfc2hhZG93JykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3B1cF9zdWJzID0galF1ZXJ5KFwiLnBvcHVwX3N1YnNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghalF1ZXJ5KCcucmlnaHRfYmFubmVyX2Jsb2NrIC5idXR0b25fc3VibWl0JykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXBvcHVwX3N1YnMuaXMoZS50YXJnZXQpICYmIHBvcHVwX3N1YnMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwX3N1YnMucmVtb3ZlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwJykuYWRkQ2xhc3MoJ3BvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJy5hZGRfc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsYXlfc3Vic2NyaXB0aW9uLDMwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcG9wdXBfYWRkKi9cclxuXHJcbiAgICBqUXVlcnkoJy5oaWRkZW5fcHJpY2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9hZGQnKS5yZW1vdmVDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfYWRkJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5hZGRfc2hhZG93JykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfYWRkID0galF1ZXJ5KFwiLnBvcHVwX2FkZFwiKTtcclxuICAgICAgICAgICAgaWYgKCFqUXVlcnkoJy5idXlfZW5qb3knKS5pcyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICAgICAgICFqUXVlcnkoJy5oaWRkZW5fcHJpY2UnKS5pcyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICAgICAgICFqUXVlcnkoJy5mYS1zaG9wcGluZy1jYXJ0JykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAgICAgICAhcG9wdXBfYWRkLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9hZGQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfYWRkLnJlbW92ZUNsYXNzKCdwb3B1cF9zbGlkZV91cCcpLmFkZENsYXNzKCdwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5hZGRfc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkZWxheV9hZGQsMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcG9wdXBfcXVpY2tfdmlldyovXHJcblxyXG4gICAgalF1ZXJ5KCcuaGlkZGVuX2hvdmVyIC5mYS1zZWFyY2gtcGx1cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXcnKS5yZW1vdmVDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfcXVpY2tfdmlldycpLnRvZ2dsZUNsYXNzKCdwb3B1cF9zbGlkZV91cCBwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucXVpY2tfdmlld19zaGFkb3cnKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9xdWljayA9IGpRdWVyeShcIi5wb3B1cF9xdWlja192aWV3XCIpO1xyXG4gICAgICAgICAgICBpZiAoIWpRdWVyeSgnLmhpZGRlbl9ob3ZlciAuZmEtc2VhcmNoLXBsdXMnKS5pcyhlLnRhcmdldCkgJiYgIXBvcHVwX3F1aWNrLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9xdWljay5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cF9xdWljay5yZW1vdmVDbGFzcygncG9wdXBfc2xpZGVfdXAnKS5hZGRDbGFzcygncG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucXVpY2tfdmlld19zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X3F1aWNrX3ZpZXcsMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcXVpY2tfdmlld19wb3B1cCBzbGlkZXIqL1xyXG5cclxuICAgIHZhciBwb3B1cFNsaWRlckl0ZW1zID0galF1ZXJ5KCcucG9wdXBfcXVpY2tfdmlld19sZWZ0IHVsJykuY2hpbGRyZW4oJ2xpJyk7XHJcbiAgICB2YXIgcG9wdXBTbGlkZXJJdGVtc0xlbmd0aCA9IHBvcHVwU2xpZGVySXRlbXMubGVuZ3RoO1xyXG4gICAgdmFyIHBvcHVwU2xpZGVySXRlbXNDb3VudGVyID0gMDtcclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3IC5mYS1hbmdsZS1yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcG9wdXBTbGlkZXJJdGVtcy5yZW1vdmVDbGFzcygnZGlzcGxheV9iJyk7XHJcblxyXG4gICAgICAgIGlmIChwb3B1cFNsaWRlckl0ZW1zQ291bnRlciA+IHBvcHVwU2xpZGVySXRlbXNMZW5ndGgtMikge1xyXG4gICAgICAgICAgICBwb3B1cFNsaWRlckl0ZW1zQ291bnRlciA9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5KHBvcHVwU2xpZGVySXRlbXNbKytwb3B1cFNsaWRlckl0ZW1zQ291bnRlcl0pLmFkZENsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXcgLmZhLWFuZ2xlLWxlZnQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHBvcHVwU2xpZGVySXRlbXMucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuICAgICAgICBpZiAocG9wdXBTbGlkZXJJdGVtc0NvdW50ZXIgPCAxKSB7XHJcbiAgICAgICAgICAgIHBvcHVwU2xpZGVySXRlbXNDb3VudGVyID0gcG9wdXBTbGlkZXJJdGVtc0xlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeShwb3B1cFNsaWRlckl0ZW1zWy0tcG9wdXBTbGlkZXJJdGVtc0NvdW50ZXJdKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKm5leHQtcHJldiBzbGlkZXIqL1xyXG4gICAgbmV4dC5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICBpZiAoY291bnRlciA9PSBzbGlkZUxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbc2xpZGVMZW5ndGgtMV0pLmFuaW1hdGUoeydvcGFjaXR5JzogMH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYW5pbWF0ZU5leHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gMCl7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZVtzbGlkZUxlbmd0aC0yXSkuZmluZCgnLnNsaWRlX2ltZycpLnJlbW92ZUNsYXNzKCdzY2FsZV9zbGlkZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gMSl7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZVtzbGlkZUxlbmd0aC0xXSkuZmluZCgnLnNsaWRlX2ltZycpLnJlbW92ZUNsYXNzKCdzY2FsZV9zbGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlci0yXSkuZmluZCgnLnNsaWRlX2ltZycpLnJlbW92ZUNsYXNzKCdzY2FsZV9zbGlkZScpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyLTFdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDB9LCAxMDAwKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlcl0pLmFuaW1hdGUoeydvcGFjaXR5JzogMX0sIDgwMCk7XHJcbiAgICAgICAgYmFja2dyb3VuZENoYW5nZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJldi5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvdW50ZXItLTtcclxuICAgICAgICBpZiAoY291bnRlciA8IDApe1xyXG4gICAgICAgICAgICBjb3VudGVyID0gc2xpZGVMZW5ndGgtMTtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlWzBdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFuaW1hdGVOZXh0KCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID09IHNsaWRlTGVuZ3RoLTEpe1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbMV0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID09IHNsaWRlTGVuZ3RoLTIpe1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbMF0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXIrMl0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlcisxXSkuYW5pbWF0ZSh7J29wYWNpdHknOiAwfSwgMTAwMCk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDF9LCA4MDApO1xyXG4gICAgICAgIGJhY2tncm91bmRDaGFuZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qY2Fyb3VzZWwqL1xyXG5cclxuICAgICQoXCIuY2Fyb3VzZWxfdmlkZW9fcHJvZHVjdFwiKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTIwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuaXRlbV9zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTEyMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLm1vZGVsX3Bob3RvX2Nhcm91c2VsXCIpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExMjAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9hZGQgdG8gY2FyZFxyXG4gICAgZnVuY3Rpb24gZGVsYXlDbG9zZUF0dGVudGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5hdHRlbnRpb24nKS5mYWRlT3V0KDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saW5rIGRlbGF5XHJcbiAgICBmdW5jdGlvbiBkZWxheUhyZWYoKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcud2lzaGxpc3RfaG92ZXInKS5hdHRyKCdocmVmJywgJ3dpc2hsaXN0Lmh0bWwnKTtcclxuICAgICAgICBqUXVlcnkoJy53aXNobGlzdF9ob3ZlcicpLmNzcygnY29sb3InLCAnI0Q0MzY0QycpO1xyXG4gICAgICAgIGpRdWVyeSgnLmxpa2UgLmZhLWhlYXJ0JykuY3NzKCdjb2xvcicsICcjRDQzNjRDJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcubGlrZSAuZmEtaGVhcnQnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaW4gbW9kZWwgY2FydFxyXG4gICAgalF1ZXJ5KCcucGhvdG9fbW9kZWxfY2FydF9jb250ZW50IC5idXR0b25faW5wdXRfbG9naW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmF0dGVudGlvbicpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZGVsYXlDbG9zZUF0dGVudGlvbiwgMTAwMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9pbiB3aXNobGlzdFxyXG4gICAgalF1ZXJ5KCcuYnV0dG9uX3RkIC5idXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmF0dGVudGlvbicpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZGVsYXlDbG9zZUF0dGVudGlvbiwgMTAwMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jaGVja291dFxyXG4gICAgalF1ZXJ5KCcucXVlc3Rpb24+c3BhbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuICAgIC8vaW4gY2hlY2tvdXRcclxuICAgIGpRdWVyeSgnLnJlbWVtYmVyX2JvdHRvbSBhJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy92YXIgbGlzdCA9IGpRdWVyeSgnLml0ZW1fc2xpZGVyJykuZmluZCgnLml0ZW1fc2xpZGVyX2xpc3QnKTtcclxuICAgIC8vdmFyIGl0ZW1zID0galF1ZXJ5KFwiLml0ZW1fc2xpZGVyX2xpc3RcIikuZmluZCgnLmNhcnVzZWxfaXRlbScpO1xyXG4gICAgLy92YXIgc2xpZGVzID0galF1ZXJ5KCcuaXRlbV9zbGlkZXJfbGlzdCcpLmNoaWxkcmVuKCcuY2FydXNlbF9pdGVtJyk7XHJcbiAgICAvL3ZhciBzbGlkZV93aWR0aCA9IGl0ZW1zLm91dGVyV2lkdGgoKSsyMDtcclxuICAgIC8vdmFyIGNhcnVzZWxfd2lkdGggPSBzbGlkZV93aWR0aDtcclxuICAgIC8vXHJcbiAgICAvL2l0ZW1zLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgY2FydXNlbF93aWR0aCArPSBqUXVlcnkodGhpcykub3V0ZXJXaWR0aCgpO1xyXG4gICAgLy99KTtcclxuICAgIC8vXHJcbiAgICAvL2pRdWVyeSgnLml0ZW1fc2xpZGVyX2xpc3QnKS5jc3MoJ3dpZHRoJywgY2FydXNlbF93aWR0aCArICdweCcpO1xyXG4gICAgLy9cclxuICAgIC8vdmFyIHBpeGVsc09mZnNldCA9IHNsaWRlX3dpZHRoO1xyXG4gICAgLy92YXIgY3VycmVudExlZnRWYWx1ZSA9IDA7XHJcbiAgICAvL3ZhciBlbGVtZW50c0NvdW50ID0galF1ZXJ5KCcuaXRlbV9zbGlkZXJfbGlzdCcpLmZpbmQoJy5jYXJ1c2VsX2l0ZW0nKS5sZW5ndGg7XHJcbiAgICAvL3ZhciBtaW5pbXVtT2Zmc2V0ID0gLSgoZWxlbWVudHNDb3VudCAtIDMpICogcGl4ZWxzT2Zmc2V0KTtcclxuICAgIC8vdmFyIG1heGltdW1PZmZzZXQgPSAwO1xyXG4gICAgLy9cclxuICAgIC8valF1ZXJ5KFwiLmFycm93X3ByZXZfY2Fyb3VzZWxcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgaWYgKGN1cnJlbnRMZWZ0VmFsdWUgIT0gbWF4aW11bU9mZnNldCkge1xyXG4gICAgLy8gICAgICAgIGN1cnJlbnRMZWZ0VmFsdWUgKz0gc2xpZGVfd2lkdGg7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KCcuaXRlbV9zbGlkZXJfbGlzdCcpLmFuaW1hdGUoe2xlZnQ6IGN1cnJlbnRMZWZ0VmFsdWUgKyBcInB4XCJ9LCAzMDApO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy99KTtcclxuICAgIC8vXHJcbiAgICAvL2pRdWVyeShcIi5hcnJvd19uZXh0X2Nhcm91c2VsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgIGlmIChjdXJyZW50TGVmdFZhbHVlICE9IG1pbmltdW1PZmZzZXQpIHtcclxuICAgIC8vICAgICAgICBjdXJyZW50TGVmdFZhbHVlIC09IHNsaWRlX3dpZHRoO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSgnLml0ZW1fc2xpZGVyX2xpc3QnKS5hbmltYXRlKHtsZWZ0OiBjdXJyZW50TGVmdFZhbHVlICsgXCJweFwifSwgMzAwKTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ltYWdlIHNvdXJjZSByZXBsYWNlXHJcblxyXG4gICAgdmFyIG1haW5JbWFnZVNyYyA9IGpRdWVyeSgnLnZpZGVvX21haW4gLnNsaWNrLXRyYWNrIC5jYXJvdXNlbF9waWN0dXJlOm50aC1jaGlsZCg0KSBpbWcnKS5hdHRyKCdzcmMnKTtcclxuICAgIHZhciBwaWN0dXJlQXJyYXlGb3JSZXBsYWNlID0gW107XHJcbiAgICB2YXIgcGljdHVyZUFycmF5Rm9yQXNzb2NpYXRpb24gPSBqUXVlcnkoJy5jYXJvdXNlbF92aWRlb19wcm9kdWN0IC5jYXJvdXNlbF9waWN0dXJlIGltZycpLmdldCgpO1xyXG4gICAgdmFyIGltZ0NvdW50ZXIgPSAwO1xyXG4gICAgdmFyIGluZGV4ID0gMztcclxuXHJcbiAgICBqUXVlcnkoJy52aWRlb19jYXJvdXNlbF9pbWcgaW1nJykuYXR0cignc3JjJywgbWFpbkltYWdlU3JjKTtcclxuXHJcbiAgICBqUXVlcnkocGljdHVyZUFycmF5Rm9yQXNzb2NpYXRpb24pLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGltYWdlU3JjID0galF1ZXJ5KHRoaXMpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIGluZGV4ID0galF1ZXJ5KHBpY3R1cmVBcnJheUZvckFzc29jaWF0aW9uKS5pbmRleCh0aGlzKTtcclxuICAgICAgICBqUXVlcnkoJy52aWRlb19jYXJvdXNlbF9pbWcgaW1nJykuYXR0cignc3JjJywgaW1hZ2VTcmMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ltYWdlcyB6b29tXHJcblxyXG4gICAgLy9mb3IgdmlkZW8gY2FydFxyXG5cclxuICAgIGpRdWVyeSgnLmNhcm91c2VsX3ZpZGVvX3Byb2R1Y3QgLmNhcm91c2VsX3BpY3R1cmUgaW1nJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHBpY3R1cmVBcnJheUZvclJlcGxhY2VbaW1nQ291bnRlcl0gPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgdmFyIGNsb25lSW1nU3JjID0gcGljdHVyZUFycmF5Rm9yUmVwbGFjZVtpbWdDb3VudGVyXS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBqUXVlcnkoJy56b29tX2ltZ19iaWcnKS5hcHBlbmQoJzxkaXY+PGltZyBzcmM9JyArY2xvbmVJbWdTcmMrICcgYWx0PVwiXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgaW1nQ291bnRlcisrO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcucGhvdG9fbW9kZWxfY2FydF9jb250ZW50IC5uZXdfY29udGFpbmVyIC5sZWZ0X3NpZGUgLnZpZGVvX2Nhcm91c2VsX2ltZz5pbWcnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgbGFzdEFycmF5Rm9yVmlkZW8gPSBqUXVlcnkoJy56b29tX2ltZ19iaWcnKS5jaGlsZHJlbignZGl2Jyk7XHJcblxyXG4gICAgICAgIHZhciBpID0gaW5kZXg7XHJcbiAgICAgICAgdmFyIG5leHQgPSBqUXVlcnkoJy56b29tX2ltZ19iaWcgLm5leHQnKTtcclxuICAgICAgICB2YXIgcHJldiA9IGpRdWVyeSgnLnpvb21faW1nX2JpZyAucHJldicpO1xyXG5cclxuICAgICAgICBqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW8pLnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICBqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW9baV0pLmFkZENsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICBqUXVlcnkoJy5pbWFnZV96b29tX3NoYWRvdycpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLndyYXBwZXJfem9vbV9pbWdfYmlnJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnpvb21faW1nX2JpZyAubmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlbykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGk+bGFzdEFycmF5Rm9yVmlkZW8ubGVuZ3RoLTIpIHtcclxuICAgICAgICAgICAgICAgIGkgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvWysraV0pLmFkZENsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvW2ldKSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJy56b29tX2ltZ19iaWcgLnByZXYnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlbykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGk8MSkge1xyXG4gICAgICAgICAgICAgICAgaSA9IGxhc3RBcnJheUZvclZpZGVvLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvWy0taV0pLmFkZENsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlb1tpXSkpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8kKFwiLnpvb21faW1nX2JpZ1wiKS5zbGljayh7XHJcbiAgICAgICAgLy8gICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgLy8gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAvLyAgICBpbml0aWFsU2xpZGU6IGluZGV4LFxyXG4gICAgICAgIC8vICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAvLyAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgIC8vfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfem9vbSA9IGpRdWVyeShcIi53cmFwcGVyX3pvb21faW1nX2JpZ1wiKTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cF96b29tLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF96b29tLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3pvb20uZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuaW1hZ2Vfem9vbV9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vZm9yIHBob3RvX2NhcnRcclxuXHJcbiAgICBqUXVlcnkoJy5waG90b19tb2RlbF9jYXJ0X2NvbnRlbnQgLm5ld19jb250YWluZXIgLmxlZnRfc2lkZT5pbWcnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBiaWdJbWcgPSBqUXVlcnkodGhpcykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgalF1ZXJ5KCdtYWluJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiem9vbV9pbWdfYmlnX3BpY3R1cmVcIj48aW1nIHNyYz0nK2JpZ0ltZysnIGFsdD1cIlwiPjwvZGl2PicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmltYWdlX3pvb21fc2hhZG93JykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuem9vbV9pbWdfYmlnX3BpY3R1cmUnKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF96b29tID0galF1ZXJ5KFwiLnpvb21faW1nX2JpZ19waWN0dXJlXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWpRdWVyeSgnLnpvb21faW1nX2Nsb3NlJykuaXMoZS50YXJnZXQpICYmICFwb3B1cF96b29tLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF96b29tLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3pvb20uZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuaW1hZ2Vfem9vbV9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy56b29tX2ltZ19iaWdfcGljdHVyZScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaG92ZXIgbWVudV9saXN0XHJcblxyXG4gICAgalF1ZXJ5KCcubGVmdF9oZWFkZXIgLm1lbnUgPiBsaTpudGgtY2hpbGQoMyknKS5ob3ZlciggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLm1lbnVfbGlzdCcpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLm1lbnVfbGlzdCcpLmFkZENsYXNzKCdhY3RpdmVfbWVudScpO1xyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcubWVudV9saXN0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICBqUXVlcnkoJy5tZW51X2xpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlX21lbnUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmZvb3Rlcl9tZW51IC5tZW51ID4gbGk6bnRoLWNoaWxkKDMpJykuaG92ZXIoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBqUXVlcnkoJy5mb290ZXJfbWVudV9wb3NpdGlvbicpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLmZvb3Rlcl9tZW51X3Bvc2l0aW9uJykuYWRkQ2xhc3MoJ2FjdGl2ZV9tZW51X2Zvb3RlcicpO1xyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZm9vdGVyX21lbnVfcG9zaXRpb24nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZvb3Rlcl9tZW51X3Bvc2l0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9tZW51X2Zvb3RlcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFic1xyXG5cclxuICAgIHZhciB0YWJzQnV0dG9uID0galF1ZXJ5KCcubmF2X3RhYnMgdWwnKS5jaGlsZHJlbignbGknKTtcclxuICAgIHZhciB0YWJzQmxvY2sgPSBqUXVlcnkoJy5uYXZfYmxvY2tzIHVsJykuY2hpbGRyZW4oJ2xpJyk7XHJcblxyXG4gICAgalF1ZXJ5KCcubmF2X3RhYnMgdWwgbGknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBpID0galF1ZXJ5KHRoaXMpLmluZGV4KCk7XHJcbiAgICAgICAgalF1ZXJ5KHRhYnNCdXR0b24pLnJlbW92ZUNsYXNzKCdhY3RpdmVfdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRhYnNCbG9jaykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYiBhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJbkxlZnQnKTtcclxuICAgICAgICBqUXVlcnkodGFic0Jsb2NrW2ldKS5hZGRDbGFzcygnZGlzcGxheV9iIGFuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluTGVmdCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9saWZ0XHJcblxyXG4gICAgalF1ZXJ5KCcjc2Nyb2xsdXAnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT42MDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjc2Nyb2xsdXAnKS5mYWRlSW4oJzUwMCcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNzY3JvbGx1cCcpLmZhZGVPdXQoJzUwMCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwYWdpbmF0aW9uKi9cclxuXHJcbiAgICBqUXVlcnkoJy5wYWdpbmF0aW9uIHVsIGxpJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wYWdpbmF0aW9uIHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9wYWdlJyk7XHJcbiAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9wYWdlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaG92ZXIgbWVudSBpbWFnZVxyXG4gICAgdmFyIGltYWdlU3JjTWVudTtcclxuICAgIHZhciBkZWZhdWx0U3JjSW1hZ2UgPSBqUXVlcnkoJy5oaWRkZW5fbWVudV9waWN0dXJlJykuYXR0cignc3JjJyk7XHJcblxyXG4gICAgalF1ZXJ5KCcubWVudV9pdGVtIGRpdicpLmhvdmVyKCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbWFnZVNyY01lbnUgPSBqUXVlcnkodGhpcykubmV4dCgpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuaGlkZGVuX21lbnVfcGljdHVyZScpLmF0dHIoJ3NyYycsIGltYWdlU3JjTWVudSk7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8valF1ZXJ5KCcuaGlkZGVuX21lbnVfcGljdHVyZScpLmF0dHIoJ3NyYycsIGRlZmF1bHRTcmNJbWFnZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZmlsdGVyXHJcblxyXG4gICAgalF1ZXJ5KCcuZmlsdGVyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2ZpbHRlcl9vcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Jsb2cgYW5pbWF0aW9uXHJcblxyXG4gICAgdmFyIGZpZ3VyZUFycmF5ID0galF1ZXJ5KCcuZmlndXJlX2Jsb2NrJykuY2hpbGRyZW4oJ2ZpZ3VyZScpO1xyXG4gICAgdmFyIGZpZ3VyZVNob3dCbG9jayA9IDY7XHJcbiAgICB2YXIgZmlndXJlQ291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yIChmaWd1cmVDb3VudGVyO2ZpZ3VyZUNvdW50ZXI8ZmlndXJlU2hvd0Jsb2NrO2ZpZ3VyZUNvdW50ZXIrKykge1xyXG4gICAgICAgIGpRdWVyeShmaWd1cmVBcnJheVtmaWd1cmVDb3VudGVyXSkuYWRkQ2xhc3MoJ2Rpc3BsYXlfYiBhbmltYXRlZF9mYWRlSW5MZWZ0IHpvb21JbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGpRdWVyeSgnLmZpZ3VyZV9idXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGZpZ3VyZVNob3dCbG9jays9NjtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWd1cmVTaG93QmxvY2spO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpZ3VyZUNvdW50ZXIpO1xyXG4gICAgICAgIGZvciAoZmlndXJlQ291bnRlcjtmaWd1cmVDb3VudGVyPGZpZ3VyZVNob3dCbG9jaztmaWd1cmVDb3VudGVyKyspIHtcclxuICAgICAgICAgICAgalF1ZXJ5KGZpZ3VyZUFycmF5W2ZpZ3VyZUNvdW50ZXJdKS5hZGRDbGFzcygnZGlzcGxheV9iIGFuaW1hdGVkX2ZhZGVJbkxlZnQgem9vbUluJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9maXhlZCBtZW51XHJcblxyXG4gICAgdmFyIHNjcm9sbCA9IGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKHNjcm9sbCA+IDApIHtcclxuICAgICAgICBqUXVlcnkoJy5oZWFkZXJfc3RhdGljJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgalF1ZXJ5KCdoZWFkZXInKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5zZWFyY2hfYmxvY2snKS5jc3MoJ3RvcCcsICc4MHB4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2Nyb2xsID0galF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuaGVhZGVyX3N0YXRpYycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zZWFyY2hfYmxvY2snKS5jc3MoJ3RvcCcsICc4MHB4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5oZWFkZXJfc3RhdGljJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCdoZWFkZXInKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2VhcmNoX2Jsb2NrJykuY3NzKCd0b3AnLCAnOTlweCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnJlYWRfbW9yZSovXHJcblxyXG4gICAgLy92YXIgY2hlY2tlciA9IGpRdWVyeSgnZGl2JykuaXMoJy5ibG9nX3RleHQnKTtcclxuICAgIC8vdmFyIHRleHQgPSBqUXVlcnkoJy5ibG9nX3RleHQnKTtcclxuICAgIC8vdmFyIG1vcmUgPSBqUXVlcnkoXCIucmVhZF9tb3JlXCIpO1xyXG4gICAgLy92YXIgbGVzcyA9IGpRdWVyeShcIi5yZWFkX2xlc3NcIik7XHJcbiAgICAvL1xyXG4gICAgLy9pZiAoY2hlY2tlciA9PSB0cnVlKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgdmFyIGhlaWdodF9hdXRvID0gW107XHJcbiAgICAvLyAgICB2YXIgaSA9IDA7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgdmFyIGxpbmVoZWlnaHQgPSB0ZXh0LmNzcygnbGluZS1oZWlnaHQnKS5yZXBsYWNlKFwicHhcIiwgXCJcIik7XHJcbiAgICAvLyAgICB2YXIgZml2ZV9saW5lcyA9IGxpbmVoZWlnaHQqNDtcclxuICAgIC8vXHJcbiAgICAvLyAgICB0ZXh0LmVhY2goZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICAgICBoZWlnaHRfYXV0b1tpXSA9IGpRdWVyeSh0aGlzKS5oZWlnaHQoKTtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZyhoZWlnaHRfYXV0b1tpXStcIl9fX1wiKTtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZyh0ZXh0LmhlaWdodCgpKycrKysnKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgaWYgKGhlaWdodF9hdXRvW2ldID09IGZpdmVfbGluZXMpIHtcclxuICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coJ3VyYWEnKTtcclxuICAgIC8vICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgaSsrO1xyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgdGV4dC5jc3MoJ2hlaWdodCcsIGZpdmVfbGluZXMpO1xyXG4gICAgLy9cclxuICAgIC8vICAgIG1vcmUuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgIHZhciBpID0galF1ZXJ5KHRoaXMpLnByZXYodGV4dCkuaW5kZXgoJy5ibG9nX3RleHQnKTtcclxuICAgIC8vICAgICAgICBqUXVlcnkodGhpcykucHJldih0ZXh0KS5hbmltYXRlKHtoZWlnaHQ6IGhlaWdodF9hdXRvW2ldfSwgNDAwKTtcclxuICAgIC8vICAgICAgICBqUXVlcnkodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIC8vICAgICAgICBqUXVlcnkodGhpcykubmV4dChsZXNzKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICBsZXNzLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICBqUXVlcnkodGhpcykucHJldihtb3JlKS5wcmV2KHRleHQpLmFuaW1hdGUoe2hlaWdodDogZml2ZV9saW5lc30sIDMwMCk7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYobW9yZSkuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgLy9cclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb2xsb3dfc2xpZGVyXHJcblxyXG4gICAgdmFyIGZvbGxvd1NsaWRlID0galF1ZXJ5KCcuZm9sbG93X2xlZnQnKS5jaGlsZHJlbignLnBvaW50ZXJfc2xpZGUnKTtcclxuXHJcbiAgICBmb2xsb3dTbGlkZS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMgPT0gZm9sbG93U2xpZGVbMF0gKXtcclxuICAgICAgICAgICAgalF1ZXJ5KCcubmF2aWdhdGlvbicpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRvdCBhY3RpdmVfZG90XCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5uYXZpZ2F0aW9uJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2YXIgZG90ID0galF1ZXJ5KCcubmF2aWdhdGlvbicpLmNoaWxkcmVuKCcuZG90Jyk7XHJcbiAgICB2YXIgbmF2aWdhdGlvbldpZHRoID0galF1ZXJ5KCcubmF2aWdhdGlvbicpLndpZHRoKCk7XHJcbiAgICBqUXVlcnkoJy5uYXZpZ2F0aW9uJykuY3NzKCdtYXJnaW4tbGVmdCcsIC1uYXZpZ2F0aW9uV2lkdGgvMiArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9sbG93X3NsaWRlciBuYXZpZ2F0aW9uIHBvc2l0aW9uXHJcblxyXG4gICAgLy9mdW5jdGlvbiBuYXZpZ2F0aW9uUG9zaXRpb24oKSB7XHJcbiAgICAvLyAgICB2YXIgcG9pbnRlclNsaWRlSGVpZ2h0ID0galF1ZXJ5KCcuZm9sbG93X2xlZnQgLmRpc3BsYXlfYicpLmhlaWdodCgpO1xyXG4gICAgLy8gICAgY29uc29sZS5sb2cocG9pbnRlclNsaWRlSGVpZ2h0KTtcclxuICAgIC8vICAgIGpRdWVyeSgnLm5hdmlnYXRpb24nKS5jc3MoJ3RvcCcsIDIwK3BvaW50ZXJTbGlkZUhlaWdodCArICdweCcpO1xyXG4gICAgLy99XHJcbiAgICAvL1xyXG4gICAgLy9uYXZpZ2F0aW9uUG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZvbGxvd19zbGlkZXIgZG90c1xyXG5cclxuICAgIGpRdWVyeSgnLmRvdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG90LnJlbW92ZUNsYXNzKCdhY3RpdmVfZG90Jyk7XHJcbiAgICAgICAgZm9sbG93U2xpZGUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZGlzcGxheV9iIGZhZGVJbkxlZnQnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kb3QnKTtcclxuICAgICAgICB2YXIgZG90Q291bnRlciA9IGpRdWVyeSh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgIGpRdWVyeShmb2xsb3dTbGlkZVtkb3RDb3VudGVyXSkuYWRkQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZGlzcGxheV9iIGZhZGVJbkxlZnQnKTtcclxuICAgICAgICAvL25hdmlnYXRpb25Qb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyptb2JpbGVfbWVudSovXHJcblxyXG4gICAgLy92YXIgbW9iaWxlTGlzdCA9IGpRdWVyeSgnLm1lbnVfbW9iaWxlX2xpc3QnKTtcclxuICAgIC8vXHJcbiAgICAvL3ZhciBtb2JpbGVMaXN0SGVpZ2h0ID0gbW9iaWxlTGlzdC5oZWlnaHQoKTtcclxuXHJcbiAgICBqUXVlcnkoJy5pY29uLXN1Yi1tZW51JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ21vYmlsZV91cCBtb2JpbGVfZG93biBtb2JpbGVfdXBfcmV2ZXJzZSBtb2JpbGVfZG93bl9yZXZlcnNlJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLm1lbnVfbW9iaWxlPmxpOm50aC1jaGlsZCgyKT5hJykudG9nZ2xlQ2xhc3MoJ2N1cnJlbnQtbWVudS1pdGVtJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5tZW51X21vYmlsZT5saTpudGgtY2hpbGQoMik+YScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnbW9iaWxlX3VwIG1vYmlsZV9kb3duIG1vYmlsZV91cF9yZXZlcnNlIG1vYmlsZV9kb3duX3JldmVyc2UnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnY3VycmVudC1tZW51LWl0ZW0nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xpbmsgbm9uZS1kZWZhdWx0XHJcblxyXG4gICAgalF1ZXJ5KCcubWVudT5saTpudGgtY2hpbGQoMyk+YScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy93aGlzaGxpc3QgY2xpY2tcclxuXHJcbiAgICBqUXVlcnkoJy53aXNobGlzdF9ob3ZlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9pbnRfdGV4dCcsdGhpcykudGV4dCgnQnJvd3NlIFdpc2hsaXN0Jyk7XHJcbiAgICAgICAgc2V0VGltZW91dChkZWxheUhyZWYsNTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGljdHVyZSBob3ZlclxyXG5cclxuICAgIGpRdWVyeSgnLmNhcm91c2VsX3BpY3R1cmUgLmhpZGRlbl9ob3ZlciBpJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLmFkZENsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkucmVtb3ZlQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLm1vZGVscyAuaGlkZGVuX2hvdmVyIGksIC52aWRlb19jb250YWluZXIgLmhpZGRlbl9ob3ZlciBpJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLmFkZENsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkucmVtb3ZlQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xvc2UgaXRlbSB3aXNobGlzdFxyXG5cclxuICAgIGpRdWVyeSgnLndpc2hsaXN0X2Jsb2NrIC5jbG9zZSAuY2xvc2VfYW5pbWF0aW9uX2NhcmQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Nsb3NlIGl0ZW0gY2FydFxyXG5cclxuICAgIGpRdWVyeSgnLmNvbnRlbnRfY2FydCAud2lzaGxpc3RfYmxvY2sgLmNsb3NlX2FuaW1hdGlvbl9jYXJkJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ21hcmsnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuZmFkZU91dCgpO1xyXG4gICAgICAgIGpRdWVyeSgnLmF0dGVudGlvbicpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIC8vc2V0VGltZW91dChkZWxheUNsb3NlQXR0ZW50aW9uLCAxMDAwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy51bmRvJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tYXJrJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVja291dFxyXG5cclxuICAgIGpRdWVyeSgnLmNoZWNrb3V0X3RhYmxlIC5jbG9zZV9hbmltYXRpb25fY2FyZCwgLndpc2hsaXN0X2l0ZW0gLmNsb3NlX2FuaW1hdGlvbl9jYXJkJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5maXJzdF9saW5lJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuc2Vjb25kX2xpbmUnKS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZCcpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kX292ZXInKTtcclxuXHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuZmlyc3RfbGluZScpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3QnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnLnNlY29uZF9saW5lJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmRfb3ZlcicpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5jaGVja291dF90YWJsZSAuY2xvc2VfYW5pbWF0aW9uX2NhcmQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FjY291bnRcclxuXHJcbiAgICBqUXVlcnkoJy5sZWZ0X2FjY291bnQgdWwgbGknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmxlZnRfYWNjb3VudCB1bCBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmVfYWNjb3VudCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2FjY291bnQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbG9hZF9tb3JlX3BhZ2VcclxuXHJcbiAgICAvL3ZhciBmaWd1cmVCbG9jayA9IGpRdWVyeSgnLm5ld3MnKS5jaGlsZHJlbignLmZpZ3VyZV9ibG9jaycpO1xyXG4gICAgLy92YXIgZmlndXJlQ291bnRlciA9IDA7XHJcbiAgICAvLy8vdmFyIEJsb2NrQ291bnRlciA9IDA7XHJcbiAgICAvL3ZhciBmaWd1cmVOdW1iZXIgPSAxO1xyXG4gICAgLy9cclxuICAgIC8valF1ZXJ5KCdmaWd1cmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgLy9cclxuICAgIC8vICAgIGlmIChmaWd1cmVDb3VudGVyID49IGZpZ3VyZU51bWJlcikge1xyXG4gICAgLy8gICAgICAgIGpRdWVyeShmaWd1cmVCbG9ja1tmaWd1cmVDb3VudGVyXSkuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgIGpRdWVyeShmaWd1cmVCbG9ja1tmaWd1cmVDb3VudGVyXSkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgZmlndXJlQ291bnRlcisrO1xyXG4gICAgLy99KTtcclxuICAgIC8vXHJcbiAgICAvL2ZpZ3VyZUNvdW50ZXIgPSAxO1xyXG4gICAgLy9cclxuICAgIC8valF1ZXJ5KCcuZmlndXJlX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICBqUXVlcnkoZmlndXJlQmxvY2tbZmlndXJlQ291bnRlcisrXSkuYWRkQ2xhc3MoJ2Rpc3BsYXlfYiBhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJblJpZ2h0Jyk7XHJcbiAgICAvL30pO1xyXG5cclxufSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnRpbWVyIGZvciBzbGlkZXIqL1xyXG5cclxudmFyIHJ1biA9IHNldEludGVydmFsKCdyb3RhdGUoKScsIDEwMDAwKTtcclxuXHJcbmpRdWVyeSgnLnNsaWRlcicpLmhvdmVyKFxyXG4gICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChydW4pO1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJ1biA9IHNldEludGVydmFsKCdyb3RhdGUoKScsIDEwMDAwKTtcclxuICAgIH1cclxuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qdGltZXIgcnVuKi9cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZSgpIHtcclxuICAgIG5leHQuY2xpY2soKTtcclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
