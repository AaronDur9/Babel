// --ESTO ES EL CONTROLADOR DE AGENTES

'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Le pedimos a mongoose el modelo de Agente
const Agente = mongoose.model('Agente');
const basicAuth = require('../../lib/basicAuth');

//
const jwtAuth = require('../../lib/jwtAuth');

//router.use(basicAuth('admin', 'god'));

router.use(jwtAuth);


// GET /apiv1/agentes
router.get('/', (req, res, next) => {
    console.log('Usuario autenticado con _id:',req.usuario_id);
    
    const name = req.query.name;
    const age = req.query.age;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const select = req.query.select;
    const sort = req.query.sort;

    const criterios = {};

    //Solo añadimos la condición de búsqueda por nombre si me pasan un nombre
    //Sino haremos una búsqueda vacía.
    if(name) {
        criterios.name = name;
    }
    if(age) {
        criterios.age = age;
    }
    

    //recuperamos una lista de agentes
    Agente.list(criterios, limit,skip,select,sort,(err, agentes) => {
        if(err) {
            next(err);
            return;
        }
        res.json({ successs: true, result: agentes});
    });
});


// GET /apiv1/agentes/id
router.get('/:id', (req, res, next) => {
    
    const id = req.params.id;
    //recuperamos una lista de agentes
    Agente.findOne({_id: id}).exec((err, agentes) => {
        if(err) {
            next(err);
            return;
        }
        res.json({ successs: true, result: agentes});
    });
});


//Post para modificar el estado del servidor (crear recursos)
// POST /apiv1/agentes
router.post('/', (req, res, next) => {
    
    const datosAgente = req.body;

    //Creo instancia del agente
    const agente = new Agente(datosAgente);

    //Lo guardo en la BD
    agente.save((err,agenteGuardado) => {
        if(err){
            next(err);
            return;
        }
        res.json({success: true, result: agenteGuardado});

    });
    
});

// PUT /apiv1/agentes/:id
//Con mongoose no hace falta poner &set en los updates
//Por defecto es una actualización parcial
router.put('/:id', (req,res,next) => {
    const datosAgente = req.body;
    const id = req.params.id;
    Agente.update({_id: id}, datosAgente, (err) => {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true});
    });
});

// DELETE /apiv1/agentes/:id
router.delete('/:id', (req,res,next) => {
    const id = req.params.id;
    Agente.remove({_id: id}, (err) => {
        if(err) {
            next(err);
            return;
        }
        res.json({success: true});
    });
});






module.exports = router;