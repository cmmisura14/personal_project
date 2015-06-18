myApp.controller("DisplayFlyController", ['$scope', '$http', function($scope, $http){
    console.log('Display Fly Controller loaded');

    $scope.fly = {};
    $scope.flies = [];

    var fetchFlies = function() {
        return $http.get('/displayflies').then(function (res) {
            console.log('this is working maybe?');
            if (res.status !== 200) {
                throw new Error('Failed to fetch flies from the API');
            }
            $scope.fly = {};
            $scope.flies = res.data;
            return res.data;
        })
    };

    fetchFlies();


}]);