

var testApp = angular.module('testApp',['angular-toArrayFilter']);

testApp.controller('userController', function ($scope, $http){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            $scope.$apply(function(){
                $scope.position = position;
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
            $scope.id = 0;
            $scope.users.forEach(function() {
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

        var emailLink = document.getElementById('mail_'+id);
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
            $scope.users.push($scope.newUser);
            $scope.newUser = null;
        }

    };

    $scope.popupCheck = false;

    $scope.websiteTemplate = /^[-\w.]+([A-z0-9][-A-z0-9]+\.)+[A-z0-9]{2,10}$/;
    $scope.phoneTemplate = /\(?[0-9\)?\-?\.?]+\s?\x?[0-9]+$/;

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbmd1bGFyU2NyaXB0XzEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG52YXIgdGVzdEFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0ZXN0QXBwJyxbJ2FuZ3VsYXItdG9BcnJheUZpbHRlciddKTtcclxuXHJcbnRlc3RBcHAuY29udHJvbGxlcigndXNlckNvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCl7XHJcblxyXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zaXRpb24pe1xyXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmVuZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vINCf0L7Qu9GD0YfQtdC90LjQtSBKU09OXHJcblxyXG4gICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSl7XHJcblxyXG4gICAgICAgICRzY29wZS51c2VycyA9IGRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmNoZWNrVXNlcm5hbWUgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuaWQgPSAwO1xyXG4gICAgICAgICAgICAkc2NvcGUudXNlcnMuZm9yRWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5yZXNlcnZlZCA9IGFuZ3VsYXIuZXF1YWxzKG1vZGVsLnRvTG93ZXJDYXNlKCksICRzY29wZS51c2Vyc1skc2NvcGUuaWRdLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucmVzZXJ2ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUucmVzZXJ2ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaWQrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLnJlc2VydmVkO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5jaGVja0NvbXBhbnlOYW1lID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmlkID0gMDtcclxuICAgICAgICAgICAgJHNjb3BlLnVzZXJzLmZvckVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVzZXJ2ZWRDb21wYW55ID0gYW5ndWxhci5lcXVhbHMobW9kZWwudG9Mb3dlckNhc2UoKSwgJHNjb3BlLnVzZXJzWyRzY29wZS5pZF0uY29tcGFueS5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucmVzZXJ2ZWRDb21wYW55ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnJlc2VydmVkQ29tcGFueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5pZCsrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUucmVzZXJ2ZWRDb21wYW55O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5jaGVja0VtYWlsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmlkID0gMDtcclxuICAgICAgICAgICAgJHNjb3BlLnVzZXJzLmZvckVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVzZXJ2ZWRFbWFpbCA9IGFuZ3VsYXIuZXF1YWxzKG1vZGVsLnRvTG93ZXJDYXNlKCksICRzY29wZS51c2Vyc1skc2NvcGUuaWRdLmVtYWlsLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucmVzZXJ2ZWRFbWFpbCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5yZXNlcnZlZEVtYWlsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmlkKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5yZXNlcnZlZEVtYWlsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxmdW5jdGlvbiAoZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uKGVsZW0pIHtcclxuICAgICAgICBpZiAoZWxlbSA9PSAkc2NvcGUudXNlcnMubGVuZ3RoLTEpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICRzY29wZS5wb3AgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJMb2FkJykpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIC8vINCh0L7RgNGC0LjRgNC+0LLQutCwXHJcblxyXG4gICAgJHNjb3BlLnNvcnRUeXBlID0gJ25hbWUnO1xyXG4gICAgJHNjb3BlLnNvcnRSZXZlcnNlID0gZmFsc2U7XHJcblxyXG4gICAgLy8g0JrQvtC/0LjRgNC+0LLQsNC90LjQtSBlbWFpbCDQsiDQsdGD0YTRhNC10YAg0L7QsdC80LXQvdCwXHJcblxyXG4gICAgJHNjb3BlLmNvcHkgPSBmdW5jdGlvbihpZCkge1xyXG5cclxuICAgICAgICB2YXIgZW1haWxMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxfJytpZCk7XHJcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlKGVtYWlsTGluayk7XHJcbiAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgICAgICB2YXIgbXNnID0gc3VjY2Vzc2Z1bCA/ICdzdWNjZXNzZnVsJyA6ICd1bnN1Y2Nlc3NmdWwnO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29weSBlbWFpbCBjb21tYW5kIHdhcyAnICsgbXNnKTtcclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT29wcywgdW5hYmxlIHRvIGNvcHknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g0KDQsNGB0YfQtdGCINGA0LDRgdGB0YLQvtGP0L3QuNGPINC00L5cclxuXHJcbiAgICAkc2NvcGUucmFuZ2UgPSBmdW5jdGlvbih5X2xhdCwgeV9sbmcsIHVfbGF0LCB1X2xuZykge1xyXG5cclxuICAgICAgICAkc2NvcGUucGkgPSBNYXRoLlBJO1xyXG4gICAgICAgICRzY29wZS5yYWQgPSA2MzcyNzk1O1xyXG4gICAgICAgICRzY29wZS5sYXQxID0gcGFyc2VGbG9hdCh1X2xhdCk7XHJcbiAgICAgICAgJHNjb3BlLmxhdDIgPSB5X2xhdDtcclxuICAgICAgICAkc2NvcGUubG9uZzEgPSBwYXJzZUZsb2F0KHVfbG5nKTtcclxuICAgICAgICAkc2NvcGUubG9uZzIgPSB5X2xuZztcclxuXHJcblxyXG4gICAgICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtGLINCyINGA0LDQtNC40LDQvdCw0YVcclxuXHJcbiAgICAgICAgJHNjb3BlLnJhZF9sYXQxID0gJHNjb3BlLmxhdDEqJHNjb3BlLnBpLzE4MDtcclxuICAgICAgICAkc2NvcGUucmFkX2xhdDIgPSAkc2NvcGUubGF0Miokc2NvcGUucGkvMTgwO1xyXG4gICAgICAgICRzY29wZS5yYWRfbG9uZzEgPSAkc2NvcGUubG9uZzEqJHNjb3BlLnBpLzE4MDtcclxuICAgICAgICAkc2NvcGUucmFkX2xvbmcyID0gJHNjb3BlLmxvbmcyKiRzY29wZS5waS8xODA7XHJcblxyXG4gICAgICAgIC8vINCa0L7RgdC40L3Rg9GB0Ysg0Lgg0YHQuNC90YPRgdGLINGI0LjRgNC+0YIg0Lgg0YDQsNC30L3QuNGG0Ysg0LTQvtC70LPQvtGCXHJcblxyXG4gICAgICAgICRzY29wZS5jX2xhdDEgPSBNYXRoLmNvcygkc2NvcGUucmFkX2xhdDEpO1xyXG4gICAgICAgICRzY29wZS5jX2xhdDIgPSBNYXRoLmNvcygkc2NvcGUucmFkX2xhdDIpO1xyXG4gICAgICAgICRzY29wZS5zX2xhdDEgPSBNYXRoLnNpbigkc2NvcGUucmFkX2xhdDEpO1xyXG4gICAgICAgICRzY29wZS5zX2xhdDIgPSBNYXRoLnNpbigkc2NvcGUucmFkX2xhdDIpO1xyXG4gICAgICAgICRzY29wZS5kZWx0YSA9ICRzY29wZS5yYWRfbG9uZzIgLSAkc2NvcGUucmFkX2xvbmcxO1xyXG4gICAgICAgICRzY29wZS5jZGVsdGEgPSBNYXRoLmNvcygkc2NvcGUuZGVsdGEpO1xyXG4gICAgICAgICRzY29wZS5zZGVsdGEgPSBNYXRoLnNpbigkc2NvcGUuZGVsdGEpO1xyXG5cclxuICAgICAgICAvLyBC0YvRh9C40YHQu9C10L3QuNGPINC00LvQuNC90Ysg0LHQvtC70YzRiNC+0LPQviDQutGA0YPQs9CwXHJcblxyXG4gICAgICAgICRzY29wZS55ID0gTWF0aC5zcXJ0KE1hdGgucG93KCRzY29wZS5jX2xhdDIqJHNjb3BlLnNkZWx0YSwyKStNYXRoLnBvdygkc2NvcGUuY19sYXQxKiRzY29wZS5zX2xhdDItJHNjb3BlLnNfbGF0MSokc2NvcGUuY19sYXQyKiRzY29wZS5jZGVsdGEsMikpO1xyXG4gICAgICAgICRzY29wZS54ID0gJHNjb3BlLnNfbGF0MSokc2NvcGUuc19sYXQyKyRzY29wZS5jX2xhdDEqJHNjb3BlLmNfbGF0Miokc2NvcGUuY2RlbHRhO1xyXG4gICAgICAgICRzY29wZS5hZCA9IE1hdGguYXRhbjIoJHNjb3BlLnksJHNjb3BlLngpO1xyXG4gICAgICAgICRzY29wZS5kaXN0ID0gJHNjb3BlLmFkKiRzY29wZS5yYWQ7XHJcbiAgICAgICAgJHNjb3BlLmRpc3QgPSAkc2NvcGUuZGlzdC8xMDAwO1xyXG4gICAgICAgICRzY29wZS5kaXN0ID0gJHNjb3BlLmRpc3QudG9GaXhlZCgyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRzY29wZS5kaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBOZXcgdXNlclxyXG5cclxuICAgICRzY29wZS5hZGQgPSBmdW5jdGlvbihuZXdVc2VyICx1c2VyRm9ybSkge1xyXG5cclxuICAgICAgICBpZih1c2VyRm9ybS4kdmFsaWQpe1xyXG4gICAgICAgICAgICAkc2NvcGUubmV3VXNlci5pZCA9ICRzY29wZS51c2Vycy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAkc2NvcGUudXNlcnMucHVzaCgkc2NvcGUubmV3VXNlcik7XHJcbiAgICAgICAgICAgICRzY29wZS5uZXdVc2VyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucG9wdXBDaGVjayA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS53ZWJzaXRlVGVtcGxhdGUgPSAvXlstXFx3Ll0rKFtBLXowLTldWy1BLXowLTldK1xcLikrW0EtejAtOV17MiwxMH0kLztcclxuICAgICRzY29wZS5waG9uZVRlbXBsYXRlID0gL1xcKD9bMC05XFwpP1xcLT9cXC4/XStcXHM/XFx4P1swLTldKyQvO1xyXG5cclxufSk7Il0sImZpbGUiOiJhbmd1bGFyU2NyaXB0XzEuanMifQ==
