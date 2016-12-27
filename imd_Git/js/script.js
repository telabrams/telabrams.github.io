
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
    var contactsP = jQuery('.tab_p');
    var contactsList =  jQuery('.contacts ul li');
    jQuery(contacts[0]).fadeIn(300);
    jQuery(contactsP[0]).fadeIn(300);

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

        contactsP.each(function(){
            var numberOfP = jQuery(this).index('.tab_p');
            if(numberOfP == numberOfAwardList) {
                jQuery(contactsP).fadeOut(0);
                jQuery(contactsP[numberOfP]).fadeIn(300);
            }
        });
    });

    // tab equipment

    // var equipment = jQuery('.equipment_row');
    // var equipmentList =  jQuery('.equipment_tab');
    // jQuery(equipment[0]).fadeIn(300);
    // console.log(jQuery(equipment[0]));
    // console.log(equipmentList);
    //
    // equipmentList.on('click', function(){
    //     jQuery(equipmentList).removeClass('current-tab');
    //     jQuery(this).addClass('current-tab');
    //     var numberOfEquipmentList = jQuery(this).index('.equipment_tab');
    //
    //     equipment.each(function(){
    //         var numberOfEquipment = jQuery(this).index('.equipment_row');
    //         if(numberOfEquipment == numberOfEquipmentList) {
    //             jQuery(equipment).fadeOut(0);
    //             jQuery(equipment[numberOfEquipment]).fadeIn(300);
    //         }
    //
    //     });
    // });

    // tab publication

    var publication = jQuery('.publication_item');
    var publicationList =  jQuery('.publication_tab');
    jQuery(publication[0]).fadeIn(300);
    console.log(jQuery(publication[0]));
    console.log(publicationList);

    publicationList.on('click', function(){
        jQuery(publicationList).removeClass('current-tab');
        jQuery(this).addClass('current-tab');
        var numberOfPublicationList = jQuery(this).index('.publication_tab');

        publication.each(function(){
            var numberOfPublication = jQuery(this).index('.publication_item');
            if(numberOfPublication == numberOfPublicationList) {
                jQuery(publication).fadeOut(0);
                jQuery(publication[numberOfPublicationList]).fadeIn(300);
            }

        });
    });

    //lift

    jQuery('.scrollup_container').click(function(){
        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);
    });

    jQuery(window).scroll(function(){
        if (jQuery(document).scrollTop()>600) {
            jQuery('.scrollup_container').fadeIn(400);
        }else{
            jQuery('.scrollup_container').fadeOut(400);
        }
    });

    // banner_carousel

   var bannerCarousel = jQuery('.banner_carousel');

    bannerCarousel.owlCarousel({
        animateOut: 'fadeOutUp',
        animateIn: 'slideInUp',
        loop:true,
        dots:true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items:1
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBwYWdlIGxvYWRlciB3aXRoIGZhZGVcclxuXHJcbiAgICB2YXIgcGFnZUNvbnRlbnQgPSBqUXVlcnkoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgcGFnZUNvbnRlbnQuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VzIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLnRvcF9oZWFkZXIgLmxhbmd1YWdlcyBsaTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcudG9wX2hlYWRlciAubGFuZ3VhZ2VzIGxpJykudG9nZ2xlQ2xhc3MoJ29wZW5fbGFuZycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGxhbmd1YWdlcyB0b2dnbGVcclxuXHJcbiAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSAubGFuZ3VhZ2VzIGxpOmZpcnN0LWNoaWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSAubGFuZ3VhZ2VzIGxpJykudG9nZ2xlQ2xhc3MoJ29wZW5fbGFuZ19tb2InKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZWFyY2ggdG9nZ2xlXHJcblxyXG4gICAgalF1ZXJ5KCcuc2VhcmNoIGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuZmFkZVRvZ2dsZSgxMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2Fyb3VzZWxcclxuXHJcbiAgICB2YXIgY2Fyb3VzZWwgPSBqUXVlcnkoJy5jYXJvdXNlbCcpO1xyXG5cclxuICAgIGNhcm91c2VsLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIGNhcm91c2VsLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBjYXJvdXNlbC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgZG90czp0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA0MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOjFcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1vYmlsZV9tZW51XHJcblxyXG4gICAgalF1ZXJ5KCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnRvZ2dsZUNsYXNzKCdtZW51X3JpZ2h0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHZhciBtb2JpbGVNZW51ID0galF1ZXJ5KCcubW9iaWxlX21lbnUnKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGpRdWVyeSgnLmhhbWJ1cmdlciBpJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1vYmlsZU1lbnUuaXMoZS50YXJnZXQpICYmICFidXR0b24uaXMoZS50YXJnZXQpICYmICBtb2JpbGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51JykucmVtb3ZlQ2xhc3MoJ21lbnVfcmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSBzcGFuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKDE1MCk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdiYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuX21lbnUnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBldmVudF9wb3B1cFxyXG5cclxuICAgIGpRdWVyeSgnLmNhbGVuZGFyX25ld3MgLmNvbC1tZC00IC50b3AgLmltZ19jb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwb3B1cF93cmFwcGVyID0galF1ZXJ5KCcucG9wdXBfd3JhcHBlcicpO1xyXG4gICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgLy8gcG9wdXBfd3JhcHBlci5hZGRDbGFzcygnZmxleCcpO1xyXG4gICAgICAgIHZhciBidXR0b24gPSBqUXVlcnkoJy5ldmVudF9wb3B1cCAuY2xvc2UgaScpO1xyXG5cclxuICAgICAgICBidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIHBvcHVwID0galF1ZXJ5KCcuZXZlbnRfcG9wdXAnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFwb3B1cC5pcyhlLnRhcmdldCkgJiYgcG9wdXAuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBwb3B1cF93cmFwcGVyLmZhZGVPdXQoMjAwKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGVxdWlwbWVudF9wb3B1cFxyXG5cclxuICAgIGpRdWVyeSgnLmVxdWlwbWVudF9pdGVtIC5idXR0b25fbWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHBvcHVwX3dyYXBwZXIgPSBqUXVlcnkoJy5wb3B1cF93cmFwcGVyJyk7XHJcbiAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlSW4oMzAwKTtcclxuICAgICAgICAvLyBwb3B1cF93cmFwcGVyLmFkZENsYXNzKCdmbGV4Jyk7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGpRdWVyeSgnLmVxdWlwbWVudF9wb3B1cCAuY2xvc2UgaScpO1xyXG5cclxuICAgICAgICBidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIHBvcHVwID0galF1ZXJ5KCcuZXF1aXBtZW50X3BvcHVwJyk7XHJcblxyXG4gICAgICAgICAgICBpZighcG9wdXAuaXMoZS50YXJnZXQpICYmIHBvcHVwLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRhYnMgYXdhcmRzXHJcblxyXG4gICAgdmFyIGF3YXJkcyA9IGpRdWVyeSgnLnBlcnNvbnNfYXdhcmRzIC5ib3R0b20nKTtcclxuICAgIHZhciBhd2FyZExpc3QgPSAgalF1ZXJ5KCcucGVyc29uc19hd2FyZHMgdWwgbGknKTtcclxuICAgIGpRdWVyeShhd2FyZHNbMF0pLmZhZGVJbigzMDApO1xyXG5cclxuICAgIGF3YXJkTGlzdC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeShhd2FyZExpc3QpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZBd2FyZExpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5wZXJzb25zX2F3YXJkcyB1bCBsaScpO1xyXG5cclxuICAgICAgICBhd2FyZHMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZBd2FyZHMgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5wZXJzb25zX2F3YXJkcyAuYm90dG9tJyk7XHJcbiAgICAgICAgICAgIGlmKG51bWJlck9mQXdhcmRzID09IG51bWJlck9mQXdhcmRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoYXdhcmRzKS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGF3YXJkc1tudW1iZXJPZkF3YXJkc10pLmZhZGVJbigzMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFicyBjb250YWN0c1xyXG5cclxuICAgIHZhciBjb250YWN0cyA9IGpRdWVyeSgnLnRhYl9jb250YWN0cycpO1xyXG4gICAgdmFyIGNvbnRhY3RzUCA9IGpRdWVyeSgnLnRhYl9wJyk7XHJcbiAgICB2YXIgY29udGFjdHNMaXN0ID0gIGpRdWVyeSgnLmNvbnRhY3RzIHVsIGxpJyk7XHJcbiAgICBqUXVlcnkoY29udGFjdHNbMF0pLmZhZGVJbigzMDApO1xyXG4gICAgalF1ZXJ5KGNvbnRhY3RzUFswXSkuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgY29udGFjdHNMaXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KGNvbnRhY3RzTGlzdCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIHZhciBudW1iZXJPZkF3YXJkTGlzdCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmNvbnRhY3RzIHVsIGxpJyk7XHJcblxyXG4gICAgICAgIGNvbnRhY3RzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mQXdhcmRzID0galF1ZXJ5KHRoaXMpLmluZGV4KCcudGFiX2NvbnRhY3RzJyk7XHJcbiAgICAgICAgICAgIGlmKG51bWJlck9mQXdhcmRzID09IG51bWJlck9mQXdhcmRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoY29udGFjdHMpLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoY29udGFjdHNbbnVtYmVyT2ZBd2FyZHNdKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb250YWN0c1AuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZQID0galF1ZXJ5KHRoaXMpLmluZGV4KCcudGFiX3AnKTtcclxuICAgICAgICAgICAgaWYobnVtYmVyT2ZQID09IG51bWJlck9mQXdhcmRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoY29udGFjdHNQKS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGNvbnRhY3RzUFtudW1iZXJPZlBdKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFiIGVxdWlwbWVudFxyXG5cclxuICAgIC8vIHZhciBlcXVpcG1lbnQgPSBqUXVlcnkoJy5lcXVpcG1lbnRfcm93Jyk7XHJcbiAgICAvLyB2YXIgZXF1aXBtZW50TGlzdCA9ICBqUXVlcnkoJy5lcXVpcG1lbnRfdGFiJyk7XHJcbiAgICAvLyBqUXVlcnkoZXF1aXBtZW50WzBdKS5mYWRlSW4oMzAwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGpRdWVyeShlcXVpcG1lbnRbMF0pKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGVxdWlwbWVudExpc3QpO1xyXG4gICAgLy9cclxuICAgIC8vIGVxdWlwbWVudExpc3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICBqUXVlcnkoZXF1aXBtZW50TGlzdCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAvLyAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgLy8gICAgIHZhciBudW1iZXJPZkVxdWlwbWVudExpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5lcXVpcG1lbnRfdGFiJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGVxdWlwbWVudC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgICAgIHZhciBudW1iZXJPZkVxdWlwbWVudCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmVxdWlwbWVudF9yb3cnKTtcclxuICAgIC8vICAgICAgICAgaWYobnVtYmVyT2ZFcXVpcG1lbnQgPT0gbnVtYmVyT2ZFcXVpcG1lbnRMaXN0KSB7XHJcbiAgICAvLyAgICAgICAgICAgICBqUXVlcnkoZXF1aXBtZW50KS5mYWRlT3V0KDApO1xyXG4gICAgLy8gICAgICAgICAgICAgalF1ZXJ5KGVxdWlwbWVudFtudW1iZXJPZkVxdWlwbWVudF0pLmZhZGVJbigzMDApO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gdGFiIHB1YmxpY2F0aW9uXHJcblxyXG4gICAgdmFyIHB1YmxpY2F0aW9uID0galF1ZXJ5KCcucHVibGljYXRpb25faXRlbScpO1xyXG4gICAgdmFyIHB1YmxpY2F0aW9uTGlzdCA9ICBqUXVlcnkoJy5wdWJsaWNhdGlvbl90YWInKTtcclxuICAgIGpRdWVyeShwdWJsaWNhdGlvblswXSkuZmFkZUluKDMwMCk7XHJcbiAgICBjb25zb2xlLmxvZyhqUXVlcnkocHVibGljYXRpb25bMF0pKTtcclxuICAgIGNvbnNvbGUubG9nKHB1YmxpY2F0aW9uTGlzdCk7XHJcblxyXG4gICAgcHVibGljYXRpb25MaXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHB1YmxpY2F0aW9uTGlzdCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIHZhciBudW1iZXJPZlB1YmxpY2F0aW9uTGlzdCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnB1YmxpY2F0aW9uX3RhYicpO1xyXG5cclxuICAgICAgICBwdWJsaWNhdGlvbi5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZlB1YmxpY2F0aW9uID0galF1ZXJ5KHRoaXMpLmluZGV4KCcucHVibGljYXRpb25faXRlbScpO1xyXG4gICAgICAgICAgICBpZihudW1iZXJPZlB1YmxpY2F0aW9uID09IG51bWJlck9mUHVibGljYXRpb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkocHVibGljYXRpb24pLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkocHVibGljYXRpb25bbnVtYmVyT2ZQdWJsaWNhdGlvbkxpc3RdKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlmdFxyXG5cclxuICAgIGpRdWVyeSgnLnNjcm9sbHVwX2NvbnRhaW5lcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjYwMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlSW4oNDAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsdXBfY29udGFpbmVyJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGJhbm5lcl9jYXJvdXNlbFxyXG5cclxuICAgdmFyIGJhbm5lckNhcm91c2VsID0galF1ZXJ5KCcuYmFubmVyX2Nhcm91c2VsJyk7XHJcblxyXG4gICAgYmFubmVyQ2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0VXAnLFxyXG4gICAgICAgIGFuaW1hdGVJbjogJ3NsaWRlSW5VcCcsXHJcbiAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgIGRvdHM6dHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDQwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOjFcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyBsaWdodGJveFxyXG5cclxubGlnaHRib3gub3B0aW9uKHtcclxuICAgIG1heFdpZHRoOiAxMDAwLFxyXG4gICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMjAwLFxyXG4gICAgJ3dyYXBBcm91bmQnOiB0cnVlLFxyXG4gICAgZmFkZUR1cmF0aW9uOiAyMDAsXHJcbiAgICBpbWFnZUZhZGVEdXJhdGlvbjogNDAwLFxyXG4gICAgcG9zaXRpb25Gcm9tVG9wOiAyMDBcclxufSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
