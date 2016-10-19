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
        ' .zoom_img_close, .close_popup_add_az').hover(function(){

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

    jQuery('.close_popup_add_az').click(function() {
        jQuery('.popup_subscription').toggleClass('popup_slide_up popup_slide_down');
        jQuery('.add_shadowaz').fadeOut(300);
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
            jQuery('.add_shadowaz').fadeIn(300);

            jQuery(document).mouseup(function (e) {
                var popup_subs = jQuery(".popup_subscription");
                if (!jQuery('.right_banner_block .button_submit').is(e.target) &&
                    !popup_subs.is(e.target) && popup_subs.has(e.target).length == 0) {
                    popup_subs.removeClass('popup_slide_up').addClass('popup_slide_down');
                    jQuery('.add_shadowaz').fadeOut(300);
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
        jQuery(this).parent().parent().next().find('.new_container').slideToggle();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgU0VPIG9uIDAyLjA5LjIwMTYuXHJcbiAqL1xyXG5cclxudmFyIG5leHQgPSBqUXVlcnkoJy5hcnJvd19iYWNrZ3JvdW5kX25leHQnKTtcclxudmFyIHByZXYgPSBqUXVlcnkoJy5hcnJvd19iYWNrZ3JvdW5kX3ByZXYnKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaW1nID0galF1ZXJ5KCcuc2xpZGVfaW1nJyk7XHJcbiAgICB2YXIgc2xpZGVyID0galF1ZXJ5KCcuc2xpZGVyJyk7XHJcbiAgICB2YXIgc2xpZGVDb250ZW50ID0galF1ZXJ5KCcuc2xpZGVfY29udGVudCcpO1xyXG4gICAgdmFyIGltZ0hlaWdodCA9IGltZy5oZWlnaHQoKTtcclxuICAgIHZhciBzbGlkZUNvbnRlbnRXaWR0aCA9IHNsaWRlQ29udGVudC53aWR0aCgpO1xyXG4gICAgdmFyIHNsaWRlQ29udGVudEhlaWdodCA9IHNsaWRlQ29udGVudC5oZWlnaHQoKTtcclxuICAgIHZhciBzbGlkZSA9IHNsaWRlci5jaGlsZHJlbignLnNsaWRlJykuZmluZCgnLnNsaWRlX3dyYXBwZXInKTtcclxuICAgIHZhciBzbGlkZUxlbmd0aCA9IHNsaWRlLmxlbmd0aDtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAvKnNsaWRlcl9jb250ZW50IGFuaW1hdGlvbiovXHJcblxyXG4gICAgdmFyIG1vZGVsID0galF1ZXJ5KCcubW9kZWwnKTtcclxuICAgIHZhciBtb2RlbE5hbWUgPSBqUXVlcnkoJy5tb2RlbF9uYW1lJyk7XHJcbiAgICB2YXIgbW9kZWxEZXNjcmlwdGlvbiA9IGpRdWVyeSgnLm1vZGVsX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU5leHQoKSB7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5maW5kKCcuc2xpZGVfaW1nJykuYWRkQ2xhc3MoJ3NjYWxlX3NsaWRlJyk7XHJcbiAgICAgICAgc2xpZGVDb250ZW50LnJlbW92ZUNsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICAgICAgc2xpZGVDb250ZW50LnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlcl0pLnByZXYoc2xpZGVDb250ZW50KS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5wcmV2KHNsaWRlQ29udGVudCkuYWRkQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgICAgICBtb2RlbE5hbWUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluTGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkucHJldigpLmZpbmQobW9kZWxOYW1lKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5MZWZ0Jyk7XHJcbiAgICAgICAgbW9kZWwucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluRG93bicpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyXSkucHJldigpLmZpbmQobW9kZWwpLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJbkRvd24nKTtcclxuICAgICAgICBtb2RlbERlc2NyaXB0aW9uLnJlbW92ZUNsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGZhZGVJblVwJyk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5wcmV2KCkuZmluZChtb2RlbERlc2NyaXB0aW9uKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5VcCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypzbGlkZXJfY29udGVudCBjZW50ZXIgcG9zaXRpb24qL1xyXG5cclxuICAgIHNsaWRlci5jc3MoJ2hlaWdodCcsIGltZ0hlaWdodCArICdweCcpO1xyXG4gICAgc2xpZGVDb250ZW50LmNzcygnbWFyZ2luLWxlZnQnLCAtc2xpZGVDb250ZW50V2lkdGgvMiArICdweCcpO1xyXG4gICAgc2xpZGVDb250ZW50LmNzcygnbWFyZ2luLXRvcCcsIC1zbGlkZUNvbnRlbnRIZWlnaHQvMiArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21lbnUgaGlkZVxyXG5cclxuICAgIGpRdWVyeSgnLmJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX25hdicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5X24nKS50b2dnbGVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0IGNhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfc2hhZG93JykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfY2FyZCA9IGpRdWVyeShcIi5tb2JpbGVfbmF2XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwX2NhcmQuaXMoZS50YXJnZXQpICYmIHBvcHVwX2NhcmQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfY2FyZC5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9yaWdodCcpLmFkZENsYXNzKCdjYXJkX3NsaWRlX2xlZnQnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB3aW5kb3dXaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypyZXNpemUgZnVuY3Rpb24qL1xyXG5cclxualF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICBzbGlkZUNvbnRlbnRIZWlnaHQgPSBzbGlkZUNvbnRlbnQuaGVpZ2h0KCk7XHJcbiAgICB3aW5kb3dXaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICBpbWcuY3NzKCd3aWR0aCcsIHdpbmRvd1dpZHRoICsgJ3B4Jyk7XHJcbiAgICBpbWdIZWlnaHQgPSBpbWcuaGVpZ2h0KCk7XHJcbiAgICBzbGlkZXIuY3NzKCdoZWlnaHQnLCBpbWdIZWlnaHQgKyAncHgnKTtcclxuICAgIC8vbWVudUhpZGUoKTtcclxuICAgIC8vbmF2aWdhdGlvblBvc2l0aW9uKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYmFja2dyb3VuZENoYW5nZSgpIHtcclxuICAgIHZhciBiYWNrZ3JvdW5kTmV4dDtcclxuXHJcbiAgICBpZiAoY291bnRlciA9PSBzbGlkZUxlbmd0aC0xKXtcclxuICAgICAgICBiYWNrZ3JvdW5kTmV4dCA9IGpRdWVyeShzbGlkZVswXSkuZmluZCgnLnNsaWRlX2ltZycpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIG5leHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybCgnKyBiYWNrZ3JvdW5kTmV4dCArJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInKTtcclxuICAgICAgICBuZXh0LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZE5leHQgPSBqUXVlcnkoc2xpZGVbY291bnRlcisxXSkuZmluZCgnLnNsaWRlX2ltZycpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIG5leHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybCgnKyBiYWNrZ3JvdW5kTmV4dCArJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInKTtcclxuICAgICAgICBuZXh0LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvdW50ZXIgPT0gMCl7XHJcbiAgICAgICAgYmFja2dyb3VuZE5leHQgPSBqUXVlcnkoc2xpZGVbc2xpZGVMZW5ndGgtMV0pLmZpbmQoJy5zbGlkZV9pbWcnKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBwcmV2LmNzcygnYmFja2dyb3VuZCcsICd1cmwoJysgYmFja2dyb3VuZE5leHQgKycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyJyk7XHJcbiAgICAgICAgcHJldi5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGJhY2tncm91bmROZXh0ID0galF1ZXJ5KHNsaWRlW2NvdW50ZXItMV0pLmZpbmQoJy5zbGlkZV9pbWcnKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBwcmV2LmNzcygnYmFja2dyb3VuZCcsICd1cmwoJysgYmFja2dyb3VuZE5leHQgKycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyJyk7XHJcbiAgICAgICAgcHJldi5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuYmFja2dyb3VuZENoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VhcmNoXHJcblxyXG4gICAgdmFyIGZpcnN0TGluZSA9IGpRdWVyeSgnLmZpcnN0X2xpbmUnKTtcclxuICAgIHZhciBzZWNvbmRMaW5lID0galF1ZXJ5KCcuc2Vjb25kX2xpbmUnKTtcclxuICAgIHZhciBzbWFsbEZpcnN0TGluZSA9IGpRdWVyeSgnLmZpcnN0X2xpbmVfc21hbGwnKTtcclxuICAgIHZhciBzbWFsbFNlY29uZExpbmUgPSBqUXVlcnkoJy5zZWNvbmRfbGluZV9zbWFsbCcpO1xyXG5cclxuICAgIGpRdWVyeSgnLnNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnNlYXJjaCAuZmEtc2VhcmNoJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfaWInKTtcclxuICAgICAgICBqUXVlcnkoJy5zbWFsbCcpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X2liJyk7XHJcbiAgICAgICAgc21hbGxGaXJzdExpbmUucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpO1xyXG4gICAgICAgIHNtYWxsU2Vjb25kTGluZS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKTtcclxuICAgICAgICBqUXVlcnkoJy5zZWFyY2hfYmxvY2snKS50b2dnbGVDbGFzcygnZGlzcGxheV9uIGZhZGVJblVwIGZhZGVPdXREb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2FsZV93cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvd19oJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5jbG9zZV9zZWFyY2gnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkoJy5zZWFyY2ggLmZhLXNlYXJjaCcpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X2liJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc21hbGwnKS50b2dnbGVDbGFzcygnZGlzcGxheV9pYicpO1xyXG4gICAgICAgIHNtYWxsRmlyc3RMaW5lLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3QnKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0X292ZXInKTtcclxuICAgICAgICBzbWFsbFNlY29uZExpbmUucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2VhcmNoX2Jsb2NrJykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbiBmYWRlSW5VcCBmYWRlT3V0RG93bicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNhbGVfd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5X24nKTtcclxuICAgICAgICBqUXVlcnkoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3dfaCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2Vfc2VhcmNoLCAudG9wX3dyYXBwZXIsIC5jbG9zZV9wb3B1cCwgLnF1aWNrX3ZpZXdfY2xvc2UsIC5jbG9zZV9wb3B1cF9hZGQsJyArXHJcbiAgICAgICAgJyAuem9vbV9pbWdfY2xvc2UsIC5jbG9zZV9wb3B1cF9hZGRfYXonKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZChmaXJzdExpbmUpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3QnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZChzZWNvbmRMaW5lKS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKTtcclxuXHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKGZpcnN0TGluZSkucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9maXJzdCcpLmFkZENsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3Rfb3ZlcicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKHNlY29uZExpbmUpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kJykuYWRkQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmRfb3ZlcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmRlbGF5Ki9cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxheSgpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykuYWRkQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3JlZ2lzdGVyX2xlZnQsIC5wb3B1cF9yZWdpc3Rlcl9yaWdodCwgLnBvcHVwX2xvc3RfcGFzc3dvcmQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luX2xlZnQsIC5wb3B1cF9sb2dpbl9yaWdodCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGF5X3F1aWNrX3ZpZXcoKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3JykuYWRkQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGF5X2FkZCgpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2FkZCcpLmFkZENsYXNzKCdkaXNwbGF5X24nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxheV9zdWJzY3JpcHRpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9zdWJzY3JpcHRpb24nKS5hZGRDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwb3B1cF9sb2dpbiovXHJcblxyXG4gICAgalF1ZXJ5KCcubG9naW5fcmVnaXN0ZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5sb2dpbl9zaGFkb3cnKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9jYXJkID0galF1ZXJ5KFwiLnBvcHVwX2xvZ2luXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWpRdWVyeSgnLmxvZ2luX3JlZ2lzdGVyJykuaXMoZS50YXJnZXQpICYmICFwb3B1cF9jYXJkLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9jYXJkLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX2NhcmQucmVtb3ZlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwJykuYWRkQ2xhc3MoJ3BvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmxvZ2luX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsYXksMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcG9wdXAgZXhpdCovXHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2VfcG9wdXAnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvZ2luJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5sb2dpbl9zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChkZWxheSwzMDApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnF1aWNrX3ZpZXdfY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3JykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5xdWlja192aWV3X3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X3F1aWNrX3ZpZXcsMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmNsb3NlX3BvcHVwX2FkZCwgLnBvcHVwX2FkZF9jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2FkZCcpLnRvZ2dsZUNsYXNzKCdwb3B1cF9zbGlkZV91cCBwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X2FkZCwzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2VfcG9wdXBfYWRkX2F6JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfc3Vic2NyaXB0aW9uJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5hZGRfc2hhZG93YXonKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChkZWxheV9hZGQsMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwYXNzd29yZCBzd2l0Y2gqL1xyXG5cclxuICAgIGpRdWVyeSgnLmJ1dHRvbl9pbnB1dF9yZXNldCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmVzZXRfdmFsID0gMDtcclxuICAgICAgICBjaGVja291dF9yZXNldF92YWwgPSAwO1xyXG5cclxuICAgICAgICB2YXIgcmVzZXRfdmFsID0galF1ZXJ5KCcucG9wdXBfbG9zdF9wYXNzd29yZCAuZGVmYXVsdCAubG9naW5faW5wdXQnKS52YWwoKTtcclxuICAgICAgICB2YXIgY2hlY2tvdXRfcmVzZXRfdmFsID0galF1ZXJ5KCcucG9wdXBfbG9zdF9wYXNzd29yZCAuZGVmYXVsdCAuY2hlY2tvdXRfcmVzZXQnKS52YWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNldF92YWwpO1xyXG5cclxuICAgICAgICBpZiAocmVzZXRfdmFsICE9IDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW4gLmVycm9yJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW4gLmRlZmF1bHQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbiAuc3VjY2Vzc19zZW5kJykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW4gLmVycm9yJykuZmFkZUluKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tvdXRfcmVzZXRfdmFsICE9IDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucXVlc3Rpb25fY29udGFpbmVyIC5lcnJvcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnF1ZXN0aW9uX2NvbnRhaW5lciAuZGVmYXVsdCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnF1ZXN0aW9uX2NvbnRhaW5lciAuc3VjY2Vzc19zZW5kJykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucXVlc3Rpb25fY29udGFpbmVyIC5lcnJvcicpLmZhZGVJbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYmxvZyBzY2FsZSBpbWFnZVxyXG5cclxuICAgIGpRdWVyeSgnLmltZ19jb250YWluZXInKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcxMTExJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmFrYScsIHRoaXMpLmNzcygndHJhbnNmb3JtJywgJ3NjYWxlKDEuMiknKTtcclxuICAgICAgICBqUXVlcnkoJy5pbWdfY29udGFpbmVyX3NoYWRvdycsIHRoaXMpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5iYWthJywgdGhpcykuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMSknKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuaW1nX2NvbnRhaW5lcl9zaGFkb3cnLCB0aGlzKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmFkaW9fYnV0dG9uXHJcblxyXG4gICAgalF1ZXJ5KCcuZm9ybWlucGFzdCBsYWJlbCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuZm9ybWlucGFzdCBsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmVfbGFiZWwnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZV9sYWJlbCcpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypsb2dpbi1yZWdpc3RlciBzd2l0Y2gqL1xyXG5cclxuICAgIGpRdWVyeSgnLmxvZ2luX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW5fbGVmdCwgLnBvcHVwX2xvZ2luX3JpZ2h0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9yZWdpc3Rlcl9sZWZ0LCAucG9wdXBfcmVnaXN0ZXJfcmlnaHQnKS5mYWRlSW4oMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnJlZ2lzdGVyX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfcmVnaXN0ZXJfbGVmdCwgLnBvcHVwX3JlZ2lzdGVyX3JpZ2h0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb2dpbl9sZWZ0LCAucG9wdXBfbG9naW5fcmlnaHQnKS5mYWRlSW4oMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmJ1dHRlcl9yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfbG9naW5fbGVmdCwgLnBvcHVwX2xvZ2luX3JpZ2h0LCAucG9wdXBfcmVnaXN0ZXJfbGVmdCwgLnBvcHVwX3JlZ2lzdGVyX3JpZ2h0LCAuc3VjY2Vzc19zZW5kLCAuZXJyb3InKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX2xvc3RfcGFzc3dvcmQgLmRlZmF1bHQnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9sb3N0X3Bhc3N3b3JkJykuZmFkZUluKDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qY2FyZCovXHJcblxyXG4gICAgalF1ZXJ5KCcudG9wX3dyYXBwZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmFjdGl2ZV9wYXJ0JykucmVtb3ZlQ2xhc3MoJ2NhcmRfc2xpZGVfbGVmdCcpLmFkZENsYXNzKCdjYXJkX3NsaWRlX3JpZ2h0Jyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuY2FyZF9ibG9jaycpLmZhZGVPdXQoMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmJhc2tldCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWN0aXZlX3BhcnQnKS5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9yaWdodCcpLmFkZENsYXNzKCdjYXJkX3NsaWRlX2xlZnQnKTtcclxuICAgICAgICBqUXVlcnkoJy5jYXJkX2Jsb2NrJykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfY2FyZCA9IGpRdWVyeShcIi5hY3RpdmVfcGFydFwiKTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cF9jYXJkLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9jYXJkLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwX2NhcmQucmVtb3ZlQ2xhc3MoJ2NhcmRfc2xpZGVfbGVmdCcpLmFkZENsYXNzKCdjYXJkX3NsaWRlX3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5jYXJkX2Jsb2NrJykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmNsb3NlIGNhcmQgaXRlbSovXHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2VfY2FyZF9pdGVtJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuZmFkZU91dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qc2FsZSAqL1xyXG5cclxuICAgIC8vZnVuY3Rpb24gc2FsZVNob3coKSB7XHJcbiAgICAvLyAgICBqUXVlcnkoJy5zYWxlJykuZmFkZUluKCk7XHJcbiAgICAvL31cclxuICAgIC8vXHJcbiAgICAvL3NldFRpbWVvdXQoc2FsZVNob3csMTAwMDApO1xyXG5cclxuICAgIGpRdWVyeSgnLnNhbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnNhbGVfd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCdjYXJkX3NsaWRlX2xlZnRfc2FsZSBjYXJkX3NsaWRlX3JpZ2h0X3NhbGUnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9zYWxlX2NvbnRhaW5lciA9IGpRdWVyeShcIi5zYWxlX3dyYXBwZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9zYWxlID0galF1ZXJ5KFwiLnNhbGVcIik7XHJcbiAgICAgICAgICAgIGlmICghcG9wdXBfc2FsZS5pcyhlLnRhcmdldCkgJiYgIXBvcHVwX3NhbGVfY29udGFpbmVyLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9zYWxlX2NvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cF9zYWxlX2NvbnRhaW5lci5yZW1vdmVDbGFzcygnY2FyZF9zbGlkZV9sZWZ0JykuYWRkQ2xhc3MoJ2NhcmRfc2xpZGVfcmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcG9wdXBfc3Vic2NyaXB0aW9uKi9cclxuXHJcbiAgICBqUXVlcnkoJy5yaWdodF9iYW5uZXJfYmxvY2sgLmJ1dHRvbl9zdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIHN1YnNfdmFsID0galF1ZXJ5KCcuYmFubmVyX2Jsb2NrIGlucHV0JykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChzdWJzX3ZhbCAhPSAwICkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF9zdWJzY3JpcHRpb24nKS5yZW1vdmVDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX3N1YnNjcmlwdGlvbicpLnRvZ2dsZUNsYXNzKCdwb3B1cF9zbGlkZV91cCBwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmFkZF9zaGFkb3dheicpLmZhZGVJbigzMDApO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBfc3VicyA9IGpRdWVyeShcIi5wb3B1cF9zdWJzY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWpRdWVyeSgnLnJpZ2h0X2Jhbm5lcl9ibG9jayAuYnV0dG9uX3N1Ym1pdCcpLmlzKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFwb3B1cF9zdWJzLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9zdWJzLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cF9zdWJzLnJlbW92ZUNsYXNzKCdwb3B1cF9zbGlkZV91cCcpLmFkZENsYXNzKCdwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcuYWRkX3NoYWRvd2F6JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsYXlfc3Vic2NyaXB0aW9uLDMwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcG9wdXBfYWRkKi9cclxuXHJcbiAgICBqUXVlcnkoJy5oaWRkZW5fcHJpY2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF9hZGQnKS5yZW1vdmVDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfYWRkJykudG9nZ2xlQ2xhc3MoJ3BvcHVwX3NsaWRlX3VwIHBvcHVwX3NsaWRlX2Rvd24nKTtcclxuICAgICAgICBqUXVlcnkoJy5hZGRfc2hhZG93JykuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBfYWRkID0galF1ZXJ5KFwiLnBvcHVwX2FkZFwiKTtcclxuICAgICAgICAgICAgaWYgKCFqUXVlcnkoJy5idXlfZW5qb3knKS5pcyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICAgICAgICFqUXVlcnkoJy5oaWRkZW5fcHJpY2UnKS5pcyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICAgICAgICFqUXVlcnkoJy5mYS1zaG9wcGluZy1jYXJ0JykuaXMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAgICAgICAhcG9wdXBfYWRkLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9hZGQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfYWRkLnJlbW92ZUNsYXNzKCdwb3B1cF9zbGlkZV91cCcpLmFkZENsYXNzKCdwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5hZGRfc2hhZG93JykuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkZWxheV9hZGQsMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcG9wdXBfcXVpY2tfdmlldyovXHJcblxyXG4gICAgalF1ZXJ5KCcuaGlkZGVuX2hvdmVyIC5mYS1zZWFyY2gtcGx1cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXcnKS5yZW1vdmVDbGFzcygnZGlzcGxheV9uJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfcXVpY2tfdmlldycpLnRvZ2dsZUNsYXNzKCdwb3B1cF9zbGlkZV91cCBwb3B1cF9zbGlkZV9kb3duJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucXVpY2tfdmlld19zaGFkb3cnKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF9xdWljayA9IGpRdWVyeShcIi5wb3B1cF9xdWlja192aWV3XCIpO1xyXG4gICAgICAgICAgICBpZiAoIWpRdWVyeSgnLmhpZGRlbl9ob3ZlciAuZmEtc2VhcmNoLXBsdXMnKS5pcyhlLnRhcmdldCkgJiYgIXBvcHVwX3F1aWNrLmlzKGUudGFyZ2V0KSAmJiBwb3B1cF9xdWljay5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cF9xdWljay5yZW1vdmVDbGFzcygncG9wdXBfc2xpZGVfdXAnKS5hZGRDbGFzcygncG9wdXBfc2xpZGVfZG93bicpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucXVpY2tfdmlld19zaGFkb3cnKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRlbGF5X3F1aWNrX3ZpZXcsMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcXVpY2tfdmlld19wb3B1cCBzbGlkZXIqL1xyXG5cclxuICAgIHZhciBwb3B1cFNsaWRlckl0ZW1zID0galF1ZXJ5KCcucG9wdXBfcXVpY2tfdmlld19sZWZ0IHVsJykuY2hpbGRyZW4oJ2xpJyk7XHJcbiAgICB2YXIgcG9wdXBTbGlkZXJJdGVtc0xlbmd0aCA9IHBvcHVwU2xpZGVySXRlbXMubGVuZ3RoO1xyXG4gICAgdmFyIHBvcHVwU2xpZGVySXRlbXNDb3VudGVyID0gMDtcclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF9xdWlja192aWV3IC5mYS1hbmdsZS1yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcG9wdXBTbGlkZXJJdGVtcy5yZW1vdmVDbGFzcygnZGlzcGxheV9iJyk7XHJcblxyXG4gICAgICAgIGlmIChwb3B1cFNsaWRlckl0ZW1zQ291bnRlciA+IHBvcHVwU2xpZGVySXRlbXNMZW5ndGgtMikge1xyXG4gICAgICAgICAgICBwb3B1cFNsaWRlckl0ZW1zQ291bnRlciA9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5KHBvcHVwU2xpZGVySXRlbXNbKytwb3B1cFNsaWRlckl0ZW1zQ291bnRlcl0pLmFkZENsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnBvcHVwX3F1aWNrX3ZpZXcgLmZhLWFuZ2xlLWxlZnQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHBvcHVwU2xpZGVySXRlbXMucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuICAgICAgICBpZiAocG9wdXBTbGlkZXJJdGVtc0NvdW50ZXIgPCAxKSB7XHJcbiAgICAgICAgICAgIHBvcHVwU2xpZGVySXRlbXNDb3VudGVyID0gcG9wdXBTbGlkZXJJdGVtc0xlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeShwb3B1cFNsaWRlckl0ZW1zWy0tcG9wdXBTbGlkZXJJdGVtc0NvdW50ZXJdKS5hZGRDbGFzcygnZGlzcGxheV9iJyk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKm5leHQtcHJldiBzbGlkZXIqL1xyXG4gICAgbmV4dC5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICBpZiAoY291bnRlciA9PSBzbGlkZUxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbc2xpZGVMZW5ndGgtMV0pLmFuaW1hdGUoeydvcGFjaXR5JzogMH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYW5pbWF0ZU5leHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gMCl7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZVtzbGlkZUxlbmd0aC0yXSkuZmluZCgnLnNsaWRlX2ltZycpLnJlbW92ZUNsYXNzKCdzY2FsZV9zbGlkZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gMSl7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZVtzbGlkZUxlbmd0aC0xXSkuZmluZCgnLnNsaWRlX2ltZycpLnJlbW92ZUNsYXNzKCdzY2FsZV9zbGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlci0yXSkuZmluZCgnLnNsaWRlX2ltZycpLnJlbW92ZUNsYXNzKCdzY2FsZV9zbGlkZScpO1xyXG4gICAgICAgIGpRdWVyeShzbGlkZVtjb3VudGVyLTFdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDB9LCAxMDAwKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlcl0pLmFuaW1hdGUoeydvcGFjaXR5JzogMX0sIDgwMCk7XHJcbiAgICAgICAgYmFja2dyb3VuZENoYW5nZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJldi5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvdW50ZXItLTtcclxuICAgICAgICBpZiAoY291bnRlciA8IDApe1xyXG4gICAgICAgICAgICBjb3VudGVyID0gc2xpZGVMZW5ndGgtMTtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlWzBdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFuaW1hdGVOZXh0KCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID09IHNsaWRlTGVuZ3RoLTEpe1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbMV0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID09IHNsaWRlTGVuZ3RoLTIpe1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVbMF0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXIrMl0pLmZpbmQoJy5zbGlkZV9pbWcnKS5yZW1vdmVDbGFzcygnc2NhbGVfc2xpZGUnKTtcclxuICAgICAgICBqUXVlcnkoc2xpZGVbY291bnRlcisxXSkuYW5pbWF0ZSh7J29wYWNpdHknOiAwfSwgMTAwMCk7XHJcbiAgICAgICAgalF1ZXJ5KHNsaWRlW2NvdW50ZXJdKS5hbmltYXRlKHsnb3BhY2l0eSc6IDF9LCA4MDApO1xyXG4gICAgICAgIGJhY2tncm91bmRDaGFuZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qY2Fyb3VzZWwqL1xyXG5cclxuICAgICQoXCIuY2Fyb3VzZWxfdmlkZW9fcHJvZHVjdFwiKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTIwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuaXRlbV9zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTEyMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLm1vZGVsX3Bob3RvX2Nhcm91c2VsXCIpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExMjAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9hZGQgdG8gY2FyZFxyXG4gICAgZnVuY3Rpb24gZGVsYXlDbG9zZUF0dGVudGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5hdHRlbnRpb24nKS5mYWRlT3V0KDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saW5rIGRlbGF5XHJcbiAgICBmdW5jdGlvbiBkZWxheUhyZWYoKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcud2lzaGxpc3RfaG92ZXInKS5hdHRyKCdocmVmJywgJ3dpc2hsaXN0Lmh0bWwnKTtcclxuICAgICAgICBqUXVlcnkoJy53aXNobGlzdF9ob3ZlcicpLmNzcygnY29sb3InLCAnI0Q0MzY0QycpO1xyXG4gICAgICAgIGpRdWVyeSgnLmxpa2UgLmZhLWhlYXJ0JykuY3NzKCdjb2xvcicsICcjRDQzNjRDJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcubGlrZSAuZmEtaGVhcnQnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaW4gbW9kZWwgY2FydFxyXG4gICAgalF1ZXJ5KCcucGhvdG9fbW9kZWxfY2FydF9jb250ZW50IC5idXR0b25faW5wdXRfbG9naW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmF0dGVudGlvbicpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZGVsYXlDbG9zZUF0dGVudGlvbiwgMTAwMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9pbiB3aXNobGlzdFxyXG4gICAgalF1ZXJ5KCcuYnV0dG9uX3RkIC5idXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmF0dGVudGlvbicpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZGVsYXlDbG9zZUF0dGVudGlvbiwgMTAwMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jaGVja291dFxyXG4gICAgalF1ZXJ5KCcucXVlc3Rpb24+c3BhbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuICAgIC8vaW4gY2hlY2tvdXRcclxuICAgIGpRdWVyeSgnLnJlbWVtYmVyX2JvdHRvbSBhJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ltYWdlIHNvdXJjZSByZXBsYWNlXHJcblxyXG4gICAgdmFyIG1haW5JbWFnZVNyYyA9IGpRdWVyeSgnLnZpZGVvX21haW4gLnNsaWNrLXRyYWNrIC5jYXJvdXNlbF9waWN0dXJlOm50aC1jaGlsZCg0KSBpbWcnKS5hdHRyKCdzcmMnKTtcclxuICAgIHZhciBwaWN0dXJlQXJyYXlGb3JSZXBsYWNlID0gW107XHJcbiAgICB2YXIgcGljdHVyZUFycmF5Rm9yQXNzb2NpYXRpb24gPSBqUXVlcnkoJy5jYXJvdXNlbF92aWRlb19wcm9kdWN0IC5jYXJvdXNlbF9waWN0dXJlIGltZycpLmdldCgpO1xyXG4gICAgdmFyIGltZ0NvdW50ZXIgPSAwO1xyXG4gICAgdmFyIGluZGV4ID0gMztcclxuXHJcbiAgICBqUXVlcnkoJy52aWRlb19jYXJvdXNlbF9pbWcgaW1nJykuYXR0cignc3JjJywgbWFpbkltYWdlU3JjKTtcclxuXHJcbiAgICBqUXVlcnkocGljdHVyZUFycmF5Rm9yQXNzb2NpYXRpb24pLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGltYWdlU3JjID0galF1ZXJ5KHRoaXMpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIGluZGV4ID0galF1ZXJ5KHBpY3R1cmVBcnJheUZvckFzc29jaWF0aW9uKS5pbmRleCh0aGlzKTtcclxuICAgICAgICBqUXVlcnkoJy52aWRlb19jYXJvdXNlbF9pbWcgaW1nJykuYXR0cignc3JjJywgaW1hZ2VTcmMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ltYWdlcyB6b29tXHJcblxyXG4gICAgLy9mb3IgdmlkZW8gY2FydFxyXG5cclxuICAgIGpRdWVyeSgnLmNhcm91c2VsX3ZpZGVvX3Byb2R1Y3QgLmNhcm91c2VsX3BpY3R1cmUgaW1nJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHBpY3R1cmVBcnJheUZvclJlcGxhY2VbaW1nQ291bnRlcl0gPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgdmFyIGNsb25lSW1nU3JjID0gcGljdHVyZUFycmF5Rm9yUmVwbGFjZVtpbWdDb3VudGVyXS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBqUXVlcnkoJy56b29tX2ltZ19iaWcnKS5hcHBlbmQoJzxkaXY+PGltZyBzcmM9JyArY2xvbmVJbWdTcmMrICcgYWx0PVwiXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgaW1nQ291bnRlcisrO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcucGhvdG9fbW9kZWxfY2FydF9jb250ZW50IC5uZXdfY29udGFpbmVyIC5sZWZ0X3NpZGUgLnZpZGVvX2Nhcm91c2VsX2ltZz5pbWcnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgbGFzdEFycmF5Rm9yVmlkZW8gPSBqUXVlcnkoJy56b29tX2ltZ19iaWcnKS5jaGlsZHJlbignZGl2Jyk7XHJcblxyXG4gICAgICAgIHZhciBpID0gaW5kZXg7XHJcbiAgICAgICAgdmFyIG5leHQgPSBqUXVlcnkoJy56b29tX2ltZ19iaWcgLm5leHQnKTtcclxuICAgICAgICB2YXIgcHJldiA9IGpRdWVyeSgnLnpvb21faW1nX2JpZyAucHJldicpO1xyXG5cclxuICAgICAgICBqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW8pLnJlbW92ZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICBqUXVlcnkobGFzdEFycmF5Rm9yVmlkZW9baV0pLmFkZENsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICBqUXVlcnkoJy5pbWFnZV96b29tX3NoYWRvdycpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLndyYXBwZXJfem9vbV9pbWdfYmlnJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnpvb21faW1nX2JpZyAubmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlbykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGk+bGFzdEFycmF5Rm9yVmlkZW8ubGVuZ3RoLTIpIHtcclxuICAgICAgICAgICAgICAgIGkgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvWysraV0pLmFkZENsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvW2ldKSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJy56b29tX2ltZ19iaWcgLnByZXYnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlbykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXlfYicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGk8MSkge1xyXG4gICAgICAgICAgICAgICAgaSA9IGxhc3RBcnJheUZvclZpZGVvLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxhc3RBcnJheUZvclZpZGVvWy0taV0pLmFkZENsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpRdWVyeShsYXN0QXJyYXlGb3JWaWRlb1tpXSkpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cF96b29tID0galF1ZXJ5KFwiLndyYXBwZXJfem9vbV9pbWdfYmlnXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwX3pvb20uaXMoZS50YXJnZXQpICYmIHBvcHVwX3pvb20uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfem9vbS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5pbWFnZV96b29tX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9mb3IgcGhvdG9fY2FydFxyXG5cclxuICAgIGpRdWVyeSgnLnBob3RvX21vZGVsX2NhcnRfY29udGVudCAubmV3X2NvbnRhaW5lciAubGVmdF9zaWRlPmltZycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGJpZ0ltZyA9IGpRdWVyeSh0aGlzKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBqUXVlcnkoJ21haW4nKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ6b29tX2ltZ19iaWdfcGljdHVyZVwiPjxpbWcgc3JjPScrYmlnSW1nKycgYWx0PVwiXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuaW1hZ2Vfem9vbV9zaGFkb3cnKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICBqUXVlcnkoJy56b29tX2ltZ19iaWdfcGljdHVyZScpLmZhZGVJbigzMDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwX3pvb20gPSBqUXVlcnkoXCIuem9vbV9pbWdfYmlnX3BpY3R1cmVcIik7XHJcbiAgICAgICAgICAgIGlmICghalF1ZXJ5KCcuem9vbV9pbWdfY2xvc2UnKS5pcyhlLnRhcmdldCkgJiYgIXBvcHVwX3pvb20uaXMoZS50YXJnZXQpICYmIHBvcHVwX3pvb20uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfem9vbS5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5pbWFnZV96b29tX3NoYWRvdycpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnpvb21faW1nX2JpZ19waWN0dXJlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ob3ZlciBtZW51X2xpc3RcclxuXHJcbiAgICBqUXVlcnkoJy5sZWZ0X2hlYWRlciAubWVudSA+IGxpOm50aC1jaGlsZCgzKScpLmhvdmVyKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcubWVudV9saXN0JykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgalF1ZXJ5KCcubWVudV9saXN0JykuYWRkQ2xhc3MoJ2FjdGl2ZV9tZW51Jyk7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5tZW51X2xpc3QnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLm1lbnVfbGlzdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmVfbWVudScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuZm9vdGVyX21lbnUgLm1lbnUgPiBsaTpudGgtY2hpbGQoMyknKS5ob3ZlciggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLmZvb3Rlcl9tZW51X3Bvc2l0aW9uJykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZm9vdGVyX21lbnVfcG9zaXRpb24nKS5hZGRDbGFzcygnYWN0aXZlX21lbnVfZm9vdGVyJyk7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5mb290ZXJfbWVudV9wb3NpdGlvbicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZm9vdGVyX21lbnVfcG9zaXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlX21lbnVfZm9vdGVyJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90YWJzXHJcblxyXG4gICAgdmFyIHRhYnNCdXR0b24gPSBqUXVlcnkoJy5uYXZfdGFicyB1bCcpLmNoaWxkcmVuKCdsaScpO1xyXG4gICAgdmFyIHRhYnNCbG9jayA9IGpRdWVyeSgnLm5hdl9ibG9ja3MgdWwnKS5jaGlsZHJlbignbGknKTtcclxuXHJcbiAgICBqUXVlcnkoJy5uYXZfdGFicyB1bCBsaScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGkgPSBqUXVlcnkodGhpcykuaW5kZXgoKTtcclxuICAgICAgICBqUXVlcnkodGFic0J1dHRvbikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV90YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV90YWInKTtcclxuICAgICAgICBqUXVlcnkodGFic0Jsb2NrKS5yZW1vdmVDbGFzcygnZGlzcGxheV9iIGFuaW1hdGVkX2ZhZGVJbkxlZnQgZmFkZUluTGVmdCcpO1xyXG4gICAgICAgIGpRdWVyeSh0YWJzQmxvY2tbaV0pLmFkZENsYXNzKCdkaXNwbGF5X2IgYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5MZWZ0JylcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xpZnRcclxuXHJcbiAgICBqUXVlcnkoJyNzY3JvbGx1cCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjYwMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNzY3JvbGx1cCcpLmZhZGVJbignNTAwJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3Njcm9sbHVwJykuZmFkZU91dCgnNTAwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBhZ2luYXRpb24qL1xyXG5cclxuICAgIGpRdWVyeSgnLnBhZ2luYXRpb24gdWwgbGknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBhZ2luYXRpb24gdWwgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlX3BhZ2UnKTtcclxuICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX3BhZ2UnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ob3ZlciBtZW51IGltYWdlXHJcbiAgICB2YXIgaW1hZ2VTcmNNZW51O1xyXG4gICAgdmFyIGRlZmF1bHRTcmNJbWFnZSA9IGpRdWVyeSgnLmhpZGRlbl9tZW51X3BpY3R1cmUnKS5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICBqUXVlcnkoJy5tZW51X2l0ZW0nKS5ob3ZlciggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW1hZ2VTcmNNZW51ID0galF1ZXJ5KHRoaXMpLmZpbmQoJy5oaWRkZW5fcGljdHVyZScpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuaGlkZGVuX21lbnVfcGljdHVyZScpLmF0dHIoJ3NyYycsIGltYWdlU3JjTWVudSk7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8valF1ZXJ5KCcuaGlkZGVuX21lbnVfcGljdHVyZScpLmF0dHIoJ3NyYycsIGRlZmF1bHRTcmNJbWFnZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZmlsdGVyXHJcblxyXG4gICAgalF1ZXJ5KCcuZmlsdGVyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2ZpbHRlcl9vcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS5maW5kKCcubmV3X2NvbnRhaW5lcicpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgLy9qUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X2InKTtcclxuICAgICAgICAvL2pRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ29wYWNpdHknKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ibG9nIGFuaW1hdGlvblxyXG5cclxuICAgIHZhciBmaWd1cmVBcnJheSA9IGpRdWVyeSgnLmZpZ3VyZV9ibG9jaycpLmNoaWxkcmVuKCdmaWd1cmUnKTtcclxuICAgIHZhciBmaWd1cmVTaG93QmxvY2sgPSA2O1xyXG4gICAgdmFyIGZpZ3VyZUNvdW50ZXIgPSAwO1xyXG5cclxuICAgIGZvciAoZmlndXJlQ291bnRlcjtmaWd1cmVDb3VudGVyPGZpZ3VyZVNob3dCbG9jaztmaWd1cmVDb3VudGVyKyspIHtcclxuICAgICAgICBqUXVlcnkoZmlndXJlQXJyYXlbZmlndXJlQ291bnRlcl0pLmFkZENsYXNzKCdkaXNwbGF5X2IgYW5pbWF0ZWRfZmFkZUluTGVmdCB6b29tSW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBqUXVlcnkoJy5maWd1cmVfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBmaWd1cmVTaG93QmxvY2srPTY7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlndXJlU2hvd0Jsb2NrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWd1cmVDb3VudGVyKTtcclxuICAgICAgICBmb3IgKGZpZ3VyZUNvdW50ZXI7ZmlndXJlQ291bnRlcjxmaWd1cmVTaG93QmxvY2s7ZmlndXJlQ291bnRlcisrKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShmaWd1cmVBcnJheVtmaWd1cmVDb3VudGVyXSkuYWRkQ2xhc3MoJ2Rpc3BsYXlfYiBhbmltYXRlZF9mYWRlSW5MZWZ0IHpvb21JbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PGhvdC9uZXc+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5cclxuXHJcbiAgICBqUXVlcnkoJy5tZW51X2l0ZW06bnRoLWNoaWxkKDMpIC5ob3QnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgalF1ZXJ5KCcubWVudV9pdGVtOm50aC1jaGlsZCg0KSAubmV3JykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZpeGVkIG1lbnVcclxuXHJcbiAgICB2YXIgc2Nyb2xsID0galF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICBpZiAoc2Nyb2xsID4gMCkge1xyXG4gICAgICAgIGpRdWVyeSgnLmhlYWRlcl9zdGF0aWMnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNlYXJjaF9ibG9jaycpLmNzcygndG9wJywgJzgwcHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICBzY3JvbGwgPSBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZiAoc2Nyb2xsID4gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5oZWFkZXJfc3RhdGljJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnaGVhZGVyJykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNlYXJjaF9ibG9jaycpLmNzcygndG9wJywgJzgwcHgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmhlYWRlcl9zdGF0aWMnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zZWFyY2hfYmxvY2snKS5jc3MoJ3RvcCcsICc5OXB4Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qcmVhZF9tb3JlKi9cclxuXHJcbiAgICAvL3ZhciBjaGVja2VyID0galF1ZXJ5KCdkaXYnKS5pcygnLmJsb2dfdGV4dCcpO1xyXG4gICAgLy92YXIgdGV4dCA9IGpRdWVyeSgnLmJsb2dfdGV4dCcpO1xyXG4gICAgLy92YXIgbW9yZSA9IGpRdWVyeShcIi5yZWFkX21vcmVcIik7XHJcbiAgICAvL3ZhciBsZXNzID0galF1ZXJ5KFwiLnJlYWRfbGVzc1wiKTtcclxuICAgIC8vXHJcbiAgICAvL2lmIChjaGVja2VyID09IHRydWUpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICB2YXIgaGVpZ2h0X2F1dG8gPSBbXTtcclxuICAgIC8vICAgIHZhciBpID0gMDtcclxuICAgIC8vXHJcbiAgICAvLyAgICB2YXIgbGluZWhlaWdodCA9IHRleHQuY3NzKCdsaW5lLWhlaWdodCcpLnJlcGxhY2UoXCJweFwiLCBcIlwiKTtcclxuICAgIC8vICAgIHZhciBmaXZlX2xpbmVzID0gbGluZWhlaWdodCo0O1xyXG4gICAgLy9cclxuICAgIC8vICAgIHRleHQuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICAgIGhlaWdodF9hdXRvW2ldID0galF1ZXJ5KHRoaXMpLmhlaWdodCgpO1xyXG4gICAgLy8gICAgICAgIGNvbnNvbGUubG9nKGhlaWdodF9hdXRvW2ldK1wiX19fXCIpO1xyXG4gICAgLy8gICAgICAgIGNvbnNvbGUubG9nKHRleHQuaGVpZ2h0KCkrJysrKycpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICBpZiAoaGVpZ2h0X2F1dG9baV0gPT0gZml2ZV9saW5lcykge1xyXG4gICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZygndXJhYScpO1xyXG4gICAgLy8gICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICBpKys7XHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICB0ZXh0LmNzcygnaGVpZ2h0JywgZml2ZV9saW5lcyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgbW9yZS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgdmFyIGkgPSBqUXVlcnkodGhpcykucHJldih0ZXh0KS5pbmRleCgnLmJsb2dfdGV4dCcpO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KHRleHQpLmFuaW1hdGUoe2hlaWdodDogaGVpZ2h0X2F1dG9baV19LCA0MDApO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KGxlc3MpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgIGxlc3MuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KG1vcmUpLnByZXYodGV4dCkuYW5pbWF0ZSh7aGVpZ2h0OiBmaXZlX2xpbmVzfSwgMzAwKTtcclxuICAgIC8vICAgICAgICBqUXVlcnkodGhpcykucHJldihtb3JlKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZvbGxvd19zbGlkZXJcclxuXHJcbiAgICB2YXIgZm9sbG93U2xpZGUgPSBqUXVlcnkoJy5mb2xsb3dfbGVmdCcpLmNoaWxkcmVuKCcucG9pbnRlcl9zbGlkZScpO1xyXG5cclxuICAgIGZvbGxvd1NsaWRlLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcyA9PSBmb2xsb3dTbGlkZVswXSApe1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5uYXZpZ2F0aW9uJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZG90IGFjdGl2ZV9kb3RcIj48L2Rpdj4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLm5hdmlnYXRpb24nKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciBkb3QgPSBqUXVlcnkoJy5uYXZpZ2F0aW9uJykuY2hpbGRyZW4oJy5kb3QnKTtcclxuICAgIHZhciBuYXZpZ2F0aW9uV2lkdGggPSBqUXVlcnkoJy5uYXZpZ2F0aW9uJykud2lkdGgoKTtcclxuICAgIGpRdWVyeSgnLm5hdmlnYXRpb24nKS5jc3MoJ21hcmdpbi1sZWZ0JywgLW5hdmlnYXRpb25XaWR0aC8yICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb2xsb3dfc2xpZGVyIGRvdHNcclxuXHJcbiAgICBqUXVlcnkoJy5kb3QnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGRvdC5yZW1vdmVDbGFzcygnYWN0aXZlX2RvdCcpO1xyXG4gICAgICAgIGZvbGxvd1NsaWRlLnJlbW92ZUNsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGRpc3BsYXlfYiBmYWRlSW5MZWZ0Jyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZG90Jyk7XHJcbiAgICAgICAgdmFyIGRvdENvdW50ZXIgPSBqUXVlcnkodGhpcykuaW5kZXgoKTtcclxuICAgICAgICBqUXVlcnkoZm9sbG93U2xpZGVbZG90Q291bnRlcl0pLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGRpc3BsYXlfYiBmYWRlSW5MZWZ0Jyk7XHJcbiAgICAgICAgLy9uYXZpZ2F0aW9uUG9zaXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qbW9iaWxlX21lbnUqL1xyXG5cclxuICAgIC8vYWJvdXQgdXNcclxuXHJcbiAgICBqUXVlcnkoJy5xdWVzdGlvbl9jbGljaycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBqUXVlcnkodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdtb2JpbGVfdXAgbW9iaWxlX2Rvd24gbW9iaWxlX3VwX3JldmVyc2UgbW9iaWxlX2Rvd25fcmV2ZXJzZScpO1xyXG4gICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5uZXh0KCkuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxuICAgIGpRdWVyeSgnLm1lbnVfbW9iaWxlPmxpOm50aC1jaGlsZCgyKT5hJykudG9nZ2xlQ2xhc3MoJ2N1cnJlbnQtbWVudS1pdGVtJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5pY29uLXN1Yi1tZW51X3F1ZXN0aW9uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ21vYmlsZV91cCBtb2JpbGVfZG93biBtb2JpbGVfdXBfcmV2ZXJzZSBtb2JpbGVfZG93bl9yZXZlcnNlJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLm1lbnVfbW9iaWxlPmxpOm50aC1jaGlsZCgyKT5hJykudG9nZ2xlQ2xhc3MoJ2N1cnJlbnQtbWVudS1pdGVtJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgalF1ZXJ5KCcuaWNvbi1zdWItbWVudScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdtb2JpbGVfdXAgbW9iaWxlX2Rvd24gbW9iaWxlX3VwX3JldmVyc2UgbW9iaWxlX2Rvd25fcmV2ZXJzZScpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxuICAgICAgICBqUXVlcnkoJy5tZW51X21vYmlsZT5saTpudGgtY2hpbGQoMik+YScpLnRvZ2dsZUNsYXNzKCdjdXJyZW50LW1lbnUtaXRlbScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcubWVudV9tb2JpbGU+bGk6bnRoLWNoaWxkKDIpPmEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ21vYmlsZV91cCBtb2JpbGVfZG93biBtb2JpbGVfdXBfcmV2ZXJzZSBtb2JpbGVfZG93bl9yZXZlcnNlJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5uZXh0KCkuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2N1cnJlbnQtbWVudS1pdGVtJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9saW5rIG5vbmUtZGVmYXVsdFxyXG5cclxuICAgIGpRdWVyeSgnLm1lbnU+bGk6bnRoLWNoaWxkKDMpPmEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vd2hpc2hsaXN0IGNsaWNrXHJcblxyXG4gICAgalF1ZXJ5KCcud2lzaGxpc3RfaG92ZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvaW50X3RleHQnLHRoaXMpLnRleHQoJ0Jyb3dzZSBXaXNobGlzdCcpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZGVsYXlIcmVmLDUwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BpY3R1cmUgaG92ZXJcclxuXHJcbiAgICBqUXVlcnkoJy5jYXJvdXNlbF9waWN0dXJlIC5oaWRkZW5faG92ZXIgaScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS5hZGRDbGFzcygnb3BhY2l0eScpO1xyXG4gICAgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLnJlbW92ZUNsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5tb2RlbHMgLmhpZGRlbl9ob3ZlciBpLCAudmlkZW9fY29udGFpbmVyIC5oaWRkZW5faG92ZXIgaScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS5hZGRDbGFzcygnb3BhY2l0eScpO1xyXG4gICAgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLnJlbW92ZUNsYXNzKCdvcGFjaXR5Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Nsb3NlIGl0ZW0gd2lzaGxpc3RcclxuXHJcbiAgICBqUXVlcnkoJy53aXNobGlzdF9ibG9jayAuY2xvc2UgLmNsb3NlX2FuaW1hdGlvbl9jYXJkJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuZmFkZU91dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbG9zZSBpdGVtIGNhcnRcclxuXHJcbiAgICBqUXVlcnkoJy5jb250ZW50X2NhcnQgLndpc2hsaXN0X2Jsb2NrIC5jbG9zZV9hbmltYXRpb25fY2FyZCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdtYXJrJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZhZGVPdXQoKTtcclxuICAgICAgICBqUXVlcnkoJy5hdHRlbnRpb24nKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICAvL3NldFRpbWVvdXQoZGVsYXlDbG9zZUF0dGVudGlvbiwgMTAwMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcudW5kbycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubWFyaycpLmZhZGVJbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2tvdXRcclxuXHJcbiAgICBqUXVlcnkoJy5jaGVja291dF90YWJsZSAuY2xvc2VfYW5pbWF0aW9uX2NhcmQsIC53aXNobGlzdF9pdGVtIC5jbG9zZV9hbmltYXRpb25fY2FyZCcpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuZmlyc3RfbGluZScpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfZmlyc3QnKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0X292ZXInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnLnNlY29uZF9saW5lJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9ob3Zlcl9zZWNvbmQnKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZF9vdmVyJyk7XHJcblxyXG4gICAgfSxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnLmZpcnN0X2xpbmUnKS5yZW1vdmVDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0X292ZXInKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX2ZpcnN0Jyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5zZWNvbmRfbGluZScpLnJlbW92ZUNsYXNzKCdzZWFyY2hfaG92ZXJfc2Vjb25kX292ZXInKS5hZGRDbGFzcygnc2VhcmNoX2hvdmVyX3NlY29uZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2hlY2tvdXRfdGFibGUgLmNsb3NlX2FuaW1hdGlvbl9jYXJkJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuZmFkZU91dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hY2NvdW50XHJcblxyXG4gICAgalF1ZXJ5KCcubGVmdF9hY2NvdW50IHVsIGxpJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5sZWZ0X2FjY291bnQgdWwgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlX2FjY291bnQnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9hY2NvdW50Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xvYWRfbW9yZV9wYWdlXHJcblxyXG4gICAgLy92YXIgZmlndXJlQmxvY2sgPSBqUXVlcnkoJy5uZXdzJykuY2hpbGRyZW4oJy5maWd1cmVfYmxvY2snKTtcclxuICAgIC8vdmFyIGZpZ3VyZUNvdW50ZXIgPSAwO1xyXG4gICAgLy8vL3ZhciBCbG9ja0NvdW50ZXIgPSAwO1xyXG4gICAgLy92YXIgZmlndXJlTnVtYmVyID0gMTtcclxuICAgIC8vXHJcbiAgICAvL2pRdWVyeSgnZmlndXJlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICBpZiAoZmlndXJlQ291bnRlciA+PSBmaWd1cmVOdW1iZXIpIHtcclxuICAgIC8vICAgICAgICBqUXVlcnkoZmlndXJlQmxvY2tbZmlndXJlQ291bnRlcl0pLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICBqUXVlcnkoZmlndXJlQmxvY2tbZmlndXJlQ291bnRlcl0pLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgIGZpZ3VyZUNvdW50ZXIrKztcclxuICAgIC8vfSk7XHJcbiAgICAvL1xyXG4gICAgLy9maWd1cmVDb3VudGVyID0gMTtcclxuICAgIC8vXHJcbiAgICAvL2pRdWVyeSgnLmZpZ3VyZV9idXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgalF1ZXJ5KGZpZ3VyZUJsb2NrW2ZpZ3VyZUNvdW50ZXIrK10pLmFkZENsYXNzKCdkaXNwbGF5X2IgYW5pbWF0ZWRfZmFkZUluTGVmdCBmYWRlSW5SaWdodCcpO1xyXG4gICAgLy99KTtcclxuXHJcbn0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp0aW1lciBmb3Igc2xpZGVyKi9cclxuXHJcbnZhciBydW4gPSBzZXRJbnRlcnZhbCgncm90YXRlKCknLCAxMDAwMCk7XHJcblxyXG5qUXVlcnkoJy5zbGlkZXInKS5ob3ZlcihcclxuICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwocnVuKTtcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICBydW4gPSBzZXRJbnRlcnZhbCgncm90YXRlKCknLCAxMDAwMCk7XHJcbiAgICB9XHJcbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnRpbWVyIHJ1biovXHJcblxyXG5mdW5jdGlvbiByb3RhdGUoKSB7XHJcbiAgICBuZXh0LmNsaWNrKCk7XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
