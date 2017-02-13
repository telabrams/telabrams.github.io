"use strict";

var app = angular.module('app', []);

app.controller('calculatorCTRL', ['$scope', function ($scope) {
    $scope.bp = 180;
    $scope.k1 = 1;
    $scope.k1b = true;
    $scope.k1bass = false;

    $scope.k2 = 0;
    $scope.k3 = 1;
    $scope.k4 = {a: 1.5, b: 1.5};
    $scope.k5 = 1;
    $scope.k6 = 1;
    $scope.kBM = 0.8;
    $scope.kP = 1;

    $scope.year = 5;
    $scope.typeCar = 0;

    $scope.AXAfranshiza = {cost: 1000, show: true};
    $scope.PZUfranshiza = 1000;
    $scope.UNIKAfranshiza = 1000;
    $scope.USGfranshiza = 1000;

    /*franshiza*/

    $scope.choiceAXA = function (choice) {
        $scope.AXAfranshiza = choice;
    }

    $scope.choicePZUfranshiza = function (choice) {
        $scope.PZUfranshiza = choice;
    }

    $scope.choiceUNIKAfranshiza = function (choice) {
        $scope.UNIKAfranshiza = choice;
    }

    $scope.choiceUSGfranshiza = function (choice) {
        $scope.USGfranshiza = choice;
    }

    /*koef*/
    $scope.choicekP = function (h) {
        $scope.kP = h;
    };
    $scope.choicekBM = function (BM) {
        $scope.kBM = BM;
    };
    $scope.choiseYear = function (year) {
        $scope.year = year;
    }
    $scope.choiseK1 = function (number, b) {
        $scope.k1 = number;
        $scope.k1b = b;
        if (b != true) {
            var a = document.querySelector('#pilga_xs').parentElement;
            var curElem = a.querySelector('.button_more_label.current-label');
            curElem.classList.remove('current-label')
            var b = a.querySelector('.button_more_label');
            b.classList.add('current-label');
        }

    };
    $scope.choiseK1Buss = function (number, b) {
        $scope.k1 = number;
        $scope.k1bass = b;
        if (b != true) {
            var a = document.querySelector('#bus_taxi_xs').parentElement;
            var curElem = a.querySelector('.button_more_label.current-label');
            curElem.classList.remove('current-label');
            var b = a.querySelector('.button_more_label');
            b.classList.add('current-label');
            $scope.k3 = 1;
        }

    };
    $scope.chooseK2 = function (number) {
        $scope.k2 = number;
    };
    $scope.choiseK3 = function (number, b) {
        $scope.k3 = number;
        $scope.kP = 1;
        $scope.k1b = b;
        var a = document.querySelector('#pilga_xs').parentElement;
        var curElem = a.querySelector('.button_more_label.current-label');
        curElem.classList.remove('current-label')
        var b = a.querySelector('.button_more_label');
        b.classList.add('current-label');
    };
    $scope.choiseTypeCar = function (number) {
        $scope.typeCar = number;
    };

    /*formula OSCPV*/

    $scope.oscpv = {all: 0, axa: 0};

    $scope.setOSCPV = function () {
        $scope.oscpv.all = $scope.bp * $scope.k1 * $scope.k2 * $scope.k3 * $scope.k4.a * $scope.k5 * $scope.k6 * $scope.kBM * $scope.kP;
        $scope.oscpv.all = $scope.oscpv.all.toFixed(2);
        $scope.oscpv.axa = $scope.bp * $scope.k1 * $scope.k2 * $scope.k3 * $scope.k4.b * $scope.k5 * $scope.k6 * $scope.kBM * $scope.kP;
        $scope.oscpv.axa = $scope.oscpv.axa.toFixed(2);

        switch ($scope.typeCar) {
            case 0:
                if ($scope.k3 == 1) {
                    $scope.AXAfranshiza = {cost: 0, show: true};
                    $scope.PZUfranshiza = 0;
                    $scope.UNIKAfranshiza = 1000;
                    $scope.USGfranshiza = 1000;
                } else {
                    $scope.AXAfranshiza = {cost: 0, show: false};
                    $scope.PZUfranshiza = 1000;
                    $scope.UNIKAfranshiza = 1000;
                    $scope.USGfranshiza = 1000;
                }
                break;
            case 1, 3, 4:
                $scope.AXAfranshiza = {cost: 0, show: true};
                $scope.PZUfranshiza = 0;
                $scope.UNIKAfranshiza = 1000;
                $scope.USGfranshiza = 1000;
                break;
            case 2:
                if ($scope.k3 == 1) {
                    $scope.AXAfranshiza = {cost: 0, show: true};
                    $scope.PZUfranshiza = 0;
                    $scope.UNIKAfranshiza = 1000;
                    $scope.USGfranshiza = 1000;
                } else {
                    $scope.AXAfranshiza = {cost: 0, show: false};
                    $scope.PZUfranshiza = 1000;
                    $scope.UNIKAfranshiza = 1000;
                    $scope.USGfranshiza = 1000;
                }
                break;
        }

    }

    $scope.itemsList = [
        {name: 'Київ', index: 4.8},

        {name: 'Бориспіль', index: 2.5},
        {name: 'Боярка', index: 2.5},
        {name: 'Бровари', index: 2.5},
        {name: 'Васильків', index: 2.5},
        {name: 'Вишгород', index: 2.5},
        {name: 'Вишневе', index: 2.5},
        {name: 'Ірпінь', index: 2.5},

        {name: 'Харків', index: 3.4},
        {name: 'Одеса', index: 3.4},

        {name: 'Дніпро/Дніпропетровськ', index: 2.8},
        {name: 'Донецьк', index: 2.8},
        {name: 'Запоріжжя', index: 2.8},
        {name: 'Львів', index: 2.8},
        {name: 'Кривий Ріг', index: 2.8},

        {name: 'Миколаїв', index: 2.2},
        {name: 'Маріуполь', index: 2.2},
        {name: 'Івано-Франківськ', index: 2.2},
        {name: 'Луганськ', index: 2.2},
        {name: 'Кременчук', index: 2.2},
        {name: 'Вінниця', index: 2.2},
        {name: 'Тернопіль', index: 2.2},
        {name: 'Макіївка', index: 2.2},
        {name: 'Луцьк', index: 2.2},
        {name: 'Севастополь', index: 2.2},
        {name: 'Біла Церква', index: 2.2},
        {name: 'Сімферополь', index: 2.2},
        {name: 'Краматорськ', index: 2.2},
        {name: 'Херсон', index: 2.2},
        {name: 'Полтава', index: 2.2},
        {name: 'Мелітополь', index: 2.2},
        {name: 'Полтава', index: 2.2},
        {name: 'Керч', index: 2.2},
        {name: 'Чернігів', index: 2.2},
        {name: 'Нікополь', index: 2.2},
        {name: 'Черкаси', index: 2.2},
        {name: 'Слов`янськ', index: 2.2},
        {name: 'Житомир', index: 2.2},
        {name: 'Ужгород', index: 2.2},
        {name: 'Суми', index: 2.2},
        {name: 'Бердянськ', index: 2.2},
        {name: 'Хмельницький', index: 2.2},
        {name: 'Алчевськ', index: 2.2},
        {name: 'Чернівці', index: 2.2},
        {name: 'Павлоград', index: 2.2},
        {name: 'Горлівка', index: 2.2},
        {name: 'Сєвєродонецьк', index: 2.2},
        {name: 'Рівне', index: 2.2},
        {name: 'Євпаторія', index: 2.2},
        {name: 'Кам`янське/Дніпродзержинськ', index: 2.2},
        {name: 'Лисичанськ', index: 2.2},
        {name: 'Кропивницький/Кіровоград', index: 2.2},
        {name: 'Кам`янецьк-Подільський', index: 2.2},


        {name: 'Авдіївка', index: 2.2},
        {name: 'Алупка', index: 2.2},
        {name: 'Алушта', index: 2.2},
        {name: 'Амвросіївка', index: 2.2},
        {name: 'Андрушівка', index: 2.2},
        {name: 'Антрацит', index: 2.2},
        {name: 'Апостолове', index: 2.2},
        {name: 'Апостолове', index: 2.2},
        {name: 'Армянськ', index: 2.2},
        {name: 'Арциз', index: 2.2},
        {name: 'Балаклія', index: 2.2},
        {name: 'Балаклія', index: 2.2},
        {name: 'Балта', index: 2.2},
        {name: 'Бар', index: 2.2},
        {name: 'Баранівка', index: 2.2},
        {name: 'Барвінкове', index: 2.2},
        {name: 'Баришівка', index: 2.2},
        {name: 'Бахмач', index: 2.2},
        {name: 'Бахмут/Артемівськ', index: 2.2},
        {name: 'Баштанка', index: 2.2},
        {name: 'Бердичів', index: 2.2},
        {name: 'Берегове', index: 2.2},
        {name: 'Бережани', index: 2.2},
        {name: 'Березань', index: 2.2},
        {name: 'Березівка', index: 2.2},
        {name: 'Березне', index: 2.2},
        {name: 'Берислав', index: 2.2},
        {name: 'Бершадь', index: 2.2},
        {name: 'Білгород-Дністровський', index: 2.2},
        {name: 'Білицьке', index: 2.2},
        {name: 'Білогірськ', index: 2.2},
        {name: 'Білозерське', index: 2.2},
        {name: 'Біляївка', index: 2.2},
        {name: 'Бобринець', index: 2.2},
        {name: 'Бобровиця', index: 2.2},
        {name: 'Богодухів', index: 2.2},
        {name: 'Богуслав', index: 2.2},
        {name: 'Болград', index: 2.2},
        {name: 'Борзна', index: 2.2},
        {name: 'Борислав', index: 2.2},
        {name: 'Бородянка', index: 2.2},
        {name: 'Борщів', index: 2.2},
        {name: 'Броди', index: 2.2},
        {name: 'Брянка', index: 2.2},
        {name: 'Буринь', index: 2.2},
        {name: 'Бурштин', index: 2.2},
        {name: 'Бутенки', index: 2.2},
        {name: 'Бучач', index: 2.2},
        {name: 'Валки', index: 2.2},
        {name: 'Василівка', index: 2.2},
        {name: 'Ватутіне', index: 2.2},
        {name: 'Вахрушеве', index: 2.2},
        {name: 'Велика Олександрівка', index: 2.2},
        {name: 'Вижниця', index: 2.2},
        {name: 'Вилкове', index: 2.2},
        {name: 'Винарівка', index: 2.2},
        {name: 'Виноградів', index: 2.2},
        {name: 'Високий', index: 2.2},
        {name: 'Вільнянськ', index: 2.2},
        {name: 'Вільшанка', index: 2.2},
        {name: 'Вовчанськ', index: 2.2},
        {name: 'Вознесенськ', index: 2.2},
        {name: 'Волноваха', index: 2.2},
        {name: 'Володарське', index: 2.2},
        {name: 'Володимир-Волинський', index: 2.2},
        {name: 'Володимирець', index: 2.2},
        {name: 'Вуглегірськ', index: 2.2},
        {name: 'Вугледар', index: 2.2},
        {name: 'Гадяч', index: 2.2},
        {name: 'Гайворон', index: 2.2},
        {name: 'Гайсин', index: 2.2},
        {name: 'Гайшин', index: 2.2},
        {name: 'Генічеськ', index: 2.2},
        {name: 'Гірське', index: 2.2},
        {name: 'Глибока', index: 2.2},
        {name: 'Глобине', index: 2.2},
        {name: 'Глухів', index: 2.2},
        {name: 'Гнівань', index: 2.2},
        {name: 'Гола Пристань', index: 2.2},
        {name: 'Горностаївка', index: 2.2},
        {name: 'Городенка', index: 2.2},
        {name: 'Городище', index: 2.2},
        {name: 'Городок', index: 2.2},
        {name: 'Горохів', index: 2.2},
        {name: 'Гребінка', index: 2.2},
        {name: 'Гуляйполе', index: 2.2},
        {name: 'Дебальцеве', index: 2.2},
        {name: 'Деражня', index: 2.2},
        {name: 'Дергачі', index: 2.2},
        {name: 'Джанкой', index: 2.2},
        {name: 'Диканька', index: 2.2},
        {name: 'Димитров', index: 2.2},
        {name: 'Дніпрорудне', index: 2.2},
        {name: 'Добропілля', index: 2.2},
        {name: 'Докучаєвськ', index: 2.2},
        {name: 'Долина', index: 2.2},
        {name: 'Долинська', index: 2.2},


    ];

    $scope.AxaListLimit = [
        [
            {"name": 'Київ', "price": 245},
            {"name": 'Бориспіль', "price": 245},
            {"name": 'Боярка', "price": 245},
            {"name": 'Бородянка', "price": 245},
            {"name": 'Бровари', "price": 245},
            {"name": 'Васильків', "price": 245},
            {"name": 'Вишневе', "price": 245},
            {"name": 'Обухів', "price": 245},
            {"name": 'Другое', "price": 215}
        ],
        [
            {"name": 'Київ', "price": 290},
            {"name": 'Бориспіль', "price": 290},
            {"name": 'Боярка', "price": 290},
            {"name": 'Бородянка', "price": 290},
            {"name": 'Бровари', "price": 290},
            {"name": 'Васильків', "price": 290},
            {"name": 'Вишневе', "price": 290},
            {"name": 'Обухів', "price": 290},
            {"name": 'Другое', "price": 260}
        ],
        [
            {"name": 'Київ', "price": 410},
            {"name": 'Бориспіль', "price": 410},
            {"name": 'Боярка', "price": 410},
            {"name": 'Бородянка', "price": 410},
            {"name": 'Бровари', "price": 410},
            {"name": 'Васильків', "price": 410},
            {"name": 'Вишневе', "price": 410},
            {"name": 'Обухів', "price": 410},
            {"name": 'Другое', "price": 370}
        ]
    ];
    $scope.UnicaListLimit = [
        [
            {"name": 'Київ', "price": 165},
            {"name": 'Бориспіль', "price": 165},
            {"name": 'Боярка', "price": 165},
            {"name": 'Бровари', "price": 165},
            {"name": 'Васильків', "price": 165},
            {"name": 'Вишневе', "price": 165},
            {"name": 'Ірпінь', "price": 165},

            {"name": 'Харків', "price": 132},
            {"name": 'Одесса', "price": 132},
            {"name": 'Донецьк', "price": 132},
            {"name": 'Дніпро', "price": 132},
            {"name": 'Запоріжжя', "price": 132},

            {"name": 'Другое', "price": 107}
        ],
        [
            {"name": 'Київ', "price": 270},
            {"name": 'Бориспіль', "price": 270},
            {"name": 'Боярка', "price": 270},
            {"name": 'Бровари', "price": 270},
            {"name": 'Васильків', "price": 270},
            {"name": 'Вишневе', "price": 270},
            {"name": 'Ірпінь', "price": 270},

            {"name": 'Харків', "price": 216},
            {"name": 'Одесса', "price": 216},
            {"name": 'Донецьк', "price": 216},
            {"name": 'Дніпро', "price": 216},
            {"name": 'Запоріжжя', "price": 216},

            {"name": 'Другое', "price": 176}
        ],
        [
            {"name": 'Київ', "price": 330},
            {"name": 'Бориспіль', "price": 330},
            {"name": 'Боярка', "price": 330},
            {"name": 'Бровари', "price": 330},
            {"name": 'Васильків', "price": 330},
            {"name": 'Вишневе', "price": 330},
            {"name": 'Ірпінь', "price": 330},

            {"name": 'Харків', "price": 264},
            {"name": 'Одесса', "price": 264},
            {"name": 'Донецьк', "price": 264},
            {"name": 'Дніпро', "price": 264},
            {"name": 'Запоріжжя', "price": 264},

            {"name": 'Другое', "price": 215}
        ]
    ];
    $scope.UsgListLimit = [
        [{"name": 'Другое', "price": 250}],
        [{"name": 'Другое', "price": 350}],
        [{"name": 'Другое', "price": 650}]
    ];
    $scope.PzuListLimit = [
        [{"name": 'Київ', "price": 160}, {"name": 'Другое', "price": 100}],
        [{"name": 'Київ', "price": 540}, {"name": 'Другое', "price": 300}],
        [{"name": 'Київ', "price": 880}, {"name": 'Другое', "price": 480}]
    ];
}])

    /*app.controller('TownListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
     /!*console.log('$location.url() - ', $location.url());
     console.log('$location.path() - ', $location.path());
     console.log('$location.search() - ', $location.search());
     console.log('$location.hash() - ', $location.hash());*!/

     $http.get('component/towns.json').success(function (data, status, headers, config) {
     $scope.towns = data;
     });

     $scope.setTown = function (name) {
     $scope.searchTown = name;
     }

     $scope.itemsList = [
     {name: 'Харків', index: 3.4},
     {name: 'Одеса', index: 3.4},

     {name: 'Дніпро/Дніпропетровськ', index: 2.8},
     {name: 'Донецьк', index: 2.8},
     {name: 'Запоріжжя', index: 2.8},
     {name: 'Львів', index: 2.8},
     {name: 'Кривий Ріг', index: 2.8},

     {name: 'Миколаїв', index: 2.2},
     {name: 'Маріуполь', index: 2.2},
     {name: 'Івано-Франківськ', index: 2.2},
     {name: 'Луганськ', index: 2.2},
     {name: 'Кременчук', index: 2.2},
     {name: 'Вінниця', index: 2.2},
     {name: 'Тернопіль', index: 2.2},
     {name: 'Макіївка', index: 2.2},
     {name: 'Луцьк', index: 2.2},
     {name: 'Севастополь', index: 2.2},
     {name: 'Біла Церква', index: 2.2},
     {name: 'Сімферополь', index: 2.2},
     {name: 'Краматорськ', index: 2.2},
     {name: 'Херсон', index: 2.2},
     {name: 'Полтава', index: 2.2},
     {name: 'Мелітополь', index: 2.2},
     {name: 'Полтава', index: 2.2},
     {name: 'Керч', index: 2.2},
     {name: 'Чернігів', index: 2.2},
     {name: 'Нікополь', index: 2.2},
     {name: 'Черкаси', index: 2.2},
     {name: 'Слов`янськ', index: 2.2},
     {name: 'Житомир', index: 2.2},
     {name: 'Ужгород', index: 2.2},
     {name: 'Суми', index: 2.2},
     {name: 'Бердянськ', index: 2.2},
     {name: 'Хмельницький', index: 2.2},
     {name: 'Алчевськ', index: 2.2},
     {name: 'Чернівці', index: 2.2},
     {name: 'Павлоград', index: 2.2},
     {name: 'Горлівка', index: 2.2},
     {name: 'Сєвєродонецьк', index: 2.2},
     {name: 'Рівне', index: 2.2},
     {name: 'Євпаторія', index: 2.2},
     {name: 'Кам`янське/Дніпродзержинськ', index: 2.2},
     {name: 'Лисичанськ', index: 2.2},
     {name: 'Кропивницький/Кіровоград', index: 2.2},
     {name: 'Кам`янецьк-Подільський', index: 2.2}
     ];
     }])*/

    /*
     * Объявляем директиву, которая будет создавать сам список
     */
    .directive('dropdownList', function ($timeout) {
        return {
            restrict: 'E',
            scope: {
                k2: '=',
                k4: '=',
                itemsList: '=',
                placeholder: '@'

            },
            template: '<input type="text" ng-model="search" placeholder="{{ placeholder }}" />' +
            '<div class="search-item-list"><ul class="list">' +
            '<li ng-repeat="item in itemsList | filter:search" ng-click="chooseItem( item );">{{ item.name }}' +
            '</li>' +
            '</ul></div>',
            link: function (scope, el, attr) {
                var $listContainer = angular.element(el[0].querySelectorAll('.search-item-list')[0]);
                el.find('input').bind('focus', function () {
                    $listContainer.addClass('show');
                });
                el.find('input').bind('blur', function () {
                    /*
                     * 'blur' реагирует быстрее чем ng-click,
                     * поэтому без $timeout chooseItem не успеет поймать item до того, как лист исчезнет
                     */
                    $timeout(function () {
                        $listContainer.removeClass('show')
                    }, 200);

                });

                scope.chooseItem = function (item) {
                    scope.search = item.name;
                    scope.k2 = item.index;
                    if (item.index == 1.5) {
                        scope.k4.b = 1.65;
                    } else if (item.index == 2.5) {
                        scope.k4.b = 1.56;
                    } else {
                        scope.k4.b = 1.5;
                    }
                    $listContainer.removeClass('show');
                }
            }
        }
    });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJuaWtpdGEvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignY2FsY3VsYXRvckNUUkwnLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICRzY29wZS5icCA9IDE4MDtcclxuICAgICRzY29wZS5rMSA9IDE7XHJcbiAgICAkc2NvcGUuazFiID0gdHJ1ZTtcclxuICAgICRzY29wZS5rMWJhc3MgPSBmYWxzZTtcclxuXHJcbiAgICAkc2NvcGUuazIgPSAwO1xyXG4gICAgJHNjb3BlLmszID0gMTtcclxuICAgICRzY29wZS5rNCA9IHthOiAxLjUsIGI6IDEuNX07XHJcbiAgICAkc2NvcGUuazUgPSAxO1xyXG4gICAgJHNjb3BlLms2ID0gMTtcclxuICAgICRzY29wZS5rQk0gPSAwLjg7XHJcbiAgICAkc2NvcGUua1AgPSAxO1xyXG5cclxuICAgICRzY29wZS55ZWFyID0gNTtcclxuICAgICRzY29wZS50eXBlQ2FyID0gMDtcclxuXHJcbiAgICAkc2NvcGUuQVhBZnJhbnNoaXphID0ge2Nvc3Q6IDEwMDAsIHNob3c6IHRydWV9O1xyXG4gICAgJHNjb3BlLlBaVWZyYW5zaGl6YSA9IDEwMDA7XHJcbiAgICAkc2NvcGUuVU5JS0FmcmFuc2hpemEgPSAxMDAwO1xyXG4gICAgJHNjb3BlLlVTR2ZyYW5zaGl6YSA9IDEwMDA7XHJcblxyXG4gICAgLypmcmFuc2hpemEqL1xyXG5cclxuICAgICRzY29wZS5jaG9pY2VBWEEgPSBmdW5jdGlvbiAoY2hvaWNlKSB7XHJcbiAgICAgICAgJHNjb3BlLkFYQWZyYW5zaGl6YSA9IGNob2ljZTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuY2hvaWNlUFpVZnJhbnNoaXphID0gZnVuY3Rpb24gKGNob2ljZSkge1xyXG4gICAgICAgICRzY29wZS5QWlVmcmFuc2hpemEgPSBjaG9pY2U7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmNob2ljZVVOSUtBZnJhbnNoaXphID0gZnVuY3Rpb24gKGNob2ljZSkge1xyXG4gICAgICAgICRzY29wZS5VTklLQWZyYW5zaGl6YSA9IGNob2ljZTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuY2hvaWNlVVNHZnJhbnNoaXphID0gZnVuY3Rpb24gKGNob2ljZSkge1xyXG4gICAgICAgICRzY29wZS5VU0dmcmFuc2hpemEgPSBjaG9pY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyprb2VmKi9cclxuICAgICRzY29wZS5jaG9pY2VrUCA9IGZ1bmN0aW9uIChoKSB7XHJcbiAgICAgICAgJHNjb3BlLmtQID0gaDtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuY2hvaWNla0JNID0gZnVuY3Rpb24gKEJNKSB7XHJcbiAgICAgICAgJHNjb3BlLmtCTSA9IEJNO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5jaG9pc2VZZWFyID0gZnVuY3Rpb24gKHllYXIpIHtcclxuICAgICAgICAkc2NvcGUueWVhciA9IHllYXI7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuY2hvaXNlSzEgPSBmdW5jdGlvbiAobnVtYmVyLCBiKSB7XHJcbiAgICAgICAgJHNjb3BlLmsxID0gbnVtYmVyO1xyXG4gICAgICAgICRzY29wZS5rMWIgPSBiO1xyXG4gICAgICAgIGlmIChiICE9IHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGlsZ2FfeHMnKS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB2YXIgY3VyRWxlbSA9IGEucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9tb3JlX2xhYmVsLmN1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgY3VyRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWxhYmVsJylcclxuICAgICAgICAgICAgdmFyIGIgPSBhLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fbW9yZV9sYWJlbCcpO1xyXG4gICAgICAgICAgICBiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgICRzY29wZS5jaG9pc2VLMUJ1c3MgPSBmdW5jdGlvbiAobnVtYmVyLCBiKSB7XHJcbiAgICAgICAgJHNjb3BlLmsxID0gbnVtYmVyO1xyXG4gICAgICAgICRzY29wZS5rMWJhc3MgPSBiO1xyXG4gICAgICAgIGlmIChiICE9IHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVzX3RheGlfeHMnKS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB2YXIgY3VyRWxlbSA9IGEucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9tb3JlX2xhYmVsLmN1cnJlbnQtbGFiZWwnKTtcclxuICAgICAgICAgICAgY3VyRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgIHZhciBiID0gYS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX21vcmVfbGFiZWwnKTtcclxuICAgICAgICAgICAgYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICRzY29wZS5rMyA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcbiAgICAkc2NvcGUuY2hvb3NlSzIgPSBmdW5jdGlvbiAobnVtYmVyKSB7XHJcbiAgICAgICAgJHNjb3BlLmsyID0gbnVtYmVyO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5jaG9pc2VLMyA9IGZ1bmN0aW9uIChudW1iZXIsIGIpIHtcclxuICAgICAgICAkc2NvcGUuazMgPSBudW1iZXI7XHJcbiAgICAgICAgJHNjb3BlLmtQID0gMTtcclxuICAgICAgICAkc2NvcGUuazFiID0gYjtcclxuICAgICAgICB2YXIgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaWxnYV94cycpLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGN1ckVsZW0gPSBhLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fbW9yZV9sYWJlbC5jdXJyZW50LWxhYmVsJyk7XHJcbiAgICAgICAgY3VyRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWxhYmVsJylcclxuICAgICAgICB2YXIgYiA9IGEucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9tb3JlX2xhYmVsJyk7XHJcbiAgICAgICAgYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWxhYmVsJyk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmNob2lzZVR5cGVDYXIgPSBmdW5jdGlvbiAobnVtYmVyKSB7XHJcbiAgICAgICAgJHNjb3BlLnR5cGVDYXIgPSBudW1iZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qZm9ybXVsYSBPU0NQViovXHJcblxyXG4gICAgJHNjb3BlLm9zY3B2ID0ge2FsbDogMCwgYXhhOiAwfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0T1NDUFYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLm9zY3B2LmFsbCA9ICRzY29wZS5icCAqICRzY29wZS5rMSAqICRzY29wZS5rMiAqICRzY29wZS5rMyAqICRzY29wZS5rNC5hICogJHNjb3BlLms1ICogJHNjb3BlLms2ICogJHNjb3BlLmtCTSAqICRzY29wZS5rUDtcclxuICAgICAgICAkc2NvcGUub3NjcHYuYWxsID0gJHNjb3BlLm9zY3B2LmFsbC50b0ZpeGVkKDIpO1xyXG4gICAgICAgICRzY29wZS5vc2Nwdi5heGEgPSAkc2NvcGUuYnAgKiAkc2NvcGUuazEgKiAkc2NvcGUuazIgKiAkc2NvcGUuazMgKiAkc2NvcGUuazQuYiAqICRzY29wZS5rNSAqICRzY29wZS5rNiAqICRzY29wZS5rQk0gKiAkc2NvcGUua1A7XHJcbiAgICAgICAgJHNjb3BlLm9zY3B2LmF4YSA9ICRzY29wZS5vc2Nwdi5heGEudG9GaXhlZCgyKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICgkc2NvcGUudHlwZUNhcikge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmszID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuQVhBZnJhbnNoaXphID0ge2Nvc3Q6IDAsIHNob3c6IHRydWV9O1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5QWlVmcmFuc2hpemEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5VTklLQWZyYW5zaGl6YSA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLlVTR2ZyYW5zaGl6YSA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5BWEFmcmFuc2hpemEgPSB7Y29zdDogMCwgc2hvdzogZmFsc2V9O1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5QWlVmcmFuc2hpemEgPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5VTklLQWZyYW5zaGl6YSA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLlVTR2ZyYW5zaGl6YSA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxLCAzLCA0OlxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLkFYQWZyYW5zaGl6YSA9IHtjb3N0OiAwLCBzaG93OiB0cnVlfTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5QWlVmcmFuc2hpemEgPSAwO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLlVOSUtBZnJhbnNoaXphID0gMTAwMDtcclxuICAgICAgICAgICAgICAgICRzY29wZS5VU0dmcmFuc2hpemEgPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuazMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5BWEFmcmFuc2hpemEgPSB7Y29zdDogMCwgc2hvdzogdHJ1ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLlBaVWZyYW5zaGl6YSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLlVOSUtBZnJhbnNoaXphID0gMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuVVNHZnJhbnNoaXphID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFYQWZyYW5zaGl6YSA9IHtjb3N0OiAwLCBzaG93OiBmYWxzZX07XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLlBaVWZyYW5zaGl6YSA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLlVOSUtBZnJhbnNoaXphID0gMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuVVNHZnJhbnNoaXphID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLml0ZW1zTGlzdCA9IFtcclxuICAgICAgICB7bmFtZTogJ9Ca0LjRl9CyJywgaW5kZXg6IDQuOH0sXHJcblxyXG4gICAgICAgIHtuYW1lOiAn0JHQvtGA0LjRgdC/0ZbQu9GMJywgaW5kZXg6IDIuNX0sXHJcbiAgICAgICAge25hbWU6ICfQkdC+0Y/RgNC60LAnLCBpbmRleDogMi41fSxcclxuICAgICAgICB7bmFtZTogJ9CR0YDQvtCy0LDRgNC4JywgaW5kZXg6IDIuNX0sXHJcbiAgICAgICAge25hbWU6ICfQktCw0YHQuNC70YzQutGW0LInLCBpbmRleDogMi41fSxcclxuICAgICAgICB7bmFtZTogJ9CS0LjRiNCz0L7RgNC+0LQnLCBpbmRleDogMi41fSxcclxuICAgICAgICB7bmFtZTogJ9CS0LjRiNC90LXQstC1JywgaW5kZXg6IDIuNX0sXHJcbiAgICAgICAge25hbWU6ICfQhtGA0L/RltC90YwnLCBpbmRleDogMi41fSxcclxuXHJcbiAgICAgICAge25hbWU6ICfQpdCw0YDQutGW0LInLCBpbmRleDogMy40fSxcclxuICAgICAgICB7bmFtZTogJ9Ce0LTQtdGB0LAnLCBpbmRleDogMy40fSxcclxuXHJcbiAgICAgICAge25hbWU6ICfQlNC90ZbQv9GA0L4v0JTQvdGW0L/RgNC+0L/QtdGC0YDQvtCy0YHRjNC6JywgaW5kZXg6IDIuOH0sXHJcbiAgICAgICAge25hbWU6ICfQlNC+0L3QtdGG0YzQuicsIGluZGV4OiAyLjh9LFxyXG4gICAgICAgIHtuYW1lOiAn0JfQsNC/0L7RgNGW0LbQttGPJywgaW5kZXg6IDIuOH0sXHJcbiAgICAgICAge25hbWU6ICfQm9GM0LLRltCyJywgaW5kZXg6IDIuOH0sXHJcbiAgICAgICAge25hbWU6ICfQmtGA0LjQstC40Lkg0KDRltCzJywgaW5kZXg6IDIuOH0sXHJcblxyXG4gICAgICAgIHtuYW1lOiAn0JzQuNC60L7Qu9Cw0ZfQsicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JzQsNGA0ZbRg9C/0L7Qu9GMJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQhtCy0LDQvdC+LdCk0YDQsNC90LrRltCy0YHRjNC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQm9GD0LPQsNC90YHRjNC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQmtGA0LXQvNC10L3Rh9GD0LonLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CS0ZbQvdC90LjRhtGPJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQotC10YDQvdC+0L/RltC70YwnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9Cc0LDQutGW0ZfQstC60LAnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9Cb0YPRhtGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9Ch0LXQstCw0YHRgtC+0L/QvtC70YwnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0ZbQu9CwINCm0LXRgNC60LLQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0KHRltC80YTQtdGA0L7Qv9C+0LvRjCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JrRgNCw0LzQsNGC0L7RgNGB0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0KXQtdGA0YHQvtC9JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQn9C+0LvRgtCw0LLQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JzQtdC70ZbRgtC+0L/QvtC70YwnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9Cf0L7Qu9GC0LDQstCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQmtC10YDRhycsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0KfQtdGA0L3RltCz0ZbQsicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0J3RltC60L7Qv9C+0LvRjCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0KfQtdGA0LrQsNGB0LgnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9Ch0LvQvtCyYNGP0L3RgdGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CW0LjRgtC+0LzQuNGAJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQo9C20LPQvtGA0L7QtCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0KHRg9C80LgnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LXRgNC00Y/QvdGB0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0KXQvNC10LvRjNC90LjRhtGM0LrQuNC5JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkNC70YfQtdCy0YHRjNC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQp9C10YDQvdGW0LLRhtGWJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQn9Cw0LLQu9C+0LPRgNCw0LQnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CT0L7RgNC70ZbQstC60LAnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9Ch0ZTQstGU0YDQvtC00L7QvdC10YbRjNC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQoNGW0LLQvdC1JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQhNCy0L/QsNGC0L7RgNGW0Y8nLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9Ca0LDQvGDRj9C90YHRjNC60LUv0JTQvdGW0L/RgNC+0LTQt9C10YDQttC40L3RgdGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9Cb0LjRgdC40YfQsNC90YHRjNC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQmtGA0L7Qv9C40LLQvdC40YbRjNC60LjQuS/QmtGW0YDQvtCy0L7Qs9GA0LDQtCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JrQsNC8YNGP0L3QtdGG0YzQui3Qn9C+0LTRltC70YzRgdGM0LrQuNC5JywgaW5kZXg6IDIuMn0sXHJcblxyXG5cclxuICAgICAgICB7bmFtZTogJ9CQ0LLQtNGW0ZfQstC60LAnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CQ0LvRg9C/0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JDQu9GD0YjRgtCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkNC80LLRgNC+0YHRltGX0LLQutCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkNC90LTRgNGD0YjRltCy0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JDQvdGC0YDQsNGG0LjRgicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JDQv9C+0YHRgtC+0LvQvtCy0LUnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CQ0L/QvtGB0YLQvtC70L7QstC1JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkNGA0LzRj9C90YHRjNC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkNGA0YbQuNC3JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdCw0LvQsNC60LvRltGPJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdCw0LvQsNC60LvRltGPJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdCw0LvRgtCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdCw0YAnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LDRgNCw0L3RltCy0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHQsNGA0LLRltC90LrQvtCy0LUnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LDRgNC40YjRltCy0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHQsNGF0LzQsNGHJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdCw0YXQvNGD0YIv0JDRgNGC0LXQvNGW0LLRgdGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LDRiNGC0LDQvdC60LAnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LXRgNC00LjRh9GW0LInLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LXRgNC10LPQvtCy0LUnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LXRgNC10LbQsNC90LgnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LXRgNC10LfQsNC90YwnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LXRgNC10LfRltCy0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHQtdGA0LXQt9C90LUnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LXRgNC40YHQu9Cw0LInLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0LXRgNGI0LDQtNGMJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdGW0LvQs9C+0YDQvtC0LdCU0L3RltGB0YLRgNC+0LLRgdGM0LrQuNC5JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdGW0LvQuNGG0YzQutC1JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdGW0LvQvtCz0ZbRgNGB0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHRltC70L7Qt9C10YDRgdGM0LrQtScsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHRltC70Y/Rl9Cy0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHQvtCx0YDQuNC90LXRhtGMJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdC+0LHRgNC+0LLQuNGG0Y8nLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0L7Qs9C+0LTRg9GF0ZbQsicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHQvtCz0YPRgdC70LDQsicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHQvtC70LPRgNCw0LQnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0L7RgNC30L3QsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHQvtGA0LjRgdC70LDQsicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHQvtGA0L7QtNGP0L3QutCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdC+0YDRidGW0LInLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0YDQvtC00LgnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0YDRj9C90LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHRg9GA0LjQvdGMJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQkdGD0YDRiNGC0LjQvScsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JHRg9GC0LXQvdC60LgnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CR0YPRh9Cw0YcnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CS0LDQu9C60LgnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CS0LDRgdC40LvRltCy0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JLQsNGC0YPRgtGW0L3QtScsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JLQsNGF0YDRg9GI0LXQstC1JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQktC10LvQuNC60LAg0J7Qu9C10LrRgdCw0L3QtNGA0ZbQstC60LAnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CS0LjQttC90LjRhtGPJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQktC40LvQutC+0LLQtScsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JLQuNC90LDRgNGW0LLQutCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQktC40L3QvtCz0YDQsNC00ZbQsicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JLQuNGB0L7QutC40LknLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CS0ZbQu9GM0L3Rj9C90YHRjNC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQktGW0LvRjNGI0LDQvdC60LAnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CS0L7QstGH0LDQvdGB0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JLQvtC30L3QtdGB0LXQvdGB0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JLQvtC70L3QvtCy0LDRhdCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQktC+0LvQvtC00LDRgNGB0YzQutC1JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQktC+0LvQvtC00LjQvNC40YAt0JLQvtC70LjQvdGB0YzQutC40LknLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CS0L7Qu9C+0LTQuNC80LjRgNC10YbRjCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JLRg9Cz0LvQtdCz0ZbRgNGB0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JLRg9Cz0LvQtdC00LDRgCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JPQsNC00Y/RhycsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JPQsNC50LLQvtGA0L7QvScsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JPQsNC50YHQuNC9JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQk9Cw0LnRiNC40L0nLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CT0LXQvdGW0YfQtdGB0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JPRltGA0YHRjNC60LUnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CT0LvQuNCx0L7QutCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQk9C70L7QsdC40L3QtScsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JPQu9GD0YXRltCyJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQk9C90ZbQstCw0L3RjCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JPQvtC70LAg0J/RgNC40YHRgtCw0L3RjCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JPQvtGA0L3QvtGB0YLQsNGX0LLQutCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQk9C+0YDQvtC00LXQvdC60LAnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CT0L7RgNC+0LTQuNGJ0LUnLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CT0L7RgNC+0LTQvtC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQk9C+0YDQvtGF0ZbQsicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JPRgNC10LHRltC90LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JPRg9C70Y/QudC/0L7Qu9C1JywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQlNC10LHQsNC70YzRhtC10LLQtScsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JTQtdGA0LDQttC90Y8nLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CU0LXRgNCz0LDRh9GWJywgaW5kZXg6IDIuMn0sXHJcbiAgICAgICAge25hbWU6ICfQlNC20LDQvdC60L7QuScsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JTQuNC60LDQvdGM0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JTQuNC80LjRgtGA0L7QsicsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JTQvdGW0L/RgNC+0YDRg9C00L3QtScsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JTQvtCx0YDQvtC/0ZbQu9C70Y8nLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CU0L7QutGD0YfQsNGU0LLRgdGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICAgICB7bmFtZTogJ9CU0L7Qu9C40L3QsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgICAgIHtuYW1lOiAn0JTQvtC70LjQvdGB0YzQutCwJywgaW5kZXg6IDIuMn0sXHJcblxyXG5cclxuICAgIF07XHJcblxyXG4gICAgJHNjb3BlLkF4YUxpc3RMaW1pdCA9IFtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9Ca0LjRl9CyJywgXCJwcmljZVwiOiAyNDV9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQkdC+0YDQuNGB0L/RltC70YwnLCBcInByaWNlXCI6IDI0NX0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CR0L7Rj9GA0LrQsCcsIFwicHJpY2VcIjogMjQ1fSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JHQvtGA0L7QtNGP0L3QutCwJywgXCJwcmljZVwiOiAyNDV9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQkdGA0L7QstCw0YDQuCcsIFwicHJpY2VcIjogMjQ1fSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JLQsNGB0LjQu9GM0LrRltCyJywgXCJwcmljZVwiOiAyNDV9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQktC40YjQvdC10LLQtScsIFwicHJpY2VcIjogMjQ1fSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0J7QsdGD0YXRltCyJywgXCJwcmljZVwiOiAyNDV9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQlNGA0YPQs9C+0LUnLCBcInByaWNlXCI6IDIxNX1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JrQuNGX0LInLCBcInByaWNlXCI6IDI5MH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CR0L7RgNC40YHQv9GW0LvRjCcsIFwicHJpY2VcIjogMjkwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JHQvtGP0YDQutCwJywgXCJwcmljZVwiOiAyOTB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQkdC+0YDQvtC00Y/QvdC60LAnLCBcInByaWNlXCI6IDI5MH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CR0YDQvtCy0LDRgNC4JywgXCJwcmljZVwiOiAyOTB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQktCw0YHQuNC70YzQutGW0LInLCBcInByaWNlXCI6IDI5MH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CS0LjRiNC90LXQstC1JywgXCJwcmljZVwiOiAyOTB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQntCx0YPRhdGW0LInLCBcInByaWNlXCI6IDI5MH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CU0YDRg9Cz0L7QtScsIFwicHJpY2VcIjogMjYwfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQmtC40ZfQsicsIFwicHJpY2VcIjogNDEwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JHQvtGA0LjRgdC/0ZbQu9GMJywgXCJwcmljZVwiOiA0MTB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQkdC+0Y/RgNC60LAnLCBcInByaWNlXCI6IDQxMH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CR0L7RgNC+0LTRj9C90LrQsCcsIFwicHJpY2VcIjogNDEwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JHRgNC+0LLQsNGA0LgnLCBcInByaWNlXCI6IDQxMH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CS0LDRgdC40LvRjNC60ZbQsicsIFwicHJpY2VcIjogNDEwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JLQuNGI0L3QtdCy0LUnLCBcInByaWNlXCI6IDQxMH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9Ce0LHRg9GF0ZbQsicsIFwicHJpY2VcIjogNDEwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JTRgNGD0LPQvtC1JywgXCJwcmljZVwiOiAzNzB9XHJcbiAgICAgICAgXVxyXG4gICAgXTtcclxuICAgICRzY29wZS5VbmljYUxpc3RMaW1pdCA9IFtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9Ca0LjRl9CyJywgXCJwcmljZVwiOiAxNjV9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQkdC+0YDQuNGB0L/RltC70YwnLCBcInByaWNlXCI6IDE2NX0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CR0L7Rj9GA0LrQsCcsIFwicHJpY2VcIjogMTY1fSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JHRgNC+0LLQsNGA0LgnLCBcInByaWNlXCI6IDE2NX0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CS0LDRgdC40LvRjNC60ZbQsicsIFwicHJpY2VcIjogMTY1fSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JLQuNGI0L3QtdCy0LUnLCBcInByaWNlXCI6IDE2NX0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CG0YDQv9GW0L3RjCcsIFwicHJpY2VcIjogMTY1fSxcclxuXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9Cl0LDRgNC60ZbQsicsIFwicHJpY2VcIjogMTMyfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0J7QtNC10YHRgdCwJywgXCJwcmljZVwiOiAxMzJ9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQlNC+0L3QtdGG0YzQuicsIFwicHJpY2VcIjogMTMyfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JTQvdGW0L/RgNC+JywgXCJwcmljZVwiOiAxMzJ9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQl9Cw0L/QvtGA0ZbQttC20Y8nLCBcInByaWNlXCI6IDEzMn0sXHJcblxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQlNGA0YPQs9C+0LUnLCBcInByaWNlXCI6IDEwN31cclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JrQuNGX0LInLCBcInByaWNlXCI6IDI3MH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CR0L7RgNC40YHQv9GW0LvRjCcsIFwicHJpY2VcIjogMjcwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JHQvtGP0YDQutCwJywgXCJwcmljZVwiOiAyNzB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQkdGA0L7QstCw0YDQuCcsIFwicHJpY2VcIjogMjcwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JLQsNGB0LjQu9GM0LrRltCyJywgXCJwcmljZVwiOiAyNzB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQktC40YjQvdC10LLQtScsIFwicHJpY2VcIjogMjcwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0IbRgNC/0ZbQvdGMJywgXCJwcmljZVwiOiAyNzB9LFxyXG5cclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0KXQsNGA0LrRltCyJywgXCJwcmljZVwiOiAyMTZ9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQntC00LXRgdGB0LAnLCBcInByaWNlXCI6IDIxNn0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CU0L7QvdC10YbRjNC6JywgXCJwcmljZVwiOiAyMTZ9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQlNC90ZbQv9GA0L4nLCBcInByaWNlXCI6IDIxNn0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CX0LDQv9C+0YDRltC20LbRjycsIFwicHJpY2VcIjogMjE2fSxcclxuXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CU0YDRg9Cz0L7QtScsIFwicHJpY2VcIjogMTc2fVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQmtC40ZfQsicsIFwicHJpY2VcIjogMzMwfSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JHQvtGA0LjRgdC/0ZbQu9GMJywgXCJwcmljZVwiOiAzMzB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQkdC+0Y/RgNC60LAnLCBcInByaWNlXCI6IDMzMH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CR0YDQvtCy0LDRgNC4JywgXCJwcmljZVwiOiAzMzB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQktCw0YHQuNC70YzQutGW0LInLCBcInByaWNlXCI6IDMzMH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CS0LjRiNC90LXQstC1JywgXCJwcmljZVwiOiAzMzB9LFxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQhtGA0L/RltC90YwnLCBcInByaWNlXCI6IDMzMH0sXHJcblxyXG4gICAgICAgICAgICB7XCJuYW1lXCI6ICfQpdCw0YDQutGW0LInLCBcInByaWNlXCI6IDI2NH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9Ce0LTQtdGB0YHQsCcsIFwicHJpY2VcIjogMjY0fSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JTQvtC90LXRhtGM0LonLCBcInByaWNlXCI6IDI2NH0sXHJcbiAgICAgICAgICAgIHtcIm5hbWVcIjogJ9CU0L3RltC/0YDQvicsIFwicHJpY2VcIjogMjY0fSxcclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JfQsNC/0L7RgNGW0LbQttGPJywgXCJwcmljZVwiOiAyNjR9LFxyXG5cclxuICAgICAgICAgICAge1wibmFtZVwiOiAn0JTRgNGD0LPQvtC1JywgXCJwcmljZVwiOiAyMTV9XHJcbiAgICAgICAgXVxyXG4gICAgXTtcclxuICAgICRzY29wZS5Vc2dMaXN0TGltaXQgPSBbXHJcbiAgICAgICAgW3tcIm5hbWVcIjogJ9CU0YDRg9Cz0L7QtScsIFwicHJpY2VcIjogMjUwfV0sXHJcbiAgICAgICAgW3tcIm5hbWVcIjogJ9CU0YDRg9Cz0L7QtScsIFwicHJpY2VcIjogMzUwfV0sXHJcbiAgICAgICAgW3tcIm5hbWVcIjogJ9CU0YDRg9Cz0L7QtScsIFwicHJpY2VcIjogNjUwfV1cclxuICAgIF07XHJcbiAgICAkc2NvcGUuUHp1TGlzdExpbWl0ID0gW1xyXG4gICAgICAgIFt7XCJuYW1lXCI6ICfQmtC40ZfQsicsIFwicHJpY2VcIjogMTYwfSwge1wibmFtZVwiOiAn0JTRgNGD0LPQvtC1JywgXCJwcmljZVwiOiAxMDB9XSxcclxuICAgICAgICBbe1wibmFtZVwiOiAn0JrQuNGX0LInLCBcInByaWNlXCI6IDU0MH0sIHtcIm5hbWVcIjogJ9CU0YDRg9Cz0L7QtScsIFwicHJpY2VcIjogMzAwfV0sXHJcbiAgICAgICAgW3tcIm5hbWVcIjogJ9Ca0LjRl9CyJywgXCJwcmljZVwiOiA4ODB9LCB7XCJuYW1lXCI6ICfQlNGA0YPQs9C+0LUnLCBcInByaWNlXCI6IDQ4MH1dXHJcbiAgICBdO1xyXG59XSlcclxuXHJcbiAgICAvKmFwcC5jb250cm9sbGVyKCdUb3duTGlzdEN0cmwnLCBbJyRzY29wZScsICckaHR0cCcsICckbG9jYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJGxvY2F0aW9uKSB7XHJcbiAgICAgLyEqY29uc29sZS5sb2coJyRsb2NhdGlvbi51cmwoKSAtICcsICRsb2NhdGlvbi51cmwoKSk7XHJcbiAgICAgY29uc29sZS5sb2coJyRsb2NhdGlvbi5wYXRoKCkgLSAnLCAkbG9jYXRpb24ucGF0aCgpKTtcclxuICAgICBjb25zb2xlLmxvZygnJGxvY2F0aW9uLnNlYXJjaCgpIC0gJywgJGxvY2F0aW9uLnNlYXJjaCgpKTtcclxuICAgICBjb25zb2xlLmxvZygnJGxvY2F0aW9uLmhhc2goKSAtICcsICRsb2NhdGlvbi5oYXNoKCkpOyohL1xyXG5cclxuICAgICAkaHR0cC5nZXQoJ2NvbXBvbmVudC90b3ducy5qc29uJykuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcclxuICAgICAkc2NvcGUudG93bnMgPSBkYXRhO1xyXG4gICAgIH0pO1xyXG5cclxuICAgICAkc2NvcGUuc2V0VG93biA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgJHNjb3BlLnNlYXJjaFRvd24gPSBuYW1lO1xyXG4gICAgIH1cclxuXHJcbiAgICAgJHNjb3BlLml0ZW1zTGlzdCA9IFtcclxuICAgICB7bmFtZTogJ9Cl0LDRgNC60ZbQsicsIGluZGV4OiAzLjR9LFxyXG4gICAgIHtuYW1lOiAn0J7QtNC10YHQsCcsIGluZGV4OiAzLjR9LFxyXG5cclxuICAgICB7bmFtZTogJ9CU0L3RltC/0YDQvi/QlNC90ZbQv9GA0L7Qv9C10YLRgNC+0LLRgdGM0LonLCBpbmRleDogMi44fSxcclxuICAgICB7bmFtZTogJ9CU0L7QvdC10YbRjNC6JywgaW5kZXg6IDIuOH0sXHJcbiAgICAge25hbWU6ICfQl9Cw0L/QvtGA0ZbQttC20Y8nLCBpbmRleDogMi44fSxcclxuICAgICB7bmFtZTogJ9Cb0YzQstGW0LInLCBpbmRleDogMi44fSxcclxuICAgICB7bmFtZTogJ9Ca0YDQuNCy0LjQuSDQoNGW0LMnLCBpbmRleDogMi44fSxcclxuXHJcbiAgICAge25hbWU6ICfQnNC40LrQvtC70LDRl9CyJywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQnNCw0YDRltGD0L/QvtC70YwnLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9CG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Cb0YPQs9Cw0L3RgdGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Ca0YDQtdC80LXQvdGH0YPQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0JLRltC90L3QuNGG0Y8nLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Ci0LXRgNC90L7Qv9GW0LvRjCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0JzQsNC60ZbRl9Cy0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0JvRg9GG0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0KHQtdCy0LDRgdGC0L7Qv9C+0LvRjCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0JHRltC70LAg0KbQtdGA0LrQstCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQodGW0LzRhNC10YDQvtC/0L7Qu9GMJywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQmtGA0LDQvNCw0YLQvtGA0YHRjNC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQpdC10YDRgdC+0L0nLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Cf0L7Qu9GC0LDQstCwJywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQnNC10LvRltGC0L7Qv9C+0LvRjCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0J/QvtC70YLQsNCy0LAnLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Ca0LXRgNGHJywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQp9C10YDQvdGW0LPRltCyJywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQndGW0LrQvtC/0L7Qu9GMJywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQp9C10YDQutCw0YHQuCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0KHQu9C+0LJg0Y/QvdGB0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0JbQuNGC0L7QvNC40YAnLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Cj0LbQs9C+0YDQvtC0JywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQodGD0LzQuCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0JHQtdGA0LTRj9C90YHRjNC6JywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQpdC80LXQu9GM0L3QuNGG0YzQutC40LknLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9CQ0LvRh9C10LLRgdGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Cn0LXRgNC90ZbQstGG0ZYnLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Cf0LDQstC70L7Qs9GA0LDQtCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0JPQvtGA0LvRltCy0LrQsCcsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0KHRlNCy0ZTRgNC+0LTQvtC90LXRhtGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Cg0ZbQstC90LUnLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9CE0LLQv9Cw0YLQvtGA0ZbRjycsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0JrQsNC8YNGP0L3RgdGM0LrQtS/QlNC90ZbQv9GA0L7QtNC30LXRgNC20LjQvdGB0YzQuicsIGluZGV4OiAyLjJ9LFxyXG4gICAgIHtuYW1lOiAn0JvQuNGB0LjRh9Cw0L3RgdGM0LonLCBpbmRleDogMi4yfSxcclxuICAgICB7bmFtZTogJ9Ca0YDQvtC/0LjQstC90LjRhtGM0LrQuNC5L9Ca0ZbRgNC+0LLQvtCz0YDQsNC0JywgaW5kZXg6IDIuMn0sXHJcbiAgICAge25hbWU6ICfQmtCw0Lxg0Y/QvdC10YbRjNC6LdCf0L7QtNGW0LvRjNGB0YzQutC40LknLCBpbmRleDogMi4yfVxyXG4gICAgIF07XHJcbiAgICAgfV0pKi9cclxuXHJcbiAgICAvKlxyXG4gICAgICog0J7QsdGK0Y/QstC70Y/QtdC8INC00LjRgNC10LrRgtC40LLRgywg0LrQvtGC0L7RgNCw0Y8g0LHRg9C00LXRgiDRgdC+0LfQtNCw0LLQsNGC0Ywg0YHQsNC8INGB0L/QuNGB0L7QulxyXG4gICAgICovXHJcbiAgICAuZGlyZWN0aXZlKCdkcm9wZG93bkxpc3QnLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgazI6ICc9JyxcclxuICAgICAgICAgICAgICAgIGs0OiAnPScsXHJcbiAgICAgICAgICAgICAgICBpdGVtc0xpc3Q6ICc9JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQCdcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCIgLz4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzZWFyY2gtaXRlbS1saXN0XCI+PHVsIGNsYXNzPVwibGlzdFwiPicgK1xyXG4gICAgICAgICAgICAnPGxpIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNMaXN0IHwgZmlsdGVyOnNlYXJjaFwiIG5nLWNsaWNrPVwiY2hvb3NlSXRlbSggaXRlbSApO1wiPnt7IGl0ZW0ubmFtZSB9fScgK1xyXG4gICAgICAgICAgICAnPC9saT4nICtcclxuICAgICAgICAgICAgJzwvdWw+PC9kaXY+JyxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAgICAgICAgICAgdmFyICRsaXN0Q29udGFpbmVyID0gYW5ndWxhci5lbGVtZW50KGVsWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtaXRlbS1saXN0JylbMF0pO1xyXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnaW5wdXQnKS5iaW5kKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGlzdENvbnRhaW5lci5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbC5maW5kKCdpbnB1dCcpLmJpbmQoJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgKiAnYmx1cicg0YDQtdCw0LPQuNGA0YPQtdGCINCx0YvRgdGC0YDQtdC1INGH0LXQvCBuZy1jbGljayxcclxuICAgICAgICAgICAgICAgICAgICAgKiDQv9C+0Y3RgtC+0LzRgyDQsdC10LcgJHRpbWVvdXQgY2hvb3NlSXRlbSDQvdC1INGD0YHQv9C10LXRgiDQv9C+0LnQvNCw0YLRjCBpdGVtINC00L4g0YLQvtCz0L4sINC60LDQuiDQu9C40YHRgiDQuNGB0YfQtdC30L3QtdGCXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbGlzdENvbnRhaW5lci5yZW1vdmVDbGFzcygnc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5jaG9vc2VJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5zZWFyY2ggPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuazIgPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmluZGV4ID09IDEuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5rNC5iID0gMS42NTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaW5kZXggPT0gMi41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLms0LmIgPSAxLjU2O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLms0LmIgPSAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRsaXN0Q29udGFpbmVyLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTsiXSwiZmlsZSI6Im5pa2l0YS9hcHAuanMifQ==
