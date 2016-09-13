/**
 * Created by jkatam on 9/12/2016.
 */

var Data = [
  { "firstName": "Thomas", "lastname": 'john', "email": 'hohn@gmail.com' },
];

describe('AddUser', function() {
  var httpBackend, _Restsrvc;
  var cntrl;
  var $scope;
  var users;
  var form;

  beforeEach(module('myApp'));

  beforeEach(inject(function ($rootScope, $httpBackend, $controller, RestSrvc,  $compile) {
    $scope = $rootScope.$new();
    httpBackend = $httpBackend;
    _Restsrvc = RestSrvc;
    //console.log(_Restsrvc);
   // console.log(cntrlscope);

    users = Data;

    spyOn(RestSrvc, 'postAPICall').and.callThrough();

    ctrl = $controller('AddUser', {$scope: $scope,RestSrvc:_Restsrvc });


    var element = angular.element(
      '<form name="form">' +
      '<input type="text" id="fname" class="form-control" required name="firstName" ng-model = "user.firstName" placeholder="First Name">' +
      '</form>'
    );

    $compile(element)($scope);
    form = $scope.form;



  }));

  it("Should call post request to add user info", function () {
    $scope.user = {"firstName": "Jane", "lastname": 'Philips', "email": 'jane@gmail.com' };
    httpBackend.expectPOST('http://mocker.egen.io/users', $scope.user).respond(200);
    httpBackend.expectGET('templates/UserList.html').respond(200);

    //httpBackend.expectGET('templates/AddUser.html').respond(200);

    $scope.validateAndSubmitForm(form);
    expect(_Restsrvc.postAPICall).toHaveBeenCalled();
    httpBackend.flush();
    expect($scope.message).toBe('success');
  });


})
