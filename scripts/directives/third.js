
angular.module('ApiTesting')
.directive('third', function() {
   return {
        templateUrl: 'templates/third.html',
        controller: 'apiCtrl',
        replace: true
    };
})
