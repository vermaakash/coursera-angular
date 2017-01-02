(function() {
  'use strict';
  var shoppingList = ["Hello", "MilkMan", "Gello", "TonedMilk"];

  angular.module('RepeatApp', []).controller('RepeatController', RepeatController);
  RepeatController.$inject = ['$scope'];

  function RepeatController($scope) {
    $scope.shoppingList = shoppingList;
  }
})();
