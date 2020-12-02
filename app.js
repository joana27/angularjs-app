'use strict';

angular.module('my-app',['ngRoute','ngResource'])
.config(['$routeProvider',function ($routeProvider){
    $routeProvider           
            .when('/movies',{
                templateUrl:'pages/movies.html',
                controller:'MoviesController'
            }).when('/movies/:movieId', {
                templateUrl: 'pages/movie-detail.html',
                controller:'MovieDetailController'
              }).when('/signin',{
                templateUrl:'pages/signin.html',
                controller:'SignInController'
            }).otherwise({
                redirectTo: 'pages/movies.html'
            })
  
}]);