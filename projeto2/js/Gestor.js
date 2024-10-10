function showModalGestor() {
    document.getElementById("myModalGestor").style.display = "block";
}

function hideModalGestor() {
    document.getElementById("myModalGestor").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalGestor");
    if (event.target == modal) {
        hideModalGestor();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}