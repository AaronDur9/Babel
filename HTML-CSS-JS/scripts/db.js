'use strict';
// var indexedDB = window.indexedDB || window.mozIndexedDB || // window.webkitIndexedDB || window.msIndexedDB;
// El segundo parámetro de open indica la versión
// Cuando cambias ese número se ejecuta el onupgradeneeded()
var request = indexedDB.open("database", 2);
var db;
var lastPeopleRequested = undefined;


request.onsuccess = function(e) {
    console.log('Base de datos cargada correctamente ');
    db = request.result;
    fetch('https://jsonplaceholder.typicode.com/users').then(function(response) {
        return response.json();
    }).then(saveElements);
}

// Zangodb replica la sintaxis de mongodb

function save(json) {
    let people = json;
    var transaction = db.transaction("people", "readwrite");
    transaction.oncomplete = function(event) {
        alert("All done!");
    };
    transaction.onerror = function(event) {
        // handle errors!
    };
    var peopleObjectStore = transaction.objectStore("people");
    for (var i in people) {
        var addResponse = peopleObjectStore.add(people[i]);
        addResponse.onsuccess = (function(i) {
            return function() {
                console.log('added', i);
            }
        })(i);
    }
}

request.onerror = function(e) {
    console.log('Error cargando la base de datos');
}

;
// Se ejecuta este método cuando se actualiza la versión de la base de datos.
//Este método debe contener toda la estructura de la base de datos.
request.onupgradeneeded = function(e) {
    var db = event.target.result;

    var objectStore = db.createObjectStore("people", {
        keyPath: 'id',
        autoIncrement: true
    });
    objectStore.createIndex('by_name', 'name', {
        unique: false
    });
    objectStore.createIndex('by_email', 'email', {
        unique: true
    });

}
