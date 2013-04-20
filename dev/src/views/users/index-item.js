define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var UsersIndexItemViewTemplate = require('text!src/tpl/users/index-item.tpl');


  var UsersIndexItemView = Backbone.Marionette.ItemView.extend({
    className: 'users-index-item',
    template: Handlebars.compile(UsersIndexItemViewTemplate)
  });

  return UsersIndexItemView;

});