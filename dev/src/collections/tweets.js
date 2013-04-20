define(function (require) {
  var Backbone = require('backbone');
  var TweetModel = require('src/models/tweet');

  var TweetsCollection = Backbone.Collection.extend({
    url:'/api/tweets.json',
    model: TweetModel
  });

  return TweetsCollection;
});