
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

    calcButton.on('click', function(){
        calcShadow.fadeToggle(300);
        console.log(111);
        
        jQuery(document).click(function(e){
            console.log(222);

            var close = jQuery('.calculator_popup .close');
            var calcPopup = jQuery('.calculator_popup');

            close.on('click', function(){
                calcShadow.fadeOut(300);
            });

            if(!calcPopup.is(e.target) && calcPopup.has(e.target).length == 0) {
                calcShadow.fadeOut(300);
            }

            return false;
        });

        return false;
    });

    // menu

    var menuButton = jQuery('header .button');
    var siteMenu = jQuery('header menu');

    menuButton.on('click', function(){
        jQuery(this).toggleClass('active-menu');
        siteMenu.slideToggle();

        jQuery(document).click(function(e){

            if (!siteMenu.is(e.target) && !menuButton.is(e.target) && !jQuery('header .button i').is(e.target) && siteMenu.has(e.target).length == 0) {
                siteMenu.slideUp();
                menuButton.removeClass('active-menu');
            }

            return false;
        });

        return false;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBzbW9vdGggbG9hZGluZ1xyXG5cclxuICAgIHZhciB0YXJnZXRMb2FkaW5nID0galF1ZXJ5KCdzZWN0aW9uJyk7XHJcbiAgICB2YXIgZm9vdGVyID0galF1ZXJ5KCdmb290ZXInKTtcclxuXHJcbiAgICB0YXJnZXRMb2FkaW5nLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIHRhcmdldExvYWRpbmcuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGZvb3Rlci5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdG9yIG9wZW5cclxuXHJcbiAgICB2YXIgY2FsY0J1dHRvbiA9IGpRdWVyeSgnLmNhbGMnKTtcclxuICAgIHZhciBjYWxjU2hhZG93ID0galF1ZXJ5KCcuY2FsY3VsYXRvcl9zaGFkb3cnKTtcclxuXHJcbiAgICBjYWxjQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2FsY1NoYWRvdy5mYWRlVG9nZ2xlKDMwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTExKTtcclxuICAgICAgICBcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygyMjIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsb3NlID0galF1ZXJ5KCcuY2FsY3VsYXRvcl9wb3B1cCAuY2xvc2UnKTtcclxuICAgICAgICAgICAgdmFyIGNhbGNQb3B1cCA9IGpRdWVyeSgnLmNhbGN1bGF0b3JfcG9wdXAnKTtcclxuXHJcbiAgICAgICAgICAgIGNsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjYWxjU2hhZG93LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZighY2FsY1BvcHVwLmlzKGUudGFyZ2V0KSAmJiBjYWxjUG9wdXAuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2FsY1NoYWRvdy5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWVudVxyXG5cclxuICAgIHZhciBtZW51QnV0dG9uID0galF1ZXJ5KCdoZWFkZXIgLmJ1dHRvbicpO1xyXG4gICAgdmFyIHNpdGVNZW51ID0galF1ZXJ5KCdoZWFkZXIgbWVudScpO1xyXG5cclxuICAgIG1lbnVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XHJcbiAgICAgICAgc2l0ZU1lbnUuc2xpZGVUb2dnbGUoKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2l0ZU1lbnUuaXMoZS50YXJnZXQpICYmICFtZW51QnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAhalF1ZXJ5KCdoZWFkZXIgLmJ1dHRvbiBpJykuaXMoZS50YXJnZXQpICYmIHNpdGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHNpdGVNZW51LnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAgIG1lbnVCdXR0b24ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmV3c1xyXG5cclxuICAgIHZhciBuZXdzVGV4dCA9IGpRdWVyeSgnLm5ld3NfaXRlbSBwJyk7XHJcbiAgICB2YXIgbmV3c0hlYWRlciA9IGpRdWVyeSgnLm5ld3NfaXRlbSBoMycpO1xyXG4gICAgdmFyIG5ld3NIZWFkZXJMaW5lSGVpZ2h0O1xyXG4gICAgdmFyIG5ld3NUZXh0TGluZUhlaWdodCA9IG5ld3NUZXh0LmNzcygnbGluZS1oZWlnaHQnKTtcclxuICAgIHZhciB3aXRob3V0UGl4ZWxzVGV4dCA9IHBhcnNlSW50KG5ld3NUZXh0TGluZUhlaWdodCk7XHJcbiAgICB2YXIgd2l0aG91dFBpeGVsc0hlYWRlcjtcclxuICAgIHZhciBuZXdzSGVhZGVySGVpZ2h0O1xyXG4gICAgdmFyIHR3b0xpbmUgPSB3aXRob3V0UGl4ZWxzVGV4dCoyO1xyXG5cclxuICAgIG5ld3NIZWFkZXIuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBuZXdzSGVhZGVyTGluZUhlaWdodCA9IGpRdWVyeSh0aGlzKS5jc3MoJ2xpbmUtaGVpZ2h0Jyk7XHJcbiAgICAgICAgd2l0aG91dFBpeGVsc0hlYWRlciA9IHBhcnNlSW50KG5ld3NIZWFkZXJMaW5lSGVpZ2h0KTtcclxuICAgICAgICBuZXdzSGVhZGVySGVpZ2h0ID0galF1ZXJ5KHRoaXMpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAod2l0aG91dFBpeGVsc0hlYWRlciA9PSBuZXdzSGVhZGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuY3NzKCdoZWlnaHQnLCB0d29MaW5lKydweCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgyKndpdGhvdXRQaXhlbHNIZWFkZXIgPT0gbmV3c0hlYWRlckhlaWdodCkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLmNzcygnaGVpZ2h0JywgKHR3b0xpbmUvMikrJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmFxcyB0YWJcclxuXHJcbiAgICB2YXIgZmFxc1F1ZXN0aW9uQmxvY2sgPSBqUXVlcnkoJy5xdWVzdGlvbl9ibG9jaycpO1xyXG4gICAgdmFyIGZhcXNRdWVzdGlvbkJsb2NrSW5kZXg7XHJcbiAgICB2YXIgZmFxc1RhYiA9IGpRdWVyeSgnLmZhcXNfdGFicyAudGFiJyk7XHJcbiAgICB2YXIgZmFxc1RhYkluZGV4O1xyXG4gICAgalF1ZXJ5KGZhcXNRdWVzdGlvbkJsb2NrWzBdKS5mYWRlSW4oMTAwKTtcclxuXHJcbiAgICBmYXFzVGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZmFxc1RhYi5yZW1vdmVDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgZmFxc1RhYkluZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZmFxc190YWJzIC50YWInKTtcclxuXHJcbiAgICAgICAgZmFxc1F1ZXN0aW9uQmxvY2suZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmYXFzUXVlc3Rpb25CbG9ja0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcucXVlc3Rpb25fYmxvY2snKTtcclxuICAgICAgICAgICAgaWYgKGZhcXNUYWJJbmRleCA9PSBmYXFzUXVlc3Rpb25CbG9ja0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBmYXFzUXVlc3Rpb25CbG9jay5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhdXRvIHRhYnNcclxuXHJcbiAgICB2YXIgaW5mb1dyYXBwZXIgPSBqUXVlcnkoJy5pbmZvX3dyYXBwZXInKTtcclxuICAgIHZhciBjYWxjQXJyb3cgPSBqUXVlcnkoJy5hdXRvX3RhYnNfaXRlbSAuYXJyb3cnKTtcclxuICAgIHZhciBjYWxjQXJyb3dJbmRleDtcclxuICAgIHZhciBhdXRvVGFicyA9IGpRdWVyeSgnLmF1dG9fdGFic19pdGVtJyk7XHJcbiAgICB2YXIgYXV0b1RhYnNJbmRleDtcclxuICAgIHZhciBhdXRvVGFic0Jsb2NrID0galF1ZXJ5KCcuYXV0b190YWJzX2JvdHRvbScpO1xyXG4gICAgdmFyIGF1dG9UYWJzQmxvY2tJbmRleDtcclxuXHJcbiAgICBqUXVlcnkoY2FsY0Fycm93WzBdKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgIGpRdWVyeShpbmZvV3JhcHBlclswXSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICBqUXVlcnkoYXV0b1RhYnNCbG9ja1swXSkuYWRkQ2xhc3MoJ2ZsZXgnKTtcclxuXHJcbiAgICBhdXRvVGFicy5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGF1dG9UYWJzLnJlbW92ZUNsYXNzKCdjdXJyZW50LWF1dG8tdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LWF1dG8tdGFiJyk7XHJcbiAgICAgICAgYXV0b1RhYnNJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmF1dG9fdGFic19pdGVtJyk7XHJcbiAgICAgICAgY2FsY0Fycm93LnJlbW92ZUNsYXNzKCdibG9jaycpO1xyXG4gICAgICAgIGNhbGNBcnJvd0luZGV4ID0galF1ZXJ5KHRoaXMpLmZpbmQoJy5hcnJvdycpLmFkZENsYXNzKCdibG9jaycpO1xyXG5cclxuICAgICAgICBhdXRvVGFic0Jsb2NrLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYXV0b1RhYnNCbG9ja0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuYXV0b190YWJzX2JvdHRvbScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGF1dG9UYWJzSW5kZXggPT0gYXV0b1RhYnNCbG9ja0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvV3JhcHBlci5yZW1vdmVDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShpbmZvV3JhcHBlclthdXRvVGFic0Jsb2NrSW5kZXhdKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzQmxvY2sucmVtb3ZlQ2xhc3MoJ2ZsZXgnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnZmxleCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhdXRvIGN1dmlsa2EgYm90dG9tXHJcblxyXG4gICAgdmFyIHBzZXVkb1NlbGVjdCA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QnKTtcclxuICAgIHZhciBtaXJyb3IgPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0IC5taXJyb3InKTtcclxuICAgIHZhciByYWRpb0lucHV0ID0galF1ZXJ5KCcucmFkaW9fYmxvY2sgaW5wdXQnKTtcclxuICAgIHZhciB0YXJnZXRUZXh0O1xyXG4gICAgdmFyIGNoZWNrZWRJbnB1dDtcclxuICAgIHZhciByZXNlcnZlZENoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBpZiAoalF1ZXJ5KHJhZGlvSW5wdXRbMTJdKS5wcm9wKCdjaGVja2VkJywgJ3RydWUnKSkge1xyXG4gICAgLy8gICAgIHJlc2VydmVkQ2hlY2sgPSB0cnVlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2VydmVDaGVja2VyKGUpIHtcclxuXHJcbiAgICAgICAgdmFyIGluZm9XcmFwcGVyQ2xhc3MgPSBqUXVlcnkoaW5mb1dyYXBwZXJbMF0pLmF0dHIoJ2NsYXNzJyk7XHJcbiAgICAgICAgdGFyZ2V0VGV4dCA9IGpRdWVyeShlLnRhcmdldCkubmV4dCgpLmh0bWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcucmFkaW9fYmxvY2sgaW5wdXQnKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5mb1dyYXBwZXJDbGFzcyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGpRdWVyeShlLnRhcmdldCkucGFyZW50cygnLmluZm9fd3JhcHBlcicpKTtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5yYWRpb19ibG9jayBpbnB1dCcpID4gMTIgJiYgalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPD0gMTYpIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2VydmVkQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWlycm9yLmh0bWwodGFyZ2V0VGV4dCk7XHJcbiAgICAgICAgICAgIHBzZXVkb1NlbGVjdC5hZGRDbGFzcygnb2ZmLXNlbGVjdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNlcnZlZENoZWNrKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBlbHNlIGlmIChqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcucmFkaW9fYmxvY2sgaW5wdXQnKSA9PSAxMikge1xyXG4gICAgICAgICAgICByZXNlcnZlZENoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHNldWRvU2VsZWN0LnJlbW92ZUNsYXNzKCdvZmYtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIG1pcnJvci5odG1sKCcnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzZXJ2ZWRDaGVjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmFkaW9JbnB1dC5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgcmVzZXJ2ZUNoZWNrZXIoZSk7XHJcblxyXG4gICAgICAgIHJhZGlvSW5wdXQuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjaGVja2VkSW5wdXQgPSBqUXVlcnkodGhpcykucHJvcCgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZElucHV0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFycmF5IGZvciBhdXRvTGFiZWxcclxuXHJcbiAgICB2YXIgYXV0b0xhYmVsU2ltcGxlID0galF1ZXJ5KCcuYXV0b190YWJzX2JvdHRvbSAuYnV0dG9uX21vcmVfbGFiZWwnKTtcclxuICAgIHZhciBhdXRvVGFic0xhYmVsID0gW2pRdWVyeSgnLmVuZ2luZV9ibG9jayBsYWJlbCcpLCBqUXVlcnkoJy53ZWlnaHRfYmxvY2sgbGFiZWwnKSwgalF1ZXJ5KCcucGFzc2VuZ2Vyc19ibG9jayBsYWJlbCcpLCBqUXVlcnkoJy5tb3RvX2Jsb2NrIGxhYmVsJyksIGpRdWVyeSgnLnRvdXJpc3RfYmxvY2sgbGFiZWwnKV07XHJcblxyXG4gICAgLy8gb2JqZWN0IGZvciBhdXRvTGFiZWxcclxuXHJcbiAgICB2YXIgYXV0b0xhYmVsT2JqZWN0ID0ge1xyXG4gICAgICAgIGxhYmVsTmFtZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC1lbmdpbmUnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFswXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC13ZWlnaHQnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFsxXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC1wYXNzZW5nZXJzJyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbMl1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtbW90bycsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzNdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LXRvdXJpc3QnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFs0XVxyXG4gICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICBdfTtcclxuXHJcbiAgICAvLyBpbml0aWFsIGZ1bmN0aW9uIGZvciBhdXRvTGFiZWxcclxuXHJcbiAgICBmdW5jdGlvbiBsYWJlbFRvZ2dsZShibG9ja05hbWUsIGxhYmVsTmFtZSwgZSkge1xyXG4gICAgICAgIGJsb2NrTmFtZS5yZW1vdmVDbGFzcyhsYWJlbE5hbWUpO1xyXG4gICAgICAgIGpRdWVyeShlLnRhcmdldCkuYWRkQ2xhc3MobGFiZWxOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgYXV0b0xhYmVsU2ltcGxlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBhdXRvVGFicy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGF1dG9UYWJzSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5hdXRvX3RhYnNfaXRlbScpO1xyXG4gICAgICAgICAgICBpZiAoYXV0b1RhYnNJbmRleCA9PSBqUXVlcnkoZS50YXJnZXQpLnBhcmVudCgpLnBhcmVudCgpLmluZGV4KCcuYXV0b190YWJzX2JvdHRvbScpKXtcclxuICAgICAgICAgICAgICAgIGxhYmVsVG9nZ2xlKGF1dG9MYWJlbE9iamVjdC5sYWJlbE5hbWVbaV0uYXV0b1RhYnNMYWJlbCwgYXV0b0xhYmVsT2JqZWN0LmxhYmVsTmFtZVtpXS5lbmdpbmVBdHRyLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGkgPSAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbmZvcm1hdGlvbiB0YWJcclxuXHJcbiAgICB2YXIgaW5mb3JtYXRpb25UYWIgPSBqUXVlcnkoJy5pbmZvX3RhYl9pdGVtJyk7XHJcbiAgICB2YXIgZG93bmxvYWRCbG9jayA9IGpRdWVyeSgnLmRvd25sb2FkX2Jsb2NrJyk7XHJcbiAgICB2YXIgZG93bmxvYWRCbG9ja0luZGV4O1xyXG4gICAgdmFyIGFjdGl2ZVRhYiA9ICdjdXJyZW50LXRhYic7XHJcblxyXG4gICAgalF1ZXJ5KGRvd25sb2FkQmxvY2tbMF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG5cclxuICAgIGluZm9ybWF0aW9uVGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBkb3dubG9hZEJsb2NrLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIGRvd25sb2FkQmxvY2tJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmRvd25sb2FkX2Jsb2NrJyk7XHJcblxyXG4gICAgICAgICAgICBpZihkb3dubG9hZEJsb2NrSW5kZXggPT0galF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLmluZm9fdGFiX2l0ZW0nKSkge1xyXG4gICAgICAgICAgICAgICAgZG93bmxvYWRCbG9jay5yZW1vdmVDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsVG9nZ2xlKGluZm9ybWF0aW9uVGFiLCBhY3RpdmVUYWIsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHNldW8gaW5wdXRcclxuXHJcbiAgICB2YXIgcHNldWRvaW5wdXQgPSBqUXVlcnkoJyNwc2V1ZG9faW5wdXRfbGFiZWwnKTtcclxuXHJcbiAgICBwc2V1ZG9pbnB1dC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBzZXVkb2lucHV0LnRvZ2dsZUNsYXNzKCdwc2V1ZG9faW5wdXRfYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBkZWxpdmVyeSB0YWJcclxuXHJcbiAgICB2YXIgZGVsaXZlcnlUYWIgPSBqUXVlcnkoJy5kZWxpdmVyeV9pdGVtJyk7XHJcbiAgICB2YXIgZGVsaXZlcnlCbG9jayA9IGpRdWVyeSgnLmRlbGl2ZXJ5X3RhYl93cmFwcGVyJyk7XHJcbiAgICB2YXIgZGVsaXZlcnlCbG9ja0luZGV4O1xyXG5cclxuICAgIGpRdWVyeShkZWxpdmVyeUJsb2NrWzBdKS5hZGRDbGFzcygnYmxvY2snKTtcclxuXHJcbiAgICBkZWxpdmVyeVRhYi5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZGVsaXZlcnlCbG9jay5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICBkZWxpdmVyeUJsb2NrSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5kZWxpdmVyeV90YWJfd3JhcHBlcicpO1xyXG5cclxuICAgICAgICAgICAgaWYoZGVsaXZlcnlCbG9ja0luZGV4ID09IGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5kZWxpdmVyeV9pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5QmxvY2sucmVtb3ZlQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFRvZ2dsZShkZWxpdmVyeVRhYiwgYWN0aXZlVGFiLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0b3Igc3RhdGUgdG9nZ2xlXHJcblxyXG4gICAgdmFyIGZsb3IgPSBqUXVlcnkoJy5mbG9yJyk7XHJcbiAgICB2YXIgZmxvckluZGV4O1xyXG4gICAgdmFyIG5leHRTdGF0ZSA9IGpRdWVyeSgnLmZsb3JfbmV4dCcpO1xyXG4gICAgdmFyIHByZXZTdGF0ZSA9IGpRdWVyeSgnLmZsb3JfcHJldicpO1xyXG4gICAgdmFyIHJldHVyblN0YXRlID0galF1ZXJ5KCcucmV0dXJuJyk7XHJcbiAgICB2YXIgc3RhdGVDb3VudGVyID0gMDtcclxuICAgIGpRdWVyeShmbG9yWzBdKS5mYWRlSW4oKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmbG9yKTtcclxuXHJcbiAgICBuZXh0U3RhdGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuXHJcbiAgICAgICAgc3RhdGVDb3VudGVyKys7XHJcbiAgICAgICAgZmxvci5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZsb3JJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmZsb3InKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZsb3JJbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlQ291bnRlcisnKysrKycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZsb3JJbmRleCA9PSBzdGF0ZUNvdW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIGZsb3IuZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJldlN0YXRlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgIHN0YXRlQ291bnRlci0tO1xyXG4gICAgICAgIGZsb3IuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmbG9ySW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5mbG9yJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmxvckluZGV4ID09IHN0YXRlQ291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgZmxvci5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuU3RhdGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuXHJcbiAgICAgICAgZmxvci5mYWRlT3V0KDApO1xyXG4gICAgICAgIGpRdWVyeShmbG9yWzBdKS5mYWRlSW4oKTtcclxuICAgICAgICBzdGF0ZUNvdW50ZXI9IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmYXFzIHF1ZXN0aW9uXHJcblxyXG4gICAgdmFyIGZhcXNRdWVzdGlvbiA9IGpRdWVyeSgnLnF1ZXN0aW9uX2l0ZW0gc3BhbicpO1xyXG4gICAgdmFyIGZhcXNBcnJvdyA9IGpRdWVyeSgnLmFycm93Jyk7XHJcblxyXG4gICAgZmFxc0Fycm93Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZmFxc1F1ZXN0aW9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuUXVlc3Rpb24nKTtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2JvZHkgbWFyZ2luXHJcbiAgICBcclxuICAgIHZhciBoZWFkZXIgPSBqUXVlcnkoJ2hlYWRlcicpO1xyXG4gICAgdmFyIGhlYWRlckhlaWdodDtcclxuICAgIHZhciBib2R5ID0galF1ZXJ5KCdib2R5Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFyZ2luKCl7XHJcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0gaGVhZGVyLmhlaWdodCgpO1xyXG4gICAgICAgIGJvZHkuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0KydweCcpO1xyXG4gICAgICAgIGNhbGNQb3B1cC5jc3MoJ3RvcCcsIGhlYWRlckhlaWdodCsncHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJnaW4oKTtcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBtYXJnaW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIC8vIHN2ZyBjbGlja1xyXG4gICAgLy9cclxuICAgIC8vIHZhciBzdmdQYXJ0XzEgPSBqUXVlcnkoJy5hdXRvSWNvbicpLmF0dHIoJ2NsYXNzJyk7XHJcbiAgICAvLyB2YXIgc3ZnUGFydF8yID0galF1ZXJ5KCcuYXV0b0ljb25fc2Vjb25kJyk7XHJcbiAgICAvLyB2YXIgc3ZnUGFydF8zID0galF1ZXJ5KCcuYXV0b0ljb25fdGhpcmQnKTtcclxuICAgIC8vXHJcbiAgICAvLyBjb25zb2xlLmxvZyhqUXVlcnkoJ3N2ZycpKTtcclxuICAgIC8vXHJcbiAgICAvLyBqUXVlcnkoJy5hdXRvX3RhYnNfaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHN2Z1BhcnRfMi5jc3MoJ3N0cm9rZScsICcjZmY0ZmYwJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2NvbG9yJyk7XHJcbiAgICAvLyAgICAgc3ZnUGFydF8zLmNzcygnc3Ryb2tlJywgJyNmZjRmZjAnKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHBzZXVkbyBzZWxlY3RcclxuXHJcbiAgICB2YXIgb3B0aW9uID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCAub3B0aW9uJyk7XHJcbiAgICB2YXIgcmVzZXJ2ZWQgPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0IC5yZXNlcnZlZCcpO1xyXG4gICAgdmFyIG9wdGlvbldyYXBwZXIgPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0IC5vcHRpb25fd3JhcHBlcicpO1xyXG4gICAgdmFyIG9wdGlvblRleHQ7XHJcblxyXG4gICAgbWlycm9yLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmIChyZXNlcnZlZENoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ09OJyk7XHJcblxyXG4gICAgICAgICAgICBwc2V1ZG9TZWxlY3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1zZWxlY3QnKTtcclxuICAgICAgICAgICAgb3B0aW9uV3JhcHBlci5zbGlkZVRvZ2dsZSgwKTtcclxuXHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFtaXJyb3IuaXMoZS50YXJnZXQpICYmIG9wdGlvbi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uV3JhcHBlci5zbGlkZVVwKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBzZXVkb1NlbGVjdC5yZW1vdmVDbGFzcygnYWN0aXZlLXNlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtb3B0aW9uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLmF0dHIoJ2NsYXNzJykgPT0gJ29wdGlvbiBjdXJyZW50LW9wdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGV4dCA9IGpRdWVyeSh0aGlzKS5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvblRleHQgKyBcIl9fX19cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pcnJvci5odG1sKG9wdGlvblRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vbWFwXHJcblxyXG52YXIgbWFwO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDE5MzI0LCBsbmc6IDMwLjU0MzE5Nn07XHJcblxyXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICBjZW50ZXI6IG15TGF0TG5nLFxyXG4gICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IHN0eWxlc1snZGVmYXVsdCddfSk7XHJcblxyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuICAgICAgICB0aXRsZTogJ1ZpY3RvcmlhIERlbnQnXHJcbiAgICB9KTtcclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
