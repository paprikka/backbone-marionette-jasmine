define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var UsersIndexItemViewTemplate = require('text!src/tpl/users/index-item.tpl');


  var UsersIndexItemView = Backbone.Marionette.ItemView.extend({
    events:{
      'click .user-remove-btn':'onUserRemoveClick'
    },
    tagName: 'li',
    className: 'users-index-item',
    template: Handlebars.compile(UsersIndexItemViewTemplate),
    onUserRemoveClick: function(){
      this.model.destroy();
    }
  });

  return UsersIndexItemView;

});