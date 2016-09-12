'use strict';

describe('Controller: ComingSoonCtrl', function () {

  // load the controller's module
  beforeEach(module('lucapalombaApp'));

  var ComingSoonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComingSoonCtrl = $controller('ComingSoonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
