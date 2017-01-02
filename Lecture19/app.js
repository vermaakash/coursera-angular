(function(){
  'use strict';

  angular.module('ControllerApp', []).controller('ParentController1', ParentController1)
                                     .controller('ChildController1', ChildController1)
                                     .controller('ParentController2', ParentController2)
                                     .controller('ChildController2', ChildController2);

  ParentController1.$inject = ['$scope'];
  function ParentController1($scope){
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 10;
  }

  ChildController1.$inject = ['$scope'];
  function ChildController1($scope){
    console.log("$scope.parentValue : ", $scope.parentValue);
    console.log("Child : $scope", $scope);

    $scope.parentValue = 5;
    console.log("$scope.parentValue : ", $scope.parentValue);
    console.log("Child : $scope", $scope);

    console.log("$scope.pc.parentValue : ", $scope.pc.parentValue);
    $scope.pc.parentValue = 50;
    console.log("$scope.pc.parentValue : ", $scope.pc.parentValue);
    console.log("Child : $scope", $scope);
  }

  function ParentController2() {
    var parent = this;
    parent.value = 1;
  }

  function ChildController2() {
    var child = this;
    child.value = 5;
  }
})();
