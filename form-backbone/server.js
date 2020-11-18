// model

var Detail = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    gender: '',
    reqType: '',
  },
});

// collection
var Details = Backbone.Collection.extend({});

var details = new Details();

//  View for all details

var DetailsView = Backbone.View.extend({
  model: details,
  tagName: 'tbody',
  el: $('.details-list'),
  initialize: function () {
    var self = this;
    self.model.on('add', self.render, self);
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
//  View for one detail

var DetailView = Backbone.View.extend({
  model: new Detail(),
  tagName: 'tr',
  initialize: function () {
    this.template = _.template($('.details-list-template').html());
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

var detailsView = new DetailsView();

$(document).ready(function () {
  $('.btn-submit').on('click', function () {
    var detail = new Detail(
      {
        firstName: $('.first-name-input').val(),
        lastName: $('.last-name-input').val(),
        gender: $('.gender-input').val(),
        reqType: $('.req-type-input').text(),
        notification: $("input[name='notification']:checked").val(),
      },
      { wait: true }
    );
    $('.first-name-input').val('');
    $('.last-name-input').val('');
    $('.gender-input').val('');
    $('.req-type-input').text();
    $("input[name='notification']:checked").val();
    console.log(detail.toJSON());
    details.add(detail);
  });
});
