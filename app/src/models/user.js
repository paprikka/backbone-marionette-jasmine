define(function (require) {
  var Backbone = require('backbone');
  Store = require('Backbone.localStorage');
  var UserModel = Backbone.Model.extend({
    // Since we are relying only on localStorage, url method is not needed here
    // Backbone.localStorage is a drop-in replacement, so connecting application
    // with REST API, would require only some minor changes.
    // url:function() {
    //   return '/api/users';
    // },
    // 
    // Namespacing is very important here (I prefer Java-style reverse domain notation):
    localStorage: new Store('pl.paprikka.ContactApp.Users'),
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