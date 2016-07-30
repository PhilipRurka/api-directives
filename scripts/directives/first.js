
angular.module('ApiTesting')
.directive('first', function() {
   return {
        templateUrl: 'templates/first.html',
        controller: 'apiCtrl',
        replace: true
    };
})
