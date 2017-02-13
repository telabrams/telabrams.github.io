// variables for calculating
var k1;
var targetInput;


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

        var dcv = jQuery('.dcv');
        targetText = jQuery(e.target).next().html();
        targetInput = jQuery(e.target).index('.radio_block input');

        /*Копирование лимита покрытия*/

        // if (targetInput == 0) {
        //     jQuery(radioInput[5]).prop('checked', 'true');
        // }
        //
        // if (targetInput == 1) {
        //     jQuery(radioInput[6]).prop('checked', 'true');
        // }
        //
        // if (targetInput == 2) {
        //     jQuery(radioInput[7]).prop('checked', 'true');
        // }
        //
        // if (targetInput == 3) {
        //     jQuery(radioInput[8]).prop('checked', 'true');
        // }
        //
        // if (targetInput == 4) {
        //     jQuery(radioInput[9]).prop('checked', 'true');
        // }

        if (targetInput == 17) {
            jQuery('#changing_table').fadeOut(0);
            dcv.fadeOut(0);
            dcv.prev().fadeOut(0);

        }

        if (targetInput == 17) {
            jQuery('#changing_table').fadeOut(0);

            dcv.fadeOut(0);
            dcv.prev().fadeOut(0);

        }

        if (targetInput == 17) {
            jQuery('#changing_table').fadeOut(0);

            dcv.fadeOut(0);
            dcv.prev().fadeOut(0);

        }

        if (targetInput == 18) {
            jQuery('#changing_table').fadeIn();
            additionalLimit.html('100&nbsp000');
            dcv.fadeIn();
            dcv.prev().fadeIn();

        }

        if (targetInput == 19) {
            jQuery('#changing_table').fadeIn();
            additionalLimit.html('200&nbsp000');
            dcv.fadeIn();
            dcv.prev().fadeIn();
        }

        if (targetInput == 20) {
            jQuery('#changing_table').fadeIn();
            additionalLimit.html('500&nbsp000');
            dcv.fadeIn();
            dcv.prev().fadeIn();
        }

        if (targetInput > 12 && targetInput <= 16) {
            reservedCheck = false;
            // mirror.html(targetText);
            pseudoSelect.addClass('off-select');

            /*Копирование названия документа*/

            if (targetInput == 13) {
                mirror.html('Посвідчення пенсіонера');
                downloadedDocument.html('Посвідчення пенсіонера');
            }

            if (targetInput == 14) {
                mirror.html('Учасник війни');
                downloadedDocument.html('Посвідчення пенсіонера');
            }

            if (targetInput == 15) {
                mirror.html('Посвідчення про інвалідність');
                downloadedDocument.html('Посвідчення пенсіонера');
            }

            if (targetInput == 16) {
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
        }

        else if ((jQuery(this).prev().attr('id') == 'engine_sm' ||
            jQuery(this).prev().attr('id') == 'engine_xs' ||
            jQuery(this).prev().attr('id') == 'engine_md') &&
            taxiNo.prop('checked') == true) {
            pilga.fadeIn(0);
            reservedCheck = false;
        }

    });

    // limit.on('click', function(){
    //
    //     if (jQuery(this).index('#limit .radio_block label') == 0) {
    //         jQuery(insuranceCompany[0]).parent().fadeOut(0);
    //         // jQuery(franchise[1]).html('1000 <span class="arno">₴</span>');
    //         // jQuery(franchise[3]).html('1000 <span class="arno">₴</span>');
    //     }
    //
    //     else {
    //         jQuery(insuranceCompany[0]).parent().fadeIn();
    //         // jQuery(franchise[1]).html('0 <span class="arno">₴</span>');
    //         // jQuery(franchise[3]).html('0 <span class="arno">₴</span>');
    //     }
    //
    //
    // });

    taxiNo.on('click', function(){
        jQuery(insuranceCompany[0]).parent().fadeIn(0);
        // jQuery(franchise[1]).html('0 <span class="arno">₴</span>');
        // jQuery(franchise[3]).html('1000 <span class="arno">₴</span>');

        if (jQuery('#engine_lg').prop('checked') == true ||
            jQuery('#engine_xl').prop('checked') == true) {
            pilga.fadeOut(0);
        }

        else {
            pilga.fadeIn();
        }

    });

    taxiYes.on('click', function(){
        jQuery(insuranceCompany[0]).parent().fadeOut(0);
        // jQuery(franchise[1]).html('1000 <span class="arno">₴</span>');
        // jQuery(franchise[3]).html('0 <span class="arno">₴</span>');

        if (jQuery('#engine_sm').prop('checked') == true ||
            jQuery('#engine_xs').prop('checked') == true ||
            jQuery('#engine_md').prop('checked') == true){
            pilga.fadeOut(0);
        }

        else {
            pilga.fadeOut(0);
        }

    });

    // state_2

    // dcv count

    function state_2() {

        var oscpv = jQuery('.oscpv');
        var dcv = jQuery('.dcv');
        var insuranceFinalPrice = jQuery('.insuranceFinalPrice');
        console.log(oscpv);
        console.log(dcv);
        console.log(insuranceFinalPrice);
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
        // console.log('This is Data:',data,'\n\nThis is Status:',status,'\n\nThis is Headers:',headers,'\n\nThis is config:',config);
        $scope.coeficient = data;
        console.log($scope.coeficient);

        $scope.townArray = [
            {
                town : ["Київ"]
            },
            {
                town : ["Бориспіль", "Боярка", "Бровари","Васильків", "Вишгород", "Вишневе", "Ірпінь"]
            },
            {
                town : ["Одеса", "Харків"]
            },
            {
                town : ["Дніпро (Дніпропетровськ)", "Донецьк", "Запоріжжя", "Кривий Ріг", "Львів"]
            },
            {
                town : ["Миколаїв", "Маріуполь", "Івано-Франківськ", "Луганськ", "Кременчук", "Вінниця", "Тернопіль",
                "Макіївка", "Луцьк", "Севастополь", "Біла Церква", "Сімферополь", "Краматорськ", "Херсон", "Мелітополь",
                "Полтава", "Керч", "Чернігів", "Нікополь", "Черкаси", "Словянськ", "Житомир", "Ужгород", "Суми", "Бердянськ",
                "Хмельницький", "Алчевськ", "Чернівці", "Павлоград", "Горлівка", "Сєвєродонецьк", "Рівне", "Євпаторія",
                "Камянське (Дніпродзержинськ)", "Лисичанськ", "Кропивницький (Кіровоград)", "Камянець-Подільський"]
            },
            {
                town : ["Авдіївка", "Алупка", "Алушта", "Амвросіївка", "Андрушівка", "Антрацит", "Апостолове",
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
                    "Яготин", "Ялта", "Ямпіль", "Яремче", "Ясинувата"]
            }
        ];

        $scope.cityArray = ["Київ", "Бориспіль", "Боярка", "Бровари","Васильків", "Вишгород", "Вишневе", "Ірпінь",
            "Одеса", "Харків", "Дніпро (Дніпропетровськ)", "Донецьк", "Запоріжжя", "Кривий Ріг", "Львів",
            "Миколаїв", "Маріуполь", "Івано-Франківськ", "Луганськ", "Кременчук", "Вінниця", "Тернопіль",
            "Макіївка", "Луцьк", "Севастополь", "Біла Церква", "Сімферополь", "Краматорськ", "Херсон", "Мелітополь",
            "Полтава", "Керч", "Чернігів", "Нікополь", "Черкаси", "Словянськ", "Житомир", "Ужгород", "Суми", "Бердянськ",
            "Хмельницький", "Алчевськ", "Чернівці", "Павлоград", "Горлівка", "Сєвєродонецьк", "Рівне", "Євпаторія",
            "Камянське (Дніпродзержинськ)", "Лисичанськ", "Кропивницький (Кіровоград)", "Камянець-Подільський",
            "Авдіївка", "Алупка", "Алушта", "Амвросіївка", "Андрушівка", "Антрацит", "Апостолове",
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
            "Яготин", "Ялта", "Ямпіль", "Яремче", "Ясинувата"
        ];

        $scope.autoArray = {
            automobile: [
            {
                auto: "Acura"
            },
            {
                auto: "Alfa Romeo"
            },
            {
                auto: "Aston Martin"
            },
            {
                auto: "Audi"
            },
            {
                auto: "BAW"
            },
            {
                auto: "Bentley"
            },
            {
                auto: "BMW"
            },
            {
                auto: "Brilliance"
            },
            {
                auto: "Bugatti"
            },
            {
                auto: "Buick"
            },
            {
                auto: "BYD"
            },
            {
                auto: "Cadillac"
            },
            {
                auto: "Changan"
            },
            {
                auto: "Chery"
            },
            {
                auto: "Chevrolet"
            },
            {
                auto: "Chrysler"
            },
            {
                auto: "Citroen"
            },
            {
                auto: "Dadi"
            },
            {
                auto: "Daewoo"
            },
            {
                auto: "Daihatsu"
            },
            {
                auto: "Datsun"
            },
            {
                auto: "DFSK"
            },
            {
                auto: "Dodge"
            },
            {
                auto: "DongFeng"
            },
            {
                auto: "DS"
            },
            {
                auto: "FAW"
            },
            {
                auto: "Ferrari"
            },
            {
                auto: "Fiat"
            },
            {
                auto: "Ford"
            },
            {
                auto: "Foton"
            },
            {
                auto: "GAC"
            },
            {
                auto: "Geely"
            },
            {
                auto: "Genesis"
            },
            {
                auto: "GMC"
            },
            {
                auto: "Great Wall"
            },
            {
                auto: "Haima"
            },
            {
                auto: "Haval"
            },
            {
                auto: "Honda"
            },
            {
                auto: "Hummer"
            },
            {
                auto: "Hyundai"
            },
            {
                auto: "Infiniti"
            },
            {
                auto: "Isuzu"
            },
            {
                auto: "Iveco"
            },
            {
                auto: "JAC"
            },
            {
                auto: "Jaguar"
            },
            {
                auto: "Jeep"
            },
            {
                auto: "JMC"
            },
            {
                auto: "Kia"
            },
            {
                auto: "Lada / ВАЗ"
            },
            {
                auto: "Lamborghini"
            },
            {
                auto: "Lancia"
            },
            {
                auto: "Land Rover"
            },
            {
                auto: "Lexus"
            },
            {
                auto: "Lifan"
            },
            {
                auto: "Lincoln"
            },
            {
                auto: "Luxgen"
            },
            {
                auto: "Maserati"
            },
            {
                auto: "Maybach"
            },
            {
                auto: "Mazda"
            },
            {
                auto: "Mercedes-Benz"
            },
            {
                auto: "Mercury"
            },
            {
                auto: "MG"
            },
            {
                auto: "Mini"
            },
            {
                auto: "Mitsubishi"
            },
            {
                auto: "Nissan"
            },
            {
                auto: "Oldsmobile"
            },
            {
                auto: "Opel"
            },
            {
                auto: "Peugeot"
            },
            {
                auto: "Pontiac"
            },
            {
                auto: "Porsche"
            },
            {
                auto: "Ravon"
            },
            {
                auto: "Renault"
            },
            {
                auto: "Rolls-Royce"
            },
            {
                auto: "Rover"
            },
            {
                auto: "Saab"
            },
            {
                auto: "Samand"
            },
            {
                auto: "Scion"
            },
            {
                auto: "SEAT"
            },
            {
                auto: "Skoda"
            },
            {
                auto: "Smart"
            },
            {
                auto: "SsangYong"
            },
            {
                auto: "Subaru"
            },
            {
                auto: "Suzuki"
            },
            {
                auto: "Tesla"
            },
            {
                auto: "Toyota"
            },
            {
                auto: "Volkswagen"
            },
            {
                auto: "Volvo"
            },
            {
                auto: "Wartburg"
            },
            {
                auto: "YUEJIN"
            },
            {
                auto: "ZAZ / ЗАЗ"
            },
            {
                auto: "Zotye"
            },
            {
                auto: "Богдан"
            },
            {
                auto: "ГАЗ"
            },
            {
                auto: "ИЖ"
            },
            {
                auto: "ЛУАЗ"
            },
            {
                auto: "Москвич / АЗЛК"
            },
            {
                auto: "ТагАЗ"
            },
            {
                auto: "УАЗ"
            }
        ],
            truck: [
            {
                auto: "Astra "
            },
            {
                auto: "Avia"
            },
            {
                auto: "BAW"
            },
            {
                auto: "Beifang Benchi"
            },
            {
                auto: "BMC"
            },
            {
                auto: "Bremach"
            },
            {
                auto: "CAMC"
            },
            {
                auto: "Chevrolet"
            },
            {
                auto: "Citroen"
            },
            {
                auto: "DAF"
            },
            {
                auto: "DFSK"
            },
            {
                auto: "Dodge"
            },
            {
                auto: "Dongfeng"
            },
            {
                auto: "ERF"
            },
            {
                auto: "FAW"
            },
            {
                auto: "Fiat"
            },
            {
                auto: "Foden"
            },
            {
                auto: "Ford"
            },
            {
                auto: "Foton"
            },
            {
                auto: "Freightliner"
            },
            {
                auto: "GMC"
            },
            {
                auto: "Hino Motors"
            },
            {
                auto: "Howo"
            },
            {
                auto: "Hyundai"
            },
            {
                auto: "International"
            },
            {
                auto: "Isuzu"
            },
            {
                auto: "Iveco"
            },
            {
                auto: "JAC"
            },
            {
                auto: "Jeep"
            },
            {
                auto: "Jelcz"
            },
            {
                auto: "JMC"
            },
            {
                auto: "Kenworth"
            },
            {
                auto: "Kia"
            },
            {
                auto: "Land Rover"
            },
            {
                auto: "LDV"
            },
            {
                auto: "Mack"
            },
            {
                auto: "MAN"
            },
            {
                auto: "Mazda"
            },
            {
                auto: "Mercedes-Benz"
            },
            {
                auto: "Mitsubishi"
            },
            {
                auto: "Multicar"
            },
            {
                auto: "Naveco"
            },
            {
                auto: "Nissan"
            },
            {
                auto: "Opel"
            },
            {
                auto: "Peterbilt"
            },
            {
                auto: "Peugeot"
            },
            {
                auto: "Piaggio"
            },
            {
                auto: "Proton"
            },
            {
                auto: "Renault"
            },
            {
                auto: "Roman"
            },
            {
                auto: "Scania"
            },
            {
                auto: "Seddon Atkinson"
            },
            {
                auto: "Shaanxi"
            },
            {
                auto: "Sinotruk"
            },
            {
                auto: "Sisu"
            },
            {
                auto: "Star"
            },
            {
                auto: "Sterling"
            },
            {
                auto: "Tata"
            },
            {
                auto: "Tatra"
            },
            {
                auto: "Terberg"
            },
            {
                auto: "Toyota"
            },
            {
                auto: "Vauxhall"
            },
            {
                auto: "Volkswagen"
            },
            {
                auto: "Volvo"
            },
            {
                auto: "Western Star"
            },
            {
                auto: "YUEJIN"
            },
            {
                auto: "БЕЛАЗ"
            },
            {
                auto: "ГАЗ"
            },
            {
                auto: "ЗИЛ"
            },
            {
                auto: "КАМАЗ"
            },
            {
                auto: "КРАЗ"
            },
            {
                auto: "МАЗ"
            },
            {
                auto: "МАЗ-МАН"
            },
            {
                auto: "УАЗ"
            },
            {
                auto: "Урал"
            }
        ],
            bus: [
            {
                auto: "AMZ"
            },
            {
                auto: "Ankai"
            },
            {
                auto: "Ashok Leyland"
            },
            {
                auto: "Autosan"
            },
            {
                auto: "Avia"
            },
            {
                auto: "Ayats"
            },
            {
                auto: "BAW"
            },
            {
                auto: "BMC"
            },
            {
                auto: "Bova"
            },
            {
                auto: "Caetano"
            },
            {
                auto: "Chevrolet"
            },
            {
                auto: "Citroën"
            },
            {
                auto: "DAB"
            },
            {
                auto: "Daewoo"
            },
            {
                auto: "DAF"
            },
            {
                auto: "DEN Oudsten"
            },
            {
                auto: "Eagle"
            },
            {
                auto: "EOS"
            },
            {
                auto: "Fiat"
            },
            {
                auto: "Ford"
            },
            {
                auto: "Foton"
            },
            {
                auto: "GAZ / ГАЗ"
            },
            {
                auto: "GMC"
            },
            {
                auto: "Golden Dragon"
            },
            {
                auto: "Higer"
            },
            {
                auto: "Hino"
            },
            {
                auto: "Hyundai"
            },
            {
                auto: "Ikarus / Ікарус"
            },
            {
                auto: "International"
            },
            {
                auto: "Irisbus"
            },
            {
                auto: "Irizar"
            },
            {
                auto: "Isuzu"
            },
            {
                auto: "Iveco"
            },
            {
                auto: "JAC"
            },
            {
                auto: "Jonckheere"
            },
            {
                auto: "Karosa"
            },
            {
                auto: "Kässbohrer"
            },
            {
                auto: "Kia"
            },
            {
                auto: "King Long"
            },
            {
                auto: "MAN"
            },
            {
                auto: "Marcopolo"
            },
            {
                auto: "MCV"
            },
            {
                auto: "Mercedes"
            },
            {
                auto: "Mitsubishi"
            },
            {
                auto: "Neoplan"
            },
            {
                auto: "Nissan"
            },
            {
                auto: "Opel"
            },
            {
                auto: "Optare"
            },
            {
                auto: "Otokar"
            },
            {
                auto: "Peugeot"
            },
            {
                auto: "Renault"
            },
            {
                auto: "Sanos"
            },
            {
                auto: "Scania"
            },
            {
                auto: "Setra"
            },
            {
                auto: "Shaolin"
            },
            {
                auto: "Shen Long"
            },
            {
                auto: "Solaris"
            },
            {
                auto: "SOR"
            },
            {
                auto: "Sunlong"
            },
            {
                auto: "Tata"
            },
            {
                auto: "Temsa"
            },
            {
                auto: "Thomas"
            },
            {
                auto: "Toyota"
            },
            {
                auto: "Troliga"
            },
            {
                auto: "Van Hool"
            },
            {
                auto: "VDL"
            },
            {
                auto: "VDL Berkhof"
            },
            {
                auto: "VDL Bova"
            },
            {
                auto: "VDL Jonckheere"
            },
            {
                auto: "VolksWagen"
            },
            {
                auto: "Volvo"
            },
            {
                auto: "Yutong"
            },
            {
                auto: "Zhong Tong"
            },
            {
                auto: "Zonda"
            },
            {
                auto: "Атаман"
            },
            {
                auto: "БАЗ"
            },
            {
                auto: "БЕЛКОММУНМАШ"
            },
            {
                auto: "Богдан"
            },
            {
                auto: "ГАЛАЗ"
            },
            {
                auto: "ГОЛАЗ"
            },
            {
                auto: "Еталон / Эталон"
            },
            {
                auto: "ЗАЗ"
            },
            {
                auto: "КАМАЗ"
            },
            {
                auto: "ЛАЗ"
            },
            {
                auto: "Ліаз / Лиаз"
            },
            {
                auto: "МАЗ"
            },
            {
                auto: "МАЗ-МАН"
            },
            {
                auto: "МАРЗ"
            },
            {
                auto: "Неман"
            },
            {
                auto: "НЕФАЗ"
            },
            {
                auto: "Олімп / Олимп"
            },
            {
                auto: "ПАЗ"
            },
            {
                auto: "РОАЗ"
            },
            {
                auto: "Стрий авто"
            }
        ],
            moto: [
            {
                auto: "Acabion"
            },
            {
                auto: "Adler"
            },
            {
                auto: "Adly"
            },
            {
                auto: "Aeon"
            },
            {
                auto: "Aermacchi"
            },
            {
                auto: "AJP"
            },
            {
                auto: "AJS"
            },
            {
                auto: "Alfer"
            },
            {
                auto: "Amazonas"
            },
            {
                auto: "American IronHorse"
            },
            {
                auto: "Anzani"
            },
            {
                auto: "Aprilia"
            },
            {
                auto: "Arctic Cat"
            },
            {
                auto: "Ariel"
            },
            {
                auto: "ATK"
            },
            {
                auto: "Atlas Honda"
            },
            {
                auto: "Atomo"
            },
            {
                auto: "Audi"
            },
            {
                auto: "Autostudio"
            },
            {
                auto: "Bajaj"
            },
            {
                auto: "Batman"
            },
            {
                auto: "Benelli"
            },
            {
                auto: "Beta"
            },
            {
                auto: "Big Bear Choppers"
            },
            {
                auto: "Biman"
            },
            {
                auto: "Bimota"
            },
            {
                auto: "Blata"
            },
            {
                auto: "Blue"
            },
            {
                auto: "BMW"
            },
            {
                auto: "Borile"
            },
            {
                auto: "Boss Hoss"
            },
            {
                auto: "Brammo"
            },
            {
                auto: "BSA"
            },
            {
                auto: "BucciMoto"
            },
            {
                auto: "Buell"
            },
            {
                auto: "Bultaco"
            },
            {
                auto: "Cagiva"
            },
            {
                auto: "Campagna"
            },
            {
                auto: "Can-Am"
            },
            {
                auto: "Cannondale"
            },
            {
                auto: "CCM"
            },
            {
                auto: "Centaurus"
            },
            {
                auto: "Confederate"
            },
            {
                auto: "CR&S"
            },
            {
                auto: "CZ"
            },
            {
                auto: "Daelim"
            },
            {
                auto: "Derbi"
            },
            {
                auto: "DKW"
            },
            {
                auto: "Dnepr / Дніпро"
            },
            {
                auto: "Dodge"
            },
            {
                auto: "Dolmar"
            },
            {
                auto: "Ducati"
            },
            {
                auto: "EBR"
            },
            {
                auto: "Fantic"
            },
            {
                auto: "Ferrari"
            },
            {
                auto: "Fischer"
            },
            {
                auto: "Futong"
            },
            {
                auto: "Garelli"
            },
            {
                auto: "GAS GAS"
            },
            {
                auto: "Generic"
            },
            {
                auto: "Geneva"
            },
            {
                auto: "Geon"
            },
            {
                auto: "Gilera"
            },
            {
                auto: "Harley-Davidson"
            },
            {
                auto: "HDT"
            },
            {
                auto: "Hercules"
            },
            {
                auto: "Hero Honda"
            },
            {
                auto: "Highland"
            },
            {
                auto: "Honda"
            },
            {
                auto: "Horex"
            },
            {
                auto: "Husaberg"
            },
            {
                auto: "Husqvarna"
            },
            {
                auto: "Hyosung"
            },
            {
                auto: "Icon"
            },
            {
                auto: "Indian"
            },
            {
                auto: "Italjet"
            },
            {
                auto: "Jawa / Ява"
            },
            {
                auto: "Jinlang"
            },
            {
                auto: "JRL"
            },
            {
                auto: "Kavaki"
            },
            {
                auto: "Kawasaki"
            },
            {
                auto: "Keeway"
            },
            {
                auto: "Kreidler"
            },
            {
                auto: "KTM"
            },
            {
                auto: "Kymco"
            },
            {
                auto: "Laverda"
            },
            {
                auto: "Lifan"
            },
            {
                auto: "Lito"
            },
            {
                auto: "Loncin"
            },
            {
                auto: "Maico"
            },
            {
                auto: "Malaguti"
            },
            {
                auto: "Mansory"
            },
            {
                auto: "Matchless"
            },
            {
                auto: "MBK"
            },
            {
                auto: "MINI"
            },
            {
                auto: "Minsk"
            },
            {
                auto: "Mission Motors"
            },
            {
                auto: "Mondial"
            },
            {
                auto: "Montesa"
            },
            {
                auto: "Morini"
            },
            {
                auto: "Moto FGR"
            },
            {
                auto: "Moto Guzzi"
            },
            {
                auto: "Moto Morini"
            },
            {
                auto: "MotoCzysz"
            },
            {
                auto: "Motolevo"
            },
            {
                auto: "Motorhispania"
            },
            {
                auto: "Motus"
            },
            {
                auto: "Münch"
            },
            {
                auto: "Musstang"
            },
            {
                auto: "MUZ"
            },
            {
                auto: "MV Agusta"
            },
            {
                auto: "MZ"
            },
            {
                auto: "NCR"
            },
            {
                auto: "Neander"
            },
            {
                auto: "Nembo Motociclette"
            },
            {
                auto: "Norton"
            },
            {
                auto: "Orion"
            },
            {
                auto: "Ossa"
            },
            {
                auto: "Pannonia"
            },
            {
                auto: "Petronas"
            },
            {
                auto: "Peugeot"
            },
            {
                auto: "PGO"
            },
            {
                auto: "Piaggio"
            },
            {
                auto: "Polaris"
            },
            {
                auto: "Puch"
            },
            {
                auto: "Quadro"
            },
            {
                auto: "Radial Engine"
            },
            {
                auto: "Regent"
            },
            {
                auto: "Renard"
            },
            {
                auto: "Rieju"
            },
            {
                auto: "Roehr"
            },
            {
                auto: "Rokon"
            },
            {
                auto: "Rotax"
            },
            {
                auto: "Royal Enfield"
            },
            {
                auto: "Sachs"
            },
            {
                auto: "Sbay"
            },
            {
                auto: "Sherco"
            },
            {
                auto: "Shineray"
            },
            {
                auto: "Siemens"
            },
            {
                auto: "Simson"
            },
            {
                auto: "SkyBike"
            },
            {
                auto: "SkyMoto"
            },
            {
                auto: "Smart"
            },
            {
                auto: "Suzuki"
            },
            {
                auto: "SYM"
            },
            {
                auto: "Track"
            },
            {
                auto: "Triumph"
            },
            {
                auto: "Ural / Урал"
            },
            {
                auto: "Vahrenkamp"
            },
            {
                auto: "Vectrix"
            },
            {
                auto: "Vertemati"
            },
            {
                auto: "Vespa"
            },
            {
                auto: "Victory"
            },
            {
                auto: "Vincent"
            },
            {
                auto: "Viper"
            },
            {
                auto: "Volta"
            },
            {
                auto: "VOR"
            },
            {
                auto: "Voxan"
            },
            {
                auto: "Vyrus"
            },
            {
                auto: "Walz Hardcore Cycles"
            },
            {
                auto: "West Coast Choppers"
            },
            {
                auto: "Yamaha"
            },
            {
                auto: "Yumbo"
            },
            {
                auto: "Zero"
            },
            {
                auto: "Zongshen"
            },
            {
                auto: "Zündapp"
            }
        ],
            wagen: [
            {
                auto: "Abbey"
            },
            {
                auto: "Abi"
            },
            {
                auto: "Ackermann"
            },
            {
                auto: "Adria"
            },
            {
                auto: "Afrit"
            },
            {
                auto: "AJK"
            },
            {
                auto: "Al-ko"
            },
            {
                auto: "American"
            },
            {
                auto: "AMT"
            },
            {
                auto: "Avento"
            },
            {
                auto: "Bailey"
            },
            {
                auto: "Barthau"
            },
            {
                auto: "Belshe"
            },
            {
                auto: "Benalu"
            },
            {
                auto: "Blomenröhr"
            },
            {
                auto: "Blumhardt"
            },
            {
                auto: "Böcker"
            },
            {
                auto: "Böckmann"
            },
            {
                auto: "Boro"
            },
            {
                auto: "Brenderup"
            },
            {
                auto: "Briab"
            },
            {
                auto: "Broshuis"
            },
            {
                auto: "Burg"
            },
            {
                auto: "Burstner"
            },
            {
                auto: "Busaf"
            },
            {
                auto: "Carnehl"
            },
            {
                auto: "Chateau"
            },
            {
                auto: "DAF"
            },
            {
                auto: "Dapa"
            },
            {
                auto: "De Luxe"
            },
            {
                auto: "Desot"
            },
            {
                auto: "Dethleffs"
            },
            {
                auto: "Dinkel"
            },
            {
                auto: "Doll"
            },
            {
                auto: "Draco"
            },
            {
                auto: "Eager Beaver"
            },
            {
                auto: "Ebert"
            },
            {
                auto: "Ekeri"
            },
            {
                auto: "Elddis"
            },
            {
                auto: "Elegance"
            },
            {
                auto: "Eurovagon"
            },
            {
                auto: "Felling"
            },
            {
                auto: "Fendt"
            },
            {
                auto: "Fliegl"
            },
            {
                auto: "Fontaine"
            },
            {
                auto: "Fruehauf"
            },
            {
                auto: "Goldhofer"
            },
            {
                auto: "Great Dane"
            },
            {
                auto: "Groenewegen"
            },
            {
                auto: "GS"
            },
            {
                auto: "Henred"
            },
            {
                auto: "HFR"
            },
            {
                auto: "Hobby"
            },
            {
                auto: "Huffermann"
            },
            {
                auto: "Humbaur"
            },
            {
                auto: "IFA / ІФА"
            },
            {
                auto: "Ifor Williams"
            },
            {
                auto: "Indespension"
            },
            {
                auto: "Istrail"
            },
            {
                auto: "JPM"
            },
            {
                auto: "Jung"
            },
            {
                auto: "Jyki"
            },
            {
                auto: "Kassbohrer"
            },
            {
                auto: "Kel-Berg"
            },
            {
                auto: "Kilafors"
            },
            {
                auto: "Knaus"
            },
            {
                auto: "Knott / Кнотт"
            },
            {
                auto: "Kogel"
            },
            {
                auto: "Krone"
            },
            {
                auto: "LAG"
            },
            {
                auto: "Langendorf"
            },
            {
                auto: "Latre"
            },
            {
                auto: "Leskor"
            },
            {
                auto: "Lipe"
            },
            {
                auto: "LMC"
            },
            {
                auto: "LOAD KING"
            },
            {
                auto: "Lohr"
            },
            {
                auto: "MAC"
            },
            {
                auto: "Marauder"
            },
            {
                auto: "Mega"
            },
            {
                auto: "Meiller"
            },
            {
                auto: "Menke"
            },
            {
                auto: "Meusburger"
            },
            {
                auto: "Michieletto"
            },
            {
                auto: "Moiroud"
            },
            {
                auto: "Montracon"
            },
            {
                auto: "Moslein"
            },
            {
                auto: "MST"
            },
            {
                auto: "Müller"
            },
            {
                auto: "Muller-Mitteltal"
            },
            {
                auto: "Munsterland"
            },
            {
                auto: "Narko"
            },
            {
                auto: "Niewiadow"
            },
            {
                auto: "Nooteboom"
            },
            {
                auto: "NTM"
            },
            {
                auto: "Obermaier"
            },
            {
                auto: "Pacton"
            },
            {
                auto: "Panav"
            },
            {
                auto: "Parator"
            },
            {
                auto: "PJ"
            },
            {
                auto: "Platin"
            },
            {
                auto: "PRO"
            },
            {
                auto: "Quest"
            },
            {
                auto: "Rapido"
            },
            {
                auto: "Reko"
            },
            {
                auto: "Renders"
            },
            {
                auto: "Respo"
            },
            {
                auto: "Robinson"
            },
            {
                auto: "Rohr"
            },
            {
                auto: "Sa Truck Bodies"
            },
            {
                auto: "Samro"
            },
            {
                auto: "Schmitz"
            },
            {
                auto: "Schmitz Cargobull"
            },
            {
                auto: "Schwarzmueller"
            },
            {
                auto: "Schwarzmüller"
            },
            {
                auto: "SDC"
            },
            {
                auto: "Sommer"
            },
            {
                auto: "Spier"
            },
            {
                auto: "Stema"
            },
            {
                auto: "Sterckeman"
            },
            {
                auto: "Sunlight"
            },
            {
                auto: "Svan"
            },
            {
                auto: "Tabbert"
            },
            {
                auto: "TCS"
            },
            {
                auto: "Tiki Treiler"
            },
            {
                auto: "TOWMASTER"
            },
            {
                auto: "Trail King"
            },
            {
                auto: "Trouillet"
            },
            {
                auto: "UP"
            },
            {
                auto: "Vactor"
            },
            {
                auto: "VAK"
            },
            {
                auto: "Van Hool"
            },
            {
                auto: "Variant"
            },
            {
                auto: "Wabash"
            },
            {
                auto: "Wagen-meyer"
            },
            {
                auto: "Weckman"
            },
            {
                auto: "Weightlifter"
            },
            {
                auto: "Weinsberg"
            },
            {
                auto: "Wellmeyer"
            },
            {
                auto: "Wielton"
            },
            {
                auto: "Wilk"
            },
            {
                auto: "Авто-Стен"
            },
            {
                auto: "Бобер"
            },
            {
                auto: "ГКБ"
            },
            {
                auto: "ЗАЗ"
            },
            {
                auto: "ЗИЛ"
            },
            {
                auto: "ЗСАП"
            },
            {
                auto: "КАМАЗ"
            },
            {
                auto: "Карз-М"
            },
            {
                auto: "Корида-Тех"
            },
            {
                auto: "Кортес"
            },
            {
                auto: "Кремень"
            },
            {
                auto: "Лев"
            },
            {
                auto: "Лідер / Лидер"
            },
            {
                auto: "МАЗ"
            },
            {
                auto: "Одісей"
            },
            {
                auto: "Оптіма"
            },
            {
                auto: "ПАВАМ"
            },
            {
                auto: "Палич"
            },
            {
                auto: "ПГМФ"
            },
            {
                auto: "Сантей"
            },
            {
                auto: "Скіф / Скиф"
            },
            {
                auto: "Та-Но"
            },
            {
                auto: "Утос"
            },
            {
                auto: "Фермер"
            }
        ]
        };

        $scope.autoArrayConvert = [];
        $scope.truckArrayConvert = [];
        $scope.busArrayConvert = [];
        $scope.motoArrayConvert = [];
        $scope.wagenArrayConvert = [];
        
        $scope.arrayConvert = $scope.autoArrayConvert;

        for (var index in $scope.autoArray.automobile) {
            $scope.autoArrayConvert.push($scope.autoArray.automobile[index].auto);
        }

        for (var index in $scope.autoArray.truck) {
            $scope.truckArrayConvert.push($scope.autoArray.truck[index].auto);
        }

        for (var index in $scope.autoArray.bus) {
            $scope.busArrayConvert.push($scope.autoArray.bus[index].auto);
        }

        for (var index in $scope.autoArray.moto) {
            $scope.motoArrayConvert.push($scope.autoArray.moto[index].auto);
        }

        for (var index in $scope.autoArray.wagen) {
            $scope.wagenArrayConvert.push($scope.autoArray.wagen[index].auto);
        }


        // search

        $scope.filterShow = false;

        $scope.clickCity = function(city, cityName){
            console.log('1111');
            console.log(city);
            $scope.cityClass = city;
            $scope.cityName = cityName;
            $scope.query = cityName;
            $scope.placeCity = cityName;
            
                if (city == 'city0') {
                    $scope.K2 = $scope.coeficient.data.city0;
                    console.log($scope.K2);
                }
                else if (city == 'city1') {
                    $scope.K2 = $scope.coeficient.data.city1;
                    console.log($scope.K2);
                }
                else if (city == 'city2') {
                    $scope.K2 = $scope.coeficient.data.city2;
                    console.log($scope.K2);
                }
                else if (city == 'city3') {
                    $scope.K2 = $scope.coeficient.data.city3;
                    console.log($scope.K2);
                }
                else if (city == 'city4') {
                    $scope.K2 = $scope.coeficient.data.city4;
                    console.log($scope.K2);
                }
                else if (city == 'city5') {
                    $scope.K2 = $scope.coeficient.data.city5;
                    console.log($scope.K2);
                }
            };

        // dcv object

        $scope.dcvObject = {
            limit: [
                {
                    axa: [
                        {
                            city: 245,
                            cityArray: ['Київ', 'Бориспіль', 'Боярка']
                        },
                        {
                            city: 215,
                            cityArray: ['default']
                        }
                    ],
                    unika: [
                        {
                            city: 165,
                            cityArray: ['Київ', 'Бориспіль', 'Боярка', 'Бровари', 'Васильків', 'Вишгород', 'Вишневе', 'Ірпінь']
                        },
                        {
                            city: 132,
                            cityArray: ['Харків', 'Одеса', 'Донецьк', 'Дніпро', 'Запоріжжя']
                        },
                        {
                            city: 107,
                            cityArray: ['default']
                        }
                    ],
                    usg: [
                        {
                            city: 250,
                            cityArray: ['default']
                        }
                    ],
                    pzu: [
                        {
                            city: 160,
                            cityArray: ['Київ']
                        },
                        {
                            city: 100,
                            cityArray: ['default']
                        }
                    ]
                },
                {
                    axa: [
                        {
                            city: 290,
                            cityArray: ['Київ', 'Бориспіль', 'Боярка']
                        },
                        {
                            city: 260,
                            cityArray: ['default']
                        }
                    ],
                    unika: [
                        {
                            city: 270,
                            cityArray: ['Київ', 'Бориспіль', 'Боярка', 'Бровари', 'Васильків', 'Вишгород', 'Вишневе', 'Ірпінь']
                        },
                        {
                            city: 216,
                            cityArray: ['Харків', 'Одеса', 'Донецьк', 'Дніпро', 'Запоріжжя']
                        },
                        {
                            city: 176,
                            cityArray: ['default']
                        }
                    ],
                    usg: [
                        {
                            city: 350,
                            cityArray: ['default']
                        }
                    ],
                    pzu: [
                        {
                            city: 540,
                            cityArray: ['Київ']
                        },
                        {
                            city: 300,
                            cityArray: ['default']
                        }
                    ]
                },
                {
                    axa: [
                        {
                            city: 410,
                            cityArray: ['Київ', 'Бориспіль', 'Боярка']
                        },
                        {
                            city: 370,
                            cityArray: ['default']
                        }
                    ],
                    unika: [
                        {
                            city: 330,
                            cityArray: ['Київ', 'Бориспіль', 'Боярка', 'Бровари', 'Васильків', 'Вишгород', 'Вишневе', 'Ірпінь']
                        },
                        {
                            city: 264,
                            cityArray: ['Харків', 'Одеса', 'Донецьк', 'Дніпро', 'Запоріжжя']
                        },
                        {
                            city: 215,
                            cityArray: ['default']
                        }
                    ],
                    usg: [
                        {
                            city: 650,
                            cityArray: ['default']
                        }
                    ],
                    pzu: [
                        {
                            city: 880,
                            cityArray: ['Київ']
                        },
                        {
                            city: 480,
                            cityArray: ['default']
                        }
                    ]
                }
            ]};
        
        // drive experience obj

        $scope.insuranceDriveExperience = {

            more_2013: [$scope.coeficient.data.K1_1, $scope.coeficient.data.K1_2,
                $scope.coeficient.data.K1_3, $scope.coeficient.data.K1_4],
            year_2014: [$scope.coeficient.data.K2_1, $scope.coeficient.data.K2_2,
                $scope.coeficient.data.K2_3, $scope.coeficient.data.K2_4],
            year_2015: [$scope.coeficient.data.K3_1, $scope.coeficient.data.K3_2,
                $scope.coeficient.data.K3_3, $scope.coeficient.data.K3_4],
            year_2016: [$scope.coeficient.data.K4_1, $scope.coeficient.data.K4_2,
                $scope.coeficient.data.K4_3, $scope.coeficient.data.K4_4],
            year_2017: [$scope.coeficient.data.K5_1, $scope.coeficient.data.K5_2,
                $scope.coeficient.data.K5_3, $scope.coeficient.data.K5_4]
        };
        
        // variables

        $scope.francAxa = '0';
        $scope.francPzu = '1000';
        $scope.francUnika = '0';
        $scope.francUsg = '1000';
        $scope.dgo = '/ ДГО, 0';
        $scope.franc = '0';
        $scope.pilgaText = 'Не маю';
        $scope.autoYear = '2013 р. і раніше';
        $scope.autoCategory = 'Легкове авто';
        $scope.DTP = 'більше 4 років';
        $scope.taxiQuestion = 'Ні';
        $scope.engine = 'до 1600 см';
        $scope.insuranceName = '';
        $scope.cityClass = 'city0';
        $scope.cityName = 'Київ';
        $scope.placeCity = 'Київ';
        $scope.pasteData = [];
        $scope.dcvDefault = 0;
        $scope.limitCount = false;
        $scope.K1 = $scope.coeficient.data.B1;
        $scope.K2 = $scope.coeficient.data.city0;
        $scope.K3 = $scope.coeficient.data.G1;
        $scope.K4 = $scope.coeficient.data.H0;
        $scope.K5 = $scope.coeficient.data.I;
        $scope.K6 = $scope.coeficient.data.J;
        $scope.Kpil = $scope.coeficient.data.L;
        $scope.KBP = $scope.coeficient.data.BP;
        $scope.KBM = [];
        $scope.KBMdef = ["1","1","1","1"];
        $scope.KBMdefCheck = false;

        // default value for driving experience

        var i = 0;
        $scope.insuranceDriveExperience.more_2013.forEach(function(elem){
            $scope.KBM[i] = elem;
            i++;
        });
        console.log($scope.KBM);
        
        // default insurance company

        $scope.KBMcoef = parseFloat($scope.KBM[0]);
        console.log($scope.KBMcoef);

        // click events

        $scope.virginUse = function(id, className) {
            console.log(className);
            document.getElementById(id).checked = true;
            document.querySelector('.'+className).classList.remove(className);
            document.getElementById(id).nextElementSibling.classList.add(className);
        };

        $scope.clickLimit = function(index) {

            $scope.pasteData = index;

            $scope.insertCash = function(part) {

                if (index == false) {
                    $scope.dcvDefault = 0;
                }

                else {

                    $scope.number = part.length;
                    $scope.dcvDefault = part[$scope.number-1];
                    $scope.dcvDefault = $scope.dcvDefault.city;

                    part.forEach(function(ins){

                        $scope.cityCheck = ins.cityArray.indexOf($scope.cityName);
                        console.log();

                        if ($scope.cityCheck >= 0) {
                            $scope.dcvDefault = ins.city;
                        }

                    });

                }

                return $scope.dcvDefault;

            }

        };

        $scope.autoTabsClick = function(part) {
            $scope.K1 = parseFloat(part);
            console.log($scope.K1);
        };

        $scope.taxiClick = function(part) {
            $scope.K3 = parseFloat(part);
            console.log($scope.K3);
        };

        $scope.driveExp = function(part, city) {
            $scope.K4 = parseFloat(part);


            console.log($scope.K4);
        };

        $scope.pilgaClick = function(pilga) {
            $scope.Kpil = parseFloat(pilga);
            console.log($scope.Kpil);
        };

            // KBM coefficient

            $scope.insuranceChooseYear = function(year, id) {

                if ( $scope.KBMCheck == true) {
                    $scope.KBM = ["1","1","1","1"];
                }
                else {
                    var r = 0;
                    year.forEach(function (elem) {
                        $scope.KBM[r] = elem;
                        r++;
                    });
                }


                $scope.shadowtz = document.querySelectorAll('.tz_auto .button_more_label');
                $scope.shadowtz[id].previousElementSibling.checked = true;
                document.querySelector('.tz_auto .current-label').classList.remove('current-label');
                $scope.shadowtz[id].classList.add('current-label');
                
                $scope.shadow = document.querySelectorAll('.dtp_auto .button_more_label');
                $scope.shadow[id].previousElementSibling.checked = true;
                document.querySelector('.dtp_auto .current-label').classList.remove('current-label');
                $scope.shadow[id].classList.add('current-label');
                console.log($scope.KBM);

                $scope.shadowtz = document.querySelectorAll('.tz_weight .button_more_label');
                $scope.shadowtz[id].previousElementSibling.checked = true;
                document.querySelector('.tz_weight .current-label').classList.remove('current-label');
                $scope.shadowtz[id].classList.add('current-label');

                $scope.shadow = document.querySelectorAll('.dtp_weight .button_more_label');
                $scope.shadow[id].previousElementSibling.checked = true;
                document.querySelector('.dtp_weight .current-label').classList.remove('current-label');
                $scope.shadow[id].classList.add('current-label');
                console.log($scope.KBM);

                $scope.shadowtz = document.querySelectorAll('.tz_bus .button_more_label');
                $scope.shadowtz[id].previousElementSibling.checked = true;
                document.querySelector('.tz_bus .current-label').classList.remove('current-label');
                $scope.shadowtz[id].classList.add('current-label');

                $scope.shadow = document.querySelectorAll('.dtp_bus .button_more_label');
                $scope.shadow[id].previousElementSibling.checked = true;
                document.querySelector('.dtp_bus .current-label').classList.remove('current-label');
                $scope.shadow[id].classList.add('current-label');
                console.log($scope.KBM);

                $scope.shadowtz = document.querySelectorAll('.tz_moto .button_more_label');
                $scope.shadowtz[id].previousElementSibling.checked = true;
                document.querySelector('.tz_moto .current-label').classList.remove('current-label');
                $scope.shadowtz[id].classList.add('current-label');

                $scope.shadow = document.querySelectorAll('.dtp_moto .button_more_label');
                $scope.shadow[id].previousElementSibling.checked = true;
                document.querySelector('.dtp_moto .current-label').classList.remove('current-label');
                $scope.shadow[id].classList.add('current-label');
                console.log($scope.KBM);


                $scope.shadowtz = document.querySelectorAll('.tz_wagen .button_more_label');
                $scope.shadowtz[id].previousElementSibling.checked = true;
                document.querySelector('.tz_wagen .current-label').classList.remove('current-label');
                $scope.shadowtz[id].classList.add('current-label');

                $scope.shadow = document.querySelectorAll('.dtp_wagen .button_more_label');
                $scope.shadow[id].previousElementSibling.checked = true;
                document.querySelector('.dtp_wagen .current-label').classList.remove('current-label');
                $scope.shadow[id].classList.add('current-label');
                console.log($scope.KBM);

            };

            $scope.insuranceChoose = function(insuranceCompany) {
                $scope.KBMcoef = parseFloat(insuranceCompany);
                console.log($scope.KBMcoef);
                console.log($scope.cityName);

                if ($scope.cityClass == 'city1') {
                    $scope.K4 = $scope.coeficient.data.H1;
                    console.log('AAAAA');
                }

                else if ($scope.cityClass == 'city5') {
                    $scope.K4 = $scope.coeficient.data.H2;
                    console.log('BBBBBBB');
                }
            };

            /*---------------------------------------------------*/


        // calculating
        
        $scope.finalResult = 0;
        
        $scope.calculating = function(kbp,k1,k2,k3,k4,k5,k6,kbm,kpil){

            $scope.finalResult = parseFloat(kbp)*parseFloat(k1)*parseFloat(k2)*parseFloat(k3)
                *parseFloat(k4)*parseFloat(k5)*parseFloat(k6)*parseFloat(kbm)*parseFloat(kpil);
            $scope.finalResult =  $scope.finalResult.toFixed(2);



            console.log(kbp);
            console.log(k1);
            console.log(k2);
            console.log(k3);
            console.log(k4);
            console.log(k5);
            console.log(k6);
            console.log(kbm);
            console.log(kpil);
            console.log($scope.finalResult);

        };

    });

    // validation

    $scope.validation = function(form) {

        if(form.$valid){
            console.log('VALLLLIIIIDDD');
        }

    };

    $scope.clickAuto =  function(mark){
        $scope.auto = mark;
    };

    // Mark check

    $scope.wrongMarkCheck = false;

    $scope.checkMark = function(model,array) {
       for (var i = 0; i < array.length; i++) {

           if(model == null) {
               $scope.wrongMarkCheck = true;
               $scope.preForm.autoFilter.$setValidity('full-mark', false);
               break;
           }

           else {
               $scope.wrongMark = angular.equals(model.toLowerCase(), array[i].toLowerCase());

               if  ($scope.wrongMark == true) {
                   $scope.wrongMarkCheck = false;
                   $scope.preForm.autoFilter.$setValidity('full-mark', true);
                   break;
               }

               else {
                   $scope.wrongMarkCheck = true;
                   $scope.preForm.autoFilter.$setValidity('full-mark', false);
               }
           }
        }
    };

    $scope.checkBox = true;

    // City check

    $scope.wrongCityCheck = false;

    $scope.checkCity = function(model,array) {
        for (var i = 0; i < array.length; i++) {
            $scope.wrongCity = angular.equals(model.toLowerCase(), array[i].toLowerCase());

            if  ($scope.wrongCity == true) {
                console.log('city '+$scope.wrongCity);
                $scope.wrongCityCheck = false;
                break;
            }

            else {
                $scope.wrongCityCheck = true;
            }
        }
    };
    
    // RegExp 

    $scope.numberReg = /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/;
    $scope.ipnReg = /^[0-9]{10}$/;
    $scope.seriesReg = /^[а-яА-ЯІіЇїЄє]{2}$/;
    $scope.docNumberReg = /^[0-9]{6}$/;
    $scope.yearNumberReg = /^[0-9]{4}$/;

    // directives

    insuranceApp.directive('pwCheck', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                function customValidator(ngModelValue) {
                    console.log(ctrl);
                    ctrl.$setValidity('uppercaseValidator', true);
                    console.log(ctrl.$setValidity('uppercaseValidator', true));
                    return ngModelValue;
                }
                ctrl.$parsers.push(customValidator);
            }
        };

    }]);

}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyaWFibGVzIGZvciBjYWxjdWxhdGluZ1xyXG52YXIgazE7XHJcbnZhciB0YXJnZXRJbnB1dDtcclxuXHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gc21vb3RoIGxvYWRpbmdcclxuXHJcbiAgICB2YXIgdGFyZ2V0TG9hZGluZyA9IGpRdWVyeSgnc2VjdGlvbicpO1xyXG4gICAgdmFyIGZvb3RlciA9IGpRdWVyeSgnZm9vdGVyJyk7XHJcblxyXG4gICAgdGFyZ2V0TG9hZGluZy5pbWFnZXNMb2FkZWQoZnVuY3Rpb24oKXtcclxuICAgICAgICB0YXJnZXRMb2FkaW5nLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBmb290ZXIuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcXVlc3Rpb24gaG92ZXJcclxuXHJcbiAgICB2YXIgaG92ZXJUYXJnZXQgPSBqUXVlcnkoJy5xdWVzdGlvbl9jaXJjbGUnKTtcclxuXHJcbiAgICBob3ZlclRhcmdldC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBob3ZlckNsb3NlID0galF1ZXJ5KHRoaXMpLm5leHQoKTtcclxuICAgICAgICBob3ZlckNsb3NlLmZhZGVUb2dnbGUoMCk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsb3NlID0galF1ZXJ5KCcuY2FsY3VsYXRvcl9wb3B1cCAuY2xvc2UnKTtcclxuICAgICAgICAgICAgdmFyIGhvdmVyQW5zd2VyID0galF1ZXJ5KCcuYW5zd2VyX2NpcmNsZScpO1xyXG5cclxuICAgICAgICAgICAgaWYoIWhvdmVyQW5zd2VyLmlzKGUudGFyZ2V0KSAmJiAhaG92ZXJUYXJnZXQuaXMoZS50YXJnZXQpICYmIGhvdmVyQW5zd2VyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGhvdmVyQ2xvc2UuZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0b3Igb3BlblxyXG5cclxuICAgIHZhciBjYWxjQnV0dG9uID0galF1ZXJ5KCcuY2FsYycpO1xyXG4gICAgdmFyIGNhbGNTaGFkb3cgPSBqUXVlcnkoJy5jYWxjdWxhdG9yX3NoYWRvdycpO1xyXG4gICAgdmFyIGNhbGNQb3B1cCA9IGpRdWVyeSgnLmNhbGN1bGF0b3JfcG9wdXAnKTtcclxuXHJcbiAgICBjYWxjQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2FsY1NoYWRvdy5mYWRlVG9nZ2xlKDMwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xvc2UgPSBqUXVlcnkoJy5jYWxjdWxhdG9yX3BvcHVwIC5jbG9zZScpO1xyXG4gICAgICAgICAgICAvLyBjYWxjUG9wdXAgPSBqUXVlcnkoJy5jYWxjdWxhdG9yX3BvcHVwJyk7XHJcblxyXG4gICAgICAgICAgICBjbG9zZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY2FsY1NoYWRvdy5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoIWNhbGNQb3B1cC5pcyhlLnRhcmdldCkgJiYgY2FsY1BvcHVwLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNhbGNTaGFkb3cuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWVudVxyXG5cclxuICAgIHZhciBtZW51QnV0dG9uID0galF1ZXJ5KCdoZWFkZXIgLmJ1dHRvbicpO1xyXG4gICAgdmFyIHNpdGVNZW51ID0galF1ZXJ5KCdoZWFkZXIgbWVudScpO1xyXG5cclxuICAgIG1lbnVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XHJcbiAgICAgICAgc2l0ZU1lbnUuc2xpZGVUb2dnbGUoKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2l0ZU1lbnUuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICBtZW51QnV0dG9uLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudScpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNpdGVNZW51LmlzKGUudGFyZ2V0KSAmJiAhbWVudUJ1dHRvbi5pcyhlLnRhcmdldCkgJiYgIWpRdWVyeSgnaGVhZGVyIC5idXR0b24gaScpLmlzKGUudGFyZ2V0KSAmJiBzaXRlTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzaXRlTWVudS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICBtZW51QnV0dG9uLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmV3c1xyXG5cclxuICAgIHZhciBuZXdzVGV4dCA9IGpRdWVyeSgnLm5ld3NfaXRlbSBwJyk7XHJcbiAgICB2YXIgbmV3c0hlYWRlciA9IGpRdWVyeSgnLm5ld3NfaXRlbSBoMycpO1xyXG4gICAgdmFyIG5ld3NIZWFkZXJMaW5lSGVpZ2h0O1xyXG4gICAgdmFyIG5ld3NUZXh0TGluZUhlaWdodCA9IG5ld3NUZXh0LmNzcygnbGluZS1oZWlnaHQnKTtcclxuICAgIHZhciB3aXRob3V0UGl4ZWxzVGV4dCA9IHBhcnNlSW50KG5ld3NUZXh0TGluZUhlaWdodCk7XHJcbiAgICB2YXIgd2l0aG91dFBpeGVsc0hlYWRlcjtcclxuICAgIHZhciBuZXdzSGVhZGVySGVpZ2h0O1xyXG4gICAgdmFyIHR3b0xpbmUgPSB3aXRob3V0UGl4ZWxzVGV4dCoyO1xyXG5cclxuICAgIG5ld3NIZWFkZXIuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBuZXdzSGVhZGVyTGluZUhlaWdodCA9IGpRdWVyeSh0aGlzKS5jc3MoJ2xpbmUtaGVpZ2h0Jyk7XHJcbiAgICAgICAgd2l0aG91dFBpeGVsc0hlYWRlciA9IHBhcnNlSW50KG5ld3NIZWFkZXJMaW5lSGVpZ2h0KTtcclxuICAgICAgICBuZXdzSGVhZGVySGVpZ2h0ID0galF1ZXJ5KHRoaXMpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAod2l0aG91dFBpeGVsc0hlYWRlciA9PSBuZXdzSGVhZGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuY3NzKCdoZWlnaHQnLCB0d29MaW5lKydweCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgyKndpdGhvdXRQaXhlbHNIZWFkZXIgPT0gbmV3c0hlYWRlckhlaWdodCkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLmNzcygnaGVpZ2h0JywgKHR3b0xpbmUvMikrJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmFxcyB0YWJcclxuXHJcbiAgICB2YXIgZmFxc1F1ZXN0aW9uQmxvY2sgPSBqUXVlcnkoJy5xdWVzdGlvbl9ibG9jaycpO1xyXG4gICAgdmFyIGZhcXNRdWVzdGlvbkJsb2NrSW5kZXg7XHJcbiAgICB2YXIgZmFxc1RhYiA9IGpRdWVyeSgnLmZhcXNfdGFicyAudGFiJyk7XHJcbiAgICB2YXIgZmFxc1RhYkluZGV4O1xyXG4gICAgalF1ZXJ5KGZhcXNRdWVzdGlvbkJsb2NrWzBdKS5mYWRlSW4oMTAwKTtcclxuXHJcbiAgICBmYXFzVGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZmFxc1RhYi5yZW1vdmVDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgZmFxc1RhYkluZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZmFxc190YWJzIC50YWInKTtcclxuXHJcbiAgICAgICAgZmFxc1F1ZXN0aW9uQmxvY2suZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmYXFzUXVlc3Rpb25CbG9ja0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcucXVlc3Rpb25fYmxvY2snKTtcclxuICAgICAgICAgICAgaWYgKGZhcXNUYWJJbmRleCA9PSBmYXFzUXVlc3Rpb25CbG9ja0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBmYXFzUXVlc3Rpb25CbG9jay5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhdXRvIHRhYnNcclxuXHJcbiAgICB2YXIgaW5mb1dyYXBwZXIgPSBqUXVlcnkoJy5pbmZvX3dyYXBwZXInKTtcclxuICAgIHZhciBjYWxjQXJyb3cgPSBqUXVlcnkoJy5hdXRvX3RhYnNfaXRlbSAuYXJyb3cnKTtcclxuICAgIHZhciBjYWxjQXJyb3dJbmRleDtcclxuICAgIHZhciBhdXRvVGFicyA9IGpRdWVyeSgnLmF1dG9fdGFic19pdGVtJyk7XHJcbiAgICB2YXIgYXV0b1RhYnNJbmRleDtcclxuICAgIHZhciBhdXRvVGFic0Jsb2NrID0galF1ZXJ5KCcuYXV0b190YWJzX2JvdHRvbScpO1xyXG4gICAgdmFyIGF1dG9UYWJzQmxvY2tJbmRleDtcclxuXHJcbiAgICBqUXVlcnkoY2FsY0Fycm93WzBdKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgIGpRdWVyeShpbmZvV3JhcHBlclswXSkuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICBqUXVlcnkoYXV0b1RhYnNCbG9ja1swXSkuYWRkQ2xhc3MoJ2ZsZXgnKTtcclxuXHJcbiAgICBhdXRvVGFicy5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGF1dG9UYWJzLnJlbW92ZUNsYXNzKCdjdXJyZW50LWF1dG8tdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LWF1dG8tdGFiJyk7XHJcbiAgICAgICAgYXV0b1RhYnNJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmF1dG9fdGFic19pdGVtJyk7XHJcbiAgICAgICAgY2FsY0Fycm93LnJlbW92ZUNsYXNzKCdibG9jaycpO1xyXG4gICAgICAgIGNhbGNBcnJvd0luZGV4ID0galF1ZXJ5KHRoaXMpLmZpbmQoJy5hcnJvdycpLmFkZENsYXNzKCdibG9jaycpO1xyXG5cclxuICAgICAgICAvKtCh0LzQtdC90LAg0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQv9C+0LvQuNGB0LAg0JTQptCSINC90LAgc3RhdGVfMiovXHJcblxyXG4gICAgICAgIGlmIChhdXRvVGFic0luZGV4ICE9IDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2hhbmdpbmdfdGFibGUnKS5mYWRlT3V0KDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2NoYW5naW5nX3RhYmxlJykuZmFkZUluKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdXRvVGFic0Jsb2NrLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYXV0b1RhYnNCbG9ja0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuYXV0b190YWJzX2JvdHRvbScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGF1dG9UYWJzSW5kZXggPT0gYXV0b1RhYnNCbG9ja0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvV3JhcHBlci5yZW1vdmVDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShpbmZvV3JhcHBlclthdXRvVGFic0Jsb2NrSW5kZXhdKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzQmxvY2sucmVtb3ZlQ2xhc3MoJ2ZsZXgnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnZmxleCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBob3ZlciB3aXRob3V0IGxpbmVcclxuXHJcbiAgICB2YXIgaG92ZXJBID0galF1ZXJ5KCcuYWJvdXRfY3V2aWxrYSAuc3F1YXJlIC5kZXNjcmlwdGlvbiBhJyk7XHJcbiAgICBob3ZlckEuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBob3ZlckEuYWRkQ2xhc3MoJ3dpdGhvdXRPZmYnKTtcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBob3ZlckEucmVtb3ZlQ2xhc3MoJ3dpdGhvdXRPZmYnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXV0byBjdXZpbGthIGJvdHRvbVxyXG5cclxuICAgIHZhciBhZGRpdGlvbmFsTGltaXQgPSBqUXVlcnkoJyNhZGRpdGlvbmFsX2xpbWl0Jyk7XHJcbiAgICB2YXIgcHNldWRvU2VsZWN0ID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCcpO1xyXG4gICAgdmFyIG1pcnJvciA9IGpRdWVyeSgnLnBzZXVkb19zZWxlY3QgLm1pcnJvcicpO1xyXG4gICAgdmFyIGRvd25sb2FkZWREb2N1bWVudCA9IGpRdWVyeSgnLnN0YXRlXzMgLmNvbC1tZC03IHNwYW46bnRoLWNoaWxkKDIpJyk7XHJcbiAgICB2YXIgcmFkaW9JbnB1dCA9IGpRdWVyeSgnLnJhZGlvX2Jsb2NrIGlucHV0Jyk7XHJcbiAgICB2YXIgdGFyZ2V0VGV4dDtcclxuICAgIHZhciBjaGVja2VkSW5wdXQ7XHJcbiAgICB2YXIgcmVzZXJ2ZWRDaGVjayA9IHRydWU7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXJ2ZUNoZWNrZXIoZSkge1xyXG5cclxuICAgICAgICB2YXIgZGN2ID0galF1ZXJ5KCcuZGN2Jyk7XHJcbiAgICAgICAgdGFyZ2V0VGV4dCA9IGpRdWVyeShlLnRhcmdldCkubmV4dCgpLmh0bWwoKTtcclxuICAgICAgICB0YXJnZXRJbnB1dCA9IGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5yYWRpb19ibG9jayBpbnB1dCcpO1xyXG5cclxuICAgICAgICAvKtCa0L7Qv9C40YDQvtCy0LDQvdC40LUg0LvQuNC80LjRgtCwINC/0L7QutGA0YvRgtC40Y8qL1xyXG5cclxuICAgICAgICAvLyBpZiAodGFyZ2V0SW5wdXQgPT0gMCkge1xyXG4gICAgICAgIC8vICAgICBqUXVlcnkocmFkaW9JbnB1dFs1XSkucHJvcCgnY2hlY2tlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gaWYgKHRhcmdldElucHV0ID09IDEpIHtcclxuICAgICAgICAvLyAgICAgalF1ZXJ5KHJhZGlvSW5wdXRbNl0pLnByb3AoJ2NoZWNrZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGlmICh0YXJnZXRJbnB1dCA9PSAyKSB7XHJcbiAgICAgICAgLy8gICAgIGpRdWVyeShyYWRpb0lucHV0WzddKS5wcm9wKCdjaGVja2VkJywgJ3RydWUnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBpZiAodGFyZ2V0SW5wdXQgPT0gMykge1xyXG4gICAgICAgIC8vICAgICBqUXVlcnkocmFkaW9JbnB1dFs4XSkucHJvcCgnY2hlY2tlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gaWYgKHRhcmdldElucHV0ID09IDQpIHtcclxuICAgICAgICAvLyAgICAgalF1ZXJ5KHJhZGlvSW5wdXRbOV0pLnByb3AoJ2NoZWNrZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldElucHV0ID09IDE3KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2NoYW5naW5nX3RhYmxlJykuZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgZGN2LmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgIGRjdi5wcmV2KCkuZmFkZU91dCgwKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0SW5wdXQgPT0gMTcpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2hhbmdpbmdfdGFibGUnKS5mYWRlT3V0KDApO1xyXG5cclxuICAgICAgICAgICAgZGN2LmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgIGRjdi5wcmV2KCkuZmFkZU91dCgwKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0SW5wdXQgPT0gMTcpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2hhbmdpbmdfdGFibGUnKS5mYWRlT3V0KDApO1xyXG5cclxuICAgICAgICAgICAgZGN2LmZhZGVPdXQoMCk7XHJcbiAgICAgICAgICAgIGRjdi5wcmV2KCkuZmFkZU91dCgwKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0SW5wdXQgPT0gMTgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2hhbmdpbmdfdGFibGUnKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgYWRkaXRpb25hbExpbWl0Lmh0bWwoJzEwMCZuYnNwMDAwJyk7XHJcbiAgICAgICAgICAgIGRjdi5mYWRlSW4oKTtcclxuICAgICAgICAgICAgZGN2LnByZXYoKS5mYWRlSW4oKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0SW5wdXQgPT0gMTkpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2hhbmdpbmdfdGFibGUnKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgYWRkaXRpb25hbExpbWl0Lmh0bWwoJzIwMCZuYnNwMDAwJyk7XHJcbiAgICAgICAgICAgIGRjdi5mYWRlSW4oKTtcclxuICAgICAgICAgICAgZGN2LnByZXYoKS5mYWRlSW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRJbnB1dCA9PSAyMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNjaGFuZ2luZ190YWJsZScpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICBhZGRpdGlvbmFsTGltaXQuaHRtbCgnNTAwJm5ic3AwMDAnKTtcclxuICAgICAgICAgICAgZGN2LmZhZGVJbigpO1xyXG4gICAgICAgICAgICBkY3YucHJldigpLmZhZGVJbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldElucHV0ID4gMTIgJiYgdGFyZ2V0SW5wdXQgPD0gMTYpIHtcclxuICAgICAgICAgICAgcmVzZXJ2ZWRDaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBtaXJyb3IuaHRtbCh0YXJnZXRUZXh0KTtcclxuICAgICAgICAgICAgcHNldWRvU2VsZWN0LmFkZENsYXNzKCdvZmYtc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgICAgICAvKtCa0L7Qv9C40YDQvtCy0LDQvdC40LUg0L3QsNC30LLQsNC90LjRjyDQtNC+0LrRg9C80LXQvdGC0LAqL1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldElucHV0ID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBtaXJyb3IuaHRtbCgn0J/QvtGB0LLRltC00YfQtdC90L3RjyDQv9C10L3RgdGW0L7QvdC10YDQsCcpO1xyXG4gICAgICAgICAgICAgICAgZG93bmxvYWRlZERvY3VtZW50Lmh0bWwoJ9Cf0L7RgdCy0ZbQtNGH0LXQvdC90Y8g0L/QtdC90YHRltC+0L3QtdGA0LAnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldElucHV0ID09IDE0KSB7XHJcbiAgICAgICAgICAgICAgICBtaXJyb3IuaHRtbCgn0KPRh9Cw0YHQvdC40Log0LLRltC50L3QuCcpO1xyXG4gICAgICAgICAgICAgICAgZG93bmxvYWRlZERvY3VtZW50Lmh0bWwoJ9Cf0L7RgdCy0ZbQtNGH0LXQvdC90Y8g0L/QtdC90YHRltC+0L3QtdGA0LAnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldElucHV0ID09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICBtaXJyb3IuaHRtbCgn0J/QvtGB0LLRltC00YfQtdC90L3RjyDQv9GA0L4g0ZbQvdCy0LDQu9GW0LTQvdGW0YHRgtGMJyk7XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZGVkRG9jdW1lbnQuaHRtbCgn0J/QvtGB0LLRltC00YfQtdC90L3RjyDQv9C10L3RgdGW0L7QvdC10YDQsCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5wdXQgPT0gMTYpIHtcclxuICAgICAgICAgICAgICAgIG1pcnJvci5odG1sKCfQp9C+0YDQvdC+0LHQuNC70YzRgdGM0LrQtSDQv9C+0YHQstGW0LTRh9C10L3QvdGPJyk7XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZGVkRG9jdW1lbnQuaHRtbCgn0J/QvtGB0LLRltC00YfQtdC90L3RjyDQv9C10L3RgdGW0L7QvdC10YDQsCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChqUXVlcnkoZS50YXJnZXQpLmluZGV4KCcucmFkaW9fYmxvY2sgaW5wdXQnKSA9PSAxMikge1xyXG4gICAgICAgICAgICByZXNlcnZlZENoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHNldWRvU2VsZWN0LnJlbW92ZUNsYXNzKCdvZmYtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIG1pcnJvci5odG1sKCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAgICByYWRpb0lucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqUXVlcnkodGhpcykuaW5kZXgoJy5yYWRpb19ibG9jayBpbnB1dCcpKTtcclxuXHJcbiAgICAgICAgICAgIHJlc2VydmVDaGVja2VyKGUpO1xyXG5cclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5wdXQgPSBqUXVlcnkodGhpcykucHJvcCgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRJbnB1dCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5hZGRDbGFzcygnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gYXJyYXkgZm9yIGF1dG9MYWJlbFxyXG5cclxuICAgIHZhciBhdXRvTGFiZWxTaW1wbGUgPSBqUXVlcnkoJy5hdXRvX3RhYnNfYm90dG9tIC5idXR0b25fbW9yZV9sYWJlbCcpO1xyXG4gICAgdmFyIGF1dG9UYWJzTGFiZWwgPSBbalF1ZXJ5KCcuZW5naW5lX2Jsb2NrIGxhYmVsJyksXHJcbiAgICAgICAgalF1ZXJ5KCcud2VpZ2h0X2Jsb2NrIGxhYmVsJyksXHJcbiAgICAgICAgalF1ZXJ5KCcucGFzc2VuZ2Vyc19ibG9jayBsYWJlbCcpLFxyXG4gICAgICAgIGpRdWVyeSgnLm1vdG9fYmxvY2sgbGFiZWwnKSxcclxuICAgICAgICBqUXVlcnkoJy50b3VyaXN0X2Jsb2NrIGxhYmVsJyldO1xyXG5cclxuICAgIC8vIG9iamVjdCBmb3IgYXV0b0xhYmVsXHJcblxyXG4gICAgdmFyIGF1dG9MYWJlbE9iamVjdCA9IHtcclxuICAgICAgICBsYWJlbE5hbWU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtZW5naW5lJyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbMF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtd2VpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbMV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lQXR0cjogJ2N1cnJlbnQtcGFzc2VuZ2VycycsXHJcbiAgICAgICAgICAgICAgICBhdXRvVGFic0xhYmVsOiBhdXRvVGFic0xhYmVsWzJdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZUF0dHI6ICdjdXJyZW50LW1vdG8nLFxyXG4gICAgICAgICAgICAgICAgYXV0b1RhYnNMYWJlbDogYXV0b1RhYnNMYWJlbFszXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVBdHRyOiAnY3VycmVudC10b3VyaXN0JyxcclxuICAgICAgICAgICAgICAgIGF1dG9UYWJzTGFiZWw6IGF1dG9UYWJzTGFiZWxbNF1cclxuICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgXX07XHJcblxyXG4gICAgLy8gaW5pdGlhbCBmdW5jdGlvbiBmb3IgYXV0b0xhYmVsXHJcblxyXG4gICAgZnVuY3Rpb24gbGFiZWxUb2dnbGUoYmxvY2tOYW1lLCBsYWJlbE5hbWUsIGUpIHtcclxuICAgICAgICBibG9ja05hbWUucmVtb3ZlQ2xhc3MobGFiZWxOYW1lKTtcclxuICAgICAgICBqUXVlcnkoZS50YXJnZXQpLmFkZENsYXNzKGxhYmVsTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIGF1dG9MYWJlbFNpbXBsZS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgYXV0b1RhYnMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBhdXRvVGFic0luZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuYXV0b190YWJzX2l0ZW0nKTtcclxuICAgICAgICAgICAgaWYgKGF1dG9UYWJzSW5kZXggPT0galF1ZXJ5KGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoKS5pbmRleCgnLmF1dG9fdGFic19ib3R0b20nKSl7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFRvZ2dsZShhdXRvTGFiZWxPYmplY3QubGFiZWxOYW1lW2ldLmF1dG9UYWJzTGFiZWwsIGF1dG9MYWJlbE9iamVjdC5sYWJlbE5hbWVbaV0uZW5naW5lQXR0ciwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpID0gMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5mb3JtYXRpb24gdGFiXHJcblxyXG4gICAgdmFyIGluZm9ybWF0aW9uVGFiID0galF1ZXJ5KCcuaW5mb190YWJfaXRlbScpO1xyXG4gICAgdmFyIGRvd25sb2FkQmxvY2sgPSBqUXVlcnkoJy5kb3dubG9hZF9ibG9jaycpO1xyXG4gICAgdmFyIGRvd25sb2FkQmxvY2tJbmRleDtcclxuICAgIHZhciBhY3RpdmVUYWIgPSAnY3VycmVudC10YWInO1xyXG5cclxuICAgIGpRdWVyeShkb3dubG9hZEJsb2NrWzBdKS5hZGRDbGFzcygnYmxvY2snKTtcclxuXHJcbiAgICBpbmZvcm1hdGlvblRhYi5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZG93bmxvYWRCbG9jay5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICBkb3dubG9hZEJsb2NrSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoJy5kb3dubG9hZF9ibG9jaycpO1xyXG5cclxuICAgICAgICAgICAgaWYoZG93bmxvYWRCbG9ja0luZGV4ID09IGpRdWVyeShlLnRhcmdldCkuaW5kZXgoJy5pbmZvX3RhYl9pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkQmxvY2sucmVtb3ZlQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFRvZ2dsZShpbmZvcm1hdGlvblRhYiwgYWN0aXZlVGFiLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHBzZXVkbyBpbnB1dFxyXG5cclxuICAgIHZhciBwc2V1ZG9pbnB1dCA9IGpRdWVyeSgnI3BzZXVkb19pbnB1dF9sYWJlbCcpO1xyXG5cclxuICAgIHBzZXVkb2lucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcHNldWRvaW5wdXQudG9nZ2xlQ2xhc3MoJ3BzZXVkb19pbnB1dF9hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRlbGl2ZXJ5IHRhYlxyXG5cclxuICAgIHZhciBkZWxpdmVyeVRhYiA9IGpRdWVyeSgnLmRlbGl2ZXJ5X2l0ZW0nKTtcclxuICAgIHZhciBkZWxpdmVyeUJsb2NrID0galF1ZXJ5KCcuZGVsaXZlcnlfdGFiX3dyYXBwZXInKTtcclxuICAgIHZhciBkZWxpdmVyeUJsb2NrSW5kZXg7XHJcblxyXG4gICAgalF1ZXJ5KGRlbGl2ZXJ5QmxvY2tbMF0pLmFkZENsYXNzKCdibG9jaycpO1xyXG5cclxuICAgIGRlbGl2ZXJ5VGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBkZWxpdmVyeUJsb2NrLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5QmxvY2tJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgnLmRlbGl2ZXJ5X3RhYl93cmFwcGVyJyk7XHJcblxyXG4gICAgICAgICAgICBpZihkZWxpdmVyeUJsb2NrSW5kZXggPT0galF1ZXJ5KGUudGFyZ2V0KS5pbmRleCgnLmRlbGl2ZXJ5X2l0ZW0nKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlCbG9jay5yZW1vdmVDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsVG9nZ2xlKGRlbGl2ZXJ5VGFiLCBhY3RpdmVUYWIsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRvciBzdGF0ZSB0b2dnbGVcclxuXHJcbiAgICB2YXIgZmxvciA9IGpRdWVyeSgnLmZsb3InKTtcclxuICAgIHZhciBmbG9ySW5kZXg7XHJcbiAgICB2YXIgbmV4dFN0YXRlID0galF1ZXJ5KCcuZmxvcl9uZXh0Jyk7XHJcbiAgICB2YXIgcHJldlN0YXRlID0galF1ZXJ5KCcuZmxvcl9wcmV2Jyk7XHJcbiAgICB2YXIgcmV0dXJuU3RhdGUgPSBqUXVlcnkoJy5yZXR1cm4nKTtcclxuICAgIHZhciBzdGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgalF1ZXJ5KGZsb3JbMF0pLmZhZGVJbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZsb3IpO1xyXG5cclxuICAgIG5leHRTdGF0ZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG5cclxuICAgICAgICBzdGF0ZUNvdW50ZXIrKztcclxuICAgICAgICBmbG9yLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmxvckluZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZmxvcicpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmxvckluZGV4KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVDb3VudGVyKycrKysrJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmxvckluZGV4ID09IHN0YXRlQ291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgZmxvci5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0YXRlXzIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByZXZTdGF0ZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG5cclxuICAgICAgICBzdGF0ZUNvdW50ZXItLTtcclxuICAgICAgICBmbG9yLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmxvckluZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCcuZmxvcicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZsb3JJbmRleCA9PSBzdGF0ZUNvdW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIGZsb3IuZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVyblN0YXRlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgIGZsb3IuZmFkZU91dCgwKTtcclxuICAgICAgICBqUXVlcnkoZmxvclswXSkuZmFkZUluKCk7XHJcbiAgICAgICAgc3RhdGVDb3VudGVyPSAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmFxcyBxdWVzdGlvblxyXG5cclxuICAgIHZhciBmYXFzUXVlc3Rpb24gPSBqUXVlcnkoJy5xdWVzdGlvbl9pdGVtIHNwYW4nKTtcclxuICAgIHZhciBmYXFzQXJyb3cgPSBqUXVlcnkoJy5mYXFzIC5hcnJvdycpO1xyXG5cclxuICAgIGZhcXNBcnJvdy5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZhcXNRdWVzdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnb3BlblF1ZXN0aW9uJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9ib2R5IG1hcmdpblxyXG4gICAgXHJcbiAgICB2YXIgaGVhZGVyID0galF1ZXJ5KCdoZWFkZXInKTtcclxuICAgIHZhciBoZWFkZXJIZWlnaHQ7XHJcbiAgICB2YXIgYm9keSA9IGpRdWVyeSgnYm9keScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1hcmdpbigpe1xyXG4gICAgICAgIGhlYWRlckhlaWdodCA9IGhlYWRlci5oZWlnaHQoKTtcclxuICAgICAgICBib2R5LmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodCsncHgnKTtcclxuICAgICAgICBqUXVlcnkoY2FsY1BvcHVwKS5jc3MoJ3RvcCcsIGhlYWRlckhlaWdodCsncHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJnaW4oKTtcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBtYXJnaW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHBzZXVkbyBzZWxlY3RcclxuXHJcbiAgICB2YXIgb3B0aW9uID0galF1ZXJ5KCcucHNldWRvX3NlbGVjdCAub3B0aW9uJyk7XHJcbiAgICB2YXIgcmVzZXJ2ZWQgPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0IC5yZXNlcnZlZCcpO1xyXG4gICAgdmFyIG9wdGlvbldyYXBwZXIgPSBqUXVlcnkoJy5wc2V1ZG9fc2VsZWN0IC5vcHRpb25fd3JhcHBlcicpO1xyXG4gICAgdmFyIG9wdGlvblRleHQ7XHJcblxyXG4gICAgbWlycm9yLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmIChyZXNlcnZlZENoZWNrID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHBzZXVkb1NlbGVjdC50b2dnbGVDbGFzcygnYWN0aXZlLXNlbGVjdCcpO1xyXG4gICAgICAgICAgICBvcHRpb25XcmFwcGVyLnNsaWRlVG9nZ2xlKDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGpRdWVyeShkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW1pcnJvci5pcyhlLnRhcmdldCkgJiYgb3B0aW9uLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25XcmFwcGVyLnNsaWRlVXAoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHNldWRvU2VsZWN0LnJlbW92ZUNsYXNzKCdhY3RpdmUtc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVDbGFzcygnY3VycmVudC1vcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1vcHRpb24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb24uZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuYXR0cignY2xhc3MnKSA9PSAnb3B0aW9uIGN1cnJlbnQtb3B0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25UZXh0ID0galF1ZXJ5KHRoaXMpLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3B0aW9uVGV4dCArIFwiX19fX1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlycm9yLmh0bWwob3B0aW9uVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBpbnN1cmFuY2VDb21wYW55ID0galF1ZXJ5KCcuaW5zdXJhbmNlX2l0ZW0nKTtcclxuICAgIHZhciBwaWxnYSA9IGpRdWVyeSgnI3BpbGdhJyk7XHJcbiAgICB2YXIgdGF4aU5vID0galF1ZXJ5KCcjdGF4aV94cycpO1xyXG4gICAgdmFyIHRheGlZZXMgPSBqUXVlcnkoJyN0YXhpX3NtJyk7XHJcbiAgICB2YXIgbGltaXQgPSBqUXVlcnkoJyNsaW1pdCAucmFkaW9fYmxvY2sgbGFiZWwnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyYWRpb0lucHV0KTtcclxuXHJcbiAgICBhdXRvTGFiZWxTaW1wbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnByZXYoKS5hdHRyKCdpZCcpID09ICdlbmdpbmVfbGcnIHx8XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuYXR0cignaWQnKSA9PSAnZW5naW5lX3hsJykge1xyXG4gICAgICAgICAgICBwaWxnYS5mYWRlT3V0KDApO1xyXG4gICAgICAgICAgICByZXNlcnZlZENoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWlycm9yLmh0bWwoJycpO1xyXG4gICAgICAgICAgICBwc2V1ZG9TZWxlY3QucmVtb3ZlQ2xhc3MoJ29mZi1zZWxlY3QnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKChqUXVlcnkodGhpcykucHJldigpLmF0dHIoJ2lkJykgPT0gJ2VuZ2luZV9zbScgfHxcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS5hdHRyKCdpZCcpID09ICdlbmdpbmVfeHMnIHx8XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuYXR0cignaWQnKSA9PSAnZW5naW5lX21kJykgJiZcclxuICAgICAgICAgICAgdGF4aU5vLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBpbGdhLmZhZGVJbigwKTtcclxuICAgICAgICAgICAgcmVzZXJ2ZWRDaGVjayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsaW1pdC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAoalF1ZXJ5KHRoaXMpLmluZGV4KCcjbGltaXQgLnJhZGlvX2Jsb2NrIGxhYmVsJykgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBqUXVlcnkoaW5zdXJhbmNlQ29tcGFueVswXSkucGFyZW50KCkuZmFkZU91dCgwKTtcclxuICAgIC8vICAgICAgICAgLy8galF1ZXJ5KGZyYW5jaGlzZVsxXSkuaHRtbCgnMTAwMCA8c3BhbiBjbGFzcz1cImFybm9cIj7igrQ8L3NwYW4+Jyk7XHJcbiAgICAvLyAgICAgICAgIC8vIGpRdWVyeShmcmFuY2hpc2VbM10pLmh0bWwoJzEwMDAgPHNwYW4gY2xhc3M9XCJhcm5vXCI+4oK0PC9zcGFuPicpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIGpRdWVyeShpbnN1cmFuY2VDb21wYW55WzBdKS5wYXJlbnQoKS5mYWRlSW4oKTtcclxuICAgIC8vICAgICAgICAgLy8galF1ZXJ5KGZyYW5jaGlzZVsxXSkuaHRtbCgnMCA8c3BhbiBjbGFzcz1cImFybm9cIj7igrQ8L3NwYW4+Jyk7XHJcbiAgICAvLyAgICAgICAgIC8vIGpRdWVyeShmcmFuY2hpc2VbM10pLmh0bWwoJzAgPHNwYW4gY2xhc3M9XCJhcm5vXCI+4oK0PC9zcGFuPicpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgdGF4aU5vLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KGluc3VyYW5jZUNvbXBhbnlbMF0pLnBhcmVudCgpLmZhZGVJbigwKTtcclxuICAgICAgICAvLyBqUXVlcnkoZnJhbmNoaXNlWzFdKS5odG1sKCcwIDxzcGFuIGNsYXNzPVwiYXJub1wiPuKCtDwvc3Bhbj4nKTtcclxuICAgICAgICAvLyBqUXVlcnkoZnJhbmNoaXNlWzNdKS5odG1sKCcxMDAwIDxzcGFuIGNsYXNzPVwiYXJub1wiPuKCtDwvc3Bhbj4nKTtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSgnI2VuZ2luZV9sZycpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlIHx8XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2VuZ2luZV94bCcpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBpbGdhLmZhZGVPdXQoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGlsZ2EuZmFkZUluKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHRheGlZZXMub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoaW5zdXJhbmNlQ29tcGFueVswXSkucGFyZW50KCkuZmFkZU91dCgwKTtcclxuICAgICAgICAvLyBqUXVlcnkoZnJhbmNoaXNlWzFdKS5odG1sKCcxMDAwIDxzcGFuIGNsYXNzPVwiYXJub1wiPuKCtDwvc3Bhbj4nKTtcclxuICAgICAgICAvLyBqUXVlcnkoZnJhbmNoaXNlWzNdKS5odG1sKCcwIDxzcGFuIGNsYXNzPVwiYXJub1wiPuKCtDwvc3Bhbj4nKTtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSgnI2VuZ2luZV9zbScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlIHx8XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2VuZ2luZV94cycpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlIHx8XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2VuZ2luZV9tZCcpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgcGlsZ2EuZmFkZU91dCgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwaWxnYS5mYWRlT3V0KDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdGF0ZV8yXHJcblxyXG4gICAgLy8gZGN2IGNvdW50XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhdGVfMigpIHtcclxuXHJcbiAgICAgICAgdmFyIG9zY3B2ID0galF1ZXJ5KCcub3NjcHYnKTtcclxuICAgICAgICB2YXIgZGN2ID0galF1ZXJ5KCcuZGN2Jyk7XHJcbiAgICAgICAgdmFyIGluc3VyYW5jZUZpbmFsUHJpY2UgPSBqUXVlcnkoJy5pbnN1cmFuY2VGaW5hbFByaWNlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob3NjcHYpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRjdik7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5zdXJhbmNlRmluYWxQcmljZSk7XHJcbiAgICAgICAgdmFyIGluc3VyYW5jZUZpbmFsUHJpY2VUZXh0O1xyXG5cclxuICAgICAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgICAgIGluc3VyYW5jZUNvbXBhbnkuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgdmFyIG9zY3B2VGV4dCA9IGpRdWVyeShvc2NwdltpXSkuaHRtbCgpLnNwbGl0KCc8Jyk7XHJcbiAgICAgICAgICAgIG9zY3B2VGV4dCA9IHBhcnNlSW50KG9zY3B2VGV4dFswXSk7XHJcbiAgICAgICAgICAgIHZhciBkY3ZUZXh0ID0galF1ZXJ5KGRjdltpXSkuaHRtbCgpLnNwbGl0KCc8Jyk7XHJcbiAgICAgICAgICAgIGRjdlRleHQgPSBwYXJzZUludChkY3ZUZXh0WzBdKTtcclxuICAgICAgICAgICAgaW5zdXJhbmNlRmluYWxQcmljZVRleHQgPSBvc2NwdlRleHQgKyBkY3ZUZXh0O1xyXG4gICAgICAgICAgICBqUXVlcnkoaW5zdXJhbmNlRmluYWxQcmljZVtpXSkuaHRtbCgnJytpbnN1cmFuY2VGaW5hbFByaWNlVGV4dCsnPHNwYW4gY2xhc3M9XCJhcm5vXCI+4oK0PC9zcGFuPicpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cob3NjcHZUZXh0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGN2VGV4dCk7XHJcblxyXG4gICAgICAgICAgICBpKys7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuLy9tYXBcclxuXHJcbnZhciBtYXA7XHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICB2YXIgbXlMYXRMbmcgPSB7bGF0OiA1MC40MTkzMjQsIGxuZzogMzAuNTQzMTk2fTtcclxuXHJcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICAgIGNlbnRlcjogbXlMYXRMbmcsXHJcbiAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFwLnNldE9wdGlvbnMoe3N0eWxlczogc3R5bGVzWydkZWZhdWx0J119KTtcclxuXHJcbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgcG9zaXRpb246IG15TGF0TG5nLFxyXG4gICAgICAgIHRpdGxlOiAnVmljdG9yaWEgRGVudCdcclxuICAgIH0pO1xyXG59XHJcblxyXG52YXIgaW5zdXJhbmNlQXBwID0gYW5ndWxhci5tb2R1bGUoJ2luc3VyYW5jZUFwcCcsIFtdKTtcclxuXHJcbmluc3VyYW5jZUFwcC5jb250cm9sbGVyKCdhdXRvTGFiZWwnLCBbJyRzY29wZScsICckaHR0cCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHApIHtcclxuXHJcbiAgICAkaHR0cC5nZXQoJ2pzL2RhdGExLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1RoaXMgaXMgRGF0YTonLGRhdGEsJ1xcblxcblRoaXMgaXMgU3RhdHVzOicsc3RhdHVzLCdcXG5cXG5UaGlzIGlzIEhlYWRlcnM6JyxoZWFkZXJzLCdcXG5cXG5UaGlzIGlzIGNvbmZpZzonLGNvbmZpZyk7XHJcbiAgICAgICAgJHNjb3BlLmNvZWZpY2llbnQgPSBkYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5jb2VmaWNpZW50KTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnRvd25BcnJheSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdG93biA6IFtcItCa0LjRl9CyXCJdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvd24gOiBbXCLQkdC+0YDQuNGB0L/RltC70YxcIiwgXCLQkdC+0Y/RgNC60LBcIiwgXCLQkdGA0L7QstCw0YDQuFwiLFwi0JLQsNGB0LjQu9GM0LrRltCyXCIsIFwi0JLQuNGI0LPQvtGA0L7QtFwiLCBcItCS0LjRiNC90LXQstC1XCIsIFwi0IbRgNC/0ZbQvdGMXCJdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvd24gOiBbXCLQntC00LXRgdCwXCIsIFwi0KXQsNGA0LrRltCyXCJdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvd24gOiBbXCLQlNC90ZbQv9GA0L4gKNCU0L3RltC/0YDQvtC/0LXRgtGA0L7QstGB0YzQuilcIiwgXCLQlNC+0L3QtdGG0YzQulwiLCBcItCX0LDQv9C+0YDRltC20LbRj1wiLCBcItCa0YDQuNCy0LjQuSDQoNGW0LNcIiwgXCLQm9GM0LLRltCyXCJdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvd24gOiBbXCLQnNC40LrQvtC70LDRl9CyXCIsIFwi0JzQsNGA0ZbRg9C/0L7Qu9GMXCIsIFwi0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQulwiLCBcItCb0YPQs9Cw0L3RgdGM0LpcIiwgXCLQmtGA0LXQvNC10L3Rh9GD0LpcIiwgXCLQktGW0L3QvdC40YbRj1wiLCBcItCi0LXRgNC90L7Qv9GW0LvRjFwiLFxyXG4gICAgICAgICAgICAgICAgXCLQnNCw0LrRltGX0LLQutCwXCIsIFwi0JvRg9GG0YzQulwiLCBcItCh0LXQstCw0YHRgtC+0L/QvtC70YxcIiwgXCLQkdGW0LvQsCDQptC10YDQutCy0LBcIiwgXCLQodGW0LzRhNC10YDQvtC/0L7Qu9GMXCIsIFwi0JrRgNCw0LzQsNGC0L7RgNGB0YzQulwiLCBcItCl0LXRgNGB0L7QvVwiLCBcItCc0LXQu9GW0YLQvtC/0L7Qu9GMXCIsXHJcbiAgICAgICAgICAgICAgICBcItCf0L7Qu9GC0LDQstCwXCIsIFwi0JrQtdGA0YdcIiwgXCLQp9C10YDQvdGW0LPRltCyXCIsIFwi0J3RltC60L7Qv9C+0LvRjFwiLCBcItCn0LXRgNC60LDRgdC4XCIsIFwi0KHQu9C+0LLRj9C90YHRjNC6XCIsIFwi0JbQuNGC0L7QvNC40YBcIiwgXCLQo9C20LPQvtGA0L7QtFwiLCBcItCh0YPQvNC4XCIsIFwi0JHQtdGA0LTRj9C90YHRjNC6XCIsXHJcbiAgICAgICAgICAgICAgICBcItCl0LzQtdC70YzQvdC40YbRjNC60LjQuVwiLCBcItCQ0LvRh9C10LLRgdGM0LpcIiwgXCLQp9C10YDQvdGW0LLRhtGWXCIsIFwi0J/QsNCy0LvQvtCz0YDQsNC0XCIsIFwi0JPQvtGA0LvRltCy0LrQsFwiLCBcItCh0ZTQstGU0YDQvtC00L7QvdC10YbRjNC6XCIsIFwi0KDRltCy0L3QtVwiLCBcItCE0LLQv9Cw0YLQvtGA0ZbRj1wiLFxyXG4gICAgICAgICAgICAgICAgXCLQmtCw0LzRj9C90YHRjNC60LUgKNCU0L3RltC/0YDQvtC00LfQtdGA0LbQuNC90YHRjNC6KVwiLCBcItCb0LjRgdC40YfQsNC90YHRjNC6XCIsIFwi0JrRgNC+0L/QuNCy0L3QuNGG0YzQutC40LkgKNCa0ZbRgNC+0LLQvtCz0YDQsNC0KVwiLCBcItCa0LDQvNGP0L3QtdGG0Ywt0J/QvtC00ZbQu9GM0YHRjNC60LjQuVwiXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0b3duIDogW1wi0JDQstC00ZbRl9Cy0LrQsFwiLCBcItCQ0LvRg9C/0LrQsFwiLCBcItCQ0LvRg9GI0YLQsFwiLCBcItCQ0LzQstGA0L7RgdGW0ZfQstC60LBcIiwgXCLQkNC90LTRgNGD0YjRltCy0LrQsFwiLCBcItCQ0L3RgtGA0LDRhtC40YJcIiwgXCLQkNC/0L7RgdGC0L7Qu9C+0LLQtVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JDRgNC80Y/QvdGB0YzQulwiLCBcItCQ0YDRhtC40LdcIiwgXCLQkdCw0LvQsNC60LvRltGPXCIsIFwi0JHQsNC70YLQsFwiLCBcItCR0LDRgFwiLCBcItCR0LDRgNCw0L3RltCy0LrQsFwiLCBcItCR0LDRgNCy0ZbQvdC60L7QstC1XCIsIFwi0JHQsNGA0LjRiNGW0LLQutCwXCIsIFwi0JHQsNGF0LzQsNGHXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQkdCw0YXQvNGD0YIgKNCQ0YDRgtC10LzRltCy0YHRjNC6KVwiLCBcItCR0LDRiNGC0LDQvdC60LBcIiwgXCLQkdC10YDQtNC40YfRltCyXCIsIFwi0JHQtdGA0LXQs9C+0LLQtVwiLCBcItCR0LXRgNC10LbQsNC90LhcIiwgXCLQkdC10YDQtdC30LDQvdGMXCIsIFwi0JHQtdGA0LXQt9GW0LLQutCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQkdC10YDQtdC30L3QtVwiLCBcItCR0LXRgNC40YHQu9Cw0LJcIiwgXCLQkdC10YDRiNCw0LTRjFwiLCBcItCR0ZbQu9Cz0L7RgNC+0LQt0JTQvdGW0YHRgtGA0L7QstGB0YzQutC40LlcIiwgXCLQkdGW0LvQuNGG0YzQutC1XCIsIFwi0JHRltC70L7Qs9GW0YDRgdGM0LpcIiwgXCLQkdGW0LvQvtC30LXRgNGB0YzQutC1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQkdGW0LvRj9GX0LLQutCwXCIsIFwi0JHQvtCx0YDQuNC90LXRhtGMXCIsIFwi0JHQvtCx0YDQvtCy0LjRhtGPXCIsIFwi0JHQvtCz0L7QtNGD0YXRltCyXCIsIFwi0JHQvtCz0YPRgdC70LDQslwiLCBcItCR0L7Qu9Cz0YDQsNC0XCIsIFwi0JHQvtGA0LfQvdCwXCIsIFwi0JHQvtGA0LjRgdC70LDQslwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JHQvtGA0L7QtNGP0L3QutCwXCIsIFwi0JHQvtGA0YnRltCyXCIsIFwi0JHRgNC+0LTQuFwiLCBcItCR0YDRj9C90LrQsFwiLCBcItCR0YPRgNC40L3RjFwiLCBcItCR0YPRgNGI0YLQuNC9XCIsIFwi0JHRg9GC0LXQvdC60LhcIiwgXCLQkdGD0YfQsNGHXCIsIFwi0JLQsNC70LrQuFwiLCBcItCS0LDRgdC40LvRltCy0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JLQsNGC0YPRgtGW0L3QtVwiLCBcItCS0LDRhdGA0YPRiNC10LLQtVwiLCBcItCS0LXQu9C40LrQsCDQntC70LXQutGB0LDQvdC00YDRltCy0LrQsFwiLCBcItCS0LjQttC90LjRhtGPXCIsIFwi0JLQuNC70LrQvtCy0LVcIiwgXCLQktC40L3QsNGA0ZbQstC60LBcIiwgXCLQktC40L3QvtCz0YDQsNC00ZbQslwiLCBcItCS0LjRgdC+0LrQuNC5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQktGW0LvRjNC90Y/QvdGB0YzQulwiLCBcItCS0ZbQu9GM0YjQsNC90LrQsFwiLCBcItCS0L7QstGH0LDQvdGB0YzQulwiLCBcItCS0L7Qt9C90LXRgdC10L3RgdGM0LpcIiwgXCLQktC+0LvQvdC+0LLQsNGF0LBcIiwgXCLQktC+0LvQvtC00LDRgNGB0YzQutC1XCIsIFwi0JLQvtC70L7QtNC40LzQuNGALdCS0L7Qu9C40L3RgdGM0LrQuNC5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQktC+0LvQvtC00LjQvNC40YDQtdGG0YxcIiwgXCLQktGD0LPQu9C10LPRltGA0YHRjNC6XCIsIFwi0JLRg9Cz0LvQtdC00LDRgFwiLCBcItCT0LDQtNGP0YdcIiwgXCLQk9Cw0LnQstC+0YDQvtC9XCIsIFwi0JPQsNC50YHQuNC9XCIsIFwi0JPQsNC50YjQuNC9XCIsIFwi0JPQtdC90ZbRh9C10YHRjNC6XCIsIFwi0JPRltGA0YHRjNC60LVcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCT0LvQuNCx0L7QutCwXCIsIFwi0JPQu9C+0LHQuNC90LVcIiwgXCLQk9C70YPRhdGW0LJcIiwgXCLQk9C90ZbQstCw0L3RjFwiLCBcItCT0L7Qu9CwINCf0YDQuNGB0YLQsNC90YxcIiwgXCLQk9C+0YDQvdC+0YHRgtCw0ZfQstC60LBcIiwgXCLQk9C+0YDQvtC00LXQvdC60LBcIiwgXCLQk9C+0YDQvtC00LjRidC1XCIsIFwi0JPQvtGA0L7QtNC+0LpcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCT0L7RgNC+0YXRltCyXCIsIFwi0JPRgNC10LHRltC90LrQsFwiLCBcItCT0YPQu9GP0LnQv9C+0LvQtVwiLCBcItCU0LXQsdCw0LvRjNGG0LXQstC1XCIsIFwi0JTQtdGA0LDQttC90Y9cIiwgXCLQlNC10YDQs9Cw0YfRllwiLCBcItCU0LbQsNC90LrQvtC5XCIsIFwi0JTQuNC60LDQvdGM0LrQsFwiLCBcItCU0LjQvNC40YLRgNC+0LJcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCU0L3RltC/0YDQvtGA0YPQtNC90LVcIiwgXCLQlNC+0LHRgNC+0L/RltC70LvRj1wiLCBcItCU0L7QutGD0YfQsNGU0LLRgdGM0LpcIiwgXCLQlNC+0LvQuNC90LBcIiwgXCLQlNC+0LvQuNC90YHRjNC60LBcIiwgXCLQlNC+0LzQsNC90ZbQstC60LBcIiwgXCLQlNGA0L7Qs9C+0LHQuNGHXCIsIFwi0JTRg9Cx0LvRj9C90LhcIiwgXCLQlNGD0LHQvdC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQlNGD0LHRgNC+0LLQuNGG0Y9cIiwgXCLQlNGD0L3QsNGX0LLRhtGWXCIsIFwi0JXQvdC10YDQs9C+0LTQsNGAXCIsIFwi0ITQvdCw0LrRltGU0LLQtVwiLCBcItCW0LDRiNC60ZbQslwiLCBcItCW0LTQsNC90ZbQstC60LBcIiwgXCLQltC40LTQsNGH0ZbQslwiLCBcItCW0LzQtdGA0LjQvdC60LBcIiwgXCLQltC+0LLQutCy0LBcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCW0L7QstGC0ZYg0JLQvtC00LhcIiwgXCLQl9Cw0LLQvtC00YHRjNC60LUgKNCn0LXRgNCy0L7QvdC+0LfQsNCy0L7QtNGB0YzQutC1KVwiLCBcItCX0LDQu9GW0YnQuNC60LhcIiwgXCLQl9Cx0LDRgNCw0LZcIiwgXCLQl9Cy0LXQvdC40LPQvtGA0L7QtNC60LBcIiwgXCLQl9C00L7Qu9Cx0YPQvdGW0LJcIiwgXCLQl9C10LvQtdC90L7QtNC+0LvRjNGB0YzQulwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JfRltC90YzQutGW0LJcIiwgXCLQl9C80ZbRl9CyXCIsIFwi0JfQvdCw0Lwn0Y/QvdC60LBcIiwgXCLQl9C+0LvQvtGC0LVcIiwgXCLQl9C+0LvQvtGC0L7QvdC+0YjQsFwiLCBcItCX0L7Qu9C+0YfRltCyXCIsIFwi0JfRg9Cz0YDQtdGBXCIsIFwi0IbQstCw0L3RltCy0LrQsFwiLCBcItCG0LLQsNC90LrRltCyXCIsIFwi0IbQt9C80LDRl9C7XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQhtC30Y7QvFwiLCBcItCG0LfRj9GB0LvQsNCyXCIsIFwi0IbQu9C70ZbQvdGG0ZZcIiwgXCLQhtC70L7QstCw0LnRgdGM0LpcIiwgXCLQhtGA0LzRltC90L5cIiwgXCLQhtGA0YjQsNCy0LBcIiwgXCLQhtGH0L3Rj1wiLCBcItCa0LDQs9Cw0YDQu9C40LpcIiwgXCLQmtCw0LvQsNC90YfQsNC6XCIsIFwi0JrQsNC70LjQvdGW0LLQutCwXCIsIFwi0JrQsNC70YPRiFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JrQsNC80ZbQvdGMLdCa0LDRiNC40YDRgdGM0LrQuNC5XCIsIFwi0JrQsNC8J9GP0L3QutCwXCIsIFwi0JrQsNC8J9GP0L3QutCwLdCR0YPQt9GM0LrQsFwiLCBcItCa0LDQvCfRj9C90LrQsC3QlNC90ZbQv9GA0L7QstGB0YzQutCwXCIsIFwi0JrQsNC90ZbQslwiLCBcItCa0LDRgNC70ZbQstC60LBcIiwgXCLQmtCw0YXQvtCy0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JrQtdC70YzQvNC10L3RhtGWXCIsIFwi0JrRltCy0YjQsNGA0ZbQstC60LBcIiwgXCLQmtGW0LvRltGPXCIsIFwi0JfQsNGA0ZbRh9C90LUgKNCa0ZbRgNC+0LLRgdGM0LopXCIsIFwi0JrRltGA0L7QstGB0YzQutC1XCIsIFwi0JrRltGG0LzQsNC90YxcIiwgXCLQmtC+0LHQtdC70Y/QutC4XCIsIFwi0JrQvtCy0LXQu9GMXCIsIFwi0JrQvtC00LjQvNCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQmtC+0LfQtdC70LXRhtGMXCIsIFwi0JrQvtC30Y/RgtC40L1cIiwgXCLQmtC+0LvQvtC80LjRj1wiLCBcItCa0L7QvNGW0L3RgtC10YDQvdGW0LLRgdGM0LrQtVwiLCBcItCT0L7RgNGW0YjQvdGWINCf0LvQsNCy0L3RliAo0JrQvtC80YHQvtC80L7Qu9GM0YHRjNC6KVwiLCBcItCa0L7QvNGB0L7QvNC+0LvRjNGB0YzQutC1ICjQlNC+0L3QtdGG0YzQutCwINC+0LHQuy4pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQmtC+0L3QvtGC0L7Qv1wiLCBcItCa0L7RgNC+0YHRgtC10L3RjFwiLCBcItCa0L7RgNC+0YHRgtC40YjRltCyXCIsIFwi0JrQvtGA0YHRg9C90Ywt0KjQtdCy0YfQtdC90LrRltCy0YHRjNC60LjQuVwiLCBcItCa0L7RgNGO0LrRltCy0LrQsFwiLCBcItCa0L7RgdGW0LJcIiwgXCLQmtC+0YHRgtC+0L/RltC70YxcIiwgXCLQmtC+0YHRgtGP0L3RgtC40L3RltCy0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JrQvtGC0LXQu9GM0LLQsFwiLCBcItCa0L7RgtC+0LLRgdGM0LpcIiwgXCLQmtGA0LDRgdC40LvRltCyXCIsIFwi0JrRgNCw0YHQvdC40Lkg0JvRg9GHXCIsIFwi0JrRgNCw0YHQvdC+0LDRgNC80ZbQudGB0YzQulwiLCBcItCa0YDQsNGB0L3QvtCz0L7RgNGW0LLQutCwXCIsIFwi0JrRgNCw0YHQvdC+0LPRgNCw0LRcIiwgXCLQmtGA0LDRgdC90L7QtNC+0L1cIixcclxuICAgICAgICAgICAgICAgICAgICBcItCa0YDQsNGB0L3QvtC/0LXRgNC10LrQvtC/0YHRjNC6XCIsIFwi0JrRgNCw0YHQvdC+0L/RltC70LvRj1wiLCBcItCa0YDQtdC80LXQvdC10YbRjFwiLCBcItCa0YDQtdC80ZbQvdC90LBcIiwgXCLQmtGA0LjQttC+0L/RltC70YxcIiwgXCLQmtGA0L7Qu9C10LLQtdGG0YxcIiwgXCLQmtGD0LfQvdC10YbQvtCy0YHRjNC6XCIsIFwi0JrRg9C/J9GP0L3RgdGM0LpcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCa0YPRgNCw0YXQvtCy0LVcIiwgXCLQm9Cw0LTQuNC20LjQvVwiLCBcItCb0LXQsdC10LTQuNC9XCIsIFwi0JvQtdGC0LjRh9GW0LJcIiwgXCLQm9C40LzQsNC9ICjQmtGA0LDRgdC90LjQuSDQm9C40LzQsNC9KVwiLCBcItCb0LjQv9C+0LLQtdGG0YxcIiwgXCLQm9C+0LfQvtCy0LBcIiwgXCLQm9C+0YXQstC40YbRj1wiLCBcItCb0YPQsdC90LhcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCb0YPRgtGD0LPQuNC90LVcIiwgXCLQm9GO0LHQsNGI0ZbQstC60LBcIiwgXCLQm9GO0LHQvtC80LvRjFwiLCBcItCb0Y7QsdC+0YLQuNC9XCIsIFwi0JzQsNC60LDRgNGW0LJcIiwgXCLQnNCw0LvQsCDQktC40YHQutCwXCIsIFwi0JzQsNC70LjQvVwiLCBcItCc0LDRgCfRl9C90LrQsFwiLCBcItCc0LDRgNC60ZbQstC60LBcIiwgXCLQnNC10L3QsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JzQtdGA0LXRhNCwXCIsIFwi0JzQuNC60L7Qu9Cw0ZfQstC60LBcIiwgXCLQnNC40YDQs9C+0YDQvtC0XCIsIFwi0JzQuNGA0L7QvdGW0LLQutCwXCIsIFwi0JzRltC20LPRltGAJ9GPXCIsIFwi0JzQvtCz0LjQu9GW0LIt0J/QvtC00ZbQu9GM0YHRjNC60LjQuVwiLCBcItCc0L7Qu9C+0LTQvtCz0LLQsNGA0LTRltC50YHRjNC6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQnNC+0L3QsNGB0YLQuNGA0LjRidC1XCIsIFwi0JzRg9C60LDRh9C10LLQtVwiLCBcItCd0LDQtNCy0ZbRgNC90LBcIiwgXCLQndCw0YLQsNC70LjQvdC1XCIsIFwi0J3QtdC80LjRgNGW0LJcIiwgXCLQndC10YLRltGI0LjQvVwiLCBcItCd0LXRh9Cw0Y/QvdC1XCIsIFwi0J3RltC20LjQvVwiLCBcItCd0L7QstCwINCS0L7QtNC+0LvQsNCz0LBcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCd0L7QstCwINCa0LDRhdC+0LLQutCwXCIsIFwi0J3QvtCy0LAg0J7QtNC10YHQsFwiLCBcItCd0L7QstCz0L7RgNC+0LTQutCwXCIsIFwi0J3QvtCy0LjQuSDQkdGD0LNcIiwgXCLQndC+0LLQvtCy0L7Qu9C40L3RgdGM0LpcIiwgXCLQndC+0LLQvtCz0YDQsNC0LdCS0L7Qu9C40L3RgdGM0LrQuNC5XCIsIFwi0J3QvtCy0L7Qs9GA0L7QtNGW0LLQutCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQndC+0LLQvtC80LjRgNCz0L7RgNC+0LRcIiwgXCLQndC+0LLQvtC80L7RgdC60L7QstGB0YzQulwiLCBcItCd0L7QstC+0YHQtdC70LjRhtGPXCIsIFwi0J3QvtCy0L7Rg9C60YDQsNGX0L3QutCwXCIsIFwi0J3QvtCy0L7Rj9Cy0L7RgNGW0LLRgdGM0LpcIiwgXCLQntCx0YPRhdGW0LJcIiwgXCLQntCy0ZbQtNGW0L7Qv9C+0LvRjFwiLCBcItCe0LLRgNGD0YdcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCe0LvQtdCy0YHRjNC6XCIsIFwi0J7Qu9C10LrRgdCw0L3QtNGA0ZbRj1wiLCBcItCe0L/RltGI0L3Rj1wiLCBcItCe0YDRltGF0ZbQslwiLCBcItCe0YHRgtGA0L7Qs1wiLCBcItCe0YXRgtC40YDQutCwXCIsIFwi0J7Rh9Cw0LrRltCyXCIsIFwi0J/QtdGA0LLQvtC80LDQudGB0YzQuiAo0JzQuNC60L7Qu9Cw0ZfQstGB0YzQutCwINC+0LHQuy4pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQn9C10YDQstC+0LzQsNC50YHRjNC6ICjQm9GD0LPQsNC90YHRjNC60LAg0L7QsdC7LilcIiwgXCLQn9C10YDQstC+0LzQsNC50YHRjNC60LjQuVwiLCBcItCf0LXRgNC10YnQtdC/0LjQvdC1XCIsIFwi0J/QtdGA0LXRj9GB0LvQsNCyLdCl0LzQtdC70YzQvdC40YbRjNC60LjQuVwiLCBcItCf0LjRgNGP0YLQuNC9XCIsIFwi0J/RltC00LPQsNC50YbRllwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0J/RltGB0L7Rh9C40L1cIiwgXCLQn9C+0LPRgNC10LHQuNGJ0LVcIiwgXCLQn9C+0LrQvtGC0LjQu9GW0LLQutCwXCIsIFwi0J/QvtC60YDQvtCyICjQntGA0LTQttC+0L3RltC60ZbQtNC30LUpXCIsIFwi0J/QvtC60YDQvtCy0YHRjNC60LVcIiwgXCLQn9C+0LvQvtCz0LhcIiwgXCLQn9C+0LvQvtC90L3QtVwiLCBcItCf0L7QvNGW0YfQvdCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQn9C+0L/QsNGB0L3QsFwiLCBcItCf0L7Qv9GW0LvRjNC90Y9cIiwgXCLQn9GA0LjQu9GD0LrQuFwiLCBcItCf0YPRgtC40LLQu9GMXCIsIFwi0J8n0Y/RgtC40YXQsNGC0LrQuFwiLCBcItCg0LDQtNC40LLQuNC70ZbQslwiLCBcItCg0LDQtNC+0LzQuNGI0LvRjFwiLCBcItCg0LDRhdGW0LJcIiwgXCLQoNC10L3RllwiLCBcItCg0L7QstC10L3RjNC60LhcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCg0L7QtNC40L3RgdGM0LrQtVwiLCBcItCg0L7Qt9C00ZbQu9GM0L3QsFwiLCBcItCg0L7QutC40YLQvdC1XCIsIFwi0KDQvtC80L3QuFwiLCBcItCg0YPQsdGW0LbQvdC1XCIsIFwi0KHQsNC80LHRltGAXCIsIFwi0KHQsNGA0L3QuFwiLCBcItCh0LLQsNC70Y/QstCwXCIsIFwi0KHQstCw0YLQvtCy0LVcIiwgXCLQodCy0LXRgNC00LvQvtCy0YHRjNC6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQodCy0LXRgdCwXCIsIFwi0KHQstGW0YLQu9C+0LLQvtC00YHRjNC6XCIsIFwi0KHQstGW0YLQu9C+0LTQsNGA0YHRjNC6XCIsIFwi0KHQtdC70LjQtNC+0LLQtVwiLCBcItCh0LXQvNC10L3RltCy0LrQsFwiLCBcItCh0LjQvdC10LvRjNC90LjQutC+0LLQtVwiLCBcItCh0ZbQstC10YDRgdGM0LpcIiwgXCLQodC60LDQtNC+0LLRgdGM0LpcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCh0LvQsNCy0YPRgtCwXCIsIFwi0KHQu9Cw0LLRg9GC0LjRh1wiLCBcItCh0LvQvtCx0L7QttCw0L3RgdGM0LrQtSAo0JrQvtC80YHQvtC80L7Qu9GM0YHRjNC60LUg0KXQsNGA0LrRltCy0YHRjNC60L7RlyDQvtCx0LsuKVwiLCBcItCh0LzRltC70LBcIiwgXCLQodC80L7QtNC90LBcIiwgXCLQodC90ZbQs9GD0YDRltCy0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0KHQvdGW0LbQvdC1XCIsIFwi0KHQvdGP0YLQuNC9XCIsIFwi0KHQvtC60LDQu9GMXCIsIFwi0KHQvtC60LjRgNGP0L3QuFwiLCBcItCh0L7Qu9C10LTQsNGAXCIsIFwi0KHQvtC70L7QvdC40YbRltCy0LrQsFwiLCBcItCh0L7RgdC90ZbQstC60LBcIiwgXCLQodC+0YTRltGX0LLRgdGM0LrQsCDQkdC+0YDRidCw0LPRltCy0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0KHRgtCw0LLQuNGJ0LVcIiwgXCLQodGC0LDRgNC40Lkg0JrRgNC40LxcIiwgXCLQodGC0LDRgNC40Lkg0KHQsNC80LHRltGAXCIsIFwi0KHRgtCw0YDQvtCx0LXRiNC10LLQtVwiLCBcItCh0YLQsNGA0L7QsdGW0LvRjNGB0YzQulwiLCBcItCh0YLQsNGA0L7QutC+0YHRgtGP0L3RgtC40L3RltCyXCIsIFwi0KHRgtCw0YXQsNC90L7QslwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0KHRgtC10LHQvdC40LpcIiwgXCLQodGC0L7RgNC+0LbQuNC90LXRhtGMXCIsIFwi0KHRgtGA0LjQuVwiLCBcItCh0YPQtNCw0LpcIiwgXCLQodGD0YXQvtC00ZbQu9GM0YHRjNC6XCIsIFwi0KLQsNCy0YDRltC50YHRjNC6XCIsIFwi0KLQsNC70YzQvdC1XCIsIFwi0KLQsNGA0LDRgdGW0LLQutCwXCIsIFwi0KLQsNGA0LDRidCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQotCw0YLQsNGA0LHRg9C90LDRgNC4XCIsIFwi0KLQtdC/0LvQvtC00LDRgFwiLCBcItCi0LXRgNC10LHQvtCy0LvRj1wiLCBcItCi0LXRgtGW0ZfQslwiLCBcItCi0L7QutC80LDQulwiLCBcItCi0L7RgNC10LdcIiwgXCLQotC+0YDQtdGG0YzQuiAo0JTQt9C10YDQttC40L3RgdGM0LopXCIsIFwi0KLRgNC+0YHRgtGP0L3QtdGG0YxcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCi0YDRg9GB0LrQsNCy0LXRhtGMXCIsIFwi0KLRg9C70YzRh9C40L1cIiwgXCLQotGP0YfRltCyXCIsIFwi0KPQutGA0LDRl9C90LrQsFwiLCBcItCj0LvRjNGP0L3RltCy0LrQsFwiLCBcItCj0LzQsNC90YxcIiwgXCLQpNCw0YHRgtGW0LJcIiwgXCLQpNC10L7QtNC+0YHRltGPXCIsIFwi0KXQsNGA0YbQuNC30YzQulwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0KXQvNGW0LvRjNC90LjQulwiLCBcItCl0L7QtNC+0YDRltCyXCIsIFwi0KXQvtGA0L7Qu1wiLCBcItCl0L7RgtC40L1cIiwgXCLQpdGA0LjRgdGC0LjQvdGW0LLQutCwXCIsIFwi0KXRg9GB0YJcIiwgXCLQptGO0YDRg9C/0LjQvdGB0YzQulwiLCBcItCn0LDRgdGW0LIg0K/RgFwiLCBcItCn0LXRgNCy0L7QvdC+0LPRgNCw0LRcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCn0LXRgNCy0L7QvdC+0L/QsNGA0YLQuNC30LDQvdGB0YzQulwiLCBcItCn0L7RgNC90L7QvNC+0YDRgdGM0LogKNCG0LvQu9GW0YfRltCy0YHRjNC6KVwiLCBcItCn0L7RgNGC0LrRltCyXCIsIFwi0KfRg9Cz0YPRl9CyXCIsIFwi0KfRg9C00L3RltCyXCIsIFwi0KfRg9GC0L7QstC1XCIsIFwi0KjQsNGF0YLQsNGA0YHRjNC6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQqNC10L/QtdGC0ZbQstC60LBcIiwgXCLQqNC40YDQvtC60LVcIiwgXCLQqNC+0YHRgtC60LBcIiwgXCLQqNC/0L7Qu9CwXCIsIFwi0KnQvtGA0YFcIiwgXCLQrtC20L3QtVwiLCBcItCu0LbQvdC+0YPQutGA0LDRl9C90YHRjNC6XCIsIFwi0K7QvdC+0LrQvtC80YPQvdCw0YDRltCy0YHRjNC6XCIsIFwi0K/QstC+0YDRltCyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQr9Cz0L7RgtC40L1cIiwgXCLQr9C70YLQsFwiLCBcItCv0LzQv9GW0LvRjFwiLCBcItCv0YDQtdC80YfQtVwiLCBcItCv0YHQuNC90YPQstCw0YLQsFwiXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmNpdHlBcnJheSA9IFtcItCa0LjRl9CyXCIsIFwi0JHQvtGA0LjRgdC/0ZbQu9GMXCIsIFwi0JHQvtGP0YDQutCwXCIsIFwi0JHRgNC+0LLQsNGA0LhcIixcItCS0LDRgdC40LvRjNC60ZbQslwiLCBcItCS0LjRiNCz0L7RgNC+0LRcIiwgXCLQktC40YjQvdC10LLQtVwiLCBcItCG0YDQv9GW0L3RjFwiLFxyXG4gICAgICAgICAgICBcItCe0LTQtdGB0LBcIiwgXCLQpdCw0YDQutGW0LJcIiwgXCLQlNC90ZbQv9GA0L4gKNCU0L3RltC/0YDQvtC/0LXRgtGA0L7QstGB0YzQuilcIiwgXCLQlNC+0L3QtdGG0YzQulwiLCBcItCX0LDQv9C+0YDRltC20LbRj1wiLCBcItCa0YDQuNCy0LjQuSDQoNGW0LNcIiwgXCLQm9GM0LLRltCyXCIsXHJcbiAgICAgICAgICAgIFwi0JzQuNC60L7Qu9Cw0ZfQslwiLCBcItCc0LDRgNGW0YPQv9C+0LvRjFwiLCBcItCG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LpcIiwgXCLQm9GD0LPQsNC90YHRjNC6XCIsIFwi0JrRgNC10LzQtdC90YfRg9C6XCIsIFwi0JLRltC90L3QuNGG0Y9cIiwgXCLQotC10YDQvdC+0L/RltC70YxcIixcclxuICAgICAgICAgICAgXCLQnNCw0LrRltGX0LLQutCwXCIsIFwi0JvRg9GG0YzQulwiLCBcItCh0LXQstCw0YHRgtC+0L/QvtC70YxcIiwgXCLQkdGW0LvQsCDQptC10YDQutCy0LBcIiwgXCLQodGW0LzRhNC10YDQvtC/0L7Qu9GMXCIsIFwi0JrRgNCw0LzQsNGC0L7RgNGB0YzQulwiLCBcItCl0LXRgNGB0L7QvVwiLCBcItCc0LXQu9GW0YLQvtC/0L7Qu9GMXCIsXHJcbiAgICAgICAgICAgIFwi0J/QvtC70YLQsNCy0LBcIiwgXCLQmtC10YDRh1wiLCBcItCn0LXRgNC90ZbQs9GW0LJcIiwgXCLQndGW0LrQvtC/0L7Qu9GMXCIsIFwi0KfQtdGA0LrQsNGB0LhcIiwgXCLQodC70L7QstGP0L3RgdGM0LpcIiwgXCLQltC40YLQvtC80LjRgFwiLCBcItCj0LbQs9C+0YDQvtC0XCIsIFwi0KHRg9C80LhcIiwgXCLQkdC10YDQtNGP0L3RgdGM0LpcIixcclxuICAgICAgICAgICAgXCLQpdC80LXQu9GM0L3QuNGG0YzQutC40LlcIiwgXCLQkNC70YfQtdCy0YHRjNC6XCIsIFwi0KfQtdGA0L3RltCy0YbRllwiLCBcItCf0LDQstC70L7Qs9GA0LDQtFwiLCBcItCT0L7RgNC70ZbQstC60LBcIiwgXCLQodGU0LLRlNGA0L7QtNC+0L3QtdGG0YzQulwiLCBcItCg0ZbQstC90LVcIiwgXCLQhNCy0L/QsNGC0L7RgNGW0Y9cIixcclxuICAgICAgICAgICAgXCLQmtCw0LzRj9C90YHRjNC60LUgKNCU0L3RltC/0YDQvtC00LfQtdGA0LbQuNC90YHRjNC6KVwiLCBcItCb0LjRgdC40YfQsNC90YHRjNC6XCIsIFwi0JrRgNC+0L/QuNCy0L3QuNGG0YzQutC40LkgKNCa0ZbRgNC+0LLQvtCz0YDQsNC0KVwiLCBcItCa0LDQvNGP0L3QtdGG0Ywt0J/QvtC00ZbQu9GM0YHRjNC60LjQuVwiLFxyXG4gICAgICAgICAgICBcItCQ0LLQtNGW0ZfQstC60LBcIiwgXCLQkNC70YPQv9C60LBcIiwgXCLQkNC70YPRiNGC0LBcIiwgXCLQkNC80LLRgNC+0YHRltGX0LLQutCwXCIsIFwi0JDQvdC00YDRg9GI0ZbQstC60LBcIiwgXCLQkNC90YLRgNCw0YbQuNGCXCIsIFwi0JDQv9C+0YHRgtC+0LvQvtCy0LVcIixcclxuICAgICAgICAgICAgXCLQkNGA0LzRj9C90YHRjNC6XCIsIFwi0JDRgNGG0LjQt1wiLCBcItCR0LDQu9Cw0LrQu9GW0Y9cIiwgXCLQkdCw0LvRgtCwXCIsIFwi0JHQsNGAXCIsIFwi0JHQsNGA0LDQvdGW0LLQutCwXCIsIFwi0JHQsNGA0LLRltC90LrQvtCy0LVcIiwgXCLQkdCw0YDQuNGI0ZbQstC60LBcIiwgXCLQkdCw0YXQvNCw0YdcIixcclxuICAgICAgICAgICAgXCLQkdCw0YXQvNGD0YIgKNCQ0YDRgtC10LzRltCy0YHRjNC6KVwiLCBcItCR0LDRiNGC0LDQvdC60LBcIiwgXCLQkdC10YDQtNC40YfRltCyXCIsIFwi0JHQtdGA0LXQs9C+0LLQtVwiLCBcItCR0LXRgNC10LbQsNC90LhcIiwgXCLQkdC10YDQtdC30LDQvdGMXCIsIFwi0JHQtdGA0LXQt9GW0LLQutCwXCIsXHJcbiAgICAgICAgICAgIFwi0JHQtdGA0LXQt9C90LVcIiwgXCLQkdC10YDQuNGB0LvQsNCyXCIsIFwi0JHQtdGA0YjQsNC00YxcIiwgXCLQkdGW0LvQs9C+0YDQvtC0LdCU0L3RltGB0YLRgNC+0LLRgdGM0LrQuNC5XCIsIFwi0JHRltC70LjRhtGM0LrQtVwiLCBcItCR0ZbQu9C+0LPRltGA0YHRjNC6XCIsIFwi0JHRltC70L7Qt9C10YDRgdGM0LrQtVwiLFxyXG4gICAgICAgICAgICBcItCR0ZbQu9GP0ZfQstC60LBcIiwgXCLQkdC+0LHRgNC40L3QtdGG0YxcIiwgXCLQkdC+0LHRgNC+0LLQuNGG0Y9cIiwgXCLQkdC+0LPQvtC00YPRhdGW0LJcIiwgXCLQkdC+0LPRg9GB0LvQsNCyXCIsIFwi0JHQvtC70LPRgNCw0LRcIiwgXCLQkdC+0YDQt9C90LBcIiwgXCLQkdC+0YDQuNGB0LvQsNCyXCIsXHJcbiAgICAgICAgICAgIFwi0JHQvtGA0L7QtNGP0L3QutCwXCIsIFwi0JHQvtGA0YnRltCyXCIsIFwi0JHRgNC+0LTQuFwiLCBcItCR0YDRj9C90LrQsFwiLCBcItCR0YPRgNC40L3RjFwiLCBcItCR0YPRgNGI0YLQuNC9XCIsIFwi0JHRg9GC0LXQvdC60LhcIiwgXCLQkdGD0YfQsNGHXCIsIFwi0JLQsNC70LrQuFwiLCBcItCS0LDRgdC40LvRltCy0LrQsFwiLFxyXG4gICAgICAgICAgICBcItCS0LDRgtGD0YLRltC90LVcIiwgXCLQktCw0YXRgNGD0YjQtdCy0LVcIiwgXCLQktC10LvQuNC60LAg0J7Qu9C10LrRgdCw0L3QtNGA0ZbQstC60LBcIiwgXCLQktC40LbQvdC40YbRj1wiLCBcItCS0LjQu9C60L7QstC1XCIsIFwi0JLQuNC90LDRgNGW0LLQutCwXCIsIFwi0JLQuNC90L7Qs9GA0LDQtNGW0LJcIiwgXCLQktC40YHQvtC60LjQuVwiLFxyXG4gICAgICAgICAgICBcItCS0ZbQu9GM0L3Rj9C90YHRjNC6XCIsIFwi0JLRltC70YzRiNCw0L3QutCwXCIsIFwi0JLQvtCy0YfQsNC90YHRjNC6XCIsIFwi0JLQvtC30L3QtdGB0LXQvdGB0YzQulwiLCBcItCS0L7Qu9C90L7QstCw0YXQsFwiLCBcItCS0L7Qu9C+0LTQsNGA0YHRjNC60LVcIiwgXCLQktC+0LvQvtC00LjQvNC40YAt0JLQvtC70LjQvdGB0YzQutC40LlcIixcclxuICAgICAgICAgICAgXCLQktC+0LvQvtC00LjQvNC40YDQtdGG0YxcIiwgXCLQktGD0LPQu9C10LPRltGA0YHRjNC6XCIsIFwi0JLRg9Cz0LvQtdC00LDRgFwiLCBcItCT0LDQtNGP0YdcIiwgXCLQk9Cw0LnQstC+0YDQvtC9XCIsIFwi0JPQsNC50YHQuNC9XCIsIFwi0JPQsNC50YjQuNC9XCIsIFwi0JPQtdC90ZbRh9C10YHRjNC6XCIsIFwi0JPRltGA0YHRjNC60LVcIixcclxuICAgICAgICAgICAgXCLQk9C70LjQsdC+0LrQsFwiLCBcItCT0LvQvtCx0LjQvdC1XCIsIFwi0JPQu9GD0YXRltCyXCIsIFwi0JPQvdGW0LLQsNC90YxcIiwgXCLQk9C+0LvQsCDQn9GA0LjRgdGC0LDQvdGMXCIsIFwi0JPQvtGA0L3QvtGB0YLQsNGX0LLQutCwXCIsIFwi0JPQvtGA0L7QtNC10L3QutCwXCIsIFwi0JPQvtGA0L7QtNC40YnQtVwiLCBcItCT0L7RgNC+0LTQvtC6XCIsXHJcbiAgICAgICAgICAgIFwi0JPQvtGA0L7RhdGW0LJcIiwgXCLQk9GA0LXQsdGW0L3QutCwXCIsIFwi0JPRg9C70Y/QudC/0L7Qu9C1XCIsIFwi0JTQtdCx0LDQu9GM0YbQtdCy0LVcIiwgXCLQlNC10YDQsNC20L3Rj1wiLCBcItCU0LXRgNCz0LDRh9GWXCIsIFwi0JTQttCw0L3QutC+0LlcIiwgXCLQlNC40LrQsNC90YzQutCwXCIsIFwi0JTQuNC80LjRgtGA0L7QslwiLFxyXG4gICAgICAgICAgICBcItCU0L3RltC/0YDQvtGA0YPQtNC90LVcIiwgXCLQlNC+0LHRgNC+0L/RltC70LvRj1wiLCBcItCU0L7QutGD0YfQsNGU0LLRgdGM0LpcIiwgXCLQlNC+0LvQuNC90LBcIiwgXCLQlNC+0LvQuNC90YHRjNC60LBcIiwgXCLQlNC+0LzQsNC90ZbQstC60LBcIiwgXCLQlNGA0L7Qs9C+0LHQuNGHXCIsIFwi0JTRg9Cx0LvRj9C90LhcIiwgXCLQlNGD0LHQvdC+XCIsXHJcbiAgICAgICAgICAgIFwi0JTRg9Cx0YDQvtCy0LjRhtGPXCIsIFwi0JTRg9C90LDRl9Cy0YbRllwiLCBcItCV0L3QtdGA0LPQvtC00LDRgFwiLCBcItCE0L3QsNC60ZbRlNCy0LVcIiwgXCLQltCw0YjQutGW0LJcIiwgXCLQltC00LDQvdGW0LLQutCwXCIsIFwi0JbQuNC00LDRh9GW0LJcIiwgXCLQltC80LXRgNC40L3QutCwXCIsIFwi0JbQvtCy0LrQstCwXCIsXHJcbiAgICAgICAgICAgIFwi0JbQvtCy0YLRliDQktC+0LTQuFwiLCBcItCX0LDQstC+0LTRgdGM0LrQtSAo0KfQtdGA0LLQvtC90L7Qt9Cw0LLQvtC00YHRjNC60LUpXCIsIFwi0JfQsNC70ZbRidC40LrQuFwiLCBcItCX0LHQsNGA0LDQtlwiLCBcItCX0LLQtdC90LjQs9C+0YDQvtC00LrQsFwiLCBcItCX0LTQvtC70LHRg9C90ZbQslwiLCBcItCX0LXQu9C10L3QvtC00L7Qu9GM0YHRjNC6XCIsXHJcbiAgICAgICAgICAgIFwi0JfRltC90YzQutGW0LJcIiwgXCLQl9C80ZbRl9CyXCIsIFwi0JfQvdCw0Lwn0Y/QvdC60LBcIiwgXCLQl9C+0LvQvtGC0LVcIiwgXCLQl9C+0LvQvtGC0L7QvdC+0YjQsFwiLCBcItCX0L7Qu9C+0YfRltCyXCIsIFwi0JfRg9Cz0YDQtdGBXCIsIFwi0IbQstCw0L3RltCy0LrQsFwiLCBcItCG0LLQsNC90LrRltCyXCIsIFwi0IbQt9C80LDRl9C7XCIsXHJcbiAgICAgICAgICAgIFwi0IbQt9GO0LxcIiwgXCLQhtC30Y/RgdC70LDQslwiLCBcItCG0LvQu9GW0L3RhtGWXCIsIFwi0IbQu9C+0LLQsNC50YHRjNC6XCIsIFwi0IbRgNC80ZbQvdC+XCIsIFwi0IbRgNGI0LDQstCwXCIsIFwi0IbRh9C90Y9cIiwgXCLQmtCw0LPQsNGA0LvQuNC6XCIsIFwi0JrQsNC70LDQvdGH0LDQulwiLCBcItCa0LDQu9C40L3RltCy0LrQsFwiLCBcItCa0LDQu9GD0YhcIixcclxuICAgICAgICAgICAgXCLQmtCw0LzRltC90Ywt0JrQsNGI0LjRgNGB0YzQutC40LlcIiwgXCLQmtCw0Lwn0Y/QvdC60LBcIiwgXCLQmtCw0Lwn0Y/QvdC60LAt0JHRg9C30YzQutCwXCIsIFwi0JrQsNC8J9GP0L3QutCwLdCU0L3RltC/0YDQvtCy0YHRjNC60LBcIiwgXCLQmtCw0L3RltCyXCIsIFwi0JrQsNGA0LvRltCy0LrQsFwiLCBcItCa0LDRhdC+0LLQutCwXCIsXHJcbiAgICAgICAgICAgIFwi0JrQtdC70YzQvNC10L3RhtGWXCIsIFwi0JrRltCy0YjQsNGA0ZbQstC60LBcIiwgXCLQmtGW0LvRltGPXCIsIFwi0JfQsNGA0ZbRh9C90LUgKNCa0ZbRgNC+0LLRgdGM0LopXCIsIFwi0JrRltGA0L7QstGB0YzQutC1XCIsIFwi0JrRltGG0LzQsNC90YxcIiwgXCLQmtC+0LHQtdC70Y/QutC4XCIsIFwi0JrQvtCy0LXQu9GMXCIsIFwi0JrQvtC00LjQvNCwXCIsXHJcbiAgICAgICAgICAgIFwi0JrQvtC30LXQu9C10YbRjFwiLCBcItCa0L7Qt9GP0YLQuNC9XCIsIFwi0JrQvtC70L7QvNC40Y9cIiwgXCLQmtC+0LzRltC90YLQtdGA0L3RltCy0YHRjNC60LVcIiwgXCLQk9C+0YDRltGI0L3RliDQn9C70LDQstC90ZYgKNCa0L7QvNGB0L7QvNC+0LvRjNGB0YzQuilcIiwgXCLQmtC+0LzRgdC+0LzQvtC70YzRgdGM0LrQtSAo0JTQvtC90LXRhtGM0LrQsCDQvtCx0LsuKVwiLFxyXG4gICAgICAgICAgICBcItCa0L7QvdC+0YLQvtC/XCIsIFwi0JrQvtGA0L7RgdGC0LXQvdGMXCIsIFwi0JrQvtGA0L7RgdGC0LjRiNGW0LJcIiwgXCLQmtC+0YDRgdGD0L3RjC3QqNC10LLRh9C10L3QutGW0LLRgdGM0LrQuNC5XCIsIFwi0JrQvtGA0Y7QutGW0LLQutCwXCIsIFwi0JrQvtGB0ZbQslwiLCBcItCa0L7RgdGC0L7Qv9GW0LvRjFwiLCBcItCa0L7RgdGC0Y/QvdGC0LjQvdGW0LLQutCwXCIsXHJcbiAgICAgICAgICAgIFwi0JrQvtGC0LXQu9GM0LLQsFwiLCBcItCa0L7RgtC+0LLRgdGM0LpcIiwgXCLQmtGA0LDRgdC40LvRltCyXCIsIFwi0JrRgNCw0YHQvdC40Lkg0JvRg9GHXCIsIFwi0JrRgNCw0YHQvdC+0LDRgNC80ZbQudGB0YzQulwiLCBcItCa0YDQsNGB0L3QvtCz0L7RgNGW0LLQutCwXCIsIFwi0JrRgNCw0YHQvdC+0LPRgNCw0LRcIiwgXCLQmtGA0LDRgdC90L7QtNC+0L1cIixcclxuICAgICAgICAgICAgXCLQmtGA0LDRgdC90L7Qv9C10YDQtdC60L7Qv9GB0YzQulwiLCBcItCa0YDQsNGB0L3QvtC/0ZbQu9C70Y9cIiwgXCLQmtGA0LXQvNC10L3QtdGG0YxcIiwgXCLQmtGA0LXQvNGW0L3QvdCwXCIsIFwi0JrRgNC40LbQvtC/0ZbQu9GMXCIsIFwi0JrRgNC+0LvQtdCy0LXRhtGMXCIsIFwi0JrRg9C30L3QtdGG0L7QstGB0YzQulwiLCBcItCa0YPQvyfRj9C90YHRjNC6XCIsXHJcbiAgICAgICAgICAgIFwi0JrRg9GA0LDRhdC+0LLQtVwiLCBcItCb0LDQtNC40LbQuNC9XCIsIFwi0JvQtdCx0LXQtNC40L1cIiwgXCLQm9C10YLQuNGH0ZbQslwiLCBcItCb0LjQvNCw0L0gKNCa0YDQsNGB0L3QuNC5INCb0LjQvNCw0L0pXCIsIFwi0JvQuNC/0L7QstC10YbRjFwiLCBcItCb0L7Qt9C+0LLQsFwiLCBcItCb0L7RhdCy0LjRhtGPXCIsIFwi0JvRg9Cx0L3QuFwiLFxyXG4gICAgICAgICAgICBcItCb0YPRgtGD0LPQuNC90LVcIiwgXCLQm9GO0LHQsNGI0ZbQstC60LBcIiwgXCLQm9GO0LHQvtC80LvRjFwiLCBcItCb0Y7QsdC+0YLQuNC9XCIsIFwi0JzQsNC60LDRgNGW0LJcIiwgXCLQnNCw0LvQsCDQktC40YHQutCwXCIsIFwi0JzQsNC70LjQvVwiLCBcItCc0LDRgCfRl9C90LrQsFwiLCBcItCc0LDRgNC60ZbQstC60LBcIiwgXCLQnNC10L3QsFwiLFxyXG4gICAgICAgICAgICBcItCc0LXRgNC10YTQsFwiLCBcItCc0LjQutC+0LvQsNGX0LLQutCwXCIsIFwi0JzQuNGA0LPQvtGA0L7QtFwiLCBcItCc0LjRgNC+0L3RltCy0LrQsFwiLCBcItCc0ZbQttCz0ZbRgCfRj1wiLCBcItCc0L7Qs9C40LvRltCyLdCf0L7QtNGW0LvRjNGB0YzQutC40LlcIiwgXCLQnNC+0LvQvtC00L7Qs9Cy0LDRgNC00ZbQudGB0YzQulwiLFxyXG4gICAgICAgICAgICBcItCc0L7QvdCw0YHRgtC40YDQuNGJ0LVcIiwgXCLQnNGD0LrQsNGH0LXQstC1XCIsIFwi0J3QsNC00LLRltGA0L3QsFwiLCBcItCd0LDRgtCw0LvQuNC90LVcIiwgXCLQndC10LzQuNGA0ZbQslwiLCBcItCd0LXRgtGW0YjQuNC9XCIsIFwi0J3QtdGH0LDRj9C90LVcIiwgXCLQndGW0LbQuNC9XCIsIFwi0J3QvtCy0LAg0JLQvtC00L7Qu9Cw0LPQsFwiLFxyXG4gICAgICAgICAgICBcItCd0L7QstCwINCa0LDRhdC+0LLQutCwXCIsIFwi0J3QvtCy0LAg0J7QtNC10YHQsFwiLCBcItCd0L7QstCz0L7RgNC+0LTQutCwXCIsIFwi0J3QvtCy0LjQuSDQkdGD0LNcIiwgXCLQndC+0LLQvtCy0L7Qu9C40L3RgdGM0LpcIiwgXCLQndC+0LLQvtCz0YDQsNC0LdCS0L7Qu9C40L3RgdGM0LrQuNC5XCIsIFwi0J3QvtCy0L7Qs9GA0L7QtNGW0LLQutCwXCIsXHJcbiAgICAgICAgICAgIFwi0J3QvtCy0L7QvNC40YDQs9C+0YDQvtC0XCIsIFwi0J3QvtCy0L7QvNC+0YHQutC+0LLRgdGM0LpcIiwgXCLQndC+0LLQvtGB0LXQu9C40YbRj1wiLCBcItCd0L7QstC+0YPQutGA0LDRl9C90LrQsFwiLCBcItCd0L7QstC+0Y/QstC+0YDRltCy0YHRjNC6XCIsIFwi0J7QsdGD0YXRltCyXCIsIFwi0J7QstGW0LTRltC+0L/QvtC70YxcIiwgXCLQntCy0YDRg9GHXCIsXHJcbiAgICAgICAgICAgIFwi0J7Qu9C10LLRgdGM0LpcIiwgXCLQntC70LXQutGB0LDQvdC00YDRltGPXCIsIFwi0J7Qv9GW0YjQvdGPXCIsIFwi0J7RgNGW0YXRltCyXCIsIFwi0J7RgdGC0YDQvtCzXCIsIFwi0J7RhdGC0LjRgNC60LBcIiwgXCLQntGH0LDQutGW0LJcIiwgXCLQn9C10YDQstC+0LzQsNC50YHRjNC6ICjQnNC40LrQvtC70LDRl9Cy0YHRjNC60LAg0L7QsdC7LilcIixcclxuICAgICAgICAgICAgXCLQn9C10YDQstC+0LzQsNC50YHRjNC6ICjQm9GD0LPQsNC90YHRjNC60LAg0L7QsdC7LilcIiwgXCLQn9C10YDQstC+0LzQsNC50YHRjNC60LjQuVwiLCBcItCf0LXRgNC10YnQtdC/0LjQvdC1XCIsIFwi0J/QtdGA0LXRj9GB0LvQsNCyLdCl0LzQtdC70YzQvdC40YbRjNC60LjQuVwiLCBcItCf0LjRgNGP0YLQuNC9XCIsIFwi0J/RltC00LPQsNC50YbRllwiLFxyXG4gICAgICAgICAgICBcItCf0ZbRgdC+0YfQuNC9XCIsIFwi0J/QvtCz0YDQtdCx0LjRidC1XCIsIFwi0J/QvtC60L7RgtC40LvRltCy0LrQsFwiLCBcItCf0L7QutGA0L7QsiAo0J7RgNC00LbQvtC90ZbQutGW0LTQt9C1KVwiLCBcItCf0L7QutGA0L7QstGB0YzQutC1XCIsIFwi0J/QvtC70L7Qs9C4XCIsIFwi0J/QvtC70L7QvdC90LVcIiwgXCLQn9C+0LzRltGH0L3QsFwiLFxyXG4gICAgICAgICAgICBcItCf0L7Qv9Cw0YHQvdCwXCIsIFwi0J/QvtC/0ZbQu9GM0L3Rj1wiLCBcItCf0YDQuNC70YPQutC4XCIsIFwi0J/Rg9GC0LjQstC70YxcIiwgXCLQnyfRj9GC0LjRhdCw0YLQutC4XCIsIFwi0KDQsNC00LjQstC40LvRltCyXCIsIFwi0KDQsNC00L7QvNC40YjQu9GMXCIsIFwi0KDQsNGF0ZbQslwiLCBcItCg0LXQvdGWXCIsIFwi0KDQvtCy0LXQvdGM0LrQuFwiLFxyXG4gICAgICAgICAgICBcItCg0L7QtNC40L3RgdGM0LrQtVwiLCBcItCg0L7Qt9C00ZbQu9GM0L3QsFwiLCBcItCg0L7QutC40YLQvdC1XCIsIFwi0KDQvtC80L3QuFwiLCBcItCg0YPQsdGW0LbQvdC1XCIsIFwi0KHQsNC80LHRltGAXCIsIFwi0KHQsNGA0L3QuFwiLCBcItCh0LLQsNC70Y/QstCwXCIsIFwi0KHQstCw0YLQvtCy0LVcIiwgXCLQodCy0LXRgNC00LvQvtCy0YHRjNC6XCIsXHJcbiAgICAgICAgICAgIFwi0KHQstC10YHQsFwiLCBcItCh0LLRltGC0LvQvtCy0L7QtNGB0YzQulwiLCBcItCh0LLRltGC0LvQvtC00LDRgNGB0YzQulwiLCBcItCh0LXQu9C40LTQvtCy0LVcIiwgXCLQodC10LzQtdC90ZbQstC60LBcIiwgXCLQodC40L3QtdC70YzQvdC40LrQvtCy0LVcIiwgXCLQodGW0LLQtdGA0YHRjNC6XCIsIFwi0KHQutCw0LTQvtCy0YHRjNC6XCIsXHJcbiAgICAgICAgICAgIFwi0KHQu9Cw0LLRg9GC0LBcIiwgXCLQodC70LDQstGD0YLQuNGHXCIsIFwi0KHQu9C+0LHQvtC20LDQvdGB0YzQutC1ICjQmtC+0LzRgdC+0LzQvtC70YzRgdGM0LrQtSDQpdCw0YDQutGW0LLRgdGM0LrQvtGXINC+0LHQuy4pXCIsIFwi0KHQvNGW0LvQsFwiLCBcItCh0LzQvtC00L3QsFwiLCBcItCh0L3RltCz0YPRgNGW0LLQutCwXCIsXHJcbiAgICAgICAgICAgIFwi0KHQvdGW0LbQvdC1XCIsIFwi0KHQvdGP0YLQuNC9XCIsIFwi0KHQvtC60LDQu9GMXCIsIFwi0KHQvtC60LjRgNGP0L3QuFwiLCBcItCh0L7Qu9C10LTQsNGAXCIsIFwi0KHQvtC70L7QvdC40YbRltCy0LrQsFwiLCBcItCh0L7RgdC90ZbQstC60LBcIiwgXCLQodC+0YTRltGX0LLRgdGM0LrQsCDQkdC+0YDRidCw0LPRltCy0LrQsFwiLFxyXG4gICAgICAgICAgICBcItCh0YLQsNCy0LjRidC1XCIsIFwi0KHRgtCw0YDQuNC5INCa0YDQuNC8XCIsIFwi0KHRgtCw0YDQuNC5INCh0LDQvNCx0ZbRgFwiLCBcItCh0YLQsNGA0L7QsdC10YjQtdCy0LVcIiwgXCLQodGC0LDRgNC+0LHRltC70YzRgdGM0LpcIiwgXCLQodGC0LDRgNC+0LrQvtGB0YLRj9C90YLQuNC90ZbQslwiLCBcItCh0YLQsNGF0LDQvdC+0LJcIixcclxuICAgICAgICAgICAgXCLQodGC0LXQsdC90LjQulwiLCBcItCh0YLQvtGA0L7QttC40L3QtdGG0YxcIiwgXCLQodGC0YDQuNC5XCIsIFwi0KHRg9C00LDQulwiLCBcItCh0YPRhdC+0LTRltC70YzRgdGM0LpcIiwgXCLQotCw0LLRgNGW0LnRgdGM0LpcIiwgXCLQotCw0LvRjNC90LVcIiwgXCLQotCw0YDQsNGB0ZbQstC60LBcIiwgXCLQotCw0YDQsNGJ0LBcIixcclxuICAgICAgICAgICAgXCLQotCw0YLQsNGA0LHRg9C90LDRgNC4XCIsIFwi0KLQtdC/0LvQvtC00LDRgFwiLCBcItCi0LXRgNC10LHQvtCy0LvRj1wiLCBcItCi0LXRgtGW0ZfQslwiLCBcItCi0L7QutC80LDQulwiLCBcItCi0L7RgNC10LdcIiwgXCLQotC+0YDQtdGG0YzQuiAo0JTQt9C10YDQttC40L3RgdGM0LopXCIsIFwi0KLRgNC+0YHRgtGP0L3QtdGG0YxcIixcclxuICAgICAgICAgICAgXCLQotGA0YPRgdC60LDQstC10YbRjFwiLCBcItCi0YPQu9GM0YfQuNC9XCIsIFwi0KLRj9GH0ZbQslwiLCBcItCj0LrRgNCw0ZfQvdC60LBcIiwgXCLQo9C70YzRj9C90ZbQstC60LBcIiwgXCLQo9C80LDQvdGMXCIsIFwi0KTQsNGB0YLRltCyXCIsIFwi0KTQtdC+0LTQvtGB0ZbRj1wiLCBcItCl0LDRgNGG0LjQt9GM0LpcIixcclxuICAgICAgICAgICAgXCLQpdC80ZbQu9GM0L3QuNC6XCIsIFwi0KXQvtC00L7RgNGW0LJcIiwgXCLQpdC+0YDQvtC7XCIsIFwi0KXQvtGC0LjQvVwiLCBcItCl0YDQuNGB0YLQuNC90ZbQstC60LBcIiwgXCLQpdGD0YHRglwiLCBcItCm0Y7RgNGD0L/QuNC90YHRjNC6XCIsIFwi0KfQsNGB0ZbQsiDQr9GAXCIsIFwi0KfQtdGA0LLQvtC90L7Qs9GA0LDQtFwiLFxyXG4gICAgICAgICAgICBcItCn0LXRgNCy0L7QvdC+0L/QsNGA0YLQuNC30LDQvdGB0YzQulwiLCBcItCn0L7RgNC90L7QvNC+0YDRgdGM0LogKNCG0LvQu9GW0YfRltCy0YHRjNC6KVwiLCBcItCn0L7RgNGC0LrRltCyXCIsIFwi0KfRg9Cz0YPRl9CyXCIsIFwi0KfRg9C00L3RltCyXCIsIFwi0KfRg9GC0L7QstC1XCIsIFwi0KjQsNGF0YLQsNGA0YHRjNC6XCIsXHJcbiAgICAgICAgICAgIFwi0KjQtdC/0LXRgtGW0LLQutCwXCIsIFwi0KjQuNGA0L7QutC1XCIsIFwi0KjQvtGB0YLQutCwXCIsIFwi0KjQv9C+0LvQsFwiLCBcItCp0L7RgNGBXCIsIFwi0K7QttC90LVcIiwgXCLQrtC20L3QvtGD0LrRgNCw0ZfQvdGB0YzQulwiLCBcItCu0L3QvtC60L7QvNGD0L3QsNGA0ZbQstGB0YzQulwiLCBcItCv0LLQvtGA0ZbQslwiLFxyXG4gICAgICAgICAgICBcItCv0LPQvtGC0LjQvVwiLCBcItCv0LvRgtCwXCIsIFwi0K/QvNC/0ZbQu9GMXCIsIFwi0K/RgNC10LzRh9C1XCIsIFwi0K/RgdC40L3Rg9Cy0LDRgtCwXCJcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAkc2NvcGUuYXV0b0FycmF5ID0ge1xyXG4gICAgICAgICAgICBhdXRvbW9iaWxlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQWN1cmFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFsZmEgUm9tZW9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFzdG9uIE1hcnRpblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQXVkaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQkFXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCZW50bGV5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCTVdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJyaWxsaWFuY2VcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJ1Z2F0dGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJ1aWNrXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCWURcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkNhZGlsbGFjXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJDaGFuZ2FuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJDaGVyeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQ2hldnJvbGV0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJDaHJ5c2xlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQ2l0cm9lblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRGFkaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRGFld29vXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEYWloYXRzdVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRGF0c3VuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJERlNLXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEb2RnZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRG9uZ0ZlbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkRTXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJGQVdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkZlcnJhcmlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkZpYXRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkZvcmRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkZvdG9uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJHQUNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkdlZWx5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJHZW5lc2lzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJHTUNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkdyZWF0IFdhbGxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkhhaW1hXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIYXZhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSG9uZGFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkh1bW1lclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSHl1bmRhaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSW5maW5pdGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIklzdXp1XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJJdmVjb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSkFDXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJKYWd1YXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkplZXBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkpNQ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiS2lhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMYWRhIC8g0JLQkNCXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMYW1ib3JnaGluaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTGFuY2lhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMYW5kIFJvdmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMZXh1c1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTGlmYW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkxpbmNvbG5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkx1eGdlblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTWFzZXJhdGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1heWJhY2hcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1hemRhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNZXJjZWRlcy1CZW56XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNZXJjdXJ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNR1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTWluaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTWl0c3ViaXNoaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTmlzc2FuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJPbGRzbW9iaWxlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJPcGVsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJQZXVnZW90XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJQb250aWFjXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJQb3JzY2hlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJSYXZvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUmVuYXVsdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUm9sbHMtUm95Y2VcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlJvdmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTYWFiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTYW1hbmRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNjaW9uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTRUFUXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTa29kYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU21hcnRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNzYW5nWW9uZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU3ViYXJ1XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTdXp1a2lcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlRlc2xhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJUb3lvdGFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZvbGtzd2FnZW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZvbHZvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJXYXJ0YnVyZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiWVVFSklOXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJaQVogLyDQl9CQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlpvdHllXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQkdC+0LPQtNCw0L1cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCT0JDQl1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JjQllwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JvQo9CQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCc0L7RgdC60LLQuNGHIC8g0JDQl9Cb0JpcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCi0LDQs9CQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCj0JDQl1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgICAgICB0cnVjazogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFzdHJhwqBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkF2aWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJBV1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQmVpZmFuZyBCZW5jaGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJNQ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQnJlbWFjaFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQ0FNQ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQ2hldnJvbGV0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJDaXRyb2VuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEQUZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkRGU0tcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkRvZGdlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEb25nZmVuZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRVJGXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJGQVdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkZpYXRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkZvZGVuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJGb3JkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJGb3RvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRnJlaWdodGxpbmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJHTUNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkhpbm8gTW90b3JzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIb3dvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIeXVuZGFpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJJbnRlcm5hdGlvbmFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJJc3V6dVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSXZlY29cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkpBQ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSmVlcFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSmVsY3pcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkpNQ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiS2Vud29ydGhcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIktpYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTGFuZCBSb3ZlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTERWXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNYWNrXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNQU5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1hemRhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNZXJjZWRlcy1CZW56XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNaXRzdWJpc2hpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNdWx0aWNhclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTmF2ZWNvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJOaXNzYW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk9wZWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlBldGVyYmlsdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUGV1Z2VvdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUGlhZ2dpb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUHJvdG9uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJSZW5hdWx0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJSb21hblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU2NhbmlhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTZWRkb24gQXRraW5zb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNoYWFueGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNpbm90cnVrXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTaXN1XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTdGFyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTdGVybGluZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVGF0YVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVGF0cmFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlRlcmJlcmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlRveW90YVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVmF1eGhhbGxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZvbGtzd2FnZW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZvbHZvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJXZXN0ZXJuIFN0YXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIllVRUpJTlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JHQldCb0JDQl1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JPQkNCXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQl9CY0JtcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCa0JDQnNCQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCa0KDQkNCXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQnNCQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCc0JDQly3QnNCQ0J1cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCj0JDQl1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0KPRgNCw0LtcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICAgICAgYnVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQU1aXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBbmthaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQXNob2sgTGV5bGFuZFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQXV0b3NhblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQXZpYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQXlhdHNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJBV1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQk1DXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCb3ZhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJDYWV0YW5vXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJDaGV2cm9sZXRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkNpdHJvw6tuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEQUJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkRhZXdvb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiREFGXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJERU4gT3Vkc3RlblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRWFnbGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkVPU1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRmlhdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRm9yZFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRm90b25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkdBWiAvINCT0JDQl1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiR01DXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJHb2xkZW4gRHJhZ29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIaWdlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSGlub1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSHl1bmRhaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSWthcnVzIC8g0IbQutCw0YDRg9GBXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJJbnRlcm5hdGlvbmFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJJcmlzYnVzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJJcml6YXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIklzdXp1XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJJdmVjb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSkFDXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJKb25ja2hlZXJlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJLYXJvc2FcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkvDpHNzYm9ocmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJLaWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIktpbmcgTG9uZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTUFOXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNYXJjb3BvbG9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1DVlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTWVyY2VkZXNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1pdHN1YmlzaGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk5lb3BsYW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk5pc3NhblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiT3BlbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiT3B0YXJlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJPdG9rYXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlBldWdlb3RcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlJlbmF1bHRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNhbm9zXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTY2FuaWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNldHJhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTaGFvbGluXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTaGVuIExvbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNvbGFyaXNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNPUlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU3VubG9uZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVGF0YVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVGVtc2FcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlRob21hc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVG95b3RhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJUcm9saWdhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJWYW4gSG9vbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVkRMXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJWREwgQmVya2hvZlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVkRMIEJvdmFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZETCBKb25ja2hlZXJlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJWb2xrc1dhZ2VuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJWb2x2b1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiWXV0b25nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJaaG9uZyBUb25nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJab25kYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JDRgtCw0LzQsNC9XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQkdCQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCR0JXQm9Ca0J7QnNCc0KPQndCc0JDQqFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JHQvtCz0LTQsNC9XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQk9CQ0JvQkNCXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQk9Ce0JvQkNCXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQldGC0LDQu9C+0L0gLyDQrdGC0LDQu9C+0L1cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCX0JDQl1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JrQkNCc0JDQl1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JvQkNCXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQm9GW0LDQtyAvINCb0LjQsNC3XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQnNCQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCc0JDQly3QnNCQ0J1cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCc0JDQoNCXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQndC10LzQsNC9XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQndCV0KTQkNCXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQntC70ZbQvNC/IC8g0J7Qu9C40LzQv1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0J/QkNCXXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQoNCe0JDQl1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0KHRgtGA0LjQuSDQsNCy0YLQvlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgICAgICBtb3RvOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQWNhYmlvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQWRsZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFkbHlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFlb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFlcm1hY2NoaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQUpQXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBSlNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFsZmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBbWF6b25hc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQW1lcmljYW4gSXJvbkhvcnNlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBbnphbmlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFwcmlsaWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFyY3RpYyBDYXRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFyaWVsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBVEtcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkF0bGFzIEhvbmRhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBdG9tb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQXVkaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQXV0b3N0dWRpb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQmFqYWpcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJhdG1hblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQmVuZWxsaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQmV0YVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQmlnIEJlYXIgQ2hvcHBlcnNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJpbWFuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCaW1vdGFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJsYXRhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCbHVlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCTVdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJvcmlsZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQm9zcyBIb3NzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCcmFtbW9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJTQVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQnVjY2lNb3RvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCdWVsbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQnVsdGFjb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQ2FnaXZhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJDYW1wYWduYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQ2FuLUFtXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJDYW5ub25kYWxlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJDQ01cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkNlbnRhdXJ1c1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQ29uZmVkZXJhdGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkNSJlNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkNaXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEYWVsaW1cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkRlcmJpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJES1dcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkRuZXByIC8g0JTQvdGW0L/RgNC+XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEb2RnZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRG9sbWFyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEdWNhdGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkVCUlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRmFudGljXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJGZXJyYXJpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJGaXNjaGVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJGdXRvbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkdhcmVsbGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkdBUyBHQVNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkdlbmVyaWNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkdlbmV2YVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiR2VvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiR2lsZXJhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIYXJsZXktRGF2aWRzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkhEVFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSGVyY3VsZXNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkhlcm8gSG9uZGFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkhpZ2hsYW5kXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIb25kYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSG9yZXhcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkh1c2FiZXJnXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIdXNxdmFybmFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkh5b3N1bmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkljb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkluZGlhblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSXRhbGpldFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSmF3YSAvINCv0LLQsFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSmlubGFuZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSlJMXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJLYXZha2lcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkthd2FzYWtpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJLZWV3YXlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIktyZWlkbGVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJLVE1cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkt5bWNvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMYXZlcmRhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMaWZhblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTGl0b1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTG9uY2luXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNYWljb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTWFsYWd1dGlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1hbnNvcnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1hdGNobGVzc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTUJLXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNSU5JXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNaW5za1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTWlzc2lvbiBNb3RvcnNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1vbmRpYWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1vbnRlc2FcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1vcmluaVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTW90byBGR1JcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1vdG8gR3V6emlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1vdG8gTW9yaW5pXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNb3RvQ3p5c3pcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1vdG9sZXZvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNb3Rvcmhpc3BhbmlhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNb3R1c1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTcO8bmNoXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNdXNzdGFuZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTVVaXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNViBBZ3VzdGFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1aXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJOQ1JcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk5lYW5kZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk5lbWJvIE1vdG9jaWNsZXR0ZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTm9ydG9uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJPcmlvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiT3NzYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUGFubm9uaWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlBldHJvbmFzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJQZXVnZW90XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJQR09cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlBpYWdnaW9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlBvbGFyaXNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlB1Y2hcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlF1YWRyb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUmFkaWFsIEVuZ2luZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUmVnZW50XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJSZW5hcmRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlJpZWp1XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJSb2VoclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUm9rb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlJvdGF4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJSb3lhbCBFbmZpZWxkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTYWNoc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU2JheVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU2hlcmNvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTaGluZXJheVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU2llbWVuc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU2ltc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTa3lCaWtlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTa3lNb3RvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTbWFydFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU3V6dWtpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTWU1cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlRyYWNrXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJUcml1bXBoXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJVcmFsIC8g0KPRgNCw0LtcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZhaHJlbmthbXBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZlY3RyaXhcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZlcnRlbWF0aVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVmVzcGFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZpY3RvcnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZpbmNlbnRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZpcGVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJWb2x0YVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVk9SXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJWb3hhblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVnlydXNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIldhbHogSGFyZGNvcmUgQ3ljbGVzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJXZXN0IENvYXN0IENob3BwZXJzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJZYW1haGFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIll1bWJvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJaZXJvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJab25nc2hlblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiWsO8bmRhcHBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICAgICAgd2FnZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBYmJleVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQWJpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBY2tlcm1hbm5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFkcmlhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBZnJpdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQUpLXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJBbC1rb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQW1lcmljYW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkFNVFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQXZlbnRvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCYWlsZXlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJhcnRoYXVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJlbHNoZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQmVuYWx1XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCbG9tZW5yw7ZoclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQmx1bWhhcmR0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCw7Zja2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCw7Zja21hbm5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJvcm9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJyZW5kZXJ1cFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQnJpYWJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkJyb3NodWlzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCdXJnXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJCdXJzdG5lclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiQnVzYWZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkNhcm5laGxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkNoYXRlYXVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkRBRlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRGFwYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRGUgTHV4ZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRGVzb3RcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkRldGhsZWZmc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRGlua2VsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEb2xsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJEcmFjb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRWFnZXIgQmVhdmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJFYmVydFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRWtlcmlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkVsZGRpc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRWxlZ2FuY2VcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkV1cm92YWdvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRmVsbGluZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRmVuZHRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkZsaWVnbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiRm9udGFpbmVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkZydWVoYXVmXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJHb2xkaG9mZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkdyZWF0IERhbmVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkdyb2VuZXdlZ2VuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJHU1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSGVucmVkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIRlJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkhvYmJ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIdWZmZXJtYW5uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJIdW1iYXVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJJRkEgLyDQhtCk0JBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIklmb3IgV2lsbGlhbXNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkluZGVzcGVuc2lvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSXN0cmFpbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiSlBNXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJKdW5nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJKeWtpXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJLYXNzYm9ocmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJLZWwtQmVyZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiS2lsYWZvcnNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIktuYXVzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJLbm90dCAvINCa0L3QvtGC0YJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIktvZ2VsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJLcm9uZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTEFHXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMYW5nZW5kb3JmXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMYXRyZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTGVza29yXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMaXBlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJMTUNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIkxPQUQgS0lOR1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTG9oclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTUFDXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNYXJhdWRlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTWVnYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTWVpbGxlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTWVua2VcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1ldXNidXJnZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1pY2hpZWxldHRvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNb2lyb3VkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJNb250cmFjb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1vc2xlaW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk1TVFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTcO8bGxlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTXVsbGVyLU1pdHRlbHRhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTXVuc3RlcmxhbmRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk5hcmtvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJOaWV3aWFkb3dcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIk5vb3RlYm9vbVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiTlRNXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJPYmVybWFpZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlBhY3RvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUGFuYXZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlBhcmF0b3JcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlBKXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJQbGF0aW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlBST1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUXVlc3RcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlJhcGlkb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUmVrb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUmVuZGVyc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiUmVzcG9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlJvYmluc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJSb2hyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTYSBUcnVjayBCb2RpZXNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNhbXJvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTY2htaXR6XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTY2htaXR6IENhcmdvYnVsbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU2Nod2Fyem11ZWxsZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNjaHdhcnptw7xsbGVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTRENcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlNvbW1lclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU3BpZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlN0ZW1hXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTdGVyY2tlbWFuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJTdW5saWdodFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiU3ZhblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVGFiYmVydFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVENTXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJUaWtpIFRyZWlsZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlRPV01BU1RFUlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVHJhaWwgS2luZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVHJvdWlsbGV0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJVUFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiVmFjdG9yXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJWQUtcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIlZhbiBIb29sXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJWYXJpYW50XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJXYWJhc2hcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIldhZ2VuLW1leWVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJXZWNrbWFuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJXZWlnaHRsaWZ0ZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcIldlaW5zYmVyZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwiV2VsbG1leWVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJXaWVsdG9uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCJXaWxrXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQkNCy0YLQvi3QodGC0LXQvVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JHQvtCx0LXRgFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JPQmtCRXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQl9CQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCX0JjQm1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0JfQodCQ0J9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCa0JDQnNCQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCa0LDRgNC3LdCcXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQmtC+0YDQuNC00LAt0KLQtdGFXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQmtC+0YDRgtC10YFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCa0YDQtdC80LXQvdGMXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQm9C10LJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCb0ZbQtNC10YAgLyDQm9C40LTQtdGAXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQnNCQ0JdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCe0LTRltGB0LXQuVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0J7Qv9GC0ZbQvNCwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQn9CQ0JLQkNCcXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQn9Cw0LvQuNGHXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQn9CT0JzQpFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG86IFwi0KHQsNC90YLQtdC5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQodC60ZbRhCAvINCh0LrQuNGEXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQotCwLdCd0L5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvOiBcItCj0YLQvtGBXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0bzogXCLQpNC10YDQvNC10YBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5hdXRvQXJyYXlDb252ZXJ0ID0gW107XHJcbiAgICAgICAgJHNjb3BlLnRydWNrQXJyYXlDb252ZXJ0ID0gW107XHJcbiAgICAgICAgJHNjb3BlLmJ1c0FycmF5Q29udmVydCA9IFtdO1xyXG4gICAgICAgICRzY29wZS5tb3RvQXJyYXlDb252ZXJ0ID0gW107XHJcbiAgICAgICAgJHNjb3BlLndhZ2VuQXJyYXlDb252ZXJ0ID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHNjb3BlLmFycmF5Q29udmVydCA9ICRzY29wZS5hdXRvQXJyYXlDb252ZXJ0O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiAkc2NvcGUuYXV0b0FycmF5LmF1dG9tb2JpbGUpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmF1dG9BcnJheUNvbnZlcnQucHVzaCgkc2NvcGUuYXV0b0FycmF5LmF1dG9tb2JpbGVbaW5kZXhdLmF1dG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gJHNjb3BlLmF1dG9BcnJheS50cnVjaykge1xyXG4gICAgICAgICAgICAkc2NvcGUudHJ1Y2tBcnJheUNvbnZlcnQucHVzaCgkc2NvcGUuYXV0b0FycmF5LnRydWNrW2luZGV4XS5hdXRvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluICRzY29wZS5hdXRvQXJyYXkuYnVzKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5idXNBcnJheUNvbnZlcnQucHVzaCgkc2NvcGUuYXV0b0FycmF5LmJ1c1tpbmRleF0uYXV0byk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiAkc2NvcGUuYXV0b0FycmF5Lm1vdG8pIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vdG9BcnJheUNvbnZlcnQucHVzaCgkc2NvcGUuYXV0b0FycmF5Lm1vdG9baW5kZXhdLmF1dG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gJHNjb3BlLmF1dG9BcnJheS53YWdlbikge1xyXG4gICAgICAgICAgICAkc2NvcGUud2FnZW5BcnJheUNvbnZlcnQucHVzaCgkc2NvcGUuYXV0b0FycmF5LndhZ2VuW2luZGV4XS5hdXRvKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBzZWFyY2hcclxuXHJcbiAgICAgICAgJHNjb3BlLmZpbHRlclNob3cgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmNsaWNrQ2l0eSA9IGZ1bmN0aW9uKGNpdHksIGNpdHlOYW1lKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJzExMTEnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2l0eSk7XHJcbiAgICAgICAgICAgICRzY29wZS5jaXR5Q2xhc3MgPSBjaXR5O1xyXG4gICAgICAgICAgICAkc2NvcGUuY2l0eU5hbWUgPSBjaXR5TmFtZTtcclxuICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5ID0gY2l0eU5hbWU7XHJcbiAgICAgICAgICAgICRzY29wZS5wbGFjZUNpdHkgPSBjaXR5TmFtZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoY2l0eSA9PSAnY2l0eTAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLksyID0gJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5jaXR5MDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuSzIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2l0eSA9PSAnY2l0eTEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLksyID0gJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5jaXR5MTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuSzIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2l0eSA9PSAnY2l0eTInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLksyID0gJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5jaXR5MjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuSzIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2l0eSA9PSAnY2l0eTMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLksyID0gJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5jaXR5MztcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuSzIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2l0eSA9PSAnY2l0eTQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLksyID0gJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5jaXR5NDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuSzIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2l0eSA9PSAnY2l0eTUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLksyID0gJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5jaXR5NTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuSzIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBkY3Ygb2JqZWN0XHJcblxyXG4gICAgICAgICRzY29wZS5kY3ZPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIGxpbWl0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDI0NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWyfQmtC40ZfQsicsICfQkdC+0YDQuNGB0L/RltC70YwnLCAn0JHQvtGP0YDQutCwJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0eTogMjE1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0eUFycmF5OiBbJ2RlZmF1bHQnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB1bmlrYTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiAxNjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5QXJyYXk6IFsn0JrQuNGX0LInLCAn0JHQvtGA0LjRgdC/0ZbQu9GMJywgJ9CR0L7Rj9GA0LrQsCcsICfQkdGA0L7QstCw0YDQuCcsICfQktCw0YHQuNC70YzQutGW0LInLCAn0JLQuNGI0LPQvtGA0L7QtCcsICfQktC40YjQvdC10LLQtScsICfQhtGA0L/RltC90YwnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiAxMzIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5QXJyYXk6IFsn0KXQsNGA0LrRltCyJywgJ9Ce0LTQtdGB0LAnLCAn0JTQvtC90LXRhtGM0LonLCAn0JTQvdGW0L/RgNC+JywgJ9CX0LDQv9C+0YDRltC20LbRjyddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDEwNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNnOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDI1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHp1OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDE2MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWyfQmtC40ZfQsiddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDI5MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWyfQmtC40ZfQsicsICfQkdC+0YDQuNGB0L/RltC70YwnLCAn0JHQvtGP0YDQutCwJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0eTogMjYwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0eUFycmF5OiBbJ2RlZmF1bHQnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB1bmlrYTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiAyNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5QXJyYXk6IFsn0JrQuNGX0LInLCAn0JHQvtGA0LjRgdC/0ZbQu9GMJywgJ9CR0L7Rj9GA0LrQsCcsICfQkdGA0L7QstCw0YDQuCcsICfQktCw0YHQuNC70YzQutGW0LInLCAn0JLQuNGI0LPQvtGA0L7QtCcsICfQktC40YjQvdC10LLQtScsICfQhtGA0L/RltC90YwnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiAyMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5QXJyYXk6IFsn0KXQsNGA0LrRltCyJywgJ9Ce0LTQtdGB0LAnLCAn0JTQvtC90LXRhtGM0LonLCAn0JTQvdGW0L/RgNC+JywgJ9CX0LDQv9C+0YDRltC20LbRjyddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDE3NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNnOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDM1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHp1OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDU0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWyfQmtC40ZfQsiddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDQxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWyfQmtC40ZfQsicsICfQkdC+0YDQuNGB0L/RltC70YwnLCAn0JHQvtGP0YDQutCwJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0eTogMzcwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0eUFycmF5OiBbJ2RlZmF1bHQnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB1bmlrYTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiAzMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5QXJyYXk6IFsn0JrQuNGX0LInLCAn0JHQvtGA0LjRgdC/0ZbQu9GMJywgJ9CR0L7Rj9GA0LrQsCcsICfQkdGA0L7QstCw0YDQuCcsICfQktCw0YHQuNC70YzQutGW0LInLCAn0JLQuNGI0LPQvtGA0L7QtCcsICfQktC40YjQvdC10LLQtScsICfQhtGA0L/RltC90YwnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiAyNjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5QXJyYXk6IFsn0KXQsNGA0LrRltCyJywgJ9Ce0LTQtdGB0LAnLCAn0JTQvtC90LXRhtGM0LonLCAn0JTQvdGW0L/RgNC+JywgJ9CX0LDQv9C+0YDRltC20LbRjyddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDIxNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNnOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDY1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHp1OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDg4MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWyfQmtC40ZfQsiddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IDQ4MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlBcnJheTogWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZHJpdmUgZXhwZXJpZW5jZSBvYmpcclxuXHJcbiAgICAgICAgJHNjb3BlLmluc3VyYW5jZURyaXZlRXhwZXJpZW5jZSA9IHtcclxuXHJcbiAgICAgICAgICAgIG1vcmVfMjAxMzogWyRzY29wZS5jb2VmaWNpZW50LmRhdGEuSzFfMSwgJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5LMV8yLFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5LMV8zLCAkc2NvcGUuY29lZmljaWVudC5kYXRhLksxXzRdLFxyXG4gICAgICAgICAgICB5ZWFyXzIwMTQ6IFskc2NvcGUuY29lZmljaWVudC5kYXRhLksyXzEsICRzY29wZS5jb2VmaWNpZW50LmRhdGEuSzJfMixcclxuICAgICAgICAgICAgICAgICRzY29wZS5jb2VmaWNpZW50LmRhdGEuSzJfMywgJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5LMl80XSxcclxuICAgICAgICAgICAgeWVhcl8yMDE1OiBbJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5LM18xLCAkc2NvcGUuY29lZmljaWVudC5kYXRhLkszXzIsXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29lZmljaWVudC5kYXRhLkszXzMsICRzY29wZS5jb2VmaWNpZW50LmRhdGEuSzNfNF0sXHJcbiAgICAgICAgICAgIHllYXJfMjAxNjogWyRzY29wZS5jb2VmaWNpZW50LmRhdGEuSzRfMSwgJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5LNF8yLFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5LNF8zLCAkc2NvcGUuY29lZmljaWVudC5kYXRhLks0XzRdLFxyXG4gICAgICAgICAgICB5ZWFyXzIwMTc6IFskc2NvcGUuY29lZmljaWVudC5kYXRhLks1XzEsICRzY29wZS5jb2VmaWNpZW50LmRhdGEuSzVfMixcclxuICAgICAgICAgICAgICAgICRzY29wZS5jb2VmaWNpZW50LmRhdGEuSzVfMywgJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5LNV80XVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdmFyaWFibGVzXHJcblxyXG4gICAgICAgICRzY29wZS5mcmFuY0F4YSA9ICcwJztcclxuICAgICAgICAkc2NvcGUuZnJhbmNQenUgPSAnMTAwMCc7XHJcbiAgICAgICAgJHNjb3BlLmZyYW5jVW5pa2EgPSAnMCc7XHJcbiAgICAgICAgJHNjb3BlLmZyYW5jVXNnID0gJzEwMDAnO1xyXG4gICAgICAgICRzY29wZS5kZ28gPSAnLyDQlNCT0J4sIDAnO1xyXG4gICAgICAgICRzY29wZS5mcmFuYyA9ICcwJztcclxuICAgICAgICAkc2NvcGUucGlsZ2FUZXh0ID0gJ9Cd0LUg0LzQsNGOJztcclxuICAgICAgICAkc2NvcGUuYXV0b1llYXIgPSAnMjAxMyDRgC4g0ZYg0YDQsNC90ZbRiNC1JztcclxuICAgICAgICAkc2NvcGUuYXV0b0NhdGVnb3J5ID0gJ9Cb0LXQs9C60L7QstC1INCw0LLRgtC+JztcclxuICAgICAgICAkc2NvcGUuRFRQID0gJ9Cx0ZbQu9GM0YjQtSA0INGA0L7QutGW0LInO1xyXG4gICAgICAgICRzY29wZS50YXhpUXVlc3Rpb24gPSAn0J3Rlic7XHJcbiAgICAgICAgJHNjb3BlLmVuZ2luZSA9ICfQtNC+IDE2MDAg0YHQvCc7XHJcbiAgICAgICAgJHNjb3BlLmluc3VyYW5jZU5hbWUgPSAnJztcclxuICAgICAgICAkc2NvcGUuY2l0eUNsYXNzID0gJ2NpdHkwJztcclxuICAgICAgICAkc2NvcGUuY2l0eU5hbWUgPSAn0JrQuNGX0LInO1xyXG4gICAgICAgICRzY29wZS5wbGFjZUNpdHkgPSAn0JrQuNGX0LInO1xyXG4gICAgICAgICRzY29wZS5wYXN0ZURhdGEgPSBbXTtcclxuICAgICAgICAkc2NvcGUuZGN2RGVmYXVsdCA9IDA7XHJcbiAgICAgICAgJHNjb3BlLmxpbWl0Q291bnQgPSBmYWxzZTtcclxuICAgICAgICAkc2NvcGUuSzEgPSAkc2NvcGUuY29lZmljaWVudC5kYXRhLkIxO1xyXG4gICAgICAgICRzY29wZS5LMiA9ICRzY29wZS5jb2VmaWNpZW50LmRhdGEuY2l0eTA7XHJcbiAgICAgICAgJHNjb3BlLkszID0gJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5HMTtcclxuICAgICAgICAkc2NvcGUuSzQgPSAkc2NvcGUuY29lZmljaWVudC5kYXRhLkgwO1xyXG4gICAgICAgICRzY29wZS5LNSA9ICRzY29wZS5jb2VmaWNpZW50LmRhdGEuSTtcclxuICAgICAgICAkc2NvcGUuSzYgPSAkc2NvcGUuY29lZmljaWVudC5kYXRhLko7XHJcbiAgICAgICAgJHNjb3BlLktwaWwgPSAkc2NvcGUuY29lZmljaWVudC5kYXRhLkw7XHJcbiAgICAgICAgJHNjb3BlLktCUCA9ICRzY29wZS5jb2VmaWNpZW50LmRhdGEuQlA7XHJcbiAgICAgICAgJHNjb3BlLktCTSA9IFtdO1xyXG4gICAgICAgICRzY29wZS5LQk1kZWYgPSBbXCIxXCIsXCIxXCIsXCIxXCIsXCIxXCJdO1xyXG4gICAgICAgICRzY29wZS5LQk1kZWZDaGVjayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBkZWZhdWx0IHZhbHVlIGZvciBkcml2aW5nIGV4cGVyaWVuY2VcclxuXHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgICRzY29wZS5pbnN1cmFuY2VEcml2ZUV4cGVyaWVuY2UubW9yZV8yMDEzLmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XHJcbiAgICAgICAgICAgICRzY29wZS5LQk1baV0gPSBlbGVtO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLktCTSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZGVmYXVsdCBpbnN1cmFuY2UgY29tcGFueVxyXG5cclxuICAgICAgICAkc2NvcGUuS0JNY29lZiA9IHBhcnNlRmxvYXQoJHNjb3BlLktCTVswXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLktCTWNvZWYpO1xyXG5cclxuICAgICAgICAvLyBjbGljayBldmVudHNcclxuXHJcbiAgICAgICAgJHNjb3BlLnZpcmdpblVzZSA9IGZ1bmN0aW9uKGlkLCBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJytjbGFzc05hbWUpLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmNsaWNrTGltaXQgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhc3RlRGF0YSA9IGluZGV4O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmluc2VydENhc2ggPSBmdW5jdGlvbihwYXJ0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRjdkRlZmF1bHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubnVtYmVyID0gcGFydC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRjdkRlZmF1bHQgPSBwYXJ0WyRzY29wZS5udW1iZXItMV07XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRjdkRlZmF1bHQgPSAkc2NvcGUuZGN2RGVmYXVsdC5jaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXJ0LmZvckVhY2goZnVuY3Rpb24oaW5zKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jaXR5Q2hlY2sgPSBpbnMuY2l0eUFycmF5LmluZGV4T2YoJHNjb3BlLmNpdHlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuY2l0eUNoZWNrID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kY3ZEZWZhdWx0ID0gaW5zLmNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuZGN2RGVmYXVsdDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmF1dG9UYWJzQ2xpY2sgPSBmdW5jdGlvbihwYXJ0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5LMSA9IHBhcnNlRmxvYXQocGFydCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5LMSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnRheGlDbGljayA9IGZ1bmN0aW9uKHBhcnQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLkszID0gcGFyc2VGbG9hdChwYXJ0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLkszKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUuZHJpdmVFeHAgPSBmdW5jdGlvbihwYXJ0LCBjaXR5KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5LNCA9IHBhcnNlRmxvYXQocGFydCk7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLks0KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUucGlsZ2FDbGljayA9IGZ1bmN0aW9uKHBpbGdhKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5LcGlsID0gcGFyc2VGbG9hdChwaWxnYSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5LcGlsKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gS0JNIGNvZWZmaWNpZW50XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuaW5zdXJhbmNlQ2hvb3NlWWVhciA9IGZ1bmN0aW9uKHllYXIsIGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAkc2NvcGUuS0JNQ2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5LQk0gPSBbXCIxXCIsXCIxXCIsXCIxXCIsXCIxXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXIuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuS0JNW3JdID0gZWxlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93dHogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHpfYXV0byAuYnV0dG9uX21vcmVfbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3d0eltpZF0ucHJldmlvdXNFbGVtZW50U2libGluZy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50el9hdXRvIC5jdXJyZW50LWxhYmVsJykuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNoYWRvd3R6W2lkXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHRwX2F1dG8gLmJ1dHRvbl9tb3JlX2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93W2lkXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR0cF9hdXRvIC5jdXJyZW50LWxhYmVsJykuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNoYWRvd1tpZF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLktCTSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNoYWRvd3R6ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR6X3dlaWdodCAuYnV0dG9uX21vcmVfbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3d0eltpZF0ucHJldmlvdXNFbGVtZW50U2libGluZy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50el93ZWlnaHQgLmN1cnJlbnQtbGFiZWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93dHpbaWRdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbGFiZWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmR0cF93ZWlnaHQgLmJ1dHRvbl9tb3JlX2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93W2lkXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR0cF93ZWlnaHQgLmN1cnJlbnQtbGFiZWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93W2lkXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuS0JNKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93dHogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHpfYnVzIC5idXR0b25fbW9yZV9sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNoYWRvd3R6W2lkXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR6X2J1cyAuY3VycmVudC1sYWJlbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3d0eltpZF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1sYWJlbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHRwX2J1cyAuYnV0dG9uX21vcmVfbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3dbaWRdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHRwX2J1cyAuY3VycmVudC1sYWJlbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3dbaWRdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5LQk0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3d0eiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50el9tb3RvIC5idXR0b25fbW9yZV9sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNoYWRvd3R6W2lkXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR6X21vdG8gLmN1cnJlbnQtbGFiZWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93dHpbaWRdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbGFiZWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmR0cF9tb3RvIC5idXR0b25fbW9yZV9sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNoYWRvd1tpZF0ucHJldmlvdXNFbGVtZW50U2libGluZy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdHBfbW90byAuY3VycmVudC1sYWJlbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3dbaWRdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5LQk0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93dHogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHpfd2FnZW4gLmJ1dHRvbl9tb3JlX2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93dHpbaWRdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHpfd2FnZW4gLmN1cnJlbnQtbGFiZWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93dHpbaWRdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbGFiZWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmR0cF93YWdlbiAuYnV0dG9uX21vcmVfbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaGFkb3dbaWRdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHRwX3dhZ2VuIC5jdXJyZW50LWxhYmVsJykuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNoYWRvd1tpZF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLktCTSk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmluc3VyYW5jZUNob29zZSA9IGZ1bmN0aW9uKGluc3VyYW5jZUNvbXBhbnkpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5LQk1jb2VmID0gcGFyc2VGbG9hdChpbnN1cmFuY2VDb21wYW55KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5LQk1jb2VmKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5jaXR5TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5jaXR5Q2xhc3MgPT0gJ2NpdHkxJykge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5LNCA9ICRzY29wZS5jb2VmaWNpZW50LmRhdGEuSDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FBQUFBJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoJHNjb3BlLmNpdHlDbGFzcyA9PSAnY2l0eTUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLks0ID0gJHNjb3BlLmNvZWZpY2llbnQuZGF0YS5IMjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQkJCQkJCQicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRpbmdcclxuICAgICAgICBcclxuICAgICAgICAkc2NvcGUuZmluYWxSZXN1bHQgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS5jYWxjdWxhdGluZyA9IGZ1bmN0aW9uKGticCxrMSxrMixrMyxrNCxrNSxrNixrYm0sa3BpbCl7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmluYWxSZXN1bHQgPSBwYXJzZUZsb2F0KGticCkqcGFyc2VGbG9hdChrMSkqcGFyc2VGbG9hdChrMikqcGFyc2VGbG9hdChrMylcclxuICAgICAgICAgICAgICAgICpwYXJzZUZsb2F0KGs0KSpwYXJzZUZsb2F0KGs1KSpwYXJzZUZsb2F0KGs2KSpwYXJzZUZsb2F0KGtibSkqcGFyc2VGbG9hdChrcGlsKTtcclxuICAgICAgICAgICAgJHNjb3BlLmZpbmFsUmVzdWx0ID0gICRzY29wZS5maW5hbFJlc3VsdC50b0ZpeGVkKDIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrYnApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGsyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coazMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrNCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGs1KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coazYpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrYm0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrcGlsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmZpbmFsUmVzdWx0KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB2YWxpZGF0aW9uXHJcblxyXG4gICAgJHNjb3BlLnZhbGlkYXRpb24gPSBmdW5jdGlvbihmb3JtKSB7XHJcblxyXG4gICAgICAgIGlmKGZvcm0uJHZhbGlkKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZBTExMTElJSUlEREQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2xpY2tBdXRvID0gIGZ1bmN0aW9uKG1hcmspe1xyXG4gICAgICAgICRzY29wZS5hdXRvID0gbWFyaztcclxuICAgIH07XHJcblxyXG4gICAgLy8gTWFyayBjaGVja1xyXG5cclxuICAgICRzY29wZS53cm9uZ01hcmtDaGVjayA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS5jaGVja01hcmsgPSBmdW5jdGlvbihtb2RlbCxhcnJheSkge1xyXG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICBpZihtb2RlbCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICRzY29wZS53cm9uZ01hcmtDaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICRzY29wZS5wcmVGb3JtLmF1dG9GaWx0ZXIuJHNldFZhbGlkaXR5KCdmdWxsLW1hcmsnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICRzY29wZS53cm9uZ01hcmsgPSBhbmd1bGFyLmVxdWFscyhtb2RlbC50b0xvd2VyQ2FzZSgpLCBhcnJheVtpXS50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgIGlmICAoJHNjb3BlLndyb25nTWFyayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAkc2NvcGUud3JvbmdNYXJrQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICRzY29wZS5wcmVGb3JtLmF1dG9GaWx0ZXIuJHNldFZhbGlkaXR5KCdmdWxsLW1hcmsnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICRzY29wZS53cm9uZ01hcmtDaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAkc2NvcGUucHJlRm9ybS5hdXRvRmlsdGVyLiRzZXRWYWxpZGl0eSgnZnVsbC1tYXJrJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoZWNrQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBDaXR5IGNoZWNrXHJcblxyXG4gICAgJHNjb3BlLndyb25nQ2l0eUNoZWNrID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmNoZWNrQ2l0eSA9IGZ1bmN0aW9uKG1vZGVsLGFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkc2NvcGUud3JvbmdDaXR5ID0gYW5ndWxhci5lcXVhbHMobW9kZWwudG9Mb3dlckNhc2UoKSwgYXJyYXlbaV0udG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAgKCRzY29wZS53cm9uZ0NpdHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpdHkgJyskc2NvcGUud3JvbmdDaXR5KTtcclxuICAgICAgICAgICAgICAgICRzY29wZS53cm9uZ0NpdHlDaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLndyb25nQ2l0eUNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIFJlZ0V4cCBcclxuXHJcbiAgICAkc2NvcGUubnVtYmVyUmVnID0gL15bMC05XXs0fS0oMFsxLTldfDFbMDEyXSktKDBbMS05XXwxWzAtOV18MlswLTldfDNbMDFdKSQvO1xyXG4gICAgJHNjb3BlLmlwblJlZyA9IC9eWzAtOV17MTB9JC87XHJcbiAgICAkc2NvcGUuc2VyaWVzUmVnID0gL15b0LAt0Y/QkC3Qr9CG0ZbQh9GX0ITRlF17Mn0kLztcclxuICAgICRzY29wZS5kb2NOdW1iZXJSZWcgPSAvXlswLTldezZ9JC87XHJcbiAgICAkc2NvcGUueWVhck51bWJlclJlZyA9IC9eWzAtOV17NH0kLztcclxuXHJcbiAgICAvLyBkaXJlY3RpdmVzXHJcblxyXG4gICAgaW5zdXJhbmNlQXBwLmRpcmVjdGl2ZSgncHdDaGVjaycsIFtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzLCBjdHJsKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjdXN0b21WYWxpZGF0b3IobmdNb2RlbFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoJ3VwcGVyY2FzZVZhbGlkYXRvcicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN0cmwuJHNldFZhbGlkaXR5KCd1cHBlcmNhc2VWYWxpZGF0b3InLCB0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5nTW9kZWxWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN0cmwuJHBhcnNlcnMucHVzaChjdXN0b21WYWxpZGF0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XSk7XHJcblxyXG59XSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
