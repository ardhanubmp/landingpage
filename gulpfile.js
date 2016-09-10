var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
  gulp.src('js/*.js')
      .pipe(concat('gabung.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/js'));
});

gulp.task('style', function(){
  gulp.src('scss/*.scss')
      .pipe(concat('gabung.min.css'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['scripts','style']);
