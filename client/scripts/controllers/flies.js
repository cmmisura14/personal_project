myApp.controller("FlyController", ['$scope', '$http', function($scope, $http){
    console.log('Fly Controller loaded');

    $scope.fly = {};
    $scope.flies = [];

    $scope.add = function(fly){
        $http.post('/submitflies', fly).then(function(response){
            if(response.status === 200){
                console.log('Fly was saved!');
            }
        });
        $scope.fly = {};
    };


}]);



