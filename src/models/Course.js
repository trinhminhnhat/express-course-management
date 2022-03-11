const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
	name: { type: String, maxLength: 255 },
	description: { type: String, maxLength: 600 },
	image: { type: String, maxLength: 255 },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
