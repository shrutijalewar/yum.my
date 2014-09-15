(function(){
  'use strict';

  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope','$location', 'User' , function($scope, $location, User){

    $scope.user = {};

    function success(response){
      toastr.success('Hurray you are in!');
      $location.path('/login');
    }
    function failure(response){
      toastr.error('Oops try again!');
      $scope.user = {};
    }


    $scope.register=function(){
      User.register($scope.user).then(success, failure);
      $scope.user = {};

    };
  }]);
})();

