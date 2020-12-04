'use strict';

angular.module('my-app',['ngRoute','core','movieDetail','movieList','signin'])
.config(['$routeProvider',function ($routeProvider){
    $routeProvider           
            .when('/movies',{
                template:'<movie-list></movie-list>'                
            }).when('/movies/:movieId', {
                template: '<movie-detail></movie-detail>'               
              }).when('/signin',{
                template:'<signin></signin>'              
            }).otherwise('/movies')
  
}]);