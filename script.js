/** Help */
function log(message) {
    console.log(message);
}

/**app */
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/** Our cards */
cards.forEach( card => {

    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);

});

function dragstart() {
    // log('> Card: Start dragging');
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
    this.classList.add('is-dragging');
}

function drag() {
    // log('> Card: Is dragging');

}

function dragend() {
    // log('> Card: Stop drag!');
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging');

}

/** Place where we will drop cards */

dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);

});

function dragenter() {
    // log('> Dropzone: Enter in zone');
}
function dragover() {
    // log('> Dropzone: Over ');
    this.classList.add('over');

    //get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging');

    this.appendChild(cardBeingDragged);
}

function dragleave() {
    // log('> Dropzone: Leave');
    this.classList.remove('over');
}

function drop() {
    // log('> Dropzone: Dropped');
    this.classList.remove('over');
}

const trash = document.querySelector('.trash');
const trashboard = document.querySelector('.trash-board')
console.log(trash);

trash.addEventListener('click', trashEvent);


function trashEvent(){

    // console.log(trashboard.classList.contains('invisibel'))
    
    if(trashboard.classList.contains('invisibel')){
        trashboard.classList.remove('invisibel');
    } else {
        trashboard.classList.add('invisibel');
    }

    
}


function visibel(){
    console.log(true);
}

function invisibel(){
    console.log(false);
}