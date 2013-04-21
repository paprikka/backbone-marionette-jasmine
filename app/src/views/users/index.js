define(function (require) {
  BM = require('backbone.marionette');

  var UsersIndexItemView = require('src/views/users/index-item');
  var UsersCollection = require('src/collections/users');
  var UsersIndexViewTemplate = require('text!src/tpl/users/index.tpl');
  var Handlebars = require('handlebars');

  var UsersIndexView = BM.CompositeView.extend({
    itemViewContainer: '.users-index-list',
    itemView: UsersIndexItemView,
    template: Handlebars.compile(UsersIndexViewTemplate),
    initialize:function() {
      this.collection = new UsersCollection();
      this.collection.fetch();
    },
    className: 'users-index-page'
  });

  return UsersIndexView;

});