function showModalAnalista() {
    document.getElementById("myModalAnalista").style.display = "block";
}

function hideModalAnalista() {
    document.getElementById("myModalAnalista").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalAnalista");
    if (event.target == modal) {
        hideModalAnalista();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}