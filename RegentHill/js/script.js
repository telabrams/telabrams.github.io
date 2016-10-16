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
        jQuery(this).find('p').fadeIn();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vbGFuZ3VhZ2UgdG9nZ2xlXHJcblxyXG4gICAgalF1ZXJ5KCcubGFuZy1pdGVtJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnY3VycmVudC1sYW5nJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LWxhbmcnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8qZGVsZXRlIG9uIGJhY2tlbmQhISEqL1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnbWVudSA+IGxpOm50aC1jaGlsZCg0KScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJ3VsJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICBqUXVlcnkoJ21lbnUgPiBsaTpudGgtY2hpbGQoNCkgYScpLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvKmRlbGV0ZSBvbiBiYWNrZW5kISEhKi9cclxuICAgIH0pO1xyXG5cclxuICAgIC8vYXBhcnRtZW50IGhvdmVyXHJcblxyXG4gICAgalF1ZXJ5KCcuYXBhcnRtZW50X2l0ZW0nKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgncCcpLmZhZGVJbigpO1xyXG4gICAgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCdwJykuZmFkZU91dCgwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2hvdyBtb3JlIGFuaW1hdGlvblxyXG5cclxuICAgIGlmIChqUXVlcnkoJ2RpdicpLmlzKCcubmV3c19ibG9jaycpKXtcclxuXHJcbiAgICAgICAgLy9pZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpID4galF1ZXJ5KCcubmV3c19ibG9jaycpLm9mZnNldCgpLnRvcCAmJiBqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIC0galF1ZXJ5KCcubmV3c19ibG9jaycpLm9mZnNldCgpLnRvcCA8IGpRdWVyeSgnLm5ld3NfYmxvY2snKS5oZWlnaHQoKSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIG5ld3MgPSBqUXVlcnkoJy5uZXdzX2l0ZW0nKTtcclxuICAgICAgICAgICAgdmFyIG5ld3NMaXN0ID0gbmV3cy5nZXQoKTtcclxuICAgICAgICAgICAgdmFyIG5ld3NMZW5ndGggPSBuZXdzTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICAgICAgdmFyIGsgPSAzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpOyBpIDwgazsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkobmV3c0xpc3RbaV0pLmFkZENsYXNzKCdhbmltYXRlZF9mYWRlSW5MZWZ0IGRpc3BsYXlfYiB6b29tSW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2hvd19tb3JlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgayArPSAzO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpOyBpIDwgazsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KG5ld3NMaXN0W2ldKS5hZGRDbGFzcygnYW5pbWF0ZWRfZmFkZUluTGVmdCBkaXNwbGF5X2Igem9vbUluJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG5cclxuICAgICQoJy5zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCdcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2Nyb2xsIHRvXHJcblxyXG4gICAgalF1ZXJ5KCcuc3ltYm9sIGEnKS5jbGljayggZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc2Nyb2xsX2VsID0galF1ZXJ5KHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeShzY3JvbGxfZWwpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGpRdWVyeShzY3JvbGxfZWwpLm9mZnNldCgpLnRvcCB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG59KTsiXSwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
