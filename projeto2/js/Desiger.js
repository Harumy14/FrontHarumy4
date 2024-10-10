function showModalDesiger() {
    document.getElementById("myModalDesiger").style.display = "block";
}

function hideModalDesiger() {
    document.getElementById("myModalDesiger").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalDesiger");
    if (event.target == modal) {
        hideModalDesiger();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}