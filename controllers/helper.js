const routes = require('express').Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'runner'
});
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
    signupPage(req, res){
        res.render('signup', {title: 'runner'})
    },
	new_run(req, res){
		res.render('new_run', {title:'runner'});			
	},
	wellness(req, res){
		res.render('wellness', {title:'runner'});
	},
	advanced(req, res){
		res.render('advanced', {title:'runner'});
	},
	add_shoe(req, res){
		res.render('add_shoe', {title:'runner'});
	},
	team_advanced(req,res){
		res.render('team_advanced', {title:'runner'});
	}
};