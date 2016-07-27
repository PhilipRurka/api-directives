
angular.module('ContentPlugin')
.directive('first', function() {
   return {
        templateUrl: 'templates/first.html',
        controller: 'contentCtrl',
        replace: true
    };
})
