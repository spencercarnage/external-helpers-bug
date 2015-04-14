'use strict';

var browserify = require('browserify');
var babelify   = require('babelify');
var fs         = require('fs');

browserify({debug: true})
  .transform(babelify.configure({
    externalHelpers: true
  }))
  .require('./foobar', { entry: true })
  .bundle()
  .on('error', function (err) {
    console.log('Error: ' + err.message);
  })
  .pipe(fs.createWriteStream('bundle.js'));
