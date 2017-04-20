(function() {
    'use strict'



    /*
        var promise = $.ajax({ //Realizamos la petición
            dataType: 'json',
            url: root + '/posts/1',
            method: 'GET'
        });
        promise.then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
        var promises = [];
        for (var i = 1; i < 11; i++) {
            var promise = $.ajax({ //Realizamos cada petición
                dataType: 'json',
                url: root + '/posts/' + i,
                method: 'GET'
            });
            promises.push(promise); //Las incluimos en un array
        }

        //Ejecución paralela
        Promise.all(promises).then(function(responses) { //Una vez que todas hayan sido respondidas correctamente se ejecuta esta función
            console.log(responses);
            var html = responses.reduce(function(total, response) {
                return total + '<li><h2>' + response.title + '</h2><p>' + response.body + '</p></li>';
            }, '');
            $('#about-us').append(html);
        }).catch(function() {
            console.log(arguments);
        });
    })();

    //Ejeución de la primera que llegue

    Promise.race(promises).then(function() {
        //Primera que ha terminado
    }).catch(function() {
        //Primera con error
    });




    //Ejecución secuencial

    var promise1 = $.ajax({ //Realizamos la petición
        dataType: 'json',
        url: root + '/posts/1',
        method: 'GET'
    });

    var promise2 = $.ajax({ //Realizamos la petición
        dataType: 'json',
        url: root + '/posts/2',
        method: 'GET'
    });

    var promise3 = $.ajax({ //Realizamos la petición
        dataType: 'json',
        url: root + '/posts/3',
        method: 'GET'
    });

    promise2.catch(function() {
        //promise2 error
    });
    promise3.catch(function() {
        //Promise3 error
    });

    function doStuff() {
        promise1.then(function() {
            return promise2;
        }).then(function() {
            return promise3;
        }).then(function() {
            //Your code
        }).catch(function() {
            //Catch
        });

    }


    doStuff().then(function(response) {

    });



    //Ejecución de promesas no asíncronas


    var createdPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            //do stuff
            resolve('magic');
        }, 5000);
    });

    createdPromise.then(function(response) {
        //magic
    });


    var quickPromise = Promise.resolve(true);

    quickPromise.then(function(response) {
        return response ? 10 : 0;
    }).then(function(response) {
        return response > i ? {} : [];
    });


    //Ejemplo

    function login(username, password, prtovider) {
        return loginProvider(username, password, loginProvider).then(
            function(responseFB) {
                return loginOauth(responseFB);
            }).then(function(responseOauth) {
            return loginWithServer(responseOauth);
        }).then(function(response) {
            return setLoggedIn(response);
        }).then(function() {
            return getLoggedInUser();
        });

        */


    //Capa de servicio para comunicarnos con un backend
    var data = {
        'userId': 1,
        'title': 'My post',
        'body': 'post body'
    };

    var services = {
        root: 'https://jsonplaceholder.typicode.com',
        getPosts: getPosts,
        createPost: createPost,
        updatePost: updatePost
    };

    function getPosts(postId) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + '/posts/' + postId
        });
    }

    function createPost(data) {
        return $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/posts',
            data: JSON.stringify(data)
        });
    }

    function updatePost(id, data) {
        return $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/posts' + id,
            data: JSON.stringify(data)
        });
    }

    function deletePost(id) {
        return $.ajax({
            type: 'DELETE',
            url: this.root + '/posts' + id
        });
    }

    services.createPost(data).then(function(response) {
        console.log('POST', response);
        return services.getPosts(1);
    }).then(function(response) {
        console.log('GET', response);
    }).catch(function(error) {
        console.error('POST', error);
    });
})();
