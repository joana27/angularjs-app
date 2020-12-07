angular.module('core').filter('to_trusted',function($sce){
    return function(text){
        return $sce.trustAsHtml(text);
    }
})