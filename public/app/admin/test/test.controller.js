(function() {
  "use strict";
  
  angular
    .module("admin.test", [])
    .controller("testController", testController);
  
  function testController($scope) {
    $scope.visitors = [];
    $scope.test = "win";
   
  }
  
  
}())