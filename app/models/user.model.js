;(function () {

    "use strict",
        angular
            .module ('app')
            .factory ('userModel',userModel);
    userModel.$inject = ['$http'];

    function userModel($http) {

       function userTokens(met, url , attr) {
           let apiHeaders = {};
           let getToken = $http ({
               method : met,
               url : url,
               data :  {'email' : attr.email, 'password': attr.password}
                  }).then ((response)=> apiHeaders.token = response.data)
                    console.log ('try' , apiHeaders);
       }
       return userTokens();
       }


})();