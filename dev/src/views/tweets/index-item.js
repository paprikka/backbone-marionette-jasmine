define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var TweetsIndexItemViewTemplate = require('text!src/tpl/tweets/index-item.tpl');


  var TweetsIndexItemView = Backbone.Marionette.ItemView.extend({
    events:{
      'click .user-remove-btn': 'onUserRemoveClick'
    },
    className: 'tweets-index-item',
    template: Handlebars.compile(TweetsIndexItemViewTemplate),
    onUserRemoveClick:function (e) {
      debugger
      this.model.destroy();
    }
  });

  return TweetsIndexItemView;

});