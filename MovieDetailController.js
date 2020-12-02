angular
.module("my-app").
controller('MovieDetailController',MovieDetailController)
.filter('duration',duration);

function MovieDetailController($scope,$routeParams,movieService){
    movieService.query().$promise.
    then(function(response){
         $scope.movie = response.find(movie =>movie.id === $routeParams.movieId);
    });     
        
}
function duration(){
    return function(input){

        var input = input || '';
        var regex = /\d+/g;
        var found = input.match(regex);
        
      
        // convert number to hours:min
        var timeConvert = function(n) {
          var num = n;
          var hours = (num / 60);
          var rhours = Math.floor(hours);
          var minutes = (hours - rhours) * 60;
          var rminutes = Math.round(minutes);
          var finalResult = rhours + "h " + rminutes + "m";

          return finalResult;
        }
        return timeConvert(found);
    }
}
