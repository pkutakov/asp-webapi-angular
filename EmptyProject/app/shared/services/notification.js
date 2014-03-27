/*global angular, toastr*/
angular.module("NotificationService", [])
    .factory("Notify", function () {
        if (toastr) {
            toastr.options = {
                "positionClass": "toast-bottom-right"
            };
        }
        return {
            ShowError: function (message, title) {
                if (toastr) {
                    if (typeof (message) === "object") {
                        title = message.Message || "Ошибка";
                        message = message.ExceptionMessage || "Неизвестная ошибка";
                    }
                    toastr.error(message, title);
                }
            },
            ShowInfo: function (message, title) {
                if (toastr) {
                    toastr.info(message, title);
                }
            },
            ShowSuccess: function (message, title) {
                if (toastr) {
                    toastr.success(message, title);
                }
            }
        };
    });