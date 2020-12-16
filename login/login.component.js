angular.module('login')
  .component('login', {
    templateUrl: 'login/login.html',
    controller: ('LoginController', LoginController)
  });


function LoginController(Auth, $scope, $location) {
  $scope.login = function () {
    $scope.message = null;
    $scope.error = null;

    Auth.$signInWithEmailAndPassword($scope.email, $scope.password)
      .then(function (firebaseUser) {
        $scope.message = "Signed in as: " + firebaseUser.user.uid;
        $location.path('/movies')
      }).catch(function (error) {
        console.error("Authentication failed:", error.message);
        $scope.error = error.message
      })
  };

   
}
