(function() {
'use strict';

angular.module('NameCalculatorApp', [])
.controller('NameCalculatorAppController', function($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNameValue = function (){
    $scope.totalValue = calculateValueOfAString($scope.name);
  };

  function calculateValueOfAString(string){
    var totalNameValue = 0;
    for (var i = 0; i< string.length; i++) {
      totalNameValue += string.charCodeAt(i);
    }
    return totalNameValue;
  }
});
})();
