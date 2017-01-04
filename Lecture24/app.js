(function(){
  angular.module('ShoppingApp', [])
         .controller('ItemAdderController', ItemAdderController)
         .service('ShoppingService', ShoppingService)
         .service('WeightControlService', WeightControlService);

  ItemAdderController.$inject = ['ShoppingService'];
  function ItemAdderController(ShoppingService){
    var itemAdder = this;
    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";
    itemAdder.items = ShoppingService.getItems();

    itemAdder.addItem = function(){
      ShoppingService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    };

    itemAdder.removeItem = function(index) {
      ShoppingService.removeItem(index);
    };
  }

  ShoppingService.$inject = ['$q', 'WeightControlService'];
  function ShoppingService($q, WeightControlService){
    var service = this;
    var items = [];

    /*
    service.addItem = function(itemName, itemQuantity){
      var namePromise = WeightControlService.checkName(itemName);

      namePromise.then(
         function(success){
          var quantityPromise = WeightControlService.checkQuantity(itemQuantity);
          quantityPromise.then(
            function(success){
              var newItem = {
                name: itemName,
                quantity: itemQuantity
              };
              items.push(newItem);
            },
            function(error){
              console.log(error.message);
            });
      }, function(error){
        console.log(error.message);
      });
      */

      /*
      service.addItem = function(itemName, itemQuantity){
        var namePromise = WeightControlService.checkName(itemName);
        namePromise.then(
          function(success){
            return WeightControlService.checkQuantity(itemQuantity);
          })
          .then(function(success){
            var newItem = {
              name: itemName,
              quantity: itemQuantity
            };
            items.push(newItem);
          })
          .catch(
            function(error){
              console.log(error.message);
          });
      };
      */

    service.addItem = function(itemName, itemQuantity){
      var namePromise = WeightControlService.checkName(itemName);
      var quantityPromise = WeightControlService.checkQuantity(itemQuantity);
      $q.all([namePromise, quantityPromise])
        .then(function(success){
          var newItem = {
            name: itemName,
            quantity: itemQuantity
          };
          items.push(newItem);
        })
        .catch(function(error){
          console.log(error.message);
        });
    };

    service.removeItem = function(itemIndex){
      items.splice(itemIndex, 1);
    };

    service.getItems = function(){
      return items;
    };
  }

  WeightControlService.$inject = ['$q', '$timeout'];
  function WeightControlService($q, $timeout){
    var service = this;

    service.checkQuantity = function(quantity){
      var result = {
        message: ""
      };
      var deferred = $q.defer();
      $timeout(function(){
        if (quantity < 5) {
          deferred.resolve(result);
        } else {
          result.message = "Quantity is too much";
          deferred.reject(result);
        }
      }, 1000);
      return deferred.promise;
    };

    service.checkName = function(name){
      var result = {
        message: ""
      };
      var deferred = $q.defer();
      $timeout(function(){
        if (name.indexOf("Cookie") === -1){
          deferred.resolve(result);
        } else {
          result.message = "Name contains cookie";
          deferred.reject(result);
        }
      }, 3000);
      return deferred.promise;
    };
  }
})();
