describe('Views:', function() {
  describe('workers', function() {
    describe('list', function() {
      var workers, view;

      beforeEach(function() {
        workers = Test.Factory.Worker.all();
        view = SC.View.create({ workers: workers, template: SC.TEMPLATES['app/templates/workers/list'] });

        SC.run(function() { view.appendTo('#workers'); });
      });

      afterEach(function() {
        view.destroy();
      });

      it('renders an element per record', function() {
        expect(view.$()).toMatchList([
          'ruby1.worker.travis-ci.org:10000:ruby',
          'ruby1.worker.travis-ci.org:10001:ruby',
          'ruby2.worker.travis-ci.org:20000:ruby',
          'ruby2.worker.travis-ci.org:20001:ruby'
        ]);
      });
    });
  });
});
