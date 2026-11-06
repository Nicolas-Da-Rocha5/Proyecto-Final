
let btnAdivinaNumero = document.getElementById("adivina");
let resultado = document.getElementById("resultado");
let minijuego;
let i;

btnAdivinaNumero.addEventListener("click", adivinaElNumero);

function adivinaElNumero() {

    for (i = 1; i <= 3; i++) {
        minijuego = Math.floor(Math.random() * 10) + 1;
        let numeroJugador = prompt("Ingrese un número del 1 al 10:");
        document.getElementById("consola").innerHTML = `El número elegido aleatoriamente es: ${minijuego}`;

        if (numeroJugador == minijuego) {
            resultado.innerHTML = "Has ganado!";
        } else {
            resultado.innerHTML = "Has perdido";
        }

        if (i == 3) {
            location.href = "index.html";
        }

        sleep(5000);
    }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // usen esto sleep(5000); si no anda me avisan