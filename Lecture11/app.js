(function(){
  'use strict';
  angular.module('MsgApp', []).controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Akash";
    $scope.currentImage = "birds";
    $scope.messageOfTheDay = function() {
      return "Eat Green Veggies";
    };
    $scope.changeImage = function() {
      $scope.currentImage = "flower";
    };
  }
})();
