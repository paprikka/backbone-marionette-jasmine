require(['src/application'], function() {
  return describe("Application", function() {
    it("should be available", function() {
      var application = new Application();
      expect(application).toBeDefined();
    });
  });
});