
angular.module('ContentPlugin')
.directive('second', function() {
   return {
        templateUrl: 'templates/second.html',
        controller: 'contentCtrl',
        replace: true
    };
})
