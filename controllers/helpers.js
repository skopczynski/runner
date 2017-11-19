const routes = require('express').Router();

module.exports = {
    home(req, res){
        res.render('index', {title: 'Fart'})
    },
    loginPage(req, res){
        res.render('login')
    },
    loginUser(req, res){
        res.send('loginuser')
    },
    handleError(req,res){
        res.send('error')
    }
}
