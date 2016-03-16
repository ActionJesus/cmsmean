
(function() {
  "use strict";
  
  function testService($http) {
    
    var getTest = function(){
       var test = $resource("/api/admin/test/:id", {id: "@_id"});
    }
    
    return {
      getTest: getTest
    }
    
  }

  angular
    .module("admin.test")
    .factory("testService", testService);
  
}())