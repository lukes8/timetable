'use strict';

/*
 AngularJS Controller
 Controller is defined to augment the Docent View.
 The Controller is attached to the DOM via the ng-controller directive.
 @author Jonas Gehrke
 */

app.controller('DocentController', function ($scope, ConnectionService) {

    //CRUD function calls for docents via ConnectionService
    $scope.docents = ConnectionService.getDocents;
    $scope.createDocent = ConnectionService.createDocent;
    $scope.updateDocent = ConnectionService.updateDocent;
    $scope.deleteDocent = ConnectionService.deleteDocent;
    $scope.docentsLastUpdateTime = ConnectionService.getDocentsLastUpdateTime;

    // language=JSRegexp
    $scope.ph_numbr = /^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/;

    // set active selected docent
    $scope.setSelectedDocent = function (docent) {
        $scope.docent = angular.copy(docent);
        console.log('Selected Docent:', $scope.docent);
    };
});