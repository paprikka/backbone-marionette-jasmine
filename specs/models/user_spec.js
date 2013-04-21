define(['src/models/user'],function (UserModel) {
  describe("A User Model", function () {
    it("should exist", function() {
      expect(UserModel).toBeDefined();
    });

    it("should default name to John Doe", function() {
      var newUser = new UserModel();
      expect(newUser.get('firstName')).toBe('John');
      expect(newUser.get('lastName')).toBe('Doe');
    });

    it("should return the full name in templates", function() {
      var newUser = new UserModel({firstName: 'Albert', lastName: 'Einstein'});
      expect(newUser.toJSON().fullName).toBe('Albert Einstein');
    });

    it("should return the initials in templates", function() {
      var newUser = new UserModel({firstName: 'Albert', lastName: 'Einstein'});
      expect(newUser.toJSON().initials).toBe('AE');
    });
  });

});