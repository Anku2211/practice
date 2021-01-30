var Video = Backbone.Model.extend({});

var VideoList = Backbone.Collection.extend({
  model: Video,
  url: 'videos',
});

var VideoPlayerView = Backbone.View.extend({
  id: 'video-player',
  className: 'video-player',
  initialize: function () {
    this.player = null;
    _(this).bindAll('play', 'resize');
    $(window).resize(this.resize);
    this.resize();
  },
  resize: function () {
    var window_height = $(window).height();
    var nav_height = $('#nav').outerHeight();
    var thumbnails_height = $('#thumbnails').outerHeight();
    this.$el.height(window_height - (nav_height + thumbnails_height + 30));
  },
  play: function (video) {
    this.$el.html('');
    this.createYouTubePlayer(video);
    this.trigger('now-playing', video);
  },
  createYouTubePlayer: function (video) {
    $('<div>').attr('id', 'yt-placeholder').appendTo(this.el);
    var video_id = video.get('provider_video_id');
    this.player = new YT.Player('yt-placeholder', {
      videoId: video_id,
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
      events: {
        onReady: function () {
          console.log('ready');
        },
        onStateChange: function (event) {
          console.log(event);
        },
      },
    });
  },
});

var ThumbnailView = Backbone.View.extend({
  tagName: 'li',
  className: 'thumbnail',
  events: {
    click: 'select',
    mouseover: 'startImageSwap',
    mouseout: 'stopImageSwap',
  },
  initialize: function () {
    this.timer = null;
    _(this).bindAll('startImageSwap', 'stopImageSwap', 'swapImage');
  },
  render: function () {
    var thumbnails = this.model.get('thumbnails');

    for (var i = 0; i < thumbnails.length; i++) {
      var thumbnail = $('<img>')
        .attr('src', thumbnails[i].url)
        .appendTo(this.$el);

      if (i == 0) thumbnail.addClass('active');
    }
    return this;
  },
  select: function () {
    this.trigger('selected', this);
  },
  startImageSwap: function () {
    this.timer = window.setInterval(this.swapImage, 1000);
  },
  stopImageSwap: function () {
    window.clearInterval(this.timer);
  },
  swapImage: function () {
    var $cur = this.$('.active');
    $cur.removeClass('active');

    var $next = $cur.next();
    if ($next.length == 0) $next = this.$('img:first');

    $next.addClass('active');
  },
});

var ThumbnailListView = Backbone.View.extend({
  tagName: 'div',
  id: 'thumbnails',
  className: 'thumbnails',
  initialize: function () {
    _(this).bindAll(
      'add',
      'remove',
      'reset',
      'select',
      'resize',
      'scrollLeft',
      'scrollRight'
    );
    this.thumbnails = [];
    this.selected = null;
    this.collection.each(this.add);
    this.collection.bind('add', this.add);
    this.collection.bind('remove', this.remove);
    this.collection.bind('reset', this.reset);
    $(window).resize(this.resize);
    this.resize();
  },
  render: function () {
    $('<div>').addClass('left').click(this.scrollLeft).appendTo(this.el);

    var wrapper = $('<div>').addClass('wrapper').appendTo(this.el);
    $('<ul>').appendTo(wrapper);

    $('<div>').addClass('right').click(this.scrollRight).appendTo(this.el);
    return this;
  },
  resize: function () {
    var thumbnail_width = this.$el.outerWidth();
    var window_width = $(window).width();
    var remaining = window_width - Math.floor(window_width / 128) * 128;
    this.$el.css('right', remaining / 2);
  },
  scrollLeft: function () {
    console.log('scroll left');
    this.$('ul').css('left', '-' + this.$('li').width());
  },
  scrollRight: function () {
    console.log('scroll right');
    this.$('ul').css('left', '+' + this.$('li').width());
  },
  add: function (thumbnail) {
    var thumbnail_view = new ThumbnailView({ model: thumbnail });

    thumbnail_view.on('selected', this.select);

    this.thumbnails.push(thumbnail_view);

    if (!this.selected) this.select(thumbnail_view);

    this.$('ul').append(thumbnail_view.render().el);
  },
  remove: function () {},
  reset: function (thumbnails) {
    thumbnails.each(this.add);
  },
  select: function (thumbnail) {
    this.selected = thumbnail;
    this.$('.selected').removeClass('selected');
    thumbnail.$el.addClass('selected');
    this.trigger('selected', thumbnail.model);
  },
});

var Videos = new VideoList();

var AppView = Backbone.View.extend({
  el: $('#container'),

  initialize: function () {
    _(this).bindAll('playVideo', 'thumbnailsLoaded');

    this.thumbnails = new ThumbnailListView({ collection: Videos });
    this.thumbnails.on('loaded', this.thumbnailsLoaded);
    this.thumbnails.on('selected', this.playVideo);

    this.$el.append(this.thumbnails.render().el);

    this.player = new VideoPlayerView();
    this.$el.append(this.player.render().el);

    Videos.fetch();
  },
  playVideo: function (video) {
    this.player.play(video);
    $('#nav .title').html(video.get('title'));
  },
  thumbnailsLoaded: function (thumbnails) {},
});

$(document).ready(function () {
  var videos = new VideoList();
  videos.fetch();

  var appView = new AppView({ model: videos });
  $('body').append(appView.render().$el);
});
