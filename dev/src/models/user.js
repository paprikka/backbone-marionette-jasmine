define(function (require) {
  var Backbone = require('backbone');

  var UserModel = Backbone.Model.extend({
    url:function() {
      return '/api/users/1.json';
    },
    defaults:{
      firstName: 'John',
      lastName: 'Doe'
    }
  });


  return UserModel;
});