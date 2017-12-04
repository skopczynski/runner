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

	app.route('/new_run')	
		.get(helper.new_run)
		.post(helper.save_run)
		
	app.route('/login')
        .get(helper.loginPage)
        .post(helper.loginUser)
        
    app.route('/signup')
        .get(helper.signupPage)
        .post(helper.signupUser)
};