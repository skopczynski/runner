const helpers = require('../controllers/helpers');

module.exports = (app) => {
    app.route('/')
        .get(helpers.home)

    app.route('/login')
        .get(helpers.loginPage)
        .post(helpers.loginUser)

    app.route('*')
        .get(helpers.handleError)
}
