var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = false;
        $httpProvider.defaults.withCredentials = false;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";    
    }
]);

myApp.controller('IndexController', function($scope, $window, $uibModal) {
    $scope.tasks = [
        {
            userId:1,
            taskId:1,
            title:'GitHub',
            completed:'false',
            url:'https://www.github.com/dharmkap'
        },
        {
            userId:2,
            taskId:2,
            title:'CNN',
            completed:'false',
            url:'http://www.cnn.com'
        },
        {
            userId:3,
            taskId:3,
            title:'Ness SES',
            completed:'false',
            url:'http://www.ness-ses.com'
        },
        {
            userId:4,
            taskId:4,
            title:'Google News',
            completed:'false',
            url:'http://news.google.com'
        },
    ];

    $scope.myGridOptions = {
        showFooter: false,
        enableSorting: true,
        multiSelect: false,
        enableFiltering: true,     
        enableRowSelection: true, 
        enableSelectAll: false,
        enableRowHeaderSelection: false,  
        enableGridMenu: true,
        noUnselect: true,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        },

        rowTemplate: "<div ng-dblclick=\"getExternalScopes().onDblClick(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell ></div>"
    };

    $scope.dblclick = function(task) {
        const modalTemplate = `
            <div>
                <iframe width='800px' height='600px' src="` + task.url + `"></iframe>
            </div>
        `;

        const modalInstance = $uibModal.open({
            animation: true,
            template: modalTemplate,
            controller: ModalInstanceController
        });

        return modalInstance;

        // $window.open(task.url, "_blank", "height=600,width=800,toolbar=no,location=no,menubar=no,titlebar=no");
    };

    function ModalInstanceController($scope, $uibModalInstance) {
    }
});
