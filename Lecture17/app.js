(function(){
  'use strict';

  var shoppingList1 = ["Hello", "Mello", "Gello"];

  var shoppingList2 = [
    {
      name: "Milk",
      quantity : 2
    },
    {
      name: "Tea",
      quantity : 4
    }
  ];

  angular.module('RepeatApp', []).controller('RepeatController', RepeatController);
  RepeatController.$inject = ['$scope'];

  function RepeatController($scope) {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;
    $scope.addItem = function() {
      var x = {name: $scope.newItemName, quantity: $scope.newItemQuantity};
      $scope.shoppingList2.push(x);
    };
  }
})();
