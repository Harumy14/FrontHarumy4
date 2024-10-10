function showModalJogos() {
    document.getElementById("myModalJogos").style.display = "block";
}

function hideModalJogos() {
    document.getElementById("myModalJogos").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalJogos");
    if (event.target == modal) {
        hideModalJogos();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}