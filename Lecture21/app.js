(function(){
  'use strict';

  angular.module('ShoppingApp', [])
         .controller('ItemAdderController', ItemAdderController)
         .factory('ShoppingServiceFactory', ShoppingServiceFactory);

  ItemAdderController.$inject = ['ShoppingServiceFactory'];
  function ItemAdderController(ShoppingServiceFactory){
    var itemAdder = this;
    var shoppingService = ShoppingServiceFactory.getSomeService(3);
    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";
    itemAdder.items = shoppingService.getItems();

    itemAdder.addItem = function(){
      try {
        shoppingService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      } catch(error){
        itemAdder.error = error;
      }

    };

    itemAdder.removeItem = function(itemIndex){
      shoppingService.removeItem(itemIndex);
    };

    itemAdder.items = shoppingService.getItems();
  }

  function ShoppingService(maxItems) {
    var service = this;
    var items = [];

    service.addItem = function(itemName, quantity){
      if ((maxItems !== undefined) && (items.length >= maxItems)) {
        throw new Error("Max items Reached");
      }
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
  /*
  function ShoppingServiceFactory(){
    return function(maxItems) {
      return new ShoppingService(maxItems);
    };
  }*/

  function ShoppingServiceFactory(){
    return {
      getSomeService: function(maxItems){
        return new ShoppingService(maxItems);
      }
    };
  }

})();
