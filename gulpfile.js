var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var server = require('gulp-express');

gulp.task('server', function() {
  server.run(['app.js']);
});

gulp.task('connect', function() {
  connect.server({
    // root: '.',
    livereload: true
  });
});

gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(connect.reload())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src('css/*.css')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['jshint']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('*.html', ['html']);
});

// default task
gulp.task('default', ['watch', 'connect']);
