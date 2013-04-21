define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  var Handlebars            = require('handlebars');
  var UserModel         = require('src/models/user');
  var UsersSingleViewTemplate = require('text!src/tpl/users/get.tpl');
  var TweetsView = require('src/views/tweets/index');
  var UserSingleDescriptionView = require('src/views/users/get-description');


  var UsersSingleView = Backbone.Marionette.Layout.extend({
    className: 'users-get-container',
    template: Handlebars.compile(UsersSingleViewTemplate),
    // itemView: TweetsView,
    regions:{
      desc: '.user-get-description'
    },

    initialize:function(options){
      this.model = new UserModel({id:options.userId});
      this.model.fetch();
      console.log('UsersSingleView::initialize()');
    },
    onRender:function() { 
      console.log('UsersSingleView::onRender()');
      this.desc.show(new UserSingleDescriptionView({model: this.model}));
      
    }
  });

  return UsersSingleView;

});