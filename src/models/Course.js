const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
	{
		name: { type: String, maxLength: 255 },
		description: { type: String, maxLength: 600 },
		image: { type: String, maxLength: 255 },
		slug: { type: String, slug: 'name', unique: true },
		videoId: { type: String, maxLength: 100 },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Course', Course);
