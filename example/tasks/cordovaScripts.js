'use strict';

var gulp = require('gulp');
var fs = require('fs');
var replace = require('gulp-replace');
var $ = require('gulp-load-plugins')();

//Declare here specific cordova scripts
var scripts =[
  'cordova.js'
];

//Declare path to app cordova container
var CONTAINER_PATH = '/Users/sergiocontreras/Desktop/bundle/';


function getScriptImport(src){
  return '<script src="'+ src +'"></script>\n';
}

function cordovaImports() {
    var scriptsImports = '';
    scripts.forEach(function(src) {
       scriptsImports = scriptsImports + getScriptImport(src);
    });
    return scriptsImports;
}

gulp.task('cordovaScripts', function(){
  return gulp.src('app/index.html')
    .pipe($.replace(/<!-- will be replaced with cordova scripts -->/g, cordovaImports()))
    .pipe(gulp.dest('app/'));
});


gulp.task('deploy:cordova:vulcanize',['dist:vulcanize:cordova'], function(){
  return gulp.src('dist/**',{
    dot: true
  })
  .pipe(gulp.dest(CONTAINER_PATH + '/www'));
});

gulp.task('deploy:cordova:mix',['dist:cordova:mix'], function(){
  return gulp.src('dist/**',{
    dot: true
  })
  .pipe(gulp.dest(CONTAINER_PATH + '/www'));
});

gulp.task('deploy:cordova:pack',['dist:cordova:pack'], function(){
  return gulp.src('dist/**',{
    dot: true
  })
  .pipe(gulp.dest(CONTAINER_PATH + '/www'));
});

//Workaround to solve problem with this dep in iOS.
gulp.task('fixResizeBehavior', function(){
  gulp.src(['dist/components/iron-resizable-behavior/iron-resizable-behavior.html'])
    .pipe(replace("this.unlisten(target, 'iron-resize', '_onDescendantIronResize')","if(this.unlisten){this.unlisten(target, 'iron-resize', '_onDescendantIronResize')}"))
    .pipe(gulp.dest('dist/components/iron-resizable-behavior'));
});
