
angular.module('ContentPlugin')
.directive('third', function() {
   return {
        templateUrl: 'templates/second.html',
        controller: 'contentCtrl',
        replace: true
    };
})
