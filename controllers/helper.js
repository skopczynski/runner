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
	login(req, res) {
		res.render('login', {title: 'runner'});
    },
    signup(req, res){
        res.render('signup', {title: 'runner'})
    }
};