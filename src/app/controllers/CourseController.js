const Course = require('../../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
	// [GET] /courses/:slug
	show(req, res, next) {
		Course.findOne({ slug: req.params.slug })
			.then(course => {
				res.render('courses/show', {
					course: mongooseToObject(course),
				});
			})
			.catch(next);
	}

	// [GET] /courses/create
	create(req, res) {
		res.render('courses/create');
	}

	// [POST] /courses/store
	store(req, res, next) {
		const formData = req.body;
		formData.image = `https://img.youtube.com/vi/${formData.video_id}/sddefault.jpg`;
		const course = new Course(formData);
		course
			.save()
			.then(() => res.redirect('/'))
			.catch(next);
	}
}

module.exports = new CourseController();
