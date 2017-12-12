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
        if(req.cookies.id === undefined)
            return res.render('login', {title: 'runner'});
        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'runner'
            });
        var sql = "select u.fullname as name, r.mileage as mileage from run r, users u where u.user_id = r.user_id";
        con.connect(function(err) {
            if (err) throw err;
            con.query(sql, function (err, result, fields) {
                if (err) throw err;
                res.render('index', {data: result, title: 'runner'});
                con.end();
            });
        });
       
	},
	search(req, res) {
        if(req.cookies.id === undefined)
            return res.render('login', {title: 'runner'});

		res.render('search', {title: 'runner'});
	},
	settings(req, res) {
        if(req.cookies.id === undefined)
            return res.render('login', {title: 'runner'});
		res.render('settings', {title: 'runner'});
	},
	history(req, res) {
        if(req.cookies.id === undefined)
            return res.render('login', {title: 'runner'});
        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'runner'
            });
        var sql = "select run_date, mileage, description from run where user_id =" + "\"" + req.cookies.id + "\"";
        con.connect(function(err) {
            if (err) throw err;
            con.query(sql, function (err, result, fields) {
                if (err) throw err;
                res.render('history', {data: result, title: 'runner'});
                con.end();
            });
        });
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