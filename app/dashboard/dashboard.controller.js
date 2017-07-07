;(function () {
    
    "use strict";
    
    angular
        .module ("exApp")
        .controller ('DashboardController',DashboardController)

    DashboardController.$inject =['apiModel'];

    function DashboardController(apiModel) {
        let vm =this;

        vm.model ={
            pict : apiModel.apiData.apiGetData.get ({id: 100})
        };
    }
    
})();