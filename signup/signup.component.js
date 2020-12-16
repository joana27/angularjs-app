angular.module('signup')
  .component('signup', {
    templateUrl: 'signup/signup.html',
    controller: ('SignupController', SignupController)
  });
  function SignupController(Auth, $scope, $location) {
    $scope.signup = function () {

        $scope.message = null;
        $scope.error = null;
    
        // Create a new user
        Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
          .then(function (firebaseUser) {
            $scope.message = "User created with uid: " + firebaseUser.uid;
            $location.path('/movies')
    
          }).catch(function (error) {
            $scope.error = error.message;
          });
    
      }
  }
