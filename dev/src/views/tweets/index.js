define(function (require) {
  BM = require('backbone.marionette');

  var TweetsIndexItemView = require('src/views/tweets/index-item');
  var TweetsCollection = require('src/collections/tweets');


  var TweetsIndexView = BM.CollectionView.extend({
    itemView: TweetsIndexItemView,
    initialize:function() {
      console.log('TweetsView::initialize()');
      this.collection = new TweetsCollection();
      this.collection.fetch();
    },
    className: 'tweets-index'
  });

  return TweetsIndexView;

});