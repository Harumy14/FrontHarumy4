function showModalTecnico() {
    document.getElementById("myModalTecnico").style.display = "block";
}

function hideModalTecnico() {
    document.getElementById("myModalTecnico").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalTecnico");
    if (event.target == modal) {
        hideModalTecnico();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}