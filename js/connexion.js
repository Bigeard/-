
var dataEmail = "robin.bigeard@gmail.com";
var dataImage = "img/profil/robin_bigeard.png";
var dataName = "Robin Bigeard";
var dataPassword = "nuggetsnuggets";

var conteurEmail = 0;
var conteurPassword = 0;

function checkEmail(email) {
    if (email.match('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')) {
        if (email == dataEmail) {
            isValid = true;
            document.getElementById("div1").style.display = "none";
            document.getElementById("imageProfil").src = dataImage;
            document.getElementById("nameProfil").innerHTML = dataName;
            document.getElementById("div2").style.display = "block";

        } else {
            isValid = false;
            document.getElementById("falseEmail").innerHTML = "Email invalide";
        }
    }
    else {
        document.getElementById("falseEmail").innerHTML = "Email n'est pas en norme: exemple@email.com";
        isValid = false;
    }
    return isValid;
}

function onClickLoginEmail() {
    var email = document.getElementById('email').value;
    var isValid = checkEmail(email);
}



function checkPassword(email, password) {

    if (password.match('.{8,}')) {
        if (password == dataPassword && email == dataEmail) {
            isValid = true;
            document.location.href = "message.html";
        } else {
            isValid = false;
            document.getElementById("falsePassword").innerHTML = "Mot de passe invalide";
            document.getElementById("motDePasseOublier").style.display = "block";
        }
    }
    else {
        document.getElementById("falsePassword").innerHTML = "Le mot de passe doit contenir plus de 8 caractères";
        document.getElementById("motDePasseOublier").style.display = "block";
    }
    return isValid;
}

function onClickLoginPassword() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var isValid = checkPassword(email, password);
}

function onClickUndo() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";

    document.getElementById("falseEmail").innerHTML = "";

    document.getElementById("falsePassword").innerHTML = "";
    document.getElementById("motDePasseOublier").style.display = "none";
}

function capLock(e) {
    kc = e.keyCode ? e.keyCode : e.which;
    sk = e.shiftKey ? e.shiftKey : ((kc == 16) ? true : false);
    if (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk)) {
        console.log("actif");
        document.getElementById("tooltip").style.display = "block";
    }
    else {
        console.log("inactif");
        document.getElementById("tooltip").style.display = "none";
    }
}