(function() {
  'use strict';
  angular.module("MsgApp", []).controller("MsgController", MsgController);
  MsgController.$inject = ['$scope'];

  function MsgController($scope) {
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.name = "Akash";

    $scope.showNumberOfWatchers = function (){
      console.log("# of watchers : " + $scope.$$watchersCount);
    };

    $scope.countOnce = function() {
      $scope.onceCounter = 1;
    };

    $scope.upCounter = function() {
      $scope.counter++;
    };

    $scope.$watch(function() {
      console.log("Digest loop called");
    });
  }
})();
