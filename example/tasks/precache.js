'use strict';

// Generate a list of files that should be precached when serving from 'dist'.
// The list will be consumed by the <platinum-sw-cache> element.
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var glob = require('glob-all');
var path = require('path');
var fs = require('fs');
var crypto = require('crypto');
var packageJson = require('../package.json');


function buildPrecache(files, filesToExclude, callback) {
  var dir = 'dist';
  var config = {
    cacheId: packageJson.name || path.basename(__dirname),
    disabled: false
  };
  glob(files, { cwd: dir, ignore: filesToExclude }, function (error, files) {
    if (error) {
      callback(error);
    } else {
      config.precache = files;

      var md5 = crypto.createHash('md5');
      md5.update(JSON.stringify(config.precache));
      config.precacheFingerprint = md5.digest('hex');

      var configPath = path.join(dir, 'precache.json');
      fs.writeFile(configPath, JSON.stringify(config), callback);
    }
  });
}


gulp.task('precache', function (callback) {


  var filesToExclude = ['components/**/gulpfile.js', 'components/**/Gulpfile.js', 'components/prism/**/*.*', 'components/mocha/*.*', 'components/**/*.md',
  'components/font-roboto/roboto.html', 'components/**/test/**/*.*', 'components/**/demo/**/*.*', 'components/**/bower.json'];

  var files = ['index.html', './*.*', './{config,images,locales,components,scripts,styles}/**/*.*'];

  buildPrecache(files, filesToExclude, callback);
});


gulp.task('precache:vulcanize', function (callback) {

  var filesToExclude = [];

  var files = ['index.html', './*.*', 'components/components.html', 'components/polymer/polymer-mini.html','components/polymer/polymer.html','components/polymer/polymer-micro.html', './{config,images,locales,scripts,styles}/**/*.*'];

  buildPrecache(files, filesToExclude, callback);
});
