const routes = require('express').Router();
const mysql = require('mysql');
const moment = require('moment')
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
                var trun =result
                sql = "select cast(run_date as date) as date, sum(mileage) as mileage from run where user_id="+req.cookies.id+" and run_date between date_sub(now(), interval 1 week) and now() group by cast(run_date as date);"
                console.log(sql)
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    var ro = result.map(r => ({day: moment(r.run_date).day(), distance: r.mileage}))
                    ro.sort((a, b) => {
                        return a.day - b.day
                    })

                    console.log(ro)
                    res.render('index', {data: trun, week: ro, title: 'runner'});
                    con.end();
                });
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

