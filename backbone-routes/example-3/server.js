// model

var Detail = Backbone.Model.extend({
  defaults: {
    name: '',
    email: '',
    contact: '',
  },
});

// collection
var Details = Backbone.Collection.extend({});

var details = new Details();

// Backbone View for one detail

var DetailView = Backbone.View.extend({
  model: new Detail(),
  tagName: 'tr',
  // el: '#btn-list',
  initialize: function () {
    this.template = _.template($('.details-list-template').html());
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

var DetailView2 = Backbone.View.extend({
  tagName: 'tr',
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html('This is detail list 2');
  },
});
var detailView2 = new DetailView2();

var detailview = new DetailView();

// Backbone View for all details

var DetailsView = Backbone.View.extend({
  model: details,
  el: $('.details-list'),
  initialize: function () {
    var self = this;
    this.model.on('add', this.render, this);
    this.model.on(
      'change',
      function () {
        setTimeout(function () {
          self.render();
        }, 30);
      },
      this
    );
    this.model.on('remove', this.render, this);
  },

  render: function () {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function (detail) {
      self.$el.append(new DetailView({ model: detail }).render().$el);
    });
    return this;
  },
});

$(document).ready(function () {
  $('.btn-add').on('click', function () {
    var detail = new Detail({
      name: $('.name-input').val(),
      email: $('.email-input').val(),
      contact: $('.contact-input').val(),
    });
    $('.name-input').val('');
    $('.email-input').val('');
    $('.contact-input').val('');
    console.log(detail.toJSON());
    details.add(detail);
  });
});
var detailsView = new DetailsView();

var DetailsRouter = Backbone.Router.extend({
  routes: {
    '': 'detailview',
    'detailView2': 'view2',
  },
  detailview: function () {
    console.log('detail list is here');
  },
  view2: function () {
    console.log('second view of detail list');
  },
});
var detailsRouter = new DetailsRouter();
Backbone.history.start();
