var myApp = angular.module('myApp',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/views/routes/home.html"
        }).
        when('/login', {
            templateUrl: "/views/routes/login.html",
            controller: 'LogInController'
        }).
        when('/register', {
            templateUrl: "/views/routes/register.html",
            controller: 'RegistrationController'
        }).
        when('/displayflies', {
            templateUrl: "/views/routes/displayflies.html",
            controller: 'DisplayFlyController'
        }).
        when('/submitflies', {
            templateUrl: "/views/routes/submitflies.html",
            controller: "FlyController"
        }).
        when('/streamreport', {
            templateUrl: "/views/routes/streamreport.html"
        }).
        otherwise({
            redirectTo: '/home'
        });
    $httpProvider.interceptors.push(['$location', '$q', function($location, $q){
        return {
            response: function(response){
                return response;
            },
            responseError: function(response){
                if(response.status === 401)
                    alert("Incorrect Username or Password");
                    return $q.reject(response);
            }
        };
    }]);


}]);

