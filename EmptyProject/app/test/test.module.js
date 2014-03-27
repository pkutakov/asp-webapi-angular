angular.module("mainApp.Test", ['NotificationService'])
    .controller('testController', ['$scope', 'Notify', '$http',  function ($scope, notify, $http) {
        $scope.showTestOk = function (message) {
            notify.ShowSuccess(message);
        }

        $scope.test401error = function () {
            $http.get('/api/test').success(function (data) {
                $scope.test401Content = data;
            })
        }
        $scope.test403error = function () {
            $http.get('/api/errorItem/123').success(function (data) {
                $scope.test403Content = data;
            }).error(function () {
                $scope.test403Content = 'Error: failed to get response';
            })
        }
    }])
