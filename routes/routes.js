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
		.post(postHelper.advanced)

	app.route('/add_shoe')
		.get(helper.add_shoe)
		.post(postHelper.add_shoe)
	app.route('/update_shoe')
		.get(helper.update_shoe)
		.post(postHelper.update_shoe)
	app.route('/team_advanced')
		.get(helper.team_advanced)
		.post(postHelper.team_advanced)
};