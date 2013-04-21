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
    },
    serializeData:function(){
      var attrs = this.model.toJSON();
      if(attrs.email || attrs.phone || attrs.twitterHandle){
        attrs.hasContactInfo = true;
      }

      return attrs;
    }
  });
  return UserSingleDescriptionView;
});