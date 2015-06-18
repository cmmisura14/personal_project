myApp.controller("DisplayStreamReportController", ['$scope', '$http', function($scope, $http){
    console.log('Display Stream Report Controller loaded');

    $scope.report = {};
    $scope.reports = [];

    var fetchReports = function() {
        return $http.get('/streamreport').then(function (res) {
            console.log('this is working maybe?');
            if (res.status !== 200) {
                throw new Error('Failed to fetch flies from the API');
            }
            $scope.report = {};
            $scope.reports = res.data;
            return res.data;
        })
    };

    fetchReports();


}]);