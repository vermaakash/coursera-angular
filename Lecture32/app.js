(function(){
  'use strict';

  angular.module('ShoppingApp', [])
         .controller('ShoppingAppController', ShoppingAppController)
         .service('ShoppingAppService', ShoppingAppService)
         .controller('ShoppingListDescriptionDirectiveController', ShoppingListDescriptionDirectiveController)
         .directive('shoppingListDescription', ShoppingListDescription);

  function ShoppingListDescription(){
    var ddo = {
      templateUrl: 'shoppingList.html',
      scope: {
        items: '<',
        title: '@',
        removeMethod: '&'
      },
      link : ShoppingListDescriptionLink,
      controller: 'ShoppingListDescriptionDirectiveController as list',
      bindToController: true,
      transclude: true
    };
    return ddo;
  }

  function ShoppingListDescriptionLink(scope, element, attrs, controller){
    scope.$watch('list.checkForCookies()', function(newVal, oldVal){
      if (newVal === true){
        displayCookieWarning();
      } else {
        removeCookieWarning();
      }
    });

    function displayCookieWarning(){
      /*
      var errorTag = element.find('div');
      errorTag.css('display', 'block');
      */
      var errorTag = element.find('div.error');
      errorTag.slideDown(900);
    }

    function removeCookieWarning(){
      /*
      var errorTag = element.find('div');
      errorTag.css('display', 'none');
      */
      var errorTag = element.find('div.error');
      errorTag.slideUp(900);
    }
  }

  function ShoppingListDescriptionDirectiveController(){
    var list = this;
    list.checkForCookies = function() {
      for(var i=0; i<list.items.length; i++) {
        if (list.items[i].name.indexOf('Cookie') !== -1){
          return true;
        }
      }
      return false;
    };
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
