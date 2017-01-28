function NavClickTracking() {
  this.initialize();
}

NavClickTracking.prototype = {
  initialize: function() {
    this.$el = $('body');
    this.bindClick();
  },
  bindClick: function() {
    this.$el.find('.js-anchor').on('click', function() {
      var url = this.href;
      var split = url.split('#');
      var target = $('.js-' +  split[1]).offset().top - 40;
      // todo css3で実装する
      $('body, html').animate({scrollTop: target}, 100);
    });
    this.$el.find('.js-anchor-top').on('click', function() {
      // todo css3で実装する
      $('body, html').animate({scrollTop: 0}, 100);
    });
  }
};

module.exports = NavClickTracking;