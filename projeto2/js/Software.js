function showModalSoftware() {
    document.getElementById("myModalSoftware").style.display = "block";
}

function hideModalSoftware() {
    document.getElementById("myModalSoftware").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalSoftware");
    if (event.target == modal) {
        hideModalSoftware();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}