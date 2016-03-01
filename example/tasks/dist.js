'use strict';

// Build Production Files into dist folder
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');


// version not vulcanize. Uncomment 'precache' if you are going to use service workers.
gulp.task('dist', ['clean'], function(cb) {
    runSequence(
        'sass', 'buildIndex', 'buildI18n', 'copy',
        'components', 'lint', ['images', 'fonts'], 'html', 'includeComponents',
        // 'precache', 'manifest',
        cb);
});


// vulcanize version. Uncomment 'precache' if you are going to use service workers.
gulp.task('dist:vulcanize', ['clean'], function(cb) {
    runSequence(
        'sass', 'buildIndex', 'buildI18n', 'copy',
        'components', 'lint', ['images', 'fonts'], 'html',
        'vulcanize', // 'precache:vulcanize', 'manifest:vulcanize',
        cb);
});

gulp.task('dist:vulcanize:cordova', ['clean'], function(cb) {
    runSequence(
        'sass', 'buildIndex', 'cordovaScripts', 'buildCoreJS', 'buildI18n', 'copy', 'components', 'lint', ['images', 'fonts'], 'html', 'cleanAndroid',
        'vulcanize', 'precache:vulcanize', 'manifest:vulcanize', cb);
});

gulp.task('dist:cordova:mix', ['clean'], function(cb) {
  runSequence(
      'sass', 'buildIndex','cordovaScripts', 'buildCoreJS', 'buildI18n','prepareMix','copy',
      'components', 'lint', ['images', 'fonts'], 'html', 'includeComponents', 'precache', 'manifest', cb);
});

gulp.task('dist:cordova:pack', ['clean'], function(cb) {
  runSequence(
      'sass', 'buildIndex','cordovaScripts', 'buildCoreJS', 'buildI18n','preparePack','copy',
      'components', 'lint', ['images', 'fonts'], 'html', 'includeComponents', 'precache', 'manifest', cb);
});
