
jQuery(document).ready(function(){

    // smooth loading

    var targetLoading = jQuery('section');
    var footer = jQuery('footer');

    targetLoading.imagesLoaded(function(){
        targetLoading.addClass('loaded');
        footer.addClass('loaded');
    });

    // calculator open

    var calcButton = jQuery('.calc');
    var calcShadow = jQuery('.calculator_shadow');
    var calcPopup = jQuery('.calculator_popup');

    calcButton.on('click', function(){
        calcShadow.fadeIn(300);
        
        jQuery(document).mousedown(function(e){

            var close = jQuery('.calculator_popup .close');

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

        jQuery(document).mousedown(function(e){

            if (!siteMenu.is(e.target) && !menuButton.is(e.target) && !jQuery('header .button i').is(e.target) && siteMenu.has(e.target).length == 0) {
                siteMenu.slideUp();
                menuButton.removeClass('active-menu');
            }
        })
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBzbW9vdGggbG9hZGluZ1xyXG5cclxuICAgIHZhciB0YXJnZXRMb2FkaW5nID0galF1ZXJ5KCdzZWN0aW9uJyk7XHJcbiAgICB2YXIgZm9vdGVyID0galF1ZXJ5KCdmb290ZXInKTtcclxuXHJcbiAgICB0YXJnZXRMb2FkaW5nLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIHRhcmdldExvYWRpbmcuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGZvb3Rlci5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdG9yIG9wZW5cclxuXHJcbiAgICB2YXIgY2FsY0J1dHRvbiA9IGpRdWVyeSgnLmNhbGMnKTtcclxuICAgIHZhciBjYWxjU2hhZG93ID0galF1ZXJ5KCcuY2FsY3VsYXRvcl9zaGFkb3cnKTtcclxuICAgIHZhciBjYWxjUG9wdXAgPSBqUXVlcnkoJy5jYWxjdWxhdG9yX3BvcHVwJyk7XHJcblxyXG4gICAgY2FsY0J1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNhbGNTaGFkb3cuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xvc2UgPSBqUXVlcnkoJy5jYWxjdWxhdG9yX3BvcHVwIC5jbG9zZScpO1xyXG5cclxuICAgICAgICAgICAgY2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNhbGNTaGFkb3cuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFjYWxjUG9wdXAuaXMoZS50YXJnZXQpICYmIGNhbGNQb3B1cC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxjU2hhZG93LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWVudVxyXG5cclxuICAgIHZhciBtZW51QnV0dG9uID0galF1ZXJ5KCdoZWFkZXIgLmJ1dHRvbicpO1xyXG4gICAgdmFyIHNpdGVNZW51ID0galF1ZXJ5KCdoZWFkZXIgbWVudScpO1xyXG5cclxuICAgIG1lbnVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XHJcbiAgICAgICAgc2l0ZU1lbnUuc2xpZGVUb2dnbGUoKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNpdGVNZW51LmlzKGUudGFyZ2V0KSAmJiAhbWVudUJ1dHRvbi5pcyhlLnRhcmdldCkgJiYgIWpRdWVyeSgnaGVhZGVyIC5idXR0b24gaScpLmlzKGUudGFyZ2V0KSAmJiBzaXRlTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzaXRlTWVudS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICBtZW51QnV0dG9uLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5ld3NcclxuXHJcbiAgICB2YXIgbmV3c1RleHQgPSBqUXVlcnkoJy5uZXdzX2l0ZW0gcCcpO1xyXG4gICAgdmFyIG5ld3NIZWFkZXIgPSBqUXVlcnkoJy5uZXdzX2l0ZW0gaDMnKTtcclxuICAgIHZhciBuZXdzSGVhZGVyTGluZUhlaWdodDtcclxuICAgIHZhciBuZXdzVGV4dExpbmVIZWlnaHQgPSBuZXdzVGV4dC5jc3MoJ2xpbmUtaGVpZ2h0Jyk7XHJcbiAgICB2YXIgd2l0aG91dFBpeGVsc1RleHQgPSBwYXJzZUludChuZXdzVGV4dExpbmVIZWlnaHQpO1xyXG4gICAgdmFyIHdpdGhvdXRQaXhlbHNIZWFkZXI7XHJcbiAgICB2YXIgbmV3c0hlYWRlckhlaWdodDtcclxuICAgIHZhciB0d29MaW5lID0gd2l0aG91dFBpeGVsc1RleHQqMjtcclxuXHJcbiAgICBuZXdzSGVhZGVyLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgbmV3c0hlYWRlckxpbmVIZWlnaHQgPSBqUXVlcnkodGhpcykuY3NzKCdsaW5lLWhlaWdodCcpO1xyXG4gICAgICAgIHdpdGhvdXRQaXhlbHNIZWFkZXIgPSBwYXJzZUludChuZXdzSGVhZGVyTGluZUhlaWdodCk7XHJcbiAgICAgICAgbmV3c0hlYWRlckhlaWdodCA9IGpRdWVyeSh0aGlzKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHdpdGhvdXRQaXhlbHNIZWFkZXIgPT0gbmV3c0hlYWRlckhlaWdodCkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLmNzcygnaGVpZ2h0JywgdHdvTGluZSsncHgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoMip3aXRob3V0UGl4ZWxzSGVhZGVyID09IG5ld3NIZWFkZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5jc3MoJ2hlaWdodCcsICh0d29MaW5lLzIpKydweCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZhcXMgdGFiXHJcblxyXG4gICAgdmFyIGZhcXNRdWVzdGlvbkJsb2NrID0galF1ZXJ5KCcucXVlc3Rpb25fYmxvY2snKTtcclxuICAgIHZhciBmYXFzUXVlc3Rpb25CbG9ja0luZGV4O1xyXG4gICAgdmFyIGZhcXNUYWIgPSBqUXVlcnkoJy5mYXFzX3RhYnMgLnRhYicpO1xyXG4gICAgdmFyIGZhcXNUYWJJbmRleDtcclxuICAgIGpRdWVyeShmYXFzUXVlc3Rpb25CbG9ja1swXSkuZmFkZUluKDEwMCk7XHJcblxyXG4gICAgZmFxc1RhYi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZhcXNUYWIucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGZhcXNUYWJJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmZhcXNfdGFicyAudGFiJyk7XHJcblxyXG4gICAgICAgIGZhcXNRdWVzdGlvbkJsb2NrLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmFxc1F1ZXN0aW9uQmxvY2tJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLnF1ZXN0aW9uX2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIGlmIChmYXFzVGFiSW5kZXggPT0gZmFxc1F1ZXN0aW9uQmxvY2tJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgZmFxc1F1ZXN0aW9uQmxvY2suZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXV0byB0YWJzXHJcblxyXG4gICAgdmFyIGluZm9XcmFwcGVyID0galF1ZXJ5KCcuaW5mb193cmFwcGVyJyk7XHJcbiAgICB2YXIgY2FsY0Fycm93ID0galF1ZXJ5KCcuYXV0b190YWJzX2l0ZW0gLmFycm93Jyk7XHJcbiAgICB2YXIgY2FsY0Fycm93SW5kZXg7XHJcbiAgICB2YXIgYXV0b1RhYnMgPSBqUXVlcnkoJy5hdXRvX3RhYnNfaXRlbScpO1xyXG4gICAgdmFyIGF1dG9UYWJzSW5kZXg7XHJcbiAgICB2YXIgYXV0b1RhYnNCbG9jayA9IGpRdWVyeSgnLmF1dG9fdGFic19ib3R0b20nKTtcclxuICAgIHZhciBhdXRvVGFic0Jsb2NrSW5kZXg7XHJcblxyXG4gICAgalF1ZXJ5KGNhbGNBcnJvd1swXSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICBqUXVlcnkoaW5mb1dyYXBwZXJbMF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgalF1ZXJ5KGF1dG9UYWJzQmxvY2tbMF0pLmFkZENsYXNzKCdmbGV4Jyk7XHJcblxyXG4gICAgYXV0b1RhYnMub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhdXRvVGFicy5yZW1vdmVDbGFzcygnY3VycmVudC1hdXRvLXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1hdXRvLXRhYicpO1xyXG4gICAgICAgIGF1dG9UYWJzSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5hdXRvX3RhYnNfaXRlbScpO1xyXG4gICAgICAgIGNhbGNBcnJvdy5yZW1vdmVDbGFzcygnYmxvY2snKTtcclxuICAgICAgICBjYWxjQXJyb3dJbmRleCA9IGpRdWVyeSh0aGlzKS5maW5kKCcuYXJyb3cnKS5hZGRDbGFzcygnYmxvY2snKTtcclxuXHJcbiAgICAgICAgYXV0b1RhYnNCbG9jay5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGF1dG9UYWJzQmxvY2tJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmF1dG9fdGFic19ib3R0b20nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhdXRvVGFic0luZGV4ID09IGF1dG9UYWJzQmxvY2tJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaW5mb1dyYXBwZXIucmVtb3ZlQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoaW5mb1dyYXBwZXJbYXV0b1RhYnNCbG9ja0luZGV4XSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0Jsb2NrLnJlbW92ZUNsYXNzKCdmbGV4Jyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2ZsZXgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXV0byBjdXZpbGthIGJvdHRvbVxyXG5cclxuICAgIHZhciBwc2V1ZG9TZWxlY3QgPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0Jyk7XHJcbiAgICB2YXIgbWlycm9yID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCAubWlycm9yJyk7XHJcbiAgICB2YXIgcmFkaW9JbnB1dCA9IGpRdWVyeSgnLnJhZGlvX2Jsb2NrIGlucHV0Jyk7XHJcbiAgICB2YXIgdGFyZ2V0VGV4dDtcclxuICAgIHZhciBjaGVja2VkSW5wdXQ7XHJcbiAgICB2YXIgcmVzZXJ2ZWRDaGVjayA9IHRydWU7XHJcblxyXG4gICAgLy8gaWYgKGpRdWVyeShyYWRpb0lucHV0WzEyXSkucHJvcCgnY2hlY2tlZCcsICd0cnVlJykpIHtcclxuICAgIC8vICAgICByZXNlcnZlZENoZWNrID0gdHJ1ZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNlcnZlQ2hlY2tlcihlKSB7XHJcblxyXG4gICAgICAgIHZhciBpbmZvV3JhcHBlckNsYXNzID0galF1ZXJ5KGluZm9XcmFwcGVyWzBdKS5hdHRyKCdjbGFzcycpO1xyXG4gICAgICAgIHRhcmdldFRleHQgPSBqUXVlcnkoZS50YXJnZXQpLm5leHQoKS5odG1sKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm9XcmFwcGVyQ2xhc3MpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhqUXVlcnkoZS50YXJnZXQpLnBhcmVudHMoJy5pbmZvX3dyYXBwZXInKSk7XHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcucmFkaW9fYmxvY2sgaW5wdXQnKSA+IDEyICYmIGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5yYWRpb19ibG9jayBpbnB1dCcpIDw9IDE2KSB7XHJcblxyXG4gICAgICAgICAgICByZXNlcnZlZENoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1pcnJvci5odG1sKHRhcmdldFRleHQpO1xyXG4gICAgICAgICAgICBwc2V1ZG9TZWxlY3QuYWRkQ2xhc3MoJ29mZi1zZWxlY3QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzZXJ2ZWRDaGVjayk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPT0gMTIpIHtcclxuICAgICAgICAgICAgcmVzZXJ2ZWRDaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIHBzZXVkb1NlbGVjdC5yZW1vdmVDbGFzcygnb2ZmLXNlbGVjdCcpO1xyXG4gICAgICAgICAgICBtaXJyb3IuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc2VydmVkQ2hlY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJhZGlvSW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIHJlc2VydmVDaGVja2VyKGUpO1xyXG5cclxuICAgICAgICByYWRpb0lucHV0LmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2hlY2tlZElucHV0ID0galF1ZXJ5KHRoaXMpLnByb3AoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWRJbnB1dCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLmFkZENsYXNzKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhcnJheSBmb3IgYXV0b0xhYmVsXHJcblxyXG4gICAgdmFyIGF1dG9MYWJlbFNpbXBsZSA9IGpRdWVyeSgnLmF1dG9fdGFic19ib3R0b20gLmJ1dHRvbl9tb3JlX2xhYmVsJyk7XHJcbiAgICB2YXIgYXV0b1RhYnNMYWJlbCA9IFtqUXVlcnkoJy5lbmdpbmVfYmxvY2sgbGFiZWwnKSwgalF1ZXJ5KCcud2VpZ2h0X2Jsb2NrIGxhYmVsJyksIGpRdWVyeSgnLnBhc3NlbmdlcnNfYmxvY2sgbGFiZWwnKSwgalF1ZXJ5KCcubW90b19ibG9jayBsYWJlbCcpLCBqUXVlcnkoJy50b3VyaXN0X2Jsb2NrIGxhYmVsJyldO1xyXG5cclxuICAgIC8vIG9iamVjdCBmb3IgYXV0b0xhYmVsXHJcblxyXG4gICAgdmFyIGF1dG9MYWJlbE9iamVjdCA9IHtcclxuICAgICAgICBsYWJlbE5hbWU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtZW5naW5lJyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbMF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtd2VpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbMV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtcGFzc2VuZ2VycycsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzJdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LW1vdG8nLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFszXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC10b3VyaXN0JyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbNF1cclxuICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgXX07XHJcblxyXG4gICAgLy8gaW5pdGlhbCBmdW5jdGlvbiBmb3IgYXV0b0xhYmVsXHJcblxyXG4gICAgZnVuY3Rpb24gbGFiZWxUb2dnbGUoYmxvY2tOYW1lLCBsYWJlbE5hbWUsIGUpIHtcclxuICAgICAgICBibG9ja05hbWUucmVtb3ZlQ2xhc3MobGFiZWxOYW1lKTtcclxuICAgICAgICBqUXVlcnkoZS50YXJnZXQpLmFkZENsYXNzKGxhYmVsTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIGF1dG9MYWJlbFNpbXBsZS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgYXV0b1RhYnMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBhdXRvVGFic0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuYXV0b190YWJzX2l0ZW0nKTtcclxuICAgICAgICAgICAgaWYgKGF1dG9UYWJzSW5kZXggPT0galF1ZXJ5KGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoKS5pbmRleCgnLmF1dG9fdGFic19ib3R0b20nKSl7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFRvZ2dsZShhdXRvTGFiZWxPYmplY3QubGFiZWxOYW1lW2ldLmF1dG9UYWJzTGFiZWwsIGF1dG9MYWJlbE9iamVjdC5sYWJlbE5hbWVbaV0uZW5naW5lQXR0ciwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpID0gMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5mb3JtYXRpb24gdGFiXHJcblxyXG4gICAgdmFyIGluZm9ybWF0aW9uVGFiID0galF1ZXJ5KCcuaW5mb190YWJfaXRlbScpO1xyXG4gICAgdmFyIGRvd25sb2FkQmxvY2sgPSBqUXVlcnkoJy5kb3dubG9hZF9ibG9jaycpO1xyXG4gICAgdmFyIGRvd25sb2FkQmxvY2tJbmRleDtcclxuICAgIHZhciBhY3RpdmVUYWIgPSAnY3VycmVudC10YWInO1xyXG5cclxuICAgIGpRdWVyeShkb3dubG9hZEJsb2NrWzBdKS5hZGRDbGFzcygnYmxvY2snKTtcclxuXHJcbiAgICBpbmZvcm1hdGlvblRhYi5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZG93bmxvYWRCbG9jay5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICBkb3dubG9hZEJsb2NrSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5kb3dubG9hZF9ibG9jaycpO1xyXG5cclxuICAgICAgICAgICAgaWYoZG93bmxvYWRCbG9ja0luZGV4ID09IGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5pbmZvX3RhYl9pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkQmxvY2sucmVtb3ZlQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFRvZ2dsZShpbmZvcm1hdGlvblRhYiwgYWN0aXZlVGFiLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHBzZXVvIGlucHV0XHJcblxyXG4gICAgdmFyIHBzZXVkb2lucHV0ID0galF1ZXJ5KCcjcHNldWRvX2lucHV0X2xhYmVsJyk7XHJcblxyXG4gICAgcHNldWRvaW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwc2V1ZG9pbnB1dC50b2dnbGVDbGFzcygncHNldWRvX2lucHV0X2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZGVsaXZlcnkgdGFiXHJcblxyXG4gICAgdmFyIGRlbGl2ZXJ5VGFiID0galF1ZXJ5KCcuZGVsaXZlcnlfaXRlbScpO1xyXG4gICAgdmFyIGRlbGl2ZXJ5QmxvY2sgPSBqUXVlcnkoJy5kZWxpdmVyeV90YWJfd3JhcHBlcicpO1xyXG4gICAgdmFyIGRlbGl2ZXJ5QmxvY2tJbmRleDtcclxuXHJcbiAgICBqUXVlcnkoZGVsaXZlcnlCbG9ja1swXSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcblxyXG4gICAgZGVsaXZlcnlUYWIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGRlbGl2ZXJ5QmxvY2suZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgZGVsaXZlcnlCbG9ja0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZGVsaXZlcnlfdGFiX3dyYXBwZXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRlbGl2ZXJ5QmxvY2tJbmRleCA9PSBqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcuZGVsaXZlcnlfaXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeUJsb2NrLnJlbW92ZUNsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxUb2dnbGUoZGVsaXZlcnlUYWIsIGFjdGl2ZVRhYiwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdG9yIHN0YXRlIHRvZ2dsZVxyXG5cclxuICAgIHZhciBmbG9yID0galF1ZXJ5KCcuZmxvcicpO1xyXG4gICAgdmFyIGZsb3JJbmRleDtcclxuICAgIHZhciBuZXh0U3RhdGUgPSBqUXVlcnkoJy5mbG9yX25leHQnKTtcclxuICAgIHZhciBwcmV2U3RhdGUgPSBqUXVlcnkoJy5mbG9yX3ByZXYnKTtcclxuICAgIHZhciByZXR1cm5TdGF0ZSA9IGpRdWVyeSgnLnJldHVybicpO1xyXG4gICAgdmFyIHN0YXRlQ291bnRlciA9IDA7XHJcbiAgICBqUXVlcnkoZmxvclswXSkuZmFkZUluKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmxvcik7XHJcblxyXG4gICAgbmV4dFN0YXRlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgIHN0YXRlQ291bnRlcisrO1xyXG4gICAgICAgIGZsb3IuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmbG9ySW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5mbG9yJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmbG9ySW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZUNvdW50ZXIrJysrKysnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmbG9ySW5kZXggPT0gc3RhdGVDb3VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBmbG9yLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByZXZTdGF0ZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG5cclxuICAgICAgICBzdGF0ZUNvdW50ZXItLTtcclxuICAgICAgICBmbG9yLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmxvckluZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZmxvcicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZsb3JJbmRleCA9PSBzdGF0ZUNvdW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIGZsb3IuZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVyblN0YXRlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgIGZsb3IuZmFkZU91dCgwKTtcclxuICAgICAgICBqUXVlcnkoZmxvclswXSkuZmFkZUluKCk7XHJcbiAgICAgICAgc3RhdGVDb3VudGVyPSAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmFxcyBxdWVzdGlvblxyXG5cclxuICAgIHZhciBmYXFzUXVlc3Rpb24gPSBqUXVlcnkoJy5xdWVzdGlvbl9pdGVtIHNwYW4nKTtcclxuICAgIHZhciBmYXFzQXJyb3cgPSBqUXVlcnkoJy5hcnJvdycpO1xyXG5cclxuICAgIGZhcXNBcnJvdy5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZhcXNRdWVzdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnb3BlblF1ZXN0aW9uJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9ib2R5IG1hcmdpblxyXG4gICAgXHJcbiAgICB2YXIgaGVhZGVyID0galF1ZXJ5KCdoZWFkZXInKTtcclxuICAgIHZhciBoZWFkZXJIZWlnaHQ7XHJcbiAgICB2YXIgYm9keSA9IGpRdWVyeSgnYm9keScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1hcmdpbigpe1xyXG4gICAgICAgIGhlYWRlckhlaWdodCA9IGhlYWRlci5oZWlnaHQoKTtcclxuICAgICAgICBib2R5LmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodCsncHgnKTtcclxuICAgICAgICBjYWxjUG9wdXAuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQrJ3B4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFyZ2luKCk7XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbWFyZ2luKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAvLyBzdmcgY2xpY2tcclxuICAgIC8vXHJcbiAgICAvLyB2YXIgc3ZnUGFydF8xID0galF1ZXJ5KCcuYXV0b0ljb24nKS5hdHRyKCdjbGFzcycpO1xyXG4gICAgLy8gdmFyIHN2Z1BhcnRfMiA9IGpRdWVyeSgnLmF1dG9JY29uX3NlY29uZCcpO1xyXG4gICAgLy8gdmFyIHN2Z1BhcnRfMyA9IGpRdWVyeSgnLmF1dG9JY29uX3RoaXJkJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gY29uc29sZS5sb2coalF1ZXJ5KCdzdmcnKSk7XHJcbiAgICAvL1xyXG4gICAgLy8galF1ZXJ5KCcuYXV0b190YWJzX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy9cclxuICAgIC8vICAgICBzdmdQYXJ0XzIuY3NzKCdzdHJva2UnLCAnI2ZmNGZmMCcpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdjb2xvcicpO1xyXG4gICAgLy8gICAgIHN2Z1BhcnRfMy5jc3MoJ3N0cm9rZScsICcjZmY0ZmYwJyk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBwc2V1ZG8gc2VsZWN0XHJcblxyXG4gICAgdmFyIG9wdGlvbiA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QgLm9wdGlvbicpO1xyXG4gICAgdmFyIHJlc2VydmVkID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCAucmVzZXJ2ZWQnKTtcclxuICAgIHZhciBvcHRpb25XcmFwcGVyID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCAub3B0aW9uX3dyYXBwZXInKTtcclxuICAgIHZhciBvcHRpb25UZXh0O1xyXG5cclxuICAgIG1pcnJvci5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiAocmVzZXJ2ZWRDaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPTicpO1xyXG5cclxuICAgICAgICAgICAgcHNldWRvU2VsZWN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIG9wdGlvbldyYXBwZXIuc2xpZGVUb2dnbGUoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbWlycm9yLmlzKGUudGFyZ2V0KSAmJiBvcHRpb24uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbldyYXBwZXIuc2xpZGVVcCgwKTtcclxuICAgICAgICAgICAgICAgICAgICBwc2V1ZG9TZWxlY3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBvcHRpb24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZUNsYXNzKCdjdXJyZW50LW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LW9wdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5hdHRyKCdjbGFzcycpID09ICdvcHRpb24gY3VycmVudC1vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHQgPSBqUXVlcnkodGhpcykuaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25UZXh0ICsgXCJfX19fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaXJyb3IuaHRtbChvcHRpb25UZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vL21hcFxyXG5cclxudmFyIG1hcDtcclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgIHZhciBteUxhdExuZyA9IHtsYXQ6IDUwLjQxOTMyNCwgbG5nOiAzMC41NDMxOTZ9O1xyXG5cclxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgY2VudGVyOiBteUxhdExuZyxcclxuICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBzdHlsZXNbJ2RlZmF1bHQnXX0pO1xyXG5cclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICBwb3NpdGlvbjogbXlMYXRMbmcsXHJcbiAgICAgICAgdGl0bGU6ICdWaWN0b3JpYSBEZW50J1xyXG4gICAgfSk7XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
