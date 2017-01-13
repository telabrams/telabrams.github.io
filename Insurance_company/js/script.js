
jQuery(document).ready(function(){

    // smooth loading

    var targetLoading = jQuery('section');
    var footer = jQuery('footer');

    targetLoading.imagesLoaded(function(){
        targetLoading.addClass('loaded');
        footer.addClass('loaded');
    });

    // question hover

    var hoverTarget = jQuery('.question_circle');

    hoverTarget.on('click', function(){
        var hoverClose = jQuery(this).next();
        hoverClose.fadeToggle(0);

        jQuery(document).mousedown(function(e){

            var close = jQuery('.calculator_popup .close');
            var hoverAnswer = jQuery('.answer_circle');

            if(!hoverAnswer.is(e.target) && !hoverTarget.is(e.target) && hoverAnswer.has(e.target).length == 0) {
                hoverClose.fadeOut(0);
            }

        });
    });

    // calculator open

    var calcButton = jQuery('.calc');
    var calcShadow = jQuery('.calculator_shadow');

    calcButton.on('click', function(){
        calcShadow.fadeToggle(300);
        
        jQuery(document).mousedown(function(e){

            var close = jQuery('.calculator_popup .close');
            var calcPopup = jQuery('.calculator_popup');

            close.on('click', function(){
                calcShadow.fadeOut(300);
            });

            if(!calcPopup.is(e.target) && calcPopup.has(e.target).length == 0) {
                calcShadow.fadeOut(300);
            }

        });
    });

    // menu

    var menuButton = jQuery('header .button');
    var siteMenu = jQuery('header menu');

    menuButton.on('click', function(){
        jQuery(this).toggleClass('active-menu');
        siteMenu.slideToggle();

        jQuery(document).scroll(function(){
            siteMenu.slideUp();
            menuButton.removeClass('active-menu');

        });

        jQuery(document).mousedown(function(e){

            if (!siteMenu.is(e.target) && !menuButton.is(e.target) && !jQuery('header .button i').is(e.target) && siteMenu.has(e.target).length == 0) {
                siteMenu.slideUp();
                menuButton.removeClass('active-menu');
            }

        });
    });

    // news

    var newsText = jQuery('.news_item p');
    var newsHeader = jQuery('.news_item h3');
    var newsHeaderLineHeight;
    var newsTextLineHeight = newsText.css('line-height');
    var withoutPixelsText = parseInt(newsTextLineHeight);
    var withoutPixelsHeader;
    var newsHeaderHeight;
    var twoLine = withoutPixelsText*2;

    newsHeader.each(function(){

        newsHeaderLineHeight = jQuery(this).css('line-height');
        withoutPixelsHeader = parseInt(newsHeaderLineHeight);
        newsHeaderHeight = jQuery(this).height();

        if (withoutPixelsHeader == newsHeaderHeight) {
            jQuery(this).next().css('height', twoLine+'px');
        }
        else if (2*withoutPixelsHeader == newsHeaderHeight) {
            jQuery(this).next().css('height', (twoLine/2)+'px');
        }
    });

    // faqs tab

    var faqsQuestionBlock = jQuery('.question_block');
    var faqsQuestionBlockIndex;
    var faqsTab = jQuery('.faqs_tabs .tab');
    var faqsTabIndex;
    jQuery(faqsQuestionBlock[0]).fadeIn(100);

    faqsTab.on('click', function(){
        faqsTab.removeClass('current-tab');
        jQuery(this).addClass('current-tab');
        faqsTabIndex = jQuery(this).index('.faqs_tabs .tab');

        faqsQuestionBlock.each(function(){
            faqsQuestionBlockIndex = jQuery(this).index('.question_block');
            if (faqsTabIndex == faqsQuestionBlockIndex) {
                faqsQuestionBlock.fadeOut(0);
                jQuery(this).fadeIn(100);
            }
        });
    });

    // auto tabs

    var infoWrapper = jQuery('.info_wrapper');
    var calcArrow = jQuery('.auto_tabs_item .arrow');
    var calcArrowIndex;
    var autoTabs = jQuery('.auto_tabs_item');
    var autoTabsIndex;
    var autoTabsBlock = jQuery('.auto_tabs_bottom');
    var autoTabsBlockIndex;

    jQuery(calcArrow[0]).addClass('block');
    jQuery(infoWrapper[0]).addClass('block');
    jQuery(autoTabsBlock[0]).addClass('flex');

    autoTabs.on('click', function(){
        autoTabs.removeClass('current-auto-tab');
        jQuery(this).addClass('current-auto-tab');
        autoTabsIndex = jQuery(this).index('.auto_tabs_item');
        calcArrow.removeClass('block');
        calcArrowIndex = jQuery(this).find('.arrow').addClass('block');

        autoTabsBlock.each(function(){
            autoTabsBlockIndex = jQuery(this).index('.auto_tabs_bottom');

            if (autoTabsIndex == autoTabsBlockIndex) {
                infoWrapper.removeClass('block');
                jQuery(infoWrapper[autoTabsBlockIndex]).addClass('block');
                autoTabsBlock.removeClass('flex');
                jQuery(this).addClass('flex');
            }
        });
    });

    // auto cuvilka bottom

    var pseudoSelect = jQuery('.pseudo_select');
    var mirror = jQuery('.pseudo_select .mirror');
    var radioInput = jQuery('.radio_block input');
    var targetText;
    var checkedInput;
    var reservedCheck = true;

    // if (jQuery(radioInput[12]).prop('checked', 'true')) {
    //     reservedCheck = true;
    // }

    function reserveChecker(e) {

        var infoWrapperClass = jQuery(infoWrapper[0]).attr('class');
        targetText = jQuery(e.target).next().html();
        console.log(jQuery(e.target).index('.radio_block input'));
        console.log(infoWrapperClass);

        console.log(jQuery(e.target).parents('.info_wrapper'));

        if (jQuery(e.target).index('.radio_block input') > 12 && jQuery(e.target).index('.radio_block input') <= 16) {

            reservedCheck = false;
            mirror.html(targetText);
            pseudoSelect.addClass('off-select');
            console.log(reservedCheck);
        }


        else if (jQuery(e.target).index('.radio_block input') == 12) {
            reservedCheck = true;
            pseudoSelect.removeClass('off-select');
            mirror.html('');
            console.log(reservedCheck);
        }

        else {
            return false;
            }
    }

    radioInput.on('click', function(e){

        reserveChecker(e);

        radioInput.each(function(){
            checkedInput = jQuery(this).prop('checked');
            if (checkedInput == true) {
                jQuery(this).next().addClass('current-label');
            }

            else {
                jQuery(this).next().removeClass('current-label');
            }
        });
    });

    // array for autoLabel

    var autoLabelSimple = jQuery('.auto_tabs_bottom .button_more_label');
    var autoTabsLabel = [jQuery('.engine_block label'), jQuery('.weight_block label'), jQuery('.passengers_block label'), jQuery('.moto_block label'), jQuery('.tourist_block label')];

    // object for autoLabel

    var autoLabelObject = {
        labelName: [
            {
                engineAttr: 'current-engine',
                autoTabsLabel: autoTabsLabel[0]
            },
            {
                engineAttr: 'current-weight',
                autoTabsLabel: autoTabsLabel[1]
            },
            {
                engineAttr: 'current-passengers',
                autoTabsLabel: autoTabsLabel[2]
            },
            {
                engineAttr: 'current-moto',
                autoTabsLabel: autoTabsLabel[3]
            },
            {
                engineAttr: 'current-tourist',
                autoTabsLabel: autoTabsLabel[4]
            }         
    ]};

    // initial function for autoLabel

    function labelToggle(blockName, labelName, e) {
        blockName.removeClass(labelName);
        jQuery(e.target).addClass(labelName);
    }

    var i = 0;

    autoLabelSimple.on('click', function(e){

        autoTabs.each(function(){
            autoTabsIndex = jQuery(this).index('.auto_tabs_item');
            if (autoTabsIndex == jQuery(e.target).parent().parent().index('.auto_tabs_bottom')){
                labelToggle(autoLabelObject.labelName[i].autoTabsLabel, autoLabelObject.labelName[i].engineAttr, e);
            }
            i++;
        });

        i = 0
    });

    // information tab

    var informationTab = jQuery('.info_tab_item');
    var downloadBlock = jQuery('.download_block');
    var downloadBlockIndex;
    var activeTab = 'current-tab';

    jQuery(downloadBlock[0]).addClass('block');

    informationTab.on('click', function(e){

        downloadBlock.each(function(){

            downloadBlockIndex = jQuery(this).index('.download_block');

            if(downloadBlockIndex == jQuery(e.target).index('.info_tab_item')) {
                downloadBlock.removeClass('block');
                jQuery(this).addClass('block');
                labelToggle(informationTab, activeTab, e);
            }
        });

    });

    // pseuo input

    var pseudoinput = jQuery('#pseudo_input_label');

    pseudoinput.on('click', function(){
        pseudoinput.toggleClass('pseudo_input_active');
    });

    // delivery tab

    var deliveryTab = jQuery('.delivery_item');
    var deliveryBlock = jQuery('.delivery_tab_wrapper');
    var deliveryBlockIndex;

    jQuery(deliveryBlock[0]).addClass('block');

    deliveryTab.on('click', function(e){

        deliveryBlock.each(function(){

            deliveryBlockIndex = jQuery(this).index('.delivery_tab_wrapper');

            if(deliveryBlockIndex == jQuery(e.target).index('.delivery_item')) {
                deliveryBlock.removeClass('block');
                jQuery(this).addClass('block');
                labelToggle(deliveryTab, activeTab, e);
            }
        });

    });

    // calculator state toggle

    var flor = jQuery('.flor');
    var florIndex;
    var nextState = jQuery('.flor_next');
    var prevState = jQuery('.flor_prev');
    var returnState = jQuery('.return');
    var stateCounter = 0;
    jQuery(flor[0]).fadeIn();

    console.log(flor);

    nextState.on('click', function(){

        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);

        stateCounter++;
        flor.each(function(){
            florIndex = jQuery(this).index('.flor');

            console.log(florIndex);
            console.log(stateCounter+'++++');

            if (florIndex == stateCounter) {
                flor.fadeOut(0);
                jQuery(this).fadeIn();
            }
        });
    });

    prevState.on('click', function(){

        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);

        stateCounter--;
        flor.each(function(){
            florIndex = jQuery(this).index('.flor');

            if (florIndex == stateCounter) {
                flor.fadeOut(0);
                jQuery(this).fadeIn();
            }

        });
    });

    returnState.on('click', function(){

        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);

        flor.fadeOut(0);
        jQuery(flor[0]).fadeIn();
        stateCounter= 0;
    });

    // faqs question

    var faqsQuestion = jQuery('.question_item span');
    var faqsArrow = jQuery('.arrow');

    faqsArrow.on('click', function(){
        jQuery(this).next().next().slideToggle();
        jQuery(this).toggleClass('rotate');
    });

    faqsQuestion.on('click', function(){
        jQuery(this).toggleClass('openQuestion');
        jQuery(this).next().slideToggle();
        jQuery(this).prev().toggleClass('rotate');
    });

    //body margin
    
    var header = jQuery('header');
    var headerHeight;
    var body = jQuery('body');

    function margin(){
        headerHeight = header.height();
        body.css('margin-top', headerHeight+'px');
        calcPopup.css('top', headerHeight+'px');
    }

    margin();

    jQuery(window).resize(function(){
        margin();
    });

    // // svg click
    //
    // var svgPart_1 = jQuery('.autoIcon').attr('class');
    // var svgPart_2 = jQuery('.autoIcon_second');
    // var svgPart_3 = jQuery('.autoIcon_third');
    //
    // console.log(jQuery('svg'));
    //
    // jQuery('.auto_tabs_item').on('click', function(){
    //
    //     svgPart_2.css('stroke', '#ff4ff0');
    //     console.log('color');
    //     svgPart_3.css('stroke', '#ff4ff0');
    // });

    // pseudo select

    var option = jQuery('.pseudo_select .option');
    var reserved = jQuery('.pseudo_select .reserved');
    var optionWrapper = jQuery('.pseudo_select .option_wrapper');
    var optionText;

    mirror.on('click', function(){

        if (reservedCheck == true) {
            console.log('ON');

            pseudoSelect.toggleClass('active-select');
            optionWrapper.slideToggle(0);


            jQuery(document).click(function (e) {

                if (!mirror.is(e.target) && option.has(e.target).length == 0) {
                    optionWrapper.slideUp(0);
                    pseudoSelect.removeClass('active-select');
                }
            });

            option.on('click', function () {
                option.removeClass('current-option');
                jQuery(this).addClass('current-option');

                option.each(function () {

                    if (jQuery(this).attr('class') == 'option current-option') {
                        optionText = jQuery(this).html();
                        console.log(optionText + "____");
                        mirror.html(optionText);
                    }
                });

            });
        }

        else {
            return false;
        }

    });

});





//map

var map;
function initMap() {
    var myLatLng = {lat: 50.419324, lng: 30.543196};

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 17,
        mapTypeControl: false,
        scrollwheel: false
    });

    // map.setOptions({styles: styles['default']});

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Victoria Dent'
    });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBzbW9vdGggbG9hZGluZ1xyXG5cclxuICAgIHZhciB0YXJnZXRMb2FkaW5nID0galF1ZXJ5KCdzZWN0aW9uJyk7XHJcbiAgICB2YXIgZm9vdGVyID0galF1ZXJ5KCdmb290ZXInKTtcclxuXHJcbiAgICB0YXJnZXRMb2FkaW5nLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIHRhcmdldExvYWRpbmcuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGZvb3Rlci5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBxdWVzdGlvbiBob3ZlclxyXG5cclxuICAgIHZhciBob3ZlclRhcmdldCA9IGpRdWVyeSgnLnF1ZXN0aW9uX2NpcmNsZScpO1xyXG5cclxuICAgIGhvdmVyVGFyZ2V0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGhvdmVyQ2xvc2UgPSBqUXVlcnkodGhpcykubmV4dCgpO1xyXG4gICAgICAgIGhvdmVyQ2xvc2UuZmFkZVRvZ2dsZSgwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xvc2UgPSBqUXVlcnkoJy5jYWxjdWxhdG9yX3BvcHVwIC5jbG9zZScpO1xyXG4gICAgICAgICAgICB2YXIgaG92ZXJBbnN3ZXIgPSBqUXVlcnkoJy5hbnN3ZXJfY2lyY2xlJyk7XHJcblxyXG4gICAgICAgICAgICBpZighaG92ZXJBbnN3ZXIuaXMoZS50YXJnZXQpICYmICFob3ZlclRhcmdldC5pcyhlLnRhcmdldCkgJiYgaG92ZXJBbnN3ZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDbG9zZS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRvciBvcGVuXHJcblxyXG4gICAgdmFyIGNhbGNCdXR0b24gPSBqUXVlcnkoJy5jYWxjJyk7XHJcbiAgICB2YXIgY2FsY1NoYWRvdyA9IGpRdWVyeSgnLmNhbGN1bGF0b3Jfc2hhZG93Jyk7XHJcblxyXG4gICAgY2FsY0J1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNhbGNTaGFkb3cuZmFkZVRvZ2dsZSgzMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsb3NlID0galF1ZXJ5KCcuY2FsY3VsYXRvcl9wb3B1cCAuY2xvc2UnKTtcclxuICAgICAgICAgICAgdmFyIGNhbGNQb3B1cCA9IGpRdWVyeSgnLmNhbGN1bGF0b3JfcG9wdXAnKTtcclxuXHJcbiAgICAgICAgICAgIGNsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjYWxjU2hhZG93LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZighY2FsY1BvcHVwLmlzKGUudGFyZ2V0KSAmJiBjYWxjUG9wdXAuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2FsY1NoYWRvdy5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtZW51XHJcblxyXG4gICAgdmFyIG1lbnVCdXR0b24gPSBqUXVlcnkoJ2hlYWRlciAuYnV0dG9uJyk7XHJcbiAgICB2YXIgc2l0ZU1lbnUgPSBqUXVlcnkoJ2hlYWRlciBtZW51Jyk7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlLW1lbnUnKTtcclxuICAgICAgICBzaXRlTWVudS5zbGlkZVRvZ2dsZSgpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzaXRlTWVudS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgIG1lbnVCdXR0b24ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2l0ZU1lbnUuaXMoZS50YXJnZXQpICYmICFtZW51QnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAhalF1ZXJ5KCdoZWFkZXIgLmJ1dHRvbiBpJykuaXMoZS50YXJnZXQpICYmIHNpdGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHNpdGVNZW51LnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAgIG1lbnVCdXR0b24ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXdzXHJcblxyXG4gICAgdmFyIG5ld3NUZXh0ID0galF1ZXJ5KCcubmV3c19pdGVtIHAnKTtcclxuICAgIHZhciBuZXdzSGVhZGVyID0galF1ZXJ5KCcubmV3c19pdGVtIGgzJyk7XHJcbiAgICB2YXIgbmV3c0hlYWRlckxpbmVIZWlnaHQ7XHJcbiAgICB2YXIgbmV3c1RleHRMaW5lSGVpZ2h0ID0gbmV3c1RleHQuY3NzKCdsaW5lLWhlaWdodCcpO1xyXG4gICAgdmFyIHdpdGhvdXRQaXhlbHNUZXh0ID0gcGFyc2VJbnQobmV3c1RleHRMaW5lSGVpZ2h0KTtcclxuICAgIHZhciB3aXRob3V0UGl4ZWxzSGVhZGVyO1xyXG4gICAgdmFyIG5ld3NIZWFkZXJIZWlnaHQ7XHJcbiAgICB2YXIgdHdvTGluZSA9IHdpdGhvdXRQaXhlbHNUZXh0KjI7XHJcblxyXG4gICAgbmV3c0hlYWRlci5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIG5ld3NIZWFkZXJMaW5lSGVpZ2h0ID0galF1ZXJ5KHRoaXMpLmNzcygnbGluZS1oZWlnaHQnKTtcclxuICAgICAgICB3aXRob3V0UGl4ZWxzSGVhZGVyID0gcGFyc2VJbnQobmV3c0hlYWRlckxpbmVIZWlnaHQpO1xyXG4gICAgICAgIG5ld3NIZWFkZXJIZWlnaHQgPSBqUXVlcnkodGhpcykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmICh3aXRob3V0UGl4ZWxzSGVhZGVyID09IG5ld3NIZWFkZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5jc3MoJ2hlaWdodCcsIHR3b0xpbmUrJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKDIqd2l0aG91dFBpeGVsc0hlYWRlciA9PSBuZXdzSGVhZGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuY3NzKCdoZWlnaHQnLCAodHdvTGluZS8yKSsncHgnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmYXFzIHRhYlxyXG5cclxuICAgIHZhciBmYXFzUXVlc3Rpb25CbG9jayA9IGpRdWVyeSgnLnF1ZXN0aW9uX2Jsb2NrJyk7XHJcbiAgICB2YXIgZmFxc1F1ZXN0aW9uQmxvY2tJbmRleDtcclxuICAgIHZhciBmYXFzVGFiID0galF1ZXJ5KCcuZmFxc190YWJzIC50YWInKTtcclxuICAgIHZhciBmYXFzVGFiSW5kZXg7XHJcbiAgICBqUXVlcnkoZmFxc1F1ZXN0aW9uQmxvY2tbMF0pLmZhZGVJbigxMDApO1xyXG5cclxuICAgIGZhcXNUYWIub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBmYXFzVGFiLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBmYXFzVGFiSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5mYXFzX3RhYnMgLnRhYicpO1xyXG5cclxuICAgICAgICBmYXFzUXVlc3Rpb25CbG9jay5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZhcXNRdWVzdGlvbkJsb2NrSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5xdWVzdGlvbl9ibG9jaycpO1xyXG4gICAgICAgICAgICBpZiAoZmFxc1RhYkluZGV4ID09IGZhcXNRdWVzdGlvbkJsb2NrSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGZhcXNRdWVzdGlvbkJsb2NrLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGF1dG8gdGFic1xyXG5cclxuICAgIHZhciBpbmZvV3JhcHBlciA9IGpRdWVyeSgnLmluZm9fd3JhcHBlcicpO1xyXG4gICAgdmFyIGNhbGNBcnJvdyA9IGpRdWVyeSgnLmF1dG9fdGFic19pdGVtIC5hcnJvdycpO1xyXG4gICAgdmFyIGNhbGNBcnJvd0luZGV4O1xyXG4gICAgdmFyIGF1dG9UYWJzID0galF1ZXJ5KCcuYXV0b190YWJzX2l0ZW0nKTtcclxuICAgIHZhciBhdXRvVGFic0luZGV4O1xyXG4gICAgdmFyIGF1dG9UYWJzQmxvY2sgPSBqUXVlcnkoJy5hdXRvX3RhYnNfYm90dG9tJyk7XHJcbiAgICB2YXIgYXV0b1RhYnNCbG9ja0luZGV4O1xyXG5cclxuICAgIGpRdWVyeShjYWxjQXJyb3dbMF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgalF1ZXJ5KGluZm9XcmFwcGVyWzBdKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgIGpRdWVyeShhdXRvVGFic0Jsb2NrWzBdKS5hZGRDbGFzcygnZmxleCcpO1xyXG5cclxuICAgIGF1dG9UYWJzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYXV0b1RhYnMucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtYXV0by10YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtYXV0by10YWInKTtcclxuICAgICAgICBhdXRvVGFic0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuYXV0b190YWJzX2l0ZW0nKTtcclxuICAgICAgICBjYWxjQXJyb3cucmVtb3ZlQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgY2FsY0Fycm93SW5kZXggPSBqUXVlcnkodGhpcykuZmluZCgnLmFycm93JykuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcblxyXG4gICAgICAgIGF1dG9UYWJzQmxvY2suZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBhdXRvVGFic0Jsb2NrSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5hdXRvX3RhYnNfYm90dG9tJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXV0b1RhYnNJbmRleCA9PSBhdXRvVGFic0Jsb2NrSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGluZm9XcmFwcGVyLnJlbW92ZUNsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGluZm9XcmFwcGVyW2F1dG9UYWJzQmxvY2tJbmRleF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNCbG9jay5yZW1vdmVDbGFzcygnZmxleCcpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdmbGV4Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGF1dG8gY3V2aWxrYSBib3R0b21cclxuXHJcbiAgICB2YXIgcHNldWRvU2VsZWN0ID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCcpO1xyXG4gICAgdmFyIG1pcnJvciA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QgLm1pcnJvcicpO1xyXG4gICAgdmFyIHJhZGlvSW5wdXQgPSBqUXVlcnkoJy5yYWRpb19ibG9jayBpbnB1dCcpO1xyXG4gICAgdmFyIHRhcmdldFRleHQ7XHJcbiAgICB2YXIgY2hlY2tlZElucHV0O1xyXG4gICAgdmFyIHJlc2VydmVkQ2hlY2sgPSB0cnVlO1xyXG5cclxuICAgIC8vIGlmIChqUXVlcnkocmFkaW9JbnB1dFsxMl0pLnByb3AoJ2NoZWNrZWQnLCAndHJ1ZScpKSB7XHJcbiAgICAvLyAgICAgcmVzZXJ2ZWRDaGVjayA9IHRydWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXJ2ZUNoZWNrZXIoZSkge1xyXG5cclxuICAgICAgICB2YXIgaW5mb1dyYXBwZXJDbGFzcyA9IGpRdWVyeShpbmZvV3JhcHBlclswXSkuYXR0cignY2xhc3MnKTtcclxuICAgICAgICB0YXJnZXRUZXh0ID0galF1ZXJ5KGUudGFyZ2V0KS5uZXh0KCkuaHRtbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5yYWRpb19ibG9jayBpbnB1dCcpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvV3JhcHBlckNsYXNzKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coalF1ZXJ5KGUudGFyZ2V0KS5wYXJlbnRzKCcuaW5mb193cmFwcGVyJykpO1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPiAxMiAmJiBqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcucmFkaW9fYmxvY2sgaW5wdXQnKSA8PSAxNikge1xyXG5cclxuICAgICAgICAgICAgcmVzZXJ2ZWRDaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtaXJyb3IuaHRtbCh0YXJnZXRUZXh0KTtcclxuICAgICAgICAgICAgcHNldWRvU2VsZWN0LmFkZENsYXNzKCdvZmYtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc2VydmVkQ2hlY2spO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5yYWRpb19ibG9jayBpbnB1dCcpID09IDEyKSB7XHJcbiAgICAgICAgICAgIHJlc2VydmVkQ2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBwc2V1ZG9TZWxlY3QucmVtb3ZlQ2xhc3MoJ29mZi1zZWxlY3QnKTtcclxuICAgICAgICAgICAgbWlycm9yLmh0bWwoJycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNlcnZlZENoZWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByYWRpb0lucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICByZXNlcnZlQ2hlY2tlcihlKTtcclxuXHJcbiAgICAgICAgcmFkaW9JbnB1dC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNoZWNrZWRJbnB1dCA9IGpRdWVyeSh0aGlzKS5wcm9wKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkSW5wdXQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5hZGRDbGFzcygnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXJyYXkgZm9yIGF1dG9MYWJlbFxyXG5cclxuICAgIHZhciBhdXRvTGFiZWxTaW1wbGUgPSBqUXVlcnkoJy5hdXRvX3RhYnNfYm90dG9tIC5idXR0b25fbW9yZV9sYWJlbCcpO1xyXG4gICAgdmFyIGF1dG9UYWJzTGFiZWwgPSBbalF1ZXJ5KCcuZW5naW5lX2Jsb2NrIGxhYmVsJyksIGpRdWVyeSgnLndlaWdodF9ibG9jayBsYWJlbCcpLCBqUXVlcnkoJy5wYXNzZW5nZXJzX2Jsb2NrIGxhYmVsJyksIGpRdWVyeSgnLm1vdG9fYmxvY2sgbGFiZWwnKSwgalF1ZXJ5KCcudG91cmlzdF9ibG9jayBsYWJlbCcpXTtcclxuXHJcbiAgICAvLyBvYmplY3QgZm9yIGF1dG9MYWJlbFxyXG5cclxuICAgIHZhciBhdXRvTGFiZWxPYmplY3QgPSB7XHJcbiAgICAgICAgbGFiZWxOYW1lOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LWVuZ2luZScsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LXdlaWdodCcsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzFdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LXBhc3NlbmdlcnMnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFsyXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC1tb3RvJyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbM11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtdG91cmlzdCcsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzRdXHJcbiAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgIF19O1xyXG5cclxuICAgIC8vIGluaXRpYWwgZnVuY3Rpb24gZm9yIGF1dG9MYWJlbFxyXG5cclxuICAgIGZ1bmN0aW9uIGxhYmVsVG9nZ2xlKGJsb2NrTmFtZSwgbGFiZWxOYW1lLCBlKSB7XHJcbiAgICAgICAgYmxvY2tOYW1lLnJlbW92ZUNsYXNzKGxhYmVsTmFtZSk7XHJcbiAgICAgICAgalF1ZXJ5KGUudGFyZ2V0KS5hZGRDbGFzcyhsYWJlbE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpID0gMDtcclxuXHJcbiAgICBhdXRvTGFiZWxTaW1wbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGF1dG9UYWJzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYXV0b1RhYnNJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmF1dG9fdGFic19pdGVtJyk7XHJcbiAgICAgICAgICAgIGlmIChhdXRvVGFic0luZGV4ID09IGpRdWVyeShlLnRhcmdldCkucGFyZW50KCkucGFyZW50KCkuaW5kZXgoJy5hdXRvX3RhYnNfYm90dG9tJykpe1xyXG4gICAgICAgICAgICAgICAgbGFiZWxUb2dnbGUoYXV0b0xhYmVsT2JqZWN0LmxhYmVsTmFtZVtpXS5hdXRvVGFic0xhYmVsLCBhdXRvTGFiZWxPYmplY3QubGFiZWxOYW1lW2ldLmVuZ2luZUF0dHIsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaSA9IDBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGluZm9ybWF0aW9uIHRhYlxyXG5cclxuICAgIHZhciBpbmZvcm1hdGlvblRhYiA9IGpRdWVyeSgnLmluZm9fdGFiX2l0ZW0nKTtcclxuICAgIHZhciBkb3dubG9hZEJsb2NrID0galF1ZXJ5KCcuZG93bmxvYWRfYmxvY2snKTtcclxuICAgIHZhciBkb3dubG9hZEJsb2NrSW5kZXg7XHJcbiAgICB2YXIgYWN0aXZlVGFiID0gJ2N1cnJlbnQtdGFiJztcclxuXHJcbiAgICBqUXVlcnkoZG93bmxvYWRCbG9ja1swXSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcblxyXG4gICAgaW5mb3JtYXRpb25UYWIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGRvd25sb2FkQmxvY2suZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgZG93bmxvYWRCbG9ja0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZG93bmxvYWRfYmxvY2snKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRvd25sb2FkQmxvY2tJbmRleCA9PSBqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcuaW5mb190YWJfaXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJsb2NrLnJlbW92ZUNsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxUb2dnbGUoaW5mb3JtYXRpb25UYWIsIGFjdGl2ZVRhYiwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwc2V1byBpbnB1dFxyXG5cclxuICAgIHZhciBwc2V1ZG9pbnB1dCA9IGpRdWVyeSgnI3BzZXVkb19pbnB1dF9sYWJlbCcpO1xyXG5cclxuICAgIHBzZXVkb2lucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcHNldWRvaW5wdXQudG9nZ2xlQ2xhc3MoJ3BzZXVkb19pbnB1dF9hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRlbGl2ZXJ5IHRhYlxyXG5cclxuICAgIHZhciBkZWxpdmVyeVRhYiA9IGpRdWVyeSgnLmRlbGl2ZXJ5X2l0ZW0nKTtcclxuICAgIHZhciBkZWxpdmVyeUJsb2NrID0galF1ZXJ5KCcuZGVsaXZlcnlfdGFiX3dyYXBwZXInKTtcclxuICAgIHZhciBkZWxpdmVyeUJsb2NrSW5kZXg7XHJcblxyXG4gICAgalF1ZXJ5KGRlbGl2ZXJ5QmxvY2tbMF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG5cclxuICAgIGRlbGl2ZXJ5VGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBkZWxpdmVyeUJsb2NrLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5QmxvY2tJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmRlbGl2ZXJ5X3RhYl93cmFwcGVyJyk7XHJcblxyXG4gICAgICAgICAgICBpZihkZWxpdmVyeUJsb2NrSW5kZXggPT0galF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLmRlbGl2ZXJ5X2l0ZW0nKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlCbG9jay5yZW1vdmVDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsVG9nZ2xlKGRlbGl2ZXJ5VGFiLCBhY3RpdmVUYWIsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRvciBzdGF0ZSB0b2dnbGVcclxuXHJcbiAgICB2YXIgZmxvciA9IGpRdWVyeSgnLmZsb3InKTtcclxuICAgIHZhciBmbG9ySW5kZXg7XHJcbiAgICB2YXIgbmV4dFN0YXRlID0galF1ZXJ5KCcuZmxvcl9uZXh0Jyk7XHJcbiAgICB2YXIgcHJldlN0YXRlID0galF1ZXJ5KCcuZmxvcl9wcmV2Jyk7XHJcbiAgICB2YXIgcmV0dXJuU3RhdGUgPSBqUXVlcnkoJy5yZXR1cm4nKTtcclxuICAgIHZhciBzdGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgalF1ZXJ5KGZsb3JbMF0pLmZhZGVJbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZsb3IpO1xyXG5cclxuICAgIG5leHRTdGF0ZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG5cclxuICAgICAgICBzdGF0ZUNvdW50ZXIrKztcclxuICAgICAgICBmbG9yLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmxvckluZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZmxvcicpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmxvckluZGV4KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVDb3VudGVyKycrKysrJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmxvckluZGV4ID09IHN0YXRlQ291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgZmxvci5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmV2U3RhdGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuXHJcbiAgICAgICAgc3RhdGVDb3VudGVyLS07XHJcbiAgICAgICAgZmxvci5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZsb3JJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmZsb3InKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmbG9ySW5kZXggPT0gc3RhdGVDb3VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBmbG9yLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm5TdGF0ZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG5cclxuICAgICAgICBmbG9yLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgalF1ZXJ5KGZsb3JbMF0pLmZhZGVJbigpO1xyXG4gICAgICAgIHN0YXRlQ291bnRlcj0gMDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZhcXMgcXVlc3Rpb25cclxuXHJcbiAgICB2YXIgZmFxc1F1ZXN0aW9uID0galF1ZXJ5KCcucXVlc3Rpb25faXRlbSBzcGFuJyk7XHJcbiAgICB2YXIgZmFxc0Fycm93ID0galF1ZXJ5KCcuYXJyb3cnKTtcclxuXHJcbiAgICBmYXFzQXJyb3cub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmYXFzUXVlc3Rpb24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW5RdWVzdGlvbicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYm9keSBtYXJnaW5cclxuICAgIFxyXG4gICAgdmFyIGhlYWRlciA9IGpRdWVyeSgnaGVhZGVyJyk7XHJcbiAgICB2YXIgaGVhZGVySGVpZ2h0O1xyXG4gICAgdmFyIGJvZHkgPSBqUXVlcnkoJ2JvZHknKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtYXJnaW4oKXtcclxuICAgICAgICBoZWFkZXJIZWlnaHQgPSBoZWFkZXIuaGVpZ2h0KCk7XHJcbiAgICAgICAgYm9keS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQrJ3B4Jyk7XHJcbiAgICAgICAgY2FsY1BvcHVwLmNzcygndG9wJywgaGVhZGVySGVpZ2h0KydweCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmdpbigpO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICAgIG1hcmdpbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gLy8gc3ZnIGNsaWNrXHJcbiAgICAvL1xyXG4gICAgLy8gdmFyIHN2Z1BhcnRfMSA9IGpRdWVyeSgnLmF1dG9JY29uJykuYXR0cignY2xhc3MnKTtcclxuICAgIC8vIHZhciBzdmdQYXJ0XzIgPSBqUXVlcnkoJy5hdXRvSWNvbl9zZWNvbmQnKTtcclxuICAgIC8vIHZhciBzdmdQYXJ0XzMgPSBqUXVlcnkoJy5hdXRvSWNvbl90aGlyZCcpO1xyXG4gICAgLy9cclxuICAgIC8vIGNvbnNvbGUubG9nKGpRdWVyeSgnc3ZnJykpO1xyXG4gICAgLy9cclxuICAgIC8vIGpRdWVyeSgnLmF1dG9fdGFic19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgc3ZnUGFydF8yLmNzcygnc3Ryb2tlJywgJyNmZjRmZjAnKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnY29sb3InKTtcclxuICAgIC8vICAgICBzdmdQYXJ0XzMuY3NzKCdzdHJva2UnLCAnI2ZmNGZmMCcpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gcHNldWRvIHNlbGVjdFxyXG5cclxuICAgIHZhciBvcHRpb24gPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0IC5vcHRpb24nKTtcclxuICAgIHZhciByZXNlcnZlZCA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QgLnJlc2VydmVkJyk7XHJcbiAgICB2YXIgb3B0aW9uV3JhcHBlciA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QgLm9wdGlvbl93cmFwcGVyJyk7XHJcbiAgICB2YXIgb3B0aW9uVGV4dDtcclxuXHJcbiAgICBtaXJyb3Iub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKHJlc2VydmVkQ2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT04nKTtcclxuXHJcbiAgICAgICAgICAgIHBzZXVkb1NlbGVjdC50b2dnbGVDbGFzcygnYWN0aXZlLXNlbGVjdCcpO1xyXG4gICAgICAgICAgICBvcHRpb25XcmFwcGVyLnNsaWRlVG9nZ2xlKDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGpRdWVyeShkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW1pcnJvci5pcyhlLnRhcmdldCkgJiYgb3B0aW9uLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25XcmFwcGVyLnNsaWRlVXAoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHNldWRvU2VsZWN0LnJlbW92ZUNsYXNzKCdhY3RpdmUtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDbGFzcygnY3VycmVudC1vcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1vcHRpb24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb24uZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuYXR0cignY2xhc3MnKSA9PSAnb3B0aW9uIGN1cnJlbnQtb3B0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25UZXh0ID0galF1ZXJ5KHRoaXMpLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3B0aW9uVGV4dCArIFwiX19fX1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlycm9yLmh0bWwob3B0aW9uVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9tYXBcclxuXHJcbnZhciBtYXA7XHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICB2YXIgbXlMYXRMbmcgPSB7bGF0OiA1MC40MTkzMjQsIGxuZzogMzAuNTQzMTk2fTtcclxuXHJcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICAgIGNlbnRlcjogbXlMYXRMbmcsXHJcbiAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFwLnNldE9wdGlvbnMoe3N0eWxlczogc3R5bGVzWydkZWZhdWx0J119KTtcclxuXHJcbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgcG9zaXRpb246IG15TGF0TG5nLFxyXG4gICAgICAgIHRpdGxlOiAnVmljdG9yaWEgRGVudCdcclxuICAgIH0pO1xyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
