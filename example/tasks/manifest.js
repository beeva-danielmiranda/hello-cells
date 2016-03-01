'use strict';

// Create a manifest file

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');
var fs = require('fs');
var runSequence = require('run-sequence');
var glob = require('glob-all');


function buildManifest(files) {
  return gulp.src(files, {
    cwd: 'dist',
    base: './dist',
  })
    .pipe($.manifest({
      hash: true,
      preferOnline: false,
      fallback: ['/ index.html'],
      filename: 'cache.manifest',
      exclude: 'cache.manifest'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe($.size({
      title: 'manifest'
    }));
}

gulp.task('manifest', function (cb) {
  runSequence('prepareManifest', 'addManifest', cb);
});

gulp.task('manifest:vulcanize', function (cb) {
  runSequence('prepareManifest:vulcanize', 'addManifest', cb);
});

gulp.task('prepareManifest:vulcanize', function () {

  var files = glob.sync(['index.html', './*', 'components/components.html', 'components/polymer/polymer-mini.html','components/polymer/polymer.html','components/polymer/polymer-micro.html', 'components/buzz-ui-theme/fonts/**/*', 'components/buzz-ui-organism-i-want/images/**/*', '{config,locales,template,scripts,styles}/**/*.*'], { cwd: 'dist' });

  return buildManifest(files);

})

gulp.task('prepareManifest', function () {

  var filesToExclude = ['components/**/gulpfile.js', 'components/**/Gulpfile.js', 'components/prism/**/*.*', 'components/mocha/*.*', 'components/**/*.md', 'components/**/test/**/*.*', 'components/**/demo/**/*.*', 'components/**/bower.json'];

  var files = glob.sync(['index.html', './*', '{config,locales,template,components,scripts,styles}/**/*.*'], { cwd: 'dist', ignore: filesToExclude });

  return buildManifest(files);
})

gulp.task('addManifest', function () {
  return gulp.src('dist/index.html')
    .pipe($.replace('<html lang="es">', '<html lang="es" manifest="cache.manifest">'))
    .pipe(gulp.dest('dist'));
});
