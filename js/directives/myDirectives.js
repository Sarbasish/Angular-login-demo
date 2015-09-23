/// <reference path="../../bower_components/angular/angular.js" />
angular.module('myFirstDirectiveModule', [])
    .directive('myDirTest', function () {
        return {
            restrict:'EAC',
            template:'<h1>Somthing else</h1>'
        }
    })