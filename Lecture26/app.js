(function(){
  'use strict';

  angular.module('ShoppingApp', [])
         .controller('ShoppingAppController', ShoppingAppController)
         .service('ShoppingAppService', ShoppingAppService)
         .directive('itemDescription', ItemDescription)
         .directive('listItemDescription', ListItemDescription);

  function ListItemDescription(){
    var ddo = {
      templateUrl: 'listItemDescription.html'
    };
    return ddo;
  }

  function ItemDescription(){
    var ddo = {
      template : '{{item.quantity}} of {{item.name}}'
    };
    return ddo;
  }

  ShoppingAppController.$inject = ['ShoppingAppService'];
  function ShoppingAppController(ShoppingAppService){
    var ctrl = this;
    ctrl.newItemName = "";
    ctrl.newItemQuantity = "";
    ctrl.items = ShoppingAppService.getItems();
    ctrl.addItem = function(){
      ShoppingAppService.addItem(ctrl.newItemName, ctrl.newItemQuantity);
    };
    ctrl.removeItem = function(index){
      ShoppingAppService.removeItem(index);
    }
  }

  function ShoppingAppService(){
    var service = this;

    var items = [];

    service.addItem = function(name, quantity){
      var newItem = {
        name: name,
        quantity: quantity
      };
      items.push(newItem);
    };

    service.removeItem = function(index){
      items.splice(index, 1);
    };

    service.getItems = function(){
      return items;
    };
  }
})();
