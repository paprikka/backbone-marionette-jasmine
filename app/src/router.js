define(function (require) {
  var Backbone = require('backbone');
  Backbone.Marionette = require('backbone.marionette');

  var UsersIndexView = require('src/views/users/index');
  var UsersGetView = require('src/views/users/get');
  var UsersEditView = require('src/views/users/edit');


  var Router = Backbone.Router.extend({

    initialize:function(app) {
      this.application = app;
      console.log('Router::initialize()');
    },
    routes:{
      '!/':'usersIndex',
      '!/users/edit/:id':'usersEdit',
      '!/users/get/:id':'usersGet',
      '*anything':'fourOhFour'
    },

    // TODO: put action methods in controller
    fourOhFour:function() {
      console.log('Router::404');
      // this could be done in a sooo much more simple way in coffeeScript: '=>'
      var self = this;
      _.defer(function() {
        self.navigate('!/');
      });
    },

    usersIndex:function(){
      console.log('Router::usersIndex');
      var usersIndexView = new UsersIndexView();
      this.application.main.show(usersIndexView);
    },
    usersEdit:function(id){
      console.log('Router::usersEdit');
      var usersEditView = new UsersEditView({userId: id});
      this.application.main.show(usersEditView);
    },
    usersGet:function(id){
      console.log('Router::usersGet');
      var usersGetView = new UsersGetView({userId: id});
      this.application.main.show(usersGetView);
    }
  });


  return Router;

});