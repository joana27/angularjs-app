angular.module('shared').factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {       
       return $firebaseAuth();
    }
]);