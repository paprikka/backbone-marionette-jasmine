require(['src/models/user'],function (UserModel) {
  describe('User', function () {
    it('has to be available', function() {
      expect(UserModel).toBeDefined();
    });
  })
});