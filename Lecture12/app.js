(function(){
  'use strict';
  angular.module('MsgApp', []).controller('MsgController', MsgController);
  MsgController.$inject = ['$scope', '$filter'];

  function MsgController($scope, $filter) {
    $scope.name = "Sweta";
    $scope.currentImage = "birds";
    $scope.cost = .45;
    $scope.customCost = $filter('currency')(.45, "#blah", 4);
    $scope.messageOfTheDay = function() {
      var msg = "Eat carrots";
      var upperMsg = $filter('uppercase')(msg);
      return upperMsg;
    };
    $scope.changeImage = function() {
      $scope.currentImage = "flower";
    };
  }
})();
