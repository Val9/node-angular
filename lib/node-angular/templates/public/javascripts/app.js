
/**
 * node-angular
 */

var app = angular.module('app', [], function($routeProvider) {

  $routeProvider.when('/welcome', {
    template   : 'partials/welcome.html',
    controller : WelcomeController  
  });
  $routeProvider.otherwise({ 
    redirectTo : '/welcome'
  });

});

app.config(function($locationProvider) {  
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
});

/**
 * controllers
 */

function WelcomeController($scope) {
  $scope.pageHeader = 'v0.0.0';
};

/* EOF */