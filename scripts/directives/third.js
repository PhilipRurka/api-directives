
angular.module('ContentPlugin')
.directive('third', function() {
   return {
        templateUrl: 'templates/third.html',
        controller: 'contentCtrl',
        replace: true
    };
})
