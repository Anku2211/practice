(function () {
  window.App = {
    Models: {},
    Collection: {},
    Views: {},
    Router: {},
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'show': 'show',
    },

    index: function () {
      console.log('This is the index page');
    },
    show: function () {
      console.log('show the page');
    },
  });
  new App.Router();
  Backbone.history.start();
})();
