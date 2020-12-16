angular.module('shared').filter('to_trusted',function($sce){
    return function(text){
        return $sce.trustAsHtml(text);
    }
})