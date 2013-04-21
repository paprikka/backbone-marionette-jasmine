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
    events:{
      'click .users-index-add-btn': 'onUserAddClick'
    },
    initialize:function() {
      this.collection = new UsersCollection();
      this.collection.create({
            // "id":1,
            "firstName": "Rafal",
            "lastName": "Pastuszak",
            "twitterHandle": "paprikkaStudio",
            "avatarUrl": "/files/1.png",
            "phone":"+43505164772",
            "email":"rafal@paprikka.pl",
            "currentPosition":"designer, front-end developer",
            "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          });
      this.collection.fetch();
    },
    className: 'users-index-page',
    // event callbacks:
    onUserAddClick:function (e) {
      this.collection.create({});
    }
  });

  return UsersIndexView;

});