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

    //popup_radio

    jQuery('.clone').on('click', function(){
        jQuery('.clone').removeClass('active_radio');
        jQuery(this).addClass('active_radio');
    });

    //popup_radio_season

    jQuery('.right .top .top_container .item_cake').on('click', function(){
        jQuery('.right .top .top_container .item_cake').removeClass('active_radio_season');
        jQuery(this).addClass('active_radio_season');
    });

    //popup_radio_hours

    jQuery('.right .bottom .bottom_container .item_cake').on('click', function(){
        jQuery('.right .bottom .bottom_container .item_cake').removeClass('active_radio_hours');
        jQuery(this).addClass('active_radio_hours');
    });


    //language toggle

    jQuery('.lang-item').click(function(){
        jQuery(this).siblings().removeClass('current-lang');
        jQuery(this).addClass('current-lang');
        return false; /*delete on backend!!!*/
    });

    //menu toggle

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

    //popup_cake

    jQuery('.event_for_one_block .one_item').on('click', function() {
        jQuery('.popup_wrapper_cake').fadeIn(400);

        jQuery(document).mouseup(function (e) {
            var popupMenu = jQuery('.popup_cake');
            var popupButton = jQuery('.event_for_one_block .one_item');
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
        jQuery('.popup_wrapper, .popup_wrapper_call, .popup_wrapper_cake').fadeOut(400);
    });

    //menu scroll

    function delayScroll() {
        jQuery('.wrapper').addClass('wrapper_scroll');
    }

    jQuery('aside').hover(function(){
        setTimeout(delayScroll, 500);},
        function(){
            jQuery('.wrapper').removeClass('wrapper_scroll');
        });

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8valF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKTwxMDI0KSB7XHJcbiAgICAvLyAgICAgICAgJCgnYm9keSAqJykudW5iaW5kKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnKTtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZygndW5iaW5kJyk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAkKCdib2R5IConKS5iaW5kKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnKTtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnYmluZCcpO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy99KTtcclxuXHJcbiAgICAvL3BvcHVwX3JhZGlvXHJcblxyXG4gICAgalF1ZXJ5KCcuY2xvbmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmNsb25lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9yYWRpbycpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX3JhZGlvJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3BvcHVwX3JhZGlvX3NlYXNvblxyXG5cclxuICAgIGpRdWVyeSgnLnJpZ2h0IC50b3AgLnRvcF9jb250YWluZXIgLml0ZW1fY2FrZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcucmlnaHQgLnRvcCAudG9wX2NvbnRhaW5lciAuaXRlbV9jYWtlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9yYWRpb19zZWFzb24nKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9yYWRpb19zZWFzb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcG9wdXBfcmFkaW9faG91cnNcclxuXHJcbiAgICBqUXVlcnkoJy5yaWdodCAuYm90dG9tIC5ib3R0b21fY29udGFpbmVyIC5pdGVtX2Nha2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnJpZ2h0IC5ib3R0b20gLmJvdHRvbV9jb250YWluZXIgLml0ZW1fY2FrZScpLnJlbW92ZUNsYXNzKCdhY3RpdmVfcmFkaW9faG91cnMnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9yYWRpb19ob3VycycpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vbGFuZ3VhZ2UgdG9nZ2xlXHJcblxyXG4gICAgalF1ZXJ5KCcubGFuZy1pdGVtJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnY3VycmVudC1sYW5nJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LWxhbmcnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8qZGVsZXRlIG9uIGJhY2tlbmQhISEqL1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnbWVudSA+IGxpOm50aC1jaGlsZCg0KT5hJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCdtZW51ID4gbGk6bnRoLWNoaWxkKDQpPmEnKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc29jaWFsJykudG9nZ2xlQ2xhc3MoJ3NvY2lhbF9ib3R0b20nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvKmRlbGV0ZSBvbiBiYWNrZW5kISEhKi9cclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlmdFxyXG5cclxuICAgIGpRdWVyeSgnI3Njcm9sbHVwJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk+NjAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbHVwX2NvbnRhaW5lcicpLmZhZGVJbig1MDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlT3V0KDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IG1vYmlsZVxyXG5cclxuICAgIGpRdWVyeSgnLm1vYmlsZV9mb290ZXIgPiB1bDpmaXJzdC1jaGlsZCA+IGxpOm50aC1jaGlsZCg0KT5hJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX2Zvb3RlciA+IHVsOmZpcnN0LWNoaWxkID4gbGk6bnRoLWNoaWxkKDQpPmEnKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLypkZWxldGUgb24gYmFja2VuZCEhISovXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21lbnUgb3BlbiAoZGVza3RvcClcclxuXHJcbiAgICBqUXVlcnkoJy5iYXIgPiBpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfZm9vdGVyJykuc2xpZGVUb2dnbGUoJ21vYmlsZV9vcGVuJyk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbW9iaWxlTWVudSA9IGpRdWVyeSgnLm1vYmlsZV9mb290ZXInKTtcclxuICAgICAgICAgICAgdmFyIG1vYmlsZUJ1dHRvbiA9IGpRdWVyeSgnLmJhciA+IGknKTtcclxuICAgICAgICAgICAgaWYgKCFtb2JpbGVCdXR0b24uaXMoZS50YXJnZXQpICYmICFtb2JpbGVNZW51LmlzKGUudGFyZ2V0KSAmJiBtb2JpbGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZU1lbnUucmVtb3ZlQ2xhc3MoJ21vYmlsZV9vcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21lbnUgb3BlbiAobW9iaWxlKVxyXG5cclxuICAgIGpRdWVyeSgnLmJhciA+IGknKS5vbigndGFwJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfZm9vdGVyJykudG9nZ2xlQ2xhc3MoJ21vYmlsZV9vcGVuJyk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oJ3RhcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2JpbGVNZW51ID0galF1ZXJ5KCcubW9iaWxlX2Zvb3RlcicpO1xyXG4gICAgICAgICAgICBpZiAoIW1vYmlsZU1lbnUuaXMoZS50YXJnZXQpICYmIG1vYmlsZU1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlTWVudS5yZW1vdmVDbGFzcygnbW9iaWxlX29wZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wb3B1cFxyXG5cclxuICAgIGpRdWVyeSgnLnN1YnNjcmliZSAuYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcicpLmZhZGVJbig0MDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwTWVudSA9IGpRdWVyeSgnLnBvcHVwJyk7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cEJ1dHRvbiA9IGpRdWVyeSgnLnN1YnNjcmliZSAuYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmICghcG9wdXBCdXR0b24uaXMoZS50YXJnZXQpICYmICFwb3B1cE1lbnUuaXMoZS50YXJnZXQpICYmIHBvcHVwTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3BvcHVwX2Nha2VcclxuXHJcbiAgICBqUXVlcnkoJy5ldmVudF9mb3Jfb25lX2Jsb2NrIC5vbmVfaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfY2FrZScpLmZhZGVJbig0MDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwTWVudSA9IGpRdWVyeSgnLnBvcHVwX2Nha2UnKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwQnV0dG9uID0galF1ZXJ5KCcuZXZlbnRfZm9yX29uZV9ibG9jayAub25lX2l0ZW0nKTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cEJ1dHRvbi5pcyhlLnRhcmdldCkgJiYgIXBvcHVwTWVudS5pcyhlLnRhcmdldCkgJiYgcG9wdXBNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXJfY2FrZScpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wb3B1cF9jYWxsXHJcblxyXG4gICAgalF1ZXJ5KCcucGhvbmVfY29udGFpbmVyIGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3B1cF93cmFwcGVyX2NhbGwnKS5mYWRlSW4oNDAwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cE1lbnUgPSBqUXVlcnkoJy5wb3B1cCcpO1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBCdXR0b24gPSBqUXVlcnkoJy5waG9uZV9jb250YWluZXIgaScpO1xyXG4gICAgICAgICAgICBpZiAoIXBvcHVwQnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAhcG9wdXBNZW51LmlzKGUudGFyZ2V0KSAmJiBwb3B1cE1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucG9wdXBfd3JhcHBlcl9jYWxsJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5jbG9zZV9wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcHVwX3dyYXBwZXIsIC5wb3B1cF93cmFwcGVyX2NhbGwsIC5wb3B1cF93cmFwcGVyX2Nha2UnKS5mYWRlT3V0KDQwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21lbnUgc2Nyb2xsXHJcblxyXG4gICAgZnVuY3Rpb24gZGVsYXlTY3JvbGwoKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyX3Njcm9sbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGpRdWVyeSgnYXNpZGUnKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoZGVsYXlTY3JvbGwsIDUwMCk7fSxcclxuICAgICAgICBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBqUXVlcnkoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXJfc2Nyb2xsJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLy9hcGFydG1lbnQgaG92ZXJcclxuXHJcbiAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKT4xMDI0KSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuYXBhcnRtZW50X2l0ZW0nKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJ3AnKS5mYWRlSW4oMTAwMCk7XHJcbiAgICAgICAgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykuZmluZCgncCcpLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zaG93IG1vcmUgYW5pbWF0aW9uXHJcblxyXG4gICAgaWYgKGpRdWVyeSgnZGl2JykuaXMoJy5uZXdzX2Jsb2NrJykpe1xyXG5cclxuICAgICAgICAvL2lmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgalF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgPiBqUXVlcnkoJy5uZXdzX2Jsb2NrJykub2Zmc2V0KCkudG9wICYmIGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCkgLSBqUXVlcnkoJy5uZXdzX2Jsb2NrJykub2Zmc2V0KCkudG9wIDwgalF1ZXJ5KCcubmV3c19ibG9jaycpLmhlaWdodCgpKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3cyA9IGpRdWVyeSgnLm5ld3NfaXRlbScpO1xyXG4gICAgICAgICAgICB2YXIgbmV3c0xpc3QgPSBuZXdzLmdldCgpO1xyXG4gICAgICAgICAgICB2YXIgbmV3c0xlbmd0aCA9IG5ld3NMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgICAgICB2YXIgayA9IDM7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGk7IGkgPCBrOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShuZXdzTGlzdFtpXSkuYWRkQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZGlzcGxheV9iIHpvb21JbicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoJy5zaG93X21vcmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBrICs9IDM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGk7IGkgPCBrOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkobmV3c0xpc3RbaV0pLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGRpc3BsYXlfYiB6b29tSW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpRdWVyeSgnZGl2JykuaXMoJy5hbGxfbmV3c19ibG9jaycpKXtcclxuXHJcbiAgICAgICAgLy9pZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpID4galF1ZXJ5KCcubmV3c19ibG9jaycpLm9mZnNldCgpLnRvcCAmJiBqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIC0galF1ZXJ5KCcubmV3c19ibG9jaycpLm9mZnNldCgpLnRvcCA8IGpRdWVyeSgnLm5ld3NfYmxvY2snKS5oZWlnaHQoKSkge1xyXG5cclxuICAgICAgICB2YXIgbmV3cyA9IGpRdWVyeSgnLm5ld3NfaXRlbScpO1xyXG4gICAgICAgIHZhciBuZXdzTGlzdCA9IG5ld3MuZ2V0KCk7XHJcbiAgICAgICAgdmFyIG5ld3NMZW5ndGggPSBuZXdzTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBrID0gNjtcclxuXHJcbiAgICAgICAgZm9yIChpOyBpIDwgazsgaSsrKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShuZXdzTGlzdFtpXSkuYWRkQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZGlzcGxheV9iIHpvb21JbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5KCcuc2hvd19tb3JlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBrICs9IDM7XHJcbiAgICAgICAgICAgIGZvciAoaTsgaSA8IGs7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KG5ld3NMaXN0W2ldKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBkaXNwbGF5X2Igem9vbUluJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICAvL2luZGV4IHNsaWRlclxyXG5cclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0J1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IGNhcm91c2VsXHJcblxyXG4gICAgalF1ZXJ5KCcuY2Fyb3VzZWxfem9vbScpLm93bENhcm91c2VsKHtcclxuICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNDAwMCxcclxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgbGF6eUxvYWQ6IHRydWUsXHJcbiAgICAgICAgbWFyZ2luOjAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgIDk2MDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczozXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6M1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA0ODA6e1xyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMDp7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zY3JvbGwgdG9cclxuXHJcbiAgICBqUXVlcnkoJy5zeW1ib2wgYScpLmNsaWNrKCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBzY3JvbGxfZWwgPSBqUXVlcnkodGhpcykuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KHNjcm9sbF9lbCkubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogalF1ZXJ5KHNjcm9sbF9lbCkub2Zmc2V0KCkudG9wIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3RhYnNcclxuXHJcbiAgICBqUXVlcnkoJy50YWJzX2xpc3QgbGknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnRhYnNfbGlzdCBsaScpLnJlbW92ZUNsYXNzKCdjdXJyZW50X3RhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudF90YWInKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vdGFicyBnYWxsZXJ5XHJcblxyXG4gICAgalF1ZXJ5KCcuZmlndXJlX3RhYnMgLnRhYicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmlndXJlX3RhYnMgLnRhYicpLnJlbW92ZUNsYXNzKCdjdXJyZW50X2dhbGxlcnlfdmlldycpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudF9nYWxsZXJ5X3ZpZXcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmZpZ3VyZV90YWJzIC50YWI6bnRoLWNoaWxkKDIpJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5nYWxsZXJ5LWludGVyaW9yX2Jsb2NrJykuYWRkQ2xhc3MoJ2xpc3RfdmlldycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuZmlndXJlX3RhYnMgLnRhYjpmaXJzdC1jaGlsZCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuZ2FsbGVyeS1pbnRlcmlvcl9ibG9jaycpLnJlbW92ZUNsYXNzKCdsaXN0X3ZpZXcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vZ3Vlc3RzX2Nhcm91c2VsXHJcblxyXG4gICAgalF1ZXJ5KCcuZ3Vlc3RzX2Nhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDEwMDAsXHJcbiAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDQwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIGxhenlMb2FkOiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjowLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAgICAgICA5NjA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6e1xyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNDgwOntcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vd2VkZGluZ19nYWxsZXJ5XHJcblxyXG4gICAgalF1ZXJ5KCcuZ3JpZCcpLm1hc29ucnkoe1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxyXG4gICAgICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxyXG4gICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiAgICAvL21hcFxyXG5cclxuICAgIHZhciBtYXA7XHJcbiAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgICAgIHZhciBteUxhdExuZyA9IHtsYXQ6IDUwLjQyNjU2ODc0LCBsbmc6IDMwLjUzODM2MzE2fTtcclxuXHJcbiAgICAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICAgICAgY2VudGVyOiBteUxhdExuZyxcclxuICAgICAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IHN0eWxlc1snZGVmYXVsdCddfSk7XHJcblxyXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuICAgICAgICAgICAgdGl0bGU6ICdSZWdlbnQgSGlsbCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0eWxlcyA9IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHNpbHZlcjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjVmNWY1J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3t2aXNpYmlsaXR5OiAnb2ZmJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzYxNjE2MSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Y1ZjVmNSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2JkYmRiZCd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZWVlZWVlJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzc1NzU3NSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNlNWU1ZTUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM5ZTllOWUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmZmZmZmYnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmFydGVyaWFsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzc1NzU3NSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZGFkYWRhJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzYxNjE2MSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQubG9jYWwnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjOWU5ZTllJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdC5saW5lJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNlNWU1ZTUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0LnN0YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2VlZWVlZSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNjOWM5YzknfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM5ZTllOWUnfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIG5pZ2h0OiBbXHJcbiAgICAgICAgICAgIHtlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3tjb2xvcjogJyMyNDJmM2UnfV19LFxyXG4gICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLCBzdHlsZXJzOiBbe2NvbG9yOiAnIzI0MmYzZSd9XX0sXHJcbiAgICAgICAgICAgIHtlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLCBzdHlsZXJzOiBbe2NvbG9yOiAnIzc0Njg1NSd9XX0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZDU5NTYzJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Q1OTU2Myd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMyNjNjM2YnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM2YjlhNzYnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMzODQxNGUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMjEyYTM3J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM5Y2E1YjMnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzc0Njg1NSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzFmMjgzNSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmM2QxOWMnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMyZjM5NDgnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0LnN0YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZDU5NTYzJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzE3MjYzYyd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzUxNWM2ZCd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuc3Ryb2tlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMTcyNjNjJ31dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICByZXRybzogW1xyXG4gICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7Y29sb3I6ICcjZWJlM2NkJ31dfSxcclxuICAgICAgICAgICAge2VsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsIHN0eWxlcnM6IFt7Y29sb3I6ICcjNTIzNzM1J31dfSxcclxuICAgICAgICAgICAge2VsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuc3Ryb2tlJywgc3R5bGVyczogW3tjb2xvcjogJyNmNWYxZTYnfV19LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjYzliMmE2J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubGFuZF9wYXJjZWwnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkY2QyYmUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNhZTllOTAnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdsYW5kc2NhcGUubmF0dXJhbCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZGZkMmFlJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkZmQyYWUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjOTM4MTdjJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjYTViMDc2J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNDQ3NTMwJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjVmMWU2J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5hcnRlcmlhbCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZmRmY2Y4J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmOGM5NjcnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNlOWJjNjInfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2U5OGQ1OCd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2RiODU1NSd9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQubG9jYWwnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjODA2YjYzJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdC5saW5lJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkZmQyYWUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0LmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjOGY3ZDc3J31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdC5saW5lJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuc3Ryb2tlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZWJlM2NkJ31dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdC5zdGF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkZmQyYWUnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNiOWQzYzInfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM5Mjk5OGQnfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIGhpZGluZzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaS5idXNpbmVzcycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe3Zpc2liaWxpdHk6ICdvZmYnfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3t2aXNpYmlsaXR5OiAnb2ZmJ31dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9OyJdLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
