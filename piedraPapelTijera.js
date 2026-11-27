// Variables

    // Variables de los Botones

        let btnInicioJuego = document.getElementById("btnIniciarJuego");
        let btnPiedra = document.getElementById("btnPiedra");
        let btnPapel = document.getElementById("btnPapel");
        let btnTijera = document.getElementById("btnTijera");
        let btnPiedraJ2 = document.getElementById("btnPiedraJ2");
        let btnPapelJ2 = document.getElementById("btnPapelJ2");
        let btnTijeraJ2 = document.getElementById("btnTijeraJ2");

    // Variables del Temporizador

        const tiempoTurno = 16;   // El temporizador tiene un total de 16 segundos (16000 milisegundos)
        let temporizador = null;
        let segundosRestantes = tiempoTurno;
        let tiempoRestanteTexto = document.getElementById("tiempoRestanteTexto");

    // Variables Extras

        let eleccionJugador1 = 0;
        let eleccionJugador2 = 0;
        let rondaJuego = 1;
        let turnoJugador = 1;
        let contadorPuntajeJ1 = 0;
        let contadorPuntajeJ2 = 0;
        let contadorPuntajeTextoJ1 = document.getElementById("contadorPuntajeTextoJ1");
        let contadorPuntajeTextoJ2 = document.getElementById("contadorPuntajeTextoJ2");
        let juegoTerminado = document.getElementById("juegoTerminado");
        let ganadorFinal = document.getElementById("ganadorFinal");

// Botones

    btnInicioJuego.addEventListener("click", inicioJuego);
    btnPiedra.addEventListener("click", funcionPiedra);
    btnPapel.addEventListener("click", funcionPapel);
    btnTijera.addEventListener("click", funcionTijera);
    btnPiedraJ2.addEventListener("click", funcionPiedra);
    btnPapelJ2.addEventListener("click", funcionPapel);
    btnTijeraJ2.addEventListener("click", funcionTijera);

    btnPiedra.disabled = true;
    btnPapel.disabled = true;
    btnTijera.disabled = true;
    btnPiedraJ2.disabled = true;
    btnPapelJ2.disabled = true;
    btnTijeraJ2.disabled = true;


// Funcion pausarTemporizador

function pausarTemporizador(){
    clearInterval(temporizador);
    temporizador = null;

    if ((turnoJugador == 1) && (eleccionJugador1 == 0)){
        turnoJugador = 2;
        inicioJuego();
    } else if ((turnoJugador == 2) && (eleccionJugador2 == 0)){
        turnoJugador = 1;
        elegirGanador();
    }
}

function inicioJuego(){

    console.log("Se inicio el juego");

    if (rondaJuego == 1){
        document.getElementById("rondaTexto").innerHTML = "Ronda: 01 de 03";
    } else if (rondaJuego == 2){
        document.getElementById("rondaTexto").innerHTML = "Ronda: 02 de 03";
    } else {
        document.getElementById("rondaTexto").innerHTML = "Ronda: 03 de 03";
    }

    if (turnoJugador == 1){

        document.getElementById("turnoJugadorTexto").innerHTML = "Turno del Jugador 1";
        btnPiedra.disabled = false;
        btnPapel.disabled = false;
        btnTijera.disabled = false;
        btnPiedraJ2.disabled = true;
        btnPapelJ2.disabled = true;
        btnTijeraJ2.disabled = true;

        temporizador = setInterval(()=>{ // Duración del turno
            segundosRestantes--; // Se resta un segundo al contador
            tiempoRestanteTexto.innerHTML = `El tiempo restante es: ${segundosRestantes} segundos`;

            if(segundosRestantes <=0){
                pausarTemporizador();
            }
        
        }, 800); // Cada 800 milisegundos se descuenta 1 segundo al contador

    } else if (turnoJugador == 2){

        document.getElementById("turnoJugadorTexto").innerHTML = "Turno del Jugador 2";
        btnPiedraJ2.disabled = false;
        btnPapelJ2.disabled = false;
        btnTijeraJ2.disabled = false;
        btnPiedra.disabled = true;
        btnPapel.disabled = true;
        btnTijera.disabled = true;

        segundosRestantes = tiempoTurno;
    
        temporizador = setInterval(() => {
            segundosRestantes--;
            segundosRestantesTexto.innerHTML = `El tiempo restante es: ${segundosRestantes} segundos`;

            if(segundosRestantes <= 0){
                pausarTemporizador();
            }

        }, 800);

    }

}

function funcionPiedra(){

    if(turnoJugador == 1){

        btnPiedra.disabled = true;
        btnPapel.disabled = true;
        btnTijera.disabled = true;

        eleccionJugador1 = 1;
        pausarTemporizador();
        segundosRestantes = 6;

        temporizador = setInterval(()=>{
            segundosRestantes--;
            segundosRestantesTexto.innerHTML = `El siguiente turno empezará en: ${segundosRestantes} segundos`;
        }, 800);

    } else if (turnoJugador == 2){

        btnPiedraJ2.disabled = true;
        btnPapelJ2.disabled = true;
        btnTijeraJ2.disabled = true;

        eleccionJugador2 = 1;
        pausarTemporizador();
        elegirGanador();

        segundosRestantes = tiempoTurno;

        temporizador = setInterval(() =>{
            segundosRestantes--;
            segundosRestantesTexto.innerHTML = `El tiempo restante es: ${segundosRestantes} segundos`;

             if(segundosRestantes <= 0){
                pausarTemporizador();
            }

        }, 800);

    }


}

function funcionPapel(){

    if(turnoJugador == 1){

        btnPiedra.disabled = true;
        btnPapel.disabled = true;
        btnTijera.disabled = true;

        eleccionJugador1 = 2;
        pausarTemporizador();
        segundosRestantes = 6;

        temporizador = setInterval(()=>{
            segundosRestantes--;
            segundosRestantesTexto.innerHTML = `El siguiente turno empezará en: ${segundosRestantes} segundos`;
        }, 800);

    } else if (turnoJugador == 2){

        btnPiedraJ2.disabled = true;
        btnPapelJ2.disabled = true;
        btnTijeraJ2.disabled = true;

        eleccionJugador2 = 2;
        pausarTemporizador();
        elegirGanador();

        segundosRestantes = tiempoTurno;

        temporizador = setInterval(() =>{
            segundosRestantes--;
            segundosRestantesTexto.innerHTML = `El tiempo restante es: ${segundosRestantes} segundos`;

             if(segundosRestantes <= 0){
                pausarTemporizador();
            }

        }, 800);

    }

}

function funcionTijera(){

    if(turnoJugador == 1){

        btnPiedra.disabled = true;
        btnPapel.disabled = true;
        btnTijera.disabled = true;

        eleccionJugador1 = 3;
        pausarTemporizador();
        segundosRestantes = 6;

        temporizador = setInterval(()=>{
            segundosRestantes--;
            segundosRestantesTexto.innerHTML = `El siguiente turno empezará en: ${segundosRestantes} segundos`;
        }, 800);

    } else if (turnoJugador == 2){

        btnPiedraJ2.disabled = true;
        btnPapelJ2.disabled = true;
        btnTijeraJ2.disabled = true;

        eleccionJugador2 = 3;
        pausarTemporizador();
        elegirGanador();

        segundosRestantes = tiempoTurno;

        temporizador = setInterval(() =>{
            segundosRestantes--;
            segundosRestantesTexto.innerHTML = `El tiempo restante es: ${segundosRestantes} segundos`;

             if(segundosRestantes <= 0){
                pausarTemporizador();
            }

        }, 800);

    }

}

function elegirGanador(){

    pausarTemporizador();

    if(eleccionJugador1 == eleccionJugador2){ // Posibilidad 1: Empate
        ganadorFinal.innerHTML = "No hay ganador, hubo un empate";
        contadorPuntajeJ1 = contadorPuntajeJ1 + 1;

    } else if ((eleccionJugador1 == 1) && (eleccionJugador2 == 3)){ // Posibilidad 2: Piedra vs Tijera (Ganador: Jugador 1)
        ganadorFinal.innerHTML = "El ganador es el Jugador 1";
        contadorPuntajeJ1 = contadorPuntajeJ1 + 1;
        contadorPuntajeTextoJ1.innerHTML = contadorPuntajeJ1;
    } else if ((eleccionJugador1 == 2) && (eleccionJugador2 == 1)){ // Posibilidad 3: Papel vs Piedra (Ganador: Jugador 1)
        ganadorFinal.innerHTML = "El ganador es el Jugador 1";
        contadorPuntajeJ1 = contadorPuntajeJ1 + 1;
        contadorPuntajeTextoJ1.innerHTML = contadorPuntajeJ1;
    } else if ((eleccionJugador1 == 3) && (eleccionJugador2 == 2)){ // Posibilidad 4: Tijera vs Papel (Ganador: Jugador 1)
        ganadorFinal.innerHTML = "El ganador es el Jugador 1";
        contadorPuntajeJ1 = contadorPuntajeJ1 + 1;
        contadorPuntajeTextoJ1.innerHTML = contadorPuntajeJ1;
    } else if (eleccionJugador2 == 0){ // Posibilidad 5: El Jugador 2 no ha elegido (Ganador: Jugador 1)
        ganadorFinal.innerHTML = "El ganador es el Jugador 1";
        contadorPuntajeJ1 = contadorPuntajeJ1 + 1;
        contadorPuntajeTextoJ1.innerHTML = contadorPuntajeJ1;
    } else if ((eleccionJugador1 == 3) && (eleccionJugador2 == 1)){ // Posibilidad 6: Tijera vs Piedra (Ganador: Jugador 2)
        ganadorFinal.innerHTML = "El ganador es el Jugador 2";
        contadorPuntajeJ2 = contadorPuntajeJ2 + 1;
        contadorPuntajeTextoJ2.innerHTML = contadorPuntajeJ2;
    } else if ((eleccionJugador1 == 1) && (eleccionJugador2 == 2)){ // Posibilidad 7: Piedra vs Papel (Ganador: Jugador 2)
        ganadorFinal.innerHTML = "El ganador es el Jugador 2";
        contadorPuntajeJ2 = contadorPuntajeJ2 + 1;
        contadorPuntajeTextoJ2.innerHTML = contadorPuntajeJ2;
    } else if ((eleccionJugador1 == 2) && (eleccionJugador2 == 3)){ // Posibilidad 8: Papel vs Tijera (Ganador: Jugador 2)
        ganadorFinal.innerHTML = "El ganador es el Jugador 2";
        contadorPuntajeJ2 = contadorPuntajeJ2 + 1;
        contadorPuntajeTextoJ2.innerHTML = contadorPuntajeJ2;
    } else if (eleccionJugador1 == 0){ // Posibilidad 9: El jugador 1 no ha elegido (Ganador: Jugador 2)
        ganadorFinal.innerHTML = "El ganador es el Jugador 2";
        contadorPuntajeJ2 = contadorPuntajeJ2 + 1;
        contadorPuntajeTextoJ2.innerHTML = contadorPuntajeJ2;
    }

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

}