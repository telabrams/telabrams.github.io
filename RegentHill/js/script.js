jQuery(document).ready(function(){

    //language toggle

    jQuery('.lang-item').click(function(){
        jQuery(this).siblings().removeClass('current-lang');
        jQuery(this).addClass('current-lang');
        return false; /*delete on backend!!!*/
    });

    //menu toggle

    jQuery('menu > li:nth-child(4)').click(function(){
        jQuery(this).find('ul').slideToggle();
        jQuery('menu > li:nth-child(4) a').toggleClass('rotate');

        return false; /*delete on backend!!!*/
    });

    //apartment hover

    jQuery('.apartment_item').hover(function() {
        jQuery(this).find('p').fadeIn(1000);
    },function(){
        jQuery(this).find('p').fadeOut(0);
    });

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

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'ease-out'
    });

    //scroll to

    jQuery('.symbol a').click( function(){
        var scroll_el = jQuery(this).attr('href');

        if (jQuery(scroll_el).length != 0) {
            jQuery('html, body').animate({ scrollTop: jQuery(scroll_el).offset().top }, 500);
        }

        return false;
    });

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vbGFuZ3VhZ2UgdG9nZ2xlXHJcblxyXG4gICAgalF1ZXJ5KCcubGFuZy1pdGVtJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnY3VycmVudC1sYW5nJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LWxhbmcnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8qZGVsZXRlIG9uIGJhY2tlbmQhISEqL1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnbWVudSA+IGxpOm50aC1jaGlsZCg0KScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJ3VsJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICBqUXVlcnkoJ21lbnUgPiBsaTpudGgtY2hpbGQoNCkgYScpLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvKmRlbGV0ZSBvbiBiYWNrZW5kISEhKi9cclxuICAgIH0pO1xyXG5cclxuICAgIC8vYXBhcnRtZW50IGhvdmVyXHJcblxyXG4gICAgalF1ZXJ5KCcuYXBhcnRtZW50X2l0ZW0nKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgncCcpLmZhZGVJbigxMDAwKTtcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgncCcpLmZhZGVPdXQoMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3Nob3cgbW9yZSBhbmltYXRpb25cclxuXHJcbiAgICBpZiAoalF1ZXJ5KCdkaXYnKS5pcygnLm5ld3NfYmxvY2snKSl7XHJcblxyXG4gICAgICAgIC8vaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyBqUXVlcnkod2luZG93KS5oZWlnaHQoKSA+IGpRdWVyeSgnLm5ld3NfYmxvY2snKS5vZmZzZXQoKS50b3AgJiYgalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKSAtIGpRdWVyeSgnLm5ld3NfYmxvY2snKS5vZmZzZXQoKS50b3AgPCBqUXVlcnkoJy5uZXdzX2Jsb2NrJykuaGVpZ2h0KCkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdzID0galF1ZXJ5KCcubmV3c19pdGVtJyk7XHJcbiAgICAgICAgICAgIHZhciBuZXdzTGlzdCA9IG5ld3MuZ2V0KCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdzTGVuZ3RoID0gbmV3c0xpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBrID0gMztcclxuXHJcbiAgICAgICAgICAgIGZvciAoaTsgaSA8IGs7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KG5ld3NMaXN0W2ldKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBkaXNwbGF5X2Igem9vbUluJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNob3dfbW9yZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGsgKz0gMztcclxuICAgICAgICAgICAgICAgIGZvciAoaTsgaSA8IGs7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShuZXdzTGlzdFtpXSkuYWRkQ2xhc3MoJ2FuaW1hdGVkX2ZhZGVJbkxlZnQgZGlzcGxheV9iIHpvb21JbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICAkKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3Njcm9sbCB0b1xyXG5cclxuICAgIGpRdWVyeSgnLnN5bWJvbCBhJykuY2xpY2soIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNjcm9sbF9lbCA9IGpRdWVyeSh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkoc2Nyb2xsX2VsKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBqUXVlcnkoc2Nyb2xsX2VsKS5vZmZzZXQoKS50b3AgfSwgNTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxufSk7Il0sImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==