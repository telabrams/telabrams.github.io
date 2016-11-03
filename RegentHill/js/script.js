jQuery(document).ready(function(){

    //jQuery(window).resize(function(){
    //    if (jQuery(window).width()<1024) {
    //        $('body *').unbind('mouseenter mouseleave');
    //        console.log('unbind');
    //    }
    //    else {
    //        $('body *').bind('mouseenter mouseleave');
    //        console.log('bind');
    //    }
    //});

    //popup_cake_result

    jQuery('.popup_wrapper_cake .popup_cake .button').on('click', function(){

        return false;
    });

    //popup_cake

    jQuery('.popup_wrapper_cake .left label').on('click', function(){
        jQuery('.popup_wrapper_cake .left label').removeClass('active_cake');
        jQuery(this).addClass('active_cake');
    });

    //popup_wine_result

    jQuery('.popup_wrapper_wine .popup_cake a').on('click', function(){
        jQuery('.popup_wrapper_wine .count_result').toggleClass('display_b');
        jQuery('.popup_wrapper_wine .popup_cake').toggleClass('margin');

            var scroll_el = jQuery(this).attr('href');

            if (jQuery(scroll_el).length != 0) {
                jQuery('.popup_wrapper_wine').animate({ scrollTop: jQuery(scroll_el).offset().top }, 500);
            }


        return false;
    });

    //popup_radio

    jQuery('.popup_wrapper_wine .clone').on('click', function(){
        jQuery('.popup_wrapper_wine .clone').removeClass('active_radio');
        jQuery(this).addClass('active_radio');
    });

    //popup_radio_season

    jQuery('.popup_wrapper_wine .right .top .top_container .item_cake').on('click', function(){
        jQuery('.popup_wrapper_wine .right .top .top_container .item_cake').removeClass('active_radio_season');
        jQuery(this).addClass('active_radio_season');
    });

    //popup_radio_hours

    jQuery('.popup_wrapper_wine .right .bottom .bottom_container .item_cake').on('click', function(){
        jQuery('.popup_wrapper_wine .right .bottom .bottom_container .item_cake').removeClass('active_radio_hours');
        jQuery(this).addClass('active_radio_hours');
    });

    //language toggle

    jQuery('.lang-item').click(function(){
        jQuery(this).siblings().removeClass('current-lang');
        jQuery(this).addClass('current-lang');
        return false; /*delete on backend!!!*/
    });

    //menu toggle

    jQuery('.inner_page aside').mouseleave(function(){
        jQuery('menu > li:nth-child(4)>a').next().css('display', 'none');
        jQuery('.social').removeClass('social_bottom');
    });

    jQuery('menu > li:nth-child(4)>a').click(function(){
        jQuery(this).next().slideToggle();
        jQuery('menu > li:nth-child(4)>a').toggleClass('rotate');
        jQuery('.social').toggleClass('social_bottom');

        return false; /*delete on backend!!!*/
    });

    //lift

    jQuery('#scrollup').click(function(){
        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);
    });

    jQuery(window).scroll(function(){
        if (jQuery(document).scrollTop()>600) {
            jQuery('.scrollup_container').fadeIn(500);
        }else{
            jQuery('.scrollup_container').fadeOut(500);
        }
    });

    //menu mobile

    jQuery('.mobile_footer > ul:first-child > li:nth-child(4)>a').click(function(){
        jQuery(this).parent().parent().next().slideToggle();
        jQuery('.mobile_footer > ul:first-child > li:nth-child(4)>a').toggleClass('rotate');

        return false; /*delete on backend!!!*/
    });

    //menu open (desktop)

    jQuery('.bar > i').on('click', function(){
        jQuery('.mobile_footer').slideToggle('mobile_open');

        jQuery(document).mouseup(function (e) {
            var mobileMenu = jQuery('.mobile_footer');
            var mobileButton = jQuery('.bar > i');
            if (!mobileButton.is(e.target) && !mobileMenu.is(e.target) && mobileMenu.has(e.target).length == 0) {
                mobileMenu.removeClass('mobile_open');
            }
        });

    });

    //menu open (mobile)

    jQuery('.bar > i').on('tap', function(){
        jQuery('.mobile_footer').toggleClass('mobile_open');

        jQuery(document).on('tap', function (e) {
            var mobileMenu = jQuery('.mobile_footer');
            if (!mobileMenu.is(e.target) && mobileMenu.has(e.target).length == 0) {
                mobileMenu.removeClass('mobile_open');
            }
        });
    });

    //popup

    jQuery('.subscribe .button').on('click', function() {
        jQuery('.popup_wrapper').fadeIn(400);

        jQuery(document).mouseup(function (e) {
            var popupMenu = jQuery('.popup');
            var popupButton = jQuery('.subscribe .button');
            if (!popupButton.is(e.target) && !popupMenu.is(e.target) && popupMenu.has(e.target).length == 0) {
                jQuery('.popup_wrapper').fadeOut(400);
            }
        });
    });

    //popup_wine

    jQuery('.event_for_one_block .one_item:nth-child(2)').on('click', function() {
        jQuery('.popup_wrapper_wine').fadeIn(400);

        jQuery(document).mouseup(function (e) {
            var popupMenu = jQuery('.popup_cake');
            var popupButton = jQuery('.event_for_one_block .one_item:nth-child(2)');
            if (!popupButton.is(e.target) && !popupMenu.is(e.target) && popupMenu.has(e.target).length == 0) {
                jQuery('.popup_wrapper_wine').fadeOut(400);
            }
        });
    });

    //popup_cake

    jQuery('.event_for_one_block .one_item:first-child').on('click', function() {
        jQuery('.popup_wrapper_cake').fadeIn(400);

        jQuery(document).mouseup(function (e) {
            var popupMenu = jQuery('.popup_cake');
            var popupButton = jQuery('.event_for_one_block .one_item:first-child');
            if (!popupButton.is(e.target) && !popupMenu.is(e.target) && popupMenu.has(e.target).length == 0) {
                jQuery('.popup_wrapper_cake').fadeOut(400);
            }
        });
    });

    //popup_call

    jQuery('.phone_container i').on('click', function() {
        jQuery('.popup_wrapper_call').fadeIn(400);

        jQuery(document).mouseup(function (e) {
            var popupMenu = jQuery('.popup');
            var popupButton = jQuery('.phone_container i');
            if (!popupButton.is(e.target) && !popupMenu.is(e.target) && popupMenu.has(e.target).length == 0) {
                jQuery('.popup_wrapper_call').fadeOut(400);
            }
        });
    });

    jQuery('.close_popup').on('click', function() {
        jQuery('.popup_wrapper, .popup_wrapper_call, .popup_wrapper_cake, .popup_wrapper_wine').fadeOut(400);
    });

    //menu scroll

    //function delayScroll() {
    //    jQuery('.wrapper').addClass('wrapper_scroll');
    //}
    //
    //jQuery('aside').hover(function(){
    //    setTimeout(delayScroll, 500);},
    //    function(){
    //        jQuery('.wrapper').removeClass('wrapper_scroll');
    //    });

    //apartment hover

    if (jQuery(window).width()>1024) {
        jQuery('.apartment_item').hover(function() {
            jQuery(this).find('p').fadeIn(1000);
        },function(){
            jQuery(this).find('p').fadeOut(0);
        });
    }

    //show more animation

    if (jQuery('div').is('.news_block')){

        //if (jQuery(document).scrollTop() + jQuery(window).height() > jQuery('.news_block').offset().top && jQuery(document).scrollTop() - jQuery('.news_block').offset().top < jQuery('.news_block').height()) {

            var news = jQuery('.news_item');
            var newsList = news.get();
            var newsLength = newsList.length;
            var i = 0;
            var k = 3;

            for (i; i < k; i++) {
                jQuery(newsList[i]).addClass('animated_fadeInLeft display_b zoomIn');
            }

            jQuery('.show_more').click(function () {
                k += 3;
                for (i; i < k; i++) {
                    jQuery(newsList[i]).addClass('animated_fadeInLeft display_b zoomIn');
                }
            });
        //}
    }

    if (jQuery('div').is('.all_news_block')){

        //if (jQuery(document).scrollTop() + jQuery(window).height() > jQuery('.news_block').offset().top && jQuery(document).scrollTop() - jQuery('.news_block').offset().top < jQuery('.news_block').height()) {

        var news = jQuery('.news_item');
        var newsList = news.get();
        var newsLength = newsList.length;
        var i = 0;
        var k = 6;

        for (i; i < k; i++) {
            jQuery(newsList[i]).addClass('animated_fadeInLeft display_b zoomIn');
        }

        jQuery('.show_more').click(function () {
            k += 3;
            for (i; i < k; i++) {
                jQuery(newsList[i]).addClass('animated_fadeInLeft display_b zoomIn');
            }
        });
        //}
    }

    //index slider

    jQuery('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'ease-out'
    });

    //menu carousel

    jQuery('.carousel_zoom').owlCarousel({
        center: true,
        items:3,
        loop:true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        lazyLoad: true,
        margin:0,
        responsive:{
            960:{
                items:3
            },
            768:{
                nav: false,
                items:3
            },
            480:{
                nav: false,
                items:1
            },
            0:{
                nav: false,
                items:1
            }
        }
    });

    //scroll to

    jQuery('.symbol a').click( function(){
        var scroll_el = jQuery(this).attr('href');

        if (jQuery(scroll_el).length != 0) {
            jQuery('html, body').animate({ scrollTop: jQuery(scroll_el).offset().top }, 500);
        }

        return false;
    });

    //tabs

    jQuery('.tabs_list li').click(function(){
        jQuery('.tabs_list li').removeClass('current_tab');
        jQuery(this).addClass('current_tab');
    });

    //tabs gallery

    jQuery('.figure_tabs .tab').click(function(){
        jQuery('.figure_tabs .tab').removeClass('current_gallery_view');
        jQuery(this).addClass('current_gallery_view');
    });

    jQuery('.figure_tabs .tab:nth-child(2)').click(function(){
        jQuery('.gallery-interior_block').addClass('list_view');
    });

    jQuery('.figure_tabs .tab:first-child').click(function(){
        jQuery('.gallery-interior_block').removeClass('list_view');
    });

    //guests_carousel

    jQuery('.guests_carousel').owlCarousel({
        center: true,
        items:1,
        smartSpeed: 1000,
        loop:true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        lazyLoad: true,
        margin:0,
        responsive:{
            960:{
                items:1
            },
            768:{
                nav: false,
                items:1
            },
            480:{
                nav: false,
                items:1
            },
            0:{
                nav: false,
                items:1
            }
        }
    });

    //wedding_gallery

    //masonry_fix

    var $container = jQuery('.masonry');
    $container.imagesLoaded( function() {
        $container.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
        $container.addClass('loaded');
    });

    //jQuery('.grid').masonry({
    //    itemSelector: '.grid-item',
    //    columnWidth: '.grid-sizer',
    //    percentPosition: true
    //});

});

    //map

    var map;
    function initMap() {
        var myLatLng = {lat: 50.42656874, lng: 30.53836316};

        map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            zoom: 17,
            mapTypeControl: false,
            scrollwheel: false
        });

        map.setOptions({styles: styles['default']});

        var marker = new google.maps.Marker({
            map: map,
            position: myLatLng,
            title: 'Regent Hill'
        });

    }

    var styles = {
        default: null,
        silver: [
            {
                elementType: 'geometry',
                stylers: [{color: '#f5f5f5'}]
            },
            {
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{color: '#616161'}]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{color: '#f5f5f5'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#bdbdbd'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#757575'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [{color: '#757575'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#dadada'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#616161'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#c9c9c9'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            }
        ],

        night: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ],

        retro: [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
            }
        ],

        hiding: [
            {
                featureType: 'poi.business',
                stylers: [{visibility: 'off'}]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            }
        ]
    };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8valF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKTwxMDI0KSB7XHJcbiAgICAvLyAgICAgICAgJCgnYm9keSAqJykudW5iaW5kKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnKTtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZygndW5iaW5kJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAkKCdib2R5IConKS5iaW5kKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnKTtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnYmluZCcpO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy99KTtcclxuXHJcbiAgICAvL3BvcHVwX2Nha2VfcmVzdWx0XHJcblxyXG4gICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl9jYWtlIC5wb3B1cF9jYWtlIC5idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3BvcHVwX2Nha2VcclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX2Nha2UgLmxlZnQgbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfY2FrZSAubGVmdCBsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmVfY2FrZScpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2Nha2UnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcG9wdXBfd2luZV9yZXN1bHRcclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX3dpbmUgLnBvcHVwX2Nha2UgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lIC5jb3VudF9yZXN1bHQnKS50b2dnbGVDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lIC5wb3B1cF9jYWtlJykudG9nZ2xlQ2xhc3MoJ21hcmdpbicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjcm9sbF9lbCA9IGpRdWVyeSh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHNjcm9sbF9lbCkubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfd2luZScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGpRdWVyeShzY3JvbGxfZWwpLm9mZnNldCgpLnRvcCB9LCA1MDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3BvcHVwX3JhZGlvXHJcblxyXG4gICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lIC5jbG9uZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lIC5jbG9uZScpLnJlbW92ZUNsYXNzKCdhY3RpdmVfcmFkaW8nKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9yYWRpbycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wb3B1cF9yYWRpb19zZWFzb25cclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX3dpbmUgLnJpZ2h0IC50b3AgLnRvcF9jb250YWluZXIgLml0ZW1fY2FrZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lIC5yaWdodCAudG9wIC50b3BfY29udGFpbmVyIC5pdGVtX2Nha2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlX3JhZGlvX3NlYXNvbicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX3JhZGlvX3NlYXNvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wb3B1cF9yYWRpb19ob3Vyc1xyXG5cclxuICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfd2luZSAucmlnaHQgLmJvdHRvbSAuYm90dG9tX2NvbnRhaW5lciAuaXRlbV9jYWtlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX3dpbmUgLnJpZ2h0IC5ib3R0b20gLmJvdHRvbV9jb250YWluZXIgLml0ZW1fY2FrZScpLnJlbW92ZUNsYXNzKCdhY3RpdmVfcmFkaW9faG91cnMnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9yYWRpb19ob3VycycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9sYW5ndWFnZSB0b2dnbGVcclxuXHJcbiAgICBqUXVlcnkoJy5sYW5nLWl0ZW0nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdjdXJyZW50LWxhbmcnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtbGFuZycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLypkZWxldGUgb24gYmFja2VuZCEhISovXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21lbnUgdG9nZ2xlXHJcblxyXG4gICAgalF1ZXJ5KCcuaW5uZXJfcGFnZSBhc2lkZScpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ21lbnUgPiBsaTpudGgtY2hpbGQoNCk+YScpLm5leHQoKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNvY2lhbCcpLnJlbW92ZUNsYXNzKCdzb2NpYWxfYm90dG9tJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJ21lbnUgPiBsaTpudGgtY2hpbGQoNCk+YScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnbWVudSA+IGxpOm50aC1jaGlsZCg0KT5hJykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNvY2lhbCcpLnRvZ2dsZUNsYXNzKCdzb2NpYWxfYm90dG9tJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLypkZWxldGUgb24gYmFja2VuZCEhISovXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZnRcclxuXHJcbiAgICBqUXVlcnkoJyNzY3JvbGx1cCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjYwMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlSW4oNTAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsdXBfY29udGFpbmVyJykuZmFkZU91dCg1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vbWVudSBtb2JpbGVcclxuXHJcbiAgICBqUXVlcnkoJy5tb2JpbGVfZm9vdGVyID4gdWw6Zmlyc3QtY2hpbGQgPiBsaTpudGgtY2hpbGQoNCk+YScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZV9mb290ZXIgPiB1bDpmaXJzdC1jaGlsZCA+IGxpOm50aC1jaGlsZCg0KT5hJykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8qZGVsZXRlIG9uIGJhY2tlbmQhISEqL1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IG9wZW4gKGRlc2t0b3ApXHJcblxyXG4gICAgalF1ZXJ5KCcuYmFyID4gaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX2Zvb3RlcicpLnNsaWRlVG9nZ2xlKCdtb2JpbGVfb3BlbicpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIG1vYmlsZU1lbnUgPSBqUXVlcnkoJy5tb2JpbGVfZm9vdGVyJyk7XHJcbiAgICAgICAgICAgIHZhciBtb2JpbGVCdXR0b24gPSBqUXVlcnkoJy5iYXIgPiBpJyk7XHJcbiAgICAgICAgICAgIGlmICghbW9iaWxlQnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAhbW9iaWxlTWVudS5pcyhlLnRhcmdldCkgJiYgbW9iaWxlTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVNZW51LnJlbW92ZUNsYXNzKCdtb2JpbGVfb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IG9wZW4gKG1vYmlsZSlcclxuXHJcbiAgICBqUXVlcnkoJy5iYXIgPiBpJykub24oJ3RhcCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX2Zvb3RlcicpLnRvZ2dsZUNsYXNzKCdtb2JpbGVfb3BlbicpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKCd0YXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbW9iaWxlTWVudSA9IGpRdWVyeSgnLm1vYmlsZV9mb290ZXInKTtcclxuICAgICAgICAgICAgaWYgKCFtb2JpbGVNZW51LmlzKGUudGFyZ2V0KSAmJiBtb2JpbGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZU1lbnUucmVtb3ZlQ2xhc3MoJ21vYmlsZV9vcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcG9wdXBcclxuXHJcbiAgICBqUXVlcnkoJy5zdWJzY3JpYmUgLmJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXInKS5mYWRlSW4oNDAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cE1lbnUgPSBqUXVlcnkoJy5wb3B1cCcpO1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBCdXR0b24gPSBqUXVlcnkoJy5zdWJzY3JpYmUgLmJ1dHRvbicpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwQnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAhcG9wdXBNZW51LmlzKGUudGFyZ2V0KSAmJiBwb3B1cE1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcicpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wb3B1cF93aW5lXHJcblxyXG4gICAgalF1ZXJ5KCcuZXZlbnRfZm9yX29uZV9ibG9jayAub25lX2l0ZW06bnRoLWNoaWxkKDIpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lJykuZmFkZUluKDQwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBNZW51ID0galF1ZXJ5KCcucG9wdXBfY2FrZScpO1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBCdXR0b24gPSBqUXVlcnkoJy5ldmVudF9mb3Jfb25lX2Jsb2NrIC5vbmVfaXRlbTpudGgtY2hpbGQoMiknKTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cEJ1dHRvbi5pcyhlLnRhcmdldCkgJiYgIXBvcHVwTWVudS5pcyhlLnRhcmdldCkgJiYgcG9wdXBNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfd2luZScpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wb3B1cF9jYWtlXHJcblxyXG4gICAgalF1ZXJ5KCcuZXZlbnRfZm9yX29uZV9ibG9jayAub25lX2l0ZW06Zmlyc3QtY2hpbGQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX2Nha2UnKS5mYWRlSW4oNDAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cE1lbnUgPSBqUXVlcnkoJy5wb3B1cF9jYWtlJyk7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cEJ1dHRvbiA9IGpRdWVyeSgnLmV2ZW50X2Zvcl9vbmVfYmxvY2sgLm9uZV9pdGVtOmZpcnN0LWNoaWxkJyk7XHJcbiAgICAgICAgICAgIGlmICghcG9wdXBCdXR0b24uaXMoZS50YXJnZXQpICYmICFwb3B1cE1lbnUuaXMoZS50YXJnZXQpICYmIHBvcHVwTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX2Nha2UnKS5mYWRlT3V0KDQwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcG9wdXBfY2FsbFxyXG5cclxuICAgIGpRdWVyeSgnLnBob25lX2NvbnRhaW5lciBpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl9jYWxsJykuZmFkZUluKDQwMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBNZW51ID0galF1ZXJ5KCcucG9wdXAnKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwQnV0dG9uID0galF1ZXJ5KCcucGhvbmVfY29udGFpbmVyIGknKTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cEJ1dHRvbi5pcyhlLnRhcmdldCkgJiYgIXBvcHVwTWVudS5pcyhlLnRhcmdldCkgJiYgcG9wdXBNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfY2FsbCcpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvc2VfcG9wdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyLCAucG9wdXBfd3JhcHBlcl9jYWxsLCAucG9wdXBfd3JhcHBlcl9jYWtlLCAucG9wdXBfd3JhcHBlcl93aW5lJykuZmFkZU91dCg0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IHNjcm9sbFxyXG5cclxuICAgIC8vZnVuY3Rpb24gZGVsYXlTY3JvbGwoKSB7XHJcbiAgICAvLyAgICBqUXVlcnkoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXJfc2Nyb2xsJyk7XHJcbiAgICAvL31cclxuICAgIC8vXHJcbiAgICAvL2pRdWVyeSgnYXNpZGUnKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgc2V0VGltZW91dChkZWxheVNjcm9sbCwgNTAwKTt9LFxyXG4gICAgLy8gICAgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICAgICBqUXVlcnkoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXJfc2Nyb2xsJyk7XHJcbiAgICAvLyAgICB9KTtcclxuXHJcbiAgICAvL2FwYXJ0bWVudCBob3ZlclxyXG5cclxuICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpPjEwMjQpIHtcclxuICAgICAgICBqUXVlcnkoJy5hcGFydG1lbnRfaXRlbScpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykuZmluZCgncCcpLmZhZGVJbigxMDAwKTtcclxuICAgICAgICB9LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCdwJykuZmFkZU91dCgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Nob3cgbW9yZSBhbmltYXRpb25cclxuXHJcbiAgICBpZiAoalF1ZXJ5KCdkaXYnKS5pcygnLm5ld3NfYmxvY2snKSl7XHJcblxyXG4gICAgICAgIC8vaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyBqUXVlcnkod2luZG93KS5oZWlnaHQoKSA+IGpRdWVyeSgnLm5ld3NfYmxvY2snKS5vZmZzZXQoKS50b3AgJiYgalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKSAtIGpRdWVyeSgnLm5ld3NfYmxvY2snKS5vZmZzZXQoKS50b3AgPCBqUXVlcnkoJy5uZXdzX2Jsb2NrJykuaGVpZ2h0KCkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdzID0galF1ZXJ5KCcubmV3c19pdGVtJyk7XHJcbiAgICAgICAgICAgIHZhciBuZXdzTGlzdCA9IG5ld3MuZ2V0KCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdzTGVuZ3RoID0gbmV3c0xpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBrID0gMztcclxuXHJcbiAgICAgICAgICAgIGZvciAoaTsgaSA8IGs7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KG5ld3NMaXN0W2ldKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBkaXNwbGF5X2Igem9vbUluJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNob3dfbW9yZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGsgKz0gMztcclxuICAgICAgICAgICAgICAgIGZvciAoaTsgaSA8IGs7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShuZXdzTGlzdFtpXSkuYWRkQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZGlzcGxheV9iIHpvb21JbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICBpZiAoalF1ZXJ5KCdkaXYnKS5pcygnLmFsbF9uZXdzX2Jsb2NrJykpe1xyXG5cclxuICAgICAgICAvL2lmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgalF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgPiBqUXVlcnkoJy5uZXdzX2Jsb2NrJykub2Zmc2V0KCkudG9wICYmIGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCkgLSBqUXVlcnkoJy5uZXdzX2Jsb2NrJykub2Zmc2V0KCkudG9wIDwgalF1ZXJ5KCcubmV3c19ibG9jaycpLmhlaWdodCgpKSB7XHJcblxyXG4gICAgICAgIHZhciBuZXdzID0galF1ZXJ5KCcubmV3c19pdGVtJyk7XHJcbiAgICAgICAgdmFyIG5ld3NMaXN0ID0gbmV3cy5nZXQoKTtcclxuICAgICAgICB2YXIgbmV3c0xlbmd0aCA9IG5ld3NMaXN0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIGsgPSA2O1xyXG5cclxuICAgICAgICBmb3IgKGk7IGkgPCBrOyBpKyspIHtcclxuICAgICAgICAgICAgalF1ZXJ5KG5ld3NMaXN0W2ldKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBkaXNwbGF5X2Igem9vbUluJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqUXVlcnkoJy5zaG93X21vcmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGsgKz0gMztcclxuICAgICAgICAgICAgZm9yIChpOyBpIDwgazsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkobmV3c0xpc3RbaV0pLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGRpc3BsYXlfYiB6b29tSW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG5cclxuICAgIC8vaW5kZXggc2xpZGVyXHJcblxyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21lbnUgY2Fyb3VzZWxcclxuXHJcbiAgICBqUXVlcnkoJy5jYXJvdXNlbF96b29tJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICBpdGVtczozLFxyXG4gICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA0MDAwLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBsYXp5TG9hZDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46MCxcclxuICAgICAgICByZXNwb25zaXZlOntcclxuICAgICAgICAgICAgOTYwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpdGVtczozXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDQ4MDp7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3Njcm9sbCB0b1xyXG5cclxuICAgIGpRdWVyeSgnLnN5bWJvbCBhJykuY2xpY2soIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNjcm9sbF9lbCA9IGpRdWVyeSh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkoc2Nyb2xsX2VsKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBqUXVlcnkoc2Nyb2xsX2VsKS5vZmZzZXQoKS50b3AgfSwgNTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vdGFic1xyXG5cclxuICAgIGpRdWVyeSgnLnRhYnNfbGlzdCBsaScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcudGFic19saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnRfdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50X3RhYicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy90YWJzIGdhbGxlcnlcclxuXHJcbiAgICBqUXVlcnkoJy5maWd1cmVfdGFicyAudGFiJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5maWd1cmVfdGFicyAudGFiJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnRfZ2FsbGVyeV92aWV3Jyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50X2dhbGxlcnlfdmlldycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuZmlndXJlX3RhYnMgLnRhYjpudGgtY2hpbGQoMiknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmdhbGxlcnktaW50ZXJpb3JfYmxvY2snKS5hZGRDbGFzcygnbGlzdF92aWV3Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5maWd1cmVfdGFicyAudGFiOmZpcnN0LWNoaWxkJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5nYWxsZXJ5LWludGVyaW9yX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ2xpc3RfdmlldycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9ndWVzdHNfY2Fyb3VzZWxcclxuXHJcbiAgICBqUXVlcnkoJy5ndWVzdHNfY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgc21hcnRTcGVlZDogMTAwMCxcclxuICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNDAwMCxcclxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgbGF6eUxvYWQ6IHRydWUsXHJcbiAgICAgICAgbWFyZ2luOjAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgIDk2MDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA0ODA6e1xyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMDp7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy93ZWRkaW5nX2dhbGxlcnlcclxuXHJcbiAgICAvL21hc29ucnlfZml4XHJcblxyXG4gICAgdmFyICRjb250YWluZXIgPSBqUXVlcnkoJy5tYXNvbnJ5Jyk7XHJcbiAgICAkY29udGFpbmVyLmltYWdlc0xvYWRlZCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJGNvbnRhaW5lci5tYXNvbnJ5KHtcclxuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxyXG4gICAgICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8valF1ZXJ5KCcuZ3JpZCcpLm1hc29ucnkoe1xyXG4gICAgLy8gICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXHJcbiAgICAvLyAgICBjb2x1bW5XaWR0aDogJy5ncmlkLXNpemVyJyxcclxuICAgIC8vICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxyXG4gICAgLy99KTtcclxuXHJcbn0pO1xyXG5cclxuICAgIC8vbWFwXHJcblxyXG4gICAgdmFyIG1hcDtcclxuICAgIGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICAgICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDI2NTY4NzQsIGxuZzogMzAuNTM4MzYzMTZ9O1xyXG5cclxuICAgICAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICAgICAgICBjZW50ZXI6IG15TGF0TG5nLFxyXG4gICAgICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWFwLnNldE9wdGlvbnMoe3N0eWxlczogc3R5bGVzWydkZWZhdWx0J119KTtcclxuXHJcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICAgICAgcG9zaXRpb246IG15TGF0TG5nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1JlZ2VudCBIaWxsJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3R5bGVzID0ge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgc2lsdmVyOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmNWY1ZjUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMuaWNvbicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe3Zpc2liaWxpdHk6ICdvZmYnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNjE2MTYxJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuc3Ryb2tlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjVmNWY1J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubGFuZF9wYXJjZWwnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjYmRiZGJkJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNlZWVlZWUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNzU3NTc1J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2U1ZTVlNSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzllOWU5ZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2ZmZmZmZid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuYXJ0ZXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNzU3NTc1J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkYWRhZGEnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNjE2MTYxJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM5ZTllOWUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0LmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2U1ZTVlNSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQuc3RhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZWVlZWVlJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2M5YzljOSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzllOWU5ZSd9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgbmlnaHQ6IFtcclxuICAgICAgICAgICAge2VsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbe2NvbG9yOiAnIzI0MmYzZSd9XX0sXHJcbiAgICAgICAgICAgIHtlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsIHN0eWxlcnM6IFt7Y29sb3I6ICcjMjQyZjNlJ31dfSxcclxuICAgICAgICAgICAge2VsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsIHN0eWxlcnM6IFt7Y29sb3I6ICcjNzQ2ODU1J31dfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkNTk1NjMnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZDU5NTYzJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzI2M2MzZid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzZiOWE3Nid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzM4NDE0ZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMyMTJhMzcnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzljYTViMyd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNzQ2ODU1J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMWYyODM1J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2YzZDE5Yyd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzJmMzk0OCd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQuc3RhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkNTk1NjMnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMTcyNjNjJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNTE1YzZkJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMxNzI2M2MnfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIHJldHJvOiBbXHJcbiAgICAgICAgICAgIHtlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3tjb2xvcjogJyNlYmUzY2QnfV19LFxyXG4gICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJywgc3R5bGVyczogW3tjb2xvcjogJyM1MjM3MzUnfV19LFxyXG4gICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLCBzdHlsZXJzOiBbe2NvbG9yOiAnI2Y1ZjFlNid9XX0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNjOWIyYTYnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2RjZDJiZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2FlOWU5MCd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2xhbmRzY2FwZS5uYXR1cmFsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkZmQyYWUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2RmZDJhZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM5MzgxN2MnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNhNWIwNzYnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM0NDc1MzAnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmNWYxZTYnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmFydGVyaWFsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmZGZjZjgnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Y4Yzk2Nyd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2U5YmM2Mid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZTk4ZDU4J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZGI4NTU1J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM4MDZiNjMnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0LmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2RmZDJhZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQubGluZScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM4ZjdkNzcnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0LmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNlYmUzY2QnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0LnN0YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2RmZDJhZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2I5ZDNjMid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzkyOTk4ZCd9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgaGlkaW5nOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLmJ1c2luZXNzJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7dmlzaWJpbGl0eTogJ29mZid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMuaWNvbicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe3Zpc2liaWxpdHk6ICdvZmYnfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07Il0sImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
