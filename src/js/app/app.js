var slide = require('../common/slide');
var tracking = require('../common/tracking');
var pageTop = require('../common/page-top');
var navHtml = require('../../loader/index.html');
var navClickTracking = require('../common/nav-click-tracking');
var lightBox = require('../common/light-box');
var skillStatus = require('../common/skill-status');

new slide();
new pageTop();
new tracking(navHtml);
new navClickTracking();
new lightBox();
new skillStatus();