
angular.module('ApiTesting')
.directive('second', function() {
   return {
        templateUrl: 'templates/second.html',
        controller: 'apiCtrl',
        replace: true
    };
})
