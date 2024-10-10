function showModalTestador() {
    document.getElementById("myModalTestador").style.display = "block";
}

function hideModalTestador() {
    document.getElementById("myModalTestador").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalTestador");
    if (event.target == modal) {
        hideModalTestador();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}