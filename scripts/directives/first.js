
angular.module('ContentPlugin')
.directive('first', function() {
   return {
        templateUrl: 'templates/first.html',
        controller: 'ApiTesting',
        replace: true
    };
})
