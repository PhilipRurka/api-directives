'use strict';

angular.module('ApiTesting')
.controller('apiCtrl', function($scope, $https){

   $scope.list;
   var postCode = 'e3b7g8';

   $https.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + postCode).then(function(data){
      console.log(data);
   });
});
