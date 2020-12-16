angular.module('shared').factory('movieService',['$resource',function($resource){  
    return $resource('assets/movies/movies.json',{},{
                query: {
                    method: 'GET' ,
                    isArray: true         
                }
            });
          }
]);