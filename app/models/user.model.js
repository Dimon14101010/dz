;(function () {

    "use strict"
        angular
            .module ('app')
            .factory ('userModel',userModel);
    userModel.$inject = ['$http'];

    function userModel($http) {

       let userData = {
       userValues : {},
           registerData : function (user) {

            $http ({
               method : 'POST',
               url : 'http://dev-api.mobile.design/api/auth',
               data : {'email' : attr.email , 'password' : attr.password}
           })}
       };
       return userData;
    }


})();