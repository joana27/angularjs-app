
 angular.module("movieList")
 .component('movieList',{
     templateUrl:'movie-list/movie-list.html',
     controller: MovieListController
 });
 function MovieListController(movieService) {
    this.movies = movieService.query();
    this.orderProp = 'title'    
    this.layout = 'list';
    
 };
 