;(function () {
<<<<<<< 38234f677574831ef487771e77622827795a2811
    
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
    
=======

    "use strict";

    angular
        .module("app")
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ['ShotModel'];

    function DashboardController(ShotModel) {
        let vm = this;

        vm.model = {
            shotResponse: ShotModel.api.get()
        };



    }

>>>>>>> error transition
})();