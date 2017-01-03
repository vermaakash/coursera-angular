(function(){
  'use strict';

  angular.module('ShoppingApp', [])
         .controller('ItemAdderController', ItemAdderController)
         .provider('ShoppingService', ShoppingServiceProvider)
         .config(Config);

  Config.$inject = ['ShoppingServiceProvider'];
  function Config(ShoppingServiceProvider) {
    ShoppingServiceProvider.defaults.maxItems = 3;
  }

  ItemAdderController.$inject = ['ShoppingService'];
  function ItemAdderController(ShoppingService){
    var itemAdder = this;
    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";
    itemAdder.items = ShoppingService.getItems();

    itemAdder.addItem = function(){
      try {
        ShoppingService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        itemAdder.error = "";
      } catch(error){
        itemAdder.error = error;
      }

    };

    itemAdder.removeItem = function(itemIndex){
      ShoppingService.removeItem(itemIndex);
    };
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

  function ShoppingServiceProvider(){
    var provider = this;
    provider.defaults = {
      maxItems: 4
    };
    provider.$get = function(){
      return new ShoppingService(provider.defaults.maxItems);
    };
  }

})();
