function showModalEngenheiro() {
    document.getElementById("myModalEngenheiro").style.display = "block";
}

function hideModalEngenheiro() {
    document.getElementById("myModalEngenheiro").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalEngenheiro");
    if (event.target == modal) {
        hideModalEngenheiro();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}