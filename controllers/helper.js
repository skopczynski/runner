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
	save_run(req,res){
		connection.connect(function(err){
			if(!err) {
				  console.log("Hi");
			} else {
				console.log("Error connecting database ... nn");    
			}
		});
		console.log(req.body.date);
		console.log(req.body.mileage);
		console.log(req.body.feeling);
		res.redirect('/');
	},
	new_run(req, res){
		res.render('new_run', {title:'runner'});			
	},	
	login(req, res) {
		res.render('inout', {title: 'runner'});
	}
};