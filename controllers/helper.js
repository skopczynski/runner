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

        let userid;
        const con = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'password',
            database : 'runner'
        });

        sql = "select user_id from users where fullname=" +"\"" +req.body.name+ "\""+"and user_password="+ "\"" +req.body.password +"\"" + "and class_year=" +req.body.year +";";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.cookie('id', result[0].user_id).redirect('/')
            con.end();
        });

		res.render('index', {title: 'runner'});
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
	update_shoe(req,res){
		res.render('update_shoe', {title:'runner'});
	},
	team_advanced(req,res){
		res.render('team_advanced', {title:'runner'});
	}
};