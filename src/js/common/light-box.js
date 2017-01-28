function LightBox() {
  this.initialize();
}

LightBox.prototype = {
  initialize: function() {
    var LightBoxContents = require('../../loader/light-box-contents.hbs');
    this.$el = $('body');
    this.bindClick(LightBoxContents);
  },
  bindClick: function(args) {
    var _this = this;
    this.$el.find('.js-activate-modal').on('click', function() {
      _this.setHandlebars(args, $(this));
      _this.bindCloseModal();
    });
  },
  setHandlebars: function(args, data) {
    getDataType = data.attr('data-type');
    if (getDataType == '01') {
      this.values = {
        thumbnail: '../../dist/img/thumbnail01.png',
        alt: 'それいけ名言集',
        title: 'それいけ名言集',
        url: 'http://msr.minibird.jp/soreike/'
      };

    } else if (getDataType == '02') {
      this.values = {
        thumbnail: '../../dist/img/thumbnail02.png',
        alt: 'さかなの間',
        title: 'さかなの間',
        url: 'http://sakananoma.bookmarks.jp/'
      };
    } else if (getDataType == '03') {
      this.values = {
        thumbnail: '../../dist/img/thumbnail03.png',
        alt: 'design bazaar',
        title: 'design bazaar',
        url: 'http://designbazzar.hits.jp/'
      };
    } else if (getDataType == '04') {
      this.values = {
        thumbnail: '../../dist/img/thumbnail04.png',
        alt: '伝え人語りき',
        title: '伝え人語りき',
        url: 'http://msr.minibird.jp/tsutaebito/'
      };
    }
    this.template = args(this.values);
    this.$el.append(this.template);
  },
  bindCloseModal: function() {
    var _this = this;
    this.$el.find('.js-close-modal').on('click', function() {
      _this.$el.find('.is-open-modal').fadeOut(200, function() {
        $(this).remove();
      });
    });
  }
};

module.exports = LightBox;