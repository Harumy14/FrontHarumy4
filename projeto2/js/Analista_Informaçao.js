function showModalAnalista_Informaçao() {
    document.getElementById("myModalAnalista_Informaçao").style.display = "block";
}

function hideModalAnalista_Informaçao() {
    document.getElementById("myModalAnalista_Informaçao").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalAnalista_Informaçao");
    if (event.target == modal) {
        hideModalAnalista_Informaçao();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}