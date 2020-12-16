angular.module('my-app').component('navigation',{
  templateUrl:'/navigation/navgation.html',
  controller:('NavigationController',NavigationController)

});

function NavigationController($scope,$location,Auth){
  $scope.getClass = function (path) {
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
  $scope.auth = Auth;
  $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.firebaseUser = firebaseUser;
    });

    $scope.logOut = function(){
      $scope.auth.$signOut().then(function(){
        $location.path('/login');
      }).catch(function (error) {
        $scope.error = error.message;
      });

    }

}
