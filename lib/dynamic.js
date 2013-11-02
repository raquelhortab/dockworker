var buildCommand = require('./buildCommand');
var app = require('./launchApplication');
var express = require('express');

var app = module.exports = express();

app.get('/tail', function (req, res) {
  console.log('<><tail><>')
  console.log(buildCommand)
  console.log(app)
  console.log('<></tail><>')
  if (buildCommand.cmd && app.buildRunning) {
    res.redirect('/static/build.html');
  }
  else {
    res.redirect('/static/log.html');
  }
});