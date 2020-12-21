angular.module('my-app')
.run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {   
      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  }]);

angular.module('my-app')
.config(['$routeProvider',function ($routeProvider){
    $routeProvider      
            .when('/login',{
                template:'<login></login>',
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$waitForSignIn();
                    }]
                }
            }).when('/signup',{
                template:'<signup></signup>',               
            }).when('/movies',{
                template:'<movie-list></movie-list.html>'  ,
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$requireSignIn();
                    }]
                }        
            }).when('/movies/:movieId', {
                template: '<movie-detail></movie-detail.html>' ,
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$requireSignIn();
                    }]
                }             
              }).when('/shows',{
                template:'<shows></shows>',
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$requireSignIn();
                    }]
                }            
            }).otherwise('/movies')
  
    
}]);