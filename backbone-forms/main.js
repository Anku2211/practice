$(function () {
  //Extend Backbone.Form and customise, set schema
  var RegisterForm = Backbone.Form.extend({
    template: _.template($('#formTemplate').html()),

    schema: {
      firstName: {
        validators: ['required'],
      },
      lastName: {
        validators: ['required'],
      },
      Gender: {
        type: 'Select',
        options: ['Male', 'Female'],
      },
      requirement: {
        type: 'Radio',
        options: ['personal', 'professional'],
      },

      getNotification: {
        type: 'Checkbox',
      },
    },
  });

  //Create the form instance and add to the page
  var form = new RegisterForm().render();

  $('body').append(form.el);

  //Run validation before submitting
  form.on('submit', function (event) {
    var errs = form.validate();

    if (errs) event.preventDefault();
  });
});
