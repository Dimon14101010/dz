;(function () {

angular.module('app')
    .controller('regCtrl', regCtrl);
    regCtrl.$inject = ['$scope','userModel'];
        function regCtrl($scope,userModel) {



        $scope.userData = {};


        $scope.sendData = function (user) {
            $scope.inProgress = true;
            $scope.userData = angular.copy(user);
            if ($scope.register.$valid){

                userModel.registerData(user);

            }
        }




    };
})();