(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
       .controller('ToBuyController', ToBuyController)
       .controller('AlreadyBroughtController', AlreadyBroughtController)
       .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyController = this;
  toBuyController.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyController.buyItem = function(indexItem) {
    ShoppingListCheckOffService.itemBrought(indexItem);
  };
}

AlreadyBroughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBroughtController(ShoppingListCheckOffService) {
  var alreadyBroughtController = this;
  alreadyBroughtController.items = ShoppingListCheckOffService.getItemsBrought();
}

function ShoppingListCheckOffService() {
  var service = this;
  var itemsToBuy = [
    {
      name: "Milk",
      quantity: 5
    },
    {
      name: "Tea",
      quantity: 4
    },
    {
      name: "Gold",
      quantity: 2
    },
    {
      name: "Silver",
      quantity: 3
    },
    {
      name: "Diamond",
      quantity: 1
    }
  ];
  var itemsBrought = [];

  service.itemBrought = function(itemIndex){
    var item = itemsToBuy[itemIndex];
    itemsBrought.push(item);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsBrought = function(){
    return itemsBrought;
  };

  service.getItemsToBuy = function(){
    return itemsToBuy;
  }
}
})();
