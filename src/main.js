define(function (require) {
  var App = require('src/application');
  var $ = require('jquery');
  $(function() {
    function mockLoadingDelay(){
      App.start();
      console.log('Application::initialized');
    };

    setTimeout(mockLoadingDelay, 900);
  });
});