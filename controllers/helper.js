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
    },
	save_run(req,res){
		connection.connect(function(err){
			if(!err) {
				  console.log("Hi");
			} else {
				console.log("Error connecting database ... nn");    
			}
		});
		console.log(req.body);
		res.redirect('/');
	},
	new_run(req, res){
		res.render('new_run', {title:'runner'});			
	}
};