;(function () {

angular.module('app')
    .controller('regCtrl', regCtrl);
    regCtrl.$inject = ['$scope','userModel'];
        function regCtrl($scope,userModel) {



        $scope.userData = {};


        $scope.sendDataReg = function (user) {
            $scope.inProgress = true;
            $scope.userData = angular.copy(user);
            if ($scope.register.$valid){

                userModel.registerData(user);

            }
        }
            $scope.sendDataAuth = function (auth) {
                $scope.inProgress = true;
                $scope.userData = angular.copy(auth);
                if ($scope.authForm.$valid){

                    userModel.authData(auth);

                }
            }




    };
})();