'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



var ProjectSchema = new Schema({
    name: String,
    info: String,
	stages: [{
            name: String,
			isDone: Boolean,
            isActive: Boolean,
			inititaldesignnotes: String,
			tasks: [{task: String, isDone: Boolean}],
			dueDate: Date,
			assigned: {type: Schema.Types.ObjectId, ref: 'User' },
            documents:[{url: String}]
		}],
    active: Boolean
});



module.exports = mongoose.model('Project', ProjectSchema);
