define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');
  var UserModel         = require('src/models/user');
  var UsersSingleViewTemplate = require('text!src/tpl/users/get.tpl');
  var TweetsView = require('src/views/tweets/index');

  var UsersSingleView = Backbone.Marionette.CompositeView.extend({
    className: 'users-get-container',
    template: Handlebars.compile(UsersSingleViewTemplate),
    itemView: TweetsView,
    initialize:function(options){
      this.model = new UserModel({id:options.userId});
      this.model.fetch();
    }
  });

  return UsersSingleView;

});