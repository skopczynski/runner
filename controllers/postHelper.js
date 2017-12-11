const routes = require('express').Router();
const mysql = require('mysql');
const moment = require('moment')

module.exports = {
    loginUser(req, res){
        console.log(req.body)
        res.redirect('/')
    },
    signupUser(req, res){
        console.log(req.body)
        res.redirect('/')
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
            var rep = {"%user_id%": "1", "%mileage%": req.body.miles, "%run_date%": "\"" + myDate + "\"", "%feeling%": req.body.feeling, "%description%": "\"" + req.body.description + "\""};
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
        const con = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'password',
            database : 'runner'
        });
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO shoe (user_id, s_date, e_date, stype) VALUES (%user_id%, %sdate%, %edate%, %stype%)";
            var rep = {"%user_id%": "1", "%sdate%":"\""  + req.body.sdate + "\"" , "%edate%":"\"" +  req.body.edate + "\""  , "%stype%":"\"" +  req.body.stype + "\"" };
            sql = sql.replace(/%\w+%/g, function(all) {
                return rep[all] || all;
             });
             console.log(sql);
             con.query(sql, function (err, result) {
                if (err) throw err;
                con.end();
                console.log("1 record inserted");
            });
        });
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