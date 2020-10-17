// model

var Detail = Backbone.Model.extend({
    defaults:{
        name:"",
        email: "",
        contact:"",
    }
})

// collection 
var Details = Backbone.Collection.extend({})

var details = new Details();

// Backbone View for one detail

var DetailView = Backbone.View.extend({
	model: new Detail(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.details-list-template').html());
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

// Backbone View for all details

var DetailsView = Backbone.View.extend({
	model: details,
	el: $('.details-list'),
	initialize: function() {
		var self = this;
		self.model.on('add', self.render, self);
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(detail) {
			self.$el.append((new DetailView({model: detail})).render().$el);
		});
		return this;
	}
});

var detailsView = new DetailsView();

$(document).ready(function() {
	$('.btn-add').on('click', function() {
		var detail = new Detail({
			name: $('.name-input').val(),
			email: $('.email-input').val(),
			contact: $('.contact-input').val()
		});
		$('.name-input').val('');
		$('.email-input').val('');
		$('.contact-input').val('');
		console.log(detail.toJSON());
		details.add(detail);
	})
})