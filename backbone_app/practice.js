var Blog = Backbone.Model.extend({
  defaults: {
    name: '',
    email: '',
    contact: '',
  },
});

// Backbone Collection

var Blogs = Backbone.Collection.extend({});

var blogs = new Blogs();

// Backbone View for one blog

var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: 'div',
  initialize: function () {
    this.template = _.template($('.blogs-list-template').html());
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

// Backbone View for all blogs

var BlogsView = Backbone.View.extend({
  model: blogs,
  el: $('.blogs-list'),
  initialize: function () {
    var self = this;
    this.model.on('add', this.render, this);
  },
  render: function () {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function (blog) {
      self.$el.append(new BlogView({ model: blog }).render().$el);
    });
    return this;
  },
});

var blogsView = new BlogsView();

$(document).ready(function () {
  $('.btn').on('click', function () {
    var blog = new Blog({
      author: $('.name-input').val(),
      title: $('.email-input').val(),
      url: $('.contact-input').val(),
    });
    $('.name-input').val('');
    $('.email-input').val('');
    $('.contact-input').val('');
    console.log(blog.toJSON());
    blogs.add(blog);
  });
});
