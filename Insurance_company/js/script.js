
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