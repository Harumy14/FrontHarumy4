function showModalAmbos() {
    document.getElementById("myModalAmbos").style.display = "block";
}

function hideModalAmbos() {
    document.getElementById("myModalAmbos").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalAmbos");
    if (event.target == modal) {
        hideModalAmbos();
    }
}