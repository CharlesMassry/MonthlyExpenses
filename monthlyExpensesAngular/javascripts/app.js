angular
  .module('monthlyExpenses', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/items.html',
        controller: 'ItemController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
