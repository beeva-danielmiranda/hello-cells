'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var merge = require('merge-stream');
var fs = require('fs');

/* Method to get the urls depending on the strategy of packaging */
function getUrls(type) {
  var argv = process.argv;
  var composser_instance_url, remote_url, i18_messages, mocks = false, urls, remoteConfig;

  argv.forEach(function (entry, index) {
    if (entry === '--composser_instance_url') {
      composser_instance_url = process.argv[index + 1];
    } else if (entry === '--remote_url') {
      remote_url = checkSlash(process.argv[index + 1]);
    } else if (entry === '--i18_messages') {
      i18_messages = checkSlash(process.argv[index + 1]);
    } else if (entry === '--mocks') {
      mocks = true;
    }
  });

  if (mocks) {
    composser_instance_url = 'config/pages';
  }
  remoteConfig = JSON.parse(fs.readFileSync('./app/remoteConfig.json'));
  if (type === 'mix') {
    urls = {
      composser_instance_url: composser_instance_url ? composser_instance_url : remoteConfig.composser_instance_url,
      remote_url: remote_url ? remote_url : checkSlash(remoteConfig.remote_url),
      i18_messages: i18_messages ? i18_messages : checkSlash(remoteConfig.i18_messages)
    };
    return urls;
  } else {
    urls = {
      composser_instance_url: composser_instance_url ? composser_instance_url : 'config/pages',
      remote_url: remote_url ? remote_url : '',
      i18_messages: i18_messages ? i18_messages : checkSlash(remoteConfig.i18_messages)
    };
    return urls
  }
}

/* Main task to prepare files with a url set */
function prepareFiles(urls) {
  var configFile = gulp.src('app/tpls/configFile.json.tpl')
    .pipe($.replace(/##composser_instance_url##/g, urls.composser_instance_url))
    .pipe($.replace(/##remote_url##/g, urls.remote_url))
    .pipe($.rename('configFile.json'))
    .pipe(gulp.dest('app/config/'));
  var appScript = gulp.src('app/tpls/app.js.tpl')
    .pipe($.replace(/##remote_url##/g, urls.remote_url))
    .pipe($.replace(/##i18_messages##/g, urls.i18_messages))
    .pipe($.rename('app.js'))
    .pipe(gulp.dest('app/scripts/'));
  return merge(configFile, appScript);
}

/* Helper method to check if url has final slash */
function checkSlash(url) {
  var lastChar = url.slice(-1);
  if (lastChar !== '/') {
    return url + '/';
  } else {
    return url;
  }
}

/* Task to prepare files with mix strategy */
gulp.task('prepareMix', function () {
  return prepareFiles(getUrls('mix'));
});

/* Task to prepare files with pack strategy */
gulp.task('preparePack', function () {
  return prepareFiles(getUrls('pack'));
});
