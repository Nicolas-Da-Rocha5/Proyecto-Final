const tiempoRonda = 11;   // El temporizador tiene un total de 11 segundos (11000 milisegundos)
const tiempoVolver = 6;   // El temporizador tiene un total de 6 segundos (6000 milisegundos)
let temporizador = null;
let segundosRestantes = tiempoRonda;
let tiempoRestanteTexto = document.getElementById("tiempoRestanteTexto");
let iniciarJuego = document.getElementById("adivina");
let adivinaNumero = document.getElementById("adivinaNumero");
let turnoJugador = 1;
let rondaJuego = 1;
let numeroAdivinarJugador1;
let numeroAdivinarJugador2;
let numeroAdivinadoJugador1;
let numeroAdivinadoJugador2;
let contadorPuntajeJ1 = 0;
let contadorPuntajeJ2 = 0;
let ganadorRonda = document.getElementById("ganadorRonda");
let ganadorFinal = document.getElementById("ganadorFinal");

adivinaNumero.disabled = true;

iniciarJuego.addEventListener("click", inicioJuego);
adivinaNumero.addEventListener("click", adivinarNumero);

function inicioJuego() {

    console.log("Se inicio el juego");

    if (rondaJuego == 1) {
        document.getElementById("rondaTexto").innerHTML = "Ronda: 01 de 03";
    } else if (rondaJuego == 2) {
        document.getElementById("rondaTexto").innerHTML = "Ronda: 02 de 03";
    } else {
        document.getElementById("rondaTexto").innerHTML = "Ronda: 03 de 03";
    }

    if (turnoJugador == 1) {

        numeroAdivinarJugador2 = prompt("Jugador 2, elija un número del 1 al 10 para que el Jugador 1 pueda adivinar:");
        numeroAdivinarJugador2 = parseInt(numeroAdivinarJugador2);
        adivinaNumero.disabled = false;
        iniciarJuego.disabled = true;

    } else if (turnoJugador == 2) {

        numeroAdivinarJugador1 = prompt("Jugador 1, elija un número del 1 al 10 para que el Jugador 2 pueda adivinar:");
        numeroAdivinarJugador1 = parseInt(numeroAdivinarJugador1);
        adivinaNumero.disabled = false;
        iniciarJuego.disabled = true;

    }



}

function adivinarNumero() {

    if (turnoJugador == 1) {
        numeroAdivinadoJugador1 = prompt("Jugador 1, adivina el número brindado por el Jugador 2:");
        numeroAdivinadoJugador1 = parseInt(numeroAdivinadoJugador1);
        comprobarGanador();
    } else if (turnoJugador == 2) {
        numeroAdivinadoJugador2 = prompt("Jugador 2, adivina el número brindado por el Jugador 1:");
        numeroAdivinadoJugador2 = parseInt(numeroAdivinadoJugador2);
        comprobarGanador();
    }

}

function comprobarGanador() {

    if (turnoJugador == 1) {

        if (numeroAdivinarJugador2 == numeroAdivinadoJugador1) {
            ganadorRonda.innerHTML = "El Jugador 1 ha adivinado, +1 punto";
            contadorPuntajeJ1 = contadorPuntajeJ1 + 1;
        } else {
            ganadorRonda.innerHTML = "El Jugador 1 no ha adivinado";
        }

        segundosRestantes = tiempoVolver;

        temporizador = setInterval(() => {
            segundosRestantes--;
            tiempoRestanteTexto.innerHTML = `El siguiente turno empezará en ${segundosRestantes} segundos`;
            adivinaNumero.disabled = true;

            if (segundosRestantes <= 0) {
                pausarTemporizador();

                if (turnoJugador == 1) {
                    turnoJugador = 2;
                    ganadorRonda.innerHTML = null;
                    tiempoRestanteTexto.innerHTML = null;
                    adivinaNumero.disabled = false;
                    inicioJuego();
                } else {
                    turnoJugador = 1;
                    ganadorRonda.innerHTML = null;
                    tiempoRestanteTexto.innerHTML = null;
                    adivinaNumero.disabled = false;
                    inicioJuego();
                }
            }


        }, 800);


    } else if (turnoJugador == 2) {

        if (numeroAdivinarJugador1 == numeroAdivinadoJugador2) {
            ganadorRonda.innerHTML = "El Jugador 2 ha adivinado, +1 punto";
            contadorPuntajeJ2 = contadorPuntajeJ2 + 1;
        } else {
            ganadorRonda.innerHTML = "El Jugador 2 no ha adivinado";
        }

            if (rondaJuego == 1) {
                rondaJuego = 2;
            } else if (rondaJuego == 2) {
                rondaJuego = 3;
            } else if (rondaJuego == 3) {

                if (contadorPuntajeJ1 == contadorPuntajeJ2){
                    ganadorFinal.innerHTML = "Fue un empate, nadie ha ganado";
                } else if (contadorPuntajeJ1 > contadorPuntajeJ2){
                    ganadorFinal.innerHTML = "El ganador es el Jugador 1";
                } else if (contadorPuntajeJ1 < contadorPuntajeJ2){
                    ganadorFinal.innerHTML = "El ganador es el Jugador 2";
                }              

                pausarTemporizador();
                segundosRestantes = tiempoVolver;

                temporizador = setInterval(() =>{
                    segundosRestantes--;
                    tiempoRestanteTexto.innerHTML = `El juego ha terminado, se volverá a la página principal en ${segundosRestantes} segundos`;
                    adivinaNumero.disabled = false;
                    
                    if(segundosRestantes <=0){
                        pausarTemporizador();
                        location.href = "index.html";
                    }
                }, 800);
            }

            segundosRestantes = tiempoVolver;

            temporizador = setInterval(() => {
                segundosRestantes--;
                tiempoRestanteTexto.innerHTML = `La siguiente ronda empezará en ${segundosRestantes} segundos`;

                if (segundosRestantes <= 0) {
                    pausarTemporizador();

                    if (turnoJugador == 1) {
                        turnoJugador = 2;
                        ganadorRonda.innerHTML = null;
                        tiempoRestanteTexto.innerHTML = null;
                        adivinaNumero.disabled = false;
                        inicioJuego();
                    } else {
                        turnoJugador = 1;
                        ganadorRonda.innerHTML = null;
                        tiempoRestanteTexto.innerHTML = null;
                        adivinaNumero.disabled = false;
                        inicioJuego();
                    }
                }

            }, 800);

    }

}

function pausarTemporizador() {
    clearInterval(temporizador);
    temporizador = null;
}