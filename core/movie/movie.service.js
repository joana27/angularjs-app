
var module = angular.module("core.movie");
module.factory('movieService',['$resource',function($resource){
    return $resource('movies/movies.json',{},{
                query: {
                    method: 'GET' ,
                    isArray: true         
                }
            });
          }
]);
module.factory('tvshowsService',['$resource',function($resource){
  return $resource('tvShows/tvShows.json',{},{
    query: {
        method: 'GET' ,
        isArray: true         
    }
});
}
])