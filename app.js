let dragged;
let div;
let draggableDivTitle;
let removeDiv;
let removeImage;
let addImage;


document.addEventListener("drag", function( event ) {
    if(event.target.className === "draggable") {
        draggableDivTitle = event.target.outerText;
    }


}, false);

document.addEventListener("dragstart", function( event ) {

    if(event.target.className === "draggable") {
        dragged = event.target;
    }


}, false);

document.addEventListener("dragend", function( event ) {


    if(document.getElementById('tempDiv') ) {
        document.getElementById('tempDiv').remove();
    }
    console.log(event);


    event.target.style.opacity = "";

}, false);


document.addEventListener("dragover", function( event ) {


    event.preventDefault();
    if(event.target.className === "draggable") {
        removeImage = event.target;
    }

}, false);

document.addEventListener("dragenter", function( event ) {

    div = event.target;

    if ( event.target.className === "sec" && dragged) {
        div.insertAdjacentHTML('afterbegin', `<h4 id="tempDiv" class="pa-0 ma-0 text-center canvas-title">${draggableDivTitle}</h4>`);
        event.target.style.border = "2px dashed grey";
        event.target.style.backgroundColor = "rgba(88,154,255,0.37)";

    }
    if(event.target.className === "img-container" && dragged){
        event.target.style.border = "2px dashed grey";
        event.target.style.backgroundColor = "rgba(155,193,255,0.37)";
    }


}, false);

document.addEventListener("dragleave", function( event ) {
     removeDiv = document.getElementById('tempDiv');


    if ( event.target.className === "sec" ) {
        event.target.style.border = "";
        event.target.style.backgroundColor = "white"
        removeDiv.remove();
    }
    if(event.target.className === "img-container" && dragged){
        event.target.style.border = "";
        event.target.style.backgroundColor = "white";
    }

}, false);

document.addEventListener("drop", function( event ) {

    event.preventDefault();

    if ( dragged && (event.target.className === "container left-container" || "container main-container") && event.target.className !== "canvas-card chartjs-render-monitor") {
        event.target.style.border = "";
        event.target.style.backgroundColor = "white"
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
        console.log("dropped",event.target.getElementsByClassName('add-img'));
        if(event.target.getElementsByClassName('add-img').length !==0 ) {
            let toremove = event.target.getElementsByClassName('add-img');
            toremove[0].remove();
        }



    }

    dragged = "";
    div = "";
    draggableDivTitle = "";
    removeDiv = "";
    removeImage = "";
}, false);