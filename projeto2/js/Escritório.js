function showModalEscritorio() {
    document.getElementById("myModalEscritorio").style.display = "block";
}

function hideModalEscritorio() {
    document.getElementById("myModalEscritorio").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalEscritorio");
    if (event.target == modal) {
        hideModalEscritorio();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}