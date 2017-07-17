;(function () {

    "use strict";

    angular
        .module ("app")
        .factory ('myInterceptor', function ($injector) {
            return {
                request : function (config) {
                    config.headers['accesstoken'] = $injector.get('userModel').userValues.accesstoken;
                    config.headers['client'] = $injector.get('userModel').userValues.client;
                    config.headers['tokentype'] = $injector.get('userModel').userValues.tokentype;
                    config.headers['uid'] = $injector.get('userModel').userValues.uid;
                    config.headers['expiry'] = $injector.get('userModel').userValues.expiry;
                    return config;
                }
            }
        });

    angular.module("app")
        .config (function ($httpProvider) {
        $httpProvider.interceptors.push('myInterceptor');
    })

})();