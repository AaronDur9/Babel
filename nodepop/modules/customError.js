'use strict';



//Creamos un constructor de objetos
function CustomError(err, message) {
    this.err = err;
    this.message = message;

    this.showError = function() {
        console.log(message, err);
    };
}

module.exports = CustomError;