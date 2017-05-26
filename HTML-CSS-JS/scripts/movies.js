'use strict';

(function() {

    window.service.photo.getPhotos({
        //limit: document.getElementById('movies').dataSet.length
        limit: $('#movies').data('newPosts')
    }).then(function(responses) {
        console.log(responses);
        var html = responses.reduce(function(total, response, index, list) {
            console.log(arguments);
            return total + '<article class="col-lg-3 col-md-6 col-xs-12" draggable="true"><img draggable="false" src="' + response.url + '" alt="' + response.title + '"><h3>' + response.title + '</h3><p>lorem lorem</p></article>';
        }, '');

        $('#movies div').append(html);
        moviesDragInit();
    }).catch(function() {
        console.log(arguments);
    });

})();
