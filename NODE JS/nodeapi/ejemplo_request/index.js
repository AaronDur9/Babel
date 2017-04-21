'use strict';

const request = require('request');

//Con json: true conseguimos que la respuesta sea un json en vez de un string
request({url: 'https://swapi.co/api/people/1', json: true}, (err,response, body) => {
    //En err aparecerán errores de http
    //Si lo que pedimos no existe lo sabremos mirando el statusCode
    if(err || response.statusCode >= 400) {
        return console.log('Error', err, response.statusCode);
    }

    console.log(body);



});