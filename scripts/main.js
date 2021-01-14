var modal = document.getElementById("fullImageDiv");
//var img = document.getElementById("bCodeLabelsSmall");
var modalImg = document.getElementById("largeImage");
var captionText = document.getElementById("caption");

function zoomImage(imgToZoom) {

    modal = document.getElementById("fullImageDiv");
    modalImg = document.getElementById("largeImage");
    captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgToZoom.src;
    captionText.innerHTML = imgToZoom.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}