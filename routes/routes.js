const helper = require('../controllers/helper');

module.exports = function (app) {
	app.route('/')
		.get(helper.home)
	
	app.route('/search')
		.get(helper.search)

	app.route('/history')
		.get(helper.history)

	app.route('/settings')
		.get(helper.settings)
};