;(function () {

    "use strict"
        angular
            .module ('app')
            .factory ('userModel',userModel);
    userModel.$inject = ['$http'];

    function userModel($http) {

       let userData = {
       userValues : {},
           registerData : function (attr) {

           $http ({
               method : 'POST',
               url : 'http://dev-api.mobile.design/api/auth',
               data : {'email' : attr.email , 'password' : attr.pass,'password_confirmation' : attr.confirmPass}
           })
               .then ((resp) => {userData.userValues=resp.headers; console.log ('token',userData.userValues)});


       }
       };
       return userData;
    }


})();