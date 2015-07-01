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
			assigned: {type: Schema.Types.ObjectId, ref: 'User' }
		},
	functionality: {
		isDone: Boolean,
		dueDate: Date,
		assigned: {type: Schema.Types.ObjectId, ref: 'User' }
	},
	content: {
		isDone: Boolean,
		dueDate: Date,
		assigned: {type: Schema.Types.ObjectId, ref: 'User' }
	},
	UAT: {
		isDone: Boolean,
		dueDate: Date,
		assigned: {type: Schema.Types.ObjectId, ref: 'User' }
	},
	QA: {
		isDone: Boolean,
		dueDate: Date,
		assigned: {type: Schema.Types.ObjectId, ref: 'User' }
	}
	},
    active: Boolean
});



module.exports = mongoose.model('Project', ProjectSchema);
