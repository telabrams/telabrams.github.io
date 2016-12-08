
jQuery(document).ready(function(){

    // languages toggle

    jQuery('.top_header .languages li:first-child').on('click', function(){
        jQuery('.top_header .languages li').toggleClass('open_lang');
        return false;
    });

    // languages toggle

    jQuery('.mobile_menu .languages li:first-child').on('click', function(){
        jQuery('.mobile_menu .languages li').toggleClass('open_lang_mob');
        return false;
    });

    // search toggle

    jQuery('.search i').on('click', function(){
        jQuery(this).prev().fadeToggle(100);
    });

    // carousel

    var carousel = jQuery('.carousel');

    carousel.imagesLoaded(function(){
        carousel.addClass('loaded');
        carousel.owlCarousel({
            loop:true,
            dots:true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            items:1
        });
    });

    // mobile_menu

    jQuery('.hamburger').on('click', function(){
        jQuery('.mobile_menu').toggleClass('menu_right');
    });

    jQuery('.mobile_menu span').on('click', function(){
        jQuery(this).next().slideToggle(150);
        jQuery(this).parent().toggleClass('background');
        jQuery(this).toggleClass('open_menu');

    });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBsYW5ndWFnZXMgdG9nZ2xlXHJcblxyXG4gICAgalF1ZXJ5KCcudG9wX2hlYWRlciAubGFuZ3VhZ2VzIGxpOmZpcnN0LWNoaWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy50b3BfaGVhZGVyIC5sYW5ndWFnZXMgbGknKS50b2dnbGVDbGFzcygnb3Blbl9sYW5nJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VzIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51IC5sYW5ndWFnZXMgbGk6Zmlyc3QtY2hpbGQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51IC5sYW5ndWFnZXMgbGknKS50b2dnbGVDbGFzcygnb3Blbl9sYW5nX21vYicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNlYXJjaCB0b2dnbGVcclxuXHJcbiAgICBqUXVlcnkoJy5zZWFyY2ggaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS5mYWRlVG9nZ2xlKDEwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjYXJvdXNlbFxyXG5cclxuICAgIHZhciBjYXJvdXNlbCA9IGpRdWVyeSgnLmNhcm91c2VsJyk7XHJcblxyXG4gICAgY2Fyb3VzZWwuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2Fyb3VzZWwuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOnRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbW9iaWxlX21lbnVcclxuXHJcbiAgICBqUXVlcnkoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51JykudG9nZ2xlQ2xhc3MoJ21lbnVfcmlnaHQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51IHNwYW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoMTUwKTtcclxuICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2JhY2tncm91bmQnKTtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW5fbWVudScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxufSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
