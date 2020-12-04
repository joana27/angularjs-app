angular.module('my-app')
.controller('NavigationController',NavigationController);
function NavigationController($scope,$location){
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
      }
}