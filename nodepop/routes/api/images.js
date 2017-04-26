'use strict'


const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');



router.get('/:path', function(req, res, next) {
    const path = req.params.path;
    path = '"' + path + '"';
    res.render('index', { path });
});






module.exports = router;