'use strict';

angular.module('ApiTesting')
.controller('apiCtrl', function($scope){



   console.log(weather.currently);
});

var weather =  require('../api/weather.js');
var postCode = process.argv.slice(2);
weather.getPostCode(postCode);
