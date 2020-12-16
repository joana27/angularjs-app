angular.module('shows')
    .factory('tvshowsService', ['$resource', function ($resource) {
        return $resource('/assets/tvShows/tvShows.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
    ])