var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpLoadPlugins = require('gulp-load-plugins');

var $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('sass', function () {
  return gulp.src(['src/sass/**/*.sass'])
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.sass())
    .pipe($.pleeease({
      autoprefixer: {
        browsers: ['last 2 versions']
      },
      //本番環境出力時、gulp build --type productionでcssを圧縮する
      minifier: gutil.env.type === 'production' ? true : false
    }))
    .pipe(gulp.dest('dist/css'));
});