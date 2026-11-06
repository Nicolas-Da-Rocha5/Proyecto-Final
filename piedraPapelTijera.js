let minijuego;
let turno = 1;
let eleccionMaquina = document.getElementById("maquina");
let resultado = document.getElementById("resultado");
let btnPiedra = document.getElementById("piedra");
let btnPapel = document.getElementById("papel");
let btnTijera = document.getElementById("tijera");

if(turno == 1){

    btnPiedra.addEventListener("click", piedra);
    btnPapel.addEventListener("click", papel);
    btnTijera.addEventListener("click", tijera);

    let eleccionJugador1;

    function piedra(){
        eleccionJugador1 = 1;
    }

    function papel(){
        eleccionJugador1 = 2;
    }

    function tijera(){
        eleccionJugador1 = 3;
    }

    turno = 2;

} else if (turno == 2){


    btnPiedra.addEventListener("click", piedra);
    btnPapel.addEventListener("click", papel);
    btnTijera.addEventListener("click", tijera);

    let eleccionJugador2;

    function piedra(){
        eleccionJugador2 = 1;
    }

    function papel(){
        eleccionJugador2 = 2;
    }

    function tijera(){
        eleccionJugador2 = 3;
    }

    elegirGanador();

}

function elegirGanador(){

    if(eleccionJugador1 == eleccionJugador2){
        resultado.innerHTML = "Empate";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // usen esto sleep(5000); si no anda me avisan




console.log(minijuego);

function piedra(){

    minijuego = Math.floor(Math.random()*3)+1;

    if(minijuego == 1){
        resultado.innerHTML = "Empate";
        eleccionMaquina.innerHTML = `La elección de la máquina fue: Piedra`;
    } else if (minijuego == 2){
        resultado.innerHTML = "Perdiste";
        eleccionMaquina.innerHTML = `La elección de la máquina fue: Papel`;
    } else{
        resultado.innerHTML = "Ganaste";
        eleccionMaquina.innerHTML = `La elección de la máquina fue: Tijera`;
    }

}

function papel(){

    minijuego = Math.floor(Math.random()*3)+1;

    if(minijuego == 1){
        resultado.innerHTML = "Ganaste";
        eleccionMaquina.innerHTML = `La elección de la máquina fue: Piedra`;
    } else if (minijuego == 2){
        resultado.innerHTML = "Empate";
        eleccionMaquina.innerHTML = `La elección de la máquina fue: Papel`;
    } else{
        resultado.innerHTML = "Perdiste";
        eleccionMaquina.innerHTML = `La elección de la máquina fue: Tijera`;
    }
}

function tijera(){

    minijuego = Math.floor(Math.random()*3)+1;

    if(minijuego == 1){
        resultado.innerHTML = "Perdiste";
        eleccionMaquina.innerHTML = `La elección de la máquina fue: Piedra`;
    } else if (minijuego == 2){
        resultado.innerHTML = "Ganaste";
        eleccionMaquina.innerHTML = `La elección de la máquina fue: Papel`;
    } else{
        resultado.innerHTML = "Empate";
        eleccionMaquina.innerHTML = `La elección de la máquina fue: Tijera`;
    }
}