(function() {
  'use strict';

  angular.module('BindingApp', []).controller('BindingController', BindingController);
  BindingController.$inject = ['$scope'];

  function BindingController($scope) {
    $scope.firstName = "Akash";
    //$scope.fullName = "";

    $scope.setFullName = function(){
      $scope.fullName = $scope.firstName + " " +  "Verma";
    };

    $scope.logFirstName = function(){
      console.log("Firstname : " + $scope.firstName);
    };

    $scope.logFullName = function(){
      console.log("Fullname : " + $scope.fullName);
    };
  }
})();
