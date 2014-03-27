var app = angular.module("mainApp");

app.controller("BaseController", ["$scope", "Notify", "$location", function ($scope, notify, $location) {
    $scope.id = 0;
    $scope.entity = {};
    $scope.original = {};
    $scope.routes = {};
    $scope.res = {};
    $scope.collection = [];
    $scope.isBusy = true;

    $scope.hasChanges = function () {
        return angular.equals($scope.entity, $scope.original);
    };
    $scope.showOk = function (message) {
        notify.ShowSuccess(message);
    };
    $scope.showError = function (error) {
        notify.ShowError(error);
    };
    $scope.redirectTo = function (path) {
        $location.path(path);
    };
    $scope.success = function () {
        $scope.redirectTo($scope.routes.index);
        //$scope.showOk($scope.strings.shared.recordUpdated);
        $scope.showOk('Запись обновлена')
    };
    $scope.fail = function (error) {
        $scope.showError(error.data);
    };
    $scope.initCollection = function () {
        $scope.collection = $scope.res.query(function () {
            $scope.isBusy = false;
        }, function (error) {
            $scope.isBusy = false;
            $scope.showError(error.data);
        });
    };
    $scope.createModel = function (res) {
        return new res();
    };
    $scope.initEntity = function () {
        if ($scope.id === 0) {
            $scope.entity = $scope.createModel($scope.res);
        } else {
            $scope.entity = $scope.res.get({ Id: $scope.id }, function () {
                angular.copy($scope.entity, $scope.original);
                $scope.isBusy = false;
            }, function (error) {
                $scope.isBusy = false;
                $scope.showError(error.data);
            });
        }
    };
    $scope.save = function (entity) {
        if ($scope.id > 0) {
            entity.$update({ Id: $scope.id }, $scope.success, $scope.fail);
        } else {
            entity.$save($scope.success, $scope.fail);
        }
    };
    $scope.delete = function (entity) {
        entity.$remove({ Id: $scope.id }, function () {
            $scope.redirectTo($scope.routes.index);
            $scope.showOk(/*$scope.strings.shared.recordDeleted*/'Запись удалена');
        }, function (error) {
            $scope.showError(error.data);
        });
    };
}]);