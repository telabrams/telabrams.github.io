

var testApp = angular.module('testApp',['angular-toArrayFilter']);

testApp.controller('userController', function ($scope, $http){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            $scope.$apply(function(){
                $scope.position = position;
                console.log(position);
            });
        });
    }

    $scope.end = false;

    // Получение JSON

    $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(function (data){

        $scope.users = data.data;

        $scope.checkUsername = function(model) {
            console.log(model);
            $scope.id = 0;
            $scope.users.forEach(function() {
                $scope.reserved = angular.equals(model.toLowerCase(), $scope.users[$scope.id].username.toLowerCase());

                if ($scope.reserved == true) {
                    return $scope.reserved;
                }
                $scope.id++;
            });

            return $scope.reserved;
        };

        $scope.checkCompanyName = function(model) {
            console.log(model);
            $scope.id = 0;
            $scope.users.forEach(function() {
                $scope.reservedCompany = angular.equals(model.toLowerCase(), $scope.users[$scope.id].company.name.toLowerCase());

                if ($scope.reservedCompany == true) {
                    return $scope.reservedCompany;
                }
                $scope.id++;
            });

            return $scope.reservedCompany;
        };

        $scope.checkEmail = function(model) {
            console.log(model);
            $scope.id = 0;
            $scope.users.forEach(function() {
                console.log($scope.users[$scope.id].email.toLowerCase());
                $scope.reservedEmail = angular.equals(model.toLowerCase(), $scope.users[$scope.id].email.toLowerCase());

                if ($scope.reservedEmail == true) {
                    return $scope.reservedEmail;
                }
                $scope.id++;
            });

            return $scope.reservedEmail;
        };
        
        },function (error){
            console.log('error');
        });

    $scope.load = function(elem) {
        if (elem == $scope.users.length-1) {
            $scope.end = true;
            $scope.pop = angular.element(document.querySelector('.overLoad'));

        }

    };



    // Сортировка

    $scope.sortType = 'name';
    $scope.sortReverse = false;

    // Копирование email в буффер обмена

    $scope.copy = function(id) {

        console.log(id);

        var emailLink = document.getElementById('mail_'+id);
        console.log(emailLink);
        var range = document.createRange();
        range.selectNode(emailLink);
        window.getSelection().addRange(range);

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy email command was ' + msg);
        } catch(err) {
            console.log('Oops, unable to copy');
        }

        window.getSelection().removeAllRanges();
    };

    // Расчет расстояния до

    $scope.range = function(y_lat, y_lng, u_lat, u_lng) {

        $scope.pi = Math.PI;
        $scope.rad = 6372795;
        $scope.lat1 = parseFloat(u_lat);
        $scope.lat2 = y_lat;
        $scope.long1 = parseFloat(u_lng);
        $scope.long2 = y_lng;


        // Координаты в радианах

        $scope.rad_lat1 = $scope.lat1*$scope.pi/180;
        $scope.rad_lat2 = $scope.lat2*$scope.pi/180;
        $scope.rad_long1 = $scope.long1*$scope.pi/180;
        $scope.rad_long2 = $scope.long2*$scope.pi/180;

        // Косинусы и синусы широт и разницы долгот

        $scope.c_lat1 = Math.cos($scope.rad_lat1);
        $scope.c_lat2 = Math.cos($scope.rad_lat2);
        $scope.s_lat1 = Math.sin($scope.rad_lat1);
        $scope.s_lat2 = Math.sin($scope.rad_lat2);
        $scope.delta = $scope.rad_long2 - $scope.rad_long1;
        $scope.cdelta = Math.cos($scope.delta);
        $scope.sdelta = Math.sin($scope.delta);

        // Bычисления длины большого круга

        $scope.y = Math.sqrt(Math.pow($scope.c_lat2*$scope.sdelta,2)+Math.pow($scope.c_lat1*$scope.s_lat2-$scope.s_lat1*$scope.c_lat2*$scope.cdelta,2));
        $scope.x = $scope.s_lat1*$scope.s_lat2+$scope.c_lat1*$scope.c_lat2*$scope.cdelta;
        $scope.ad = Math.atan2($scope.y,$scope.x);
        $scope.dist = $scope.ad*$scope.rad;
        $scope.dist = $scope.dist/1000;
        $scope.dist = $scope.dist.toFixed(2);

        return $scope.dist;
    };

    // New user

    $scope.add = function(newUser ,userForm) {

        if(userForm.$valid){
            $scope.newUser.id = $scope.users.length + 1;
            console.log(newUser);
            $scope.users.push($scope.newUser);
            $scope.newUser = null;
        }

    };

    $scope.popupCheck = false;

    $scope.websiteTemplate = /^[-\w.]+([A-z0-9][-A-z0-9]+\.)+[A-z0-9]{2,10}$/;
    $scope.phoneTemplate = /\(?[0-9\)?\-?\.?]+\s?\x?[0-9]+$/;

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbmd1bGFyU2NyaXB0XzEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG52YXIgdGVzdEFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0ZXN0QXBwJyxbJ2FuZ3VsYXItdG9BcnJheUZpbHRlciddKTtcclxuXHJcbnRlc3RBcHAuY29udHJvbGxlcigndXNlckNvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCl7XHJcblxyXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zaXRpb24pe1xyXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmVuZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vINCf0L7Qu9GD0YfQtdC90LjQtSBKU09OXHJcblxyXG4gICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSl7XHJcblxyXG4gICAgICAgICRzY29wZS51c2VycyA9IGRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmNoZWNrVXNlcm5hbWUgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb2RlbCk7XHJcbiAgICAgICAgICAgICRzY29wZS5pZCA9IDA7XHJcbiAgICAgICAgICAgICRzY29wZS51c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlc2VydmVkID0gYW5ndWxhci5lcXVhbHMobW9kZWwudG9Mb3dlckNhc2UoKSwgJHNjb3BlLnVzZXJzWyRzY29wZS5pZF0udXNlcm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXNlcnZlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5yZXNlcnZlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5pZCsrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUucmVzZXJ2ZWQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmNoZWNrQ29tcGFueU5hbWUgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb2RlbCk7XHJcbiAgICAgICAgICAgICRzY29wZS5pZCA9IDA7XHJcbiAgICAgICAgICAgICRzY29wZS51c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlc2VydmVkQ29tcGFueSA9IGFuZ3VsYXIuZXF1YWxzKG1vZGVsLnRvTG93ZXJDYXNlKCksICRzY29wZS51c2Vyc1skc2NvcGUuaWRdLmNvbXBhbnkubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnJlc2VydmVkQ29tcGFueSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5yZXNlcnZlZENvbXBhbnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaWQrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLnJlc2VydmVkQ29tcGFueTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUuY2hlY2tFbWFpbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcclxuICAgICAgICAgICAgJHNjb3BlLmlkID0gMDtcclxuICAgICAgICAgICAgJHNjb3BlLnVzZXJzLmZvckVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUudXNlcnNbJHNjb3BlLmlkXS5lbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5yZXNlcnZlZEVtYWlsID0gYW5ndWxhci5lcXVhbHMobW9kZWwudG9Mb3dlckNhc2UoKSwgJHNjb3BlLnVzZXJzWyRzY29wZS5pZF0uZW1haWwudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXNlcnZlZEVtYWlsID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnJlc2VydmVkRW1haWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaWQrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLnJlc2VydmVkRW1haWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB9LGZ1bmN0aW9uIChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5sb2FkID0gZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICAgIGlmIChlbGVtID09ICRzY29wZS51c2Vycy5sZW5ndGgtMSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgJHNjb3BlLnBvcCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlckxvYWQnKSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8g0KHQvtGA0YLQuNGA0L7QstC60LBcclxuXHJcbiAgICAkc2NvcGUuc29ydFR5cGUgPSAnbmFtZSc7XHJcbiAgICAkc2NvcGUuc29ydFJldmVyc2UgPSBmYWxzZTtcclxuXHJcbiAgICAvLyDQmtC+0L/QuNGA0L7QstCw0L3QuNC1IGVtYWlsINCyINCx0YPRhNGE0LXRgCDQvtCx0LzQtdC90LBcclxuXHJcbiAgICAkc2NvcGUuY29weSA9IGZ1bmN0aW9uKGlkKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuXHJcbiAgICAgICAgdmFyIGVtYWlsTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsXycraWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsTGluayk7XHJcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlKGVtYWlsTGluayk7XHJcbiAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgICAgICB2YXIgbXNnID0gc3VjY2Vzc2Z1bCA/ICdzdWNjZXNzZnVsJyA6ICd1bnN1Y2Nlc3NmdWwnO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29weSBlbWFpbCBjb21tYW5kIHdhcyAnICsgbXNnKTtcclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT29wcywgdW5hYmxlIHRvIGNvcHknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g0KDQsNGB0YfQtdGCINGA0LDRgdGB0YLQvtGP0L3QuNGPINC00L5cclxuXHJcbiAgICAkc2NvcGUucmFuZ2UgPSBmdW5jdGlvbih5X2xhdCwgeV9sbmcsIHVfbGF0LCB1X2xuZykge1xyXG5cclxuICAgICAgICAkc2NvcGUucGkgPSBNYXRoLlBJO1xyXG4gICAgICAgICRzY29wZS5yYWQgPSA2MzcyNzk1O1xyXG4gICAgICAgICRzY29wZS5sYXQxID0gcGFyc2VGbG9hdCh1X2xhdCk7XHJcbiAgICAgICAgJHNjb3BlLmxhdDIgPSB5X2xhdDtcclxuICAgICAgICAkc2NvcGUubG9uZzEgPSBwYXJzZUZsb2F0KHVfbG5nKTtcclxuICAgICAgICAkc2NvcGUubG9uZzIgPSB5X2xuZztcclxuXHJcblxyXG4gICAgICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtGLINCyINGA0LDQtNC40LDQvdCw0YVcclxuXHJcbiAgICAgICAgJHNjb3BlLnJhZF9sYXQxID0gJHNjb3BlLmxhdDEqJHNjb3BlLnBpLzE4MDtcclxuICAgICAgICAkc2NvcGUucmFkX2xhdDIgPSAkc2NvcGUubGF0Miokc2NvcGUucGkvMTgwO1xyXG4gICAgICAgICRzY29wZS5yYWRfbG9uZzEgPSAkc2NvcGUubG9uZzEqJHNjb3BlLnBpLzE4MDtcclxuICAgICAgICAkc2NvcGUucmFkX2xvbmcyID0gJHNjb3BlLmxvbmcyKiRzY29wZS5waS8xODA7XHJcblxyXG4gICAgICAgIC8vINCa0L7RgdC40L3Rg9GB0Ysg0Lgg0YHQuNC90YPRgdGLINGI0LjRgNC+0YIg0Lgg0YDQsNC30L3QuNGG0Ysg0LTQvtC70LPQvtGCXHJcblxyXG4gICAgICAgICRzY29wZS5jX2xhdDEgPSBNYXRoLmNvcygkc2NvcGUucmFkX2xhdDEpO1xyXG4gICAgICAgICRzY29wZS5jX2xhdDIgPSBNYXRoLmNvcygkc2NvcGUucmFkX2xhdDIpO1xyXG4gICAgICAgICRzY29wZS5zX2xhdDEgPSBNYXRoLnNpbigkc2NvcGUucmFkX2xhdDEpO1xyXG4gICAgICAgICRzY29wZS5zX2xhdDIgPSBNYXRoLnNpbigkc2NvcGUucmFkX2xhdDIpO1xyXG4gICAgICAgICRzY29wZS5kZWx0YSA9ICRzY29wZS5yYWRfbG9uZzIgLSAkc2NvcGUucmFkX2xvbmcxO1xyXG4gICAgICAgICRzY29wZS5jZGVsdGEgPSBNYXRoLmNvcygkc2NvcGUuZGVsdGEpO1xyXG4gICAgICAgICRzY29wZS5zZGVsdGEgPSBNYXRoLnNpbigkc2NvcGUuZGVsdGEpO1xyXG5cclxuICAgICAgICAvLyBC0YvRh9C40YHQu9C10L3QuNGPINC00LvQuNC90Ysg0LHQvtC70YzRiNC+0LPQviDQutGA0YPQs9CwXHJcblxyXG4gICAgICAgICRzY29wZS55ID0gTWF0aC5zcXJ0KE1hdGgucG93KCRzY29wZS5jX2xhdDIqJHNjb3BlLnNkZWx0YSwyKStNYXRoLnBvdygkc2NvcGUuY19sYXQxKiRzY29wZS5zX2xhdDItJHNjb3BlLnNfbGF0MSokc2NvcGUuY19sYXQyKiRzY29wZS5jZGVsdGEsMikpO1xyXG4gICAgICAgICRzY29wZS54ID0gJHNjb3BlLnNfbGF0MSokc2NvcGUuc19sYXQyKyRzY29wZS5jX2xhdDEqJHNjb3BlLmNfbGF0Miokc2NvcGUuY2RlbHRhO1xyXG4gICAgICAgICRzY29wZS5hZCA9IE1hdGguYXRhbjIoJHNjb3BlLnksJHNjb3BlLngpO1xyXG4gICAgICAgICRzY29wZS5kaXN0ID0gJHNjb3BlLmFkKiRzY29wZS5yYWQ7XHJcbiAgICAgICAgJHNjb3BlLmRpc3QgPSAkc2NvcGUuZGlzdC8xMDAwO1xyXG4gICAgICAgICRzY29wZS5kaXN0ID0gJHNjb3BlLmRpc3QudG9GaXhlZCgyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRzY29wZS5kaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBOZXcgdXNlclxyXG5cclxuICAgICRzY29wZS5hZGQgPSBmdW5jdGlvbihuZXdVc2VyICx1c2VyRm9ybSkge1xyXG5cclxuICAgICAgICBpZih1c2VyRm9ybS4kdmFsaWQpe1xyXG4gICAgICAgICAgICAkc2NvcGUubmV3VXNlci5pZCA9ICRzY29wZS51c2Vycy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdVc2VyKTtcclxuICAgICAgICAgICAgJHNjb3BlLnVzZXJzLnB1c2goJHNjb3BlLm5ld1VzZXIpO1xyXG4gICAgICAgICAgICAkc2NvcGUubmV3VXNlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnBvcHVwQ2hlY2sgPSBmYWxzZTtcclxuXHJcbiAgICAkc2NvcGUud2Vic2l0ZVRlbXBsYXRlID0gL15bLVxcdy5dKyhbQS16MC05XVstQS16MC05XStcXC4pK1tBLXowLTldezIsMTB9JC87XHJcbiAgICAkc2NvcGUucGhvbmVUZW1wbGF0ZSA9IC9cXCg/WzAtOVxcKT9cXC0/XFwuP10rXFxzP1xceD9bMC05XSskLztcclxuXHJcbn0pOyJdLCJmaWxlIjoiYW5ndWxhclNjcmlwdF8xLmpzIn0=
