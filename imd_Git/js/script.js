
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
        
        jQuery(document).mousedown(function(e){
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

        jQuery(document).mousedown(function(e){
            var popup = jQuery('.event_popup');

            if(!popup.is(e.target) && popup.has(e.target).length == 0){
                popup_wrapper.fadeOut(200);

            }
        });
    });

    // equipment_popup

    jQuery('.equipment_item .button_main').on('click', function(){
        var popup_wrapper = jQuery('.popup_wrapper');
        popup_wrapper.fadeIn(300);
        // popup_wrapper.addClass('flex');
        var button = jQuery('.equipment_popup .close i');

        button.on('click', function(){
            popup_wrapper.fadeOut(200);

        });

        jQuery(document).mousedown(function(e){
            var popup = jQuery('.equipment_popup');

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

    // tab equipment

    var equipment = jQuery('.equipment_row');
    var equipmentList =  jQuery('.equipment_tab');
    jQuery(equipment[0]).fadeIn(300);
    console.log(jQuery(equipment[0]));
    console.log(equipmentList);

    equipmentList.on('click', function(){
        jQuery(equipmentList).removeClass('current-tab');
        jQuery(this).addClass('current-tab');
        var numberOfEquipmentList = jQuery(this).index('.equipment_tab');

        equipment.each(function(){
            var numberOfEquipment = jQuery(this).index('.equipment_row');
            if(numberOfEquipment == numberOfEquipmentList) {
                jQuery(equipment).fadeOut(0);
                jQuery(equipment[numberOfEquipment]).fadeIn(300);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBwYWdlIGxvYWRlciB3aXRoIGZhZGVcclxuXHJcbiAgICB2YXIgcGFnZUNvbnRlbnQgPSBqUXVlcnkoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgcGFnZUNvbnRlbnQuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VzIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLnRvcF9oZWFkZXIgLmxhbmd1YWdlcyBsaTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcudG9wX2hlYWRlciAubGFuZ3VhZ2VzIGxpJykudG9nZ2xlQ2xhc3MoJ29wZW5fbGFuZycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGxhbmd1YWdlcyB0b2dnbGVcclxuXHJcbiAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSAubGFuZ3VhZ2VzIGxpOmZpcnN0LWNoaWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSAubGFuZ3VhZ2VzIGxpJykudG9nZ2xlQ2xhc3MoJ29wZW5fbGFuZ19tb2InKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZWFyY2ggdG9nZ2xlXHJcblxyXG4gICAgalF1ZXJ5KCcuc2VhcmNoIGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuZmFkZVRvZ2dsZSgxMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2Fyb3VzZWxcclxuXHJcbiAgICB2YXIgY2Fyb3VzZWwgPSBqUXVlcnkoJy5jYXJvdXNlbCcpO1xyXG5cclxuICAgIGNhcm91c2VsLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIGNhcm91c2VsLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBjYXJvdXNlbC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgZG90czp0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA0MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1vYmlsZV9tZW51XHJcblxyXG4gICAgalF1ZXJ5KCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnRvZ2dsZUNsYXNzKCdtZW51X3JpZ2h0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHZhciBtb2JpbGVNZW51ID0galF1ZXJ5KCcubW9iaWxlX21lbnUnKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGpRdWVyeSgnLmhhbWJ1cmdlciBpJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1vYmlsZU1lbnUuaXMoZS50YXJnZXQpICYmICFidXR0b24uaXMoZS50YXJnZXQpICYmICBtb2JpbGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51JykucmVtb3ZlQ2xhc3MoJ21lbnVfcmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSBzcGFuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKDE1MCk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdiYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuX21lbnUnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBldmVudF9wb3B1cFxyXG5cclxuICAgIGpRdWVyeSgnLmNhbGVuZGFyX25ld3MgLmNvbC1tZC00IC50b3AgLmltZ19jb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwb3B1cF93cmFwcGVyID0galF1ZXJ5KCcucG9wdXBfd3JhcHBlcicpO1xyXG4gICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgLy8gcG9wdXBfd3JhcHBlci5hZGRDbGFzcygnZmxleCcpO1xyXG4gICAgICAgIHZhciBidXR0b24gPSBqUXVlcnkoJy5ldmVudF9wb3B1cCAuY2xvc2UgaScpO1xyXG5cclxuICAgICAgICBidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIHBvcHVwID0galF1ZXJ5KCcuZXZlbnRfcG9wdXAnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFwb3B1cC5pcyhlLnRhcmdldCkgJiYgcG9wdXAuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBwb3B1cF93cmFwcGVyLmZhZGVPdXQoMjAwKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGVxdWlwbWVudF9wb3B1cFxyXG5cclxuICAgIGpRdWVyeSgnLmVxdWlwbWVudF9pdGVtIC5idXR0b25fbWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHBvcHVwX3dyYXBwZXIgPSBqUXVlcnkoJy5wb3B1cF93cmFwcGVyJyk7XHJcbiAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlSW4oMzAwKTtcclxuICAgICAgICAvLyBwb3B1cF93cmFwcGVyLmFkZENsYXNzKCdmbGV4Jyk7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGpRdWVyeSgnLmVxdWlwbWVudF9wb3B1cCAuY2xvc2UgaScpO1xyXG5cclxuICAgICAgICBidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIHBvcHVwID0galF1ZXJ5KCcuZXF1aXBtZW50X3BvcHVwJyk7XHJcblxyXG4gICAgICAgICAgICBpZighcG9wdXAuaXMoZS50YXJnZXQpICYmIHBvcHVwLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRhYnMgYXdhcmRzXHJcblxyXG4gICAgdmFyIGF3YXJkcyA9IGpRdWVyeSgnLnBlcnNvbnNfYXdhcmRzIC5ib3R0b20nKTtcclxuICAgIHZhciBhd2FyZExpc3QgPSAgalF1ZXJ5KCcucGVyc29uc19hd2FyZHMgdWwgbGknKTtcclxuICAgIGpRdWVyeShhd2FyZHNbMF0pLmZhZGVJbigzMDApO1xyXG5cclxuICAgIGF3YXJkTGlzdC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeShhd2FyZExpc3QpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZBd2FyZExpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5wZXJzb25zX2F3YXJkcyB1bCBsaScpO1xyXG5cclxuICAgICAgICBhd2FyZHMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZBd2FyZHMgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5wZXJzb25zX2F3YXJkcyAuYm90dG9tJyk7XHJcbiAgICAgICAgICAgIGlmKG51bWJlck9mQXdhcmRzID09IG51bWJlck9mQXdhcmRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoYXdhcmRzKS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGF3YXJkc1tudW1iZXJPZkF3YXJkc10pLmZhZGVJbigzMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFicyBjb250YWN0c1xyXG5cclxuICAgIHZhciBjb250YWN0cyA9IGpRdWVyeSgnLnRhYl9jb250YWN0cycpO1xyXG4gICAgdmFyIGNvbnRhY3RzTGlzdCA9ICBqUXVlcnkoJy5jb250YWN0cyB1bCBsaScpO1xyXG4gICAgalF1ZXJ5KGNvbnRhY3RzWzBdKS5mYWRlSW4oMzAwKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRhY3RzKTtcclxuXHJcbiAgICBjb250YWN0c0xpc3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoY29udGFjdHNMaXN0KS5yZW1vdmVDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgdmFyIG51bWJlck9mQXdhcmRMaXN0ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuY29udGFjdHMgdWwgbGknKTtcclxuXHJcbiAgICAgICAgY29udGFjdHMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZBd2FyZHMgPSBqUXVlcnkodGhpcykuaW5kZXgoJy50YWJfY29udGFjdHMnKTtcclxuICAgICAgICAgICAgaWYobnVtYmVyT2ZBd2FyZHMgPT0gbnVtYmVyT2ZBd2FyZExpc3QpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShjb250YWN0cykuZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShjb250YWN0c1tudW1iZXJPZkF3YXJkc10pLmZhZGVJbigzMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFiIGVxdWlwbWVudFxyXG5cclxuICAgIHZhciBlcXVpcG1lbnQgPSBqUXVlcnkoJy5lcXVpcG1lbnRfcm93Jyk7XHJcbiAgICB2YXIgZXF1aXBtZW50TGlzdCA9ICBqUXVlcnkoJy5lcXVpcG1lbnRfdGFiJyk7XHJcbiAgICBqUXVlcnkoZXF1aXBtZW50WzBdKS5mYWRlSW4oMzAwKTtcclxuICAgIGNvbnNvbGUubG9nKGpRdWVyeShlcXVpcG1lbnRbMF0pKTtcclxuICAgIGNvbnNvbGUubG9nKGVxdWlwbWVudExpc3QpO1xyXG5cclxuICAgIGVxdWlwbWVudExpc3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoZXF1aXBtZW50TGlzdCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIHZhciBudW1iZXJPZkVxdWlwbWVudExpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5lcXVpcG1lbnRfdGFiJyk7XHJcblxyXG4gICAgICAgIGVxdWlwbWVudC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVxdWlwbWVudCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmVxdWlwbWVudF9yb3cnKTtcclxuICAgICAgICAgICAgaWYobnVtYmVyT2ZFcXVpcG1lbnQgPT0gbnVtYmVyT2ZFcXVpcG1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoZXF1aXBtZW50KS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGVxdWlwbWVudFtudW1iZXJPZkVxdWlwbWVudF0pLmZhZGVJbigzMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vIGxpZ2h0Ym94XHJcblxyXG5saWdodGJveC5vcHRpb24oe1xyXG4gICAgbWF4V2lkdGg6IDEwMDAsXHJcbiAgICAncmVzaXplRHVyYXRpb24nOiAyMDAsXHJcbiAgICAnd3JhcEFyb3VuZCc6IHRydWUsXHJcbiAgICBmYWRlRHVyYXRpb246IDIwMCxcclxuICAgIGltYWdlRmFkZUR1cmF0aW9uOiA0MDAsXHJcbiAgICBwb3NpdGlvbkZyb21Ub3A6IDIwMFxyXG59KTsiXSwiZmlsZSI6InNjcmlwdC5qcyJ9
