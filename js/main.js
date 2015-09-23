/// <reference path="../bower_components/angular/angular.js" />
var myapp = angular.module('myapp', [])
    .controller('indexController', function ($scope) {
        $scope.validation = function () {

            var userName = $scope.user;
            var password = $scope.password;
            
            if (userName == 'nosql' && password == 'html5') {
                alert("welcome to the hell");
            }
            else {
                alert("invalid user");

            }
        }

    });