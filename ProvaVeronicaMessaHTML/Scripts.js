// JavaScript source code
function Change() {
    //preleva gli elementi di tipo input di tipo text e password
    let inputs = document.querySelectorAll("input[type='text']");
    let button = document.querySelector("input[type='submit']");

    button.disabled = ""; // abilito il bottone

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            button.disabled = "disabled";
            break;
        }
    }

}

function Subscribe() {
    let storageType = "localStorage";
    let storageutente = (storageType in window && window[storageType] != null) ? window[storageType] : null;
    let utente = document.getElementById("utente").value;
    storageutente.setItem('Utente', utente);
   
}

function RemoveAll() {
    let storageName = (document.getElementById("utente").checked) ? "localStorage" : "sessionStorage";
    try {
        let storage = (storageName in window && window[storageName] != null) ? window[storageName] : null;
        storage.clear();
    } catch (e) {
        alert(e.Message);
    }
}
function Benvenuto() {
    let storage = window["localStorage"]
    let nome = storage.getItem("Utente");
    if (nome == null) {
        alert("Benvenuto nuovo utente")
    } else {
        alert("Benvenuto" + ' ' + nome);
    }
}