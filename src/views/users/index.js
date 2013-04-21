define(function (require) {
  Marionette = require('backbone.marionette');

  var UsersIndexItemView      = require('src/views/users/index-item');
  var UsersIndexEmptyView      = require('src/views/users/index-empty');
  var UsersCollection         = require('src/collections/users');
  var UsersIndexViewTemplate  = require('text!src/tpl/users/index.tpl');
  var Handlebars              = require('handlebars');

  var UsersIndexView = Marionette.CompositeView.extend({
    itemViewContainer: '.users-index-list',
    itemView: UsersIndexItemView,
    emptyView: UsersIndexEmptyView,
    template: Handlebars.compile(UsersIndexViewTemplate),
    events:{
      'click .users-index-add-btn': 'onUserAddClick'
    },
    initialize:function() {
      this.collection = new UsersCollection();
      this.collection.fetch();
    },
    className: 'users-index-page',
    // event callbacks:
    onUserAddClick:function (e) {
      this.collection.create({}, {wait: true});
    },

    // Override append method for reverse-order sorting:
    // This way we don't have to define comparators and additional sorting methods in collections / models.
    appendHtml: function(collectionView, itemView){
      collectionView.$el.find(this.itemViewContainer).prepend(itemView.el);
    }
  });

  return UsersIndexView;

});