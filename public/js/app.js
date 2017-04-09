var wbApp = angular.module("wbApp", ["xeditable"]);

wbApp.controller('EditableRowCtrl', function($scope, $filter, $http) {
  $scope.users = [
    {id: 1, name: 'Category1'},
    {id: 2, name: 'Category2'},
    {id: 3, name: 'Category3'}
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