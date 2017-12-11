const routes = require('express').Router();
const mysql = require('mysql');
const moment = require('moment')

module.exports = {
    loginUser(req, res){
        console.log(req.body)
        res.redirect('/')
    },
    signupUser(req, res){
        let userid;
        const con = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'password',
            database : 'runner'
        });
        con.connect(function(err) {
            if (err) throw err;
            var sql = "INSERT INTO users (fullname, user_password, class_year) VALUES (%fullname%, %user_password%, %class_year%)";
            var rep = {"%fullname%":  "\"" +req.body.name+ "\"" , "%user_password%": "\"" + req.body.password + "\"", "%class_year%": req.body.year};
            sql = sql.replace(/%\w+%/g, function(all) {
                return rep[all] || all;
             });
             con.query(sql, function (err, result) {
                if (err) throw err;
                sql = "select user_id from users where fullname=" +"\"" +req.body.name+ "\""+"and user_password="+ "\"" +req.body.password +"\"" + "and class_year=" +req.body.year +";";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    res.cookie('id', result[0].user_id).redirect('/')
                    con.end();
                });
            });
        });

    },
	save_run(req,res){
        let time = moment(req.body.date[0]+ ' ' +req.body.date[1], 'MM-DD-YYYY HH:mm a')
        let myDate =  moment(time).format("YYYY-MM-DD HH:mm:ss");
        const con = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'password',
            database : 'runner'
        });
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO run (user_id, mileage, run_date, feeling, description) VALUES (%user_id%, %mileage%, %run_date%, %feeling%, %description%)";
            var rep = {"%user_id%": req.cookies.id, "%mileage%": req.body.miles, "%run_date%": "\"" + myDate + "\"", "%feeling%": req.body.feeling, "%description%": "\"" + req.body.description + "\""};
            sql = sql.replace(/%\w+%/g, function(all) {
                return rep[all] || all;
             });
             con.query(sql, function (err, result) {
                if (err) throw err;
                con.end();
                console.log("1 record inserted");
            });
        });
        res.redirect('/');
    },
    settings(req, res){
        console.log(req.body)
        res.redirect('/')
    },
    wellness(req, res){
        const con = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'password',
            database : 'runner'
        });
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO health (user_id, stress, meals, sleep, health_date) VALUES (%user_id%, %stress%, %meals%, %sleep%, %health_date%)";
            var rep = {"%user_id%": "1", "%stress%": req.body.stress, "%meals%": req.body.meal , "%sleep%": req.body.sleep, "%health_date%": "\"" + req.body.date + "\""};
            sql = sql.replace(/%\w+%/g, function(all) {
                return rep[all] || all;
             });
             con.query(sql, function (err, result) {
                if (err) throw err;
                con.end();
                console.log("1 record inserted");
            });
        });
        res.redirect('/')
    },
    add_shoe(req,res){
        console.log(req.body)
        res.redirect('/')
    },
    update_shoe(req,res){
        console.log(req.body)
        res.redirect('/')
    },
    advanced(req,res){
        console.log(req.body)
        res.redirect('/')
    },
    team_advanced(req,res){
        console.log(req.body)
        res.redirect('/')
    }
};