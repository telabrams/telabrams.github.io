
jQuery(document).ready(function(){

    // page loader with fade

    var pageContent = jQuery('.content');

    pageContent.imagesLoaded(function(){
        pageContent.addClass('loaded');
    });

    // languages toggle

    jQuery('.top_header .languages li:first-child').on('click', function(){
        jQuery('.top_header .languages li').toggleClass('open_lang');

        jQuery(document).mousedown(function(e){
            var languagesBlock = jQuery('.languages ul');

            if (!languagesBlock.is(e.target) && languagesBlock.has(e.target).length == 0) {
                jQuery('.top_header .languages li').removeClass('open_lang');
            }
        });

        return false;
    });

    // languages toggle

    jQuery('.mobile_menu .languages li:first-child').on('click', function(){
        jQuery('.mobile_menu .languages li').toggleClass('open_lang_mob');

        jQuery(document).mousedown(function(e){
            var languagesBlock = jQuery('.mobile_menu .languages ul');

            if (!languagesBlock.is(e.target) && languagesBlock.has(e.target).length == 0) {
                jQuery('.mobile_menu .languages li').removeClass('open_lang_mob');
            }
        });

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
            smartSpeed: 1000,
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

        // contacts.each(function(){
        //     var numberOfAwards = jQuery(this).index('.tab_contacts');
        //     if(numberOfAwards == numberOfAwardList) {
        //         jQuery(contacts).fadeOut(0);
        //         jQuery(contacts[numberOfAwards]).fadeIn(300);
        //     }
        // });

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

    // tab project_end

    var project = jQuery('.project_end_block');
    var projectList =  jQuery('.project_end .top ul li');
    jQuery(project[0]).fadeIn(300);
    console.log(jQuery(project[0]));
    console.log(projectList);

    projectList.on('click', function(){
        jQuery(projectList).removeClass('current-tab');
        jQuery(this).addClass('current-tab');
        var projectOfPublicationList = jQuery(this).index('.project_end .top ul li');

        project.each(function(){
            var projectOfPublication = jQuery(this).index('.project_end_block');
            if(projectOfPublication == projectOfPublicationList) {
                jQuery(project).fadeOut(0);
                jQuery(project[projectOfPublicationList]).fadeIn(300);
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
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        dots:true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        items:1
    });

    // partners carousel

    var partnersCarousel = jQuery('.partners_carousel');

    partnersCarousel.owlCarousel({
        smartSpeed: 700,
        loop:true,
        dots:false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items:4,
        responsive : {
            0 : {
                items:2
            },
            960 : {
                items:3
            },
            1150 : {
                items:4
            }
        }
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

//map

var map_1;
function initMap() {
    var myLatLng = {lat: 50.489466, lng:30.416056};
    map_1 = new google.maps.Map(document.getElementById('map_1'), {
        center: myLatLng,
        zoom: 13,
        mapTypeControl: false,
        scrollwheel: false
    });

    // map.setOptions({styles: styles['default']});

    var marker = new google.maps.Marker({
        map: map_1,
        position: myLatLng,
        title: 'НДІ МП України'
    });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBwYWdlIGxvYWRlciB3aXRoIGZhZGVcclxuXHJcbiAgICB2YXIgcGFnZUNvbnRlbnQgPSBqUXVlcnkoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgcGFnZUNvbnRlbnQuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VzIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLnRvcF9oZWFkZXIgLmxhbmd1YWdlcyBsaTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcudG9wX2hlYWRlciAubGFuZ3VhZ2VzIGxpJykudG9nZ2xlQ2xhc3MoJ29wZW5fbGFuZycpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIGxhbmd1YWdlc0Jsb2NrID0galF1ZXJ5KCcubGFuZ3VhZ2VzIHVsJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxhbmd1YWdlc0Jsb2NrLmlzKGUudGFyZ2V0KSAmJiBsYW5ndWFnZXNCbG9jay5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy50b3BfaGVhZGVyIC5sYW5ndWFnZXMgbGknKS5yZW1vdmVDbGFzcygnb3Blbl9sYW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VzIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51IC5sYW5ndWFnZXMgbGk6Zmlyc3QtY2hpbGQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51IC5sYW5ndWFnZXMgbGknKS50b2dnbGVDbGFzcygnb3Blbl9sYW5nX21vYicpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIGxhbmd1YWdlc0Jsb2NrID0galF1ZXJ5KCcubW9iaWxlX21lbnUgLmxhbmd1YWdlcyB1bCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFsYW5ndWFnZXNCbG9jay5pcyhlLnRhcmdldCkgJiYgbGFuZ3VhZ2VzQmxvY2suaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgLmxhbmd1YWdlcyBsaScpLnJlbW92ZUNsYXNzKCdvcGVuX2xhbmdfbW9iJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2VhcmNoIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLnNlYXJjaCBpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLmZhZGVUb2dnbGUoMTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNhcm91c2VsXHJcblxyXG4gICAgdmFyIGNhcm91c2VsID0galF1ZXJ5KCcuY2Fyb3VzZWwnKTtcclxuXHJcbiAgICBjYXJvdXNlbC5pbWFnZXNMb2FkZWQoZnVuY3Rpb24oKXtcclxuICAgICAgICBjYXJvdXNlbC5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBzbWFydFNwZWVkOiAxMDAwLFxyXG4gICAgICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6dHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNDAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtb2JpbGVfbWVudVxyXG5cclxuICAgIGpRdWVyeSgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUnKS50b2dnbGVDbGFzcygnbWVudV9yaWdodCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICB2YXIgbW9iaWxlTWVudSA9IGpRdWVyeSgnLm1vYmlsZV9tZW51Jyk7XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBqUXVlcnkoJy5oYW1idXJnZXIgaScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtb2JpbGVNZW51LmlzKGUudGFyZ2V0KSAmJiAhYnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAgbW9iaWxlTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnJlbW92ZUNsYXNzKCdtZW51X3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgc3BhbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgxNTApO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnb3Blbl9tZW51Jyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZXZlbnRfcG9wdXBcclxuXHJcbiAgICBqUXVlcnkoJy5jYWxlbmRhcl9uZXdzIC5jb2wtbWQtNCAudG9wIC5pbWdfY29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcG9wdXBfd3JhcHBlciA9IGpRdWVyeSgnLnBvcHVwX3dyYXBwZXInKTtcclxuICAgICAgICBwb3B1cF93cmFwcGVyLmZhZGVJbigzMDApO1xyXG4gICAgICAgIC8vIHBvcHVwX3dyYXBwZXIuYWRkQ2xhc3MoJ2ZsZXgnKTtcclxuICAgICAgICB2YXIgYnV0dG9uID0galF1ZXJ5KCcuZXZlbnRfcG9wdXAgLmNsb3NlIGknKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZU91dCgyMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cCA9IGpRdWVyeSgnLmV2ZW50X3BvcHVwJyk7XHJcblxyXG4gICAgICAgICAgICBpZighcG9wdXAuaXMoZS50YXJnZXQpICYmIHBvcHVwLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBlcXVpcG1lbnRfcG9wdXBcclxuXHJcbiAgICBqUXVlcnkoJy5lcXVpcG1lbnRfaXRlbSAuYnV0dG9uX21haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwb3B1cF93cmFwcGVyID0galF1ZXJ5KCcucG9wdXBfd3JhcHBlcicpO1xyXG4gICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgLy8gcG9wdXBfd3JhcHBlci5hZGRDbGFzcygnZmxleCcpO1xyXG4gICAgICAgIHZhciBidXR0b24gPSBqUXVlcnkoJy5lcXVpcG1lbnRfcG9wdXAgLmNsb3NlIGknKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZU91dCgyMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cCA9IGpRdWVyeSgnLmVxdWlwbWVudF9wb3B1cCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXBvcHVwLmlzKGUudGFyZ2V0KSAmJiBwb3B1cC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0YWJzIGF3YXJkc1xyXG5cclxuICAgIHZhciBhd2FyZHMgPSBqUXVlcnkoJy5wZXJzb25zX2F3YXJkcyAuYm90dG9tJyk7XHJcbiAgICB2YXIgYXdhcmRMaXN0ID0gIGpRdWVyeSgnLnBlcnNvbnNfYXdhcmRzIHVsIGxpJyk7XHJcbiAgICBqUXVlcnkoYXdhcmRzWzBdKS5mYWRlSW4oMzAwKTtcclxuXHJcbiAgICBhd2FyZExpc3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoYXdhcmRMaXN0KS5yZW1vdmVDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgdmFyIG51bWJlck9mQXdhcmRMaXN0ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcucGVyc29uc19hd2FyZHMgdWwgbGknKTtcclxuXHJcbiAgICAgICAgYXdhcmRzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mQXdhcmRzID0galF1ZXJ5KHRoaXMpLmluZGV4KCcucGVyc29uc19hd2FyZHMgLmJvdHRvbScpO1xyXG4gICAgICAgICAgICBpZihudW1iZXJPZkF3YXJkcyA9PSBudW1iZXJPZkF3YXJkTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGF3YXJkcykuZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShhd2FyZHNbbnVtYmVyT2ZBd2FyZHNdKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRhYnMgY29udGFjdHNcclxuXHJcbiAgICB2YXIgY29udGFjdHMgPSBqUXVlcnkoJy50YWJfY29udGFjdHMnKTtcclxuICAgIHZhciBjb250YWN0c1AgPSBqUXVlcnkoJy50YWJfcCcpO1xyXG4gICAgdmFyIGNvbnRhY3RzTGlzdCA9ICBqUXVlcnkoJy5jb250YWN0cyB1bCBsaScpO1xyXG4gICAgalF1ZXJ5KGNvbnRhY3RzWzBdKS5mYWRlSW4oMzAwKTtcclxuICAgIGpRdWVyeShjb250YWN0c1BbMF0pLmZhZGVJbigzMDApO1xyXG5cclxuICAgIGNvbnRhY3RzTGlzdC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeShjb250YWN0c0xpc3QpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZBd2FyZExpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5jb250YWN0cyB1bCBsaScpO1xyXG5cclxuICAgICAgICAvLyBjb250YWN0cy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgIHZhciBudW1iZXJPZkF3YXJkcyA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnRhYl9jb250YWN0cycpO1xyXG4gICAgICAgIC8vICAgICBpZihudW1iZXJPZkF3YXJkcyA9PSBudW1iZXJPZkF3YXJkTGlzdCkge1xyXG4gICAgICAgIC8vICAgICAgICAgalF1ZXJ5KGNvbnRhY3RzKS5mYWRlT3V0KDApO1xyXG4gICAgICAgIC8vICAgICAgICAgalF1ZXJ5KGNvbnRhY3RzW251bWJlck9mQXdhcmRzXSkuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgY29udGFjdHNQLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mUCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnRhYl9wJyk7XHJcbiAgICAgICAgICAgIGlmKG51bWJlck9mUCA9PSBudW1iZXJPZkF3YXJkTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGNvbnRhY3RzUCkuZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShjb250YWN0c1BbbnVtYmVyT2ZQXSkuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRhYiBlcXVpcG1lbnRcclxuXHJcbiAgICAvLyB2YXIgZXF1aXBtZW50ID0galF1ZXJ5KCcuZXF1aXBtZW50X3JvdycpO1xyXG4gICAgLy8gdmFyIGVxdWlwbWVudExpc3QgPSAgalF1ZXJ5KCcuZXF1aXBtZW50X3RhYicpO1xyXG4gICAgLy8galF1ZXJ5KGVxdWlwbWVudFswXSkuZmFkZUluKDMwMCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhqUXVlcnkoZXF1aXBtZW50WzBdKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcXVpcG1lbnRMaXN0KTtcclxuICAgIC8vXHJcbiAgICAvLyBlcXVpcG1lbnRMaXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgalF1ZXJ5KGVxdWlwbWVudExpc3QpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgLy8gICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgIC8vICAgICB2YXIgbnVtYmVyT2ZFcXVpcG1lbnRMaXN0ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZXF1aXBtZW50X3RhYicpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBlcXVpcG1lbnQuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICAgICB2YXIgbnVtYmVyT2ZFcXVpcG1lbnQgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5lcXVpcG1lbnRfcm93Jyk7XHJcbiAgICAvLyAgICAgICAgIGlmKG51bWJlck9mRXF1aXBtZW50ID09IG51bWJlck9mRXF1aXBtZW50TGlzdCkge1xyXG4gICAgLy8gICAgICAgICAgICAgalF1ZXJ5KGVxdWlwbWVudCkuZmFkZU91dCgwKTtcclxuICAgIC8vICAgICAgICAgICAgIGpRdWVyeShlcXVpcG1lbnRbbnVtYmVyT2ZFcXVpcG1lbnRdKS5mYWRlSW4oMzAwKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHRhYiBwdWJsaWNhdGlvblxyXG5cclxuICAgIHZhciBwdWJsaWNhdGlvbiA9IGpRdWVyeSgnLnB1YmxpY2F0aW9uX2l0ZW0nKTtcclxuICAgIHZhciBwdWJsaWNhdGlvbkxpc3QgPSAgalF1ZXJ5KCcucHVibGljYXRpb25fdGFiJyk7XHJcbiAgICBqUXVlcnkocHVibGljYXRpb25bMF0pLmZhZGVJbigzMDApO1xyXG4gICAgY29uc29sZS5sb2coalF1ZXJ5KHB1YmxpY2F0aW9uWzBdKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwdWJsaWNhdGlvbkxpc3QpO1xyXG5cclxuICAgIHB1YmxpY2F0aW9uTGlzdC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeShwdWJsaWNhdGlvbkxpc3QpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZQdWJsaWNhdGlvbkxpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5wdWJsaWNhdGlvbl90YWInKTtcclxuXHJcbiAgICAgICAgcHVibGljYXRpb24uZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZQdWJsaWNhdGlvbiA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnB1YmxpY2F0aW9uX2l0ZW0nKTtcclxuICAgICAgICAgICAgaWYobnVtYmVyT2ZQdWJsaWNhdGlvbiA9PSBudW1iZXJPZlB1YmxpY2F0aW9uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHB1YmxpY2F0aW9uKS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHB1YmxpY2F0aW9uW251bWJlck9mUHVibGljYXRpb25MaXN0XSkuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0YWIgcHJvamVjdF9lbmRcclxuXHJcbiAgICB2YXIgcHJvamVjdCA9IGpRdWVyeSgnLnByb2plY3RfZW5kX2Jsb2NrJyk7XHJcbiAgICB2YXIgcHJvamVjdExpc3QgPSAgalF1ZXJ5KCcucHJvamVjdF9lbmQgLnRvcCB1bCBsaScpO1xyXG4gICAgalF1ZXJ5KHByb2plY3RbMF0pLmZhZGVJbigzMDApO1xyXG4gICAgY29uc29sZS5sb2coalF1ZXJ5KHByb2plY3RbMF0pKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcclxuXHJcbiAgICBwcm9qZWN0TGlzdC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeShwcm9qZWN0TGlzdCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIHZhciBwcm9qZWN0T2ZQdWJsaWNhdGlvbkxpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5wcm9qZWN0X2VuZCAudG9wIHVsIGxpJyk7XHJcblxyXG4gICAgICAgIHByb2plY3QuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgcHJvamVjdE9mUHVibGljYXRpb24gPSBqUXVlcnkodGhpcykuaW5kZXgoJy5wcm9qZWN0X2VuZF9ibG9jaycpO1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0T2ZQdWJsaWNhdGlvbiA9PSBwcm9qZWN0T2ZQdWJsaWNhdGlvbkxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShwcm9qZWN0KS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHByb2plY3RbcHJvamVjdE9mUHVibGljYXRpb25MaXN0XSkuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZnRcclxuXHJcbiAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT42MDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsdXBfY29udGFpbmVyJykuZmFkZUluKDQwMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbHVwX2NvbnRhaW5lcicpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBiYW5uZXJfY2Fyb3VzZWxcclxuXHJcbiAgIHZhciBiYW5uZXJDYXJvdXNlbCA9IGpRdWVyeSgnLmJhbm5lcl9jYXJvdXNlbCcpO1xyXG5cclxuICAgIGJhbm5lckNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcbiAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgZG90czp0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogODAwMCxcclxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6MVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcGFydG5lcnMgY2Fyb3VzZWxcclxuXHJcbiAgICB2YXIgcGFydG5lcnNDYXJvdXNlbCA9IGpRdWVyeSgnLnBhcnRuZXJzX2Nhcm91c2VsJyk7XHJcblxyXG4gICAgcGFydG5lcnNDYXJvdXNlbC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgc21hcnRTcGVlZDogNzAwLFxyXG4gICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICBkb3RzOmZhbHNlLFxyXG4gICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiAzMDAwLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBpdGVtczo0LFxyXG4gICAgICAgIHJlc3BvbnNpdmUgOiB7XHJcbiAgICAgICAgICAgIDAgOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk2MCA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTE1MCA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyBsaWdodGJveFxyXG5cclxubGlnaHRib3gub3B0aW9uKHtcclxuICAgIG1heFdpZHRoOiAxMDAwLFxyXG4gICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMjAwLFxyXG4gICAgJ3dyYXBBcm91bmQnOiB0cnVlLFxyXG4gICAgZmFkZUR1cmF0aW9uOiAyMDAsXHJcbiAgICBpbWFnZUZhZGVEdXJhdGlvbjogNDAwLFxyXG4gICAgcG9zaXRpb25Gcm9tVG9wOiAyMDBcclxufSk7XHJcblxyXG4vL21hcFxyXG5cclxudmFyIG1hcF8xO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDg5NDY2LCBsbmc6MzAuNDE2MDU2fTtcclxuICAgIG1hcF8xID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwXzEnKSwge1xyXG4gICAgICAgIGNlbnRlcjogbXlMYXRMbmcsXHJcbiAgICAgICAgem9vbTogMTMsXHJcbiAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFwLnNldE9wdGlvbnMoe3N0eWxlczogc3R5bGVzWydkZWZhdWx0J119KTtcclxuXHJcbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgbWFwOiBtYXBfMSxcclxuICAgICAgICBwb3NpdGlvbjogbXlMYXRMbmcsXHJcbiAgICAgICAgdGl0bGU6ICfQndCU0IYg0JzQnyDQo9C60YDQsNGX0L3QuCdcclxuICAgIH0pO1xyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
