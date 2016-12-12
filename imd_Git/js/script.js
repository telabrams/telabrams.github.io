
jQuery(document).ready(function(){

    // page loader with fade

    var pageContent = jQuery('.content');

    pageContent.imagesLoaded(function(){
        pageContent.addClass('loaded');
    });

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
        
        jQuery(document).mouseup(function(e){
            var mobileMenu = jQuery('.mobile_menu');
            var button = jQuery('.hamburger i');
            
            if (!mobileMenu.is(e.target) && !button.is(e.target) &&  mobileMenu.has(e.target).length == 0) {
                jQuery('.mobile_menu').removeClass('menu_right');
            }
        })
    });

    jQuery('.mobile_menu span').on('click', function(){
        jQuery(this).next().slideToggle(150);
        jQuery(this).parent().toggleClass('background');
        jQuery(this).toggleClass('open_menu');

    });

    // event_popup

    jQuery('.calendar_news .col-md-4 .top .img_container').on('click', function(){
        var popup_wrapper = jQuery('.popup_wrapper');
        popup_wrapper.fadeIn(300);
        // popup_wrapper.addClass('flex');
        var button = jQuery('.event_popup .close i');

        button.on('click', function(){
            popup_wrapper.fadeOut(200);

        });

        jQuery(document).mouseup(function(e){
            var popup = jQuery('.event_popup');

            if(!popup.is(e.target) && popup.has(e.target).length == 0){
                popup_wrapper.fadeOut(200);

            }
        });
    });

    // tabs awards

    var awards = jQuery('.persons_awards .bottom');
    var awardList =  jQuery('.persons_awards ul li');
    jQuery(awards[0]).fadeIn(300);

    awardList.on('click', function(){
        jQuery(awardList).removeClass('current-tab');
        jQuery(this).addClass('current-tab');
        var numberOfAwardList = jQuery(this).index('.persons_awards ul li');

        awards.each(function(){
            var numberOfAwards = jQuery(this).index('.persons_awards .bottom');
            if(numberOfAwards == numberOfAwardList) {
                jQuery(awards).fadeOut(0);
                jQuery(awards[numberOfAwards]).fadeIn(300);
            }

        });
    });

    // tabs contacts

    var contacts = jQuery('.tab_contacts');
    var contactsList =  jQuery('.contacts ul li');
    jQuery(contacts[0]).fadeIn(300);
    console.log(contacts);

    contactsList.on('click', function(){
        jQuery(contactsList).removeClass('current-tab');
        jQuery(this).addClass('current-tab');
        var numberOfAwardList = jQuery(this).index('.contacts ul li');

        contacts.each(function(){
            var numberOfAwards = jQuery(this).index('.tab_contacts');
            if(numberOfAwards == numberOfAwardList) {
                jQuery(contacts).fadeOut(0);
                jQuery(contacts[numberOfAwards]).fadeIn(300);
            }

        });
    });

});

// lightbox

lightbox.option({
    maxWidth: 1000,
    'resizeDuration': 200,
    'wrapAround': true,
    fadeDuration: 200,
    imageFadeDuration: 400,
    positionFromTop: 200
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBwYWdlIGxvYWRlciB3aXRoIGZhZGVcclxuXHJcbiAgICB2YXIgcGFnZUNvbnRlbnQgPSBqUXVlcnkoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgcGFnZUNvbnRlbnQuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VzIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLnRvcF9oZWFkZXIgLmxhbmd1YWdlcyBsaTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcudG9wX2hlYWRlciAubGFuZ3VhZ2VzIGxpJykudG9nZ2xlQ2xhc3MoJ29wZW5fbGFuZycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGxhbmd1YWdlcyB0b2dnbGVcclxuXHJcbiAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSAubGFuZ3VhZ2VzIGxpOmZpcnN0LWNoaWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSAubGFuZ3VhZ2VzIGxpJykudG9nZ2xlQ2xhc3MoJ29wZW5fbGFuZ19tb2InKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZWFyY2ggdG9nZ2xlXHJcblxyXG4gICAgalF1ZXJ5KCcuc2VhcmNoIGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuZmFkZVRvZ2dsZSgxMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2Fyb3VzZWxcclxuXHJcbiAgICB2YXIgY2Fyb3VzZWwgPSBqUXVlcnkoJy5jYXJvdXNlbCcpO1xyXG5cclxuICAgIGNhcm91c2VsLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIGNhcm91c2VsLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBjYXJvdXNlbC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgZG90czp0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA0MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1vYmlsZV9tZW51XHJcblxyXG4gICAgalF1ZXJ5KCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnRvZ2dsZUNsYXNzKCdtZW51X3JpZ2h0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICB2YXIgbW9iaWxlTWVudSA9IGpRdWVyeSgnLm1vYmlsZV9tZW51Jyk7XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBqUXVlcnkoJy5oYW1idXJnZXIgaScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFtb2JpbGVNZW51LmlzKGUudGFyZ2V0KSAmJiAhYnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAgbW9iaWxlTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnJlbW92ZUNsYXNzKCdtZW51X3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgc3BhbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgxNTApO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnb3Blbl9tZW51Jyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZXZlbnRfcG9wdXBcclxuXHJcbiAgICBqUXVlcnkoJy5jYWxlbmRhcl9uZXdzIC5jb2wtbWQtNCAudG9wIC5pbWdfY29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcG9wdXBfd3JhcHBlciA9IGpRdWVyeSgnLnBvcHVwX3dyYXBwZXInKTtcclxuICAgICAgICBwb3B1cF93cmFwcGVyLmZhZGVJbigzMDApO1xyXG4gICAgICAgIC8vIHBvcHVwX3dyYXBwZXIuYWRkQ2xhc3MoJ2ZsZXgnKTtcclxuICAgICAgICB2YXIgYnV0dG9uID0galF1ZXJ5KCcuZXZlbnRfcG9wdXAgLmNsb3NlIGknKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZU91dCgyMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICB2YXIgcG9wdXAgPSBqUXVlcnkoJy5ldmVudF9wb3B1cCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXBvcHVwLmlzKGUudGFyZ2V0KSAmJiBwb3B1cC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZU91dCgyMDApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFicyBhd2FyZHNcclxuXHJcbiAgICB2YXIgYXdhcmRzID0galF1ZXJ5KCcucGVyc29uc19hd2FyZHMgLmJvdHRvbScpO1xyXG4gICAgdmFyIGF3YXJkTGlzdCA9ICBqUXVlcnkoJy5wZXJzb25zX2F3YXJkcyB1bCBsaScpO1xyXG4gICAgalF1ZXJ5KGF3YXJkc1swXSkuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgYXdhcmRMaXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KGF3YXJkTGlzdCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIHZhciBudW1iZXJPZkF3YXJkTGlzdCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnBlcnNvbnNfYXdhcmRzIHVsIGxpJyk7XHJcblxyXG4gICAgICAgIGF3YXJkcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkF3YXJkcyA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnBlcnNvbnNfYXdhcmRzIC5ib3R0b20nKTtcclxuICAgICAgICAgICAgaWYobnVtYmVyT2ZBd2FyZHMgPT0gbnVtYmVyT2ZBd2FyZExpc3QpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShhd2FyZHMpLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoYXdhcmRzW251bWJlck9mQXdhcmRzXSkuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0YWJzIGNvbnRhY3RzXHJcblxyXG4gICAgdmFyIGNvbnRhY3RzID0galF1ZXJ5KCcudGFiX2NvbnRhY3RzJyk7XHJcbiAgICB2YXIgY29udGFjdHNMaXN0ID0gIGpRdWVyeSgnLmNvbnRhY3RzIHVsIGxpJyk7XHJcbiAgICBqUXVlcnkoY29udGFjdHNbMF0pLmZhZGVJbigzMDApO1xyXG4gICAgY29uc29sZS5sb2coY29udGFjdHMpO1xyXG5cclxuICAgIGNvbnRhY3RzTGlzdC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeShjb250YWN0c0xpc3QpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZBd2FyZExpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5jb250YWN0cyB1bCBsaScpO1xyXG5cclxuICAgICAgICBjb250YWN0cy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkF3YXJkcyA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnRhYl9jb250YWN0cycpO1xyXG4gICAgICAgICAgICBpZihudW1iZXJPZkF3YXJkcyA9PSBudW1iZXJPZkF3YXJkTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGNvbnRhY3RzKS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGNvbnRhY3RzW251bWJlck9mQXdhcmRzXSkuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8gbGlnaHRib3hcclxuXHJcbmxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICBtYXhXaWR0aDogMTAwMCxcclxuICAgICdyZXNpemVEdXJhdGlvbic6IDIwMCxcclxuICAgICd3cmFwQXJvdW5kJzogdHJ1ZSxcclxuICAgIGZhZGVEdXJhdGlvbjogMjAwLFxyXG4gICAgaW1hZ2VGYWRlRHVyYXRpb246IDQwMCxcclxuICAgIHBvc2l0aW9uRnJvbVRvcDogMjAwXHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
