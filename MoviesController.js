
 angular.module("my-app")
 .controller('MoviesController',MoviesController)
 .filter('search',search);

 function MoviesController($scope,movieService) {
    $scope.movies = movieService.query();
    $scope.orderProp = 'title'    
    $scope.layout = 'grid';
    
 };
function search(){
   return function(arr, searchString){

      if(!searchString){
          return arr;
      }

      var result = [];

      searchString = searchString.toLowerCase();

      angular.forEach(arr, function(item){

          if(item.title.toLowerCase().indexOf(searchString) !== -1){
              result.push(item);
          }

      });

      return result;
   };
}