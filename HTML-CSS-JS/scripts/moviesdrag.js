'use strict'



// Guarda el elemento que va a ser arrastrado
var dragSrcEl = null;
var cols = document.querySelectorAll('#movies article');

function handleDragStart(e) {
    // Target (this) element is the source node.
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}



function handleDragEnd(e) {
    // this|e.target is the source node.
    this.style.opacity = '1';
    [].forEach.call(cols, function(col) {
        col.classList.remove('over');
    });

}


function moviesDragInit() {
    [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragend', handleDragEnd, false);
        col.addEventListener('dragenter', handleDragEnter, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('drop', handleDragDrop, false);
    });
}


function handleDragDrop(e) {
    // this/e.target is current target element.
    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }
    // Cambiamos el html del elemento arrastrado por el del que está debajo de donde lo soltamos.
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}


// Un elemento que se está arrastrando ha entrado en este elemento
function handleDragEnter(e) {
    // Le ponemos la clase 'over' al elemento que está debajo del arrastrado
    this.classList.add('over');

}
// Un elemento que se está arrastrando ha salido en este elemento
function handleDragLeave(e) {
    // Le quitamos la clase 'over' al elemento que está debajo del arrastrado
    this.classList.remove('over');

}
