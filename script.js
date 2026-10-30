let btnAdivinaNumero = document.getElementById("adivina");
let btnPiedraPapelTijera = document.getElementById("piedra");
let resultado = document.getElementById("resultado");
let minijuego;

btnAdivinaNumero.addEventListener("click", adivinaElNumero);
btnPiedraPapelTijera.addEventListener("click", piedraPapeloTijera);

function adivinaElNumero(){
    minijuego = Math.floor(Math.random()*10)+1;

    let numeroJugador = prompt("Elegir un número entre el 1 y el 10");
    document.getElementById("consola").innerHTML = `El número elegido aleatoriamente es: ${minijuego}`;

    if(numeroJugador == minijuego){
        resultado.innerHTML = "Has ganado!";
    } else{
        resultado.innerHTML = "Has perdido";
    }
}

function piedraPapeloTijera(){
    minijuego = ["piedra", "papel", "tijera"];

    let elementoJugador = prompt("Elige un número entre el 1 y el 3, (1 = Piedra), (2 = Papel), (3 = Tijera)");
    console.log(elementoJugador);

    

}



//let resultado = document.getElementById("resultado");
//let minijuego = 0;
//let puntajeJugador1 = 0;
//let puntajeJugador2 = 0;
//let btnadivina = document.getElementById("adivina");

//btnadivina.addEventListener("click", adivinaElNumero);



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

