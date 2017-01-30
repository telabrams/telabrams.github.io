// variables for calculating

var optionClass;
var city0;
var city1;
var city2;
var city3;
var city4;
var city5;
var cityCoeficients = [];
var cityCoeficient;
var coeficientJSON;


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

        /*Смена отображения полиса ДЦВ на state_2*/

        if (autoTabsIndex != 0) {
            jQuery('#changing_table').fadeOut(0);
        }

        else {
            jQuery('#changing_table').fadeIn();
        }

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

    var additionalLimit = jQuery('#additional_limit');
    var pseudoSelect = jQuery('.pseudo_select');
    var mirror = jQuery('.pseudo_select .mirror');
    var downloadedDocument = jQuery('.state_3 .col-md-7 span:nth-child(2)');
    var radioInput = jQuery('.radio_block input');
    var targetText;
    var checkedInput;
    var reservedCheck = true;

    function reserveChecker(e) {

        targetText = jQuery(e.target).next().html();

        /*Копирование лимита покрытия*/

        if (jQuery(e.target).index('.radio_block input') == 17) {
            jQuery('#changing_table').fadeOut(0);
        }

        if (jQuery(e.target).index('.radio_block input') == 18) {
            jQuery('#changing_table').fadeIn();
            additionalLimit.html('100&nbsp000');
        }

        if (jQuery(e.target).index('.radio_block input') == 19) {
            jQuery('#changing_table').fadeIn();
            additionalLimit.html('200&nbsp000');
        }

        if (jQuery(e.target).index('.radio_block input') == 20) {
            jQuery('#changing_table').fadeIn();
            additionalLimit.html('500&nbsp000');
        }

        if (jQuery(e.target).index('.radio_block input') > 12 && jQuery(e.target).index('.radio_block input') <= 16) {
            reservedCheck = false;
            // mirror.html(targetText);
            pseudoSelect.addClass('off-select');

            /*Копирование названия документа*/

            if (jQuery(e.target).index('.radio_block input') == 13) {
                mirror.html('Посвідчення пенсіонера');
                downloadedDocument.html('Посвідчення пенсіонера');
            }

            if (jQuery(e.target).index('.radio_block input') == 14) {
                mirror.html('Учасник війни');
                downloadedDocument.html('Посвідчення пенсіонера');
            }

            if (jQuery(e.target).index('.radio_block input') == 15) {
                mirror.html('Посвідчення про інвалідність');
                downloadedDocument.html('Посвідчення пенсіонера');
            }

            if (jQuery(e.target).index('.radio_block input') == 16) {
                mirror.html('Чорнобильське посвідчення');
                downloadedDocument.html('Посвідчення пенсіонера');
            }
        }

        else if (jQuery(e.target).index('.radio_block input') == 12) {
            reservedCheck = true;
            pseudoSelect.removeClass('off-select');
            mirror.html('');
        }

        else {
            return false;
        }
    }

        radioInput.on('click', function(e){
            console.log(jQuery(this).index('.radio_block input'));

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
    var autoTabsLabel = [jQuery('.engine_block label'),
        jQuery('.weight_block label'),
        jQuery('.passengers_block label'),
        jQuery('.moto_block label'),
        jQuery('.tourist_block label')];

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

    // pseudo input

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

        state_2();
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
    var faqsArrow = jQuery('.faqs .arrow');

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

    // pseudo select

    var option = jQuery('.pseudo_select .option');
    var reserved = jQuery('.pseudo_select .reserved');
    var optionWrapper = jQuery('.pseudo_select .option_wrapper');
    var optionText;

    mirror.on('click', function(){

        if (reservedCheck == true) {

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

    // pilga rules(taxi)

    var franchise = jQuery('.insurance_wrapper table tr:nth-child(2) td:nth-child(2)');
    var insuranceCompany = jQuery('.insurance_item');
    var pilga = jQuery('#pilga');
    var taxiNo = jQuery('#taxi_xs');
    var taxiYes = jQuery('#taxi_sm');
    var limit = jQuery('#limit .radio_block label');

    console.log(radioInput);

    autoLabelSimple.on('click', function(){
        if (jQuery(this).prev().attr('id') == 'engine_lg' ||
            jQuery(this).prev().attr('id') == 'engine_xl') {
            pilga.fadeOut(0);
            reservedCheck = true;
            mirror.html('');
            pseudoSelect.removeClass('off-select');
            console.log('off');
        }

        else if ((jQuery(this).prev().attr('id') == 'engine_sm' ||
            jQuery(this).prev().attr('id') == 'engine_xs' ||
            jQuery(this).prev().attr('id') == 'engine_md') &&
            taxiNo.prop('checked') == true) {
            pilga.fadeIn(0);
            reservedCheck = false;
        }

    });

    limit.on('click', function(){

        if (jQuery(this).index('#limit .radio_block label') == 0) {
            console.log('limit');
            jQuery(insuranceCompany[0]).parent().fadeOut(0);
            jQuery(franchise[1]).html('1000 <span class="arno">₴</span>');
            jQuery(franchise[3]).html('1000 <span class="arno">₴</span>');
        }

        else {
            console.log('limit No');
            jQuery(insuranceCompany[0]).parent().fadeIn();
            jQuery(franchise[1]).html('0 <span class="arno">₴</span>');
            jQuery(franchise[3]).html('0 <span class="arno">₴</span>');
        }


    });

    taxiNo.on('click', function(){
        jQuery(insuranceCompany[0]).parent().fadeIn(0);
        jQuery(franchise[1]).html('0 <span class="arno">₴</span>');
        jQuery(franchise[3]).html('1000 <span class="arno">₴</span>');

        if (jQuery('#engine_lg').prop('checked') == true ||
            jQuery('#engine_xl').prop('checked') == true) {
            pilga.fadeOut(0);
            console.log('off');
        }

        else {
            pilga.fadeIn();
        }

    });

    taxiYes.on('click', function(){
        jQuery(insuranceCompany[0]).parent().fadeOut(0);
        jQuery(franchise[1]).html('1000 <span class="arno">₴</span>');
        jQuery(franchise[3]).html('0 <span class="arno">₴</span>');

        if (jQuery('#engine_sm').prop('checked') == true ||
            jQuery('#engine_xs').prop('checked') == true ||
            jQuery('#engine_md').prop('checked') == true){
            pilga.fadeOut(0);
            console.log('on');
        }

        else {
            pilga.fadeOut(0);
        }

    });

    // select plugin

    var selectCity = jQuery('.selectForPlugin');
    var selectTz = jQuery('#selectTz');

    selectCity.select2();
    selectTz.select2();

    // calculating

    // state_1

    var optionArray;
    var sel_optionText;
    var treeItem;
    var itemText;
    coeficientJSON = jQuery.get("js/data1.json", function(data){
        city0 = data.data.city0;
        city1 = data.data.city1;
        city2 = data.data.city2;
        city3 = data.data.city3;
        city4 = data.data.city4;
        city5 = data.data.city5;

        cityCoeficients = [city0, city1, city2, city3, city4, city5];

    });

    jQuery('.block .select2-container').on('click', function(){
        treeItem = jQuery('.select2-results__option');

        treeItem.on('mousedown', function(){
            optionArray = jQuery('.block .selectForPlugin option');
            itemText = jQuery(this).html();

            optionArray.each(function(){
                sel_optionText = jQuery(this).html();
                if (itemText == sel_optionText) {
                    optionClass = jQuery(this).attr('class');
                    optionClass = optionClass.split(' ');

                    var i = 0;

                    jQuery(cityCoeficients).each(function(){
                        var variableName = 'city'+ i;
                        console.log(optionClass[0]);
                        console.log(variableName);

                        if (optionClass[0] == variableName) {
                            cityCoeficient = cityCoeficients[i];
                            console.log(cityCoeficient);
                        }
                        i++;
                    });
                }
            });
        });
    });

    // state_2

    function state_2() {


        var oscpv = jQuery('.insurance_wrapper table tr:first-child td:last-child');
        var dcv = jQuery('.insurance_wrapper table tr:nth-child(3) td:last-child');
        var insuranceFinalPrice = jQuery('.insurance_wrapper table tr:last-child td:last-child');
        var insuranceFinalPriceText;

        var i = 0;

        insuranceCompany.each(function(){

            var oscpvText = jQuery(oscpv[i]).html().split('<');
            oscpvText = parseInt(oscpvText[0]);
            var dcvText = jQuery(dcv[i]).html().split('<');
            dcvText = parseInt(dcvText[0]);
            insuranceFinalPriceText = oscpvText + dcvText;
            jQuery(insuranceFinalPrice[i]).html(''+insuranceFinalPriceText+'<span class="arno">₴</span>');

            console.log(oscpvText);
            console.log(dcvText);

            i++;

        });

    }

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

var insuranceApp = angular.module('insuranceApp', []);

insuranceApp.controller('autoLabel', ['$scope', '$http', function($scope, $http) {

    $http.get('js/data1.json').success(function(data, status, headers, config) {
        console.log('This is Data:',data,'\n\nThis is Status:',status,'\n\nThis is Headers:',headers,'\n\nThis is config:',config);
        $scope.coeficient = data;
    });

    $scope.town_0 = ["Київ"];
    $scope.town_1 = ["Бориспіль", "Боярка", "Бровари","Васильків", "Вишгород", "Вишневе", "Ірпінь"];
    $scope.town_2 = ["Одеса", "Харків"];
    $scope.town_3 = ["Дніпро (Дніпропетровськ)", "Донецьк", "Запоріжжя", "Кривий Ріг", "Львів"];
    $scope.town_4 = ["Миколаїв", "Маріуполь", "Івано-Франківськ", "Луганськ", "Кременчук", "Вінниця", "Тернопіль",
        "Макіївка", "Луцьк", "Севастополь", "Біла Церква", "Сімферополь", "Краматорськ", "Херсон", "Мелітополь",
        "Полтава", "Керч", "Чернігів", "Нікополь", "Черкаси", "Словянськ", "Житомир", "Ужгород", "Суми", "Бердянськ",
        "Хмельницький", "Алчевськ", "Чернівці", "Павлоград", "Горлівка", "Сєвєродонецьк", "Рівне", "Євпаторія",
        "Камянське (Дніпродзержинськ)", "Лисичанськ", "Кропивницький (Кіровоград)", "Камянець-Подільський"];
    $scope.town_5 = ["Авдіївка", "Алупка", "Алушта", "Амвросіївка", "Андрушівка", "Антрацит", "Апостолове",
        "Армянськ", "Арциз", "Балаклія", "Балта", "Бар", "Баранівка", "Барвінкове", "Баришівка", "Бахмач",
        "Бахмут (Артемівськ)", "Баштанка", "Бердичів", "Берегове", "Бережани", "Березань", "Березівка",
        "Березне", "Берислав", "Бершадь", "Білгород-Дністровський", "Білицьке", "Білогірськ", "Білозерське",
        "Біляївка", "Бобринець", "Бобровиця", "Богодухів", "Богуслав", "Болград", "Борзна", "Борислав",
        "Бородянка", "Борщів", "Броди", "Брянка", "Буринь", "Бурштин", "Бутенки", "Бучач", "Валки", "Василівка",
        "Ватутіне", "Вахрушеве", "Велика Олександрівка", "Вижниця", "Вилкове", "Винарівка", "Виноградів", "Високий",
        "Вільнянськ", "Вільшанка", "Вовчанськ", "Вознесенськ", "Волноваха", "Володарське", "Володимир-Волинський",
        "Володимирець", "Вуглегірськ", "Вугледар", "Гадяч", "Гайворон", "Гайсин", "Гайшин", "Генічеськ", "Гірське",
        "Глибока", "Глобине", "Глухів", "Гнівань", "Гола Пристань", "Горностаївка", "Городенка", "Городище", "Городок",
        "Горохів", "Гребінка", "Гуляйполе", "Дебальцеве", "Деражня", "Дергачі", "Джанкой", "Диканька", "Димитров",
        "Дніпрорудне", "Добропілля", "Докучаєвськ", "Долина", "Долинська", "Доманівка", "Дрогобич", "Дубляни", "Дубно",
        "Дубровиця", "Дунаївці", "Енергодар", "Єнакієве", "Жашків", "Жданівка", "Жидачів", "Жмеринка", "Жовква",
        "Жовті Води", "Заводське (Червонозаводське)", "Заліщики", "Збараж", "Звенигородка", "Здолбунів", "Зеленодольськ",
        "Зіньків", "Зміїв", "Знам'янка", "Золоте", "Золотоноша", "Золочів", "Зугрес", "Іванівка", "Іванків", "Ізмаїл",
        "Ізюм", "Ізяслав", "Іллінці", "Іловайськ", "Ірміно", "Іршава", "Ічня", "Кагарлик", "Каланчак", "Калинівка", "Калуш",
        "Камінь-Каширський", "Кам'янка", "Кам'янка-Бузька", "Кам'янка-Дніпровська", "Канів", "Карлівка", "Каховка",
        "Кельменці", "Ківшарівка", "Кілія", "Зарічне (Кіровськ)", "Кіровське", "Кіцмань", "Кобеляки", "Ковель", "Кодима",
        "Козелець", "Козятин", "Коломия", "Комінтернівське", "Горішні Плавні (Комсомольськ)", "Комсомольське (Донецька обл.)",
        "Конотоп", "Коростень", "Коростишів", "Корсунь-Шевченківський", "Корюківка", "Косів", "Костопіль", "Костянтинівка",
        "Котельва", "Котовськ", "Красилів", "Красний Луч", "Красноармійськ", "Красногорівка", "Красноград", "Краснодон",
        "Красноперекопськ", "Краснопілля", "Кременець", "Кремінна", "Крижопіль", "Кролевець", "Кузнецовськ", "Куп'янськ",
        "Курахове", "Ладижин", "Лебедин", "Летичів", "Лиман (Красний Лиман)", "Липовець", "Лозова", "Лохвиця", "Лубни",
        "Лутугине", "Любашівка", "Любомль", "Люботин", "Макарів", "Мала Виска", "Малин", "Мар'їнка", "Марківка", "Мена",
        "Мерефа", "Миколаївка", "Миргород", "Миронівка", "Міжгір'я", "Могилів-Подільський", "Молодогвардійськ",
        "Монастирище", "Мукачеве", "Надвірна", "Наталине", "Немирів", "Нетішин", "Нечаяне", "Ніжин", "Нова Водолага",
        "Нова Каховка", "Нова Одеса", "Новгородка", "Новий Буг", "Нововолинськ", "Новоград-Волинський", "Новогродівка",
        "Новомиргород", "Новомосковськ", "Новоселиця", "Новоукраїнка", "Новояворівськ", "Обухів", "Овідіополь", "Овруч",
        "Олевськ", "Олександрія", "Опішня", "Оріхів", "Острог", "Охтирка", "Очаків", "Первомайськ (Миколаївська обл.)",
        "Первомайськ (Луганська обл.)", "Первомайський", "Перещепине", "Переяслав-Хмельницький", "Пирятин", "Підгайці",
        "Пісочин", "Погребище", "Покотилівка", "Покров (Орджонікідзе)", "Покровське", "Пологи", "Полонне", "Помічна",
        "Попасна", "Попільня", "Прилуки", "Путивль", "П'ятихатки", "Радивилів", "Радомишль", "Рахів", "Рені", "Ровеньки",
        "Родинське", "Роздільна", "Рокитне", "Ромни", "Рубіжне", "Самбір", "Сарни", "Свалява", "Сватове", "Свердловськ",
        "Свеса", "Світловодськ", "Світлодарськ", "Селидове", "Семенівка", "Синельникове", "Сіверськ", "Скадовськ",
        "Славута", "Славутич", "Слобожанське (Комсомольське Харківської обл.)", "Сміла", "Смодна", "Снігурівка",
        "Сніжне", "Снятин", "Сокаль", "Сокиряни", "Соледар", "Солоницівка", "Соснівка", "Софіївська Борщагівка",
        "Ставище", "Старий Крим", "Старий Самбір", "Старобешеве", "Старобільськ", "Старокостянтинів", "Стаханов",
        "Стебник", "Сторожинець", "Стрий", "Судак", "Суходільськ", "Таврійськ", "Тальне", "Тарасівка", "Тараща",
        "Татарбунари", "Теплодар", "Теребовля", "Тетіїв", "Токмак", "Торез", "Торецьк (Дзержинськ)", "Тростянець",
        "Трускавець", "Тульчин", "Тячів", "Українка", "Ульянівка", "Умань", "Фастів", "Феодосія", "Харцизьк",
        "Хмільник", "Ходорів", "Хорол", "Хотин", "Христинівка", "Хуст", "Цюрупинськ", "Часів Яр", "Червоноград",
        "Червонопартизанськ", "Чорноморськ (Іллічівськ)", "Чортків", "Чугуїв", "Чуднів", "Чутове", "Шахтарськ",
        "Шепетівка", "Широке", "Шостка", "Шпола", "Щорс", "Южне", "Южноукраїнськ", "Юнокомунарівськ", "Яворів",
        "Яготин", "Ялта", "Ямпіль", "Яремче", "Ясинувата"];
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyaWFibGVzIGZvciBjYWxjdWxhdGluZ1xyXG5cclxudmFyIG9wdGlvbkNsYXNzO1xyXG52YXIgY2l0eTA7XHJcbnZhciBjaXR5MTtcclxudmFyIGNpdHkyO1xyXG52YXIgY2l0eTM7XHJcbnZhciBjaXR5NDtcclxudmFyIGNpdHk1O1xyXG52YXIgY2l0eUNvZWZpY2llbnRzID0gW107XHJcbnZhciBjaXR5Q29lZmljaWVudDtcclxudmFyIGNvZWZpY2llbnRKU09OO1xyXG5cclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBzbW9vdGggbG9hZGluZ1xyXG5cclxuICAgIHZhciB0YXJnZXRMb2FkaW5nID0galF1ZXJ5KCdzZWN0aW9uJyk7XHJcbiAgICB2YXIgZm9vdGVyID0galF1ZXJ5KCdmb290ZXInKTtcclxuXHJcbiAgICB0YXJnZXRMb2FkaW5nLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIHRhcmdldExvYWRpbmcuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGZvb3Rlci5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBxdWVzdGlvbiBob3ZlclxyXG5cclxuICAgIHZhciBob3ZlclRhcmdldCA9IGpRdWVyeSgnLnF1ZXN0aW9uX2NpcmNsZScpO1xyXG5cclxuICAgIGhvdmVyVGFyZ2V0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGhvdmVyQ2xvc2UgPSBqUXVlcnkodGhpcykubmV4dCgpO1xyXG4gICAgICAgIGhvdmVyQ2xvc2UuZmFkZVRvZ2dsZSgwKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xvc2UgPSBqUXVlcnkoJy5jYWxjdWxhdG9yX3BvcHVwIC5jbG9zZScpO1xyXG4gICAgICAgICAgICB2YXIgaG92ZXJBbnN3ZXIgPSBqUXVlcnkoJy5hbnN3ZXJfY2lyY2xlJyk7XHJcblxyXG4gICAgICAgICAgICBpZighaG92ZXJBbnN3ZXIuaXMoZS50YXJnZXQpICYmICFob3ZlclRhcmdldC5pcyhlLnRhcmdldCkgJiYgaG92ZXJBbnN3ZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDbG9zZS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRvciBvcGVuXHJcblxyXG4gICAgdmFyIGNhbGNCdXR0b24gPSBqUXVlcnkoJy5jYWxjJyk7XHJcbiAgICB2YXIgY2FsY1NoYWRvdyA9IGpRdWVyeSgnLmNhbGN1bGF0b3Jfc2hhZG93Jyk7XHJcbiAgICB2YXIgY2FsY1BvcHVwID0galF1ZXJ5KCcuY2FsY3VsYXRvcl9wb3B1cCcpO1xyXG5cclxuICAgIGNhbGNCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBjYWxjU2hhZG93LmZhZGVUb2dnbGUoMzAwKTtcclxuICAgICAgICBcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbG9zZSA9IGpRdWVyeSgnLmNhbGN1bGF0b3JfcG9wdXAgLmNsb3NlJyk7XHJcbiAgICAgICAgICAgIC8vIGNhbGNQb3B1cCA9IGpRdWVyeSgnLmNhbGN1bGF0b3JfcG9wdXAnKTtcclxuXHJcbiAgICAgICAgICAgIGNsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjYWxjU2hhZG93LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZighY2FsY1BvcHVwLmlzKGUudGFyZ2V0KSAmJiBjYWxjUG9wdXAuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2FsY1NoYWRvdy5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtZW51XHJcblxyXG4gICAgdmFyIG1lbnVCdXR0b24gPSBqUXVlcnkoJ2hlYWRlciAuYnV0dG9uJyk7XHJcbiAgICB2YXIgc2l0ZU1lbnUgPSBqUXVlcnkoJ2hlYWRlciBtZW51Jyk7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlLW1lbnUnKTtcclxuICAgICAgICBzaXRlTWVudS5zbGlkZVRvZ2dsZSgpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzaXRlTWVudS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgIG1lbnVCdXR0b24ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2l0ZU1lbnUuaXMoZS50YXJnZXQpICYmICFtZW51QnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAhalF1ZXJ5KCdoZWFkZXIgLmJ1dHRvbiBpJykuaXMoZS50YXJnZXQpICYmIHNpdGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHNpdGVNZW51LnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAgIG1lbnVCdXR0b24ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXdzXHJcblxyXG4gICAgdmFyIG5ld3NUZXh0ID0galF1ZXJ5KCcubmV3c19pdGVtIHAnKTtcclxuICAgIHZhciBuZXdzSGVhZGVyID0galF1ZXJ5KCcubmV3c19pdGVtIGgzJyk7XHJcbiAgICB2YXIgbmV3c0hlYWRlckxpbmVIZWlnaHQ7XHJcbiAgICB2YXIgbmV3c1RleHRMaW5lSGVpZ2h0ID0gbmV3c1RleHQuY3NzKCdsaW5lLWhlaWdodCcpO1xyXG4gICAgdmFyIHdpdGhvdXRQaXhlbHNUZXh0ID0gcGFyc2VJbnQobmV3c1RleHRMaW5lSGVpZ2h0KTtcclxuICAgIHZhciB3aXRob3V0UGl4ZWxzSGVhZGVyO1xyXG4gICAgdmFyIG5ld3NIZWFkZXJIZWlnaHQ7XHJcbiAgICB2YXIgdHdvTGluZSA9IHdpdGhvdXRQaXhlbHNUZXh0KjI7XHJcblxyXG4gICAgbmV3c0hlYWRlci5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIG5ld3NIZWFkZXJMaW5lSGVpZ2h0ID0galF1ZXJ5KHRoaXMpLmNzcygnbGluZS1oZWlnaHQnKTtcclxuICAgICAgICB3aXRob3V0UGl4ZWxzSGVhZGVyID0gcGFyc2VJbnQobmV3c0hlYWRlckxpbmVIZWlnaHQpO1xyXG4gICAgICAgIG5ld3NIZWFkZXJIZWlnaHQgPSBqUXVlcnkodGhpcykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmICh3aXRob3V0UGl4ZWxzSGVhZGVyID09IG5ld3NIZWFkZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5jc3MoJ2hlaWdodCcsIHR3b0xpbmUrJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKDIqd2l0aG91dFBpeGVsc0hlYWRlciA9PSBuZXdzSGVhZGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuY3NzKCdoZWlnaHQnLCAodHdvTGluZS8yKSsncHgnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmYXFzIHRhYlxyXG5cclxuICAgIHZhciBmYXFzUXVlc3Rpb25CbG9jayA9IGpRdWVyeSgnLnF1ZXN0aW9uX2Jsb2NrJyk7XHJcbiAgICB2YXIgZmFxc1F1ZXN0aW9uQmxvY2tJbmRleDtcclxuICAgIHZhciBmYXFzVGFiID0galF1ZXJ5KCcuZmFxc190YWJzIC50YWInKTtcclxuICAgIHZhciBmYXFzVGFiSW5kZXg7XHJcbiAgICBqUXVlcnkoZmFxc1F1ZXN0aW9uQmxvY2tbMF0pLmZhZGVJbigxMDApO1xyXG5cclxuICAgIGZhcXNUYWIub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBmYXFzVGFiLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBmYXFzVGFiSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5mYXFzX3RhYnMgLnRhYicpO1xyXG5cclxuICAgICAgICBmYXFzUXVlc3Rpb25CbG9jay5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZhcXNRdWVzdGlvbkJsb2NrSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5xdWVzdGlvbl9ibG9jaycpO1xyXG4gICAgICAgICAgICBpZiAoZmFxc1RhYkluZGV4ID09IGZhcXNRdWVzdGlvbkJsb2NrSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGZhcXNRdWVzdGlvbkJsb2NrLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGF1dG8gdGFic1xyXG5cclxuICAgIHZhciBpbmZvV3JhcHBlciA9IGpRdWVyeSgnLmluZm9fd3JhcHBlcicpO1xyXG4gICAgdmFyIGNhbGNBcnJvdyA9IGpRdWVyeSgnLmF1dG9fdGFic19pdGVtIC5hcnJvdycpO1xyXG4gICAgdmFyIGNhbGNBcnJvd0luZGV4O1xyXG4gICAgdmFyIGF1dG9UYWJzID0galF1ZXJ5KCcuYXV0b190YWJzX2l0ZW0nKTtcclxuICAgIHZhciBhdXRvVGFic0luZGV4O1xyXG4gICAgdmFyIGF1dG9UYWJzQmxvY2sgPSBqUXVlcnkoJy5hdXRvX3RhYnNfYm90dG9tJyk7XHJcbiAgICB2YXIgYXV0b1RhYnNCbG9ja0luZGV4O1xyXG5cclxuICAgIGpRdWVyeShjYWxjQXJyb3dbMF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgalF1ZXJ5KGluZm9XcmFwcGVyWzBdKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgIGpRdWVyeShhdXRvVGFic0Jsb2NrWzBdKS5hZGRDbGFzcygnZmxleCcpO1xyXG5cclxuICAgIGF1dG9UYWJzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYXV0b1RhYnMucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtYXV0by10YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtYXV0by10YWInKTtcclxuICAgICAgICBhdXRvVGFic0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuYXV0b190YWJzX2l0ZW0nKTtcclxuICAgICAgICBjYWxjQXJyb3cucmVtb3ZlQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgY2FsY0Fycm93SW5kZXggPSBqUXVlcnkodGhpcykuZmluZCgnLmFycm93JykuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcblxyXG4gICAgICAgIC8q0KHQvNC10L3QsCDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC/0L7Qu9C40YHQsCDQlNCm0JIg0L3QsCBzdGF0ZV8yKi9cclxuXHJcbiAgICAgICAgaWYgKGF1dG9UYWJzSW5kZXggIT0gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNjaGFuZ2luZ190YWJsZScpLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2hhbmdpbmdfdGFibGUnKS5mYWRlSW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF1dG9UYWJzQmxvY2suZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBhdXRvVGFic0Jsb2NrSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5hdXRvX3RhYnNfYm90dG9tJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXV0b1RhYnNJbmRleCA9PSBhdXRvVGFic0Jsb2NrSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGluZm9XcmFwcGVyLnJlbW92ZUNsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGluZm9XcmFwcGVyW2F1dG9UYWJzQmxvY2tJbmRleF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNCbG9jay5yZW1vdmVDbGFzcygnZmxleCcpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdmbGV4Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGhvdmVyIHdpdGhvdXQgbGluZVxyXG5cclxuICAgIHZhciBob3ZlckEgPSBqUXVlcnkoJy5hYm91dF9jdXZpbGthIC5zcXVhcmUgLmRlc2NyaXB0aW9uIGEnKTtcclxuICAgIGhvdmVyQS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGhvdmVyQS5hZGRDbGFzcygnd2l0aG91dE9mZicpO1xyXG4gICAgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgIGhvdmVyQS5yZW1vdmVDbGFzcygnd2l0aG91dE9mZicpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhdXRvIGN1dmlsa2EgYm90dG9tXHJcblxyXG4gICAgdmFyIGFkZGl0aW9uYWxMaW1pdCA9IGpRdWVyeSgnI2FkZGl0aW9uYWxfbGltaXQnKTtcclxuICAgIHZhciBwc2V1ZG9TZWxlY3QgPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0Jyk7XHJcbiAgICB2YXIgbWlycm9yID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCAubWlycm9yJyk7XHJcbiAgICB2YXIgZG93bmxvYWRlZERvY3VtZW50ID0galF1ZXJ5KCcuc3RhdGVfMyAuY29sLW1kLTcgc3BhbjpudGgtY2hpbGQoMiknKTtcclxuICAgIHZhciByYWRpb0lucHV0ID0galF1ZXJ5KCcucmFkaW9fYmxvY2sgaW5wdXQnKTtcclxuICAgIHZhciB0YXJnZXRUZXh0O1xyXG4gICAgdmFyIGNoZWNrZWRJbnB1dDtcclxuICAgIHZhciByZXNlcnZlZENoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNlcnZlQ2hlY2tlcihlKSB7XHJcblxyXG4gICAgICAgIHRhcmdldFRleHQgPSBqUXVlcnkoZS50YXJnZXQpLm5leHQoKS5odG1sKCk7XHJcblxyXG4gICAgICAgIC8q0JrQvtC/0LjRgNC+0LLQsNC90LjQtSDQu9C40LzQuNGC0LAg0L/QvtC60YDRi9GC0LjRjyovXHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcucmFkaW9fYmxvY2sgaW5wdXQnKSA9PSAxNykge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNjaGFuZ2luZ190YWJsZScpLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPT0gMTgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2hhbmdpbmdfdGFibGUnKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgYWRkaXRpb25hbExpbWl0Lmh0bWwoJzEwMCZuYnNwMDAwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPT0gMTkpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2hhbmdpbmdfdGFibGUnKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgYWRkaXRpb25hbExpbWl0Lmh0bWwoJzIwMCZuYnNwMDAwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPT0gMjApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2hhbmdpbmdfdGFibGUnKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgYWRkaXRpb25hbExpbWl0Lmh0bWwoJzUwMCZuYnNwMDAwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPiAxMiAmJiBqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcucmFkaW9fYmxvY2sgaW5wdXQnKSA8PSAxNikge1xyXG4gICAgICAgICAgICByZXNlcnZlZENoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIG1pcnJvci5odG1sKHRhcmdldFRleHQpO1xyXG4gICAgICAgICAgICBwc2V1ZG9TZWxlY3QuYWRkQ2xhc3MoJ29mZi1zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgICAgIC8q0JrQvtC/0LjRgNC+0LLQsNC90LjQtSDQvdCw0LfQstCw0L3QuNGPINC00L7QutGD0LzQtdC90YLQsCovXHJcblxyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIG1pcnJvci5odG1sKCfQn9C+0YHQstGW0LTRh9C10L3QvdGPINC/0LXQvdGB0ZbQvtC90LXRgNCwJyk7XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZGVkRG9jdW1lbnQuaHRtbCgn0J/QvtGB0LLRltC00YfQtdC90L3RjyDQv9C10L3RgdGW0L7QvdC10YDQsCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPT0gMTQpIHtcclxuICAgICAgICAgICAgICAgIG1pcnJvci5odG1sKCfQo9GH0LDRgdC90LjQuiDQstGW0LnQvdC4Jyk7XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZGVkRG9jdW1lbnQuaHRtbCgn0J/QvtGB0LLRltC00YfQtdC90L3RjyDQv9C10L3RgdGW0L7QvdC10YDQsCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykgPT0gMTUpIHtcclxuICAgICAgICAgICAgICAgIG1pcnJvci5odG1sKCfQn9C+0YHQstGW0LTRh9C10L3QvdGPINC/0YDQviDRltC90LLQsNC70ZbQtNC90ZbRgdGC0YwnKTtcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkZWREb2N1bWVudC5odG1sKCfQn9C+0YHQstGW0LTRh9C10L3QvdGPINC/0LXQvdGB0ZbQvtC90LXRgNCwJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcucmFkaW9fYmxvY2sgaW5wdXQnKSA9PSAxNikge1xyXG4gICAgICAgICAgICAgICAgbWlycm9yLmh0bWwoJ9Cn0L7RgNC90L7QsdC40LvRjNGB0YzQutC1INC/0L7RgdCy0ZbQtNGH0LXQvdC90Y8nKTtcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkZWREb2N1bWVudC5odG1sKCfQn9C+0YHQstGW0LTRh9C10L3QvdGPINC/0LXQvdGB0ZbQvtC90LXRgNCwJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5yYWRpb19ibG9jayBpbnB1dCcpID09IDEyKSB7XHJcbiAgICAgICAgICAgIHJlc2VydmVkQ2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBwc2V1ZG9TZWxlY3QucmVtb3ZlQ2xhc3MoJ29mZi1zZWxlY3QnKTtcclxuICAgICAgICAgICAgbWlycm9yLmh0bWwoJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgICAgIHJhZGlvSW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpRdWVyeSh0aGlzKS5pbmRleCgnLnJhZGlvX2Jsb2NrIGlucHV0JykpO1xyXG5cclxuICAgICAgICAgICAgcmVzZXJ2ZUNoZWNrZXIoZSk7XHJcblxyXG4gICAgICAgICAgICByYWRpb0lucHV0LmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRJbnB1dCA9IGpRdWVyeSh0aGlzKS5wcm9wKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZElucHV0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLmFkZENsYXNzKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBhcnJheSBmb3IgYXV0b0xhYmVsXHJcblxyXG4gICAgdmFyIGF1dG9MYWJlbFNpbXBsZSA9IGpRdWVyeSgnLmF1dG9fdGFic19ib3R0b20gLmJ1dHRvbl9tb3JlX2xhYmVsJyk7XHJcbiAgICB2YXIgYXV0b1RhYnNMYWJlbCA9IFtqUXVlcnkoJy5lbmdpbmVfYmxvY2sgbGFiZWwnKSxcclxuICAgICAgICBqUXVlcnkoJy53ZWlnaHRfYmxvY2sgbGFiZWwnKSxcclxuICAgICAgICBqUXVlcnkoJy5wYXNzZW5nZXJzX2Jsb2NrIGxhYmVsJyksXHJcbiAgICAgICAgalF1ZXJ5KCcubW90b19ibG9jayBsYWJlbCcpLFxyXG4gICAgICAgIGpRdWVyeSgnLnRvdXJpc3RfYmxvY2sgbGFiZWwnKV07XHJcblxyXG4gICAgLy8gb2JqZWN0IGZvciBhdXRvTGFiZWxcclxuXHJcbiAgICB2YXIgYXV0b0xhYmVsT2JqZWN0ID0ge1xyXG4gICAgICAgIGxhYmVsTmFtZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC1lbmdpbmUnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFswXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC13ZWlnaHQnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFsxXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC1wYXNzZW5nZXJzJyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbMl1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtbW90bycsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzNdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LXRvdXJpc3QnLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFs0XVxyXG4gICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICBdfTtcclxuXHJcbiAgICAvLyBpbml0aWFsIGZ1bmN0aW9uIGZvciBhdXRvTGFiZWxcclxuXHJcbiAgICBmdW5jdGlvbiBsYWJlbFRvZ2dsZShibG9ja05hbWUsIGxhYmVsTmFtZSwgZSkge1xyXG4gICAgICAgIGJsb2NrTmFtZS5yZW1vdmVDbGFzcyhsYWJlbE5hbWUpO1xyXG4gICAgICAgIGpRdWVyeShlLnRhcmdldCkuYWRkQ2xhc3MobGFiZWxOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgYXV0b0xhYmVsU2ltcGxlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBhdXRvVGFicy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGF1dG9UYWJzSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5hdXRvX3RhYnNfaXRlbScpO1xyXG4gICAgICAgICAgICBpZiAoYXV0b1RhYnNJbmRleCA9PSBqUXVlcnkoZS50YXJnZXQpLnBhcmVudCgpLnBhcmVudCgpLmluZGV4KCcuYXV0b190YWJzX2JvdHRvbScpKXtcclxuICAgICAgICAgICAgICAgIGxhYmVsVG9nZ2xlKGF1dG9MYWJlbE9iamVjdC5sYWJlbE5hbWVbaV0uYXV0b1RhYnNMYWJlbCwgYXV0b0xhYmVsT2JqZWN0LmxhYmVsTmFtZVtpXS5lbmdpbmVBdHRyLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGkgPSAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbmZvcm1hdGlvbiB0YWJcclxuXHJcbiAgICB2YXIgaW5mb3JtYXRpb25UYWIgPSBqUXVlcnkoJy5pbmZvX3RhYl9pdGVtJyk7XHJcbiAgICB2YXIgZG93bmxvYWRCbG9jayA9IGpRdWVyeSgnLmRvd25sb2FkX2Jsb2NrJyk7XHJcbiAgICB2YXIgZG93bmxvYWRCbG9ja0luZGV4O1xyXG4gICAgdmFyIGFjdGl2ZVRhYiA9ICdjdXJyZW50LXRhYic7XHJcblxyXG4gICAgalF1ZXJ5KGRvd25sb2FkQmxvY2tbMF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG5cclxuICAgIGluZm9ybWF0aW9uVGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBkb3dubG9hZEJsb2NrLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIGRvd25sb2FkQmxvY2tJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmRvd25sb2FkX2Jsb2NrJyk7XHJcblxyXG4gICAgICAgICAgICBpZihkb3dubG9hZEJsb2NrSW5kZXggPT0galF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLmluZm9fdGFiX2l0ZW0nKSkge1xyXG4gICAgICAgICAgICAgICAgZG93bmxvYWRCbG9jay5yZW1vdmVDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsVG9nZ2xlKGluZm9ybWF0aW9uVGFiLCBhY3RpdmVUYWIsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHNldWRvIGlucHV0XHJcblxyXG4gICAgdmFyIHBzZXVkb2lucHV0ID0galF1ZXJ5KCcjcHNldWRvX2lucHV0X2xhYmVsJyk7XHJcblxyXG4gICAgcHNldWRvaW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwc2V1ZG9pbnB1dC50b2dnbGVDbGFzcygncHNldWRvX2lucHV0X2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZGVsaXZlcnkgdGFiXHJcblxyXG4gICAgdmFyIGRlbGl2ZXJ5VGFiID0galF1ZXJ5KCcuZGVsaXZlcnlfaXRlbScpO1xyXG4gICAgdmFyIGRlbGl2ZXJ5QmxvY2sgPSBqUXVlcnkoJy5kZWxpdmVyeV90YWJfd3JhcHBlcicpO1xyXG4gICAgdmFyIGRlbGl2ZXJ5QmxvY2tJbmRleDtcclxuXHJcbiAgICBqUXVlcnkoZGVsaXZlcnlCbG9ja1swXSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcblxyXG4gICAgZGVsaXZlcnlUYWIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGRlbGl2ZXJ5QmxvY2suZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgZGVsaXZlcnlCbG9ja0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZGVsaXZlcnlfdGFiX3dyYXBwZXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRlbGl2ZXJ5QmxvY2tJbmRleCA9PSBqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcuZGVsaXZlcnlfaXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeUJsb2NrLnJlbW92ZUNsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxUb2dnbGUoZGVsaXZlcnlUYWIsIGFjdGl2ZVRhYiwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdG9yIHN0YXRlIHRvZ2dsZVxyXG5cclxuICAgIHZhciBmbG9yID0galF1ZXJ5KCcuZmxvcicpO1xyXG4gICAgdmFyIGZsb3JJbmRleDtcclxuICAgIHZhciBuZXh0U3RhdGUgPSBqUXVlcnkoJy5mbG9yX25leHQnKTtcclxuICAgIHZhciBwcmV2U3RhdGUgPSBqUXVlcnkoJy5mbG9yX3ByZXYnKTtcclxuICAgIHZhciByZXR1cm5TdGF0ZSA9IGpRdWVyeSgnLnJldHVybicpO1xyXG4gICAgdmFyIHN0YXRlQ291bnRlciA9IDA7XHJcbiAgICBqUXVlcnkoZmxvclswXSkuZmFkZUluKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmxvcik7XHJcblxyXG4gICAgbmV4dFN0YXRlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgIHN0YXRlQ291bnRlcisrO1xyXG4gICAgICAgIGZsb3IuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmbG9ySW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5mbG9yJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmbG9ySW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZUNvdW50ZXIrJysrKysnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmbG9ySW5kZXggPT0gc3RhdGVDb3VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBmbG9yLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3RhdGVfMigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJldlN0YXRlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgIHN0YXRlQ291bnRlci0tO1xyXG4gICAgICAgIGZsb3IuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmbG9ySW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5mbG9yJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmxvckluZGV4ID09IHN0YXRlQ291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgZmxvci5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuU3RhdGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuXHJcbiAgICAgICAgZmxvci5mYWRlT3V0KDApO1xyXG4gICAgICAgIGpRdWVyeShmbG9yWzBdKS5mYWRlSW4oKTtcclxuICAgICAgICBzdGF0ZUNvdW50ZXI9IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmYXFzIHF1ZXN0aW9uXHJcblxyXG4gICAgdmFyIGZhcXNRdWVzdGlvbiA9IGpRdWVyeSgnLnF1ZXN0aW9uX2l0ZW0gc3BhbicpO1xyXG4gICAgdmFyIGZhcXNBcnJvdyA9IGpRdWVyeSgnLmZhcXMgLmFycm93Jyk7XHJcblxyXG4gICAgZmFxc0Fycm93Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZmFxc1F1ZXN0aW9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuUXVlc3Rpb24nKTtcclxuICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2JvZHkgbWFyZ2luXHJcbiAgICBcclxuICAgIHZhciBoZWFkZXIgPSBqUXVlcnkoJ2hlYWRlcicpO1xyXG4gICAgdmFyIGhlYWRlckhlaWdodDtcclxuICAgIHZhciBib2R5ID0galF1ZXJ5KCdib2R5Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFyZ2luKCl7XHJcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0gaGVhZGVyLmhlaWdodCgpO1xyXG4gICAgICAgIGJvZHkuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0KydweCcpO1xyXG4gICAgICAgIGpRdWVyeShjYWxjUG9wdXApLmNzcygndG9wJywgaGVhZGVySGVpZ2h0KydweCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmdpbigpO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICAgIG1hcmdpbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHNldWRvIHNlbGVjdFxyXG5cclxuICAgIHZhciBvcHRpb24gPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0IC5vcHRpb24nKTtcclxuICAgIHZhciByZXNlcnZlZCA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QgLnJlc2VydmVkJyk7XHJcbiAgICB2YXIgb3B0aW9uV3JhcHBlciA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QgLm9wdGlvbl93cmFwcGVyJyk7XHJcbiAgICB2YXIgb3B0aW9uVGV4dDtcclxuXHJcbiAgICBtaXJyb3Iub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKHJlc2VydmVkQ2hlY2sgPT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgcHNldWRvU2VsZWN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIG9wdGlvbldyYXBwZXIuc2xpZGVUb2dnbGUoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbWlycm9yLmlzKGUudGFyZ2V0KSAmJiBvcHRpb24uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbldyYXBwZXIuc2xpZGVVcCgwKTtcclxuICAgICAgICAgICAgICAgICAgICBwc2V1ZG9TZWxlY3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBvcHRpb24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZUNsYXNzKCdjdXJyZW50LW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LW9wdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5hdHRyKCdjbGFzcycpID09ICdvcHRpb24gY3VycmVudC1vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHQgPSBqUXVlcnkodGhpcykuaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25UZXh0ICsgXCJfX19fXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaXJyb3IuaHRtbChvcHRpb25UZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcGlsZ2EgcnVsZXModGF4aSlcclxuXHJcbiAgICB2YXIgZnJhbmNoaXNlID0galF1ZXJ5KCcuaW5zdXJhbmNlX3dyYXBwZXIgdGFibGUgdHI6bnRoLWNoaWxkKDIpIHRkOm50aC1jaGlsZCgyKScpO1xyXG4gICAgdmFyIGluc3VyYW5jZUNvbXBhbnkgPSBqUXVlcnkoJy5pbnN1cmFuY2VfaXRlbScpO1xyXG4gICAgdmFyIHBpbGdhID0galF1ZXJ5KCcjcGlsZ2EnKTtcclxuICAgIHZhciB0YXhpTm8gPSBqUXVlcnkoJyN0YXhpX3hzJyk7XHJcbiAgICB2YXIgdGF4aVllcyA9IGpRdWVyeSgnI3RheGlfc20nKTtcclxuICAgIHZhciBsaW1pdCA9IGpRdWVyeSgnI2xpbWl0IC5yYWRpb19ibG9jayBsYWJlbCcpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJhZGlvSW5wdXQpO1xyXG5cclxuICAgIGF1dG9MYWJlbFNpbXBsZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkodGhpcykucHJldigpLmF0dHIoJ2lkJykgPT0gJ2VuZ2luZV9sZycgfHxcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS5hdHRyKCdpZCcpID09ICdlbmdpbmVfeGwnKSB7XHJcbiAgICAgICAgICAgIHBpbGdhLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgIHJlc2VydmVkQ2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBtaXJyb3IuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIHBzZXVkb1NlbGVjdC5yZW1vdmVDbGFzcygnb2ZmLXNlbGVjdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb2ZmJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmICgoalF1ZXJ5KHRoaXMpLnByZXYoKS5hdHRyKCdpZCcpID09ICdlbmdpbmVfc20nIHx8XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuYXR0cignaWQnKSA9PSAnZW5naW5lX3hzJyB8fFxyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucHJldigpLmF0dHIoJ2lkJykgPT0gJ2VuZ2luZV9tZCcpICYmXHJcbiAgICAgICAgICAgIHRheGlOby5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwaWxnYS5mYWRlSW4oMCk7XHJcbiAgICAgICAgICAgIHJlc2VydmVkQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgbGltaXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5pbmRleCgnI2xpbWl0IC5yYWRpb19ibG9jayBsYWJlbCcpID09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpbWl0Jyk7XHJcbiAgICAgICAgICAgIGpRdWVyeShpbnN1cmFuY2VDb21wYW55WzBdKS5wYXJlbnQoKS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoZnJhbmNoaXNlWzFdKS5odG1sKCcxMDAwIDxzcGFuIGNsYXNzPVwiYXJub1wiPuKCtDwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgalF1ZXJ5KGZyYW5jaGlzZVszXSkuaHRtbCgnMTAwMCA8c3BhbiBjbGFzcz1cImFybm9cIj7igrQ8L3NwYW4+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpbWl0IE5vJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeShpbnN1cmFuY2VDb21wYW55WzBdKS5wYXJlbnQoKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgalF1ZXJ5KGZyYW5jaGlzZVsxXSkuaHRtbCgnMCA8c3BhbiBjbGFzcz1cImFybm9cIj7igrQ8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgIGpRdWVyeShmcmFuY2hpc2VbM10pLmh0bWwoJzAgPHNwYW4gY2xhc3M9XCJhcm5vXCI+4oK0PC9zcGFuPicpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgdGF4aU5vLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KGluc3VyYW5jZUNvbXBhbnlbMF0pLnBhcmVudCgpLmZhZGVJbigwKTtcclxuICAgICAgICBqUXVlcnkoZnJhbmNoaXNlWzFdKS5odG1sKCcwIDxzcGFuIGNsYXNzPVwiYXJub1wiPuKCtDwvc3Bhbj4nKTtcclxuICAgICAgICBqUXVlcnkoZnJhbmNoaXNlWzNdKS5odG1sKCcxMDAwIDxzcGFuIGNsYXNzPVwiYXJub1wiPuKCtDwvc3Bhbj4nKTtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSgnI2VuZ2luZV9sZycpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlIHx8XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2VuZ2luZV94bCcpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBpbGdhLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvZmYnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwaWxnYS5mYWRlSW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgdGF4aVllcy5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeShpbnN1cmFuY2VDb21wYW55WzBdKS5wYXJlbnQoKS5mYWRlT3V0KDApO1xyXG4gICAgICAgIGpRdWVyeShmcmFuY2hpc2VbMV0pLmh0bWwoJzEwMDAgPHNwYW4gY2xhc3M9XCJhcm5vXCI+4oK0PC9zcGFuPicpO1xyXG4gICAgICAgIGpRdWVyeShmcmFuY2hpc2VbM10pLmh0bWwoJzAgPHNwYW4gY2xhc3M9XCJhcm5vXCI+4oK0PC9zcGFuPicpO1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KCcjZW5naW5lX3NtJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgfHxcclxuICAgICAgICAgICAgalF1ZXJ5KCcjZW5naW5lX3hzJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgfHxcclxuICAgICAgICAgICAgalF1ZXJ5KCcjZW5naW5lX21kJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUpe1xyXG4gICAgICAgICAgICBwaWxnYS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwaWxnYS5mYWRlT3V0KDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZWxlY3QgcGx1Z2luXHJcblxyXG4gICAgdmFyIHNlbGVjdENpdHkgPSBqUXVlcnkoJy5zZWxlY3RGb3JQbHVnaW4nKTtcclxuICAgIHZhciBzZWxlY3RUeiA9IGpRdWVyeSgnI3NlbGVjdFR6Jyk7XHJcblxyXG4gICAgc2VsZWN0Q2l0eS5zZWxlY3QyKCk7XHJcbiAgICBzZWxlY3RUei5zZWxlY3QyKCk7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRpbmdcclxuXHJcbiAgICAvLyBzdGF0ZV8xXHJcblxyXG4gICAgdmFyIG9wdGlvbkFycmF5O1xyXG4gICAgdmFyIHNlbF9vcHRpb25UZXh0O1xyXG4gICAgdmFyIHRyZWVJdGVtO1xyXG4gICAgdmFyIGl0ZW1UZXh0O1xyXG4gICAgY29lZmljaWVudEpTT04gPSBqUXVlcnkuZ2V0KFwianMvZGF0YTEuanNvblwiLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBjaXR5MCA9IGRhdGEuZGF0YS5jaXR5MDtcclxuICAgICAgICBjaXR5MSA9IGRhdGEuZGF0YS5jaXR5MTtcclxuICAgICAgICBjaXR5MiA9IGRhdGEuZGF0YS5jaXR5MjtcclxuICAgICAgICBjaXR5MyA9IGRhdGEuZGF0YS5jaXR5MztcclxuICAgICAgICBjaXR5NCA9IGRhdGEuZGF0YS5jaXR5NDtcclxuICAgICAgICBjaXR5NSA9IGRhdGEuZGF0YS5jaXR5NTtcclxuXHJcbiAgICAgICAgY2l0eUNvZWZpY2llbnRzID0gW2NpdHkwLCBjaXR5MSwgY2l0eTIsIGNpdHkzLCBjaXR5NCwgY2l0eTVdO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLmJsb2NrIC5zZWxlY3QyLWNvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdHJlZUl0ZW0gPSBqUXVlcnkoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbicpO1xyXG5cclxuICAgICAgICB0cmVlSXRlbS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgb3B0aW9uQXJyYXkgPSBqUXVlcnkoJy5ibG9jayAuc2VsZWN0Rm9yUGx1Z2luIG9wdGlvbicpO1xyXG4gICAgICAgICAgICBpdGVtVGV4dCA9IGpRdWVyeSh0aGlzKS5odG1sKCk7XHJcblxyXG4gICAgICAgICAgICBvcHRpb25BcnJheS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzZWxfb3B0aW9uVGV4dCA9IGpRdWVyeSh0aGlzKS5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVRleHQgPT0gc2VsX29wdGlvblRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25DbGFzcyA9IGpRdWVyeSh0aGlzKS5hdHRyKCdjbGFzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkNsYXNzID0gb3B0aW9uQ2xhc3Muc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoY2l0eUNvZWZpY2llbnRzKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YXJpYWJsZU5hbWUgPSAnY2l0eScrIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbkNsYXNzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFyaWFibGVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25DbGFzc1swXSA9PSB2YXJpYWJsZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlDb2VmaWNpZW50ID0gY2l0eUNvZWZpY2llbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2l0eUNvZWZpY2llbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdGF0ZV8yXHJcblxyXG4gICAgZnVuY3Rpb24gc3RhdGVfMigpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBvc2NwdiA9IGpRdWVyeSgnLmluc3VyYW5jZV93cmFwcGVyIHRhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOmxhc3QtY2hpbGQnKTtcclxuICAgICAgICB2YXIgZGN2ID0galF1ZXJ5KCcuaW5zdXJhbmNlX3dyYXBwZXIgdGFibGUgdHI6bnRoLWNoaWxkKDMpIHRkOmxhc3QtY2hpbGQnKTtcclxuICAgICAgICB2YXIgaW5zdXJhbmNlRmluYWxQcmljZSA9IGpRdWVyeSgnLmluc3VyYW5jZV93cmFwcGVyIHRhYmxlIHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCcpO1xyXG4gICAgICAgIHZhciBpbnN1cmFuY2VGaW5hbFByaWNlVGV4dDtcclxuXHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG5cclxuICAgICAgICBpbnN1cmFuY2VDb21wYW55LmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBvc2NwdlRleHQgPSBqUXVlcnkob3NjcHZbaV0pLmh0bWwoKS5zcGxpdCgnPCcpO1xyXG4gICAgICAgICAgICBvc2NwdlRleHQgPSBwYXJzZUludChvc2NwdlRleHRbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZGN2VGV4dCA9IGpRdWVyeShkY3ZbaV0pLmh0bWwoKS5zcGxpdCgnPCcpO1xyXG4gICAgICAgICAgICBkY3ZUZXh0ID0gcGFyc2VJbnQoZGN2VGV4dFswXSk7XHJcbiAgICAgICAgICAgIGluc3VyYW5jZUZpbmFsUHJpY2VUZXh0ID0gb3NjcHZUZXh0ICsgZGN2VGV4dDtcclxuICAgICAgICAgICAgalF1ZXJ5KGluc3VyYW5jZUZpbmFsUHJpY2VbaV0pLmh0bWwoJycraW5zdXJhbmNlRmluYWxQcmljZVRleHQrJzxzcGFuIGNsYXNzPVwiYXJub1wiPuKCtDwvc3Bhbj4nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9zY3B2VGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRjdlRleHQpO1xyXG5cclxuICAgICAgICAgICAgaSsrO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbi8vbWFwXHJcblxyXG52YXIgbWFwO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDE5MzI0LCBsbmc6IDMwLjU0MzE5Nn07XHJcblxyXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICBjZW50ZXI6IG15TGF0TG5nLFxyXG4gICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IHN0eWxlc1snZGVmYXVsdCddfSk7XHJcblxyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuICAgICAgICB0aXRsZTogJ1ZpY3RvcmlhIERlbnQnXHJcbiAgICB9KTtcclxufVxyXG5cclxudmFyIGluc3VyYW5jZUFwcCA9IGFuZ3VsYXIubW9kdWxlKCdpbnN1cmFuY2VBcHAnLCBbXSk7XHJcblxyXG5pbnN1cmFuY2VBcHAuY29udHJvbGxlcignYXV0b0xhYmVsJywgWyckc2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwKSB7XHJcblxyXG4gICAgJGh0dHAuZ2V0KCdqcy9kYXRhMS5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIERhdGE6JyxkYXRhLCdcXG5cXG5UaGlzIGlzIFN0YXR1czonLHN0YXR1cywnXFxuXFxuVGhpcyBpcyBIZWFkZXJzOicsaGVhZGVycywnXFxuXFxuVGhpcyBpcyBjb25maWc6Jyxjb25maWcpO1xyXG4gICAgICAgICRzY29wZS5jb2VmaWNpZW50ID0gZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS50b3duXzAgPSBbXCLQmtC40ZfQslwiXTtcclxuICAgICRzY29wZS50b3duXzEgPSBbXCLQkdC+0YDQuNGB0L/RltC70YxcIiwgXCLQkdC+0Y/RgNC60LBcIiwgXCLQkdGA0L7QstCw0YDQuFwiLFwi0JLQsNGB0LjQu9GM0LrRltCyXCIsIFwi0JLQuNGI0LPQvtGA0L7QtFwiLCBcItCS0LjRiNC90LXQstC1XCIsIFwi0IbRgNC/0ZbQvdGMXCJdO1xyXG4gICAgJHNjb3BlLnRvd25fMiA9IFtcItCe0LTQtdGB0LBcIiwgXCLQpdCw0YDQutGW0LJcIl07XHJcbiAgICAkc2NvcGUudG93bl8zID0gW1wi0JTQvdGW0L/RgNC+ICjQlNC90ZbQv9GA0L7Qv9C10YLRgNC+0LLRgdGM0LopXCIsIFwi0JTQvtC90LXRhtGM0LpcIiwgXCLQl9Cw0L/QvtGA0ZbQttC20Y9cIiwgXCLQmtGA0LjQstC40Lkg0KDRltCzXCIsIFwi0JvRjNCy0ZbQslwiXTtcclxuICAgICRzY29wZS50b3duXzQgPSBbXCLQnNC40LrQvtC70LDRl9CyXCIsIFwi0JzQsNGA0ZbRg9C/0L7Qu9GMXCIsIFwi0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQulwiLCBcItCb0YPQs9Cw0L3RgdGM0LpcIiwgXCLQmtGA0LXQvNC10L3Rh9GD0LpcIiwgXCLQktGW0L3QvdC40YbRj1wiLCBcItCi0LXRgNC90L7Qv9GW0LvRjFwiLFxyXG4gICAgICAgIFwi0JzQsNC60ZbRl9Cy0LrQsFwiLCBcItCb0YPRhtGM0LpcIiwgXCLQodC10LLQsNGB0YLQvtC/0L7Qu9GMXCIsIFwi0JHRltC70LAg0KbQtdGA0LrQstCwXCIsIFwi0KHRltC80YTQtdGA0L7Qv9C+0LvRjFwiLCBcItCa0YDQsNC80LDRgtC+0YDRgdGM0LpcIiwgXCLQpdC10YDRgdC+0L1cIiwgXCLQnNC10LvRltGC0L7Qv9C+0LvRjFwiLFxyXG4gICAgICAgIFwi0J/QvtC70YLQsNCy0LBcIiwgXCLQmtC10YDRh1wiLCBcItCn0LXRgNC90ZbQs9GW0LJcIiwgXCLQndGW0LrQvtC/0L7Qu9GMXCIsIFwi0KfQtdGA0LrQsNGB0LhcIiwgXCLQodC70L7QstGP0L3RgdGM0LpcIiwgXCLQltC40YLQvtC80LjRgFwiLCBcItCj0LbQs9C+0YDQvtC0XCIsIFwi0KHRg9C80LhcIiwgXCLQkdC10YDQtNGP0L3RgdGM0LpcIixcclxuICAgICAgICBcItCl0LzQtdC70YzQvdC40YbRjNC60LjQuVwiLCBcItCQ0LvRh9C10LLRgdGM0LpcIiwgXCLQp9C10YDQvdGW0LLRhtGWXCIsIFwi0J/QsNCy0LvQvtCz0YDQsNC0XCIsIFwi0JPQvtGA0LvRltCy0LrQsFwiLCBcItCh0ZTQstGU0YDQvtC00L7QvdC10YbRjNC6XCIsIFwi0KDRltCy0L3QtVwiLCBcItCE0LLQv9Cw0YLQvtGA0ZbRj1wiLFxyXG4gICAgICAgIFwi0JrQsNC80Y/QvdGB0YzQutC1ICjQlNC90ZbQv9GA0L7QtNC30LXRgNC20LjQvdGB0YzQuilcIiwgXCLQm9C40YHQuNGH0LDQvdGB0YzQulwiLCBcItCa0YDQvtC/0LjQstC90LjRhtGM0LrQuNC5ICjQmtGW0YDQvtCy0L7Qs9GA0LDQtClcIiwgXCLQmtCw0LzRj9C90LXRhtGMLdCf0L7QtNGW0LvRjNGB0YzQutC40LlcIl07XHJcbiAgICAkc2NvcGUudG93bl81ID0gW1wi0JDQstC00ZbRl9Cy0LrQsFwiLCBcItCQ0LvRg9C/0LrQsFwiLCBcItCQ0LvRg9GI0YLQsFwiLCBcItCQ0LzQstGA0L7RgdGW0ZfQstC60LBcIiwgXCLQkNC90LTRgNGD0YjRltCy0LrQsFwiLCBcItCQ0L3RgtGA0LDRhtC40YJcIiwgXCLQkNC/0L7RgdGC0L7Qu9C+0LLQtVwiLFxyXG4gICAgICAgIFwi0JDRgNC80Y/QvdGB0YzQulwiLCBcItCQ0YDRhtC40LdcIiwgXCLQkdCw0LvQsNC60LvRltGPXCIsIFwi0JHQsNC70YLQsFwiLCBcItCR0LDRgFwiLCBcItCR0LDRgNCw0L3RltCy0LrQsFwiLCBcItCR0LDRgNCy0ZbQvdC60L7QstC1XCIsIFwi0JHQsNGA0LjRiNGW0LLQutCwXCIsIFwi0JHQsNGF0LzQsNGHXCIsXHJcbiAgICAgICAgXCLQkdCw0YXQvNGD0YIgKNCQ0YDRgtC10LzRltCy0YHRjNC6KVwiLCBcItCR0LDRiNGC0LDQvdC60LBcIiwgXCLQkdC10YDQtNC40YfRltCyXCIsIFwi0JHQtdGA0LXQs9C+0LLQtVwiLCBcItCR0LXRgNC10LbQsNC90LhcIiwgXCLQkdC10YDQtdC30LDQvdGMXCIsIFwi0JHQtdGA0LXQt9GW0LLQutCwXCIsXHJcbiAgICAgICAgXCLQkdC10YDQtdC30L3QtVwiLCBcItCR0LXRgNC40YHQu9Cw0LJcIiwgXCLQkdC10YDRiNCw0LTRjFwiLCBcItCR0ZbQu9Cz0L7RgNC+0LQt0JTQvdGW0YHRgtGA0L7QstGB0YzQutC40LlcIiwgXCLQkdGW0LvQuNGG0YzQutC1XCIsIFwi0JHRltC70L7Qs9GW0YDRgdGM0LpcIiwgXCLQkdGW0LvQvtC30LXRgNGB0YzQutC1XCIsXHJcbiAgICAgICAgXCLQkdGW0LvRj9GX0LLQutCwXCIsIFwi0JHQvtCx0YDQuNC90LXRhtGMXCIsIFwi0JHQvtCx0YDQvtCy0LjRhtGPXCIsIFwi0JHQvtCz0L7QtNGD0YXRltCyXCIsIFwi0JHQvtCz0YPRgdC70LDQslwiLCBcItCR0L7Qu9Cz0YDQsNC0XCIsIFwi0JHQvtGA0LfQvdCwXCIsIFwi0JHQvtGA0LjRgdC70LDQslwiLFxyXG4gICAgICAgIFwi0JHQvtGA0L7QtNGP0L3QutCwXCIsIFwi0JHQvtGA0YnRltCyXCIsIFwi0JHRgNC+0LTQuFwiLCBcItCR0YDRj9C90LrQsFwiLCBcItCR0YPRgNC40L3RjFwiLCBcItCR0YPRgNGI0YLQuNC9XCIsIFwi0JHRg9GC0LXQvdC60LhcIiwgXCLQkdGD0YfQsNGHXCIsIFwi0JLQsNC70LrQuFwiLCBcItCS0LDRgdC40LvRltCy0LrQsFwiLFxyXG4gICAgICAgIFwi0JLQsNGC0YPRgtGW0L3QtVwiLCBcItCS0LDRhdGA0YPRiNC10LLQtVwiLCBcItCS0LXQu9C40LrQsCDQntC70LXQutGB0LDQvdC00YDRltCy0LrQsFwiLCBcItCS0LjQttC90LjRhtGPXCIsIFwi0JLQuNC70LrQvtCy0LVcIiwgXCLQktC40L3QsNGA0ZbQstC60LBcIiwgXCLQktC40L3QvtCz0YDQsNC00ZbQslwiLCBcItCS0LjRgdC+0LrQuNC5XCIsXHJcbiAgICAgICAgXCLQktGW0LvRjNC90Y/QvdGB0YzQulwiLCBcItCS0ZbQu9GM0YjQsNC90LrQsFwiLCBcItCS0L7QstGH0LDQvdGB0YzQulwiLCBcItCS0L7Qt9C90LXRgdC10L3RgdGM0LpcIiwgXCLQktC+0LvQvdC+0LLQsNGF0LBcIiwgXCLQktC+0LvQvtC00LDRgNGB0YzQutC1XCIsIFwi0JLQvtC70L7QtNC40LzQuNGALdCS0L7Qu9C40L3RgdGM0LrQuNC5XCIsXHJcbiAgICAgICAgXCLQktC+0LvQvtC00LjQvNC40YDQtdGG0YxcIiwgXCLQktGD0LPQu9C10LPRltGA0YHRjNC6XCIsIFwi0JLRg9Cz0LvQtdC00LDRgFwiLCBcItCT0LDQtNGP0YdcIiwgXCLQk9Cw0LnQstC+0YDQvtC9XCIsIFwi0JPQsNC50YHQuNC9XCIsIFwi0JPQsNC50YjQuNC9XCIsIFwi0JPQtdC90ZbRh9C10YHRjNC6XCIsIFwi0JPRltGA0YHRjNC60LVcIixcclxuICAgICAgICBcItCT0LvQuNCx0L7QutCwXCIsIFwi0JPQu9C+0LHQuNC90LVcIiwgXCLQk9C70YPRhdGW0LJcIiwgXCLQk9C90ZbQstCw0L3RjFwiLCBcItCT0L7Qu9CwINCf0YDQuNGB0YLQsNC90YxcIiwgXCLQk9C+0YDQvdC+0YHRgtCw0ZfQstC60LBcIiwgXCLQk9C+0YDQvtC00LXQvdC60LBcIiwgXCLQk9C+0YDQvtC00LjRidC1XCIsIFwi0JPQvtGA0L7QtNC+0LpcIixcclxuICAgICAgICBcItCT0L7RgNC+0YXRltCyXCIsIFwi0JPRgNC10LHRltC90LrQsFwiLCBcItCT0YPQu9GP0LnQv9C+0LvQtVwiLCBcItCU0LXQsdCw0LvRjNGG0LXQstC1XCIsIFwi0JTQtdGA0LDQttC90Y9cIiwgXCLQlNC10YDQs9Cw0YfRllwiLCBcItCU0LbQsNC90LrQvtC5XCIsIFwi0JTQuNC60LDQvdGM0LrQsFwiLCBcItCU0LjQvNC40YLRgNC+0LJcIixcclxuICAgICAgICBcItCU0L3RltC/0YDQvtGA0YPQtNC90LVcIiwgXCLQlNC+0LHRgNC+0L/RltC70LvRj1wiLCBcItCU0L7QutGD0YfQsNGU0LLRgdGM0LpcIiwgXCLQlNC+0LvQuNC90LBcIiwgXCLQlNC+0LvQuNC90YHRjNC60LBcIiwgXCLQlNC+0LzQsNC90ZbQstC60LBcIiwgXCLQlNGA0L7Qs9C+0LHQuNGHXCIsIFwi0JTRg9Cx0LvRj9C90LhcIiwgXCLQlNGD0LHQvdC+XCIsXHJcbiAgICAgICAgXCLQlNGD0LHRgNC+0LLQuNGG0Y9cIiwgXCLQlNGD0L3QsNGX0LLRhtGWXCIsIFwi0JXQvdC10YDQs9C+0LTQsNGAXCIsIFwi0ITQvdCw0LrRltGU0LLQtVwiLCBcItCW0LDRiNC60ZbQslwiLCBcItCW0LTQsNC90ZbQstC60LBcIiwgXCLQltC40LTQsNGH0ZbQslwiLCBcItCW0LzQtdGA0LjQvdC60LBcIiwgXCLQltC+0LLQutCy0LBcIixcclxuICAgICAgICBcItCW0L7QstGC0ZYg0JLQvtC00LhcIiwgXCLQl9Cw0LLQvtC00YHRjNC60LUgKNCn0LXRgNCy0L7QvdC+0LfQsNCy0L7QtNGB0YzQutC1KVwiLCBcItCX0LDQu9GW0YnQuNC60LhcIiwgXCLQl9Cx0LDRgNCw0LZcIiwgXCLQl9Cy0LXQvdC40LPQvtGA0L7QtNC60LBcIiwgXCLQl9C00L7Qu9Cx0YPQvdGW0LJcIiwgXCLQl9C10LvQtdC90L7QtNC+0LvRjNGB0YzQulwiLFxyXG4gICAgICAgIFwi0JfRltC90YzQutGW0LJcIiwgXCLQl9C80ZbRl9CyXCIsIFwi0JfQvdCw0Lwn0Y/QvdC60LBcIiwgXCLQl9C+0LvQvtGC0LVcIiwgXCLQl9C+0LvQvtGC0L7QvdC+0YjQsFwiLCBcItCX0L7Qu9C+0YfRltCyXCIsIFwi0JfRg9Cz0YDQtdGBXCIsIFwi0IbQstCw0L3RltCy0LrQsFwiLCBcItCG0LLQsNC90LrRltCyXCIsIFwi0IbQt9C80LDRl9C7XCIsXHJcbiAgICAgICAgXCLQhtC30Y7QvFwiLCBcItCG0LfRj9GB0LvQsNCyXCIsIFwi0IbQu9C70ZbQvdGG0ZZcIiwgXCLQhtC70L7QstCw0LnRgdGM0LpcIiwgXCLQhtGA0LzRltC90L5cIiwgXCLQhtGA0YjQsNCy0LBcIiwgXCLQhtGH0L3Rj1wiLCBcItCa0LDQs9Cw0YDQu9C40LpcIiwgXCLQmtCw0LvQsNC90YfQsNC6XCIsIFwi0JrQsNC70LjQvdGW0LLQutCwXCIsIFwi0JrQsNC70YPRiFwiLFxyXG4gICAgICAgIFwi0JrQsNC80ZbQvdGMLdCa0LDRiNC40YDRgdGM0LrQuNC5XCIsIFwi0JrQsNC8J9GP0L3QutCwXCIsIFwi0JrQsNC8J9GP0L3QutCwLdCR0YPQt9GM0LrQsFwiLCBcItCa0LDQvCfRj9C90LrQsC3QlNC90ZbQv9GA0L7QstGB0YzQutCwXCIsIFwi0JrQsNC90ZbQslwiLCBcItCa0LDRgNC70ZbQstC60LBcIiwgXCLQmtCw0YXQvtCy0LrQsFwiLFxyXG4gICAgICAgIFwi0JrQtdC70YzQvNC10L3RhtGWXCIsIFwi0JrRltCy0YjQsNGA0ZbQstC60LBcIiwgXCLQmtGW0LvRltGPXCIsIFwi0JfQsNGA0ZbRh9C90LUgKNCa0ZbRgNC+0LLRgdGM0LopXCIsIFwi0JrRltGA0L7QstGB0YzQutC1XCIsIFwi0JrRltGG0LzQsNC90YxcIiwgXCLQmtC+0LHQtdC70Y/QutC4XCIsIFwi0JrQvtCy0LXQu9GMXCIsIFwi0JrQvtC00LjQvNCwXCIsXHJcbiAgICAgICAgXCLQmtC+0LfQtdC70LXRhtGMXCIsIFwi0JrQvtC30Y/RgtC40L1cIiwgXCLQmtC+0LvQvtC80LjRj1wiLCBcItCa0L7QvNGW0L3RgtC10YDQvdGW0LLRgdGM0LrQtVwiLCBcItCT0L7RgNGW0YjQvdGWINCf0LvQsNCy0L3RliAo0JrQvtC80YHQvtC80L7Qu9GM0YHRjNC6KVwiLCBcItCa0L7QvNGB0L7QvNC+0LvRjNGB0YzQutC1ICjQlNC+0L3QtdGG0YzQutCwINC+0LHQuy4pXCIsXHJcbiAgICAgICAgXCLQmtC+0L3QvtGC0L7Qv1wiLCBcItCa0L7RgNC+0YHRgtC10L3RjFwiLCBcItCa0L7RgNC+0YHRgtC40YjRltCyXCIsIFwi0JrQvtGA0YHRg9C90Ywt0KjQtdCy0YfQtdC90LrRltCy0YHRjNC60LjQuVwiLCBcItCa0L7RgNGO0LrRltCy0LrQsFwiLCBcItCa0L7RgdGW0LJcIiwgXCLQmtC+0YHRgtC+0L/RltC70YxcIiwgXCLQmtC+0YHRgtGP0L3RgtC40L3RltCy0LrQsFwiLFxyXG4gICAgICAgIFwi0JrQvtGC0LXQu9GM0LLQsFwiLCBcItCa0L7RgtC+0LLRgdGM0LpcIiwgXCLQmtGA0LDRgdC40LvRltCyXCIsIFwi0JrRgNCw0YHQvdC40Lkg0JvRg9GHXCIsIFwi0JrRgNCw0YHQvdC+0LDRgNC80ZbQudGB0YzQulwiLCBcItCa0YDQsNGB0L3QvtCz0L7RgNGW0LLQutCwXCIsIFwi0JrRgNCw0YHQvdC+0LPRgNCw0LRcIiwgXCLQmtGA0LDRgdC90L7QtNC+0L1cIixcclxuICAgICAgICBcItCa0YDQsNGB0L3QvtC/0LXRgNC10LrQvtC/0YHRjNC6XCIsIFwi0JrRgNCw0YHQvdC+0L/RltC70LvRj1wiLCBcItCa0YDQtdC80LXQvdC10YbRjFwiLCBcItCa0YDQtdC80ZbQvdC90LBcIiwgXCLQmtGA0LjQttC+0L/RltC70YxcIiwgXCLQmtGA0L7Qu9C10LLQtdGG0YxcIiwgXCLQmtGD0LfQvdC10YbQvtCy0YHRjNC6XCIsIFwi0JrRg9C/J9GP0L3RgdGM0LpcIixcclxuICAgICAgICBcItCa0YPRgNCw0YXQvtCy0LVcIiwgXCLQm9Cw0LTQuNC20LjQvVwiLCBcItCb0LXQsdC10LTQuNC9XCIsIFwi0JvQtdGC0LjRh9GW0LJcIiwgXCLQm9C40LzQsNC9ICjQmtGA0LDRgdC90LjQuSDQm9C40LzQsNC9KVwiLCBcItCb0LjQv9C+0LLQtdGG0YxcIiwgXCLQm9C+0LfQvtCy0LBcIiwgXCLQm9C+0YXQstC40YbRj1wiLCBcItCb0YPQsdC90LhcIixcclxuICAgICAgICBcItCb0YPRgtGD0LPQuNC90LVcIiwgXCLQm9GO0LHQsNGI0ZbQstC60LBcIiwgXCLQm9GO0LHQvtC80LvRjFwiLCBcItCb0Y7QsdC+0YLQuNC9XCIsIFwi0JzQsNC60LDRgNGW0LJcIiwgXCLQnNCw0LvQsCDQktC40YHQutCwXCIsIFwi0JzQsNC70LjQvVwiLCBcItCc0LDRgCfRl9C90LrQsFwiLCBcItCc0LDRgNC60ZbQstC60LBcIiwgXCLQnNC10L3QsFwiLFxyXG4gICAgICAgIFwi0JzQtdGA0LXRhNCwXCIsIFwi0JzQuNC60L7Qu9Cw0ZfQstC60LBcIiwgXCLQnNC40YDQs9C+0YDQvtC0XCIsIFwi0JzQuNGA0L7QvdGW0LLQutCwXCIsIFwi0JzRltC20LPRltGAJ9GPXCIsIFwi0JzQvtCz0LjQu9GW0LIt0J/QvtC00ZbQu9GM0YHRjNC60LjQuVwiLCBcItCc0L7Qu9C+0LTQvtCz0LLQsNGA0LTRltC50YHRjNC6XCIsXHJcbiAgICAgICAgXCLQnNC+0L3QsNGB0YLQuNGA0LjRidC1XCIsIFwi0JzRg9C60LDRh9C10LLQtVwiLCBcItCd0LDQtNCy0ZbRgNC90LBcIiwgXCLQndCw0YLQsNC70LjQvdC1XCIsIFwi0J3QtdC80LjRgNGW0LJcIiwgXCLQndC10YLRltGI0LjQvVwiLCBcItCd0LXRh9Cw0Y/QvdC1XCIsIFwi0J3RltC20LjQvVwiLCBcItCd0L7QstCwINCS0L7QtNC+0LvQsNCz0LBcIixcclxuICAgICAgICBcItCd0L7QstCwINCa0LDRhdC+0LLQutCwXCIsIFwi0J3QvtCy0LAg0J7QtNC10YHQsFwiLCBcItCd0L7QstCz0L7RgNC+0LTQutCwXCIsIFwi0J3QvtCy0LjQuSDQkdGD0LNcIiwgXCLQndC+0LLQvtCy0L7Qu9C40L3RgdGM0LpcIiwgXCLQndC+0LLQvtCz0YDQsNC0LdCS0L7Qu9C40L3RgdGM0LrQuNC5XCIsIFwi0J3QvtCy0L7Qs9GA0L7QtNGW0LLQutCwXCIsXHJcbiAgICAgICAgXCLQndC+0LLQvtC80LjRgNCz0L7RgNC+0LRcIiwgXCLQndC+0LLQvtC80L7RgdC60L7QstGB0YzQulwiLCBcItCd0L7QstC+0YHQtdC70LjRhtGPXCIsIFwi0J3QvtCy0L7Rg9C60YDQsNGX0L3QutCwXCIsIFwi0J3QvtCy0L7Rj9Cy0L7RgNGW0LLRgdGM0LpcIiwgXCLQntCx0YPRhdGW0LJcIiwgXCLQntCy0ZbQtNGW0L7Qv9C+0LvRjFwiLCBcItCe0LLRgNGD0YdcIixcclxuICAgICAgICBcItCe0LvQtdCy0YHRjNC6XCIsIFwi0J7Qu9C10LrRgdCw0L3QtNGA0ZbRj1wiLCBcItCe0L/RltGI0L3Rj1wiLCBcItCe0YDRltGF0ZbQslwiLCBcItCe0YHRgtGA0L7Qs1wiLCBcItCe0YXRgtC40YDQutCwXCIsIFwi0J7Rh9Cw0LrRltCyXCIsIFwi0J/QtdGA0LLQvtC80LDQudGB0YzQuiAo0JzQuNC60L7Qu9Cw0ZfQstGB0YzQutCwINC+0LHQuy4pXCIsXHJcbiAgICAgICAgXCLQn9C10YDQstC+0LzQsNC50YHRjNC6ICjQm9GD0LPQsNC90YHRjNC60LAg0L7QsdC7LilcIiwgXCLQn9C10YDQstC+0LzQsNC50YHRjNC60LjQuVwiLCBcItCf0LXRgNC10YnQtdC/0LjQvdC1XCIsIFwi0J/QtdGA0LXRj9GB0LvQsNCyLdCl0LzQtdC70YzQvdC40YbRjNC60LjQuVwiLCBcItCf0LjRgNGP0YLQuNC9XCIsIFwi0J/RltC00LPQsNC50YbRllwiLFxyXG4gICAgICAgIFwi0J/RltGB0L7Rh9C40L1cIiwgXCLQn9C+0LPRgNC10LHQuNGJ0LVcIiwgXCLQn9C+0LrQvtGC0LjQu9GW0LLQutCwXCIsIFwi0J/QvtC60YDQvtCyICjQntGA0LTQttC+0L3RltC60ZbQtNC30LUpXCIsIFwi0J/QvtC60YDQvtCy0YHRjNC60LVcIiwgXCLQn9C+0LvQvtCz0LhcIiwgXCLQn9C+0LvQvtC90L3QtVwiLCBcItCf0L7QvNGW0YfQvdCwXCIsXHJcbiAgICAgICAgXCLQn9C+0L/QsNGB0L3QsFwiLCBcItCf0L7Qv9GW0LvRjNC90Y9cIiwgXCLQn9GA0LjQu9GD0LrQuFwiLCBcItCf0YPRgtC40LLQu9GMXCIsIFwi0J8n0Y/RgtC40YXQsNGC0LrQuFwiLCBcItCg0LDQtNC40LLQuNC70ZbQslwiLCBcItCg0LDQtNC+0LzQuNGI0LvRjFwiLCBcItCg0LDRhdGW0LJcIiwgXCLQoNC10L3RllwiLCBcItCg0L7QstC10L3RjNC60LhcIixcclxuICAgICAgICBcItCg0L7QtNC40L3RgdGM0LrQtVwiLCBcItCg0L7Qt9C00ZbQu9GM0L3QsFwiLCBcItCg0L7QutC40YLQvdC1XCIsIFwi0KDQvtC80L3QuFwiLCBcItCg0YPQsdGW0LbQvdC1XCIsIFwi0KHQsNC80LHRltGAXCIsIFwi0KHQsNGA0L3QuFwiLCBcItCh0LLQsNC70Y/QstCwXCIsIFwi0KHQstCw0YLQvtCy0LVcIiwgXCLQodCy0LXRgNC00LvQvtCy0YHRjNC6XCIsXHJcbiAgICAgICAgXCLQodCy0LXRgdCwXCIsIFwi0KHQstGW0YLQu9C+0LLQvtC00YHRjNC6XCIsIFwi0KHQstGW0YLQu9C+0LTQsNGA0YHRjNC6XCIsIFwi0KHQtdC70LjQtNC+0LLQtVwiLCBcItCh0LXQvNC10L3RltCy0LrQsFwiLCBcItCh0LjQvdC10LvRjNC90LjQutC+0LLQtVwiLCBcItCh0ZbQstC10YDRgdGM0LpcIiwgXCLQodC60LDQtNC+0LLRgdGM0LpcIixcclxuICAgICAgICBcItCh0LvQsNCy0YPRgtCwXCIsIFwi0KHQu9Cw0LLRg9GC0LjRh1wiLCBcItCh0LvQvtCx0L7QttCw0L3RgdGM0LrQtSAo0JrQvtC80YHQvtC80L7Qu9GM0YHRjNC60LUg0KXQsNGA0LrRltCy0YHRjNC60L7RlyDQvtCx0LsuKVwiLCBcItCh0LzRltC70LBcIiwgXCLQodC80L7QtNC90LBcIiwgXCLQodC90ZbQs9GD0YDRltCy0LrQsFwiLFxyXG4gICAgICAgIFwi0KHQvdGW0LbQvdC1XCIsIFwi0KHQvdGP0YLQuNC9XCIsIFwi0KHQvtC60LDQu9GMXCIsIFwi0KHQvtC60LjRgNGP0L3QuFwiLCBcItCh0L7Qu9C10LTQsNGAXCIsIFwi0KHQvtC70L7QvdC40YbRltCy0LrQsFwiLCBcItCh0L7RgdC90ZbQstC60LBcIiwgXCLQodC+0YTRltGX0LLRgdGM0LrQsCDQkdC+0YDRidCw0LPRltCy0LrQsFwiLFxyXG4gICAgICAgIFwi0KHRgtCw0LLQuNGJ0LVcIiwgXCLQodGC0LDRgNC40Lkg0JrRgNC40LxcIiwgXCLQodGC0LDRgNC40Lkg0KHQsNC80LHRltGAXCIsIFwi0KHRgtCw0YDQvtCx0LXRiNC10LLQtVwiLCBcItCh0YLQsNGA0L7QsdGW0LvRjNGB0YzQulwiLCBcItCh0YLQsNGA0L7QutC+0YHRgtGP0L3RgtC40L3RltCyXCIsIFwi0KHRgtCw0YXQsNC90L7QslwiLFxyXG4gICAgICAgIFwi0KHRgtC10LHQvdC40LpcIiwgXCLQodGC0L7RgNC+0LbQuNC90LXRhtGMXCIsIFwi0KHRgtGA0LjQuVwiLCBcItCh0YPQtNCw0LpcIiwgXCLQodGD0YXQvtC00ZbQu9GM0YHRjNC6XCIsIFwi0KLQsNCy0YDRltC50YHRjNC6XCIsIFwi0KLQsNC70YzQvdC1XCIsIFwi0KLQsNGA0LDRgdGW0LLQutCwXCIsIFwi0KLQsNGA0LDRidCwXCIsXHJcbiAgICAgICAgXCLQotCw0YLQsNGA0LHRg9C90LDRgNC4XCIsIFwi0KLQtdC/0LvQvtC00LDRgFwiLCBcItCi0LXRgNC10LHQvtCy0LvRj1wiLCBcItCi0LXRgtGW0ZfQslwiLCBcItCi0L7QutC80LDQulwiLCBcItCi0L7RgNC10LdcIiwgXCLQotC+0YDQtdGG0YzQuiAo0JTQt9C10YDQttC40L3RgdGM0LopXCIsIFwi0KLRgNC+0YHRgtGP0L3QtdGG0YxcIixcclxuICAgICAgICBcItCi0YDRg9GB0LrQsNCy0LXRhtGMXCIsIFwi0KLRg9C70YzRh9C40L1cIiwgXCLQotGP0YfRltCyXCIsIFwi0KPQutGA0LDRl9C90LrQsFwiLCBcItCj0LvRjNGP0L3RltCy0LrQsFwiLCBcItCj0LzQsNC90YxcIiwgXCLQpNCw0YHRgtGW0LJcIiwgXCLQpNC10L7QtNC+0YHRltGPXCIsIFwi0KXQsNGA0YbQuNC30YzQulwiLFxyXG4gICAgICAgIFwi0KXQvNGW0LvRjNC90LjQulwiLCBcItCl0L7QtNC+0YDRltCyXCIsIFwi0KXQvtGA0L7Qu1wiLCBcItCl0L7RgtC40L1cIiwgXCLQpdGA0LjRgdGC0LjQvdGW0LLQutCwXCIsIFwi0KXRg9GB0YJcIiwgXCLQptGO0YDRg9C/0LjQvdGB0YzQulwiLCBcItCn0LDRgdGW0LIg0K/RgFwiLCBcItCn0LXRgNCy0L7QvdC+0LPRgNCw0LRcIixcclxuICAgICAgICBcItCn0LXRgNCy0L7QvdC+0L/QsNGA0YLQuNC30LDQvdGB0YzQulwiLCBcItCn0L7RgNC90L7QvNC+0YDRgdGM0LogKNCG0LvQu9GW0YfRltCy0YHRjNC6KVwiLCBcItCn0L7RgNGC0LrRltCyXCIsIFwi0KfRg9Cz0YPRl9CyXCIsIFwi0KfRg9C00L3RltCyXCIsIFwi0KfRg9GC0L7QstC1XCIsIFwi0KjQsNGF0YLQsNGA0YHRjNC6XCIsXHJcbiAgICAgICAgXCLQqNC10L/QtdGC0ZbQstC60LBcIiwgXCLQqNC40YDQvtC60LVcIiwgXCLQqNC+0YHRgtC60LBcIiwgXCLQqNC/0L7Qu9CwXCIsIFwi0KnQvtGA0YFcIiwgXCLQrtC20L3QtVwiLCBcItCu0LbQvdC+0YPQutGA0LDRl9C90YHRjNC6XCIsIFwi0K7QvdC+0LrQvtC80YPQvdCw0YDRltCy0YHRjNC6XCIsIFwi0K/QstC+0YDRltCyXCIsXHJcbiAgICAgICAgXCLQr9Cz0L7RgtC40L1cIiwgXCLQr9C70YLQsFwiLCBcItCv0LzQv9GW0LvRjFwiLCBcItCv0YDQtdC80YfQtVwiLCBcItCv0YHQuNC90YPQstCw0YLQsFwiXTtcclxufV0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
