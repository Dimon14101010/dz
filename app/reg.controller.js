;(function () {

angular.module('app')
    .controller('regCtrl', regCtrl);
    regCtrl.$inject = ['$scope','$http'];
        function regCtrl($scope,$http) {
        $scope.userData = {};

        $scope.sendData = function (user) {
            $scope.userData = angular.copy(user);
            if ($scope.register.$valid){
            $http ({
                method : 'POST',
                url : 'http://dev-api.mobile.design/api/auth',
                data : {'email':$scope.userData.email,'password' :$scope.userData.pass,'password_confirmation' : $scope.userData.confirmPass}
            })
            }
        }




    };
})();