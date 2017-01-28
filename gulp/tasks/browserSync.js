var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('localServer', function() {
  return browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});