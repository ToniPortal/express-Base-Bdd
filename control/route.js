// route.js - route module.
const express = require("express");
const control = express.Router();

control.get('/', function (req, res) {
    res.render("index")
});

control.get('/logout', function (req, res) {

    res.clearCookie('token');
    res.redirect("/")

});





module.exports = control;