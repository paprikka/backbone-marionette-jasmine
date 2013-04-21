define(function (require) {
  var Backbone                            = require('backbone');
  Backbone.Marionette                     = require('backbone.marionette');
  var Handlebars                          = require('handlebars');
  var UserSingleDescriptionViewTemplate   = require('text!src/tpl/users/get-description.tpl');


  var UserSingleDescriptionView = Backbone.Marionette.ItemView.extend({
    template: Handlebars.compile(UserSingleDescriptionViewTemplate),
    modelEvents:{
      'change': 'render'
    },
    initialize:function (options) {
      this.model = options.model;
    }
  });
  return UserSingleDescriptionView;
});