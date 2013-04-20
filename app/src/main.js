define(function (require) {
  var App = require('src/application');
  var $ = require('jquery');
  $(function() {
    App.start();
    console.log('Application::initialized');
  });
});