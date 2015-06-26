'use strict';

var _ = require('lodash');
var Project = require('./project.model');

// Get list of things
exports.index = function(req, res) {
  Project.find(function (err, projects) {
    if(err) { return handleError(res, err); }
    return res.json(200, projects);
  });
};



// Get a single thing
exports.show = function(req, res) {
  Project.findById(req.params.id, function (err, project) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.json(project);
  });
};



//Create New Project
exports.create = function(req, res) {
  Project.create(req.body, function(err, project) {
    if(err) { return handleError(res, err); }
    return res.json(201, project);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}
