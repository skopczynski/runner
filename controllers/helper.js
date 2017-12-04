const routes = require('express').Router();

module.exports = {
	home(req, res) {
		res.render('index', {title: 'runner'});
	},
	search(req, res) {
		res.render('search', {title: 'runner'});
	},
	settings(req, res) {
		res.render('settings', {title: 'runner'});
	},
	history(req, res) {
		res.render('history', {title: 'runner'});
	},
	loginPage(req, res) {
		res.render('login', {title: 'runner'});
    },
    loginUser(req, res){
        console.log(req.body)
        res.redirect('/')
    },
    signupPage(req, res){
        res.render('signup', {title: 'runner'})
    },
    signupUser(req, res){
        console.log(req.body)
        res.redirect('/')
    }
};