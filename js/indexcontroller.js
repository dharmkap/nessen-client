var myApp = angular.module('myApp', []);

myApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = false;
        $httpProvider.defaults.withCredentials = false;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
]);

myApp.controller('IndexController', function($scope, $window) {
    $scope.popupView = new popup();

    $scope.tasks = [
        {
            userId:1,
            taskId:1,
            title:'CNN',
            completed:'false',
            url:'http://www.cnn.com'
        },
        {
            userId:2,
            taskId:2,
            title:'Ness SES',
            completed:'false',
            url:'http://www.ness-ses.com'
        }
    ];

    $scope.dblclick = function(task) {
        document.getElementById('myIframe').src = task.url;
        $scope.popupView.show(document.querySelector('#iframe_popup'), undefined ,function() {
            document.getElementById('myIframe').src = null;
            console.log("hidden");
        });
    };
});
