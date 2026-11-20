const tiempoTurno = 16;   // El temporizador tiene un total de 16 segundos (16000 milisegundos)
let temporizador = null;
let segundosRestantes = tiempoTurno;
let minijuego;
let turno = 1;
let ronda = document.getElementById("ronda");

// Botones de Piedra, Papel o Tijera

let btnPiedra = document.getElementById("piedra");
let btnPapel = document.getElementById("papel");
let btnTijera = document.getElementById("tijera");
let btnPiedraJ2 = document.getElementById("piedraJ2");
let btnPapelJ2 = document.getElementById("papelJ2");
let btnTijeraJ3 = document.getElementById("tijeraJ3");


let turnoJugadorTexto = document.getElementById("turnoJugador");
let segundosRestantesTexto = document.getElementById("segundosRestantes");
let eleccionJugador1;
let eleccionJugador2;
let btnIniciojuego = document.getElementById("inicioJuego");

let resultado = document.getElementById("resultado");


let contadorJugador1 = 0;
let contadorJugador2 = 0;


btnIniciojuego.addEventListener("click", iniciarJuego);

function iniciarJuego(){

    for(let i=1;i<=6;i++){

    if(turno == 1){
        funcionPiedraJ1();
        funcionPapelJ1();
        funcionTijeraJ1();        

        temporizador = setInterval(() => {
            segundosRestantes --; // Le empieza a restar de uno en uno al reloj (el tiempo)
            segundosRestantesTexto.innerHTML = `El tiempo restante para terminar el turno es: ${segundosRestantes}`;
            if(segundosRestantes <= 0){
                pausarTemporizador(); // Función que sirve para detener la cuenta regresiva y finalizar el turno del jugador
            }
        }, 800); // El temporizador tiene un total de 15 segundos (15000 milisegundos)

        turno = 2;

    } else if (turno == 2){
        funcionPiedraJ2();
        funcionPapelJ2();
        funcionTijeraJ2();

        temporizador = setInterval(() => {
            segundosRestantes --; // Le empieza a restar de uno en uno al reloj (el tiempo)
            segundosRestantesTexto.innerHTML = `El tiempo restante para terminar el turno es: ${segundosRestantes}`;
            if(segundosRestantes <= 0){
                pausarTemporizador(); // Función que sirve para detener la cuenta regresiva y finalizar el turno del jugador
            }
        }, 800); // El temporizador tiene un total de 15 segundos (15000 milisegundos)

        turno = 1;

        elegirGanador();
    }
    }

}

function elegirGanador(){

    if(eleccionJugador1 == eleccionJugador2){
        document.getElementById("resultado")
    }

}

function pausarTemporizador(){
    clearInterval(temporizador); // Se corta el temporizador
    temporizador = null; // Con esto, el reloj se detiene y para la cuenta regresiva
    segundosRestantes = tiempoTurno;
}


console.log(turno);

// Se establece la Ronda 1

    btnPiedra.addEventListener("click", funcionPiedraJ1);
    btnPapel.addEventListener("click", funcionPapel);
    btnTijera.addEventListener("click", funcionTijera);

// Botones Piedra

function funcionPiedraJ1(){ // Si el Jugador 1 elige el botón Piedra.

    eleccionJugador1 = 1;
    
}

function funcionPiedraJ2(){ // Si el Jugador 2 elige el botón Piedra.

    eleccionJugador2 = 1;

}

// Botones Papel

function funcionPapelJ1(){ // Si el Jugador 1 elige el botón Papel.

    eleccionJugador1 = 2;

}

function funcionPapelJ2(){ // Si el Jugador 2 elige el botón Papel.

    eleccionJugador2 = 2;

}

// Botones Tijera

function funcionTijeraJ1(){ // Si el Jugador 1 elige el botón Tijera.

    eleccionJugador1 = 3;

}

function funcionTijeraJ2(){ // Si el Jugador 2 elige el botón Tijera.

    eleccionJugador2 = 3;

}


    function funcionPiedra(){

      //  if (turno == 1){
        //    eleccionJugador1 = 1;
          //  turno = 2;
       // } else if (turno == 2){
         //   eleccionJugador2 = 1;
           // turno = 1;
            //calcularGanador();
       // }

    }

    function funcionPapel(){

        //if (turno == 1){
          //  eleccionJugador1 = 2;
            //turno = 2;
        //} else if (turno == 2){
          //  eleccionJugador2 = 2;
            //turno = 1;
        //}
        
    }

    function funcionTijera(){

        //if (turno == 1){
          //  eleccionJugador1 = 3;
            //turno = 2;
        //} else if (turno == 2){
          //  eleccionJugador2 = 3;
            //turno = 1;
        //}

    }

    //function calcularGanador(){



//}



//function sleep(ms) {
  //  return new Promise(resolve => setTimeout(resolve, ms));
//} // usen esto sleep(5000); si no anda me avisan

