;(function () {

    "use strict";

    angular
        .module("app")
        .controller("CollectionCtrl", CollectionCtrl);

    CollectionCtrl.$inject = ['ShotModel','$stateParams'];

    function CollectionCtrl (ShotModel,$stateParams) {
        let vm = this;

        vm.model = {
            collectResponse: ShotModel.collection.get({id: $stateParams.id})

        };
        console.log (vm.model.collectResponse)

    }

})();