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

	app.route('/login')
        .get(helper.login)
        
    app.route('/signup')
		.get(helper.signup)
};