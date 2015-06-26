'use strict';

var _ = require('lodash');
var Project = require('./project.model');
var User = require('./../user/user.model');

// Get list of things
exports.index = function(req, res) {

    var usrRole = req.user.role;

    if (usrRole == "user" && req.query.all != "true" ){
    User.findById(req.user._id)
        .populate('projects')
    .exec(function(err, user){
         if(err) { return handleError(res, err); }
        console.log(user)

    return res.json(200, user.projects);
        });


    } else {
       Project.find(function (err, projects) {
    if(err) { return handleError(res, err); }
    return res.json(200, projects);
        });

    }


};



// Get a single thing
exports.show = function(req, res) {
  Project.findById(req.params.id, function (err, project) {
    if(err) { return handleError(res, err); }
    if(!project) { return res.send(404); }
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
