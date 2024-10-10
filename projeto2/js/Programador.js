function showModalProgramador() {
    document.getElementById("myModalProgramador").style.display = "block";
}

function hideModalProgramador() {
    document.getElementById("myModalProgramador").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalProgramador");
    if (event.target == modal) {
        hideModalProgramador();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}