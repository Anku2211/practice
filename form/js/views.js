// app view
window.Views.window = Backbone.View.extend({
  initialize: function () {
    var addContactView = new window.Views.AddContact();
  },
});

// add contact
window.Views.AddContact = Backbone.View.extend({
  el: '#addContact',
  events: {
    'submit': 'addContact',
  },

  addContact: function (e) {
    e.preventDefault();
    console.log('add contact now ');
  },
});
