// Module
angular.module('mediatorApp.home', [])

// Routing
.config(function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'app/web/home/home.html'
            }
        },
        data: {
            pageTitle: 'Home'
        }
    });
})

// Controller
.controller('HomeCtrl', function HomeCtrl($scope, $rootScope, $state, $http) {
    $scope._ = _;

    // $http.get('/api/corppassengers/fbfd341a-7f82-11e6-9ccc-916367f449e2').then(function(data){
    //   console.log(data);
    // });
    $http.get('/api/corppassengers').then(function(data){
      console.log(data);
    });
});
