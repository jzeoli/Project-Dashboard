'use strict';

var _ = require('lodash');
var Project = require('./project.model');
var User = require('./../user/user.model');
var mongoose = require('mongoose');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })



// Get list of things
exports.index = function(req, res) {
	
	var usrRole = req.user.role;
	 if (usrRole == "user"){
	var userProjects = [];	 
		 
	Project.find(function (err, projects) {
    if(err) { return handleError(res, err); }
	
	for (var i=0; i<projects.length;i++){
	for (var key in projects[i].stages){
		if (projects[i].stages.hasOwnProperty(key)){
			var obj = projects[i].stages[key];
				if(obj && obj.assigned){
					if(obj.assigned.toString() == req.user._id.toString() && userProjects.indexOf(projects[i]) == -1 ){
					userProjects.push(projects[i]);
					}
				}
			}
		
	}

	}
	
    return res.json(200, userProjects);
        });
		 
	 }
	
};



// Get a single thing
exports.show = function(req, res) {
  
  Project.findById(req.params.id)
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



exports.update = function(req, res){

    Project.findOneAndUpdate({_id: req.params.id}, req.body, function(project, err) {
            return res.json(200, project)
    });


};


exports.upload = function(req, res){
  return  res.json(200);

};


