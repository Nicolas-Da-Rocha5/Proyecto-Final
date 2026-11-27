const tiempoRonda = 11;   // El temporizador tiene un total de 11 segundos (11000 milisegundos)
const tiempoVolver = 6;   // El temporizador tiene un total de 6 segundos (6000 milisegundos)
let temporizador = null;
let segundosRestantes = tiempoRonda;
let iniciarJuego = document.getElementById("adivina");
let adivinaNumero = document.getElementById("adivinaNumero");
let turnoJugador = 1;
let rondaJuego = 1;
let numeroAdivinarJugador1;
let numeroAdivinarJugador2;
let numeroAdivinadoJugador1;
let numeroAdivinadoJugador2;
let i;

iniciarJuego.addEventListener("click", iniciarJuego);
adivinaNumero.addEventListener("click", adivinarNumero);

function iniciarJuego(){

    console.log("Se inicio el juego");

    if (rondaJuego == 1){
        document.getElementById("rondaTexto").innerHTML = "Ronda: 01 de 03";
    } else if (rondaJuego == 2){
        document.getElementById("rondaTexto").innerHTML = "Ronda: 02 de 03";
    } else {
        document.getElementById("rondaTexto").innerHTML = "Ronda: 03 de 03";
    }

    if (turnoJugador == 1){

        numeroAdivinarJugador2 = prompt ("Jugador 2, elija un número del 1 al 10 para que el Jugador 1 pueda adivinar:");
        numeroAdivinarJugador2 = parseInt (numeroAdivinarJugador2);

        adivinarNumero();

    } else if (turnoJugador == 2){

        numeroAdivinarJugador1 = prompt ("Jugador 1, elija un número del 1 al 10 para que el Jugador 2 pueda adivinar:");
        numeroAdivinarJugador1 = parseInt (numeroAdivinarJugador1);

        adivinarNumero();

    }



}

function adivinarNumero(){

    if (turnoJugador == 1){
        numeroAdivinadoJugador1 = prompt ("Jugador 1, adivina el número brindado por el Jugador 2:");
        numeroAdivinadoJugador1 = parseInt (numeroAdivinadoJugador1);
    } else if (turnoJugador == 2){
        numeroAdivinadoJugador2 = prompt ("Jugador 2, adivina el número brindado por el Jugador 1:");
        numeroAdivinadoJugador2 = parseInt (numeroAdivinadoJugador2);
    }
    
}


function adivinaElNumero() {

    if (rondaJuego == 1){
        rondaJuego = 2;
        iniciarJuego()
    } else if (rondaJuego == 2){
        rondaJuego = 3;
        iniciarJuego()
    } else if (rondaJuego == 3){

        if (contadorPuntajeJ1 == contadorPuntajeJ2){
            juegoTerminado.innerHTML = "No hubo ganador, hubo un empate";
        } else if (contadorPuntajeJ1 > contadorPuntajeJ2){
            juegoTerminado.innerHTML = "El ganador es el Jugador 1";
        } else {
            juegoTerminado.innerHTML = "El ganador es el Jugador 2";
        }

        segundosRestantes = 6;
        segundosRestantesTexto.innerHTML = "El juego ha terminado, será redirigido a la página principal en: 6 segundos";

        temporizador = setInterval(()=>{
            segundosRestantes--;
            segundosRestantesTexto.innerHTML = `El juego ha terminado, será redirigido a la página principal en ${segundosRestantes} segundos`;
            
            if(segundosRestantes <=0){
                pausarTemporizador();
                location.href = "index.html"; // Redirecciona a la página principal tras haber pasado 6 segundos de espera
            }
        }, 800);


    }


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

