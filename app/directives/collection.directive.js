;(function(){

    "use strict";

    angular
        .module("app")
        .component("appCollection", {

            bindings: {
                collections: '='
            },controller: function ($state) {
                this.goToCollection = function (collId) {
                    $state.go('insideCollection', {id: collId});
                }
            },


            templateUrl: "app/collections/collections.html"

        })

})();
