define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var UsersIndexEmptyViewTemplate = require('text!src/tpl/users/index-empty.tpl');


  var UsersIndexEmptyView = Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    className: 'users-index-empty',
    template: Handlebars.compile(UsersIndexEmptyViewTemplate)
  });

  return UsersIndexEmptyView;

});