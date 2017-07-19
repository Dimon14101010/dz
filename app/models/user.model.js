;(function () {

    "use strict";
        angular
            .module ('app')
            .factory ('userModel',userModel);
    userModel.$inject = ['$http','toastr'];

    function userModel($http,toastr) {

       let userData = {

       userValues : {},
           registerData : function (attr) {

           $http ({
               method : 'POST',
               url : 'http://dev-api.mobile.design/api/auth',
               data : {'email' : attr.email , 'password' : attr.pass,'password_confirmation' : attr.confirmPass}
           })
               .then ((resp) => {userData.userValues=resp.headers(); console.log ('token',userData.userValues)});


       },
           authData : function (attr) {

               return $http ({
                   method : 'POST',
                   url : 'http://dev-api.mobile.design/api/auth/sign_in',
                   data : {'email' : attr.email , 'password' : attr.pass}
               })
                   .then ((resp) => {userData.userValues=resp.headers(); console.log ('token',userData.userValues);
                       toastr.success('register succesfull', 'hello');
               console.log('Succes');},function (resp) {
                       toastr.error(resp.data.errors, 'Error');
                       console.log('Forbidden');
                   })


           }
       };
       return userData;
    }


})();