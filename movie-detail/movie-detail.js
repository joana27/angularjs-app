angular.module('movieDetail')
.component('movieDetail',{
    templateUrl:"movie-detail/movie-detail.html",
    controller: MovieDetailController
})

function MovieDetailController($scope,$routeParams,movieService){      
    movieService.query().$promise.
    then(function(response){       
        $scope.movie = response.find(movie =>movie.id === $routeParams.movieId);
        
    });     
        
}

