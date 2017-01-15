
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
            dots:false,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            items:1,
            responsive : {
                0 : {
                    nav: false
                },
                768 : {
                    nav: true
                }
            }
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

    // index_popup

    jQuery('.equipment .mask .button_main').on('click', function(){
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

        return false;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBwYWdlIGxvYWRlciB3aXRoIGZhZGVcclxuXHJcbiAgICB2YXIgcGFnZUNvbnRlbnQgPSBqUXVlcnkoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgcGFnZUNvbnRlbnQuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VzIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLnRvcF9oZWFkZXIgLmxhbmd1YWdlcyBsaTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcudG9wX2hlYWRlciAubGFuZ3VhZ2VzIGxpJykudG9nZ2xlQ2xhc3MoJ29wZW5fbGFuZycpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIGxhbmd1YWdlc0Jsb2NrID0galF1ZXJ5KCcubGFuZ3VhZ2VzIHVsJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxhbmd1YWdlc0Jsb2NrLmlzKGUudGFyZ2V0KSAmJiBsYW5ndWFnZXNCbG9jay5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy50b3BfaGVhZGVyIC5sYW5ndWFnZXMgbGknKS5yZW1vdmVDbGFzcygnb3Blbl9sYW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VzIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51IC5sYW5ndWFnZXMgbGk6Zmlyc3QtY2hpbGQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51IC5sYW5ndWFnZXMgbGknKS50b2dnbGVDbGFzcygnb3Blbl9sYW5nX21vYicpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIGxhbmd1YWdlc0Jsb2NrID0galF1ZXJ5KCcubW9iaWxlX21lbnUgLmxhbmd1YWdlcyB1bCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFsYW5ndWFnZXNCbG9jay5pcyhlLnRhcmdldCkgJiYgbGFuZ3VhZ2VzQmxvY2suaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgLmxhbmd1YWdlcyBsaScpLnJlbW92ZUNsYXNzKCdvcGVuX2xhbmdfbW9iJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2VhcmNoIHRvZ2dsZVxyXG5cclxuICAgIGpRdWVyeSgnLnNlYXJjaCBpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLmZhZGVUb2dnbGUoMTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNhcm91c2VsXHJcblxyXG4gICAgdmFyIGNhcm91c2VsID0galF1ZXJ5KCcuY2Fyb3VzZWwnKTtcclxuXHJcbiAgICBjYXJvdXNlbC5pbWFnZXNMb2FkZWQoZnVuY3Rpb24oKXtcclxuICAgICAgICBjYXJvdXNlbC5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBzbWFydFNwZWVkOiAxMDAwLFxyXG4gICAgICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6ZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogWyc8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JywnPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nXSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNDAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYXY6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzY4IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtb2JpbGVfbWVudVxyXG5cclxuICAgIGpRdWVyeSgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUnKS50b2dnbGVDbGFzcygnbWVudV9yaWdodCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICB2YXIgbW9iaWxlTWVudSA9IGpRdWVyeSgnLm1vYmlsZV9tZW51Jyk7XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBqUXVlcnkoJy5oYW1idXJnZXIgaScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtb2JpbGVNZW51LmlzKGUudGFyZ2V0KSAmJiAhYnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAgbW9iaWxlTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnJlbW92ZUNsYXNzKCdtZW51X3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgc3BhbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgxNTApO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnb3Blbl9tZW51Jyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZXZlbnRfcG9wdXBcclxuXHJcbiAgICBqUXVlcnkoJy5jYWxlbmRhcl9uZXdzIC5jb2wtbWQtNCAudG9wIC5pbWdfY29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcG9wdXBfd3JhcHBlciA9IGpRdWVyeSgnLnBvcHVwX3dyYXBwZXInKTtcclxuICAgICAgICBwb3B1cF93cmFwcGVyLmZhZGVJbigzMDApO1xyXG4gICAgICAgIC8vIHBvcHVwX3dyYXBwZXIuYWRkQ2xhc3MoJ2ZsZXgnKTtcclxuICAgICAgICB2YXIgYnV0dG9uID0galF1ZXJ5KCcuZXZlbnRfcG9wdXAgLmNsb3NlIGknKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZU91dCgyMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cCA9IGpRdWVyeSgnLmV2ZW50X3BvcHVwJyk7XHJcblxyXG4gICAgICAgICAgICBpZighcG9wdXAuaXMoZS50YXJnZXQpICYmIHBvcHVwLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbmRleF9wb3B1cFxyXG5cclxuICAgIGpRdWVyeSgnLmVxdWlwbWVudCAubWFzayAuYnV0dG9uX21haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwb3B1cF93cmFwcGVyID0galF1ZXJ5KCcucG9wdXBfd3JhcHBlcicpO1xyXG4gICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgLy8gcG9wdXBfd3JhcHBlci5hZGRDbGFzcygnZmxleCcpO1xyXG4gICAgICAgIHZhciBidXR0b24gPSBqUXVlcnkoJy5lcXVpcG1lbnRfcG9wdXAgLmNsb3NlIGknKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZU91dCgyMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cCA9IGpRdWVyeSgnLmVxdWlwbWVudF9wb3B1cCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXBvcHVwLmlzKGUudGFyZ2V0KSAmJiBwb3B1cC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHBvcHVwX3dyYXBwZXIuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGVxdWlwbWVudF9wb3B1cFxyXG5cclxuICAgIGpRdWVyeSgnLmVxdWlwbWVudF9pdGVtIC5idXR0b25fbWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHBvcHVwX3dyYXBwZXIgPSBqUXVlcnkoJy5wb3B1cF93cmFwcGVyJyk7XHJcbiAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlSW4oMzAwKTtcclxuICAgICAgICAvLyBwb3B1cF93cmFwcGVyLmFkZENsYXNzKCdmbGV4Jyk7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGpRdWVyeSgnLmVxdWlwbWVudF9wb3B1cCAuY2xvc2UgaScpO1xyXG5cclxuICAgICAgICBidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIHBvcHVwID0galF1ZXJ5KCcuZXF1aXBtZW50X3BvcHVwJyk7XHJcblxyXG4gICAgICAgICAgICBpZighcG9wdXAuaXMoZS50YXJnZXQpICYmIHBvcHVwLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgcG9wdXBfd3JhcHBlci5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRhYnMgYXdhcmRzXHJcblxyXG4gICAgdmFyIGF3YXJkcyA9IGpRdWVyeSgnLnBlcnNvbnNfYXdhcmRzIC5ib3R0b20nKTtcclxuICAgIHZhciBhd2FyZExpc3QgPSAgalF1ZXJ5KCcucGVyc29uc19hd2FyZHMgdWwgbGknKTtcclxuICAgIGpRdWVyeShhd2FyZHNbMF0pLmZhZGVJbigzMDApO1xyXG5cclxuICAgIGF3YXJkTGlzdC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeShhd2FyZExpc3QpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZBd2FyZExpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5wZXJzb25zX2F3YXJkcyB1bCBsaScpO1xyXG5cclxuICAgICAgICBhd2FyZHMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZBd2FyZHMgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5wZXJzb25zX2F3YXJkcyAuYm90dG9tJyk7XHJcbiAgICAgICAgICAgIGlmKG51bWJlck9mQXdhcmRzID09IG51bWJlck9mQXdhcmRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoYXdhcmRzKS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGF3YXJkc1tudW1iZXJPZkF3YXJkc10pLmZhZGVJbigzMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFicyBjb250YWN0c1xyXG5cclxuICAgIHZhciBjb250YWN0cyA9IGpRdWVyeSgnLnRhYl9jb250YWN0cycpO1xyXG4gICAgdmFyIGNvbnRhY3RzUCA9IGpRdWVyeSgnLnRhYl9wJyk7XHJcbiAgICB2YXIgY29udGFjdHNMaXN0ID0gIGpRdWVyeSgnLmNvbnRhY3RzIHVsIGxpJyk7XHJcbiAgICBqUXVlcnkoY29udGFjdHNbMF0pLmZhZGVJbigzMDApO1xyXG4gICAgalF1ZXJ5KGNvbnRhY3RzUFswXSkuZmFkZUluKDMwMCk7XHJcblxyXG4gICAgY29udGFjdHNMaXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KGNvbnRhY3RzTGlzdCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIHZhciBudW1iZXJPZkF3YXJkTGlzdCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmNvbnRhY3RzIHVsIGxpJyk7XHJcblxyXG4gICAgICAgIC8vIGNvbnRhY3RzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgdmFyIG51bWJlck9mQXdhcmRzID0galF1ZXJ5KHRoaXMpLmluZGV4KCcudGFiX2NvbnRhY3RzJyk7XHJcbiAgICAgICAgLy8gICAgIGlmKG51bWJlck9mQXdhcmRzID09IG51bWJlck9mQXdhcmRMaXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBqUXVlcnkoY29udGFjdHMpLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgLy8gICAgICAgICBqUXVlcnkoY29udGFjdHNbbnVtYmVyT2ZBd2FyZHNdKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBjb250YWN0c1AuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZQID0galF1ZXJ5KHRoaXMpLmluZGV4KCcudGFiX3AnKTtcclxuICAgICAgICAgICAgaWYobnVtYmVyT2ZQID09IG51bWJlck9mQXdhcmRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoY29udGFjdHNQKS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGNvbnRhY3RzUFtudW1iZXJPZlBdKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFiIGVxdWlwbWVudFxyXG5cclxuICAgIC8vIHZhciBlcXVpcG1lbnQgPSBqUXVlcnkoJy5lcXVpcG1lbnRfcm93Jyk7XHJcbiAgICAvLyB2YXIgZXF1aXBtZW50TGlzdCA9ICBqUXVlcnkoJy5lcXVpcG1lbnRfdGFiJyk7XHJcbiAgICAvLyBqUXVlcnkoZXF1aXBtZW50WzBdKS5mYWRlSW4oMzAwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGpRdWVyeShlcXVpcG1lbnRbMF0pKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGVxdWlwbWVudExpc3QpO1xyXG4gICAgLy9cclxuICAgIC8vIGVxdWlwbWVudExpc3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICBqUXVlcnkoZXF1aXBtZW50TGlzdCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAvLyAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgLy8gICAgIHZhciBudW1iZXJPZkVxdWlwbWVudExpc3QgPSBqUXVlcnkodGhpcykuaW5kZXgoJy5lcXVpcG1lbnRfdGFiJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGVxdWlwbWVudC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgICAgIHZhciBudW1iZXJPZkVxdWlwbWVudCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmVxdWlwbWVudF9yb3cnKTtcclxuICAgIC8vICAgICAgICAgaWYobnVtYmVyT2ZFcXVpcG1lbnQgPT0gbnVtYmVyT2ZFcXVpcG1lbnRMaXN0KSB7XHJcbiAgICAvLyAgICAgICAgICAgICBqUXVlcnkoZXF1aXBtZW50KS5mYWRlT3V0KDApO1xyXG4gICAgLy8gICAgICAgICAgICAgalF1ZXJ5KGVxdWlwbWVudFtudW1iZXJPZkVxdWlwbWVudF0pLmZhZGVJbigzMDApO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gdGFiIHB1YmxpY2F0aW9uXHJcblxyXG4gICAgdmFyIHB1YmxpY2F0aW9uID0galF1ZXJ5KCcucHVibGljYXRpb25faXRlbScpO1xyXG4gICAgdmFyIHB1YmxpY2F0aW9uTGlzdCA9ICBqUXVlcnkoJy5wdWJsaWNhdGlvbl90YWInKTtcclxuICAgIGpRdWVyeShwdWJsaWNhdGlvblswXSkuZmFkZUluKDMwMCk7XHJcbiAgICBjb25zb2xlLmxvZyhqUXVlcnkocHVibGljYXRpb25bMF0pKTtcclxuICAgIGNvbnNvbGUubG9nKHB1YmxpY2F0aW9uTGlzdCk7XHJcblxyXG4gICAgcHVibGljYXRpb25MaXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHB1YmxpY2F0aW9uTGlzdCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIHZhciBudW1iZXJPZlB1YmxpY2F0aW9uTGlzdCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnB1YmxpY2F0aW9uX3RhYicpO1xyXG5cclxuICAgICAgICBwdWJsaWNhdGlvbi5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZlB1YmxpY2F0aW9uID0galF1ZXJ5KHRoaXMpLmluZGV4KCcucHVibGljYXRpb25faXRlbScpO1xyXG4gICAgICAgICAgICBpZihudW1iZXJPZlB1YmxpY2F0aW9uID09IG51bWJlck9mUHVibGljYXRpb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkocHVibGljYXRpb24pLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkocHVibGljYXRpb25bbnVtYmVyT2ZQdWJsaWNhdGlvbkxpc3RdKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRhYiBwcm9qZWN0X2VuZFxyXG5cclxuICAgIHZhciBwcm9qZWN0ID0galF1ZXJ5KCcucHJvamVjdF9lbmRfYmxvY2snKTtcclxuICAgIHZhciBwcm9qZWN0TGlzdCA9ICBqUXVlcnkoJy5wcm9qZWN0X2VuZCAudG9wIHVsIGxpJyk7XHJcbiAgICBqUXVlcnkocHJvamVjdFswXSkuZmFkZUluKDMwMCk7XHJcbiAgICBjb25zb2xlLmxvZyhqUXVlcnkocHJvamVjdFswXSkpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xyXG5cclxuICAgIHByb2plY3RMaXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHByb2plY3RMaXN0KS5yZW1vdmVDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgdmFyIHByb2plY3RPZlB1YmxpY2F0aW9uTGlzdCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnByb2plY3RfZW5kIC50b3AgdWwgbGknKTtcclxuXHJcbiAgICAgICAgcHJvamVjdC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBwcm9qZWN0T2ZQdWJsaWNhdGlvbiA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnByb2plY3RfZW5kX2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3RPZlB1YmxpY2F0aW9uID09IHByb2plY3RPZlB1YmxpY2F0aW9uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHByb2plY3QpLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkocHJvamVjdFtwcm9qZWN0T2ZQdWJsaWNhdGlvbkxpc3RdKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlmdFxyXG5cclxuICAgIGpRdWVyeSgnLnNjcm9sbHVwX2NvbnRhaW5lcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjYwMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlSW4oNDAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsdXBfY29udGFpbmVyJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGJhbm5lcl9jYXJvdXNlbFxyXG5cclxuICAgdmFyIGJhbm5lckNhcm91c2VsID0galF1ZXJ5KCcuYmFubmVyX2Nhcm91c2VsJyk7XHJcblxyXG4gICAgYmFubmVyQ2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuICAgICAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxyXG4gICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICBkb3RzOnRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBpdGVtczoxXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwYXJ0bmVycyBjYXJvdXNlbFxyXG5cclxuICAgIHZhciBwYXJ0bmVyc0Nhcm91c2VsID0galF1ZXJ5KCcucGFydG5lcnNfY2Fyb3VzZWwnKTtcclxuXHJcbiAgICBwYXJ0bmVyc0Nhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICBzbWFydFNwZWVkOiA3MDAsXHJcbiAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgIGRvdHM6ZmFsc2UsXHJcbiAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDMwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOjQsXHJcbiAgICAgICAgcmVzcG9uc2l2ZSA6IHtcclxuICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTYwIDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6M1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMTUwIDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6NFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vIGxpZ2h0Ym94XHJcblxyXG5saWdodGJveC5vcHRpb24oe1xyXG4gICAgbWF4V2lkdGg6IDEwMDAsXHJcbiAgICAncmVzaXplRHVyYXRpb24nOiAyMDAsXHJcbiAgICAnd3JhcEFyb3VuZCc6IHRydWUsXHJcbiAgICBmYWRlRHVyYXRpb246IDIwMCxcclxuICAgIGltYWdlRmFkZUR1cmF0aW9uOiA0MDAsXHJcbiAgICBwb3NpdGlvbkZyb21Ub3A6IDIwMFxyXG59KTtcclxuXHJcbi8vbWFwXHJcblxyXG52YXIgbWFwXzE7XHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICB2YXIgbXlMYXRMbmcgPSB7bGF0OiA1MC40ODk0NjYsIGxuZzozMC40MTYwNTZ9O1xyXG4gICAgbWFwXzEgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBfMScpLCB7XHJcbiAgICAgICAgY2VudGVyOiBteUxhdExuZyxcclxuICAgICAgICB6b29tOiAxMyxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBzdHlsZXNbJ2RlZmF1bHQnXX0pO1xyXG5cclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBtYXA6IG1hcF8xLFxyXG4gICAgICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuICAgICAgICB0aXRsZTogJ9Cd0JTQhiDQnNCfINCj0LrRgNCw0ZfQvdC4J1xyXG4gICAgfSk7XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
