var Video = Backbone.Model.extend();

var Videos = Backbone.Collection.extend({
	model: Video
});

var VideoView = Backbone.View.extend({
	tagName: "li",

	initialize: function(options){
		this.bus = options.bus;
	},

	events: {
		"click": "onClick",
	},

	onClick: function(){
		this.bus.trigger("videoSelected", this.model);
	},

	render: function(){
		this.$el.html(this.model.get("name"));

		return this;
	}
});

var VideosView = Backbone.View.extend({
	tagName: "ul",

	id: "videos",

	initialize: function(options){
		this.bus = options.bus;
	},

	render: function(){
		var self = this;

		this.model.each(function(video){
			var video = new VideoView({ model: video, bus: self.bus });
			self.$el.append(video.render().$el);
		});

		return this;
	}
});

var PlayerView = Backbone.View.extend({
	el: "#player-container",

	initialize: function(options){
		this.bus = options.bus;

		this.bus.on("videoSelected", this.onVideoSelected, this);
	},

	onVideoSelected: function(video){
		this.model = video;
		this.render();
	},

	render: function(){
		if (this.model)
			this.$("#video-name").html(this.model.get("name"));

		return this;
	}
})

var bus = _.extend({}, Backbone.Events);

var videos = new Videos([
	new Video({ name: "Video 1" }),
	new Video({ name: "Video 2" }),
  new Video({ name: "Video 3" }),
	new Video({ name: "Video 4" }),
	new Video({ name: "Video 5" }),
	new Video({ name: "Video 6" }),
	new Video({ name: "Video 7" }),
	new Video({ name: "Video 8" })
	]);

var videosView = new VideosView({ model: videos, bus: bus });
$("#video-container").html(videosView.render().$el);

var playerView = new PlayerView({ bus: bus });
playerView.render();
