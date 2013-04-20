define(function (require) {
  var Backbone = require('backbone');
  Backbone.Marionette = require('backbone.marionette');

  var UsersIndexView = require('src/views/users/index');
  var UsersGetView = require('src/views/users/get');


  var Router = Backbone.Router.extend({
    // TODO: add controller
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

    fourOhFour:function() {
      console.log('Router::404');
      // this could be done in a sooo much more simple way in coffeeScript: '=>'
      var self = this;
      _.defer(function() {
        self.navigate('!/');
      });
    },

    usersIndex:function(){
      console.log('usersIndex');
      var usersIndexView = new UsersIndexView();
      this.application.main.show(usersIndexView);
      usersIndexView.render();
    },
    usersEdit:function(){
      console.log('usersEdit');
    },
    usersGet:function(id){
      console.log('usersGet');
      var usersGetView = new UsersGetView({userId: id});
      this.application.main.show(usersGetView);
      usersGetView.render();
    }
  });


  return Router;

});