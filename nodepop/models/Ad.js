'use strict';

// --ESTO ES EL MODELO DE ARTÍCULOS




//Conectamos a la base de datos
//require('../lib/connectMongoose');

const mongoose = require('mongoose');

//Creamos un esquema
const adSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    state: {
        //De momento de tipo String y se comprueba por código
        type: String
        
        //En venta o se busca
        //enum: ['ON_SALE', 'WANTED']
        //default: 'ON_SALE'

    },
    price: {
        type:Number,
        min: 0
    },
    img_path: String,
    //El array de tags solo puede tener 4 valores
    //De momento se comprueba mediante código, NO en el schema
    tags: [] 
});






var Ad = mongoose.model('Ad', adSchema);




//PRUEBA
/*
const ad = new Ad({
    name: 'First Ad',
    state: 'ON_SALE',
    price: 15,
    img_path: './img/firstImg.jpg',
    tags: ['tag1', 'tag2']
});

ad.save(function(err, createdAd) {
    if(err){
        console.log('Error saving the ad');
    }
    console.log(createdAd);
});

*/