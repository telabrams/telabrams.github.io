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
    var calcPopup = jQuery('.calculator_popup');

    calcButton.on('click', function(){
        calcShadow.fadeToggle(300);
        
        jQuery(document).mousedown(function(e){

            var close = jQuery('.calculator_popup .close');
            // calcPopup = jQuery('.calculator_popup');

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

    // hover without line

    var hoverA = jQuery('.about_cuvilka .square .description a');
    hoverA.hover(function(){
        hoverA.addClass('withoutOff');
    },function(){
        hoverA.removeClass('withoutOff')
    });


    // auto cuvilka bottom

    var pseudoSelect = jQuery('.pseudo_select');
    var mirror = jQuery('.pseudo_select .mirror');
    var radioInput = jQuery('.radio_block input');
    var targetText;
    var checkedInput;
    var reservedCheck = true;

    function reserveChecker(e) {

        var infoWrapperClass = jQuery(infoWrapper[0]).attr('class');
        targetText = jQuery(e.target).next().html();


        if (jQuery(e.target).index('.radio_block input') > 12 && jQuery(e.target).index('.radio_block input') <= 16) {

            console.log(reservedCheck);
            reservedCheck = false;
            mirror.html(targetText);
            pseudoSelect.addClass('off-select');
        }


        else if (jQuery(e.target).index('.radio_block input') == 12) {
            console.log(reservedCheck);
            reservedCheck = true;
            pseudoSelect.removeClass('off-select');
            mirror.html('');
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
        jQuery(calcPopup).css('top', headerHeight+'px');
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

        console.log(111);

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


    // taxi yes/no

    var pilga = jQuery('#pilga');
    var taxiNo = jQuery('#taxi_xs');
    var taxiYes = jQuery('#taxi_sm');

    taxiNo.on('click', function(){
        pilga.fadeIn();
    });

    taxiYes.on('click', function(){
        pilga.fadeOut(0);
    });


    // select plugin

    var selectCity = jQuery('.selectForPlugin');
    var selectTz = jQuery('#selectTz');

    selectCity.select2();
    selectTz.select2();

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIHNtb290aCBsb2FkaW5nXHJcblxyXG4gICAgdmFyIHRhcmdldExvYWRpbmcgPSBqUXVlcnkoJ3NlY3Rpb24nKTtcclxuICAgIHZhciBmb290ZXIgPSBqUXVlcnkoJ2Zvb3RlcicpO1xyXG5cclxuICAgIHRhcmdldExvYWRpbmcuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFyZ2V0TG9hZGluZy5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgZm9vdGVyLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHF1ZXN0aW9uIGhvdmVyXHJcblxyXG4gICAgdmFyIGhvdmVyVGFyZ2V0ID0galF1ZXJ5KCcucXVlc3Rpb25fY2lyY2xlJyk7XHJcblxyXG4gICAgaG92ZXJUYXJnZXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgaG92ZXJDbG9zZSA9IGpRdWVyeSh0aGlzKS5uZXh0KCk7XHJcbiAgICAgICAgaG92ZXJDbG9zZS5mYWRlVG9nZ2xlKDApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbG9zZSA9IGpRdWVyeSgnLmNhbGN1bGF0b3JfcG9wdXAgLmNsb3NlJyk7XHJcbiAgICAgICAgICAgIHZhciBob3ZlckFuc3dlciA9IGpRdWVyeSgnLmFuc3dlcl9jaXJjbGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFob3ZlckFuc3dlci5pcyhlLnRhcmdldCkgJiYgIWhvdmVyVGFyZ2V0LmlzKGUudGFyZ2V0KSAmJiBob3ZlckFuc3dlci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBob3ZlckNsb3NlLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdG9yIG9wZW5cclxuXHJcbiAgICB2YXIgY2FsY0J1dHRvbiA9IGpRdWVyeSgnLmNhbGMnKTtcclxuICAgIHZhciBjYWxjU2hhZG93ID0galF1ZXJ5KCcuY2FsY3VsYXRvcl9zaGFkb3cnKTtcclxuICAgIHZhciBjYWxjUG9wdXAgPSBqUXVlcnkoJy5jYWxjdWxhdG9yX3BvcHVwJyk7XHJcblxyXG4gICAgY2FsY0J1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNhbGNTaGFkb3cuZmFkZVRvZ2dsZSgzMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsb3NlID0galF1ZXJ5KCcuY2FsY3VsYXRvcl9wb3B1cCAuY2xvc2UnKTtcclxuICAgICAgICAgICAgLy8gY2FsY1BvcHVwID0galF1ZXJ5KCcuY2FsY3VsYXRvcl9wb3B1cCcpO1xyXG5cclxuICAgICAgICAgICAgY2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNhbGNTaGFkb3cuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFjYWxjUG9wdXAuaXMoZS50YXJnZXQpICYmIGNhbGNQb3B1cC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxjU2hhZG93LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1lbnVcclxuXHJcbiAgICB2YXIgbWVudUJ1dHRvbiA9IGpRdWVyeSgnaGVhZGVyIC5idXR0b24nKTtcclxuICAgIHZhciBzaXRlTWVudSA9IGpRdWVyeSgnaGVhZGVyIG1lbnUnKTtcclxuXHJcbiAgICBtZW51QnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtbWVudScpO1xyXG4gICAgICAgIHNpdGVNZW51LnNsaWRlVG9nZ2xlKCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNpdGVNZW51LnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgbWVudUJ1dHRvbi5yZW1vdmVDbGFzcygnYWN0aXZlLW1lbnUnKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzaXRlTWVudS5pcyhlLnRhcmdldCkgJiYgIW1lbnVCdXR0b24uaXMoZS50YXJnZXQpICYmICFqUXVlcnkoJ2hlYWRlciAuYnV0dG9uIGknKS5pcyhlLnRhcmdldCkgJiYgc2l0ZU1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2l0ZU1lbnUuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgbWVudUJ1dHRvbi5yZW1vdmVDbGFzcygnYWN0aXZlLW1lbnUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5ld3NcclxuXHJcbiAgICB2YXIgbmV3c1RleHQgPSBqUXVlcnkoJy5uZXdzX2l0ZW0gcCcpO1xyXG4gICAgdmFyIG5ld3NIZWFkZXIgPSBqUXVlcnkoJy5uZXdzX2l0ZW0gaDMnKTtcclxuICAgIHZhciBuZXdzSGVhZGVyTGluZUhlaWdodDtcclxuICAgIHZhciBuZXdzVGV4dExpbmVIZWlnaHQgPSBuZXdzVGV4dC5jc3MoJ2xpbmUtaGVpZ2h0Jyk7XHJcbiAgICB2YXIgd2l0aG91dFBpeGVsc1RleHQgPSBwYXJzZUludChuZXdzVGV4dExpbmVIZWlnaHQpO1xyXG4gICAgdmFyIHdpdGhvdXRQaXhlbHNIZWFkZXI7XHJcbiAgICB2YXIgbmV3c0hlYWRlckhlaWdodDtcclxuICAgIHZhciB0d29MaW5lID0gd2l0aG91dFBpeGVsc1RleHQqMjtcclxuXHJcbiAgICBuZXdzSGVhZGVyLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgbmV3c0hlYWRlckxpbmVIZWlnaHQgPSBqUXVlcnkodGhpcykuY3NzKCdsaW5lLWhlaWdodCcpO1xyXG4gICAgICAgIHdpdGhvdXRQaXhlbHNIZWFkZXIgPSBwYXJzZUludChuZXdzSGVhZGVyTGluZUhlaWdodCk7XHJcbiAgICAgICAgbmV3c0hlYWRlckhlaWdodCA9IGpRdWVyeSh0aGlzKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHdpdGhvdXRQaXhlbHNIZWFkZXIgPT0gbmV3c0hlYWRlckhlaWdodCkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLmNzcygnaGVpZ2h0JywgdHdvTGluZSsncHgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoMip3aXRob3V0UGl4ZWxzSGVhZGVyID09IG5ld3NIZWFkZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5jc3MoJ2hlaWdodCcsICh0d29MaW5lLzIpKydweCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZhcXMgdGFiXHJcblxyXG4gICAgdmFyIGZhcXNRdWVzdGlvbkJsb2NrID0galF1ZXJ5KCcucXVlc3Rpb25fYmxvY2snKTtcclxuICAgIHZhciBmYXFzUXVlc3Rpb25CbG9ja0luZGV4O1xyXG4gICAgdmFyIGZhcXNUYWIgPSBqUXVlcnkoJy5mYXFzX3RhYnMgLnRhYicpO1xyXG4gICAgdmFyIGZhcXNUYWJJbmRleDtcclxuICAgIGpRdWVyeShmYXFzUXVlc3Rpb25CbG9ja1swXSkuZmFkZUluKDEwMCk7XHJcblxyXG4gICAgZmFxc1RhYi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZhcXNUYWIucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGZhcXNUYWJJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmZhcXNfdGFicyAudGFiJyk7XHJcblxyXG4gICAgICAgIGZhcXNRdWVzdGlvbkJsb2NrLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmFxc1F1ZXN0aW9uQmxvY2tJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnF1ZXN0aW9uX2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIGlmIChmYXFzVGFiSW5kZXggPT0gZmFxc1F1ZXN0aW9uQmxvY2tJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgZmFxc1F1ZXN0aW9uQmxvY2suZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXV0byB0YWJzXHJcblxyXG4gICAgdmFyIGluZm9XcmFwcGVyID0galF1ZXJ5KCcuaW5mb193cmFwcGVyJyk7XHJcbiAgICB2YXIgY2FsY0Fycm93ID0galF1ZXJ5KCcuYXV0b190YWJzX2l0ZW0gLmFycm93Jyk7XHJcbiAgICB2YXIgY2FsY0Fycm93SW5kZXg7XHJcbiAgICB2YXIgYXV0b1RhYnMgPSBqUXVlcnkoJy5hdXRvX3RhYnNfaXRlbScpO1xyXG4gICAgdmFyIGF1dG9UYWJzSW5kZXg7XHJcbiAgICB2YXIgYXV0b1RhYnNCbG9jayA9IGpRdWVyeSgnLmF1dG9fdGFic19ib3R0b20nKTtcclxuICAgIHZhciBhdXRvVGFic0Jsb2NrSW5kZXg7XHJcblxyXG4gICAgalF1ZXJ5KGNhbGNBcnJvd1swXSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICBqUXVlcnkoaW5mb1dyYXBwZXJbMF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgalF1ZXJ5KGF1dG9UYWJzQmxvY2tbMF0pLmFkZENsYXNzKCdmbGV4Jyk7XHJcblxyXG4gICAgYXV0b1RhYnMub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhdXRvVGFicy5yZW1vdmVDbGFzcygnY3VycmVudC1hdXRvLXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1hdXRvLXRhYicpO1xyXG4gICAgICAgIGF1dG9UYWJzSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5hdXRvX3RhYnNfaXRlbScpO1xyXG4gICAgICAgIGNhbGNBcnJvdy5yZW1vdmVDbGFzcygnYmxvY2snKTtcclxuICAgICAgICBjYWxjQXJyb3dJbmRleCA9IGpRdWVyeSh0aGlzKS5maW5kKCcuYXJyb3cnKS5hZGRDbGFzcygnYmxvY2snKTtcclxuXHJcbiAgICAgICAgYXV0b1RhYnNCbG9jay5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGF1dG9UYWJzQmxvY2tJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmF1dG9fdGFic19ib3R0b20nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhdXRvVGFic0luZGV4ID09IGF1dG9UYWJzQmxvY2tJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaW5mb1dyYXBwZXIucmVtb3ZlQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoaW5mb1dyYXBwZXJbYXV0b1RhYnNCbG9ja0luZGV4XSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0Jsb2NrLnJlbW92ZUNsYXNzKCdmbGV4Jyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2ZsZXgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaG92ZXIgd2l0aG91dCBsaW5lXHJcblxyXG4gICAgdmFyIGhvdmVyQSA9IGpRdWVyeSgnLmFib3V0X2N1dmlsa2EgLnNxdWFyZSAuZGVzY3JpcHRpb24gYScpO1xyXG4gICAgaG92ZXJBLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaG92ZXJBLmFkZENsYXNzKCd3aXRob3V0T2ZmJyk7XHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaG92ZXJBLnJlbW92ZUNsYXNzKCd3aXRob3V0T2ZmJylcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBhdXRvIGN1dmlsa2EgYm90dG9tXHJcblxyXG4gICAgdmFyIHBzZXVkb1NlbGVjdCA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QnKTtcclxuICAgIHZhciBtaXJyb3IgPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0IC5taXJyb3InKTtcclxuICAgIHZhciByYWRpb0lucHV0ID0galF1ZXJ5KCcucmFkaW9fYmxvY2sgaW5wdXQnKTtcclxuICAgIHZhciB0YXJnZXRUZXh0O1xyXG4gICAgdmFyIGNoZWNrZWRJbnB1dDtcclxuICAgIHZhciByZXNlcnZlZENoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNlcnZlQ2hlY2tlcihlKSB7XHJcblxyXG4gICAgICAgIHZhciBpbmZvV3JhcHBlckNsYXNzID0galF1ZXJ5KGluZm9XcmFwcGVyWzBdKS5hdHRyKCdjbGFzcycpO1xyXG4gICAgICAgIHRhcmdldFRleHQgPSBqUXVlcnkoZS50YXJnZXQpLm5leHQoKS5odG1sKCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPiAxMiAmJiBqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcucmFkaW9fYmxvY2sgaW5wdXQnKSA8PSAxNikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzZXJ2ZWRDaGVjayk7XHJcbiAgICAgICAgICAgIHJlc2VydmVkQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWlycm9yLmh0bWwodGFyZ2V0VGV4dCk7XHJcbiAgICAgICAgICAgIHBzZXVkb1NlbGVjdC5hZGRDbGFzcygnb2ZmLXNlbGVjdCcpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5yYWRpb19ibG9jayBpbnB1dCcpID09IDEyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc2VydmVkQ2hlY2spO1xyXG4gICAgICAgICAgICByZXNlcnZlZENoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHNldWRvU2VsZWN0LnJlbW92ZUNsYXNzKCdvZmYtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIG1pcnJvci5odG1sKCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByYWRpb0lucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICByZXNlcnZlQ2hlY2tlcihlKTtcclxuXHJcbiAgICAgICAgcmFkaW9JbnB1dC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNoZWNrZWRJbnB1dCA9IGpRdWVyeSh0aGlzKS5wcm9wKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkSW5wdXQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5hZGRDbGFzcygnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXJyYXkgZm9yIGF1dG9MYWJlbFxyXG5cclxuICAgIHZhciBhdXRvTGFiZWxTaW1wbGUgPSBqUXVlcnkoJy5hdXRvX3RhYnNfYm90dG9tIC5idXR0b25fbW9yZV9sYWJlbCcpO1xyXG4gICAgdmFyIGF1dG9UYWJzTGFiZWwgPSBbalF1ZXJ5KCcuZW5naW5lX2Jsb2NrIGxhYmVsJyksIGpRdWVyeSgnLndlaWdodF9ibG9jayBsYWJlbCcpLCBqUXVlcnkoJy5wYXNzZW5nZXJzX2Jsb2NrIGxhYmVsJyksIGpRdWVyeSgnLm1vdG9fYmxvY2sgbGFiZWwnKSwgalF1ZXJ5KCcudG91cmlzdF9ibG9jayBsYWJlbCcpXTtcclxuXHJcbiAgICAvLyBvYmplY3QgZm9yIGF1dG9MYWJlbFxyXG5cclxuICAgIHZhciBhdXRvTGFiZWxPYmplY3QgPSB7XHJcbiAgICAgICAgbGFiZWxOYW1lOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LWVuZ2luZScsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LXdlaWdodCcsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzFdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LXBhc3NlbmdlcnMnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFsyXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC1tb3RvJyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbM11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtdG91cmlzdCcsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzRdXHJcbiAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgIF19O1xyXG5cclxuICAgIC8vIGluaXRpYWwgZnVuY3Rpb24gZm9yIGF1dG9MYWJlbFxyXG5cclxuICAgIGZ1bmN0aW9uIGxhYmVsVG9nZ2xlKGJsb2NrTmFtZSwgbGFiZWxOYW1lLCBlKSB7XHJcbiAgICAgICAgYmxvY2tOYW1lLnJlbW92ZUNsYXNzKGxhYmVsTmFtZSk7XHJcbiAgICAgICAgalF1ZXJ5KGUudGFyZ2V0KS5hZGRDbGFzcyhsYWJlbE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpID0gMDtcclxuXHJcbiAgICBhdXRvTGFiZWxTaW1wbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGF1dG9UYWJzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYXV0b1RhYnNJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmF1dG9fdGFic19pdGVtJyk7XHJcbiAgICAgICAgICAgIGlmIChhdXRvVGFic0luZGV4ID09IGpRdWVyeShlLnRhcmdldCkucGFyZW50KCkucGFyZW50KCkuaW5kZXgoJy5hdXRvX3RhYnNfYm90dG9tJykpe1xyXG4gICAgICAgICAgICAgICAgbGFiZWxUb2dnbGUoYXV0b0xhYmVsT2JqZWN0LmxhYmVsTmFtZVtpXS5hdXRvVGFic0xhYmVsLCBhdXRvTGFiZWxPYmplY3QubGFiZWxOYW1lW2ldLmVuZ2luZUF0dHIsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaSA9IDBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGluZm9ybWF0aW9uIHRhYlxyXG5cclxuICAgIHZhciBpbmZvcm1hdGlvblRhYiA9IGpRdWVyeSgnLmluZm9fdGFiX2l0ZW0nKTtcclxuICAgIHZhciBkb3dubG9hZEJsb2NrID0galF1ZXJ5KCcuZG93bmxvYWRfYmxvY2snKTtcclxuICAgIHZhciBkb3dubG9hZEJsb2NrSW5kZXg7XHJcbiAgICB2YXIgYWN0aXZlVGFiID0gJ2N1cnJlbnQtdGFiJztcclxuXHJcbiAgICBqUXVlcnkoZG93bmxvYWRCbG9ja1swXSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcblxyXG4gICAgaW5mb3JtYXRpb25UYWIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGRvd25sb2FkQmxvY2suZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgZG93bmxvYWRCbG9ja0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZG93bmxvYWRfYmxvY2snKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRvd25sb2FkQmxvY2tJbmRleCA9PSBqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcuaW5mb190YWJfaXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJsb2NrLnJlbW92ZUNsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxUb2dnbGUoaW5mb3JtYXRpb25UYWIsIGFjdGl2ZVRhYiwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwc2V1byBpbnB1dFxyXG5cclxuICAgIHZhciBwc2V1ZG9pbnB1dCA9IGpRdWVyeSgnI3BzZXVkb19pbnB1dF9sYWJlbCcpO1xyXG5cclxuICAgIHBzZXVkb2lucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcHNldWRvaW5wdXQudG9nZ2xlQ2xhc3MoJ3BzZXVkb19pbnB1dF9hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRlbGl2ZXJ5IHRhYlxyXG5cclxuICAgIHZhciBkZWxpdmVyeVRhYiA9IGpRdWVyeSgnLmRlbGl2ZXJ5X2l0ZW0nKTtcclxuICAgIHZhciBkZWxpdmVyeUJsb2NrID0galF1ZXJ5KCcuZGVsaXZlcnlfdGFiX3dyYXBwZXInKTtcclxuICAgIHZhciBkZWxpdmVyeUJsb2NrSW5kZXg7XHJcblxyXG4gICAgalF1ZXJ5KGRlbGl2ZXJ5QmxvY2tbMF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG5cclxuICAgIGRlbGl2ZXJ5VGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBkZWxpdmVyeUJsb2NrLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5QmxvY2tJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmRlbGl2ZXJ5X3RhYl93cmFwcGVyJyk7XHJcblxyXG4gICAgICAgICAgICBpZihkZWxpdmVyeUJsb2NrSW5kZXggPT0galF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLmRlbGl2ZXJ5X2l0ZW0nKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlCbG9jay5yZW1vdmVDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsVG9nZ2xlKGRlbGl2ZXJ5VGFiLCBhY3RpdmVUYWIsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRvciBzdGF0ZSB0b2dnbGVcclxuXHJcbiAgICB2YXIgZmxvciA9IGpRdWVyeSgnLmZsb3InKTtcclxuICAgIHZhciBmbG9ySW5kZXg7XHJcbiAgICB2YXIgbmV4dFN0YXRlID0galF1ZXJ5KCcuZmxvcl9uZXh0Jyk7XHJcbiAgICB2YXIgcHJldlN0YXRlID0galF1ZXJ5KCcuZmxvcl9wcmV2Jyk7XHJcbiAgICB2YXIgcmV0dXJuU3RhdGUgPSBqUXVlcnkoJy5yZXR1cm4nKTtcclxuICAgIHZhciBzdGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgalF1ZXJ5KGZsb3JbMF0pLmZhZGVJbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZsb3IpO1xyXG5cclxuICAgIG5leHRTdGF0ZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG5cclxuICAgICAgICBzdGF0ZUNvdW50ZXIrKztcclxuICAgICAgICBmbG9yLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmxvckluZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZmxvcicpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmxvckluZGV4KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVDb3VudGVyKycrKysrJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmxvckluZGV4ID09IHN0YXRlQ291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgZmxvci5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmV2U3RhdGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuXHJcbiAgICAgICAgc3RhdGVDb3VudGVyLS07XHJcbiAgICAgICAgZmxvci5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZsb3JJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmZsb3InKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmbG9ySW5kZXggPT0gc3RhdGVDb3VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBmbG9yLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm5TdGF0ZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG5cclxuICAgICAgICBmbG9yLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgalF1ZXJ5KGZsb3JbMF0pLmZhZGVJbigpO1xyXG4gICAgICAgIHN0YXRlQ291bnRlcj0gMDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZhcXMgcXVlc3Rpb25cclxuXHJcbiAgICB2YXIgZmFxc1F1ZXN0aW9uID0galF1ZXJ5KCcucXVlc3Rpb25faXRlbSBzcGFuJyk7XHJcbiAgICB2YXIgZmFxc0Fycm93ID0galF1ZXJ5KCcuYXJyb3cnKTtcclxuXHJcbiAgICBmYXFzQXJyb3cub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmYXFzUXVlc3Rpb24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW5RdWVzdGlvbicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICBqUXVlcnkodGhpcykucHJldigpLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYm9keSBtYXJnaW5cclxuICAgIFxyXG4gICAgdmFyIGhlYWRlciA9IGpRdWVyeSgnaGVhZGVyJyk7XHJcbiAgICB2YXIgaGVhZGVySGVpZ2h0O1xyXG4gICAgdmFyIGJvZHkgPSBqUXVlcnkoJ2JvZHknKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtYXJnaW4oKXtcclxuICAgICAgICBoZWFkZXJIZWlnaHQgPSBoZWFkZXIuaGVpZ2h0KCk7XHJcbiAgICAgICAgYm9keS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQrJ3B4Jyk7XHJcbiAgICAgICAgalF1ZXJ5KGNhbGNQb3B1cCkuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQrJ3B4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFyZ2luKCk7XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbWFyZ2luKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAvLyBzdmcgY2xpY2tcclxuICAgIC8vXHJcbiAgICAvLyB2YXIgc3ZnUGFydF8xID0galF1ZXJ5KCcuYXV0b0ljb24nKS5hdHRyKCdjbGFzcycpO1xyXG4gICAgLy8gdmFyIHN2Z1BhcnRfMiA9IGpRdWVyeSgnLmF1dG9JY29uX3NlY29uZCcpO1xyXG4gICAgLy8gdmFyIHN2Z1BhcnRfMyA9IGpRdWVyeSgnLmF1dG9JY29uX3RoaXJkJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gY29uc29sZS5sb2coalF1ZXJ5KCdzdmcnKSk7XHJcbiAgICAvL1xyXG4gICAgLy8galF1ZXJ5KCcuYXV0b190YWJzX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy9cclxuICAgIC8vICAgICBzdmdQYXJ0XzIuY3NzKCdzdHJva2UnLCAnI2ZmNGZmMCcpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdjb2xvcicpO1xyXG4gICAgLy8gICAgIHN2Z1BhcnRfMy5jc3MoJ3N0cm9rZScsICcjZmY0ZmYwJyk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBwc2V1ZG8gc2VsZWN0XHJcblxyXG4gICAgdmFyIG9wdGlvbiA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QgLm9wdGlvbicpO1xyXG4gICAgdmFyIHJlc2VydmVkID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCAucmVzZXJ2ZWQnKTtcclxuICAgIHZhciBvcHRpb25XcmFwcGVyID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCAub3B0aW9uX3dyYXBwZXInKTtcclxuICAgIHZhciBvcHRpb25UZXh0O1xyXG5cclxuICAgIG1pcnJvci5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygxMTEpO1xyXG5cclxuICAgICAgICBpZiAocmVzZXJ2ZWRDaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPTicpO1xyXG5cclxuICAgICAgICAgICAgcHNldWRvU2VsZWN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIG9wdGlvbldyYXBwZXIuc2xpZGVUb2dnbGUoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbWlycm9yLmlzKGUudGFyZ2V0KSAmJiBvcHRpb24uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbldyYXBwZXIuc2xpZGVVcCgwKTtcclxuICAgICAgICAgICAgICAgICAgICBwc2V1ZG9TZWxlY3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBvcHRpb24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZUNsYXNzKCdjdXJyZW50LW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LW9wdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5hdHRyKCdjbGFzcycpID09ICdvcHRpb24gY3VycmVudC1vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHQgPSBqUXVlcnkodGhpcykuaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25UZXh0ICsgXCJfX19fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaXJyb3IuaHRtbChvcHRpb25UZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIHRheGkgeWVzL25vXHJcblxyXG4gICAgdmFyIHBpbGdhID0galF1ZXJ5KCcjcGlsZ2EnKTtcclxuICAgIHZhciB0YXhpTm8gPSBqUXVlcnkoJyN0YXhpX3hzJyk7XHJcbiAgICB2YXIgdGF4aVllcyA9IGpRdWVyeSgnI3RheGlfc20nKTtcclxuXHJcbiAgICB0YXhpTm8ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwaWxnYS5mYWRlSW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRheGlZZXMub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwaWxnYS5mYWRlT3V0KDApO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIHNlbGVjdCBwbHVnaW5cclxuXHJcbiAgICB2YXIgc2VsZWN0Q2l0eSA9IGpRdWVyeSgnLnNlbGVjdEZvclBsdWdpbicpO1xyXG4gICAgdmFyIHNlbGVjdFR6ID0galF1ZXJ5KCcjc2VsZWN0VHonKTtcclxuXHJcbiAgICBzZWxlY3RDaXR5LnNlbGVjdDIoKTtcclxuICAgIHNlbGVjdFR6LnNlbGVjdDIoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vbWFwXHJcblxyXG52YXIgbWFwO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDE5MzI0LCBsbmc6IDMwLjU0MzE5Nn07XHJcblxyXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICBjZW50ZXI6IG15TGF0TG5nLFxyXG4gICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IHN0eWxlc1snZGVmYXVsdCddfSk7XHJcblxyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuICAgICAgICB0aXRsZTogJ1ZpY3RvcmlhIERlbnQnXHJcbiAgICB9KTtcclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
