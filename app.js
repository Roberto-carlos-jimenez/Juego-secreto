let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elementos, texto){
    let elemHTML = document.querySelector(elementos);
    elemHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);


    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // si el usuario acierta.
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor.');
        } else {
            asignarTextoElemento( 'p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarBok();
    }

    return;
    
}

//funcion que limpie
function limpiarBok(){
    document.querySelector('#valorUsuario').value = '';
}

//Trabaja mediante el boton que es la funcion tomando el valor del input
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluido en lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto; // recursividad, si el numero se encuentra en el array se llama a si misma para generar un nuevo numero.
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

//Funcion de los mensajes principales
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Inserta un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

//Funcion para limpiar caja y reiniciar el juego
function reiniciarJuego(){
    //limpiar caja
    limpiarBok();
    //Indicar mensaje principal
    condicionesIniciales();
    //Generar el numero aleatorio  
    //Inicializar el numero de intentos
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();