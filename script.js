let minijuego = 0;
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

function elegirMinijuego(){
    minijuego = Math.random(Math.floor()*2)+1;

    if(minijuego == 1){
        piedraPapeloTijera();
    } else{
        adivinaElNumero();
    }
}

function piedraPapeloTijera(){
    
}

function adivinaElNumero(){
    minijuego = Math.random(Math.floor()*10)+1;

    let numeroJugador1 = prompt("Ingresa un número del 1 al 10:");
    let numeroJugador2 = prompt("Ingresa un número del 1 al 10:");

    if (numeroJugador == minijuego){
        puntaje1 + 1;
    }

}