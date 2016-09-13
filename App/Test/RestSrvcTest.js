/**
 * Created by jkatam on 9/13/2016.
 */


describe('getAllUsers()', function() {

  var RestSrvcS, httpBackend;

  beforeEach(module('myApp'));

  beforeEach(inject(function (RestSrvc, $httpBackend) {
    RestSrvcS = RestSrvc;
    httpBackend = $httpBackend;
    //console.log(RestSrvc);
  }));


 it('gets the list of users', function() {


   response =
   httpBackend.expectGET('http://mocker.egen.io/users/bulk').respond(200,
      [{
         "firstName": "Thomas", "lastname": 'john', "email": 'hohn@gmail.com' },
         {"firstName": "Jane", "lastname": 'Philips', "email": 'jane@gmail.com' }]
     );


   var users;
   var promise = RestSrvcS.getAllUsers();

   promise.then(function(userData) {
     users = userData;
   });

   httpBackend.expectGET('templates/UserList.html').respond(200);
   httpBackend.flush(); // Flush pending requests

   expect(users.length).toEqual(2);
 });



 });
