
angular.module('ContentPlugin')
.directive('fourth', function() {
   return {
        templateUrl: 'templates/fourth.html',
        controller: 'apiCtrl',
        replace: true
    };
})
