let resultado = document.getElementById("resultado");
let minijuego;
let btnMinijuego = document.getElementById("btnMinijuego");

btnMinijuego.addEventListener("click", elegirMinijuego);

function elegirMinijuego(){
    minijuego = ["Piedra, Papel o Tijera", "Adivina el Numero"];

    let elegirJuego = Math.floor(Math.random()*2)+1;
    console.log (elegirJuego);

    if(elegirJuego == 1){
        location.href = "piedraPapelTijera.html";
    } else if (elegirJuego == 2) {
        location.href = "adivinaNumero.html";
    }
}