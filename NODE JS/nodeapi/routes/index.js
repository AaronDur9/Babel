var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const segundo = (new Date()).getSeconds();
    res.render('index', {
        title: 'NodeAPI',
        textoSinEscapar: '<p>sin escapar</p>',
        condicion: {
            segundo: segundo,
            estado: segundo % 2 === 0
        },
        usuarios: [
            { nombre: 'Smith' },
            { nombre: 'Jones' }
        ]
    });
});


router.get('/parametros/:id', function(req, res, next) {
    const id = req.params.id;
    console.log(req.params);
    res.send('ok');

});


router.get('/parametros/piso/:piso/puerta/:puerta', function(req, res, next) {
    console.log('req.params', req.params);
    res.send('varios parámetros');

});



//parámetros en la query-string - http://localhost:3000/?variable=valor&varuable2=valor2
// La ? indica que los parámetros son opcionales
router.get('/parametros', function(req, res, next) {
    console.log('req.query', req.query);
    res.send('ok con query');
});

//Parámetros en el body
router.post('/parametros', function(req, res, next) {
    console.log('req.body', req.body);
    res.send('ok, recibido post');
});



module.exports = router;
