'use strict';

// Create index.html from index.tpl file
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var merge = require('merge-stream');

gulp.task('buildIndex', function(){

  var index = gulp.src('app/tpls/index.tpl')
    .pipe($.replace(/##debug##/g, ''))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest('app/'));

  var indexDebug = gulp.src('app/tpls/index.tpl')
    .pipe($.replace(/##debug##/g, 'debug'))
    .pipe($.rename('index_debug.html'))
    .pipe(gulp.dest('app/'));

  return merge(index, indexDebug);

});
