myApp.controller("PostStreamReportController", ['$scope', '$http', function($scope, $http){
    console.log('Post Stream Report Controller loaded');

    $scope.report = {};
    $scope.reports = [];

    $scope.add = function(report){
        $http.post('/poststreamreport', report).then(function(response){
            if(response.status === 200){
                console.log('Report was saved!');
            }
        });
        $scope.report = {};
    };

}]);