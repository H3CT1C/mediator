'use strict';

angular.module('mediatorApp')
    .controller('FooterCtrl', function FooterCtrl($http, $scope, $location, $state) {

        // Simple elevator usage.
        var elementButton = document.querySelector('.elevator');
        var elevator = new Elevator({
            element: elementButton,
            mainAudio: 'assets/music/elevator.mp3', // Music from http://www.bensound.com/
            endAudio: 'assets/music/ding.mp3'
        });

    });
