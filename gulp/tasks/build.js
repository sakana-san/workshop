var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function() {
  runSequence(
    'clearCache',
    'clean',
    'localServer',
    ['sass','sprite', 'lint', 'webpack', 'imageOptim']
  );
});