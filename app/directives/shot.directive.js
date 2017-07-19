;(function(){

    "use strict";

    angular
        .module("app")
        .component("appShot", {

            bindings: {
                shot: '='
            },
            controller: function ($state) {
                this.goToShot = function (shotId) {
                    $state.go('shot', {id: shotId});
                };
            },

            templateUrl: "app/directives/shot.template.html"

        });

})();
