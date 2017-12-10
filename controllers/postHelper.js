const routes = require('express').Router();
const mysql = require('mysql');


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
            var rep = {"%user_id%": "1", "%mileage%": req.body.miles, "%run_date%": "\"" + req.body.date + "\"", "%feeling%": req.body.feeling, "%description%": "\"" + req.body.description + "\""};
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
        res.redirect('/');
    },
    settings(req, res){
        console.log(req.body)
        res.redirect('/')
    },
    wellness(req, res){
        console.log(req.body)
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