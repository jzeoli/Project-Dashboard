'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



var ProjectSchema = new Schema({
    name: String,
    info: String,
	stages: {
		mockup: {
			isDone: Boolean,
			inititaldesignnotes: String,
			dueDate: Date,
			assigned: String			
		},
	functionality: {
		isDone: Boolean,
		dueDate: Date,
		assigned: String
	},
	content: {
		isDone: Boolean,
		dueDate: Date,
		assigned: String
	},
	UAT: {
		isDone: Boolean,
		dueDate: Date,
		assigned: String
	},
	QA: {
		isDone: Boolean,
		dueDate: Date,
		assigned: String
	}
	},
    active: Boolean
});



module.exports = mongoose.model('Project', ProjectSchema);
