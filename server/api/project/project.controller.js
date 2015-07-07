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

    return res.json(200, user.projects);
        });


    } else  if(req.query.all == "true" && req.user.role != "admin") {


        var usrProjects = req.user.projects
        var sendProjectArray = [];
         Project.find(function (err, projects) {
    if(err) { return handleError(res, err); }


           for (var i=0; i<projects.length;i++ ){

               if(usrProjects.indexOf(projects[i]._id) == -1 ){
                   sendProjectArray.push(projects[i]);
               }
           }

              return res.json(200, sendProjectArray);
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
  
  Project.findById(req.params.id)
  .populate(  {
	path: 'stages.mockup.assigned',
  select: '-salt -hashedPassword'})
  .exec(function (err, project) {
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
