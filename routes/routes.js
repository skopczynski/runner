const helper = require('../controllers/helper');
const postHelper = require('../controllers/postHelper');

module.exports = function (app) {
	app.route('/')
		.get(helper.home)

	app.route('/search')
		.get(helper.search)

	app.route('/history')
		.get(helper.history)

	app.route('/settings')
        	.get(helper.settings)
        	.post(postHelper.settings)

	app.route('/new_run')	
		.get(helper.new_run)
		.post(postHelper.save_run)
		
	app.route('/login')
        	.get(helper.loginPage)
        	.post(postHelper.loginUser)
        
   	 app.route('/signup')
        	.get(helper.signupPage)
		.post(postHelper.signupUser)
	
	app.route('/wellness')
		.get(helper.wellness)
		.post(postHelper.wellness)
	app.route('/advanced')
		.get(helper.advanced)
};