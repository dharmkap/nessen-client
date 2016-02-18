var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = false;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";    
    }
]);

myApp.controller('GetAllTasksCtrl', function($scope, $http) {
    $http.get('http://localhost:8088/api/tasks').then(function(resp) {
        $scope.tasks = resp.data;
        $scope.totalItems = $scope.tasks.length;
        $scope.currentPage = 1;
        $scope.numPerPage = 15;
    }, function(err) {
        console.log(err.status);
    });
    
    $scope.paginate = function(value) {
        var begin, end, index;
        begin = ($scope.currentPage - 1) * $scope.numPerPage;
        end = begin + $scope.numPerPage;
        index = $scope.tasks.indexOf(value);
        return (begin <= index && index < end);
    };
})
