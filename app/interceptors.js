;(function () {

    "use strict";

    angular
        .module ("app")
        .factory ('myInterceptor', function (userModel) {
            return {
                request : function (config) {
                    config.headers['my-test-token']='userModel.userValues'
                }
            }
        });

    angular.module("app")
        .config (function ($httpProvider) {
        $httpProvider.interceptors.push('myInterceptor');
    })

})();