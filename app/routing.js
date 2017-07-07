;(function (){

    "use strict";

    angular
        .module ("exApp")
        .config (function ($stateProvider, $locationProvider)
    {

        $locationProvider.html5Mode(true);
        $stateProvider
        .state ('dashboard', {
            url: '/',
            controller: DashboardController,
            controllerAs: vm,
            templateUrl: app/dashboard/dashboard_template.html
    })
    });

})();