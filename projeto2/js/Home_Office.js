function showModalHome_Office() {
    document.getElementById("myModalHome_Office").style.display = "block";
}

function hideModalHome_Office() {
    document.getElementById("myModalHome_Office").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalHome_Office");
    if (event.target == modal) {
        hideModalHome_Office();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}