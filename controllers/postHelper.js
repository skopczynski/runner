const routes = require('express').Router();
const mysql = require('mysql');
const moment = require('moment')

module.exports = {
    loginUser(req, res){
        const con = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'password',
            database : 'runner'
        });
        
        sql = "select user_id from users where fullname=" +"\"" +req.body.user+ "\""+"and user_password="+ "\"" +req.body.password +"\"" + ";";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.cookie('id', result[0].user_id).redirect('/')
            con.end();
        });
        
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
            var dateArray = req.body.date.split("/");
            var newDate = dateArray[2] + '-' + dateArray[0] + '-' + dateArray[1];
            console.log("Connected!");
            var sql = "INSERT INTO health (user_id, stress, meals, sleep, health_date) VALUES (%user_id%, %stress%, %meals%, %sleep%, %health_date%)";
            var rep = {"%user_id%": req.cookies.id, "%stress%": req.body.stress, "%meals%": req.body.meal , "%sleep%": req.body.sleep, "%health_date%": "\"" + newDate + "\""};
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
            var rep = {"%user_id%": req.cookies.id, "%sdate%":"\""  + req.body.sdate + "\"" , "%edate%":"\"" +  req.body.edate + "\""  , "%stype%":"\"" +  req.body.stype + "\"" };
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
        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'runner'
          });
        var sql;
        if(req.body.search =='search1'){
            sql = "SELECT DISTINCT u.fullname ,r.mileage, r.run_date, h.stress, h.meals, h.sleep FROM run r, health h, users u WHERE u.fullname = " + "\"" + req.body.searchvalue + "\"" + " AND u.user_id = h.user_id AND u.user_id = r.user_id AND h.health_date = DATE(r.run_date)"
        }
        else if(req.body.search == 'search2'){
            var dateArray = req.body.searchvalue.split("/");
            var newDate = dateArray[2] + '-' + dateArray[0] + '-' + dateArray[1];
            sql = "SELECT DISTINCT u.fullname ,r.mileage, r.run_date, h.stress, h.meals, h.sleep FROM run r, health h, users u WHERE DATE(r.run_date) = " + "\"" + newDate + "\"" + " AND u.user_id = h.user_id AND u.user_id = r.user_id AND h.health_date = DATE(r.run_date)";
        }
        else if(req.body.search == 'search3'){
            sql = "SELECT DISTINCT u.fullname ,r.mileage, r.run_date, h.stress, h.meals, h.sleep FROM run r, health h, users u WHERE r.mileage = " + "\"" + req.body.searchvalue + "\"" + " AND u.user_id = h.user_id AND u.user_id = r.user_id AND h.health_date = DATE(r.run_date)";
        }
        else if(req.body.search == 'search4'){
            sql = "SELECT DISTINCT u.fullname ,r.mileage, r.run_date, h.stress, h.meals, h.sleep FROM run r, health h, users u WHERE h.stress = " + "\"" + req.body.searchvalue + "\"" + " AND u.user_id = h.user_id AND u.user_id = r.user_id AND h.health_date = DATE(r.run_date)";
        }
        else if(req.body.search == 'search5'){
            sql = "SELECT DISTINCT u.fullname ,r.mileage, r.run_date, h.stress, h.meals, h.sleep FROM run r, health h, users u WHERE h.meals = " + "\"" + req.body.searchvalue + "\"" + " AND u.user_id = h.user_id AND u.user_id = r.user_id AND h.health_date = DATE(r.run_date)";
        }
        else if(req.body.search == 'search6'){
            sql = "SELECT DISTINCT u.fullname ,r.mileage, r.run_date, h.stress, h.meals, h.sleep FROM run r, health h, users u WHERE h.sleep = " + "\"" + req.body.searchvalue + "\"" + " AND u.user_id = h.user_id AND u.user_id = r.user_id AND h.health_date = DATE(r.run_date)";
        }
        con.connect(function(err) {
            if (err) throw err;
            con.query(sql, function (err, result, fields) {
              if (err) throw err;
              res.render('searchresult', {data: result, title: 'runner'});
              con.end();
            });
          });
        
        
    },
    team_advanced(req,res){
        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'runner'
          });
        var sql;
        if(req.body.combo == 'combo5' && req.body.miles == 'miles1'){
            sql = "SELECT u.fullname, A.miles FROM users u, (SELECT SUM(r.mileage) AS miles, r.user_id as users FROM   run r GROUP BY r.user_id) AS A WHERE u.user_id = A.users AND A.miles = (SELECT SUM(mileage) AS B FROM run GROUP BY user_id ORDER BY B DESC LIMIT 1)";
        }
        else if(req.body.combo == 'combo5' && req.body.miles == 'miles2'){
            sql = "SELECT u.fullname, A.miles FROM users u, (SELECT SUM(r.mileage) AS miles, r.user_id as users FROM   run r GROUP BY r.user_id) AS A WHERE u.user_id = A.users AND A.miles = (SELECT SUM(mileage) AS B FROM run GROUP BY user_id ORDER BY B ASC LIMIT 1)";
        }
        else if(req.body.combo == 'combo7'&& req.body.health == 'health1'){
            sql = "SELECT u.fullname, A.Score FROM users u, (SELECT h.stress + h.meals + h.sleep AS Score, h.user_id as users FROM health h ORDER BY Score) AS A WHERE A.Score = (SELECT h.stress + h.meals + h.sleep AS Score FROM health h ORDER BY Score DESC LIMIT 1) AND u.user_id = A.users";
        }
        else if(req.body.combo == 'combo7' && req.body.health == 'health2'){
            sql = "SELECT u.fullname, A.Score FROM users u, (SELECT h.stress + h.meals + h.sleep AS Score, h.user_id as users FROM health h ORDER BY Score) AS A WHERE A.Score = (SELECT h.stress + h.meals + h.sleep AS Score FROM health h ORDER BY Score ASC LIMIT 1) AND u.user_id = A.users";
        }
        else if(req.body.combo == 'combo6' && req.body.shoe == 'shoe1'){
            sql = "SELECT A.total, A.stype FROM  (SELECT COUNT(stype) as total, stype FROM shoe GROUP BY stype) AS A WHERE A.total = (SELECT COUNT(stype) as total FROM shoe GROUP BY stype ORDER BY total DESC LIMIT 1); ";
        }
        else if(req.body.combo == 'combo6' && req.body.shoe == 'shoe2'){
            sql = "SELECT A.total, A.stype FROM  (SELECT COUNT(stype) as total, stype FROM shoe GROUP BY stype) AS A WHERE A.total = (SELECT COUNT(stype) as total FROM shoe GROUP BY stype ORDER BY total ASC LIMIT 1); ";
        }
        con.connect(function(err) {
            if (err) throw err;
            con.query(sql, function (err, result, fields) {
              if (err) throw err;
              console.log(result);
              if(req.body.combo == 'combo5')
                res.render('searchresultteam1', {data: result, title: 'runner'});
              else if(req.body.combo == 'combo7')
                res.render('searchresultteam2', {data: result, title: 'runner'});
              else
                res.render('searchresultteam3', {data: result, title: 'runner'});
              con.end();
            });
          });
    }
};