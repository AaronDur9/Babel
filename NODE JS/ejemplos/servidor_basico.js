//Cargamos el módulo de http ()
const http = require('http');


//Definimos el comportamiento de neustro servidor
const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

    response.end('Wake up, <b>Neo</b>...\n');

});



//Arrancamos el servidor

server.listen(1337, '127.0.0.1');
console.log('servidor arrancado en http://127.0.0.1:1337');
