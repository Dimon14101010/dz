<<<<<<< 38234f677574831ef487771e77622827795a2811
;(function (){

    "use strict";

    angular
        .module ("exApp")
        .config (function ($stateProvider, $locationProvider)
    {

        $locationProvider.html5Mode(true);
        $stateProvider
        .state ('dashboard', {
            url: '/',
            controller: DashboardController,
            controllerAs: vm,
            templateUrl: app/dashboard/dashboard_template.html
    })
    });

=======
;(function(){

  "use strict";

  angular
      .module("app")
      .config(function($stateProvider, $locationProvider) {

          $locationProvider.html5Mode(true);

          $stateProvider
              .state('dashboard', {
                  url: '/',
                  controller: 'DashboardController',
                  controllerAs: 'vm',
                  templateUrl: 'app/dashboard/dashboard.html'
              })
              .state('collections', {
                  controller : 'CollectionCtrl',
                  controllerAs : 'vm',
                  url: '/collections',
                  templateUrl: 'app/collections/collections.html',

              })
              .state('shot', {
                  url: '/shots/:id',
                  controller: 'ShotController',
                  controllerAs: 'vm',
                  templateUrl: 'app/shots/shot.html'
              })
              .state ('insideCollection',{
                  url: '/collections/:id',

                  templateUrl: 'app/collections/inside.collections.html'
              })
              .state('shotCreate', {
                  url:'/create',
                  controller: 'ShotController',
                  controllerAs : 'vm',
                  templateUrl: 'app/shots/shot.create.html',
                  resolve: {
                      auth: function($http, $q,toastr) {
                          return $http.get('http://dev-api.mobile.design/api/users')
                              .then(null, function(response) {
                                  toastr.error('Unauthorized user', 'Error');
                                  console.log('Forbidden');
                                  return $q.reject();
                              }
                          );
                      }
                  }

              });
      });
>>>>>>> error transition
})();