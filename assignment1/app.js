(function(){
  'use strict';
  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchOrder = "";
    $scope.lunchOrderResult = "";

    $scope.displayLunchOrderResult = function() {
      var numberOfItems = getNumberOfCommaSeparatedNonNullStrings($scope.lunchOrder);
      var lunchOrderResultFontColor = "";
      var lunchOrderResultBorderColor = "";
      var result = "";
      if (numberOfItems === 0) {
          result = "Please enter data first";
          lunchOrderResultFontColor = "red";
          lunchOrderResultBorderColor = "red";
      } else if (numberOfItems <= 3) {
          result = "Enjoy!";
          lunchOrderResultFontColor = "green";
          lunchOrderResultBorderColor = "green";
      } else {
          result = "Too much!";
          lunchOrderResultFontColor = "green";
          lunchOrderResultBorderColor = "green";
      }
      $scope.lunchOrderResult = result;
      $scope.lunchOrderResultFontColor = lunchOrderResultFontColor;
      $scope.lunchOrderResultBorderColor = lunchOrderResultBorderColor;
    };
  }

  function getNumberOfCommaSeparatedNonNullStrings(string){
    var splits = string.split(',');
    var splitsLength = splits.length;
    var number = 0;
    for (var i = 0; i < splitsLength; i++) {
      if (splits[i].trim()) {
          number = number + 1;
      }
    }
    return number;
  }

})();
