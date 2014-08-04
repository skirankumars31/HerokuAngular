'use strict';

var AngularSpringApp = {};

var App = angular.module('AngularSpringApp', ['AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives', 'ngRoute', 'ui.bootstrap', 'ngTable', 'ui.ace', 'angularFileUpload']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/todo', {
        templateUrl: 'todo/layout',
        controller: TodoController
    });
    $routeProvider.when('/address', {
        templateUrl: 'address/layout',
        controller: AddressBookController
    });
    $routeProvider.when('/table', {
        templateUrl: 'table/layout',
        controller: TableController
    });
    $routeProvider.when('/file', {
        templateUrl: 'file/layout',
        controller: FileController
    });
    $routeProvider.when('/editor', {
        templateUrl: 'editor/layout',
        controller: EditorController
    });
    $routeProvider.when('/rest', {
        templateUrl: 'restangular/layout',
        controller: RestController
    });
    $routeProvider.when('/force', {
        templateUrl: 'force/layout',
        controller: ForceController
    });

    $routeProvider.otherwise({redirectTo: '/todo'});
}]);
