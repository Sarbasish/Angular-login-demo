/// <reference path="../../bower_components/angular/angular.js" />
angular.module('firstServicesmodule', [])
    .factory('simpleCall', function () {
        return {
            test: 'Hello',
            invokefromservice: function () {
                alert('From Service');
            }
        }
    })