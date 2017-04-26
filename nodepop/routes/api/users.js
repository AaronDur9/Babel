'use strict';



const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');


const jwt = require('jsonwebtoken');
const config = require('../../config');

/*
var  passModule  =  require('s-salt-pepper'); 
// configure once 
passModule.configure({    
    hashLength:  256,
      // bytes of pbkdf2 hash 
        saltLength:  128,
      // number of random bytes for salt 
    digest: 'hex',
    
}); 
*/

const pepper = 'You either die a hero or you live long enough to see yourself become the villain';
var createHash = require('sha.js');

var sha256 = createHash('sha256');
var sha512 = createHash('sha512');

var random = require('random-integer-number');


//LEGACY, do not use in new systems: 
var sha0 = createHash('sha');
var sha1 = createHash('sha1');


//const customError = require('../../modules/customError.js');

// GET /api/users
router.get('/', function(req, res, next) {
    User.findOne({}).exec((err, users) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ successs: true, result: users });
    });
});


// POST /api/users/register
router.post('/register', (req, res, next) => {

    const userInfo = req.body;
    //Insertamos el usuario


    //Hash de la contraseña
    const salt = random(); // => -372719865155431
    const newPass = userInfo.password + salt + pepper;
    const hash = sha256.update(newPass, 'utf8').digest('hex');


    userInfo.password = hash;
    userInfo.salt = salt;


    console.log(userInfo);
    const user = new User(userInfo);

    user.save((err, insertedUser) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, result: insertedUser });

    });

});



//Método de autenticación de los usuarios 
//Recibimos en un post el email y la contraseña
// POST /api/users/login
router.post('/login', (req, res, next) => {
    //Recibimos credenciales
    const email = req.body.email;
    const password = req.body.password;

    //Buscamos al usuario en la BD
    User.findOne({ email }).exec((err, user) => {
        if (err) {
            next(err);
            return;
        }
        if (!user) {
            res.json({ success: false, error: 'El email de usuario no existe' });
            return;
        }
        //Si existe, comprobamos su pass
        const newPass = password + user.salt + pepper;

        const hash = sha256.update(newPass, 'utf8').digest('hex');


        if (hash !== user.password) {
            res.json({ success: false, error: 'Contraseña incorrecta' });
            return;
        }
        //Si la pass coincide, creamos un token  JWT
        jwt.sign({ user_id: user._id }, config.jwtSecret, config.jwtConfig, (err, token) => {
            if (err) {
                next(err);
                return;
            }
            //Se lo devolvemos
            res.json({ success: true, token: token });
        });
    });
});


module.exports = router;