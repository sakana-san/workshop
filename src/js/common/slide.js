function Slide() {
	this.initialize();
}

Slide.prototype = {
	initialize: function() {
    this.count = 0;
    this.$el = $('body');
    this.bindPosition();
    this.item = this.$el.find('.js-motion');
    this.bindClick();
  },
  bindPosition:  function() {
    var array = ['./dist/img/photo01.png', './dist/img/photo02.png', './dist/img/photo03.png', './dist/img/photo04.png'];
    for(var i=0; i<array.length; i++) {
      this.$el.find('.js-slide').append('<li class="p-intro__motion js-motion js-motion-number' + (i+1) + '"></li>');
      this.$el.find('.js-motion-number' + (i+1)).css({'height': '300px', 'background': 'url(' + array[i] + ') center top / cover no-repeat'});
    }
  },
  bindClick: function() {
    var _this = this;
    this.$el.find('.js-prev').on('click', function() {
      _this.count--;
      if (_this.count < 0) _this.count = _this.item.length - 1;
      _this.bindFade();

    });
    this.$el.find('.js-next').on('click', function() {
      _this.count++;
      if (_this.count > _this.item.length - 1) _this.count = 0;
      _this.bindFade();
    });
    this.$el.find('.js-move-down').on('click', function() {
      var moveDown = _this.$el.find('.js-move-down-target').offset().top - 40
      $('body, html').animate({scrollTop: moveDown}, 200);
    });
  },
  bindFade: function() {
    this.$el.find('.js-motion:visible').fadeOut(150);
    this.$el.find('.js-motion').eq(this.count).fadeIn(150);
  }
};

module.exports = Slide;