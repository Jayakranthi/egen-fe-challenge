
'use strict';
var myApp = angular.module('myApp', ['ui.router','ngTable','ngMessages'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/userList");
      $stateProvider
        .state('userList', {
          url: "/userList",
          templateUrl: "templates/UserList.html",
          controller: 'UsersList'
        })
        .state('addUser', {
          url: "/addUser",
          templateUrl: "templates/AddUser.html",
          controller: 'AddUser'
        })
        .state('viewUser', {
          url: "/viewUser",
          params: {

            user: {

            }
          },
          templateUrl: "templates/ViewUser.html",
          controller: 'ViewUser'
        })
    }).run(function($rootScope){
          $rootScope.class = "margin";
          $rootScope.state = false;
          $rootScope.toggleState = function() {
            $rootScope.state = !$rootScope.state;
            if ($rootScope.class === "margin")
              $rootScope.class = "navigation-toggle";
            else
              $rootScope.class = "margin";
          };

     });

