;(function () {

    "use strict";

    angular
        .module("app")
        .controller("insideCollectionCtrl", insideCollectionCtrl);

    insideCollectionCtrl.$inject = ['ShotModel','$stateParams'];

    function insideCollectionCtrl (ShotModel,$stateParams) {
        let vm = this;

        vm.model = {
            insideCollectResponse: ShotModel.insideCollection.get({id: $stateParams.id}),

        };
        console.log ('inside collections srabotalo',vm.model.insideCollectResponse)

    }

})();