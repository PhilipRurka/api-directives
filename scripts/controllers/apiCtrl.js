'use strict';

angular.module('ApiTesting')
.controller('apiCtrl', function($scope){



});

var weather =  require('../api/weather.js');
var postCode = process.argv.slice(2);
weather.getPostCode(postCode);

console.log(weather.currently);
