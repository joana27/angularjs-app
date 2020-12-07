'use strict';

angular.module('my-app',['core','ngRoute','movieDetail','movieList','shows'])
.config(['$routeProvider',function ($routeProvider){
    $routeProvider           
            .when('/movies',{
                template:'<movie-list></movie-list>'                
            }).when('/movies/:movieId', {
                template: '<movie-detail></movie-detail>'               
              }).when('/shows',{
                template:'<shows></shows>'              
            }).otherwise('/movies')
  
    
}]);