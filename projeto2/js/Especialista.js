function showModalEspecialista() {
    document.getElementById("myModalEspecialista").style.display = "block";
}

function hideModalEspecialista() {
    document.getElementById("myModalEspecialista").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalEspecialista");
    if (event.target == modal) {
        hideModalEspecialista();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}