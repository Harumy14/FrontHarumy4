function showModalArquiteto() {
    document.getElementById("myModalArquiteto").style.display = "block";
}

function hideModalArquiteto() {
    document.getElementById("myModalArquiteto").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalArquiteto");
    if (event.target == modal) {
        hideModalArquiteto();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}