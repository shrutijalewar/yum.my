'use strict';
var Category = require('./category'),
    async = require('async');

function Bookmark(o){
  this.name = o.name;
  this.url = o.url;
  this.userId = o.userId;
  this.categoryId = o.categoryId;
  this.date = new Date();
}

Object.defineProperty(Bookmark, 'collection', {
  get: function(){return global.mongodb.collection('bookmarks');}
});


Bookmark.create = function(o, cb){
  var b = new Bookmark(o);
  Bookmark.collection.save(b, function(err, bookmark){
    addCategory(bookmark, cb);
  });
};

Bookmark.all = function(userId, cb){
  Bookmark.collection.find({userId:userId}).toArray(function(err, bookmarks){
    async.map(bookmarks, addCategory, cb);
  });
};

module.exports = Bookmark;

function addCategory(bookmark, cb){
  Category.findById(bookmark.categoryId, function(err, category){
    bookmark.category = category;
  });
}
