'use strict';

angular.module('ApiTesting')
.controller('apiCtrl', function($scope, $https){

   $scope.list;
   var postCode = 'e3b7g8';

   $https.jsonp('https://maps.googleapis.com/maps/api/geocode/json?address=' + postCode + 'callback=JSON_CALLBACK').then(function(data){
      console.log(data);
   });
});
