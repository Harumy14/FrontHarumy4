function showModalGerente() {
    document.getElementById("myModalGerente").style.display = "block";
}

function hideModalGerente() {
    document.getElementById("myModalGerente").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalGerente");
    if (event.target == modal) {
        hideModalGerente();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}