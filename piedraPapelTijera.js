let minijuego;
let turno = 1;
let ronda = 1;
let eleccionMaquina = document.getElementById("maquina");
let resultado = document.getElementById("resultado");
let btnPiedra = document.getElementById("piedra");
let btnPapel = document.getElementById("papel");
let btnTijera = document.getElementById("tijera");
let contadorJugador1 = 0;
let contadorJugador2 = 0;
let eleccionJugador1;
let eleccionJugador2;

console.log(turno);

// Se establece la Ronda 1

    btnPiedra.addEventListener("click", piedra);
    btnPapel.addEventListener("click", papel);
    btnTijera.addEventListener("click", tijera);

    if (ronda == 1){

        if(turno == 1){
            console.log(turno);
            if(contadorJugador1 == 0){
                console.log(turno);
            }
        }

        } else if (turno == 2){
            btnPiedra.style.visibility = `visible`;
            ronda = 2;
            turno = 1;
        }

     else if (ronda == 2){
        if (turno == 1){
            turno = 2;
        } else if (turno == 2){
            ronda = 3;
            turno = 1;
        }
    } else{
        if (turno == 1){
            turno = 2;
        } else if (turno == 2){
            elegirGanador();
        }
    }


    
    if(contadorJugador1 == 3){
        turno = 2;
        console.log("Turno del Jugador 2");
    }

    else if (turno == 2){

        resultado.innerHTML = "turno 2";

        btnPiedra.addEventListener("click", piedra);
        btnPapel.addEventListener("click", papel);
        btnTijera.addEventListener("click", tijera);

    }

function elegirGanador(){

    if(eleccionJugador1 == eleccionJugador2){
        resultado.innerHTML = "Empate";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // usen esto sleep(5000); si no anda me avisan


function piedra(){

    //if (turno == 1){
      //  if (contadorJugador1 == 3){
        //    turno = 2;
          //  console.log (turno);
        //} else {
          //  contadorJugador1 = contadorJugador1 + 1;
        //}
    //}

    //if (turno == 2){
      //  if(contadorJugador2 == 3){
        //    elegirGanador();
        //} else {
         //   contadorJugador2 = contadorJugador2 + 1;
       // }
    //}

    contadorJugador1 = contadorJugador1 + 1;

    if (contadorJugador1 == 1){
        btnPiedra.style.display = `none`;
        turno = 2;    
    }

    contadorJugador2 = contadorJugador2 + 1;

    console.log("Jugador 1 es: " + contadorJugador1);
    console.log("Jugador 2 es: " + contadorJugador2);
}

//function papel(){

  //  if(contadorJugador1 == 1){
    //    let jugador1Turno1 = 2;
   // } else if (contadorJugador2 == 2){
     //   let jugador1Turno2 = 2;
    //} else{
     //   let jugador1Turno3 = 2;
   // }

    //if(contadorJugador2 == 1){
        //let jugador2Turno1 = 2;
    //} else if (contadorJugador2 == 2){
        //let jugador2Turno2 = 2;
    //} else if (contadorJugador2 == 3){
        //let jugador2Turno3 = 2;
    //}

    //if (turno == 1){
      //  if (contadorJugador1 == 3){
            //turno = 2;
            //console.log (turno);
        //} else {
            //contadorJugador1 = contadorJugador1 + 1;
        //}
    //}

    //if (turno == 2){
        //if(contadorJugador2 == 3){
            //elegirGanador();
        //} else {
            //contadorJugador2 = contadorJugador2 + 1;
        //}
    //}

    //console.log("Jugador 1 es: " + contadorJugador1);
    //console.log("Jugador 2 es: " + contadorJugador2);
//}

//function tijera(){

    //if(contadorJugador1 == 1){
      //  let jugador1Turno1 = 3;
    //} else if (contadorJugador2 == 2){
        //let jugador1Turno2 = 3;
    //} else{
        //let jugador1Turno3 = 3;
    //}

    //if(contadorJugador2 == 1){
        //let jugador2Turno1 = 3;
//    } else if (contadorJugador2 == 2){
  //      let jugador2Turno2 = 3;
    //} else if (contadorJugador2 == 3){
      //  let jugador2Turno3 = 3;
    //}

    //contadorJugador1 = contadorJugador1 + 1;
    //contadorJugador2 = contadorJugador2 + 1;
    
//    console.log("Jugador 1 es: " + contadorJugador1);
  //  console.log("Jugador 2 es: " + contadorJugador2);
//}