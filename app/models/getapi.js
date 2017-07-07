;(function () {

    "use strict";

    angular
        .module ("exApp")
        .factory ('apiModel',apiModel);

    apiModel().$inject = ['$resource'];

    function apiModel ($resource) {

        let apiData = {

            apiGetData : $resource('http://dev-api.mobile.design/api/shots/:id',{id: '@id'})
        };
        

    return apiData;
    }

})();