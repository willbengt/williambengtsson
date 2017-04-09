var wbApp = angular.module("wbApp", []);
wbApp.controller('FirstController', function($scope) {   
  $scope.first = 'Some';
  $scope.last = 'One';
  $scope.heading = 'Message: ';
  $scope.updateMessage = function() {
    $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
  };
});