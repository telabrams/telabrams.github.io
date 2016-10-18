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

        jQuery(document).mouseup(function (e) {
            var popup_sale_container = jQuery(".sale_wrapper");
            var popup_sale = jQuery(".sale");
            if (!popup_sale.is(e.target) && !popup_sale_container.is(e.target) && popup_sale_container.has(e.target).length == 0) {
                popup_sale_container.removeClass('card_slide_left').addClass('card_slide_right');
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
        //jQuery(this).parent().parent().next().toggleClass('display_b');
        //jQuery(this).parent().parent().next().toggleClass('opacity');
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

    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<hot/new>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    jQuery('.menu_item:nth-child(3) .hot').css('display','block');
    jQuery('.menu_item:nth-child(4) .new').css('display','block');

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

    //about us

    jQuery('.question_click').click(function(){
    jQuery(this).next().toggleClass('mobile_up mobile_down mobile_up_reverse mobile_down_reverse');
    jQuery(this).next().next().slideToggle('fast');
    jQuery('.menu_mobile>li:nth-child(2)>a').toggleClass('current-menu-item');
    });

    jQuery('.icon-sub-menu_question').click(function(){
        jQuery(this).toggleClass('mobile_up mobile_down mobile_up_reverse mobile_down_reverse');
        jQuery(this).next().slideToggle('fast');
        jQuery('.menu_mobile>li:nth-child(2)>a').toggleClass('current-menu-item');
    });


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgU0VPIG9uIDAyLjA5LjIwMTYuXHJcbiAqL1xyXG5cclxudmFyIG5leHQgPSBqUXVlcnkoJy5hcnJvd19iYWNrZ3JvdW5kX25leHQnKTtcclxudmFyIHByZXYgPSBqUXVlcnkoJy5hcnJvd19iYWNrZ3JvdW5kX3ByZXYnKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaW1nID0galF1ZXJ5KCcuc2xpZGVfaW1nJyk7XHJcbiAgICB2YXIgc2xpZGVyID0galF1ZXJ5KCcuc2xpZGVyJyk7XHJcbiAgICB2YXIgc2xpZGVDb250ZW50ID0galF1ZXJ5KCcuc2xpZGVfY29udGVudCcpO1xyXG4gICAgdmFyIGltZ0hlaWdodCA9IGltZy5oZWlnaHQoKTtcclxuICAgIHZhciBzbGlkZUNvbnRlbnRXaWR0aCA9IHNsaWRlQ29udGVudC53aWR0aCgpO1xyXG4gICAgdmFyIHNsaWRlQ29udGVudEhlaWdodCA9IHNsaWRlQ29udGVudC5oZWlnaHQoKTtcclxuICAgIHZhciBzbGlkZSA9IHNsaWRlci5jaGlsZHJlbignLnNsaWRlJykuZmluZCgnLnNsaWRlX3dyYXBwZXInKTtcclxuICAgIHZhciBzbGlkZUxlbmd0aCA9IHNsaWRlLmxlbmd0aDtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAvKnNsaWRlcl9jb250ZW50IGFuaW1hdGlvbiovXHJcblxyXG4gICAgdmFyIG1vZGVsID0galF1ZXJ5KCcubW9kZWwnKTtcclxuICAgIHZhciBtb2RlbE5hbWUgPSBqUXVlcnkoJy5tb2RlbF9uYW1lJyk7XHJcbiAgICB2YXIgbW9kZWxEZXNjcmlwdGlvbiA9IGpRdWVyeSgnLm1vZGVsX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU5leHQoKSB7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5maW5kKCcuc2xpZGVfaW1nJykuYWRkQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgc2xpZGVDb250ZW50LnJlbW92ZUNsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICAgICAgc2xpZGVDb250ZW50LnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlcl0pLnByZXYoc2xpZGVDb250ZW50KS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5wcmV2KHNsaWRlQ29udGVudCkuYWRkQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgICAgICBtb2RlbE5hbWUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluTGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkucHJldigpLmZpbmQobW9kZWxOYW1lKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5MZWZ0Jyk7XHJcbiAgICAgICAgbW9kZWwucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluRG93bicpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkucHJldigpLmZpbmQobW9kZWwpLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJbkRvd24nKTtcclxuICAgICAgICBtb2RlbERlc2NyaXB0aW9uLnJlbW92ZUNsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJblVwJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5wcmV2KCkuZmluZChtb2RlbERlc2NyaXB0aW9uKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5VcCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypzbGlkZXJfY29udGVudCBjZW50ZXIgcG9zaXRpb24qL1xyXG5cclxuICAgIHNsaWRlci5jc3MoJ2hlaWdodCcsIGltZ0hlaWdodCArICdweCcpO1xyXG4gICAgc2xpZGVDb250ZW50LmNzcygnbWFyZ2luLWxlZnQnLCAtc2xpZGVDb250ZW50V2lkdGgvMiArICdweCcpO1xyXG4gICAgc2xpZGVDb250ZW50LmNzcygnbWFyZ2luLXRvcCcsIC1zbGlkZUNvbnRlbnRIZWlnaHQvMiArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21lbnUgaGlkZVxyXG5cclxuICAgIGpRdWVyeSgnLmJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX25hdicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5X24nKS50b2dnbGVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0IGNhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfc2hhZG93JykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfY2FyZCA9IGpRdWVyeShcIi5tb2JpbGVfbmF2XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwX2NhcmQuaXMoZS50YXJnZXQpICYmIHBvcHVwX2NhcmQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfY2FyZC5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9yaWdodCcpLmFkZENsYXNzKCdjYXJkX3NsaWRlX2xlZnQnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB3aW5kb3dXaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypyZXNpemUgZnVuY3Rpb24qL1xyXG5cclxualF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICBzbGlkZUNvbnRlbnRIZWlnaHQgPSBzbGlkZUNvbnRlbnQuaGVpZ2h0KCk7XHJcbiAgICB3aW5kb3dXaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICBpbWcuY3NzKCd3aWR0aCcsIHdpbmRvd1dpZHRoICsgJ3B4Jyk7XHJcbiAgICBpbWdIZWlnaHQgPSBpbWcuaGVpZ2h0KCk7XHJcbiAgICBzbGlkZXIuY3NzKCdoZWlnaHQnLCBpbWdIZWlnaHQgKyAncHgnKTtcclxuICAgIC8vbWVudUhpZGUoKTtcclxuICAgIC8vbmF2aWdhdGlvblBvc2l0aW9uKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYmFja2dyb3VuZENoYW5nZSgpIHtcclxuICAgIHZhciBiYWNrZ3JvdW5kTmV4dDtcclxuXHJcbiAgICBpZiAoY291bnRlciA9PSBzbGlkZUxlbmd0aC0xKXtcclxuICAgICAgICBiYWNrZ3JvdW5kTmV4dCA9IGpRdWVyeShzbGlkZVswXSkuZmluZCgnLnNsaWRlX2ltZycpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIG5leHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybCgnKyBiYWNrZ3JvdW5kTmV4dCArJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInKTtcclxuICAgICAgICBuZXh0LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZE5leHQgPSBqUXVlcnkoc2xpZGVbY291bnRlcisxXSkuZmluZCgnLnNsaWRlX2ltZycpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIG5leHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybCgnKyBiYWNrZ3JvdW5kTmV4dCArJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInKTtcclxuICAgICAgICBuZXh0LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvdW50ZXIgPT0gMCl7XHJcbiAgICAgICAgYmFja2dyb3VuZE5leHQgPSBqUXVlcnkoc2xpZGVbc2xpZGVMZW5ndGgtMV0pLmZpbmQoJy5zbGlkZV9pbWcnKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBwcmV2LmNzcygnYmFja2dyb3VuZCcsICd1cmwoJysgYmFja2dyb3VuZE5leHQgKycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyJyk7XHJcbiAgICAgICAgcHJldi5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGJhY2tncm91bmROZXh0ID0galF1ZXJ5KHNsaWRlW2NvdW50ZXItMV0pLmZpbmQoJy5zbGlkZV9pbWcnKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBwcmV2LmNzcygnYmFja2dyb3VuZCcsICd1cmwoJysgYmFja2dyb3VuZE5leHQgKycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyJyk7XHJcbiAgICAgICAgcHJldi5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuYmFja2dyb3VuZENoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VhcmNoXHJcblxyXG4gICAgdmFyIGZpcnN0TGluZSA9IGpRdWVyeSgnLmZpcnN0X2xpbmUnKTtcclxuICAgIHZhciBzZWNvbmRMaW5lID0galF1ZXJ5KCcuc2Vjb25kX2xpbmUnKTtcclxuICAgIHZhciBzbWFsbEZpcnN0TGluZSA9IGpRdWVyeSgnLmZpcnN0X2xpbmVfc21hbGwnKTtcclxuICAgIHZhciBzbWFsbFNlY29uZExpbmUgPSBqUXVlcnkoJy5zZWNvbmRfbGluZV9zbWFsbCcpO1xyXG5cclxuICAgIGpRdWVyeSgnLnNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnNlYXJjaCAuZmEtc2VhcmNoJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfaWInKTtcclxuICAgICAgICBqUXVlcnkoJy5zbWFsbCcpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X2liJyk7XHJcbiAgICAgICAgc21hbGxGaXJzdExpbmUucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpO1xyXG4gICAgICAgIHNtYWxsU2Vjb25kTGluZS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKTtcclxuICAgICAgICBqUXVlcnkoJy5zZWFyY2hfYmxvY2snKS50b2dnbGVDbGFzcygnZGlzcGxheV9uIGZhZGVJblVwIGZhZGVPdXREb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2FsZV93cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvd19oJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5jbG9zZV9zZWFyY2gnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkoJy5zZWFyY2ggLmZhLXNlYXJjaCcpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X2liJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc21hbGwnKS50b2dnbGVDbGFzcygnZGlzcGxheV9pYicpO1xyXG4gICAgICAgIHNtYWxsRmlyc3RMaW5lLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3QnKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0X292ZXInKTtcclxuICAgICAgICBzbWFsbFNlY29uZExpbmUucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2VhcmNoX2Jsb2NrJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbiBmYWRlSW5VcCBmYWRlT3V0RG93bicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNhbGVfd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5X24nKTtcclxuICAgICAgICBqUXVlcnkoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3dfaCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2Vfc2VhcmNoLCAudG9wX3dyYXBwZXIsIC5jbG9zZV9wb3B1cCwgLnF1aWNrX3ZpZXdfY2xvc2UsIC5jbG9zZV9wb3B1cF9hZGQsJyArXHJcbiAgICAgICAgJyAuem9vbV9pbWdfY2xvc2UnKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZChmaXJzdExpbmUpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3QnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZChzZWNvbmRMaW5lKS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKTtcclxuXHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKGZpcnN0TGluZSkucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKHNlY29uZExpbmUpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmRfb3ZlcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmRlbGF5Ki9cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxheSgpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykuYWRkQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3JlZ2lzdGVyX2xlZnQsIC5wb3B1cF9yZWdpc3Rlcl9yaWdodCwgLnBvcHVwX2xvc3RfcGFzc3dvcmQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luX2xlZnQsIC5wb3B1cF9sb2dpbl9yaWdodCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGF5X3F1aWNrX3ZpZXcoKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3JykuYWRkQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGF5X2FkZCgpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2FkZCcpLmFkZENsYXNzKCdkaXNwbGF5X24nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxheV9zdWJzY3JpcHRpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9zdWJzY3JpcHRpb24nKS5hZGRDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwb3B1cF9sb2dpbiovXHJcblxyXG4gICAgalF1ZXJ5KCcubG9naW5fcmVnaXN0ZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5sb2dpbl9zaGFkb3cnKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9jYXJkID0galF1ZXJ5KFwiLnBvcHVwX2xvZ2luXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWpRdWVyeSgnLmxvZ2luX3JlZ2lzdGVyJykuaXMoZS50YXJnZXQpICYmICFwb3B1cF9jYXJkLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9jYXJkLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX2NhcmQucmVtb3ZlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwJykuYWRkQ2xhc3MoJ3BvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmxvZ2luX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsYXksMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcG9wdXAgZXhpdCovXHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2VfcG9wdXAnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5sb2dpbl9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChkZWxheSwzMDApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnF1aWNrX3ZpZXdfY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3JykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5xdWlja192aWV3X3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X3F1aWNrX3ZpZXcsMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmNsb3NlX3BvcHVwX2FkZCwgLnBvcHVwX2FkZF9jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2FkZCcpLnRvZ2dsZUNsYXNzKCdwb3B1cF9zbGlkZV91cCBwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X2FkZCwzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBhc3N3b3JkIHN3aXRjaCovXHJcblxyXG4gICAgalF1ZXJ5KCcuYnV0dG9uX2lucHV0X3Jlc2V0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICByZXNldF92YWwgPSAwO1xyXG4gICAgICAgIGNoZWNrb3V0X3Jlc2V0X3ZhbCA9IDA7XHJcblxyXG4gICAgICAgIHZhciByZXNldF92YWwgPSBqUXVlcnkoJy5wb3B1cF9sb3N0X3Bhc3N3b3JkIC5kZWZhdWx0IC5sb2dpbl9pbnB1dCcpLnZhbCgpO1xyXG4gICAgICAgIHZhciBjaGVja291dF9yZXNldF92YWwgPSBqUXVlcnkoJy5wb3B1cF9sb3N0X3Bhc3N3b3JkIC5kZWZhdWx0IC5jaGVja291dF9yZXNldCcpLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc2V0X3ZhbCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNldF92YWwgIT0gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbiAuZXJyb3InKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbiAuZGVmYXVsdCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luIC5zdWNjZXNzX3NlbmQnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbiAuZXJyb3InKS5mYWRlSW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja291dF9yZXNldF92YWwgIT0gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5xdWVzdGlvbl9jb250YWluZXIgLmVycm9yJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucXVlc3Rpb25fY29udGFpbmVyIC5kZWZhdWx0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucXVlc3Rpb25fY29udGFpbmVyIC5zdWNjZXNzX3NlbmQnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5xdWVzdGlvbl9jb250YWluZXIgLmVycm9yJykuZmFkZUluKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ibG9nIHNjYWxlIGltYWdlXHJcblxyXG4gICAgalF1ZXJ5KCcuaW1nX2NvbnRhaW5lcicpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzExMTEnKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWthJywgdGhpcykuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMS4yKScpO1xyXG4gICAgICAgIGpRdWVyeSgnLmltZ19jb250YWluZXJfc2hhZG93JywgdGhpcykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmJha2EnLCB0aGlzKS5jc3MoJ3RyYW5zZm9ybScsICdzY2FsZSgxKScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5pbWdfY29udGFpbmVyX3NoYWRvdycsIHRoaXMpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yYWRpb19idXR0b25cclxuXHJcbiAgICBqUXVlcnkoJy5mb3JtaW5wYXN0IGxhYmVsJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5mb3JtaW5wYXN0IGxhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9sYWJlbCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlX2xhYmVsJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmxvZ2luLXJlZ2lzdGVyIHN3aXRjaCovXHJcblxyXG4gICAgalF1ZXJ5KCcubG9naW5fYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbl9sZWZ0LCAucG9wdXBfbG9naW5fcmlnaHQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3JlZ2lzdGVyX2xlZnQsIC5wb3B1cF9yZWdpc3Rlcl9yaWdodCcpLmZhZGVJbigzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcucmVnaXN0ZXJfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9yZWdpc3Rlcl9sZWZ0LCAucG9wdXBfcmVnaXN0ZXJfcmlnaHQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luX2xlZnQsIC5wb3B1cF9sb2dpbl9yaWdodCcpLmZhZGVJbigzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuYnV0dGVyX3JpZ2h0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbl9sZWZ0LCAucG9wdXBfbG9naW5fcmlnaHQsIC5wb3B1cF9yZWdpc3Rlcl9sZWZ0LCAucG9wdXBfcmVnaXN0ZXJfcmlnaHQsIC5zdWNjZXNzX3NlbmQsIC5lcnJvcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9zdF9wYXNzd29yZCAuZGVmYXVsdCcpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvc3RfcGFzc3dvcmQnKS5mYWRlSW4oMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypjYXJkKi9cclxuXHJcbiAgICBqUXVlcnkoJy50b3Bfd3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWN0aXZlX3BhcnQnKS5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0JykuYWRkQ2xhc3MoJ2NhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICBqUXVlcnkoJy5jYXJkX2Jsb2NrJykuZmFkZU91dCgzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuYmFza2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5hY3RpdmVfcGFydCcpLnJlbW92ZUNsYXNzKCdjYXJkX3NsaWRlX3JpZ2h0JykuYWRkQ2xhc3MoJ2NhcmRfc2xpZGVfbGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmNhcmRfYmxvY2snKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9jYXJkID0galF1ZXJ5KFwiLmFjdGl2ZV9wYXJ0XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwX2NhcmQuaXMoZS50YXJnZXQpICYmIHBvcHVwX2NhcmQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfY2FyZC5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0JykuYWRkQ2xhc3MoJ2NhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmNhcmRfYmxvY2snKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qY2xvc2UgY2FyZCBpdGVtKi9cclxuXHJcbiAgICBqUXVlcnkoJy5jbG9zZV9jYXJkX2l0ZW0nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypzYWxlICovXHJcblxyXG4gICAgLy9mdW5jdGlvbiBzYWxlU2hvdygpIHtcclxuICAgIC8vICAgIGpRdWVyeSgnLnNhbGUnKS5mYWRlSW4oKTtcclxuICAgIC8vfVxyXG4gICAgLy9cclxuICAgIC8vc2V0VGltZW91dChzYWxlU2hvdywxMDAwMCk7XHJcblxyXG4gICAgalF1ZXJ5KCcuc2FsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2FsZV93cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ2NhcmRfc2xpZGVfbGVmdF9zYWxlIGNhcmRfc2xpZGVfcmlnaHRfc2FsZScpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX3NhbGVfY29udGFpbmVyID0galF1ZXJ5KFwiLnNhbGVfd3JhcHBlclwiKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX3NhbGUgPSBqUXVlcnkoXCIuc2FsZVwiKTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cF9zYWxlLmlzKGUudGFyZ2V0KSAmJiAhcG9wdXBfc2FsZV9jb250YWluZXIuaXMoZS50YXJnZXQpICYmIHBvcHVwX3NhbGVfY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3NhbGVfY29udGFpbmVyLnJlbW92ZUNsYXNzKCdjYXJkX3NsaWRlX2xlZnQnKS5hZGRDbGFzcygnY2FyZF9zbGlkZV9yaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwb3B1cF9zdWJzY3JpcHRpb24qL1xyXG5cclxuICAgIGpRdWVyeSgnLnJpZ2h0X2Jhbm5lcl9ibG9jayAuYnV0dG9uX3N1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgc3Vic192YWwgPSBqUXVlcnkoJy5iYW5uZXJfYmxvY2sgaW5wdXQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHN1YnNfdmFsICE9IDAgKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX3N1YnNjcmlwdGlvbicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5X24nKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfc3Vic2NyaXB0aW9uJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVJbigzMDApO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBfc3VicyA9IGpRdWVyeShcIi5wb3B1cF9zdWJzY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWpRdWVyeSgnLnJpZ2h0X2Jhbm5lcl9ibG9jayAuYnV0dG9uX3N1Ym1pdCcpLmlzKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFwb3B1cF9zdWJzLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9zdWJzLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cF9zdWJzLnJlbW92ZUNsYXNzKCdwb3B1cF9zbGlkZV91cCcpLmFkZENsYXNzKCdwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X3N1YnNjcmlwdGlvbiwzMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBvcHVwX2FkZCovXHJcblxyXG4gICAgalF1ZXJ5KCcuaGlkZGVuX3ByaWNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfYWRkJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2FkZCcpLnRvZ2dsZUNsYXNzKCdwb3B1cF9zbGlkZV91cCBwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVJbigzMDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX2FkZCA9IGpRdWVyeShcIi5wb3B1cF9hZGRcIik7XHJcbiAgICAgICAgICAgIGlmICghalF1ZXJ5KCcuYnV5X2Vuam95JykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAgICAgICAhalF1ZXJ5KCcuaGlkZGVuX3ByaWNlJykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAgICAgICAhalF1ZXJ5KCcuZmEtc2hvcHBpbmctY2FydCcpLmlzKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgIXBvcHVwX2FkZC5pcyhlLnRhcmdldCkgJiYgcG9wdXBfYWRkLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX2FkZC5yZW1vdmVDbGFzcygncG9wdXBfc2xpZGVfdXAnKS5hZGRDbGFzcygncG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsYXlfYWRkLDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBvcHVwX3F1aWNrX3ZpZXcqL1xyXG5cclxuICAgIGpRdWVyeSgnLmhpZGRlbl9ob3ZlciAuZmEtc2VhcmNoLXBsdXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXcnKS50b2dnbGVDbGFzcygncG9wdXBfc2xpZGVfdXAgcG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnF1aWNrX3ZpZXdfc2hhZG93JykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfcXVpY2sgPSBqUXVlcnkoXCIucG9wdXBfcXVpY2tfdmlld1wiKTtcclxuICAgICAgICAgICAgaWYgKCFqUXVlcnkoJy5oaWRkZW5faG92ZXIgLmZhLXNlYXJjaC1wbHVzJykuaXMoZS50YXJnZXQpICYmICFwb3B1cF9xdWljay5pcyhlLnRhcmdldCkgJiYgcG9wdXBfcXVpY2suaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfcXVpY2sucmVtb3ZlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwJykuYWRkQ2xhc3MoJ3BvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnF1aWNrX3ZpZXdfc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkZWxheV9xdWlja192aWV3LDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnF1aWNrX3ZpZXdfcG9wdXAgc2xpZGVyKi9cclxuXHJcbiAgICB2YXIgcG9wdXBTbGlkZXJJdGVtcyA9IGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXdfbGVmdCB1bCcpLmNoaWxkcmVuKCdsaScpO1xyXG4gICAgdmFyIHBvcHVwU2xpZGVySXRlbXNMZW5ndGggPSBwb3B1cFNsaWRlckl0ZW1zLmxlbmd0aDtcclxuICAgIHZhciBwb3B1cFNsaWRlckl0ZW1zQ291bnRlciA9IDA7XHJcblxyXG4gICAgalF1ZXJ5KCcucG9wdXBfcXVpY2tfdmlldyAuZmEtYW5nbGUtcmlnaHQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHBvcHVwU2xpZGVySXRlbXMucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuICAgICAgICBpZiAocG9wdXBTbGlkZXJJdGVtc0NvdW50ZXIgPiBwb3B1cFNsaWRlckl0ZW1zTGVuZ3RoLTIpIHtcclxuICAgICAgICAgICAgcG9wdXBTbGlkZXJJdGVtc0NvdW50ZXIgPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeShwb3B1cFNsaWRlckl0ZW1zWysrcG9wdXBTbGlkZXJJdGVtc0NvdW50ZXJdKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3IC5mYS1hbmdsZS1sZWZ0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBwb3B1cFNsaWRlckl0ZW1zLnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuXHJcbiAgICAgICAgaWYgKHBvcHVwU2xpZGVySXRlbXNDb3VudGVyIDwgMSkge1xyXG4gICAgICAgICAgICBwb3B1cFNsaWRlckl0ZW1zQ291bnRlciA9IHBvcHVwU2xpZGVySXRlbXNMZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqUXVlcnkocG9wdXBTbGlkZXJJdGVtc1stLXBvcHVwU2xpZGVySXRlbXNDb3VudGVyXSkuYWRkQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypuZXh0LXByZXYgc2xpZGVyKi9cclxuICAgIG5leHQuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gc2xpZGVMZW5ndGgpe1xyXG4gICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlW3NsaWRlTGVuZ3RoLTFdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFuaW1hdGVOZXh0KCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID09IDApe1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbc2xpZGVMZW5ndGgtMl0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID09IDEpe1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbc2xpZGVMZW5ndGgtMV0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXItMl0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlci0xXSkuYW5pbWF0ZSh7J29wYWNpdHknOiAwfSwgMTAwMCk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDF9LCA4MDApO1xyXG4gICAgICAgIGJhY2tncm91bmRDaGFuZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByZXYuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBjb3VudGVyLS07XHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPCAwKXtcclxuICAgICAgICAgICAgY291bnRlciA9IHNsaWRlTGVuZ3RoLTE7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZVswXSkuYW5pbWF0ZSh7J29wYWNpdHknOiAwfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhbmltYXRlTmV4dCgpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRlciA9PSBzbGlkZUxlbmd0aC0xKXtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlWzFdKS5maW5kKCcuc2xpZGVfaW1nJykucmVtb3ZlQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA9PSBzbGlkZUxlbmd0aC0yKXtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlWzBdKS5maW5kKCcuc2xpZGVfaW1nJykucmVtb3ZlQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyKzJdKS5maW5kKCcuc2xpZGVfaW1nJykucmVtb3ZlQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXIrMV0pLmFuaW1hdGUoeydvcGFjaXR5JzogMH0sIDEwMDApO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkuYW5pbWF0ZSh7J29wYWNpdHknOiAxfSwgODAwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kQ2hhbmdlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmNhcm91c2VsKi9cclxuXHJcbiAgICAkKFwiLmNhcm91c2VsX3ZpZGVvX3Byb2R1Y3RcIikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTEyMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLml0ZW1fc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExMjAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5tb2RlbF9waG90b19jYXJvdXNlbFwiKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTIwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vYWRkIHRvIGNhcmRcclxuICAgIGZ1bmN0aW9uIGRlbGF5Q2xvc2VBdHRlbnRpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuYXR0ZW50aW9uJykuZmFkZU91dCgyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGluayBkZWxheVxyXG4gICAgZnVuY3Rpb24gZGVsYXlIcmVmKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLndpc2hsaXN0X2hvdmVyJykuYXR0cignaHJlZicsICd3aXNobGlzdC5odG1sJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcud2lzaGxpc3RfaG92ZXInKS5jc3MoJ2NvbG9yJywgJyNENDM2NEMnKTtcclxuICAgICAgICBqUXVlcnkoJy5saWtlIC5mYS1oZWFydCcpLmNzcygnY29sb3InLCAnI0Q0MzY0QycpO1xyXG4gICAgICAgIGpRdWVyeSgnLmxpa2UgLmZhLWhlYXJ0JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2luIG1vZGVsIGNhcnRcclxuICAgIGpRdWVyeSgnLnBob3RvX21vZGVsX2NhcnRfY29udGVudCAuYnV0dG9uX2lucHV0X2xvZ2luJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5hdHRlbnRpb24nKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5Q2xvc2VBdHRlbnRpb24sIDEwMDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vaW4gd2lzaGxpc3RcclxuICAgIGpRdWVyeSgnLmJ1dHRvbl90ZCAuYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5hdHRlbnRpb24nKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5Q2xvc2VBdHRlbnRpb24sIDEwMDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2hlY2tvdXRcclxuICAgIGpRdWVyeSgnLnF1ZXN0aW9uPnNwYW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgICAvL2luIGNoZWNrb3V0XHJcbiAgICBqUXVlcnkoJy5yZW1lbWJlcl9ib3R0b20gYScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbWFnZSBzb3VyY2UgcmVwbGFjZVxyXG5cclxuICAgIHZhciBtYWluSW1hZ2VTcmMgPSBqUXVlcnkoJy52aWRlb19tYWluIC5zbGljay10cmFjayAuY2Fyb3VzZWxfcGljdHVyZTpudGgtY2hpbGQoNCkgaW1nJykuYXR0cignc3JjJyk7XHJcbiAgICB2YXIgcGljdHVyZUFycmF5Rm9yUmVwbGFjZSA9IFtdO1xyXG4gICAgdmFyIHBpY3R1cmVBcnJheUZvckFzc29jaWF0aW9uID0galF1ZXJ5KCcuY2Fyb3VzZWxfdmlkZW9fcHJvZHVjdCAuY2Fyb3VzZWxfcGljdHVyZSBpbWcnKS5nZXQoKTtcclxuICAgIHZhciBpbWdDb3VudGVyID0gMDtcclxuICAgIHZhciBpbmRleCA9IDM7XHJcblxyXG4gICAgalF1ZXJ5KCcudmlkZW9fY2Fyb3VzZWxfaW1nIGltZycpLmF0dHIoJ3NyYycsIG1haW5JbWFnZVNyYyk7XHJcblxyXG4gICAgalF1ZXJ5KHBpY3R1cmVBcnJheUZvckFzc29jaWF0aW9uKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBpbWFnZVNyYyA9IGpRdWVyeSh0aGlzKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBpbmRleCA9IGpRdWVyeShwaWN0dXJlQXJyYXlGb3JBc3NvY2lhdGlvbikuaW5kZXgodGhpcyk7XHJcbiAgICAgICAgalF1ZXJ5KCcudmlkZW9fY2Fyb3VzZWxfaW1nIGltZycpLmF0dHIoJ3NyYycsIGltYWdlU3JjKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbWFnZXMgem9vbVxyXG5cclxuICAgIC8vZm9yIHZpZGVvIGNhcnRcclxuXHJcbiAgICBqUXVlcnkoJy5jYXJvdXNlbF92aWRlb19wcm9kdWN0IC5jYXJvdXNlbF9waWN0dXJlIGltZycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBwaWN0dXJlQXJyYXlGb3JSZXBsYWNlW2ltZ0NvdW50ZXJdID0galF1ZXJ5KHRoaXMpO1xyXG4gICAgICAgIHZhciBjbG9uZUltZ1NyYyA9IHBpY3R1cmVBcnJheUZvclJlcGxhY2VbaW1nQ291bnRlcl0uYXR0cignc3JjJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuem9vbV9pbWdfYmlnJykuYXBwZW5kKCc8ZGl2PjxpbWcgc3JjPScgK2Nsb25lSW1nU3JjKyAnIGFsdD1cIlwiPjwvZGl2PicpO1xyXG4gICAgICAgIGltZ0NvdW50ZXIrKztcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnBob3RvX21vZGVsX2NhcnRfY29udGVudCAubmV3X2NvbnRhaW5lciAubGVmdF9zaWRlIC52aWRlb19jYXJvdXNlbF9pbWc+aW1nJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIGxhc3RBcnJheUZvclZpZGVvID0galF1ZXJ5KCcuem9vbV9pbWdfYmlnJykuY2hpbGRyZW4oJ2RpdicpO1xyXG5cclxuICAgICAgICB2YXIgaSA9IGluZGV4O1xyXG4gICAgICAgIHZhciBuZXh0ID0galF1ZXJ5KCcuem9vbV9pbWdfYmlnIC5uZXh0Jyk7XHJcbiAgICAgICAgdmFyIHByZXYgPSBqUXVlcnkoJy56b29tX2ltZ19iaWcgLnByZXYnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvKS5yZW1vdmVDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvW2ldKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuaW1hZ2Vfem9vbV9zaGFkb3cnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBqUXVlcnkoJy53cmFwcGVyX3pvb21faW1nX2JpZycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgICAgICBqUXVlcnkoJy56b29tX2ltZ19iaWcgLm5leHQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW8pLnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpPmxhc3RBcnJheUZvclZpZGVvLmxlbmd0aC0yKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlb1srK2ldKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlb1tpXSkpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcuem9vbV9pbWdfYmlnIC5wcmV2JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICBqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW8pLnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpPDEpIHtcclxuICAgICAgICAgICAgICAgIGkgPSBsYXN0QXJyYXlGb3JWaWRlby5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlb1stLWldKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW9baV0pKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfem9vbSA9IGpRdWVyeShcIi53cmFwcGVyX3pvb21faW1nX2JpZ1wiKTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cF96b29tLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF96b29tLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3pvb20uZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuaW1hZ2Vfem9vbV9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vZm9yIHBob3RvX2NhcnRcclxuXHJcbiAgICBqUXVlcnkoJy5waG90b19tb2RlbF9jYXJ0X2NvbnRlbnQgLm5ld19jb250YWluZXIgLmxlZnRfc2lkZT5pbWcnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBiaWdJbWcgPSBqUXVlcnkodGhpcykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgalF1ZXJ5KCdtYWluJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiem9vbV9pbWdfYmlnX3BpY3R1cmVcIj48aW1nIHNyYz0nK2JpZ0ltZysnIGFsdD1cIlwiPjwvZGl2PicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmltYWdlX3pvb21fc2hhZG93JykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuem9vbV9pbWdfYmlnX3BpY3R1cmUnKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF96b29tID0galF1ZXJ5KFwiLnpvb21faW1nX2JpZ19waWN0dXJlXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWpRdWVyeSgnLnpvb21faW1nX2Nsb3NlJykuaXMoZS50YXJnZXQpICYmICFwb3B1cF96b29tLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF96b29tLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3pvb20uZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuaW1hZ2Vfem9vbV9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy56b29tX2ltZ19iaWdfcGljdHVyZScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaG92ZXIgbWVudV9saXN0XHJcblxyXG4gICAgalF1ZXJ5KCcubGVmdF9oZWFkZXIgLm1lbnUgPiBsaTpudGgtY2hpbGQoMyknKS5ob3ZlciggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLm1lbnVfbGlzdCcpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLm1lbnVfbGlzdCcpLmFkZENsYXNzKCdhY3RpdmVfbWVudScpO1xyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcubWVudV9saXN0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICBqUXVlcnkoJy5tZW51X2xpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlX21lbnUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmZvb3Rlcl9tZW51IC5tZW51ID4gbGk6bnRoLWNoaWxkKDMpJykuaG92ZXIoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBqUXVlcnkoJy5mb290ZXJfbWVudV9wb3NpdGlvbicpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLmZvb3Rlcl9tZW51X3Bvc2l0aW9uJykuYWRkQ2xhc3MoJ2FjdGl2ZV9tZW51X2Zvb3RlcicpO1xyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZm9vdGVyX21lbnVfcG9zaXRpb24nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZvb3Rlcl9tZW51X3Bvc2l0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9tZW51X2Zvb3RlcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFic1xyXG5cclxuICAgIHZhciB0YWJzQnV0dG9uID0galF1ZXJ5KCcubmF2X3RhYnMgdWwnKS5jaGlsZHJlbignbGknKTtcclxuICAgIHZhciB0YWJzQmxvY2sgPSBqUXVlcnkoJy5uYXZfYmxvY2tzIHVsJykuY2hpbGRyZW4oJ2xpJyk7XHJcblxyXG4gICAgalF1ZXJ5KCcubmF2X3RhYnMgdWwgbGknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBpID0galF1ZXJ5KHRoaXMpLmluZGV4KCk7XHJcbiAgICAgICAgalF1ZXJ5KHRhYnNCdXR0b24pLnJlbW92ZUNsYXNzKCdhY3RpdmVfdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRhYnNCbG9jaykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYiBhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJbkxlZnQnKTtcclxuICAgICAgICBqUXVlcnkodGFic0Jsb2NrW2ldKS5hZGRDbGFzcygnZGlzcGxheV9iIGFuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluTGVmdCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9saWZ0XHJcblxyXG4gICAgalF1ZXJ5KCcjc2Nyb2xsdXAnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT42MDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjc2Nyb2xsdXAnKS5mYWRlSW4oJzUwMCcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNzY3JvbGx1cCcpLmZhZGVPdXQoJzUwMCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwYWdpbmF0aW9uKi9cclxuXHJcbiAgICBqUXVlcnkoJy5wYWdpbmF0aW9uIHVsIGxpJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wYWdpbmF0aW9uIHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9wYWdlJyk7XHJcbiAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9wYWdlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaG92ZXIgbWVudSBpbWFnZVxyXG4gICAgdmFyIGltYWdlU3JjTWVudTtcclxuICAgIHZhciBkZWZhdWx0U3JjSW1hZ2UgPSBqUXVlcnkoJy5oaWRkZW5fbWVudV9waWN0dXJlJykuYXR0cignc3JjJyk7XHJcblxyXG4gICAgalF1ZXJ5KCcubWVudV9pdGVtJykuaG92ZXIoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGltYWdlU3JjTWVudSA9IGpRdWVyeSh0aGlzKS5maW5kKCcuaGlkZGVuX3BpY3R1cmUnKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLmhpZGRlbl9tZW51X3BpY3R1cmUnKS5hdHRyKCdzcmMnLCBpbWFnZVNyY01lbnUpO1xyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAvL2pRdWVyeSgnLmhpZGRlbl9tZW51X3BpY3R1cmUnKS5hdHRyKCdzcmMnLCBkZWZhdWx0U3JjSW1hZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZpbHRlclxyXG5cclxuICAgIGpRdWVyeSgnLmZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdmaWx0ZXJfb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAvL2pRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG4gICAgICAgIC8valF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS50b2dnbGVDbGFzcygnb3BhY2l0eScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Jsb2cgYW5pbWF0aW9uXHJcblxyXG4gICAgdmFyIGZpZ3VyZUFycmF5ID0galF1ZXJ5KCcuZmlndXJlX2Jsb2NrJykuY2hpbGRyZW4oJ2ZpZ3VyZScpO1xyXG4gICAgdmFyIGZpZ3VyZVNob3dCbG9jayA9IDY7XHJcbiAgICB2YXIgZmlndXJlQ291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yIChmaWd1cmVDb3VudGVyO2ZpZ3VyZUNvdW50ZXI8ZmlndXJlU2hvd0Jsb2NrO2ZpZ3VyZUNvdW50ZXIrKykge1xyXG4gICAgICAgIGpRdWVyeShmaWd1cmVBcnJheVtmaWd1cmVDb3VudGVyXSkuYWRkQ2xhc3MoJ2Rpc3BsYXlfYiBhbmltYXRlZF9mYWRlSW5MZWZ0IHpvb21JbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGpRdWVyeSgnLmZpZ3VyZV9idXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGZpZ3VyZVNob3dCbG9jays9NjtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWd1cmVTaG93QmxvY2spO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpZ3VyZUNvdW50ZXIpO1xyXG4gICAgICAgIGZvciAoZmlndXJlQ291bnRlcjtmaWd1cmVDb3VudGVyPGZpZ3VyZVNob3dCbG9jaztmaWd1cmVDb3VudGVyKyspIHtcclxuICAgICAgICAgICAgalF1ZXJ5KGZpZ3VyZUFycmF5W2ZpZ3VyZUNvdW50ZXJdKS5hZGRDbGFzcygnZGlzcGxheV9iIGFuaW1hdGVkX2ZhZGVJbkxlZnQgem9vbUluJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy88PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8aG90L25ldz4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PlxyXG5cclxuICAgIGpRdWVyeSgnLm1lbnVfaXRlbTpudGgtY2hpbGQoMykgLmhvdCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICBqUXVlcnkoJy5tZW51X2l0ZW06bnRoLWNoaWxkKDQpIC5uZXcnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZml4ZWQgbWVudVxyXG5cclxuICAgIHZhciBzY3JvbGwgPSBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgIGlmIChzY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuaGVhZGVyX3N0YXRpYycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIGpRdWVyeSgnaGVhZGVyJykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2VhcmNoX2Jsb2NrJykuY3NzKCd0b3AnLCAnODBweCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIHNjcm9sbCA9IGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIGlmIChzY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmhlYWRlcl9zdGF0aWMnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCdoZWFkZXInKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2VhcmNoX2Jsb2NrJykuY3NzKCd0b3AnLCAnODBweCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuaGVhZGVyX3N0YXRpYycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNlYXJjaF9ibG9jaycpLmNzcygndG9wJywgJzk5cHgnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypyZWFkX21vcmUqL1xyXG5cclxuICAgIC8vdmFyIGNoZWNrZXIgPSBqUXVlcnkoJ2RpdicpLmlzKCcuYmxvZ190ZXh0Jyk7XHJcbiAgICAvL3ZhciB0ZXh0ID0galF1ZXJ5KCcuYmxvZ190ZXh0Jyk7XHJcbiAgICAvL3ZhciBtb3JlID0galF1ZXJ5KFwiLnJlYWRfbW9yZVwiKTtcclxuICAgIC8vdmFyIGxlc3MgPSBqUXVlcnkoXCIucmVhZF9sZXNzXCIpO1xyXG4gICAgLy9cclxuICAgIC8vaWYgKGNoZWNrZXIgPT0gdHJ1ZSkge1xyXG4gICAgLy9cclxuICAgIC8vICAgIHZhciBoZWlnaHRfYXV0byA9IFtdO1xyXG4gICAgLy8gICAgdmFyIGkgPSAwO1xyXG4gICAgLy9cclxuICAgIC8vICAgIHZhciBsaW5laGVpZ2h0ID0gdGV4dC5jc3MoJ2xpbmUtaGVpZ2h0JykucmVwbGFjZShcInB4XCIsIFwiXCIpO1xyXG4gICAgLy8gICAgdmFyIGZpdmVfbGluZXMgPSBsaW5laGVpZ2h0KjQ7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgdGV4dC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgICAgaGVpZ2h0X2F1dG9baV0gPSBqUXVlcnkodGhpcykuaGVpZ2h0KCk7XHJcbiAgICAvLyAgICAgICAgY29uc29sZS5sb2coaGVpZ2h0X2F1dG9baV0rXCJfX19cIik7XHJcbiAgICAvLyAgICAgICAgY29uc29sZS5sb2codGV4dC5oZWlnaHQoKSsnKysrJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgIGlmIChoZWlnaHRfYXV0b1tpXSA9PSBmaXZlX2xpbmVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cmFhJyk7XHJcbiAgICAvLyAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgIGkrKztcclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgIHRleHQuY3NzKCdoZWlnaHQnLCBmaXZlX2xpbmVzKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICBtb3JlLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICB2YXIgaSA9IGpRdWVyeSh0aGlzKS5wcmV2KHRleHQpLmluZGV4KCcuYmxvZ190ZXh0Jyk7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYodGV4dCkuYW5pbWF0ZSh7aGVpZ2h0OiBoZWlnaHRfYXV0b1tpXX0sIDQwMCk7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQobGVzcykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgbGVzcy5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYobW9yZSkucHJldih0ZXh0KS5hbmltYXRlKHtoZWlnaHQ6IGZpdmVfbGluZXN9LCAzMDApO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KG1vcmUpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuICAgIC8vICAgICAgICBqUXVlcnkodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9sbG93X3NsaWRlclxyXG5cclxuICAgIHZhciBmb2xsb3dTbGlkZSA9IGpRdWVyeSgnLmZvbGxvd19sZWZ0JykuY2hpbGRyZW4oJy5wb2ludGVyX3NsaWRlJyk7XHJcblxyXG4gICAgZm9sbG93U2xpZGUuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICh0aGlzID09IGZvbGxvd1NsaWRlWzBdICl7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLm5hdmlnYXRpb24nKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkb3QgYWN0aXZlX2RvdFwiPjwvZGl2PicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcubmF2aWdhdGlvbicpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIGRvdCA9IGpRdWVyeSgnLm5hdmlnYXRpb24nKS5jaGlsZHJlbignLmRvdCcpO1xyXG4gICAgdmFyIG5hdmlnYXRpb25XaWR0aCA9IGpRdWVyeSgnLm5hdmlnYXRpb24nKS53aWR0aCgpO1xyXG4gICAgalF1ZXJ5KCcubmF2aWdhdGlvbicpLmNzcygnbWFyZ2luLWxlZnQnLCAtbmF2aWdhdGlvbldpZHRoLzIgKyAncHgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZvbGxvd19zbGlkZXIgZG90c1xyXG5cclxuICAgIGpRdWVyeSgnLmRvdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG90LnJlbW92ZUNsYXNzKCdhY3RpdmVfZG90Jyk7XHJcbiAgICAgICAgZm9sbG93U2xpZGUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZGlzcGxheV9iIGZhZGVJbkxlZnQnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kb3QnKTtcclxuICAgICAgICB2YXIgZG90Q291bnRlciA9IGpRdWVyeSh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgIGpRdWVyeShmb2xsb3dTbGlkZVtkb3RDb3VudGVyXSkuYWRkQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZGlzcGxheV9iIGZhZGVJbkxlZnQnKTtcclxuICAgICAgICAvL25hdmlnYXRpb25Qb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyptb2JpbGVfbWVudSovXHJcblxyXG4gICAgLy9hYm91dCB1c1xyXG5cclxuICAgIGpRdWVyeSgnLnF1ZXN0aW9uX2NsaWNrJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ21vYmlsZV91cCBtb2JpbGVfZG93biBtb2JpbGVfdXBfcmV2ZXJzZSBtb2JpbGVfZG93bl9yZXZlcnNlJyk7XHJcbiAgICBqUXVlcnkodGhpcykubmV4dCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG4gICAgalF1ZXJ5KCcubWVudV9tb2JpbGU+bGk6bnRoLWNoaWxkKDIpPmEnKS50b2dnbGVDbGFzcygnY3VycmVudC1tZW51LWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmljb24tc3ViLW1lbnVfcXVlc3Rpb24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnbW9iaWxlX3VwIG1vYmlsZV9kb3duIG1vYmlsZV91cF9yZXZlcnNlIG1vYmlsZV9kb3duX3JldmVyc2UnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcbiAgICAgICAgalF1ZXJ5KCcubWVudV9tb2JpbGU+bGk6bnRoLWNoaWxkKDIpPmEnKS50b2dnbGVDbGFzcygnY3VycmVudC1tZW51LWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBqUXVlcnkoJy5pY29uLXN1Yi1tZW51JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ21vYmlsZV91cCBtb2JpbGVfZG93biBtb2JpbGVfdXBfcmV2ZXJzZSBtb2JpbGVfZG93bl9yZXZlcnNlJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLm1lbnVfbW9iaWxlPmxpOm50aC1jaGlsZCgyKT5hJykudG9nZ2xlQ2xhc3MoJ2N1cnJlbnQtbWVudS1pdGVtJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5tZW51X21vYmlsZT5saTpudGgtY2hpbGQoMik+YScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnbW9iaWxlX3VwIG1vYmlsZV9kb3duIG1vYmlsZV91cF9yZXZlcnNlIG1vYmlsZV9kb3duX3JldmVyc2UnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnY3VycmVudC1tZW51LWl0ZW0nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xpbmsgbm9uZS1kZWZhdWx0XHJcblxyXG4gICAgalF1ZXJ5KCcubWVudT5saTpudGgtY2hpbGQoMyk+YScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy93aGlzaGxpc3QgY2xpY2tcclxuXHJcbiAgICBqUXVlcnkoJy53aXNobGlzdF9ob3ZlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9pbnRfdGV4dCcsdGhpcykudGV4dCgnQnJvd3NlIFdpc2hsaXN0Jyk7XHJcbiAgICAgICAgc2V0VGltZW91dChkZWxheUhyZWYsNTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGljdHVyZSBob3ZlclxyXG5cclxuICAgIGpRdWVyeSgnLmNhcm91c2VsX3BpY3R1cmUgLmhpZGRlbl9ob3ZlciBpJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLmFkZENsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkucmVtb3ZlQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLm1vZGVscyAuaGlkZGVuX2hvdmVyIGksIC52aWRlb19jb250YWluZXIgLmhpZGRlbl9ob3ZlciBpJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLmFkZENsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkucmVtb3ZlQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xvc2UgaXRlbSB3aXNobGlzdFxyXG5cclxuICAgIGpRdWVyeSgnLndpc2hsaXN0X2Jsb2NrIC5jbG9zZSAuY2xvc2VfYW5pbWF0aW9uX2NhcmQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Nsb3NlIGl0ZW0gY2FydFxyXG5cclxuICAgIGpRdWVyeSgnLmNvbnRlbnRfY2FydCAud2lzaGxpc3RfYmxvY2sgLmNsb3NlX2FuaW1hdGlvbl9jYXJkJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ21hcmsnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuZmFkZU91dCgpO1xyXG4gICAgICAgIGpRdWVyeSgnLmF0dGVudGlvbicpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIC8vc2V0VGltZW91dChkZWxheUNsb3NlQXR0ZW50aW9uLCAxMDAwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy51bmRvJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tYXJrJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVja291dFxyXG5cclxuICAgIGpRdWVyeSgnLmNoZWNrb3V0X3RhYmxlIC5jbG9zZV9hbmltYXRpb25fY2FyZCwgLndpc2hsaXN0X2l0ZW0gLmNsb3NlX2FuaW1hdGlvbl9jYXJkJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5maXJzdF9saW5lJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuc2Vjb25kX2xpbmUnKS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZCcpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kX292ZXInKTtcclxuXHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuZmlyc3RfbGluZScpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3QnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnLnNlY29uZF9saW5lJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmRfb3ZlcicpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5jaGVja291dF90YWJsZSAuY2xvc2VfYW5pbWF0aW9uX2NhcmQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FjY291bnRcclxuXHJcbiAgICBqUXVlcnkoJy5sZWZ0X2FjY291bnQgdWwgbGknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmxlZnRfYWNjb3VudCB1bCBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmVfYWNjb3VudCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2FjY291bnQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbG9hZF9tb3JlX3BhZ2VcclxuXHJcbiAgICAvL3ZhciBmaWd1cmVCbG9jayA9IGpRdWVyeSgnLm5ld3MnKS5jaGlsZHJlbignLmZpZ3VyZV9ibG9jaycpO1xyXG4gICAgLy92YXIgZmlndXJlQ291bnRlciA9IDA7XHJcbiAgICAvLy8vdmFyIEJsb2NrQ291bnRlciA9IDA7XHJcbiAgICAvL3ZhciBmaWd1cmVOdW1iZXIgPSAxO1xyXG4gICAgLy9cclxuICAgIC8valF1ZXJ5KCdmaWd1cmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgLy9cclxuICAgIC8vICAgIGlmIChmaWd1cmVDb3VudGVyID49IGZpZ3VyZU51bWJlcikge1xyXG4gICAgLy8gICAgICAgIGpRdWVyeShmaWd1cmVCbG9ja1tmaWd1cmVDb3VudGVyXSkuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgIGpRdWVyeShmaWd1cmVCbG9ja1tmaWd1cmVDb3VudGVyXSkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgZmlndXJlQ291bnRlcisrO1xyXG4gICAgLy99KTtcclxuICAgIC8vXHJcbiAgICAvL2ZpZ3VyZUNvdW50ZXIgPSAxO1xyXG4gICAgLy9cclxuICAgIC8valF1ZXJ5KCcuZmlndXJlX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICBqUXVlcnkoZmlndXJlQmxvY2tbZmlndXJlQ291bnRlcisrXSkuYWRkQ2xhc3MoJ2Rpc3BsYXlfYiBhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJblJpZ2h0Jyk7XHJcbiAgICAvL30pO1xyXG5cclxufSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnRpbWVyIGZvciBzbGlkZXIqL1xyXG5cclxudmFyIHJ1biA9IHNldEludGVydmFsKCdyb3RhdGUoKScsIDEwMDAwKTtcclxuXHJcbmpRdWVyeSgnLnNsaWRlcicpLmhvdmVyKFxyXG4gICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChydW4pO1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJ1biA9IHNldEludGVydmFsKCdyb3RhdGUoKScsIDEwMDAwKTtcclxuICAgIH1cclxuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qdGltZXIgcnVuKi9cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZSgpIHtcclxuICAgIG5leHQuY2xpY2soKTtcclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
