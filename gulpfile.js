var   gulp    = require('gulp'),
      eslint  = require('gulp-eslint'),
      concat  = require('gulp-concat'),
      webpack = require('gulp-webpack'),
      babel   = require('gulp-babel'),
      react   = require('gulp-react'),
      size    = require('gulp-size'),
      connect = require('gulp-connect'),
      open    = require('gulp-open');

var webpackConfig = require('./webpack.dev.config.js');

gulp.task('lint', function (){
  return gulp.src(['src/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('css', function (){
  return gulp.src('src/**/*.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist'))
    .pipe(size({ title: 'scripts' }))
    .pipe(connect.reload());
});

gulp.task('server', function() {
  connect.server({
    root: 'dist',
    port: 3000
  });
  return gulp.src('dist/index.html')
    .pipe(open({ uri: 'http://localhost:3000' }));
});

gulp.task('default', gulp.series('lint', 'scripts', 'html', 'server'));
