var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var gulpLoadPlugins = require('gulp-load-plugins');

var $ = gulpLoadPlugins({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});

gulp.task('webpack', function() {
	return gulp.src('./src/js/app/app.js')
	.pipe($.webpack(webpackConfig))
	.pipe(gulp.dest('dist/js/'));
});