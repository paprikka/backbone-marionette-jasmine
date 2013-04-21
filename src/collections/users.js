define(function (require) {
  var Backbone = require('backbone');
  var UserModel = require('src/models/user');
  Store = require('Backbone.localStorage');
  var UsersCollection = Backbone.Collection.extend({
    url:'/api/users.json',
    localStorage: new Store('pl.paprikka.ContactApp.Users'),
    model: UserModel,
    initialize:function(){

    }
  });

  return UsersCollection;
});