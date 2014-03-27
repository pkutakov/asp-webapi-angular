describe("Тестирование сервиса всплывающих сообщений", function () {
    var service = {};
    beforeEach(function () {
        module('mainApp');
        module('NotificationService');
        //module('NotificationService');
        
        inject(function (Notify) {
            service = Notify;
        })
        
    });
    it('Все функции сервиса определены', function () {
        expect(service.ShowSuccess).toBeDefined();
        expect(service.ShowInfo).toBeDefined();
        expect(service.ShowError).toBeDefined();
    })
    it('Функции тостера вызваны при вызове всех сообщений через сервис', function () {
        spyOn(toastr, "success");
        service.ShowSuccess("test success", "TEST");
        expect(toastr.success).toHaveBeenCalledWith("test success", "TEST");
        
        spyOn(toastr, "info");
        service.ShowInfo("test info", "INFO");
        expect(toastr.info).toHaveBeenCalledWith("test info", "INFO");

        spyOn(toastr, "error");
        service.ShowError("error", "error");
        expect(toastr.error).toHaveBeenCalledWith("error", "error");
        
    })
})