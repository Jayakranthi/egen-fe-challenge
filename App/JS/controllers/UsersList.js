myApp.controller('UsersList',
    function UsersList($scope, RestSrvc, NgTableParams) {

        RestSrvc.getAllUsers().then(function (data) {
          $scope.userListArr = [];
          var userTableList = {id:'', name: '', email:'', city:'', company:'', address: ''};

          _.each(data, function (value) {
              userTableList = {id:'', pic:'', name: '', email:'', city:'', company:''};
            userTableList.id = value.id;
            userTableList.profilepic = value.profilePic;
               userTableList.pic = value.profilePic ;
               userTableList.name = value.firstName + value.lastName;
               userTableList.email = value.email;
               userTableList.city = value.address.city;
               userTableList.company = value.company.name;
               userTableList.address = value.address.street + value.address.city + value.address.state
                                      + value.address.country + value.address.zip;
            $scope.userListArr.push(userTableList);
          });
         // var self = this;
          var data = $scope.userListArr;
         $scope.tableParams = new NgTableParams({ count: 10}, { counts: [10, 20, 30], dataset: data});
          //console.log($scope.userListArr);
        });
    });

/* ----------------Add User-----------------------------*/

myApp.controller('AddUser',
  function AddUser($scope, RestSrvc,$state,$location) {
    console.log('dshgluid');


    $scope.user = {

      "firstName": "",
      "lastName": "",
      "email": "",
      "address": {
        "street": "",
        "city": "",
        "zip": "",
        "state": "",
        "country": ""
      }
    };

    $scope.submitted = false;
    $scope.message = null;

    $scope.validateAndSubmitForm = function(form) {

      //console.log($scope.user);
      RestSrvc.postAPICall("http://mocker.egen.io/users", $scope.user).then(function (data) {

        $scope.message = 'success';

        $scope.user = {

          "firstName": "",
          "lastName": "",
          "email": "",
          "address": {
            "street": "",
            "city": "",
            "zip": "",
            "state": "",
            "country": ""
          }
        }
        form.$setUntouched();
        form.$setPristine();

        $scope.submitted = false;
      });
    }

  });

/*----------------------------------View User------------------------*/
myApp.controller('ViewUser',
  function ($scope, RestSrvc, $stateParams, $location) {
    $scope.user = $stateParams.user;
    console.log($scope.user);

    $scope.deleteUser = function(id){
      //console.log(id);
      //var data = id;
      var url = "http://mocker.egen.io/users/" + id;
      RestSrvc.deleteUser(url, id).then(function (data) {
        $location.path('userList');
      });
      $location.path('userList');
    }
  });

