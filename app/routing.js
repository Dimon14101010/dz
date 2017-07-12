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
              .state ('list',{
                  abstract : true,
                  url: '',
                  templateUrl: 'app/list.html',
                  //resolve: {
                  //    auth: function($http, $q,toastr) {
                  //        return $http.get('http://dev-api.mobile.design/api/users')
                  //            .then(null, function(response) {
                  //                    toastr.error('Unauthorized user', 'Error');
                  //                    console.log('Forbidden');
                  //                    return $q.reject();
                  //                }
                  //            );
                  //    }
                  //}

              })
              .state('list.collections', {
                  controller : 'CollectionCtrl',
                  controllerAs : 'vm',
                  url: '/collections',
                  templateUrl: 'app/collections/collections.html',

              })

              .state ('list.insideCollection',{
                  url: 'collections/:id',
                  controller :'insideCollectionCtrl',
                  controllerAs : 'vm',
                  templateUrl: 'app/collections/inside.collections.html'
              })
              .state('list.shotCreate', {
                  url:'/create',
                  controller: 'ShotController',
                  controllerAs : 'vm',
                  templateUrl: 'app/shots/shot.create.html',


              }).state('shot', {
              url: '/shots/:id',
              controller: 'ShotController',
              controllerAs: 'vm',
              templateUrl: 'app/shots/shot.html'
          });
      });
})();