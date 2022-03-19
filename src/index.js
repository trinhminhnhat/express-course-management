const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const sortMiddleware = require('./app/middlewares/SortMiddleware');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./route');
const db = require('./config/db');

// Connect database
db.connect();

// public folder
app.use(express.static(path.join(__dirname, 'public')));

// handle middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sortMiddleware);

// HTTP logger
app.use(morgan('combined'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Template engine
app.engine(
	'hbs',
	engine({
		extname: '.hbs',
		helpers: {
			sum: (a, b) => a + b,
			sortable: (column, sort) => {
				const sortType = sort.column === column ? sort.type : 'default';
				const icons = {
					default: 'fa-solid fa-sort',
					asc: 'fa-solid fa-sort-down',
					desc: 'fa-solid fa-sort-up',
				};
				const types = {
					default: 'desc',
					asc: 'desc',
					desc: 'asc',
				};

				return `<a href="?_sort&column=${column}&type=${types[sortType]}">
							<i class="${icons[sortType]}"></i>
						</a>`;
			},
		},
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
