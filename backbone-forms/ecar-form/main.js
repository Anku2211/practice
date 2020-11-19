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
        options: ['select'],
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
  var form = new RegisterForm().render();

  $('body').append(form.el);

  //Run validation before submitting
  form.on('submit', function (event) {
    var errs = form.validate();
    console.log(firstName.value());

    if (errs) event.preventDefault();
  });
});
