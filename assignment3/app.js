(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
         .controller('NarrowItDownController', NarrowItDownController)
         .controller('FoundItemsController', FoundItemsController)
         .service('MenuSearchService', MenuSearchService)
         .directive('foundItems', FoundItems);

  function FoundItems(){
    var ddo = {
      templateUrl: 'itemList.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: 'FoundItemsController as list',
      bindToController: true,
      link: FoundItemsLink
    };
    return ddo;
  }

  function FoundItemsLink(scope, element, attrs, controller) {
    scope.$watch('list.checkExistence()', function(newVal, oldVal){
      if (newVal === true){
        var tag = element.find('div');
        tag.css('display', 'none');
      } else {
        var tag = element.find('div');
        tag.css('display', 'block');
      }
    });
  }

  function FoundItemsController(){
    var list = this;
    list.checkExistence = function(){
      if (list.items === undefined) {
        return true;
      }
      for(var i=0; i<list.items.length; i++) {
        return true;
      }
      return false;
    }
  }

  NarrowItDownController.$inject = ['MenuSearchService', '$q'];
  function NarrowItDownController(MenuSearchService, $q){
    var ctrl = this;
    ctrl.searchTerm = "";
    ctrl.items = undefined;

    ctrl.removeItem = function(index){
      ctrl.items.splice(index, 1);
    };

    ctrl.searchMenuForItem = function(){
      if (!ctrl.searchTerm) {
        ctrl.items = [];
      } else {
        var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        promise.then(function(response){
          ctrl.items = response;
        });
      }
    };
  }

  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      var deferred = $q.defer();
      $http({
          method: "GET",
          url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function success(response){
        var allItems = response.data.menu_items;
        var foundItems = [];
        for(var i = 0; i < allItems.length; i++) {
          var itemDescription = allItems[i].description.toLowerCase();
          if (itemDescription.indexOf(searchTerm.toLowerCase()) !== -1){
            foundItems.push(allItems[i]);
          }
        }
        deferred.resolve(foundItems);
      });
      return deferred.promise;
      };
  }
})();
