var Detail = Backbone.Model.extend({
  defaults: {
    subject: '',
    channel: '',
    language: '',
    gradeLevel: '',
    contentType: '',
    author: '',
    medium: '',
    board: '',
  },
});

var Details = Backbone.Collection.extend({});
var details = new Details();

var DetailView = Backbone.View.extend({
  model: new Detail(),
  tagName: 'span',
  initialize: function () {
    this.template = _.template($('.details-list-template').html());
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

var DetailsView = Backbone.View.extend({
  model: details,
  tagName: 'div',
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
var detailsView = new DetailsView();

$(function () {
  //Extend Backbone.Form and customise, set schema
  var RegisterForm = Backbone.Form.extend({
    template: _.template($('#formTemplate').html()),

    schema: {
      subject: {
        type: 'Select',
        options: [
          'English',
          'Hindi',
          'Maths',
          'Social Science',
          'Science',
          'Physics',
          'Chemistry',
          'Biology',
          'Economics',
          'Accountancy',
          'Business Studies',
        ],
      },
      channel: {
        type: 'Select',
        options: [
          'Andaman & Nicobar',
          'Andhra Pradesh',
          'Arunachal Pradesh',
          'Assam',
          'Bihar',
          'Chandigarh',
          'Chhattisgarh',
          'Dadra and Nagar Haveli',
          'Daman and Diu',
          'Delhi',
          'Goa',
          'Gujrat',
          'Haryana',
          'Himachal Pradesh',
          'Jammu & Kashmir',
          'Jharkhand',
          'Karnataka',
          'Kerela',
          'Ladakh',
          'Lakshadweep',
          'Madhya Pradesh',
          'Maharashtra',
          'Manipur',
          'Meghalaya',
          'Mizoram',
          'Nagaland',
          'Odisha',
          'Puducherry',
          'Punjab',
          'Rajasthan',
          'Sikkim',
          'Tamil Nadu',
          'Telangana',
          'Tripura',
          'Uttar Pradesh',
          'Uttarakhand',
          'West Bengal',
        ],
      },
      language: {
        type: 'Select',
        options: [
          'Hindi',
          'English',
          'Urdu',
          'Odiya',
          'Bangla',
          'Marathi',
          'Gujrati',
          'Kannada',
          'Tamil',
          'Telgu',
          'Malyalam',
        ],
      },
      appIcon: {
        type: 'Radio',
        options: ['Image'],
      },

      gradeLevel: {
        type: 'Select',
        options: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
        ],
      },
      contentType: {
        type: 'Select',
        options: ['ExplanationResource'],
      },
      author: {
        type: 'Text',
      },
      medium: {
        type: 'Select',
        options: [
          'Hindi',
          'English',
          'Marathi',
          'Bangla',
          'Gujrati',
          'Urdu',
          'Kannada',
          'tamiliyan',
          'Malyali',
          'Assamese',
        ],
      },
      board: {
        type: 'Select',
        options: ['CBSE', 'ISC', 'ICSE', 'NIOS', 'UP Board', ''],
      },
    },
  });

  //Create the form instance and add to the page
  var form = new RegisterForm({
    model: new Detail(),
  }).render();

  $('body').append(form.el);

  //Run validation before submitting
  form.on('submit', function (event) {
    var errs = form.validate();

    if (errs) event.preventDefault();
  });
});

$(document).ready(function () {
  $('.btn-submit').on('click', function () {
    var detail = new Detail({
      subject: $('#c1_subject').val(),
      channel: $('#c1_channel').val(),
      author: $('#c1_author').val(),
      language: $('#c1_language').val(),
      gradeLevel: $('#c1_gradeLevel').val(),
      contentType: $('#c1_contentType').val(),
      medium: $('#c1_medium').val(),
      board: $('#c1_board').val(),
    });
    $('#c1_subject').val('');
    $('#c1_channel').val('');
    $('#c1_author').val('');
    $('#c1_language').val();
    $('#c1_gradeLevel').val();
    $('#c1_contentType').val();
    $('#c1_medium').val();
    $('#c1_board').val();
    console.log(detail.toJSON());
    details.add(detail);
  });
});
