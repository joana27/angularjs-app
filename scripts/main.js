require.config({
    urlArgs: 'v=1.0'
});

require(
    [
        '/app.module',
        '/app.config',
        '/app.routes',
        '/shared/filters/duration.filter',
        '/shared/filters/search.filter',
        '/shared/filters/toTrusted.filter',
        '/shared/services/auth.service',
        '/shared/services/movie.service',
        '/login/login.component',
        '/movie-detail/movie-detail.component',
        '/movie-list/movie-list.component',
        '/navigation/navigation.component',
        '/shows/shows.component',
        '/shows/shows.service',
        '/signup/signup.component',
        '/scripts/ocLazyLoad'
        
    ],
    function () {
        angular.bootstrap(document, ['my-app']);
    });