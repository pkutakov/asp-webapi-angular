angular.module("sampleEntity", ['NotificationService'])
    .factory("sampleEntityResource", [
        "$resource",
        function ($resource) {
            return $resource("/api/sampleEntity", {}, {
                update: {
                    method: "PUT"
                }
            });
        }])
    .controller("sampleEntityController", ['$scope', '$routeParams', 'Notify', '$controller', 'sampleEntityResource', function ($scope, $routeParams, Notify, $controller, res) {
        $controller("BaseController", { $scope: $scope });
        $scope.routes.index = '/sampleEntity';
        $scope.routes.edit = '/sampleEntity/edit';
        $scope.id = $routeParams.id || 0;
        $scope.res = res;
        $scope.initEntity();
    }])
