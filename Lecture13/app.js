(function() {
  'use strict';
  angular.module('MsgApp', []).controller('MsgController', MsgController)
                              .filter('loves', LovesFilterFactory)
                              .filter('custom', CustomFilterFactory);
  MsgController.$inject = ['$scope', 'lovesFilter', 'customFilter'];

  function MsgController($scope, lovesFilter) {
    $scope.name = "Akash Verma";
    $scope.messageOfTheDay = function(){
       var msg = "Akash likes Healthy food!";
       return msg;
    };
    $scope.messageWithLoves = function(){
       var msg = "Akash likes Healthy food!";
       msg = lovesFilter(msg);
       return msg;
    };
  }

  function LovesFilterFactory() {
    return function(input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    };
  }

  function CustomFilterFactory() {
    return function(input, source, destination) {
      input = input || "";
      input = input.replace(source, destination);
      return input;
    };
  }
})();
