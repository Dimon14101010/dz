;(function () {

angular

    .module('app')
    .directive('passCheck', function($http) {
        return {
            restrict : 'A',
            scope: {
                passworddd: '<'
            },
            require: 'ngModel',
            link : function (scope , el,attr,ctrl) {
                ctrl.$validators.checkPass = function (mv , vv) {
                    return mv == scope.passworddd;

                }
                scope.$watch('passworddd', function () {
                    ctrl.$validate();
                })

            }
        }
    });
})();