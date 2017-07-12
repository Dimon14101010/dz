;(function(){

    "use strict";

    angular
        .module("app")
        .component("appCollection", {

            bindings: {
                collections: '='
            },

            templateUrl: "app/collections/collections.html"

        })

})();
