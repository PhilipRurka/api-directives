
angular.module('ContentPlugin')
.directive('second', function() {
   return {
        templateUrl: 'templates/second.html',
        controller: 'apiCtrl',
        replace: true
    };
})
