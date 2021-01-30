var Video = Backbone.Model.extend({});

var Videos = Backbone.Collection.extend({});

var videos = new Videos();

var AppView = Backbone.View.extend({
  el: $('#container'),

  initialize: function () {},
  render: function () {
    this.$el.html('Hello World');
    return this;
  },
});
