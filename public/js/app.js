var wbApp = angular.module("wbApp", ["xeditable"]);
wbApp.controller('FirstController', function($scope) {   
  $scope.first = 'Some';
  $scope.last = 'One';
  $scope.heading = 'Message: ';
  $scope.updateMessage = function() {
    $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
  };
});

wbApp.controller('FormCtrl', function($scope) {
  $scope.user = {
    name: 'awesome user'
  };  
});

wbApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});