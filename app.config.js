angular.module('my-app').config([ "$ocLazyLoadProvider", function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        'debug': true, // For debugging 'true/false'
        'events': true, // For Event 'true/false'
        'modules': [{ 
            name : 'login', 
            files: ['login/login.module.js']
        },{
            name : 'signup', 
            files: ['signup/signup.module.js']
        },{
            name : 'movies', 
            files: ['movie-list/movie-list.module.js']
        },{
            name : 'movie-detail', 
            files: ['movie-detail/movie-detail.module.js']
        },{
            name:'shows',
            files:['shows/shows.module.js']

        }]
    });
}]);