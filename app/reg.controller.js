;(function () {

    "use strict";

angular.module('app')
    .controller('regCtrl', regCtrl);
    regCtrl.$inject = ['$scope','userModel','toastr'];
        function regCtrl($scope,userModel,toastr) {



        $scope.userData = {};


        $scope.sendDataReg = function (user) {
            $scope.inProgress = true;
            $scope.userData = angular.copy(user);
            if ($scope.register.$valid){

                userModel.registerData(user);
                toastr.success('register succesfull', 'hello');
                console.log('Succes');


            }
        }
            $scope.sendDataAuth = function (auth) {
                $scope.inProgress = true;
                $scope.userData = angular.copy(auth);
                if ($scope.authForm.$valid){

                    userModel.authData(auth).finally(()=>$scope.inProgress = false);

                }
            }




    }
})();