define(function (require) {
  var Backbone = require('backbone');
  var UserModel = require('src/models/user');

  var UsersCollection = Backbone.Collection.extend({
    url:'/api/users.json',
    model: UserModel
  });

  return UsersCollection;
});