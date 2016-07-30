'use strict';

angular.module('ApiTesting')
.controller('apiCtrl', function($scope){

   var https = require('https');

   function printError(error){
       console.error(error.message);
   }

   function getPostCode(postCode){
      console.log(postCode)
      var request = https.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + postCode, function(response){
         console.log('Status Code for the Postal Code: ' + response.statusCode);
         var body = '';
         response.on('data',function(chunk){
            body += chunk;
         });
         response.on('end', function(){
            var coordinates = JSON.parse(body);
            var lat = coordinates.results[0].geometry.location.lat;
            var lng = coordinates.results[0].geometry.location.lng;
            console.log('The Location of ' + postCode + ' is ' + lng + ' longitude and ' + lat +' latitude.');
            var postCodeCoord = lat + ',' + lng;
            getWeather(postCodeCoord);
         })
      });
   };

   function getWeather(postCodeCoord){
      var apiKey = '12784c54971de799bda0eb77db73e3ce';
      var request = https.get('https://api.forecast.io/forecast/' + apiKey + '/' + postCodeCoord + '?units=si', function(response){
         console.log('Satus Code for the Weather: ' + response.statusCode);
         var body = '';
         response.on('data', function(chunk){
            body += chunk;
         });
         response.on('end', function(){
            var weather = JSON.parse(body);
            console.log('The temperature in ' + weather.timezone + ' is ' + weather.currently.temperature + 'C.');
         });
      });
   };


});
