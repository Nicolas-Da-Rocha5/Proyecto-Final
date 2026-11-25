// Variables

    // Variables de los Botones

        let btnIniciojuego = document.getElementById("btnIniciarJuego");
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
        let contadorJugador1 = 0;
        let contadorJugador2 = 0;

// Botones

    btnIniciojuego.addEventListener("click", inicioJuego);
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
            segundosRestantesTexto = `El tiempo restante es: ${segundosRestantes} segundos`;

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
            segundosRestantesTexto = `El siguiente turno empezará en: ${segundosRestantes} segundos`;
        }, 800);

    } else if (turnoJugador == 2){

        btnPiedraJ2.disabled = true;
        btnPapelJ2.disabled = true;
        btnTijeraJ2.disabled = true;

        eleccionJugador2 = 1;
        pausarTemporizador();

        segundosRestantes = tiempoTurno;

        temporizador = setInterval(() =>{
            segundosRestantes--;
            segundosRestantesTexto = `El tiempo restante es: ${segundosRestantes} segundos`;

             if(segundosRestantes <= 0){
                pausarTemporizador();
            }

        }, 800);

    }


}