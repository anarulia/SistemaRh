const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	idade: {
		type: String,
		required: true,
	},
	formacao: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},

});

mongoose.model('User', UserSchema);