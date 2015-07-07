'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



var ProjectSchema = new Schema({
    name: String,
    info: String,
	stages: {
		mockup: {
			isDone: Boolean,
            isActive: Boolean,
			inititaldesignnotes: String,
			tasks: [{task: String, isDone: Boolean}],
			dueDate: Date,
			assigned: {type: Schema.Types.ObjectId, ref: 'User' }
		},
	functionality: {
		isDone: Boolean,
        isActive: Boolean,
		dueDate: Date,
		tasks: [{task: String, isDone: Boolean}],
		assigned: {type: Schema.Types.ObjectId, ref: 'User' }
	},
	content: {
		isDone: Boolean,
        isActive: Boolean,
		dueDate: Date,
		pages: [{title: String, location: String, isDone: Boolean}],
		assigned: {type: Schema.Types.ObjectId, ref: 'User' }
	},
	UAT: {
		isDone: Boolean,
        isActive: Boolean,
		dueDate: Date,
		tasks: [{task: String, isDone: Boolean}],
		assigned: {type: Schema.Types.ObjectId, ref: 'User' }
	},
	QA: {
		isDone: Boolean,
        isActive: Boolean,
		dueDate: Date,
		tasks: [{task: String, isDone: Boolean}],
		assigned: {type: Schema.Types.ObjectId, ref: 'User' }
	}
	},
    active: Boolean
});



module.exports = mongoose.model('Project', ProjectSchema);
