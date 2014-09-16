(function(){
  'use strict';

  angular.module('yummy')
  .controller('BookmarksCtrl', ['$scope', 'Category', 'Bookmark', function($scope, Category, Bookmark){
    $scope.categories = [];
    $scope.category = {};
    $scope.bookmarks = [];
    $scope.bookmark = {};

    Bookmark.all().then(function(response){
      $scope.bookmarks = response.data.bookmarks;
    });
    $scope.addBookmark = function(){
      Bookmark.create($scope.bookmark).then(function(response){
        $scope.bokmarks.push(response.data.bookmark);
        $scope.bookmark = {};
      });
    };
    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });
    $scope.addCategory = function(){
      Category.create($scope.category).then(function(response){
        $scope.categories.push(response.data.category);

        $scope.category = {};
      });
    };
  }]);
})();

