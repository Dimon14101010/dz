;(function () {

angular.module('app')
    .controller('regCtrl', regCtrl);
    regCtrl.$inject = ['$scope','$http','userModel'];
        function regCtrl($scope,userModel) {



        $scope.userData = {};


        $scope.sendData = function (user) {
            $scope.inProgress = true;
            $scope.userData = angular.copy(user);
            if ($scope.register.$valid){

                userModel.getTokens('POST','http://dev-api.mobile.design/api/auth',user);

            }
        }




    };
})();