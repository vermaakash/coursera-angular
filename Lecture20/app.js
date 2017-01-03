(function(){
  'use strict';

  angular.module('ShoppingApp', [])
         .controller('ItemAdderController', ItemAdderController)
         .controller('ShowItemsController', ShowItemsController)
         .service('ShoppingService', ShoppingService);

  ItemAdderController.$inject = ['ShoppingService'];
  function ItemAdderController(ShoppingService){
    var itemAdder = this;
    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function(){
      ShoppingService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    };
  }

  ShowItemsController.$inject = ['ShoppingService'];
  function ShowItemsController(ShoppingService){
    var showItems = this;
    showItems.items = ShoppingService.getItems();

    showItems.removeItem = function(itemIndex){
      ShoppingService.removeItem(itemIndex);
    };
  }

  function ShoppingService() {
    var service = this;
    var items = [];

    service.addItem = function(itemName, quantity){
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    };

    service.removeItem = function(itemIndex){
      items.splice(itemIndex, 1);
    };

    service.getItems = function() {
      return items;
    };
  }
})();
