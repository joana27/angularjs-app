angular.module('movieDetail')
.component('movieDetail',{
    templateUrl:"movie-detail/movie-detail.html",
    controller:('MovieDetailController',MovieDetailController)
});

function MovieDetailController($scope,$routeParams,movieService){  
    console.log('test')    
    movieService.query().$promise.
    then(function(response){       
        $scope.movie = response.find(movie =>movie.id === $routeParams.movieId);
        
    });     
        
}

