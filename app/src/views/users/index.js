define(function (require) {
  BM = require('backbone.marionette');

  var UsersIndexItemView = require('src/views/users/index-item');
  var UsersCollection = require('src/collections/users');


  var UsersIndexView = BM.CollectionView.extend({
    itemView: UsersIndexItemView,
    initialize:function() {
      this.collection = new UsersCollection();
      this.collection.fetch();
    },
    className: 'users-index-page'
  });

  return UsersIndexView;

});