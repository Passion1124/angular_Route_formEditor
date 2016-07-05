angular.module('myForm',['ngRoute','myForm.Controllers'])
    .run(['$rootScope',function ($rootScope) {
        $rootScope.items = [];
    }])
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/edit',{
            templateUrl:'page/edit.html',
            controller:'editController'
        }).when('/preview',{
            templateUrl:'page/preview.html',
            controller:'previewController'
        }).otherwise({
            redirectTo: '/edit'
        })
    }]);

angular.module('myForm.Controllers',[])
    .controller('editController',['$rootScope',function ($rootScope) {
        $rootScope.popupState = false;
        $rootScope.removeItem = function (index) {
            var newDate = [];
            for (var i = 0; i < $rootScope.items.length; i++){
                if (i != index){
                    newDate.push($rootScope.items[i])
                }
            }
            $rootScope.items = newDate;
        };
        $rootScope.addItem = function (item) {
            $rootScope.items.push(item);
            $rootScope.chosePopup();
        };
        $rootScope.showPopup = function () {
            $rootScope.popupState = true;
        };
        $rootScope.chosePopup = function () {
            $rootScope.popupState = false;
        };
    }])
    .controller('previewController',['$rootScope',function ($rootScope) {
        $rootScope.prompt = function () {
            alert('此功能正在完善中,给您带来不便请谅解');
        }
    }]);