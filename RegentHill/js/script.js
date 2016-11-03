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

    jQuery('.popup_wrapper_wine .popup_cake .button').on('click', function(){
        jQuery('.popup_wrapper_wine .count_result').toggleClass('display_b');
        jQuery('.popup_wrapper_wine .popup_cake').toggleClass('margin');
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

    jQuery('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8valF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKTwxMDI0KSB7XHJcbiAgICAvLyAgICAgICAgJCgnYm9keSAqJykudW5iaW5kKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnKTtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZygndW5iaW5kJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAkKCdib2R5IConKS5iaW5kKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnKTtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnYmluZCcpO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy99KTtcclxuXHJcbiAgICAvL3BvcHVwX2Nha2VfcmVzdWx0XHJcblxyXG4gICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl9jYWtlIC5wb3B1cF9jYWtlIC5idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3BvcHVwX2Nha2VcclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX2Nha2UgLmxlZnQgbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfY2FrZSAubGVmdCBsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmVfY2FrZScpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2Nha2UnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcG9wdXBfd2luZV9yZXN1bHRcclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX3dpbmUgLnBvcHVwX2Nha2UgLmJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lIC5jb3VudF9yZXN1bHQnKS50b2dnbGVDbGFzcygnZGlzcGxheV9iJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lIC5wb3B1cF9jYWtlJykudG9nZ2xlQ2xhc3MoJ21hcmdpbicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcG9wdXBfcmFkaW9cclxuXHJcbiAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX3dpbmUgLmNsb25lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX3dpbmUgLmNsb25lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9yYWRpbycpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX3JhZGlvJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3BvcHVwX3JhZGlvX3NlYXNvblxyXG5cclxuICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfd2luZSAucmlnaHQgLnRvcCAudG9wX2NvbnRhaW5lciAuaXRlbV9jYWtlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX3dpbmUgLnJpZ2h0IC50b3AgLnRvcF9jb250YWluZXIgLml0ZW1fY2FrZScpLnJlbW92ZUNsYXNzKCdhY3RpdmVfcmFkaW9fc2Vhc29uJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfcmFkaW9fc2Vhc29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3BvcHVwX3JhZGlvX2hvdXJzXHJcblxyXG4gICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lIC5yaWdodCAuYm90dG9tIC5ib3R0b21fY29udGFpbmVyIC5pdGVtX2Nha2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfd2luZSAucmlnaHQgLmJvdHRvbSAuYm90dG9tX2NvbnRhaW5lciAuaXRlbV9jYWtlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9yYWRpb19ob3VycycpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX3JhZGlvX2hvdXJzJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xhbmd1YWdlIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLmxhbmctaXRlbScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtbGFuZycpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1sYW5nJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvKmRlbGV0ZSBvbiBiYWNrZW5kISEhKi9cclxuICAgIH0pO1xyXG5cclxuICAgIC8vbWVudSB0b2dnbGVcclxuXHJcbiAgICBqUXVlcnkoJy5pbm5lcl9wYWdlIGFzaWRlJykubW91c2VsZWF2ZShmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnbWVudSA+IGxpOm50aC1jaGlsZCg0KT5hJykubmV4dCgpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc29jaWFsJykucmVtb3ZlQ2xhc3MoJ3NvY2lhbF9ib3R0b20nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnbWVudSA+IGxpOm50aC1jaGlsZCg0KT5hJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCdtZW51ID4gbGk6bnRoLWNoaWxkKDQpPmEnKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc29jaWFsJykudG9nZ2xlQ2xhc3MoJ3NvY2lhbF9ib3R0b20nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvKmRlbGV0ZSBvbiBiYWNrZW5kISEhKi9cclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlmdFxyXG5cclxuICAgIGpRdWVyeSgnI3Njcm9sbHVwJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk+NjAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbHVwX2NvbnRhaW5lcicpLmZhZGVJbig1MDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlT3V0KDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IG1vYmlsZVxyXG5cclxuICAgIGpRdWVyeSgnLm1vYmlsZV9mb290ZXIgPiB1bDpmaXJzdC1jaGlsZCA+IGxpOm50aC1jaGlsZCg0KT5hJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX2Zvb3RlciA+IHVsOmZpcnN0LWNoaWxkID4gbGk6bnRoLWNoaWxkKDQpPmEnKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLypkZWxldGUgb24gYmFja2VuZCEhISovXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21lbnUgb3BlbiAoZGVza3RvcClcclxuXHJcbiAgICBqUXVlcnkoJy5iYXIgPiBpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfZm9vdGVyJykuc2xpZGVUb2dnbGUoJ21vYmlsZV9vcGVuJyk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbW9iaWxlTWVudSA9IGpRdWVyeSgnLm1vYmlsZV9mb290ZXInKTtcclxuICAgICAgICAgICAgdmFyIG1vYmlsZUJ1dHRvbiA9IGpRdWVyeSgnLmJhciA+IGknKTtcclxuICAgICAgICAgICAgaWYgKCFtb2JpbGVCdXR0b24uaXMoZS50YXJnZXQpICYmICFtb2JpbGVNZW51LmlzKGUudGFyZ2V0KSAmJiBtb2JpbGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZU1lbnUucmVtb3ZlQ2xhc3MoJ21vYmlsZV9vcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21lbnUgb3BlbiAobW9iaWxlKVxyXG5cclxuICAgIGpRdWVyeSgnLmJhciA+IGknKS5vbigndGFwJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfZm9vdGVyJykudG9nZ2xlQ2xhc3MoJ21vYmlsZV9vcGVuJyk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oJ3RhcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2JpbGVNZW51ID0galF1ZXJ5KCcubW9iaWxlX2Zvb3RlcicpO1xyXG4gICAgICAgICAgICBpZiAoIW1vYmlsZU1lbnUuaXMoZS50YXJnZXQpICYmIG1vYmlsZU1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlTWVudS5yZW1vdmVDbGFzcygnbW9iaWxlX29wZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wb3B1cFxyXG5cclxuICAgIGpRdWVyeSgnLnN1YnNjcmliZSAuYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcicpLmZhZGVJbig0MDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwTWVudSA9IGpRdWVyeSgnLnBvcHVwJyk7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cEJ1dHRvbiA9IGpRdWVyeSgnLnN1YnNjcmliZSAuYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmICghcG9wdXBCdXR0b24uaXMoZS50YXJnZXQpICYmICFwb3B1cE1lbnUuaXMoZS50YXJnZXQpICYmIHBvcHVwTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3BvcHVwX3dpbmVcclxuXHJcbiAgICBqUXVlcnkoJy5ldmVudF9mb3Jfb25lX2Jsb2NrIC5vbmVfaXRlbTpudGgtY2hpbGQoMiknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX3dpbmUnKS5mYWRlSW4oNDAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cE1lbnUgPSBqUXVlcnkoJy5wb3B1cF9jYWtlJyk7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cEJ1dHRvbiA9IGpRdWVyeSgnLmV2ZW50X2Zvcl9vbmVfYmxvY2sgLm9uZV9pdGVtOm50aC1jaGlsZCgyKScpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwQnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAhcG9wdXBNZW51LmlzKGUudGFyZ2V0KSAmJiBwb3B1cE1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl93aW5lJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3BvcHVwX2Nha2VcclxuXHJcbiAgICBqUXVlcnkoJy5ldmVudF9mb3Jfb25lX2Jsb2NrIC5vbmVfaXRlbTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfY2FrZScpLmZhZGVJbig0MDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwTWVudSA9IGpRdWVyeSgnLnBvcHVwX2Nha2UnKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwQnV0dG9uID0galF1ZXJ5KCcuZXZlbnRfZm9yX29uZV9ibG9jayAub25lX2l0ZW06Zmlyc3QtY2hpbGQnKTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cEJ1dHRvbi5pcyhlLnRhcmdldCkgJiYgIXBvcHVwTWVudS5pcyhlLnRhcmdldCkgJiYgcG9wdXBNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfY2FrZScpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wb3B1cF9jYWxsXHJcblxyXG4gICAgalF1ZXJ5KCcucGhvbmVfY29udGFpbmVyIGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX2NhbGwnKS5mYWRlSW4oNDAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cE1lbnUgPSBqUXVlcnkoJy5wb3B1cCcpO1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBCdXR0b24gPSBqUXVlcnkoJy5waG9uZV9jb250YWluZXIgaScpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwQnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAhcG9wdXBNZW51LmlzKGUudGFyZ2V0KSAmJiBwb3B1cE1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl9jYWxsJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5jbG9zZV9wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXIsIC5wb3B1cF93cmFwcGVyX2NhbGwsIC5wb3B1cF93cmFwcGVyX2Nha2UsIC5wb3B1cF93cmFwcGVyX3dpbmUnKS5mYWRlT3V0KDQwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21lbnUgc2Nyb2xsXHJcblxyXG4gICAgLy9mdW5jdGlvbiBkZWxheVNjcm9sbCgpIHtcclxuICAgIC8vICAgIGpRdWVyeSgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlcl9zY3JvbGwnKTtcclxuICAgIC8vfVxyXG4gICAgLy9cclxuICAgIC8valF1ZXJ5KCdhc2lkZScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICBzZXRUaW1lb3V0KGRlbGF5U2Nyb2xsLCA1MDApO30sXHJcbiAgICAvLyAgICBmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICAgIGpRdWVyeSgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlcl9zY3JvbGwnKTtcclxuICAgIC8vICAgIH0pO1xyXG5cclxuICAgIC8vYXBhcnRtZW50IGhvdmVyXHJcblxyXG4gICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk+MTAyNCkge1xyXG4gICAgICAgIGpRdWVyeSgnLmFwYXJ0bWVudF9pdGVtJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCdwJykuZmFkZUluKDEwMDApO1xyXG4gICAgICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJ3AnKS5mYWRlT3V0KDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2hvdyBtb3JlIGFuaW1hdGlvblxyXG5cclxuICAgIGlmIChqUXVlcnkoJ2RpdicpLmlzKCcubmV3c19ibG9jaycpKXtcclxuXHJcbiAgICAgICAgLy9pZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpID4galF1ZXJ5KCcubmV3c19ibG9jaycpLm9mZnNldCgpLnRvcCAmJiBqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIC0galF1ZXJ5KCcubmV3c19ibG9jaycpLm9mZnNldCgpLnRvcCA8IGpRdWVyeSgnLm5ld3NfYmxvY2snKS5oZWlnaHQoKSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIG5ld3MgPSBqUXVlcnkoJy5uZXdzX2l0ZW0nKTtcclxuICAgICAgICAgICAgdmFyIG5ld3NMaXN0ID0gbmV3cy5nZXQoKTtcclxuICAgICAgICAgICAgdmFyIG5ld3NMZW5ndGggPSBuZXdzTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICAgICAgdmFyIGsgPSAzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpOyBpIDwgazsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkobmV3c0xpc3RbaV0pLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGRpc3BsYXlfYiB6b29tSW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2hvd19tb3JlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgayArPSAzO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpOyBpIDwgazsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KG5ld3NMaXN0W2ldKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBkaXNwbGF5X2Igem9vbUluJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChqUXVlcnkoJ2RpdicpLmlzKCcuYWxsX25ld3NfYmxvY2snKSl7XHJcblxyXG4gICAgICAgIC8vaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyBqUXVlcnkod2luZG93KS5oZWlnaHQoKSA+IGpRdWVyeSgnLm5ld3NfYmxvY2snKS5vZmZzZXQoKS50b3AgJiYgalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKSAtIGpRdWVyeSgnLm5ld3NfYmxvY2snKS5vZmZzZXQoKS50b3AgPCBqUXVlcnkoJy5uZXdzX2Jsb2NrJykuaGVpZ2h0KCkpIHtcclxuXHJcbiAgICAgICAgdmFyIG5ld3MgPSBqUXVlcnkoJy5uZXdzX2l0ZW0nKTtcclxuICAgICAgICB2YXIgbmV3c0xpc3QgPSBuZXdzLmdldCgpO1xyXG4gICAgICAgIHZhciBuZXdzTGVuZ3RoID0gbmV3c0xpc3QubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB2YXIgayA9IDY7XHJcblxyXG4gICAgICAgIGZvciAoaTsgaSA8IGs7IGkrKykge1xyXG4gICAgICAgICAgICBqUXVlcnkobmV3c0xpc3RbaV0pLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGRpc3BsYXlfYiB6b29tSW4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnNob3dfbW9yZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgayArPSAzO1xyXG4gICAgICAgICAgICBmb3IgKGk7IGkgPCBrOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShuZXdzTGlzdFtpXSkuYWRkQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZGlzcGxheV9iIHpvb21JbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbmRleCBzbGlkZXJcclxuXHJcbiAgICBqUXVlcnkoJy5zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCdcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbWVudSBjYXJvdXNlbFxyXG5cclxuICAgIGpRdWVyeSgnLmNhcm91c2VsX3pvb20nKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOjMsXHJcbiAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDQwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIGxhenlMb2FkOiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjowLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAgICAgICA5NjA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6M1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6e1xyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNDgwOntcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2Nyb2xsIHRvXHJcblxyXG4gICAgalF1ZXJ5KCcuc3ltYm9sIGEnKS5jbGljayggZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc2Nyb2xsX2VsID0galF1ZXJ5KHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeShzY3JvbGxfZWwpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGpRdWVyeShzY3JvbGxfZWwpLm9mZnNldCgpLnRvcCB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy90YWJzXHJcblxyXG4gICAgalF1ZXJ5KCcudGFic19saXN0IGxpJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy50YWJzX2xpc3QgbGknKS5yZW1vdmVDbGFzcygnY3VycmVudF90YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnRfdGFiJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3RhYnMgZ2FsbGVyeVxyXG5cclxuICAgIGpRdWVyeSgnLmZpZ3VyZV90YWJzIC50YWInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmZpZ3VyZV90YWJzIC50YWInKS5yZW1vdmVDbGFzcygnY3VycmVudF9nYWxsZXJ5X3ZpZXcnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnRfZ2FsbGVyeV92aWV3Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5maWd1cmVfdGFicyAudGFiOm50aC1jaGlsZCgyKScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuZ2FsbGVyeS1pbnRlcmlvcl9ibG9jaycpLmFkZENsYXNzKCdsaXN0X3ZpZXcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmZpZ3VyZV90YWJzIC50YWI6Zmlyc3QtY2hpbGQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmdhbGxlcnktaW50ZXJpb3JfYmxvY2snKS5yZW1vdmVDbGFzcygnbGlzdF92aWV3Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2d1ZXN0c19jYXJvdXNlbFxyXG5cclxuICAgIGpRdWVyeSgnLmd1ZXN0c19jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICBzbWFydFNwZWVkOiAxMDAwLFxyXG4gICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA0MDAwLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBsYXp5TG9hZDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46MCxcclxuICAgICAgICByZXNwb25zaXZlOntcclxuICAgICAgICAgICAgOTYwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDQ4MDp7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3dlZGRpbmdfZ2FsbGVyeVxyXG5cclxuICAgIGpRdWVyeSgnLmdyaWQnKS5tYXNvbnJ5KHtcclxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcclxuICAgICAgICBjb2x1bW5XaWR0aDogJy5ncmlkLXNpemVyJyxcclxuICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWVcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4gICAgLy9tYXBcclxuXHJcbiAgICB2YXIgbWFwO1xyXG4gICAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgICAgICB2YXIgbXlMYXRMbmcgPSB7bGF0OiA1MC40MjY1Njg3NCwgbG5nOiAzMC41MzgzNjMxNn07XHJcblxyXG4gICAgICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogbXlMYXRMbmcsXHJcbiAgICAgICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBzdHlsZXNbJ2RlZmF1bHQnXX0pO1xyXG5cclxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogbXlMYXRMbmcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUmVnZW50IEhpbGwnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdHlsZXMgPSB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICBzaWx2ZXI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Y1ZjVmNSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy5pY29uJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7dmlzaWJpbGl0eTogJ29mZid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM2MTYxNjEnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmNWY1ZjUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNiZGJkYmQnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2VlZWVlZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM3NTc1NzUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZTVlNWU1J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjOWU5ZTllJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZmZmZmZmJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5hcnRlcmlhbCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM3NTc1NzUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2RhZGFkYSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM2MTYxNjEnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzllOWU5ZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQubGluZScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZTVlNWU1J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdC5zdGF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNlZWVlZWUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjYzljOWM5J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjOWU5ZTllJ31dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBuaWdodDogW1xyXG4gICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7Y29sb3I6ICcjMjQyZjNlJ31dfSxcclxuICAgICAgICAgICAge2VsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuc3Ryb2tlJywgc3R5bGVyczogW3tjb2xvcjogJyMyNDJmM2UnfV19LFxyXG4gICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJywgc3R5bGVyczogW3tjb2xvcjogJyM3NDY4NTUnfV19LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlLmxvY2FsaXR5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Q1OTU2Myd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkNTk1NjMnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMjYzYzNmJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNmI5YTc2J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMzg0MTRlJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzIxMmEzNyd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjOWNhNWIzJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM3NDY4NTUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMxZjI4MzUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjNkMTljJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMmYzOTQ4J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdC5zdGF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Q1OTU2Myd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMxNzI2M2MnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM1MTVjNmQnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzE3MjYzYyd9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgcmV0cm86IFtcclxuICAgICAgICAgICAge2VsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbe2NvbG9yOiAnI2ViZTNjZCd9XX0sXHJcbiAgICAgICAgICAgIHtlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLCBzdHlsZXJzOiBbe2NvbG9yOiAnIzUyMzczNSd9XX0sXHJcbiAgICAgICAgICAgIHtlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjVmMWU2J31dfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2M5YjJhNid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZGNkMmJlJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubGFuZF9wYXJjZWwnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjYWU5ZTkwJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnbGFuZHNjYXBlLm5hdHVyYWwnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2RmZDJhZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZGZkMmFlJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzkzODE3Yyd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2E1YjA3Nid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzQ0NzUzMCd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Y1ZjFlNid9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuYXJ0ZXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2ZkZmNmOCd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjhjOTY3J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZTliYzYyJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNlOThkNTgnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkYjg1NTUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzgwNmI2Myd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQubGluZScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZGZkMmFlJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdC5saW5lJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzhmN2Q3Nyd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQubGluZScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2ViZTNjZCd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQuc3RhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZGZkMmFlJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjYjlkM2MyJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjOTI5OThkJ31dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBoaWRpbmc6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kuYnVzaW5lc3MnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3t2aXNpYmlsaXR5OiAnb2ZmJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy5pY29uJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7dmlzaWJpbGl0eTogJ29mZid9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTsiXSwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
