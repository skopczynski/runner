const routes = require('express').Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'runner'
});
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
		console.log(req.body);
		res.redirect('/');
    },
    settings(req, res){
        console.log(req.body)
        res.redirect('/')
    },
    wellness(req, res){
        console.log(req.body)
        res.redirect('/')
    }
};