function Tracking(display) {
  this.$el = $('body');
  this.$el.find('.l-header').append(display);
	this.initialize();
}

Tracking.prototype = {
	initialize: function() {
    this.targetPutIn = this.$el.find('.js-tracking-taget-put-in').offset().top + 24
    this.targetPutOut = this.$el.find('.js-tracking-target-put-out').offset().top
    this.bindScroll();
	},
  bindScroll: function() {
    var _this = this;
    _this.$el.find('.is-tracking').css({display: 'none'});
    $(window).on('scroll', function() {
      var scroll = $(this).scrollTop();
      if (scroll > _this.targetPutOut) {
        _this.$el.find('.is-tracking').css({display: 'flex'});
        _this.$el.find('.is-tracking').stop().animate({top: '0'}, 30);
      } else if (scroll < _this.targetPutIn) {
        _this.$el.find('.is-tracking').stop().animate({top: '-100'}, 10, function() {
          $(this).css({display: 'none'});
        });
      }
    });
  }
};

module.exports = Tracking;