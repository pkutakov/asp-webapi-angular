'use strict'

angular.module("mainApp", [
'ngRoute',
'ngResource', 
'ngAnimate',
'NotificationService',
'mainApp.Test',
'sampleEntity'
], ['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    $httpProvider.interceptors.push('HttpInterceptor');
    /*
    var interceptor = ['$rootScope', '$q', function (scope, $q) {

        function success(response) {
            return response;
        }

        function error(response) {
            var status = response.status;

            if (status == 401) {
                window.location = "./index.html";
                return;
            }
            // otherwise
            return $q.reject(response);

        }

        return function (promise) {
            return promise.then(success, error);
        }

    }];
    $httpProvider.responseInterceptors.push(interceptor);
    */
}])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/:controller", { 
            templateUrl: function ($routeParams) {
                return "/app/" + $routeParams.controller + "/views/index.html";
            }
        })
        .when("/:controller/:action", {
            templateUrl: function ($routeParams) {
                return "/app/" + $routeParams.controller + "/views/" + $routeParams.action + ".html";
            }
        })
        .when("/:controller/:action/:id", {
            templateUrl: function ($routeParams) {
                return "/app/" + $routeParams.controller + "/views/" + $routeParams.action + ".html";
            }
        })
        .when('/', { templateUrl: '/app/Test/Views/test.html', controller: 'testController' });
    $locationProvider.html5Mode(true);
}])
.factory('HttpInterceptor', ['$q', function ($q) {
    return {
        'responseError': function (rejection) {
            var status = rejection.status;
            if (status == 401) {
                window.location = "/";
                return;
            }
            return $q.reject(rejection);
        }
    };
}])

