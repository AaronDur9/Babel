'use strict';



const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');

// GET /apiv1/users
router.get('/', function(req, res, next) {
  User.findOne({}).exec((err, users) => {
        if(err) {
            next(err);
            return;
        }
        res.json({ successs: true, result: users});
    });
});

module.exports = router;



