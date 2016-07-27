
angular.module('ContentPlugin')
.directive('fourth', function() {
   return {
        templateUrl: 'templates/fourth.html',
        controller: 'contentCtrl',
        replace: true
    };
})
