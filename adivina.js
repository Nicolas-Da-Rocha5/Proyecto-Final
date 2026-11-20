const tiempoRonda = 11;   // El temporizador tiene un total de 6 segundos (6000 milisegundos)
const tiempoVolver = 6;
let temporizador = null;
let btnAdivinaNumero = document.getElementById("adivina");
let resultado = document.getElementById("resultado");
let minijuego;
let i;

btnAdivinaNumero.addEventListener("click", adivinaElNumero);

function adivinaElNumero() {

    for (i = 1; i <= 3; i++) {

        temporizador = setInterval(() => {
            segundosRestantes = tiempoRonda;
            segundosRestantes --; // Le empieza a restar de uno en uno al reloj (el tiempo)
            if(segundosRestantes <= 0){
                pausarTemporizador(); // Función que sirve para detener la cuenta regresiva y finalizar el turno del jugador
            }
        }, 800); 

        function pausarTemporizador(){
        clearInterval(temporizador); // Se corta el temporizador
        temporizador = null; // Con esto, el reloj se detiene y para la cuenta regresiva
        segundosRestantes = tiempoTurno;
}

        minijuego = Math.floor(Math.random() * 10) + 1;
        let numeroJugador = prompt("Ingrese un número del 1 al 10:");
        document.getElementById("consola").innerHTML = `El número elegido aleatoriamente es: ${minijuego}`;

        if (numeroJugador == minijuego) {
            resultado.innerHTML = "Has ganado!";
        } else {
            resultado.innerHTML = "Has perdido";
        }

        if (i == 3) {
            segundosRestantes = tiempoVolver;
            temporizador = setInterval(() => {
            segundosRestantes --; // Le empieza a restar de uno en uno al reloj (el tiempo)
            if(segundosRestantes <= 0){
                pausarTemporizador(); // Función que sirve para detener la cuenta regresiva y finalizar el turno del jugador
            }
        }, 800); 

        }

        location.href = "index.html";

    }
    
}

