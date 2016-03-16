(function(){
  "use strict";
  
  angular
    .module("admin", ["admin.dashboard", "admin.test", "admin.users", "admin.content", "admin.contentItem", "ngResource", "ngRoute"])
    .config(function($routeProvider){
        	$routeProvider
        		.when('/users/', {
        			templateUrl: './users/users.view.html',
        			controller: 'usersController'
        		})
        		.when('/content/item/:id', {
        			templateUrl: './content/contentItem.view.html',
        			controller: 'contentItemController'
        		})
        		.when('/content/item/', {
        			templateUrl: './content/contentItem.view.html',
        			controller: 'contentItemController'
        		})
        		.when('/content/', {
        			templateUrl: './content/content.view.html',
        			controller: 'contentController'
        		})
                  .when("/test/", {
                    templateUrl: './test/test.view.html',
                    controller: 'testController'

                })
        		.when("/", {
        			templateUrl: './dashboard/dashboard.view.html',
        			controller: 'dashboardController'
        		})

        		.otherwise({ redirectTo: '/' });
        });
  
}());