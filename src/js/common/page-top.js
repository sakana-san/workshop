function PageTop() {
  this.initialize();
}

PageTop.prototype = {
	initialize: function() {
    this.$el = document.querySelector('body');
    this.bindClick();
	},
  bindClick: function() {
    this.$el.querySelector('.js-page-top').addEventListener('click', function() {
      $('body, html').animate({scrollTop: 0}, 100);
    });
  }
};

module.exports = PageTop;