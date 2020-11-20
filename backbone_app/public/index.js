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
  initialize: function () {
    this.template = _.template($('.details-list-template').html());
  },
  events: {
    'click .edit-detail': 'edit',
    'click .update-detail': 'update',
    'click .cancel': 'cancel',
    'click .delete-detail': 'delete',
  },
  edit: function () {
    $('.edit-detail').hide();
    $('.delete-detail').hide();
    this.$('.update-detail').show();
    this.$('.cancel').show();

    var name = this.$('.name').html();
    var email = this.$('.email').html();
    var contact = this.$('.contact').html();

    this.$('.name').html(
      '<input type="text" class="name-update" value="' + name + '">'
    );
    this.$('.email').html(
      '<input type="text" class="email-update" value="' + email + '">'
    );
    this.$('.contact').html(
      '<input type="text" class="contact-update" value="' + contact + '">'
    );
  },
  update: function () {
    this.model.set('name', $('.name-update').val());
    this.model.set('email', $('.email-update').val());
    this.model.set('contact', $('.contact-update').val());
  },
  cancel: function () {
    detailsView.render();
  },
  delete: function () {
    this.model.destroy();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

// Backbone View for all details

var DetailsView = Backbone.View.extend({
  model: details,
  el: $('.details-list'),
  initialize: function () {
    var self = this;
    this.model.on('add', self.render, self);
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

    // this.model.fetch({
    //   success: function (response) {
    //     _.each(response.toJSON(), function (item) {
    //       console.log('successfully got detail with _id: ' + item._id);
    //     });
    //   },
    //   error: function () {
    //     console.log('failed to get details!');
    //   },
    // });
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

var detailsView = new DetailsView();

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
    // detail.save(null, {
    //   success: function (response) {
    //     console.log(
    //       'successfully saved detail with _id: ' + response.toJSON()._id
    //     );
    //   },
    //   error: function () {
    //     console.log('failed to save detail');
    //   },
    // });
  });
});
