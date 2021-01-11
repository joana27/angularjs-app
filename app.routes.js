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
                    }],
                    LazyLoadCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('login'); 
                     }]
                                
                }
            }).when('/signup',{
                template:'<signup></signup>',    
                resolve:{
                    LazyLoadCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('signup');  
                     }]
                }           
            }).when('/movies',{
                template:'<movie-list></movie-list>'  ,
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$requireSignIn();
                    }],
                    LazyLoadCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('movies'); 
                     }]
                }        
            }).when('/movies/:movieId', {
                template: '<movie-detail></movie-detail>' ,
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$requireSignIn();
                    }],
                    LazyLoadCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('movie-detail'); 
                     }]
                }             
              }).when('/shows',{
                template:'<shows></shows>',
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$requireSignIn();
                    }],
                    LazyLoadCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('shows'); // Resolve promise and load before view 
                     }]
                }            
            }).otherwise('/movies')
  
    
}]);