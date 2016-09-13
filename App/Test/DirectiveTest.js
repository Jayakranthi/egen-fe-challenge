/**
 * Created by jkatam on 9/13/2016.
 */

describe('directive: sidebar', function() {
  var element, scope;

  beforeEach(module('myApp'));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();

    element =
      '<div sidebar-directive="true"></div>';

    element = $compile(element)(scope);
    scope.$digest();
  }));

  describe('with the first given value', function() {


    it("should contain class sidebar", function() {
      //console.log(element);
      expect(element.attr('class')).toBe('ng-scope sidebar show');

    });


  });

});
