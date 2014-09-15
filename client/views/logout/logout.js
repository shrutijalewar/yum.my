(function(){
  'use strict';

  angular.module('yummy')
  .controller('LogoutCtrl', ['$location', 'User' , function($location, User){
    User.logout().then(function(){
      toastr.success('You are logged out');
      $location.path('/');
    });
  }]);
})();

