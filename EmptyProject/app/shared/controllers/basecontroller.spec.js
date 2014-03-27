describe("тестируем BaseController", function () {
    var scope, ctrl;
    beforeEach(function () {
        module("mainApp");
        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('BaseController', { $scope: scope });
        })
    });
    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });
    it('Должен содержать начальные объекты типа Id, entity и все функции должны быть определены', function (){
        expect(ctrl).toBeDefined();
        expect(scope.save).toBeDefined();
        expect(scope.initEntity).toBeDefined();
        expect(scope.id).toBe(0);
        expect(scope.entity).toEqualData({});
        expect(scope.showOk).toBeDefined();
        expect(scope.success).toBeDefined();
    })
    it('Функция success должна редиректить и показывать сообщение', function () {
        spyOn(scope, "showOk");
        spyOn(scope, 'redirectTo');

        scope.success();

        expect(scope.showOk).toHaveBeenCalled();
        expect(scope.redirectTo).toHaveBeenCalled();
    })
})