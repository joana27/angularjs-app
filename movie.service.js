
var module = angular.module("my-app");
module.factory('movieService',['$resource',function($resource){
    return $resource('movies/movies.json',{},{
                query: {
                    method: 'GET' ,
                    isArray: true         
                }
            });
          }
        ]);
