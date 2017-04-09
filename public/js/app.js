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

wbApp.controller('EditableRowCtrl', function($scope, $filter, $http) {
  $scope.users = [
    {id: 1, name: 'awesome user1'},
    {id: 2, name: 'awesome user2'},
    {id: 3, name: 'awesome user3'}
  ]; 

  $scope.saveUser = function(data, id) {
    angular.extend(data, {id: id});
  };

  $scope.removeUser = function(index) {
    $scope.users.splice(index, 1);
  };

  $scope.addUser = function() {
    $scope.inserted = {
      id: $scope.users.length+1,
      name: '',
    };
    $scope.users.push($scope.inserted);
  };
});

wbApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});