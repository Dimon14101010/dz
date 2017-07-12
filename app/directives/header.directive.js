;(function(){

  "use strict";

  angular
      .module("app")

      .component("appHeader", {

              templateUrl: "app/directives/header.template.html",
          transclude : true

      })

})();
