const Course = require('../../models/Course');

class NewsController {
	// [GET] /news
	index(req, res, next) {
		Course.find({})
			.then(courses => res.json(courses))
			.catch(next);
		// res.render('search');
	}

	// [GET] /news/:slug
	show(req, res) {
		res.send('News Detail');
	}
}

module.exports = new NewsController();
