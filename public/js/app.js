var wbApp = angular.module('wbApp', ['xeditable', 'ui.router', 'ui.bootstrap']);

/*wbApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/info', {templateUrl: 'views/layout.erb', controller: DropdownCtrl}).
      otherwise({redirectTo: '/info'});

    $locationProvider.html5Mode(true);

}]);*/

wbApp.controller('DropdownCtrl', function($scope) {
  $scope.status = {
    isopen: false
  };
});



wbApp.controller('EditableRowCtrl', function($scope) {
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

wbApp.controller('EditableRowCtrl2', function($scope) {
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