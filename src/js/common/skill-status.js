function skillStatus() {
  this.initialize();
}

skillStatus.prototype = {
  initialize: function() {
    var statusList= require('../../loader/skill-status.hbs');
    this.$el = $('body');
    this.setHandlebars(statusList);
  },
  setHandlebars: function(args) {
    var values = {
      status: [
        { name: 'FLOCSS' },
        { name: 'SASS' },
        { name: 'Javascript' },
        { name: 'jQuery' },
        { name: 'Ruby' },
        { name: 'Photoshop' }
      ]
    };
    this.template = args(values);
    this.$el.find('.js-place-skill-list').append(this.template);
  }
};

module.exports = skillStatus;