
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
