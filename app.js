
let numeroSecreto = 0;
let intentos = 0;  
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el número secreto en el ${intentos} intento`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        // el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    let valorCaja = document.getElementById('valorUsuario').value = '';
    
}
function generarNumeroSecreto() {
    let numeroGenerado =   Math.floor(Math.random()*numeroMaximo)+1;
    // Si el numero generado esta incluido en la lista, hacemos 
    //operación 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }     
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar msj de intervalos de numeros
   condicionesIniciales();    
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}
condicionesIniciales();