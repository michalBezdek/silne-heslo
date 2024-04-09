let abeceda = "abcdefghijklmnopqrstuvwxyz"
let cisla = "0123456789"
let znaky = ",.-§)!?:_|"

function silneHeslo() {
    let iDelka = parseInt(document.getElementById("delka").value);
    
 
    let celek = abeceda + abeceda.toUpperCase() + cisla + znaky;

  
    let newPass = "";
    newPass += abeceda[Math.floor(Math.random() * abeceda.length)];
    newPass += cisla[Math.floor(Math.random() * cisla.length)];
    newPass += znaky[Math.floor(Math.random() * znaky.length)];


    for (let i = 0; i < iDelka - 3; i++) {
        newPass += celek[Math.floor(Math.random() * celek.length)];
    }


    document.getElementById("heslo").innerHTML = newPass.slice(0, iDelka);
}
function registrace() {
    let username = prompt("Zadejte uživatelské jméno:");
    let password = prompt("Zadejte heslo:");
    localStorage.setItem(username, password);
    alert("Registrace úspěšná!");
}

function prihlaseni() {
    let username = prompt("Zadejte uživatelské jméno:");
    let password = prompt("Zadejte heslo:");
    let storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        alert("Přihlášení úspěšné!");
    } else {
        alert("Chybné uživatelské jméno nebo heslo.");
    }
}