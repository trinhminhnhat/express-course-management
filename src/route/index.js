const siteRouter = require('./site');
const meRouter = require('./me');
const newsRouter = require('./news');
const courseRouter = require('./course');

function route(app) {
	app.use('/courses', courseRouter);
	app.use('/me', meRouter);
	app.use('/news', newsRouter);
	app.use('/', siteRouter);
}

module.exports = route;
