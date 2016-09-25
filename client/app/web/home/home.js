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

    // $http.get('/api/corppassengers').then(function(data){
    //        var userInfo = data;
    //        console.log(userInfo);
    //  });
    //
    //  $http.get('/api/corppassengers/fbfd341a-7f82-11e6-9ccc-916367f449e2').then(function(data){
    //         var userInfo = data;
    //         console.log(userInfo);
    //   });
    //
    //  $http.put('/api/tickets/0164475186030').then(function(data){
    //    console.log(data);
    //   });

      $http.put('/api/corppassengers/fbfd341a-7f82-11e6-9ccc-916367f449e2', {passengerName: "Andres Villa"}).then(function(data){
        console.log(data);
       });


});
