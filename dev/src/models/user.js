define(function (require) {
  var Backbone = require('backbone');

  var UserModel = Backbone.Model.extend({
    url:function() {
      return '/api/users/1.json';
    },
    defaults:{
      firstName:  'John',
      lastName:   'Doe'
    },
    toJSON:function() {
      var attrs = _.clone(this.attributes);
      attrs.fullName = attrs.firstName + " " + attrs.lastName;
      attrs.initials = attrs.firstName.charAt(0) + attrs.lastName.charAt(0);
      return attrs;
    }
  });


  return UserModel;
});