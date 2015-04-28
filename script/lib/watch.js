#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var glob = require('glob');
var exec = require('child_process').exec;
var Q = require('q');
var http = require('http');

var argv = require('minimist')(process.argv.slice(2));
var flo = require('fb-flo');
var _ = require('lodash');

var config = JSON.parse(fs.readFileSync('./config/dev-env.json'));

var options = {
  verbose: argv.v || argv.verbose || false,
  root: argv.r || argv.root || config.watchroot || _.flatten([argv._])[0],
  glob: _.flatten([argv.g || argv.glob || ['**/*']]),
  host: argv.h || argv.host || 'localhost',
  port: argv.p || argv.port || 8888,
};

function isIgnorePath(filepath) {
  return (filepath === 'css/main-compiled.css' || filepath.match(/^\/?public\/css/));
}

function rootPath(filepath) {
  return path.join(options.root, '../', filepath);
}

function getFilesConcated(paths, callback) {
  var theRootPath = rootPath('public/' + paths);
  Q.nfcall(glob, theRootPath).then(function(files) {
    return Q.all(files.map(function(file) {
      return Q.nfcall(fs.readFile, file);
    }));
  }).then(function(fileContent) {
    callback(null, fileContent.reduce(function(lastFile, thisFile) {
      return lastFile.toString() + '\n' + thisFile.toString();
    }));
  }, function(err) {
    callback(err, null);
  });
}

function handleCompile(filepath, callback) {
  var ext = path.extname(filepath);
  if (ext === '.css' || ext === '.scss') {
    exec('./script/css', function(err) {
      if (err) {
        return callback(err);
      }
      callback(null, 'css/*.css');
    });
  }
}

var server = flo(options.root, {
  port: options.port,
  host: options.host,
  verbose: options.verbose,
  glob: options.glob,
  useWatchman: true,
}, function resolver(filepath, callback) {
  if (!options.verbose) {
    console.log('File changed: %s', filepath);
  }
  if (isIgnorePath(filepath)) {
    return;
  }
  if (path.extname(filepath) === '.js') {
    callback({
      resourceURL: filepath,
      contents: '',
      update: function(window, resourceURL) {
        console.log('change to ' + resourceURL + ', reloading.');
        window.location.reload();
      },
    });
    if (config.notify) {
      http.get(config.notify, function() { }, function(err) {
        console.log('[error notifying inner server : ', err, ']');
      });
    }
  }
  handleCompile(filepath, function(err, compiledFiles, reload) {
    if (err) {
      console.error('Failed to load %s', filepath);
      console.error(err);
      return;
    }
    Q.nfcall(getFilesConcated, 'css/*.css').then(function(response) {
      callback({
        resourceURL: '/css/main.css',
        contents: response,
        reload: reload,
      });
    });
  });
});

server.once('ready', function() {
  console.log('[[ watching files ]]');
});
