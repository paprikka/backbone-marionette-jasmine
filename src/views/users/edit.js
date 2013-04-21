define(function (require) {
  var Backbone                          = require('backbone');
  Backbone.Marionette                   = require('backbone.marionette');
  var Handlebars                        = require('handlebars');
  var UserEditDescriptionViewTemplate   = require('text!src/tpl/users/edit.tpl');
  var UserModel                         = require('src/models/user');


  var UserEditDescriptionView = Backbone.Marionette.ItemView.extend({
    template: Handlebars.compile(UserEditDescriptionViewTemplate),
    modelEvents:{
      'change': 'render'
    },

    ui:{
      firstName:        ".user-edit-first-name",
      lastName:         ".user-edit-last-name",
      avatarUrl:        ".user-edit-avatar-url",
      currentPosition:  ".user-edit-current-position",
      description:      ".user-edit-description",
      phone:            ".user-edit-phone",
      email:            ".user-edit-email",
      twitterHandle:          ".user-edit-twitter"
    },

    events:{
      'click .save-and-close-btn': 'onSaveAndCloseClick'
    },

    className:'users-edit-page',
    initialize:function (options) {
      this.model = new UserModel({id:options.userId});
      this.model.fetch();
      console.log('UsersEditView::initialize()');

    },
    // event handlers:
    onSaveAndCloseClick:function(){
      var props = {};

      props.firstName         = this.ui.firstName.val()
      props.lastName          = this.ui.lastName.val()
      props.avatarUrl         = this.ui.avatarUrl.val()
      props.currentPosition   = this.ui.currentPosition.val()
      props.description       = this.ui.description.val()
      props.phone             = this.ui.phone.val()
      props.email             = this.ui.email.val()
      props.twitterHandle           = this.ui.twitterHandle.val()

      this.model.save(props);

      window.location.hash = '#!/';
    }
  });
  return UserEditDescriptionView;
});