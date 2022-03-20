const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/education_dev');
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error(error);
	}
}

module.exports = { connect };
