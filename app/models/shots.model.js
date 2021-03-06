;(function () {

    "use strict";

    angular
        .module("app")
        .factory("ShotModel", ShotModel);

    ShotModel.$inject = ['$resource','$http'];

    function ShotModel($resource,$http) {
        
        let shots = {
            api: $resource('http://dev-api.mobile.design/api/shots/:id', {id: '@id'}, {
                updateMyFavoriteResource: {method: 'PUT'},
                checkDuplicate: {
                    method: 'GET',
                    url: 'http://dev-api.mobile.design/api/shots/check_duplicate'
                }
            }),
            collection : $resource('http://dev-api.mobile.design/api/collections/:id', {id:'@id'}),
            insideCollection :$resource('http://dev-api.mobile.design/api/collections/:id/shots', {id:'@id'})

        };

        return shots;

    }

})();
